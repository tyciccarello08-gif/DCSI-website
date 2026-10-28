import Image from "next/image";
import { Network, Wifi, Server, Lock, Thermometer, Plug } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import AreaLinks from "@/components/AreaLinks";
import QuoteSection from "@/components/QuoteSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/structured-wiring";

export const metadata = pageMetadata({
  title: "Structured Wiring & Smart Home in Tampa Bay",
  description:
    "CAT6 cabling to a central panel, whole-home Wi-Fi design, and smart home integration for locks, thermostats, and lighting. Hillsborough & Pasco.",
  path: PATH,
});

const SERVICES = [
  {
    icon: Network,
    title: "CAT6 Data Cabling",
    description:
      "Hardwired network drops to TVs, offices, access points, and cameras. Anything that can be wired should be — it frees the Wi-Fi for the devices that genuinely need it.",
  },
  {
    icon: Server,
    title: "Structured Wiring Panels",
    description:
      "A central enclosure where data, coax, and fiber terminate on labeled patch panels. When something breaks later, the problem is found in minutes instead of hours.",
  },
  {
    icon: Wifi,
    title: "Whole-Home Wi-Fi Design",
    description:
      "Ceiling-mounted access points placed by coverage need rather than by where the modem happened to land. Florida block construction blocks signal badly, and one router rarely covers a house.",
  },
  {
    icon: Lock,
    title: "Smart Locks & Video Doorbells",
    description:
      "Keypad and app-controlled entry with per-person codes, integrated with your alarm system so unlocking the door can disarm it.",
  },
  {
    icon: Thermometer,
    title: "Thermostats & Lighting",
    description:
      "Smart thermostats and lighting control tied into the same app as your security, so away mode adjusts the house instead of just arming it.",
  },
  {
    icon: Plug,
    title: "Central Vacuum",
    description:
      "Central vac tubing and inlet rough-in, most economically done during construction alongside the rest of the low voltage package.",
  },
];

const FAQS = [
  {
    q: "What is structured wiring, in plain terms?",
    a: "It is running all the low voltage cable in a house — network, coax, phone, speaker, camera — back to one central panel instead of daisy-chaining things room to room. Everything terminates in one labeled place. It costs a little more up front and saves considerably every time something needs to be changed, added, or diagnosed later.",
  },
  {
    q: "Do I still need wired network if I have good Wi-Fi?",
    a: "Yes, and good Wi-Fi is usually the reason to want it. Access points perform best when each one has its own wired connection back to the switch. Wiring the fixed devices — TVs, desktops, game consoles, cameras, access points — leaves far more airtime for the phones and tablets that actually have to be wireless.",
  },
  {
    q: "Why is Wi-Fi so bad in Florida houses specifically?",
    a: "A lot of Florida homes are concrete block with stucco, and interior walls often have metal studs or tile. Both attenuate 5GHz Wi-Fi heavily. A single router in the corner of a block house frequently cannot cover the far end of the home at usable speed, which is why we design coverage with multiple wired access points rather than adding range extenders.",
  },
  {
    q: "Can this be added to an existing home?",
    a: "Partially, and honestly some of it is easy and some is not. Attic-accessible single-story homes retrofit well. Two-story homes and block exterior walls are harder and sometimes need surface raceway or a mix of wired backhaul and mesh. We walk the house first and tell you which drops are practical before quoting.",
  },
  {
    q: "Should I pre-wire during construction even if I'm not sure what I want yet?",
    a: "Generally yes — this is the single cheapest decision available to you. Pulling extra CAT6 while walls are open costs very little per drop. Adding one after drywall costs many times that. We routinely rough in more drops than a homeowner plans to use immediately and cap them in the wall for later.",
  },
];

const GALLERY = [
  {
    src: "/images/new-construction-structured-wiring.jpg",
    alt: "Structured wiring bundle run through new construction framing",
  },
  {
    src: "/images/new-construction-framing-prewire.jpg",
    alt: "Low voltage pre-wire roughed in before drywall",
  },
  {
    src: "/images/porch-ceiling-prewire.jpg",
    alt: "Camera and speaker cabling roughed into a porch ceiling",
  },
];

export default function StructuredWiringPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(PATH), faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Structured Wiring & Smart Home", path: PATH }]} />}
        title="Structured Wiring & Smart Home"
        subtitle="The backbone everything else runs on — CAT6 to a central panel, Wi-Fi designed for the house, and smart devices that work with your alarm instead of beside it."
        ctaText="Get a Free Quote"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Overview</span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
              Wire It Once, Properly
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-5">
              Cameras, alarm panels, thermostats, doorbells, streaming, and access points all
              depend on the same thing: a network that actually reaches where they are. Structured
              wiring is that foundation, and it is the part homeowners most often skip and most
              often regret.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">
              We install it as part of new construction pre-wire and retrofit it into finished
              homes. Either way it terminates in one labeled panel, so the next person who has to
              troubleshoot it — us or anyone else — can actually find what they need.
            </p>
            <a
              href="/services/new-construction"
              className="inline-block bg-accent hover:bg-accent-light text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
            >
              Building? See New Construction Pre-Wire
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-xl border border-border ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
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
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">What We Install</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            Cabling, Network &amp; Smart Home
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{s.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
          Structured Wiring Questions
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
      </section>

      <AreaLinks service="Structured Wiring & Smart Home" />

      <QuoteSection
        heading="Get a Free Wiring & Wi-Fi Quote"
        body="Tell us what isn't working (dead Wi-Fi spots, no wired drops, smart devices that drop off) and whether walls are open. We'll quote the fix in writing."
        defaultService="Structured Wiring / Smart Home"
        testimonialIndex={9}
      />

      <CTABanner
        headline="Wire It Right the First Time"
        body="Whether you're building in Wesley Chapel or fixing dead Wi-Fi in Carrollwood, we'll walk the property and quote it honestly."
        ctaText="Get a Free Quote"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
