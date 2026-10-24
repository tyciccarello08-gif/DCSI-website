import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyFormToken } from "@/lib/form-token";

// ── Resend client (server-side only) ─────────────────────────────────────────
// Built lazily: `new Resend(undefined)` throws, and at module scope that would
// crash the whole route at import time (and break `next build`) instead of
// failing one request with a loggable error.
function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

// ── Rate limiting (in-memory, per function instance) ─────────────────────────
// Limits each IP to 3 submissions per 10-minute window.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT) return true;

  record.count += 1;
  return false;
}

// ── Input validation constants ────────────────────────────────────────────────
const ALLOWED_SERVICES = new Set([
  "Security Systems & Monitoring",
  "Monitoring Takeover (Existing System)",
  "Commercial Security",
  "Camera Systems (CCTV)",
  "New Construction Low Voltage",
  "Home Theater",
  "Flat Panel TV Installation",
  "Access Control / Intercom",
  "Other",
]);

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[\d\s\-().+]{7,20}$/;

// ── HTML escaping to prevent XSS in email templates ──────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── Spam heuristics ───────────────────────────────────────────────────────────
// These produce *flags*, never rejections. A flagged submission is still
// delivered, with a [POSSIBLE SPAM] subject prefix and a reasons block, so a
// false positive costs the owner a glance rather than a lead.
const MIN_FILL_MS = 3000;
const MAX_LINKS = 2;
// Two variants so the global one's `lastIndex` state can never leak into a
// `.test()` call: `countLinks` uses the global form, `hasLink` the plain one.
const LINK_REGEX_GLOBAL = /(https?:\/\/|www\.)/gi;
const LINK_REGEX = /(https?:\/\/|www\.)/i;
const SPAM_KEYWORDS = [
  "backlink",
  "guest post",
  "seo services",
  "rank your website",
  "crypto",
  "bitcoin",
  "casino",
  "viagra",
  "payday loan",
];

function buildSpamFlags(
  name: string,
  phone: string,
  message: string | null,
  fillMs: number | null,
  botCheckUnavailable: boolean
): string[] {
  const flags: string[] = [];

  if (botCheckUnavailable) {
    flags.push("bot check unavailable (CONTACT_TOKEN_SECRET not configured)");
  }

  if (fillMs !== null && fillMs < MIN_FILL_MS) {
    flags.push(`submitted in ${(fillMs / 1000).toFixed(1)}s`);
  }

  if (message) {
    const linkCount = message.match(LINK_REGEX_GLOBAL)?.length ?? 0;
    if (linkCount > MAX_LINKS) {
      flags.push(`${linkCount} links in message`);
    }
    const haystack = message.toLowerCase();
    for (const keyword of SPAM_KEYWORDS) {
      if (haystack.includes(keyword)) {
        flags.push(`spam keyword: ${keyword}`);
      }
    }
  }

  // Bots routinely stuff URLs into fields that should never hold one.
  if (LINK_REGEX.test(name)) flags.push("URL in name field");
  if (LINK_REGEX.test(phone)) flags.push("URL in phone field");

  return flags;
}

// ── Validation helper ─────────────────────────────────────────────────────────
function validateFields(
  name: unknown,
  phone: unknown,
  email: unknown,
  service: unknown,
  message: unknown
): string | null {
  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
    return "Name must be between 2 and 100 characters.";
  }
  if (typeof phone !== "string" || !PHONE_REGEX.test(phone.trim())) {
    return "Phone number is invalid.";
  }
  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return "Email address is invalid.";
  }
  if (service !== undefined && service !== null && service !== "") {
    if (typeof service !== "string" || !ALLOWED_SERVICES.has(service)) {
      return "Invalid service selection.";
    }
  }
  if (message !== undefined && message !== null && message !== "") {
    if (typeof message !== "string" || message.length > 2000) {
      return "Message must be 2000 characters or fewer.";
    }
  }
  return null;
}

