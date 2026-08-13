import type { Metadata } from "next";
import {
  BUSINESS,
  COMPANY,
  CONTACT,
  HAS_AGGREGATE_RATING,
  LICENSE,
  REVIEWS,
  SERVICE_AREAS,
  SERVICE_COUNTIES,
  SITE_URL,
} from "@/lib/constants";

/** Stable @id anchors so every JSON-LD block on the site points at one business entity. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const abs = (path: string) => new URL(path, SITE_URL).toString();

interface PageSeo {
  title: string;
  description: string;
  /** Site-root-relative, e.g. "/services/camera-systems". Becomes the canonical URL. */
  path: string;
  type?: "website" | "article";
}

/**
 * Builds a page's Metadata with a canonical URL and matching Open Graph / Twitter
 * cards. Canonicals matter here because the site is reachable on both the apex and
 * www hostnames — without them the two would compete as duplicates.
 */
export function pageMetadata({ title, description, path, type = "website" }: PageSeo): Metadata {
  const url = abs(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: `${COMPANY.name} — ${COMPANY.tagline}`,
      locale: "en_US",
      type,
      // Declaring an `openGraph` object replaces the parent's, which drops the
      // image Next infers from app/opengraph-image.tsx — so point at it directly.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.streetAddress,
  addressLocality: BUSINESS.addressLocality,
  addressRegion: BUSINESS.addressRegion,
  postalCode: BUSINESS.postalCode,
  addressCountry: BUSINESS.addressCountry,
};

/**
 * The root LocalBusiness entity. Emitted once, in the root layout, so every page
 * carries the name/address/phone block that local search and AI assistants read.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecuritySystemInstaller", "ElectricalContractor"],
    "@id": ORG_ID,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    alternateName: [COMPANY.fullName, "DCSI Security", "DCSI Security & Sound"],
    description: COMPANY.description,
    url: SITE_URL,
    telephone: CONTACT.phoneE164,
    faxNumber: CONTACT.fax,
    email: CONTACT.email,
    foundingDate: COMPANY.founded,
    priceRange: BUSINESS.priceRange,
    image: abs("/images/03-dcsi-truck-branding.webp"),
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: abs("/images/logo.png"),
      caption: COMPANY.name,
    },
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    hasMap: CONTACT.mapsUrl,
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      ...SERVICE_COUNTIES.map((county) => ({
        "@type": "AdministrativeArea",
        name: `${county}, Florida`,
      })),
      ...SERVICE_AREAS.map((city) => ({
        "@type": "City",
        name: `${city}, Florida`,
      })),
    ],
    ...(BUSINESS.sameAs.length ? { sameAs: BUSINESS.sameAs } : {}),
    // Only emitted once real, verifiable Google review data is set — fabricated
    // aggregate ratings are a manual-action risk, not just bad practice.
    ...(HAS_AGGREGATE_RATING
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: REVIEWS.ratingValue,
            reviewCount: REVIEWS.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    ...(LICENSE.number
      ? {
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: LICENSE.label,
            identifier: LICENSE.number,
            recognizedBy: {
              "@type": "GovernmentOrganization",
              name: "Florida Department of Business and Professional Regulation",
            },
          },
        }
      : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Security & Sound Services",
      itemListElement: SERVICE_SCHEMAS.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: abs(s.path),
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phoneE164,
      contactType: "customer service",
      areaServed: "US-FL",
      availableLanguage: ["English"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
  };
}

/** Canonical service definitions, shared by the offer catalog and the per-page Service schema. */
export const SERVICE_SCHEMAS = [
  {
    path: "/services/security-monitoring",
    name: "Security System Installation & 24/7 Monitoring",
    serviceType: "Burglar alarm installation and alarm monitoring",
    description:
      "Custom residential and commercial burglar alarm systems with 24/7 in-house monitoring, silent alarms, medical and panic alerts, fire systems, and smartphone control.",
  },
  {
    path: "/services/camera-systems",
    name: "CCTV Camera System Installation",
    serviceType: "Video surveillance and CCTV installation",
    description:
      "Professional CCTV, DVR, and IP camera installation for homes and businesses, including remote mobile viewing, recorded playback, and video verification of alarm events.",
  },
  {
    path: "/services/new-construction",
    name: "New Construction Low Voltage Pre-Wire",
    serviceType: "Low voltage pre-wire for new construction",
    description:
      "Low voltage pre-wire for builders and developers: security and camera rough-in, CAT6 structured wiring, home theater pre-wire, access control, and central vacuum.",
  },
  {
    path: "/services/hoa-cdd",
    name: "HOA & CDD Community Security",
    serviceType: "Community gate access control and surveillance",
    description:
      "Gate and entry access control, common area and amenity center cameras, and community-wide monitoring for homeowner associations and community development districts.",
  },
  {
    path: "/services/home-theater",
    name: "Home Theater & AV Installation",
    serviceType: "Home theater and audio-visual installation",
    description:
      "Dedicated home theater rooms and living-room media walls: projector and screen installation, TV mounting, surround sound calibration, equipment racks, and single-remote control.",
  },
  {
    path: "/services/whole-home-audio",
    name: "Whole-Home & Outdoor Audio",
    serviceType: "Multi-room and outdoor audio installation",
    description:
      "Multi-room audio with in-ceiling and in-wall speakers, patio and pool-deck outdoor audio, independent zone control, and streaming from any phone or voice assistant.",
  },
  {
    path: "/services/structured-wiring",
    name: "Structured Wiring & Smart Home",
    serviceType: "Structured cabling and smart home integration",
    description:
      "CAT6 data cabling, coax, and fiber to a central structured wiring panel, plus whole-home Wi-Fi design and smart home integration for locks, thermostats, lighting, and video doorbells.",
  },
] as const;

export function serviceSchema(path: string) {
  const svc = SERVICE_SCHEMAS.find((s) => s.path === path);
  if (!svc) throw new Error(`No service schema defined for ${path}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(path)}#service`,
    name: svc.name,
    serviceType: svc.serviceType,
    description: svc.description,
    url: abs(path),
    provider: { "@id": ORG_ID },
    areaServed: [
      ...SERVICE_COUNTIES.map((c) => ({ "@type": "AdministrativeArea", name: `${c}, Florida` })),
      ...SERVICE_AREAS.map((c) => ({ "@type": "City", name: `${c}, Florida` })),
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Free on-site consultation and custom quote.",
      },
    },
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${abs(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Per-city page schema. Uses `Service` scoped to a single `City` rather than
 * `LocalBusiness` — DCSI has one physical location, and minting a second
 * LocalBusiness per city is exactly the pattern Google treats as spam.
 */
export function cityServiceSchema(city: {
  slug: string;
  name: string;
  county: string;
  zips: string[];
  tier?: "core" | "extended";
}) {
  const path = `/service-areas/${city.slug}`;
  // Extended markets are monitoring-led — that is both what the page targets and
  // what DCSI actually delivers there without a scheduled trip.
  const extended = city.tier === "extended";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(path)}#service`,
    name: extended
      ? `Alarm Monitoring & Security Systems in ${city.name}, FL`
      : `Security Systems & Camera Installation in ${city.name}, FL`,
    serviceType: extended
      ? "Alarm monitoring and security system installation"
      : "Security system and camera installation",
    description: extended
      ? `24/7 alarm monitoring for ${city.name}, Florida (${city.county}), handled in house by DCSI Inc. from its Lutz monitoring center, plus scheduled installation and service of security systems, CCTV cameras, and access control.`
      : `Alarm systems, CCTV cameras, access control, home theater, and structured wiring installed in ${city.name}, Florida (${city.county}) by DCSI Inc. of Lutz, with 24/7 in-house monitoring.`,
    url: abs(path),
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: `${city.name}, Florida`,
      containedInPlace: { "@type": "AdministrativeArea", name: city.county },
      ...(city.zips.length ? { postalCode: city.zips } : {}),
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Free on-site consultation and custom quote.",
      },
    },
  };
}

export function breadcrumbSchema(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
