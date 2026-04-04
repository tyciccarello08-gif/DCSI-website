import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// ── Supabase & Resend clients (server-side only) ─────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const { name, phone, email, service, message } = body as Record<string, unknown>;

  // Validate all fields
  const validationError = validateFields(name, phone, email, service, message);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  // Sanitize for use in DB and emails
  const safeName = (name as string).trim();
  const safePhone = (phone as string).trim();
  const safeEmail = (email as string).trim().toLowerCase();
  const safeService = service && typeof service === "string" ? service : null;
  const safeMessage = message && typeof message === "string" ? message.trim() : null;

  // Escaped values for HTML emails
  const eName = escapeHtml(safeName);
  const ePhone = escapeHtml(safePhone);
  const eEmail = escapeHtml(safeEmail);
  const eService = safeService ? escapeHtml(safeService) : "Not specified";
  const eMessage = safeMessage ? escapeHtml(safeMessage) : null;

  // Phone digits only for tel: href
  const phoneDigits = safePhone.replace(/\D/g, "");

  // ── Save to Supabase ────────────────────────────────────────────────────────
  const { error: dbError } = await supabase.from("contact_submissions").insert([
    {
      name: safeName,
      phone: safePhone,
      email: safeEmail,
      service: safeService,
      message: safeMessage,
    },
  ]);

  if (dbError) {
    console.error("[contact] Supabase insert failed:", dbError?.code ?? dbError?.message ?? "unknown");
    // Return error — don't send emails if we couldn't record the submission
    return NextResponse.json({ error: "Failed to save submission. Please try again." }, { status: 500 });
  }

  // ── Send emails ─────────────────────────────────────────────────────────────
  try {
    // Notification to DCSI
    await resend.emails.send({
      from: "DCSI Website <info@dcsisecurity.com>",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New Contact Form Submission`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0E1A; color: #F9FAFB; border-radius: 12px;">
          <h2 style="color: #DC2626; font-size: 20px; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 13px; width: 120px;">Name</td><td style="padding: 8px 0; font-size: 14px;">${eName}</td></tr>
            <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-size: 14px;"><a href="tel:${phoneDigits}" style="color: #EF4444;">${ePhone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${eEmail}" style="color: #EF4444;">${eEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 13px;">Service</td><td style="padding: 8px 0; font-size: 14px;">${eService}</td></tr>
          </table>
          ${eMessage ? `<div style="margin-top: 16px; padding: 16px; background: #1A2235; border-radius: 8px; border-left: 3px solid #DC2626;"><p style="color: #9CA3AF; font-size: 12px; margin: 0 0 8px;">Message</p><p style="font-size: 14px; margin: 0; line-height: 1.6;">${eMessage}</p></div>` : ""}
        </div>
      `,
    });

    // Confirmation to submitter
    await resend.emails.send({
      from: "DCSI Inc. Security & Sound <info@dcsisecurity.com>",
      to: safeEmail,
      subject: "We received your message — DCSI Inc.",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0E1A; color: #F9FAFB; border-radius: 12px;">
          <h2 style="color: #DC2626; font-size: 20px; margin-bottom: 16px;">Thanks for reaching out, ${eName}!</h2>
          <p style="color: #9CA3AF; font-size: 14px; line-height: 1.7;">We&apos;ve received your message and will be in touch shortly. If you need immediate assistance, please call us directly:</p>
          <a href="tel:8663909686" style="display: inline-block; margin: 16px 0; background: #DC2626; color: white; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none;">(866) 390-9686</a>
          <p style="color: #9CA3AF; font-size: 13px; margin-top: 24px;">— The DCSI, Inc. Team<br />Security &amp; Sound | Lutz, FL</p>
        </div>
      `,
    });
  } catch (emailErr) {
    // Submission is saved — log email failure but don't surface to user
    console.error("[contact] Email send failed:", emailErr instanceof Error ? emailErr.message : "unknown");
  }

  return NextResponse.json({ success: true });
}
