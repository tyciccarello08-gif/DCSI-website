import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * Crawlers used by AI answer engines. A bare `Allow: /` already permits them, but
 * naming them explicitly is what keeps a future blanket rule from silently cutting
 * the site out of ChatGPT, Claude, Perplexity, and Gemini answers.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
];

/**
 * Vercel sets VERCEL_ENV to "preview" on branch and PR deploys. Those get unique
 * hostnames that Google will happily index if it finds them, which puts duplicate
 * copies of the whole site in the index competing with production.
 */
const isProduction =
  process.env.VERCEL_ENV === "production" || process.env.VERCEL_ENV === undefined;

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
