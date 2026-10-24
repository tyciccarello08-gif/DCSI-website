import Link from "next/link";
import Image from "next/image";
import { Hammer, CalendarClock, Ruler, DollarSign, ClipboardCheck, Layers } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { ORG_ID, abs, faqSchema, pageMetadata } from "@/lib/seo";

const PATH = "/resources/builder-prewire-guide";
const R = resourceBySlug("builder-prewire-guide");

export const metadata = pageMetadata({
  title: "Builder's Guide to Low Voltage Pre-Wire",
  description:
    "When to schedule low voltage rough-in, what belongs in a base pre-wire package, how to price buyer upgrades, and what causes warranty callbacks.",
  path: PATH,
  type: "article",
});

const SEQUENCE = [
  {
    icon: CalendarClock,
    title: "Rough-in window: after electrical, before insulation",
    body: "Low voltage goes in once the framing is up and the electrician has pulled line voltage, and before insulation and drywall. Coming in ahead of the electrician means our cable gets moved; coming after insulation means fighting through it. On most residential jobs the window is a few days, and a builder who calls two days ahead gets the crew they wanted.",
  },
  {
    icon: Ruler,
    title: "Keep low voltage separated from line voltage",
    body: "Parallel runs beside electrical induce noise into audio and data lines. Cable should cross at right angles rather than running alongside, and should keep separation where it must run parallel. This is basic and still the most common defect we find on takeover jobs from other trades.",
  },
  {
    icon: Layers,
    title: "Central panel location, decided early",
    body: "The structured wiring panel needs a location with power, ventilation, and access that is not a closet the homeowner will later fill with coats. Garage walls and dedicated utility closets work well. Deciding this at rough-in avoids a distribution point in an unreachable spot, which is a permanent annoyance for the buyer.",
  },
  {
    icon: Hammer,
    title: "Rough in more than the base package",
    body: "Cable is cheap while walls are open and expensive afterward. Pulling extra CAT6 to likely TV walls, a patio speaker pair, and camera locations at the front and rear costs very little at rough-in and gets capped in the wall. It costs many times more to add later, which makes it an easy upsell and a genuine buyer benefit.",
  },
  {
    icon: ClipboardCheck,
    title: "Document and photograph before drywall",
    body: "Photograph every wall with cable in it before it closes, and keep the labeled panel schedule. When a buyer asks two years later where the speaker wire went, or a drywall screw pierces a run, that documentation converts a several-hour diagnostic into a ten-minute fix.",
  },
  {
    icon: DollarSign,
    title: "Trim-out and buyer handoff",
    body: "Trim happens after paint: devices, plates, panel termination, and testing. Build in a buyer walkthrough at closing — showing the homeowner their panel, their app, and how to arm the system prevents most first-year support calls, which are the ones that land on the builder rather than on us.",
  },
];

const PACKAGE_TIERS = [
  {
    tier: "Base package",
    items: [
      "Alarm pre-wire: exterior doors, ground-floor windows, one motion, keypad location",
      "Structured wiring panel with power",
      "CAT6 to two or three likely TV and office locations",
      "Coax to the primary media wall",
      "Smoke and CO detector interconnect coordination",
    ],
  },
  {
    tier: "Common buyer upgrades",
    items: [
      "Camera rough-in at front door, driveway, and rear elevation",
      "In-ceiling speaker pairs in kitchen, primary suite, and lanai",
      "Home theater pre-wire: surround layout plus HDMI to a projector location",
      "Additional CAT6 drops and ceiling-mounted Wi-Fi access point locations",
      "Central vacuum tubing and inlets",
      "Video doorbell and smart lock power and wiring",
    ],
  },
];

