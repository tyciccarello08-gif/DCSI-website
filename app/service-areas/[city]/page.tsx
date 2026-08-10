import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CITIES, CONTACT, COMPANY } from "@/lib/constants";
import { cityServiceSchema, faqSchema, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

const find = (slug: string) => CITIES.find((c) => c.slug === slug);

export function generateMetadata({ params }: { params: { city: string } }) {
  const city = find(params.city);
  if (!city) return {};
  return pageMetadata({
    title: `Security Systems & Cameras in ${city.name}, FL`,
    description: `Alarm systems, cameras, and access control installed in ${city.name}, FL by DCSI Inc. of Lutz — 24/7 in-house monitoring. Free quote: ${CONTACT.phone}.`,
    path: `/service-areas/${city.slug}`,
  });
}

/** Services pitched on every city page, with the local angle stated per service. */
const SERVICES = [
  {
    href: "/services/security-monitoring",
    title: "Security Systems & 24/7 Monitoring",
    blurb:
      "Custom alarm systems with monitoring handled by our own team in Lutz — not routed to an out-of-state call center.",
  },
  {
    href: "/services/camera-systems",
    title: "Security Cameras & CCTV",
    blurb:
      "Cameras placed for the approaches that actually matter on your property, with recorded playback and remote viewing.",
  },
  {
    href: "/services/new-construction",
    title: "New Construction Pre-Wire",
    blurb:
      "Security, camera, audio, and data cabling roughed in before drywall — a fraction of the cost of retrofitting.",
  },
  {
    href: "/services/hoa-cdd",
    title: "HOA & CDD Community Security",
    blurb:
      "Gate access, amenity cameras, and perimeter coverage for association and district boards.",
  },
  {
    href: "/services/home-theater",
    title: "Home Theater & AV",
    blurb: "Projectors, media walls, and surround sound designed around the room you actually have.",
  },
  {
    href: "/services/structured-wiring",
    title: "Structured Wiring & Smart Home",
    blurb: "CAT6 to a central panel and Wi-Fi that reaches the far end of a block-construction house.",
  },
];

const GALLERY = [
  { src: "/images/camera-dome-soffit-install.jpg", alt: "Dome security camera installed under a residential soffit" },
  { src: "/images/gate-access-control.jpg", alt: "Access-controlled community entry gate" },
  { src: "/images/new-construction-framing-prewire.jpg", alt: "Low voltage pre-wire roughed into new construction framing" },
  { src: "/images/amenity-center-camera.jpg", alt: "Camera covering a community amenity center and pool deck" },
];

export default function CityPage({ params }: { params: { city: string } }) {
  const city = find(params.city);
  if (!city) notFound();

  const path = `/service-areas/${city.slug}`;

  const faqs = [
    {
      q: `Does DCSI service ${city.name}?`,
      a: `Yes. ${city.name} is in our core service area — our office is at ${CONTACT.address}, ${city.proximity.toLowerCase()}. We install and service security systems, cameras, access control, audio, and structured wiring throughout ${city.name} and the rest of ${city.county}.`,
    },
    {
      q: `Who monitors the alarm system — is it local?`,
      a: `Our monitoring is handled in house rather than sold on to a third-party wholesale center. When your alarm in ${city.name} trips, the people responding work for DCSI and know the account. That is the main practical difference between us and a national brand operating here through dealers.`,
    },
    {
      q: `What does an installation in ${city.name} cost?`,
      a: `It depends on the size of the property, how many openings need covering, whether cameras are involved, and whether the walls are open. We do not quote sight-unseen. A free on-site consultation in ${city.name} gets you a fixed written number — see our security system cost guide for the ranges and what moves them.`,
    },
    {
      q: `Do you work with builders and HOA boards in ${city.name}?`,
      a: `Both. We pre-wire new construction for builders across ${city.county}, and we work directly with HOA and CDD boards on gate access, amenity cameras, and community-wide monitoring — including the documented proposals boards need for a vote.`,
    },
  ];

  return (
    <>
      <JsonLd data={[cityServiceSchema(city), faqSchema(faqs, path)]} />

      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: `${city.name}, FL`, path }]} />}
        title={`Security Systems & Cameras in ${city.name}, FL`}
        subtitle={`${COMPANY.name} has installed and monitored security in ${city.county} since 2004. ${city.proximity} — ${city.name} is not a territory we cover from out of town, it's our neighborhood.`}
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Local facts strip */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <div className="font-inter font-semibold text-text-primary text-sm">{city.county}</div>
                <div className="font-inter text-text-secondary text-xs mt-0.5">
                  ZIP codes {city.zips.join(", ")}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-accent" />
              </div>
              <div>
                <div className="font-inter font-semibold text-text-primary text-sm">{city.proximity}</div>
                <div className="font-inter text-text-secondary text-xs mt-0.5">From our Lutz office</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <div className="font-inter font-semibold text-text-primary text-sm">24/7 In-House Monitoring</div>
                <div className="font-inter text-text-secondary text-xs mt-0.5">Never outsourced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market-specific copy — the reason this page exists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
                Security in {city.name}
              </span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
              What {city.name} Properties Actually Need
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">{city.marketNote}</p>

            <h3 className="font-montserrat font-bold text-lg text-text-primary mb-4">
              Neighborhoods &amp; Communities We Serve
            </h3>
            <ul className="flex flex-wrap gap-2 mb-8">
              {city.communities.map((n) => (
                <li
                  key={n}
                  className="font-inter text-text-secondary text-xs border border-border rounded-full px-3 py-1.5"
                >
                  {n}
                </li>
              ))}
            </ul>
            <p className="font-inter text-text-secondary text-sm leading-relaxed">
              Not on the list? We cover all of {city.name} and the surrounding{" "}
              {city.county.replace(" Counties", " County area").replace(" County", " County area")}.{" "}
              <Link href="/contact" className="text-accent hover:underline">
                Ask us about your address
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Services</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            What We Install in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors group"
              >
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed mb-4">{s.blurb}</p>
                <span className="inline-flex items-center gap-1.5 text-accent font-inter font-semibold uppercase tracking-wider text-xs">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
          {city.name} Security Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-bg-card border border-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <h3 className="font-montserrat font-bold text-text-primary text-base">{faq.q}</h3>
                <span className="text-accent font-montserrat text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Nearby markets — internal linking between city pages */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-montserrat font-bold text-lg text-text-primary mb-6">
            We Also Serve
          </h2>
          <ul className="flex flex-wrap gap-3">
            {CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="inline-block font-inter text-sm text-text-secondary hover:text-accent border border-border hover:border-accent/40 rounded-full px-4 py-2 transition-colors"
                >
                  {c.name}, FL
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        headline={`Protecting ${city.name} Since 2004`}
        body={`Free on-site consultation anywhere in ${city.name}. We'll walk the property, talk through what it actually needs, and put a fixed number in writing.`}
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
