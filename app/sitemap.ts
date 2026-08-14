import type { MetadataRoute } from "next";
import { CITIES, DCS_PAGES, SITE_URL } from "@/lib/constants";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },

  // Services
  { path: "/services/security-monitoring", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/camera-systems", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/hoa-cdd", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/new-construction", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/home-theater", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/whole-home-audio", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/structured-wiring", priority: 0.9, changeFrequency: "monthly" },

  // Service areas. Core markets outrank extended ones — priority is a relative
  // hint about where crawl budget is best spent, and Lutz matters more than Ocala.
  { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" },
  ...CITIES.map((c) => ({
    path: `/service-areas/${c.slug}`,
    priority: c.tier === "core" ? 0.8 : 0.7,
    changeFrequency: "monthly" as const,
  })),

  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },

  // The "DCS" brand cluster. Branded searches are the highest-converting traffic
  // on any site — the searcher already decided who they want and is only trying
  // to find them — so the hub sits alongside the home page in priority.
  { path: "/dcs", priority: 0.9, changeFrequency: "monthly" },
  ...DCS_PAGES.map((p) => ({
    path: `/dcs/${p.slug}`,
    // The contact page carries a phone number someone is actively looking for;
    // it earns the same weight as a service page.
    priority: p.slug === "contact" ? 0.8 : 0.7,
    changeFrequency: "monthly" as const,
  })),

  // Resources — the cost guide targets the highest-intent query on the site.
  { path: "/resources/security-system-cost", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resources/choosing-a-monitoring-company", priority: 0.7, changeFrequency: "yearly" },
  { path: "/resources/hoa-board-security-guide", priority: 0.7, changeFrequency: "yearly" },
  { path: "/resources/builder-prewire-guide", priority: 0.7, changeFrequency: "yearly" },
  { path: "/resources/burglar-alarm-faq", priority: 0.6, changeFrequency: "yearly" },
  { path: "/resources/safety-tips", priority: 0.6, changeFrequency: "yearly" },
  { path: "/resources/burglary-statistics", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    // Next emits canonicals without a trailing slash; match that exactly so the
    // sitemap and the canonical tags never disagree about the home page.
    url: path === "/" ? SITE_URL : new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