const FAQS = [
  {
    q: "When should low voltage pre-wire be scheduled during construction?",
    a: "After framing and electrical rough-in, and before insulation and drywall. That is the window where cable can be run cleanly and stapled to studs. Scheduling before the electrician usually means low voltage cable gets displaced; scheduling after insulation means slower, messier work and a higher price for the same result.",
  },
  {
    q: "How much does new construction pre-wire cost per home?",
    a: "It scales with the number of drops, the size of the home, and how much of the audio and camera package the buyer takes. Volume matters a great deal — builders running multiple homes through the same community get materially better pricing than a one-off. We quote per plan rather than per home so the same package can be repeated across a subdivision.",
  },
  {
    q: "Is it worth pre-wiring if the buyer hasn't chosen options yet?",
    a: "Usually yes for the inexpensive items. Running extra CAT6 and a capped speaker wire pair costs little while the walls are open and preserves the option. If the buyer never activates it, nothing is lost but a small amount of cable; if they do, you avoided a retrofit that costs several times more and involves cutting into finished drywall.",
  },
  {
    q: "Can you coordinate directly with our superintendent?",
    a: "Yes, and it works better than routing through the office. We schedule off the superintendent's rough-in date, confirm the day before, and work around the other trades on site. For multi-home communities we generally set a recurring cadence so pre-wire slots into the standard build sequence rather than being booked one house at a time.",
  },
  {
    q: "Who handles the buyer after closing?",
    a: "We do, if the buyer activates monitoring or an upgrade with us. That keeps first-year support calls off the builder. We also do the buyer walkthrough at handover, which is the single most effective thing for reducing 'the alarm is beeping' calls in the first ninety days.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${abs(PATH)}#article`,
  headline: "Builder's Guide to Low Voltage Pre-Wire",
  description:
    "Scheduling, scope, and coordination guidance for low voltage rough-in on residential new construction in Hillsborough and Pasco Counties.",
  url: abs(PATH),
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  mainEntityOfPage: { "@type": "WebPage", "@id": abs(PATH) },
  image: abs("/images/new-construction-framing-prewire.jpg"),
  datePublished: R.published,
  dateModified: R.modified,
  inLanguage: "en-US",
  audience: { "@type": "Audience", audienceType: "Home builders, developers, and superintendents" },
};

export default function BuilderPrewireGuidePage() {
  return (
    <>
      <JsonLd data={[articleSchema, faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Resources", path: "/resources" }, { name: "Builder Pre-Wire Guide", path: PATH }]} />}
        title="Builder's Guide to Low Voltage Pre-Wire"
        subtitle="When to schedule rough-in, what belongs in a base package, which upgrades sell, and the coordination details that decide whether you get callbacks in year one."
        ctaText="Request Builder Pricing"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed">
          Low voltage is a small line item that generates a disproportionate share of first-year
          warranty calls when it is done badly — usually because it was scheduled at the wrong
          point in the sequence or because nobody documented where the cable went. The Wesley
          Chapel and Land O&apos; Lakes corridor is building fast enough that getting this right
          across a whole community compounds quickly.
        </p>
      </section>

      {/* Sequence */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            Getting the Sequence Right
          </h2>
          <div className="space-y-6">
            {SEQUENCE.map((s) => (
              <div key={s.title} className="bg-bg-card border border-border rounded-xl p-7 flex gap-5">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <s.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{s.title}</h3>
                  <p className="font-inter text-text-secondary text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
          What Belongs in the Package
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed max-w-2xl mb-14">
          A defensible base package plus a clear upgrade menu converts better than a single
          all-in number, and it lets the buyer feel like they chose rather than were sold.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          {PACKAGE_TIERS.map((t) => (
            <div key={t.tier} className="bg-bg-card border border-border rounded-xl p-7">
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-5">{t.tier}</h3>
              <ul className="space-y-3">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="font-inter text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: "/images/new-construction-framing-prewire.jpg", alt: "Low voltage cable run through new construction framing" },
            { src: "/images/new-construction-structured-wiring.jpg", alt: "Structured wiring bundle at the panel location" },
            { src: "/images/new-construction-speaker-rough-in.jpg", alt: "In-ceiling speaker rough-in before drywall" },
            { src: "/images/porch-ceiling-prewire.jpg", alt: "Camera and speaker cabling roughed into a porch ceiling" },
          ].map((img) => (
            <div
              key={img.src}
              className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border"
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
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
            Builder Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
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
          <p className="font-inter text-text-secondary text-sm leading-relaxed mt-8">
            See{" "}
            <Link href="/services/new-construction" className="text-accent hover:underline">
              new construction services
            </Link>{" "}
            for scope, or{" "}
            <Link href="/services/structured-wiring" className="text-accent hover:underline">
              structured wiring
            </Link>{" "}
            for the data side in detail.
          </p>
        </div>
      </section>

      <RelatedResources slugs={["wired-vs-wireless-alarm-systems", "hoa-board-security-guide", "security-system-cost"]} />

      <CTABanner
        headline="Builder & Developer Pricing"
        body="Volume pricing per plan across Hillsborough and Pasco Counties, scheduled off your superintendent's rough-in date."
        ctaText="Request Builder Pricing"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