// ── POST handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Content-Type guard
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type." }, { status: 415 });
  }

  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes before trying again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, service, message, company, elapsedMs, formToken } =
    body as Record<string, unknown>;

  // ── Honeypot ────────────────────────────────────────────────────────────────
  // `company` is an off-screen, aria-hidden, tabindex="-1" input. A human can
  // neither see nor tab to it, so any value means a bot filled the form blind.
  // Answer 200 with no email: the bot books a success and moves on instead of
  // retrying with a different payload.
  if (typeof company === "string" && company.trim().length > 0) {
    console.warn("[contact] Honeypot triggered from", ip);
    return NextResponse.json({ success: true });
  }

  // Validate all fields
  const validationError = validateFields(name, phone, email, service, message);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  // ── Signed-token bot check ──────────────────────────────────────────────────
  // The one hard block in this route. A token is only obtainable by GETting
  // /api/contact-token, so a script POSTing straight here has nothing to send
  // and cannot forge one without CONTACT_TOKEN_SECRET.
  const tokenResult = verifyFormToken(formToken);

  if (tokenResult.status === "invalid") {
    console.warn("[contact] Rejected submission with missing/invalid token from", ip);
    return NextResponse.json(
      { error: "Verification failed. Please refresh the page and try again." },
      { status: 403 }
    );
  }

  // Expired is called out separately so the form can silently fetch a fresh
  // token and resubmit — a visitor who left the tab open must not lose their
  // message.
  if (tokenResult.status === "expired") {
    return NextResponse.json(
      {
        error: "This form was open too long. Please try again.",
        code: "token_expired",
      },
      { status: 403 }
    );
  }

  // Sanitize for use in DB and emails
  const safeName = (name as string).trim();
  const safePhone = (phone as string).trim();
  const safeEmail = (email as string).trim().toLowerCase();
  const safeService = service && typeof service === "string" ? service : null;
  const safeMessage = message && typeof message === "string" ? message.trim() : null;

  // How long the form was open. The token's age comes off the server clock and
  // can't be faked, so prefer it; the client-reported value is only a fallback
  // for when no token could be verified.
  const fillMs =
    tokenResult.status === "valid"
      ? tokenResult.ageMs
      : typeof elapsedMs === "number" && Number.isFinite(elapsedMs) && elapsedMs >= 0
        ? elapsedMs
        : null;

  // Soft signals — these never block, they only annotate the email.
  const spamFlags = buildSpamFlags(
    safeName,
    safePhone,
    safeMessage,
    fillMs,
    tokenResult.status === "unavailable"
  );
  const isFlagged = spamFlags.length > 0;
  if (isFlagged) {
    console.warn("[contact] Flagged submission from", ip, "-", spamFlags.join("; "));
  }

  // Escaped values for HTML emails
  const eName = escapeHtml(safeName);
  const ePhone = escapeHtml(safePhone);
  const eEmail = escapeHtml(safeEmail);
  const eService = safeService ? escapeHtml(safeService) : "Not specified";
  const eMessage = safeMessage ? escapeHtml(safeMessage) : null;

  // Phone digits only for tel: href
  const phoneDigits = safePhone.replace(/\D/g, "");

  // ── Notify DCSI ─────────────────────────────────────────────────────────────
  // This email IS the submission — there is no database behind it, so a failure
  // here loses the lead and must be surfaced to the visitor.
  //
  // resend.emails.send() resolves with { error } on API failures rather than
  // throwing — it only throws on network faults, so both must be handled.
  const resend = getResend();
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!resend || !notificationEmail) {
    console.error(
      "[contact] Misconfigured:",
      !resend ? "RESEND_API_KEY missing" : "NOTIFICATION_EMAIL missing"
    );
    return NextResponse.json(
      { error: "Failed to send your message. Please call us at (813) 949-6500." },
      { status: 500 }
    );
  }

  let emailOk = false;
  try {
    const { error: notifyError } = await resend.emails.send({
      from: "DCSI Website <info@dcsisecurity.com>",
      to: notificationEmail,
      subject: isFlagged
        ? `[POSSIBLE SPAM] New Contact Form Submission`
        : `New Contact Form Submission`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0E1A; color: #F9FAFB; border-radius: 12px;">
          <h2 style="color: #DC2626; font-size: 20px; margin-bottom: 24px;">New Contact Form Submission</h2>
          ${
            isFlagged
              ? `<div style="margin-bottom: 24px; padding: 16px; background: #2A2010; border-radius: 8px; border-left: 3px solid #F59E0B;">
                   <p style="color: #F59E0B; font-size: 13px; font-weight: 600; margin: 0 0 8px;">Possible spam &mdash; delivered anyway so you can decide</p>
                   <ul style="color: #D1D5DB; font-size: 13px; margin: 0; padding-left: 18px; line-height: 1.6;">
                     ${spamFlags.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
                   </ul>
                 </div>`
              : ""
          }
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 13px; width: 120px;">Name</td><td style="padding: 8px 0; font-size: 14px; color: #EF4444;">${eName}</td></tr>
            <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-size: 14px;"><a href="tel:${phoneDigits}" style="color: #EF4444;">${ePhone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${eEmail}" style="color: #EF4444;">${eEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 13px;">Service</td><td style="padding: 8px 0; font-size: 14px; color: #EF4444;">${eService}</td></tr>
          </table>
          ${eMessage ? `<div style="margin-top: 16px; padding: 16px; background: #1A2235; border-radius: 8px; border-left: 3px solid #DC2626;"><p style="color: #9CA3AF; font-size: 12px; margin: 0 0 8px;">Message</p><p style="font-size: 14px; margin: 0; line-height: 1.6; color: #EF4444;">${eMessage}</p></div>` : ""}
        </div>
      `,
    });
    if (notifyError) {
      console.error("[contact] Notification email rejected:", notifyError);
    } else {
      emailOk = true;
    }
  } catch (emailErr) {
    console.error("[contact] Notification email threw:", emailErr);
  }

  // ── Confirmation to submitter (cosmetic — never fails the request) ──────────
  // Skipped for flagged submissions: those addresses are often harvested or
  // forged, and auto-replying to them is backscatter that would put the
  // sending domain's Resend reputation at risk.
  if (!isFlagged) {
    try {
      const { error: confirmError } = await resend.emails.send({
        from: "DCSI Inc. Security & Sound <info@dcsisecurity.com>",
        to: safeEmail,
        subject: "We received your message — DCSI Inc.",
        html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0E1A; color: #F9FAFB; border-radius: 12px;">
          <h2 style="color: #DC2626; font-size: 20px; margin-bottom: 16px;">Thanks for reaching out, ${eName}!</h2>
          <p style="color: #9CA3AF; font-size: 14px; line-height: 1.7;">We&apos;ve received your message and will be in touch as soon as possible. If you need immediate assistance, please call us directly:</p>
          <a href="tel:8139496500" style="display: inline-block; margin: 16px 0; background: #DC2626; color: white; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none;">(813) 949-6500</a>
          <p style="color: #9CA3AF; font-size: 13px; margin-top: 24px;">— The DCSI, Inc. Team<br />Security &amp; Sound | Lutz, FL</p>
        </div>
      `,
      });
      if (confirmError) {
        console.error("[contact] Confirmation email rejected:", confirmError);
      }
    } catch (emailErr) {
      console.error("[contact] Confirmation email threw:", emailErr);
    }
  }

  // If the notification never went out, the lead is gone — tell the visitor
  // rather than showing a false "Message Sent!".
  if (!emailOk) {
    return NextResponse.json(
      { error: "Failed to send your message. Please call us at (813) 949-6500." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
