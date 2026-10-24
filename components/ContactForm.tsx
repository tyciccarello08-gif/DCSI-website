"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const SERVICES = [
  "Security Systems & Monitoring",
  "Monitoring Takeover (Existing System)",
  "Commercial Security",
  "Camera Systems (CCTV)",
  "New Construction Low Voltage",
  "Home Theater",
  "Flat Panel TV Installation",
  "Access Control / Intercom",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  /** Honeypot — hidden from humans, so any value means a bot filled it. */
  company: string;
}

const GENERIC_ERROR =
  "Something went wrong. Please try again or call us directly at (813) 949-6500.";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState(GENERIC_ERROR);

  // ── Signed form token ───────────────────────────────────────────────────────
  // Proves this submission came from a browser that actually loaded the page.
  // Fetched on mount so its server-side age also tells the API how long the
  // form was open.
  const tokenRef = useRef<string | null>(null);

  const fetchToken = useCallback(async (): Promise<string | null> => {
    try {
      const res = await fetch("/api/contact-token", { cache: "no-store" });
      if (!res.ok) return null;
      const data = await res.json();
      tokenRef.current = typeof data.token === "string" ? data.token : null;
    } catch {
      // Non-fatal: the API flags an unverifiable submission rather than
      // rejecting it, so the visitor still gets through.
      tokenRef.current = null;
    }
    return tokenRef.current;
  }, []);

  useEffect(() => {
    void fetchToken();
  }, [fetchToken]);

  // Client-side fallback timer, used by the API only when no token could be
  // verified. Spoofable, which is why it can only ever produce a flag.
  const mountedAt = useRef(Date.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const postSubmission = (data: FormData, formToken: string | null) =>
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        formToken,
        elapsedMs: Date.now() - mountedAt.current,
      }),
    });

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    try {
      // The mount-time fetch may still be in flight, or may have failed.
      const activeToken = tokenRef.current ?? (await fetchToken());

      let res = await postSubmission(data, activeToken);
      let body = await res.json().catch(() => null);

      // The tab was open past the token's lifetime. Get a fresh one and resend
      // once, silently — the visitor shouldn't have to retype anything.
      if (!res.ok && body?.code === "token_expired") {
        res = await postSubmission(data, await fetchToken());
        body = await res.json().catch(() => null);
      }

      if (!res.ok) {
        // The route returns a specific, user-facing `error` for rate limits and
        // failed verification — show it rather than collapsing everything into
        // the generic banner.
        throw new Error(body?.error || GENERIC_ERROR);
      }

      setStatus("success");
      reset();
      mountedAt.current = Date.now();
    } catch (err) {
      console.error("[ContactForm]", err instanceof Error ? err.message : err);
      setErrorMessage(err instanceof Error ? err.message : GENERIC_ERROR);
      setStatus("error");
    } finally {
      // Tokens aren't single-use, but a fresh one keeps the next send well
      // inside the expiry window and re-arms the fill timer.
      void fetchToken();
    }
  };

  if (status === "success") {
    return (
      <div className="bg-bg-card border border-success/30 rounded-xl p-12 text-center">
        <CheckCircle size={48} className="text-success mx-auto mb-4" />
        <h3 className="font-montserrat font-bold text-2xl text-text-primary mb-3">Message Sent!</h3>
        <p className="font-inter text-text-secondary leading-relaxed mb-6">
          Thank you for reaching out. We&apos;ve received your message and will be in touch shortly.
          Check your email for a confirmation.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent font-montserrat font-semibold uppercase tracking-wide text-sm hover:underline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-bg-card border border-border rounded-xl p-8">
      <h2 className="font-montserrat font-bold text-xl text-text-primary mb-8">Send Us a Message</h2>

      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 mb-6">
          <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
          <p className="font-inter text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/*
          Honeypot. Hidden from sighted users and from screen readers, and
          unreachable by keyboard — but present in the DOM, so form-filling bots
          take the bait. Positioned off-screen rather than display:none, which
          some bots know to skip.
        */}
        <div aria-hidden="true" className="absolute left-[-9999px] w-px h-px overflow-hidden">
          <input
            {...register("company")}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            placeholder="Company"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="block font-montserrat font-semibold text-text-secondary text-xs uppercase tracking-wider mb-2">
              Full Name *
            </label>
            <input
              {...register("name", { required: "Name is required", maxLength: { value: 100, message: "Name must be 100 characters or fewer" } })}
              type="text"
              maxLength={100}
              placeholder="Jane Smith"
              className="w-full bg-bg-secondary border border-border focus:border-accent rounded-lg px-4 py-3 text-text-primary font-inter text-sm outline-none transition-colors placeholder:text-text-secondary/50"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1 font-inter">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-montserrat font-semibold text-text-secondary text-xs uppercase tracking-wider mb-2">
              Phone Number *
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[\d\s\-().+]{7,20}$/, message: "Enter a valid phone number" },
                maxLength: { value: 20, message: "Phone must be 20 characters or fewer" },
              })}
              type="tel"
              maxLength={20}
              placeholder="(813) 555-0000"
              className="w-full bg-bg-secondary border border-border focus:border-accent rounded-lg px-4 py-3 text-text-primary font-inter text-sm outline-none transition-colors placeholder:text-text-secondary/50"
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1 font-inter">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block font-montserrat font-semibold text-text-secondary text-xs uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/, message: "Enter a valid email" },
              maxLength: { value: 254, message: "Email must be 254 characters or fewer" },
            })}
            type="email"
            placeholder="jane@example.com"
            className="w-full bg-bg-secondary border border-border focus:border-accent rounded-lg px-4 py-3 text-text-primary font-inter text-sm outline-none transition-colors placeholder:text-text-secondary/50"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 font-inter">{errors.email.message}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label className="block font-montserrat font-semibold text-text-secondary text-xs uppercase tracking-wider mb-2">
            Service Interest
          </label>
          <select
            {...register("service")}
            className="w-full bg-bg-secondary border border-border focus:border-accent rounded-lg px-4 py-3 text-text-primary font-inter text-sm outline-none transition-colors appearance-none"
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block font-montserrat font-semibold text-text-secondary text-xs uppercase tracking-wider mb-2">
            Message
          </label>
          <textarea
            {...register("message", {
              maxLength: { value: 2000, message: "Message must be 2000 characters or fewer" },
            })}
            rows={5}
            maxLength={2000}
            placeholder="Tell us about your project, property size, or any questions you have..."
            className="w-full bg-bg-secondary border border-border focus:border-accent rounded-lg px-4 py-3 text-text-primary font-inter text-sm outline-none transition-colors placeholder:text-text-secondary/50 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
        >
          {status === "submitting" ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={14} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
