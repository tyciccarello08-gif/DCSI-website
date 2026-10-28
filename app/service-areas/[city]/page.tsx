import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight, ShieldCheck, Wifi, BellRing } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import QuoteSection from "@/components/QuoteSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CITIES, CORE_CITIES, EXTENDED_CITIES, CONTACT, COMPANY } from "@/lib/constants";
import { cityServiceSchema, faqSchema, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

const find = (slug: string) => CITIES.find((c) => c.slug === slug);

export function generateMetadata({ params }: { params: { city: string } }) {
  const city = find(params.city);
  if (!city) return {};
  // Extended markets target the monitoring query, which is the one DCSI can answer
  // from Lutz without a truck. Core markets keep their existing titles so their
  // established rankings aren't disturbed.
  return pageMetadata({
    title:
      city.seoTitle ??
      (city.tier === "extended"
        ? `Alarm Monitoring & Security Systems in ${city.name}, FL`
        : `Security Systems & Cameras in ${city.name}, FL`),
    description:
      city.tier === "extended"
        ? `24/7 alarm monitoring in ${city.name}, FL (${city.county}) — handled in house by DCSI Inc., never outsourced. Security systems, cameras & takeovers. ${CONTACT.phone}.`
        : `Alarm systems, cameras, and access control installed in ${city.name}, FL by DCSI Inc. of Lutz — 24/7 in-house monitoring. Free quote: ${CONTACT.phone}.`,
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

/**
 * The three things that actually differentiate monitoring, stated per city. Kept
 * out of the city data because they're identical everywhere — only the name varies.
 */
const MONITORING_POINTS = [
  {
    icon: ShieldCheck,
    title: "In-House, Never Outsourced",
    body: (city: string) =>
      `A ${city} alarm signal is answered by DCSI employees at our own center in Lutz. Most companies selling monitoring in Florida resell a third-party wholesale center — the name on the yard sign is not who picks up.`,
  },
  {
    icon: Wifi,
    title: "Cellular & Supervised",
    body: (city: string) =>
      `Cellular reporting means there is no phone line to cut and no internet outage to hide behind. Supervised check-ins tell us a ${city} system has gone silent, instead of that being discovered during a break-in.`,
  },
  {
    icon: BellRing,
    title: "Takeovers Welcome",
    body: (city: string) =>
      `Already have a panel on the wall in ${city}? We can usually take it over — same sensors, same wiring, new communicator and a monitoring account with no long-term contract.`,
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
  const extended = city.tier === "extended";
  const neighborhoods = (city.neighborhoodPages ?? [])
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is (typeof CITIES)[number] => Boolean(c));

  const coreFaqs = [
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

  // Extended-market FAQ leads with monitoring and is explicit about travel, because
  // the honest answer to "are you local to me?" is different here than it is in Lutz.
  const extendedFaqs = [
    {
      q: `Does DCSI monitor alarm systems in ${city.name}, FL?`,
      a: `Yes. Alarm monitoring does not depend on how close the monitoring center is to your house — the panel reports over a cellular path, and a signal from ${city.name} reaches our center in seconds exactly like one from down the street. What does matter is who answers it. Our monitoring is run in house from ${CONTACT.address}, so a ${city.name} alarm is handled by DCSI employees who can see the account history, not by a wholesale center that monitors for hundreds of unrelated dealers.`,
    },
    {
      q: `Do you install security systems in ${city.name}, or only monitor them?`,
      a: `Both. We install and service in ${city.name} — full alarm systems, cameras, access control, structured wiring, and new-construction pre-wire — using our own technicians rather than subcontracting to whoever happens to be nearest. Our only office is in Lutz, ${city.proximity.toLowerCase()}, so ${city.name} installations and service calls are scheduled rather than same-hour, and monitoring runs 24/7 with no distance penalty at all. We give you the real timeline before you commit, because finding that out afterward is how people end up unhappy with a security company.`,
    },
    {
      q: `Can you take over my existing alarm system in ${city.name}?`,
      a: `Usually, yes — takeovers are a large share of what we do. Most panels installed in ${city.county} homes over the past couple of decades can be reprogrammed and moved onto our monitoring, keeping the existing sensors and wiring in place. That is dramatically cheaper than a new system, and it gets you off an auto-renewing national contract without stripping hardware off the walls. We check what is on the wall before quoting anything.`,
    },
    {
      q: `Is there a long-term monitoring contract?`,
      a: `No long-term contract is required for monitoring. We would rather keep the account by answering the phone than by holding you to a three-year term you signed at a kitchen table. Ask us what the monthly rate is for your setup in ${city.name} and we will tell you plainly.`,
    },
    {
      q: `What does a security system in ${city.name} cost?`,
      a: `It depends on the property size, how many openings need covering, whether cameras are involved, and whether the walls are open. We do not quote sight-unseen. A free consultation for your ${city.name} property gets you a fixed written number — our security system cost guide covers the ranges and what moves them.`,
    },
    {
      q: `Do you work with builders and HOA boards in ${city.name}?`,
      a: `Both. We pre-wire new construction for builders, and we work directly with HOA and CDD boards on gate access, amenity-center cameras, and community-wide monitoring — including the documented proposals a board needs in hand before a vote. For ${city.county} communities we schedule site walks in blocks, so a board meeting timeline is worth mentioning up front.`,
    },
  ];

  const faqs = extended ? extendedFaqs : coreFaqs;

  return (
    <>
      <JsonLd data={[cityServiceSchema(city), faqSchema(faqs, path)]} />

      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: `${city.name}, FL`, path }]} />}
        title={
          extended
            ? `Alarm Monitoring & Security Systems in ${city.name}, FL`
            : `Security Systems & Cameras in ${city.name}, FL`
        }
        subtitle={
          extended
            ? `${COMPANY.name} has monitored alarm systems from its own center in Lutz since 2004. ${city.name} accounts are watched 24/7 by our team — not sold on to a wholesale center — with installation and service scheduled from our Lutz office, ${city.proximity.toLowerCase()}.`
            : `${COMPANY.name} has installed and monitored security in ${city.county} since 2004. ${city.proximity} — ${city.name} is not a territory we cover from out of town, it's our neighborhood.`
        }
        ctaText="Get a Free Quote"
        ctaHref="#quote"
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

      {/* Monitoring — the primary intent for extended markets, and the one service
          that genuinely does not degrade with distance from Lutz. */}
      {city.monitoringNote && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
              Alarm Monitoring
            </span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">
            24/7 Alarm Monitoring in {city.name}, FL
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed max-w-3xl mb-12">
            {city.monitoringNote}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {MONITORING_POINTS.map((point) => (
              <div key={point.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <point.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-base mb-2">
                  {point.title}
                </h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">
                  {point.body(city.name)}
                </p>
              </div>
            ))}
          </div>

          <p className="font-inter text-text-secondary text-sm leading-relaxed mt-8">
            More on how our monitoring works —{" "}
            <Link href="/services/security-monitoring" className="text-accent hover:underline">
              security systems &amp; 24/7 monitoring
            </Link>
            , how a{" "}
            <Link href="/services/alarm-monitoring-takeover" className="text-accent hover:underline">
              monitoring takeover
            </Link>{" "}
            works, or read{" "}
            <Link
              href="/resources/choosing-a-monitoring-company"
              className="text-accent hover:underline"
            >
              how to choose a monitoring company
            </Link>{" "}
            before you sign with anyone.
          </p>
        </section>
      )}

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
            {neighborhoods.length > 0 && (
              <>
                <h3 className="font-montserrat font-bold text-lg text-text-primary mb-4">
                  {city.name} Neighborhoods With Their Own Page
                </h3>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {neighborhoods.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/service-areas/${n.slug}`}
                        className="inline-block font-inter text-text-secondary hover:text-accent text-xs border border-border hover:border-accent/40 rounded-full px-3 py-1.5 transition-colors"
                      >
                        {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <p className="font-inter text-text-secondary text-sm leading-relaxed">
              Not on the list? We cover all of {city.name} and the surrounding{" "}
              {city.county.replace(" Counties", " County area").replace(" County", " County area")}.{" "}
              <Link href="#quote" className="text-accent hover:underline">
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
          {extended
            ? `${city.name} Alarm Monitoring Questions`
            : `${city.name} Security Questions`}
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
          {[
            { label: "Hillsborough & Pasco", list: CORE_CITIES },
            { label: "Venice to Ocala", list: EXTENDED_CITIES },
          ].map((group) => {
            const others = group.list.filter((c) => c.slug !== city.slug);
            if (!others.length) return null;
            return (
              <div key={group.label} className="mb-6 last:mb-0">
                <div className="font-inter text-text-secondary text-xs uppercase tracking-widest mb-3">
                  {group.label}
                </div>
                <ul className="flex flex-wrap gap-3">
                  {others.map((c) => (
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
            );
          })}
        </div>
      </section>

      <QuoteSection
        heading={`Get a Free Quote in ${city.name}`}
        body={
          extended
            ? `Tell us what's on the wall now, or what you're planning, and roughly where in ${city.name} you are. We'll tell you what monitoring runs monthly, whether a takeover is possible, and when we can be out there.`
            : `Tell us what you need and roughly where in ${city.name} you are. We'll schedule a free on-site visit and put a fixed price in writing.`
        }
        defaultService={extended ? "Security Systems & Monitoring" : undefined}
        testimonialIndex={CITIES.indexOf(city)}
      />

      <CTABanner
        headline={
          extended ? `Monitoring ${city.name}, FL — 24/7` : `Protecting ${city.name} Since 2004`
        }
        body={
          extended
            ? `Free consultation for any ${city.name} property. Tell us what's already on the wall and we'll tell you whether it can be taken over, what monitoring runs monthly, and when we can be out there — in writing, before you commit to anything.`
            : `Free on-site consultation anywhere in ${city.name}. We'll walk the property, talk through what it actually needs, and put a fixed number in writing.`
        }
        ctaText="Get a Free Quote"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
