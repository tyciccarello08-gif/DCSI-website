import Image from "next/image";
import { Projector, Tv, Volume2, Cable, Settings, Wrench } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/home-theater";

export const metadata = pageMetadata({
  title: "Home Theater Installation in Tampa & Lutz",
  description:
    "Home theater rooms and media walls — projector and screen installation, TV mounting, surround sound, and hidden wiring. Hillsborough & Pasco, FL.",
  path: PATH,
});

const SERVICES = [
  {
    icon: Projector,
    title: "Projector & Screen Systems",
    description:
      "Ceiling-mounted projectors with fixed-frame or motorized screens, sized and positioned for your room's throw distance and seating rows — not guessed at.",
  },
  {
    icon: Tv,
    title: "TV Mounting & Media Walls",
    description:
      "Flush and articulating mounts on drywall, brick, stone, and over fireplaces, with power and HDMI run inside the wall so no cable is visible.",
  },
  {
    icon: Volume2,
    title: "Surround Sound",
    description:
      "5.1, 7.1, and Dolby Atmos layouts using in-wall, in-ceiling, or bookshelf speakers, with subwoofer placement chosen for the room rather than the corner that's convenient.",
  },
  {
    icon: Cable,
    title: "In-Wall Wiring",
    description:
      "Speaker wire, HDMI, and power run in-wall to code. On finished homes we fish walls and patch; on new construction we rough it in before drywall.",
  },
  {
    icon: Settings,
    title: "Calibration & Single-Remote Control",
    description:
      "Receiver setup, speaker distance and level calibration, and a single remote or app that turns the whole system on with one button.",
  },
  {
    icon: Wrench,
    title: "Racks & Equipment Closets",
    description:
      "Ventilated equipment racks in a closet or cabinet, so the gear is out of the room and still reachable when something needs attention.",
  },
];

const FAQS = [
  {
    q: "How much does a home theater installation cost in Tampa?",
    a: "It depends far more on the room than on the gear. A TV mount with in-wall wiring and a soundbar is a small job. A dedicated theater room with a projector, motorized screen, Atmos speaker layout, seating risers, and an equipment rack is a much larger project. The largest single cost driver is whether the walls are open — pre-wiring during construction costs a fraction of fishing walls in a finished home. We quote on site after seeing the room.",
  },
  {
    q: "Can you mount a TV above a fireplace?",
    a: "Usually, but it is worth a conversation first. Mounting above a fireplace puts the screen higher than ideal viewing height and exposes it to heat rising off the firebox. Where it makes sense we use a pull-down or articulating mount that brings the screen to eye level for viewing, and we check the heat at the mount location before committing.",
  },
  {
    q: "Do I need a dedicated room for a home theater?",
    a: "No. Most of what we install is in living rooms and bonus rooms. A dedicated light-controlled room gives the best picture from a projector, but a well-designed media wall with a large TV, in-wall speakers, and a properly placed subwoofer performs very well in an open room and fits how most families actually watch.",
  },
  {
    q: "Can you hide the wiring in a house that's already finished?",
    a: "Yes. Fishing wire through finished walls is standard work for us — it takes longer than pre-wire and sometimes needs small access holes that get patched, but it is almost always possible. Concrete block exterior walls, which are common in Florida, are the exception and may need a surface raceway painted to match.",
  },
  {
    q: "Will the system work with what I already own?",
    a: "Usually. If you have a receiver, speakers, or a TV worth keeping, we build around them and tell you honestly which pieces are worth replacing and which are not. We would rather do a smaller job well than sell you gear you did not need.",
  },
];

const GALLERY = [
  {
    src: "/images/11-home-theater-projector-surround.webp",
    alt: "Home theater with a projector screen and surround sound speakers installed by DCSI Inc.",
  },
  {
    src: "/images/09-home-theater-wall-mount.webp",
    alt: "Flush wall-mounted television with concealed wiring in a living room",
  },
  {
    src: "/images/new-construction-speaker-rough-in.jpg",
    alt: "In-ceiling speaker rough-in during new construction framing",
  },
  {
    src: "/images/10-commercial-tv-sports-bar.webp",
    alt: "Multi-screen commercial television installation in a sports bar",
  },
];

export default function HomeTheaterPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(PATH), faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Home Theater & AV", path: PATH }]} />}
        title="Home Theater & AV Installation"
        subtitle="The 'Sound' in Security & Sound. Projectors, media walls, surround sound, and wiring you never see — designed for your room and calibrated before we leave."
        ctaText="Get a Free Design Consultation"
        ctaHref="/contact"
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
              Designed for Your Room, Not a Catalog
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-5">
              A home theater is mostly a room problem, not a shopping problem. Seating distance
              sets screen size. Ceiling height and joist direction decide where speakers can
              actually go. Window placement determines whether a projector will ever look right
              during the day. We start by measuring the room, then specify equipment that fits it.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">
              We have been doing low voltage work in Tampa Bay since 2004, which means the wiring
              side is not an afterthought. The same crew that pre-wires security and structured
              cabling runs your speaker and HDMI lines — in-wall, to code, and invisible when
              we&apos;re done.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-block bg-accent hover:bg-accent-light text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
            >
              Call {CONTACT.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border"
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
            Complete Theater &amp; AV Services
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

      {/* Commercial AV */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Commercial</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
            Bars, Restaurants, Gyms &amp; Offices
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            Commercial AV is the same skill set at a different scale: multiple screens on
            independent sources, distributed audio zoned so the bar and the patio can run
            different content, and equipment racks a manager can operate without calling a
            technician. We handle the displays, the distribution, and the cabling behind both.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
            Home Theater Questions
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
        </div>
      </section>

      <CTABanner
        headline="Let's Design Your Theater"
        body="Free on-site consultation across Hillsborough and Pasco Counties. We measure the room, talk through options, and quote it honestly."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
