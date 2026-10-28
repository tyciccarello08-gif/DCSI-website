/**
 * Lead tracking: GA4 events, call-tracking config, and first-touch attribution.
 *
 * Everything here is inert until its env var is set, so a fresh checkout or a
 * preview deploy never sends data anywhere.
 *
 * NEXT_PUBLIC_GA4_ID                — GA4 measurement ID (G-XXXXXXXXXX).
 * NEXT_PUBLIC_CALL_TRACKING_SCRIPT  — the dynamic number insertion "swap" script
 *                                     URL from CallRail (or similar). It replaces
 *                                     (813) 949-6500 on the page with a tracking
 *                                     number for website visitors only; the main
 *                                     number stays the same on the truck, the
 *                                     Google listing, and everywhere else.
 *
 * Both are read in next.config.mjs too, which only opens the CSP to Google /
 * CallRail when the matching variable is set.
 */

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
export const CALL_TRACKING_SCRIPT = process.env.NEXT_PUBLIC_CALL_TRACKING_SCRIPT ?? "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a GA4 event. A no-op when GA4 isn't loaded (unset ID, blocked script). */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

// ── First-touch attribution ─────────────────────────────────────────────────
// Captured on the first page of a visit and sent with the form, so every lead
// email says where the person came from (Google Ads click, organic search, a
// referral) without needing to cross-reference GA4.

export interface LeadSource {
  landingPage: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  /** Google Ads click ID — present means the visit came from a paid click. */
  gclid?: string;
}

const SOURCE_KEY = "dcsi_lead_source";

export function captureLeadSource() {
  try {
    if (sessionStorage.getItem(SOURCE_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    // Same-site referrers are internal navigation, not a source.
    const referrer =
      document.referrer && new URL(document.referrer).host !== window.location.host
        ? document.referrer
        : "";
    const source: LeadSource = {
      landingPage: window.location.pathname + window.location.search,
      referrer,
      utmSource: params.get("utm_source") ?? undefined,
      utmMedium: params.get("utm_medium") ?? undefined,
      utmCampaign: params.get("utm_campaign") ?? undefined,
      utmTerm: params.get("utm_term") ?? undefined,
      gclid: params.get("gclid") ?? undefined,
    };
    sessionStorage.setItem(SOURCE_KEY, JSON.stringify(source));
  } catch {
    // Storage blocked (private mode, strict settings) — attribution is a nicety.
  }
}

export function readLeadSource(): LeadSource | null {
  try {
    const raw = sessionStorage.getItem(SOURCE_KEY);
    return raw ? (JSON.parse(raw) as LeadSource) : null;
  } catch {
    return null;
  }
}
