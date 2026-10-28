"use client";

import { useEffect } from "react";
import Script from "next/script";
import { CALL_TRACKING_SCRIPT, GA4_ID, captureLeadSource, trackEvent } from "@/lib/analytics";

/**
 * Site-wide lead tracking, mounted once in the root layout.
 *
 * - Loads GA4 and the call-tracking swap script when their env vars are set.
 * - Fires a `phone_call_click` GA4 event on every tap of a tel: link. One
 *   delegated listener covers every phone link on the site, including ones added
 *   later, so no individual link needs wiring.
 * - Records first-touch attribution for the quote forms.
 *
 * In GA4, mark `generate_lead` and `phone_call_click` as key events (Admin →
 * Events) so they count as conversions and can be imported into Google Ads.
 */
export default function LeadTracking() {
  useEffect(() => {
    captureLeadSource();

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;
      trackEvent("phone_call_click", {
        page_path: window.location.pathname,
        link_text: link.textContent?.trim().slice(0, 100) ?? "",
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(GA4_ID)});`}
          </Script>
        </>
      )}
      {CALL_TRACKING_SCRIPT && <Script src={CALL_TRACKING_SCRIPT} strategy="afterInteractive" />}
    </>
  );
}
