import type { MetadataRoute } from "next";
import { CITIES, DCS_PAGES, RESOURCES, SITE_URL } from "@/lib/constants";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  /** ISO date the page's content last materially changed. */
  lastModified: string;
};

/**
 * lastmod used to be `new Date()` on every URL, which told crawlers the entire
 * site changed on every deploy. Google says it ignores lastmod once it learns a
 * site's values aren't accurate — so a constant "now" is worse than no date.
 * These are real content dates; bump one when that page's text changes.
 */
const SITE_UPDATED = "2026-10-24";
const SERVICES_UPDATED = "2026-10-24";
const CITIES_UPDATED = "2026-10-24";
const DCS_UPDATED = "2026-08-14";

const ROUTES: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly", lastModified: SITE_UPDATED },

  // Services
  ...[
    "/services/security-monitoring",
    "/services/camera-systems",
    "/services/commercial-security",
    "/services/access-control",
    "/services/alarm-monitoring-takeover",
    "/services/hoa-cdd",
    "/services/new-construction",
    "/services/home-theater",
    "/services/whole-home-audio",
    "/services/structured-wiring",
  ].map((path) => ({
    path,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: SERVICES_UPDATED,
  })),

  // Service areas. Core markets outrank extended ones — priority is a relative
  // hint about where crawl budget is best spent, and Lutz matters more than Ocala.
  { path: "/service-areas", priority: 0.8, changeFrequency: "monthly", lastModified: CITIES_UPDATED },
  ...CITIES.map((c) => ({
    path: `/service-areas/${c.slug}`,
    priority: c.tier === "core" ? 0.8 : 0.7,
    changeFrequency: "monthly" as const,
    lastModified: CITIES_UPDATED,
  })),

  { path: "/contact", priority: 0.8, changeFrequency: "yearly", lastModified: SITE_UPDATED },
  { path: "/about", priority: 0.7, changeFrequency: "yearly", lastModified: SITE_UPDATED },

  // The "DCS" brand cluster. Branded searches are the highest-converting traffic
  // on any site — the searcher already decided who they want and is only trying
  // to find them — so the hub sits alongside the home page in priority.
  { path: "/dcs", priority: 0.9, changeFrequency: "monthly", lastModified: DCS_UPDATED },
  ...DCS_PAGES.map((p) => ({
    path: `/dcs/${p.slug}`,
    // The contact page carries a phone number someone is actively looking for;
    // it earns the same weight as a service page.
    priority: p.slug === "contact" ? 0.8 : 0.7,
    changeFrequency: "monthly" as const,
    lastModified: DCS_UPDATED,
  })),

  // Resources — driven from the RESOURCES registry so a new guide can't be
  // published without a sitemap entry, and each carries its own modified date.
  // The cost guide targets the highest-intent query on the site.
  { path: "/resources", priority: 0.7, changeFrequency: "monthly", lastModified: SITE_UPDATED },
  ...RESOURCES.map((r) => ({
    path: `/resources/${r.slug}`,
    priority: r.slug === "security-system-cost" ? 0.8 : r.category === "Basics" ? 0.5 : 0.7,
    changeFrequency: "yearly" as const,
    lastModified: r.modified,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency, lastModified }) => ({
    // Next emits canonicals without a trailing slash; match that exactly so the
    // sitemap and the canonical tags never disagree about the home page.
    url: path === "/" ? SITE_URL : new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
