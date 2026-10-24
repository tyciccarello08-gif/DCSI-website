import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CONTACT, RESOURCES, type Resource } from "@/lib/constants";
import { ORG_ID, WEBSITE_ID, abs, pageMetadata } from "@/lib/seo";

const PATH = "/resources";

export const metadata = pageMetadata({
  title: "Home & Business Security Guides for Florida",
  description:
    "Plain-language guides from DCSI of Lutz, FL: security system cost, choosing a monitoring company, hurricane prep, false alarms, cameras, and HOA planning.",
  path: PATH,
});

const CATEGORY_ORDER: Resource["category"][] = [
  "Buying & Cost",
  "Monitoring",
  "Florida Homes",
  "Cameras",
  "Boards & Builders",
  "Basics",
];

/**
 * The hub previously didn't exist — every guide's breadcrumb skipped straight from
 * Home to the article and /resources returned a 404. CollectionPage + ItemList
 * gives engines one page that enumerates the whole library.
 */
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${abs(PATH)}#webpage`,
  url: abs(PATH),
  name: "Home & Business Security Guides",
  inLanguage: "en-US",
  isPartOf: { "@id": WEBSITE_ID },
  publisher: { "@id": ORG_ID },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: RESOURCES.length,
    itemListElement: RESOURCES.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.title,
      url: abs(`/resources/${r.slug}`),
    })),
  },
};

export default function ResourcesHubPage() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Resources", path: PATH }]} />}
        title="Security Guides & Resources"
        subtitle="Written to be useful whether or not you hire us — what things cost, what to ask, and what's different about protecting a home in Florida."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {CATEGORY_ORDER.map((category) => {
          const items = RESOURCES.filter((r) => r.category === category);
          if (!items.length) return null;
          return (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-accent" />
                <h2 className="text-accent text-xs font-montserrat uppercase tracking-widest">
                  {category}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/resources/${r.slug}`}
                    className="group bg-bg-card border border-border hover:border-accent rounded-xl p-6 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-montserrat font-bold text-text-primary text-base leading-snug">
                        {r.title}
                      </h3>
                      <ArrowRight
                        size={16}
                        className="text-border group-hover:text-accent flex-shrink-0 mt-1 transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="font-inter text-text-secondary text-sm leading-relaxed">{r.blurb}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="font-inter text-text-secondary leading-relaxed">
            Looking for us by name? See{" "}
            <Link href="/dcs" className="text-accent hover:underline">
              DCS Security (DCSI)
            </Link>
            . Looking for coverage in your town? See{" "}
            <Link href="/service-areas" className="text-accent hover:underline">
              all service areas
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner
        headline="Have a Question These Don't Answer?"
        body="Call the office. You'll talk to the people who install and monitor the systems, not a sales queue."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
