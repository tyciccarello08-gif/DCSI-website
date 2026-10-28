// Vercel preview/branch deploys get their own hostnames. Without an explicit
// noindex they can be indexed as a duplicate of the whole production site.
// robots.txt alone is not sufficient — Google can index a disallowed URL it finds
// linked, and only an X-Robots-Tag header reliably keeps it out.
const isPreview =
  process.env.VERCEL_ENV === "preview" || process.env.VERCEL_ENV === "development";

// In production, @vercel/analytics is served first-party from /_vercel/insights/*
// and needs no CSP exception. Only the local dev build pulls its debug script
// from va.vercel-scripts.com, so that host is allowed in dev alone rather than
// loosening script-src for real visitors.
const isDev = process.env.NODE_ENV !== "production";
const analyticsScriptSrc = isDev ? " https://va.vercel-scripts.com" : "";

// Lead tracking (see lib/analytics.ts). Each origin is allowed only when its env
// var is set, so the CSP stays closed on deploys that don't use it.
const ga4 = Boolean(process.env.NEXT_PUBLIC_GA4_ID);
const callTracking = Boolean(process.env.NEXT_PUBLIC_CALL_TRACKING_SCRIPT);
const trackingScriptSrc =
  (ga4 ? " https://www.googletagmanager.com" : "") +
  (callTracking ? " https://cdn.callrail.com" : "");
const trackingConnectSrc =
  (ga4
    ? " https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com"
    : "") + (callTracking ? " https://*.callrail.com" : "");
const trackingImgSrc = ga4
  ? " https://*.google-analytics.com https://*.googletagmanager.com"
  : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All imagery is self-hosted in /public/images — no remote patterns needed.
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      ...(isPreview
        ? [
            {
              source: "/(.*)",
              headers: [
                { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
              ],
            },
          ]
        : []),
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Control referrer information
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disable DNS prefetching
          { key: "X-DNS-Prefetch-Control", value: "off" },
          // Force HTTPS for 1 year (enable once domain + SSL are live)
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          // Restrict browser feature access
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          // Content Security Policy
          // - Allows Google Fonts
          // - 'unsafe-inline' needed for Tailwind + Framer Motion inline styles
          // - The contact form's bot check is self-hosted (see lib/form-token.ts),
          //   so no third-party origin needs allowing here.
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              `script-src 'self' 'unsafe-inline' 'unsafe-eval'${analyticsScriptSrc}${trackingScriptSrc}`, // Next.js requires these
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              `img-src 'self' data: blob:${trackingImgSrc}`,
              `connect-src 'self'${trackingConnectSrc}`,
              // Keyless Google Maps embed on the contact page.
              "frame-src https://maps.google.com https://www.google.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
