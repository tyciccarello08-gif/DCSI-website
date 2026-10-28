import type { Metadata } from "next";
import { Barlow_Condensed, Bebas_Neue, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";
import JsonLd from "@/components/JsonLd";
import LeadTracking from "@/components/LeadTracking";
import MobileCallBar from "@/components/MobileCallBar";
import { BUSINESS, COMPANY, SEARCH_VERIFICATION, SITE_URL } from "@/lib/constants";
import { localBusinessSchema, websiteSchema } from "@/lib/seo";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-montserrat", // keeps existing font-montserrat class working
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Pages supply only their own name; the brand suffix is appended here so it
    // never has to be repeated (and never gets truncated inconsistently in SERPs).
    default: "Security Systems & Cameras in Tampa, FL | DCSI Inc.",
    template: "%s | DCSI Inc.",
  },
  description:
    "DCSI Inc. installs residential and commercial security systems, CCTV cameras, gate access control, and sound systems across Hillsborough and Pasco Counties, FL — with 24/7 in-house monitoring since 2004. Free quotes: (813) 949-6500.",
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  category: "Security Systems",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${COMPANY.name} — ${COMPANY.tagline}`,
    title: "Security Systems & Cameras in Tampa, FL | DCSI Inc.",
    description:
      "Residential and commercial security systems, CCTV cameras, and 24/7 in-house monitoring serving Hillsborough and Pasco Counties, FL since 2004.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Systems & Cameras in Tampa, FL | DCSI Inc.",
    description:
      "Residential and commercial security, cameras, and 24/7 in-house monitoring across Hillsborough and Pasco Counties, FL.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Only emitted once a real token is set — an empty verification meta tag is
  // worse than none, since it looks verified while proving nothing.
  verification: {
    ...(SEARCH_VERIFICATION.google ? { google: SEARCH_VERIFICATION.google } : {}),
    ...(SEARCH_VERIFICATION.bing
      ? { other: { "msvalidate.01": SEARCH_VERIFICATION.bing } }
      : {}),
  },
  // Phone numbers and addresses are already marked up as links; stop iOS from
  // wrapping bare text in its own styled anchors.
  formatDetection: { telephone: false, address: false, email: false },
  other: {
    "geo.region": `US-${BUSINESS.addressRegion}`,
    "geo.placename": `${BUSINESS.addressLocality}, ${BUSINESS.addressRegion}`,
    "geo.position": `${BUSINESS.latitude};${BUSINESS.longitude}`,
    ICBM: `${BUSINESS.latitude}, ${BUSINESS.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${barlowCondensed.variable} ${bebasNeue.variable} ${outfit.variable} antialiased bg-bg-primary text-text-primary font-inter`}
      >
        {/* Business identity, emitted on every page so any single crawled URL
            carries the full name/address/phone + service-area graph. */}
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />

        {/* Fixed particle canvas — sits behind every page */}
        <GlobalBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
        <LeadTracking />

        {/* Served from /_vercel/insights/* — first-party, so it survives ad
            blockers and needs no CSP exception in production. */}
        <Analytics />
      </body>
    </html>
  );
}
