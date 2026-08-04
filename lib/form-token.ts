import { createHmac, timingSafeEqual, randomBytes } from "node:crypto";

// ── Signed form tokens (self-hosted bot check) ───────────────────────────────
// The contact page fetches one of these from /api/contact-token on mount and
// hands it back with the submission. /api/contact rejects anything without a
// valid signature.
//
// What this buys: a script that blindly POSTs to /api/contact — the dominant
// contact-form spam pattern — has no token and cannot forge one without the
// secret, so it never reaches the mail step. What it does NOT buy: a bot that
// actually renders the page fetches a token like any visitor. That is the
// trade for having no third-party dependency.
//
// Tokens are deliberately not bound to an IP. Binding would stop one harvested
// token being replayed across a botnet, but it would also reject a genuine
// visitor whose phone switches from wi-fi to cellular mid-form. The per-IP rate
// limit in the contact route already caps how much a replayed token is worth,
// and not losing leads is the priority here.

const TOKEN_TTL_MS = 30 * 60 * 1000;
// Vercel lambdas and the visitor's clock can disagree slightly; tolerate a
// little without accepting a token minted far in the future.
const CLOCK_SKEW_MS = 60 * 1000;

function getSecret(): string | null {
  const secret = process.env.CONTACT_TOKEN_SECRET;
  return secret && secret.length > 0 ? secret : null;
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

/** Returns null when CONTACT_TOKEN_SECRET is unset, so local dev works unconfigured. */
export function issueFormToken(): string | null {
  const secret = getSecret();
  if (!secret) return null;

  // The nonce only makes tokens distinct; the timestamp is what's enforced.
  const payload = `${Date.now()}.${randomBytes(9).toString("base64url")}`;
  return `${payload}.${sign(payload, secret)}`;
}

export type FormTokenResult =
  /** ageMs is a server-clock measure of how long the form was open — unlike a
   *  client-reported duration, the visitor cannot fake it. */
  | { status: "valid"; ageMs: number }
  | { status: "invalid" }
  | { status: "expired" }
  /** No secret configured. Callers must NOT block on this — flag instead. */
  | { status: "unavailable" };

export function verifyFormToken(token: unknown): FormTokenResult {
  const secret = getSecret();
  if (!secret) {
    console.error("[form-token] CONTACT_TOKEN_SECRET missing — skipping verification");
    return { status: "unavailable" };
  }

  if (typeof token !== "string" || token.length === 0 || token.length > 256) {
    return { status: "invalid" };
  }

  const parts = token.split(".");
  if (parts.length !== 3) return { status: "invalid" };

  const [issuedAtRaw, nonce, sig] = parts;
  const expected = sign(`${issuedAtRaw}.${nonce}`, secret);

  // Constant-time compare. timingSafeEqual throws on length mismatch, so the
  // lengths are checked first.
  const provided = Buffer.from(sig);
  const computed = Buffer.from(expected);
  if (provided.length !== computed.length || !timingSafeEqual(provided, computed)) {
    return { status: "invalid" };
  }

  const issuedAt = Number(issuedAtRaw);
  if (!Number.isFinite(issuedAt)) return { status: "invalid" };

  const ageMs = Date.now() - issuedAt;
  // Minted in the future beyond tolerable skew — a tampered timestamp.
  if (ageMs < -CLOCK_SKEW_MS) return { status: "invalid" };
  // Distinguished from "invalid" so a visitor who left the tab open overnight
  // gets a fresh token and a retry rather than a dead form.
  if (ageMs > TOKEN_TTL_MS) return { status: "expired" };

  return { status: "valid", ageMs: Math.max(0, ageMs) };
}
