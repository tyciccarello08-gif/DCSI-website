import { ImageResponse } from "next/og";
import { COMPANY, CONTACT } from "@/lib/constants";

// Edge runtime: @vercel/og's default font loader fails to resolve under the Node
// runtime at build time, so this card is rendered on demand instead of prerendered.
export const runtime = "edge";
export const alt = `${COMPANY.name} — ${COMPANY.tagline} | Tampa Bay Security Systems`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default social share card, inherited by every route that doesn't define its own.
 * Uses only solid colors and system-default text so it renders without fetching
 * any font or image at build time.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A0A0A",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: "#E3000F",
          }}
        />
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            color: "#E3000F",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {COMPANY.tagline}
        </div>
        <div style={{ fontSize: 104, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.05 }}>
          {COMPANY.name}
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#FFFFFF",
            marginTop: 20,
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          Tampa Bay&apos;s source for security systems, cameras &amp; 24/7 monitoring
        </div>
        <div style={{ display: "flex", gap: 32, marginTop: 48, fontSize: 26, color: "#9CA3AF" }}>
          <span>Lutz, FL</span>
          <span style={{ color: "#E3000F" }}>|</span>
          <span>Since {COMPANY.founded}</span>
          <span style={{ color: "#E3000F" }}>|</span>
          <span>{CONTACT.phone}</span>
        </div>
      </div>
    ),
    size
  );
}
