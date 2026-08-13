import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CITIES, CORE_CITIES, EXTENDED_CITIES, CONTACT, SERVICE_AREAS } from "@/lib/constants";
import { ORG_ID, abs, pageMetadata } from "@/lib/seo";

const PATH = "/service-areas";

export const metadata = pageMetadata({
  title: "Service Areas — Alarm Monitoring from Venice to Ocala, FL",
  description:
    "Security systems and 24/7 in-house alarm monitoring across Central Florida — Lutz, Wesley Chapel, Riverview, Lakeland, Winter Haven, Spring Hill, Ocala, Bradenton, and Venice.",
  path: PATH,
});

const areasSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${abs(PATH)}#webpage`,
  url: abs(PATH),
  name: "DCSI Inc. Service Areas — Alarm Monitoring & Security Systems Across Central Florida",
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

function CityCard({ city }: { city: (typeof CITIES)[number] }) {
  return (
    <Link
      href={`/service-areas/${city.slug}`}
      className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors group"
    >
      <h3 className="font-montserrat font-bold text-text-primary text-xl mb-1 group-hover:text-accent transition-colors">
        {city.name}, FL
      </h3>
      <div className="font-inter text-text-secondary text-xs mb-4">
        {city.county} &middot; {city.zips.slice(0, 4).join(", ")}
        {city.zips.length > 4 ? "…" : ""}
      </div>
      <p className="font-inter text-text-secondary text-sm leading-relaxed mb-4">
        {city.communities.slice(0, 4).join(", ")}
        {city.communities.length > 4 ? ", and more" : ""}
      </p>
      <span className="inline-flex items-center gap-1.5 text-accent font-inter font-semibold uppercase tracking-wider text-xs">
        {city.tier === "extended" ? `${city.name} monitoring` : `${city.name} security`}{" "}
        <ArrowRight size={12} />
      </span>
    </Link>
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={areasSchema} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Service Areas", path: PATH }]} />}
        title="Where We Work"
        subtitle="Our office sits on Lutz Lake Fern Road, right on the Hillsborough–Pasco line. That puts most of both counties within a short drive — and it's why we can get to a service call the same week rather than the same month. Our monitoring center reaches considerably further: from Venice and Bradenton in the south to Ocala in the north, and east through Lakeland and Winter Haven."
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
        <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">
          Hillsborough &amp; Pasco Counties
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed max-w-3xl mb-14">
          Our home markets. Same-week service calls, on-site consultations, and a crew that
          knows these neighborhoods because it works in them every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_CITIES.map((c) => (
            <CityCard key={c.slug} city={c} />
          ))}
        </div>

        {/* Extended footprint — labelled honestly rather than presented as more home turf. */}
        <div className="flex items-center gap-3 mt-24 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
            Extended Coverage
          </span>
        </div>
        <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">
          Alarm Monitoring from Venice to Ocala
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed max-w-3xl mb-14">
          We install, service, and monitor across all of it — our own technicians, not
          subcontractors. Alarm monitoring doesn&apos;t care how far the panel sits from the
          monitoring center: the signal travels over cellular and reaches our team in Lutz in
          seconds either way. Installations and service calls in these markets are scheduled
          rather than same-day, and we tell you that timeline up front.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXTENDED_CITIES.map((c) => (
            <CityCard key={c.slug} city={c} />
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
            If your address is anywhere between Venice and Ocala, call us —{" "}
            <a href={CONTACT.phoneHref} className="text-accent hover:underline">
              {CONTACT.phone}
            </a>
            . We&apos;ll tell you honestly whether you&apos;re in range before scheduling anything.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Local Means Local"
        body="One office, one crew, one monitoring team — all based in Lutz. Free consultation anywhere we cover, from Hillsborough and Pasco out to Venice, Winter Haven, and Ocala."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
