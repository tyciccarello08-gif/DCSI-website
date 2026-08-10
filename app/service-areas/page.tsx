import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CITIES, CONTACT, SERVICE_AREAS } from "@/lib/constants";
import { ORG_ID, abs, pageMetadata } from "@/lib/seo";

const PATH = "/service-areas";

export const metadata = pageMetadata({
  title: "Service Areas — Hillsborough & Pasco Counties, FL",
  description:
    "Security systems installed and monitored across Hillsborough & Pasco — Lutz, Wesley Chapel, Land O' Lakes, Odessa, Carrollwood, and New Tampa.",
  path: PATH,
});

const areasSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${abs(PATH)}#webpage`,
  url: abs(PATH),
  name: "DCSI Inc. Service Areas — Hillsborough & Pasco Counties, FL",
  isPartOf: { "@id": ORG_ID },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: CITIES.length,
    itemListElement: CITIES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${c.name}, FL`,
      url: abs(`/service-areas/${c.slug}`),
    })),
  },
};

/** Markets we cover but that don't have a dedicated page yet. */
const OTHER_AREAS = SERVICE_AREAS.filter((a) => !CITIES.some((c) => c.name === a));

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={areasSchema} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Service Areas", path: PATH }]} />}
        title="Where We Work"
        subtitle="Our office sits on Lutz Lake Fern Road, right on the Hillsborough–Pasco line. That puts most of both counties within a short drive — and it's why we can get to a service call the same week rather than the same month."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Core Markets</span>
        </div>
        <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
          Hillsborough &amp; Pasco Counties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/service-areas/${c.slug}`}
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors group"
            >
              <h3 className="font-montserrat font-bold text-text-primary text-xl mb-1 group-hover:text-accent transition-colors">
                {c.name}, FL
              </h3>
              <div className="font-inter text-text-secondary text-xs mb-4">
                {c.county} &middot; {c.zips.join(", ")}
              </div>
              <p className="font-inter text-text-secondary text-sm leading-relaxed mb-4">
                {c.communities.slice(0, 4).join(", ")}
                {c.communities.length > 4 ? ", and more" : ""}
              </p>
              <span className="inline-flex items-center gap-1.5 text-accent font-inter font-semibold uppercase tracking-wider text-xs">
                {c.name} security <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 bg-bg-secondary border border-border rounded-xl p-8">
          <h3 className="font-montserrat font-bold text-lg text-text-primary mb-4">
            Also Serving
          </h3>
          <ul className="flex flex-wrap gap-2 mb-5">
            {OTHER_AREAS.map((a) => (
              <li
                key={a}
                className="font-inter text-text-secondary text-xs border border-border rounded-full px-3 py-1.5"
              >
                {a}, FL
              </li>
            ))}
          </ul>
          <p className="font-inter text-text-secondary text-sm leading-relaxed">
            If your address is anywhere in Hillsborough or Pasco County, call us —{" "}
            <a href={CONTACT.phoneHref} className="text-accent hover:underline">
              {CONTACT.phone}
            </a>
            . We&apos;ll tell you honestly whether you&apos;re in range before scheduling anything.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Local Means Local"
        body="One office, one crew, one monitoring team — all based in Lutz. Free on-site consultation across both counties."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
