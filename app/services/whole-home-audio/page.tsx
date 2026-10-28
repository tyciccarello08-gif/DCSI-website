import Image from "next/image";
import { Speaker, Sun, Sliders, Smartphone, Layers, Volume2 } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import AreaLinks from "@/components/AreaLinks";
import QuoteSection from "@/components/QuoteSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/whole-home-audio";

export const metadata = pageMetadata({
  title: "Whole-Home & Outdoor Audio Installation, Tampa",
  description:
    "Multi-room audio with in-ceiling speakers, patio and pool-deck outdoor audio, and independent zone control from your phone. Hillsborough & Pasco.",
  path: PATH,
});

const SERVICES = [
  {
    icon: Speaker,
    title: "In-Ceiling & In-Wall Speakers",
    description:
      "Flush-mounted speakers that paint over to disappear into the ceiling. Placement is set by room shape and where people actually sit, not by symmetry on a blueprint.",
  },
  {
    icon: Sun,
    title: "Outdoor & Pool-Deck Audio",
    description:
      "Weather-rated speakers for lanais, patios, and pool decks — including landscape and rock speakers that disappear into planting beds. Built for Florida sun, humidity, and salt.",
  },
  {
    icon: Layers,
    title: "Independent Zones",
    description:
      "Kitchen, primary suite, patio, and garage each run their own source and volume, so one person's music doesn't take over the house.",
  },
  {
    icon: Smartphone,
    title: "Streaming & Voice Control",
    description:
      "Spotify, Apple Music, and AirPlay from any phone in the house, plus voice control if you already run Alexa, Google, or Apple Home.",
  },
  {
    icon: Sliders,
    title: "Amplification & Racks",
    description:
      "Multi-zone amplifiers in a ventilated central rack, so there is no equipment stack in your living room and only one place to look when something needs attention.",
  },
  {
    icon: Volume2,
    title: "Commercial Distributed Audio",
    description:
      "Zoned background music and paging for restaurants, gyms, offices, and retail — including patio zones that run separately from the dining room.",
  },
];

const FAQS = [
  {
    q: "Can whole-home audio be installed in a house that's already built?",
    a: "Yes. Retrofit in-ceiling speakers are designed for exactly this — they clamp into a cut hole in existing drywall, and we fish the wire through the attic or wall cavity. Florida single-story homes with attic access are especially straightforward. Two-story runs and concrete block exterior walls take more planning, and we tell you which zones are easy and which are expensive before you commit.",
  },
  {
    q: "How many zones do I actually need?",
    a: "Most homes are well served by four to six: kitchen and living area, primary suite, patio or pool deck, and one flex zone like a bonus room or garage. Every zone adds amplifier channels and wire, so it is worth being honest about which rooms you would genuinely use rather than wiring the whole house by default.",
  },
  {
    q: "Will outdoor speakers survive Florida weather?",
    a: "Properly specified ones will. We use weather-rated enclosures with UV-stable materials and corrosion-resistant hardware, and we mount them under soffit or eave protection where the layout allows. Salt air near the coast is harder on equipment than inland humidity, and we account for that in what we specify.",
  },
  {
    q: "Do in-ceiling speakers sound worse than regular speakers?",
    a: "Good in-ceiling speakers sound very good for what whole-home audio is: music throughout the house at comfortable listening levels. They are not trying to be a dedicated listening room or a home theater front stage. If critical listening is the goal, we would rather build you a proper two-channel or theater setup in one room and use in-ceiling for everywhere else.",
  },
  {
    q: "Can this be pre-wired during construction?",
    a: "Yes, and it is far cheaper. Speaker wire roughed in before drywall costs a fraction of retrofitting later, and it lets you leave speakers out of rooms you are not ready to finish — the wire is capped in the ceiling waiting. We do this routinely on new construction in Wesley Chapel and Land O' Lakes.",
  },
];

export default function WholeHomeAudioPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(PATH), faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Whole-Home Audio", path: PATH }]} />}
        title="Whole-Home & Outdoor Audio"
        subtitle="Music in every room and out on the lanai, from speakers you barely notice — with each zone under its own control."
        ctaText="Get a Free Quote"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Overview</span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
              Built Around the Lanai
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-5">
              In Florida, the outdoor living space is the room that matters. Most of the
              whole-home audio we install is anchored on the lanai, patio, or pool deck, with
              the kitchen and living area tied in so the sound follows people outside without
              anyone touching a stereo.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">
              We handle the speakers, the amplification, the wire, and the control — and because
              we are a low voltage contractor first, the wiring is run properly inside walls and
              ceilings rather than stapled along a baseboard.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-light text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src="/images/new-construction-speaker-rough-in.jpg"
              alt="In-ceiling speaker rough-in wiring installed during construction"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
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
            Audio Throughout the Property
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
          Whole-Home Audio Questions
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

      <AreaLinks service="Whole-Home Audio" />

      <QuoteSection
        heading="Get a Free Whole-Home Audio Quote"
        body="Tell us which rooms and outdoor areas you want covered. We'll plan the zones and speaker placement on site and give you a fixed price."
        defaultService="Whole-Home Audio"
        testimonialIndex={8}
      />

      <CTABanner
        headline="Hear It Everywhere"
        body="Free on-site consultation across Hillsborough and Pasco Counties — we'll walk the house, talk through zones, and quote it."
        ctaText="Get a Free Quote"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
