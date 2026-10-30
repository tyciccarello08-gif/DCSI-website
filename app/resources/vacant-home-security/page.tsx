import Link from "next/link";
import { Droplets, Thermometer, PlugZap, Users, Radio, Camera } from "lucide-react";
import ArticleByline from "@/components/ArticleByline";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { articleSchema, faqSchema, pageMetadata } from "@/lib/seo";

const SLUG = "vacant-home-security";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Snowbird & Vacant Home Security Checklist",
  description:
    "Protecting a seasonally empty Florida home: water and A/C failure sensors, power-loss alerts, a local keyholder, and monitoring that reports its own faults.",
  path: PATH,
  type: "article",
});

const LAYERS = [
  {
    icon: Droplets,
    title: "Water sensors",
    body: "Under every sink, beside the water heater and washing machine, and in the A/C air handler's drain pan. A clogged condensate line is one of the most common ways an empty Florida house floods. Pair the sensors with an automatic shutoff valve and a leak becomes a wet floor instead of a remodel.",
  },
  {
    icon: Thermometer,
    title: "Temperature monitoring",
    body: "In Florida the danger is heat, not cold. A failed A/C in July means humidity, mold, and damaged furnishings within days. A high-temperature sensor on the alarm turns that into a phone call the same afternoon.",
  },
  {
    icon: PlugZap,
    title: "Power-loss reporting",
    body: "A tripped breaker or a long outage takes the A/C, the refrigerator, and the cameras with it. The alarm panel can report AC power loss on its standby battery, which is often the first anyone hears of it.",
  },
  {
    icon: Radio,
    title: "Supervised cellular communicator",
    body: "A system that silently stops reporting is worse than no system, because you think you're covered. Supervision means the center expects regular check-ins and raises a trouble when one is missed.",
  },
  {
    icon: Users,
    title: "A local keyholder on the call list",
    body: "When an alarm or a water sensor trips, someone with a key who lives twenty minutes away is more useful than an owner in Ohio. Put them first on the call list for the months you're gone, and tell them what the system can report.",
  },
  {
    icon: Camera,
    title: "Cameras on the approaches",
    body: "Front entry, driveway, and the back of the lot — particularly on lakefront and golf-course homes, where the rear is the approach nobody can see from the street. Make sure the recorder is on a battery backup.",
  },
];

const BEFORE_YOU_LEAVE = [
  "Test every sensor with the monitoring center on the line, including water and temperature.",
  "Replace batteries in wireless sensors due within the next six months.",
  "Move your local keyholder to the top of the call list and confirm their number.",
  "Leave the A/C running at a moderate setting to control humidity rather than turning it off.",
  "Shut the main water supply if you don't have an automatic shutoff valve.",
  "Tell the HOA or community gate who is authorized to enter while you're away.",
  "Hold the mail and stop deliveries — a stack of packages advertises an empty house.",
  "Read your homeowner's policy for vacancy or unoccupancy provisions, which can limit coverage after a set period.",
];

const FAQS = [
  {
    q: "What is the best security setup for a snowbird home in Florida?",
    a: "A monitored alarm with a supervised cellular communicator, water sensors at every plumbing fixture and the A/C drain pan, a high-temperature sensor for A/C failure, power-loss reporting, and a local keyholder at the top of the call list. Cameras on the main approaches add visibility, but the environmental sensors are usually what prevents the expensive surprises.",
  },
  {
    q: "Can an alarm system detect water leaks and A/C failure?",
    a: "Yes. Most modern alarm panels support water (flood) sensors and temperature sensors on the same system as the door contacts and motion detectors. They report through the same monitoring center, so a leak at 2 a.m. gets a call the same way a break-in does, rather than only a notification on a phone nobody is watching.",
  },
  {
    q: "Should I turn off the A/C when I leave my Florida home for the summer?",
    a: "Generally no. Turning the A/C off lets indoor humidity climb, which leads to mold and damage to furnishings and wood. Most owners leave it running at a moderate, higher-than-normal setting, and some add a dehumidifier. A temperature sensor on the alarm tells you if the system fails while you are gone.",
  },
  {
    q: "Do I need a long-term contract to monitor a seasonal home?",
    a: "Not with us. DCSI doesn't require long-term monitoring contracts, and seasonal homes are monitored by the same in-house team in Lutz as year-round ones. The monitoring itself has to run year-round, though — the empty months are when it matters most.",
  },
];

export default function VacantHomeSecurityPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "A checklist for protecting a seasonally vacant Florida home with monitored water, temperature, and power-loss sensors, a local keyholder, and supervised cellular reporting.",
            published: R.published,
            modified: R.modified,
            image: "/images/13-residential-home-exterior.webp",
            about: "Vacant and seasonal home security",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Snowbird & Vacant Home Security", path: PATH },
            ]}
          />
        }
        title="Snowbird & Vacant Home Security"
        subtitle="An empty Florida house is more likely to be ruined by a clogged A/C drain than by a burglar. A good system watches for both."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          A large share of homes across our footprint sit empty for part of the year — in{" "}
          <Link href="/service-areas/zephyrhills" className="text-accent hover:underline">
            Zephyrhills
          </Link>
          ,{" "}
          <Link href="/service-areas/venice" className="text-accent hover:underline">
            Venice
          </Link>
          ,{" "}
          <Link href="/service-areas/sarasota" className="text-accent hover:underline">
            Sarasota
          </Link>
          , and{" "}
          <Link href="/service-areas/winter-haven" className="text-accent hover:underline">
            Winter Haven
          </Link>{" "}
          especially. Nobody is there to hear a siren, notice a wet floor, or feel the house getting
          hot.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          That changes what the security system is for. On a seasonal home the alarm is less a
          deterrent than a remote sense of the house — the only way to know what is happening
          inside it from a thousand miles away.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            Six Layers for an Empty House
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LAYERS.map((l) => (
              <div key={l.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <l.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{l.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-8">
          Before You Leave for the Season
        </h2>
        <ol className="space-y-4">
          {BEFORE_YOU_LEAVE.map((item, i) => (
            <li key={item} className="flex items-start gap-4">
              <span className="text-accent font-montserrat font-bold text-sm w-6 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-inter text-text-secondary leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
        <p className="font-inter text-text-secondary leading-relaxed mt-10">
          Leaving during hurricane season? Our{" "}
          <Link href="/resources/hurricane-season-security" className="text-accent hover:underline">
            hurricane season checklist
          </Link>{" "}
          covers backup power and evacuation.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Seasonal Home Questions" />
        </div>
      </section>

      <RelatedResources slugs={["hurricane-season-security", "rental-property-security", "monitored-smoke-detectors"]} />

      <CTABanner
        headline="Leaving for the Season?"
        body="We'll add water, temperature, and power-loss sensors to your existing system and set up a call list that reaches someone local first."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
