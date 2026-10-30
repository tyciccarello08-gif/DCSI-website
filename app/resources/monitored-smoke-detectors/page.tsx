import Link from "next/link";
import { Flame, Thermometer, CloudFog, BellRing, Clock, ShieldCheck } from "lucide-react";
import ArticleByline from "@/components/ArticleByline";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { articleSchema, faqSchema, pageMetadata } from "@/lib/seo";

const SLUG = "monitored-smoke-detectors";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Monitored Smoke, Heat & CO Detectors for Homes",
  description:
    "How monitored smoke, heat, and carbon monoxide detectors differ from standalone alarms, where each belongs, and what happens when one trips while you're away.",
  path: PATH,
  type: "article",
});

const DEVICES = [
  {
    icon: Flame,
    title: "Monitored smoke detectors",
    body: "Connected to the alarm panel rather than only sounding locally. When one trips, the monitoring center gets a fire signal and calls the fire department and your call list — whether or not anyone is home.",
  },
  {
    icon: Thermometer,
    title: "Heat detectors",
    body: "For garages, attics, laundry rooms, and kitchens, where dust, exhaust, or cooking would set off a smoke detector constantly. They trip on a fixed temperature or a rapid rise.",
  },
  {
    icon: CloudFog,
    title: "Carbon monoxide detectors",
    body: "Any home with a gas appliance, a fireplace, or an attached garage should have CO detection. Monitored CO detectors report to the center like a fire signal, which matters because CO makes people drowsy rather than waking them.",
  },
  {
    icon: BellRing,
    title: "Sounding throughout the house",
    body: "A fire signal on the panel can sound every siren in the house, not just the detector in the room where the fire started — useful in a two-story home with bedrooms far from the kitchen.",
  },
  {
    icon: Clock,
    title: "Ten-year replacement",
    body: "Smoke detectors lose sensitivity with age. The common guidance is to replace them ten years after the date of manufacture printed on the back, monitored or not.",
  },
  {
    icon: ShieldCheck,
    title: "Supervision",
    body: "A monitored detector that loses power, is removed, or has a low battery reports a trouble to the center — instead of chirping in an empty house for weeks.",
  },
];

const FAQS = [
  {
    q: "What is a monitored smoke detector?",
    a: "A smoke detector connected to a monitored alarm panel. When it detects smoke, it sounds locally and also sends a fire signal to the monitoring center, which notifies the fire department and your call list. A standalone smoke alarm only makes noise, which helps no one if the house is empty.",
  },
  {
    q: "Can I add monitored smoke detectors to my existing alarm system?",
    a: "Usually, yes. Most alarm panels support wireless smoke, heat, and carbon monoxide detectors, and hardwired systems often have the capacity for them too. They're typically added alongside the existing standalone smoke alarms rather than replacing them.",
  },
  {
    q: "Do I still need my regular smoke alarms if I have monitored detectors?",
    a: "Yes. The standalone smoke alarms installed with the house are part of what building and fire codes require. Monitored detectors are added to the alarm system on top of them, so that a fire reaches a monitoring center as well as making noise.",
  },
  {
    q: "Why a heat detector instead of a smoke detector in the garage?",
    a: "Garages, kitchens, and attics produce exhaust, dust, steam, and temperature swings that make smoke detectors false alarm. A heat detector ignores those and trips on high temperature or a rapid rise instead.",
  },
  {
    q: "Does monitored fire protection lower homeowners insurance?",
    a: "With many carriers it does, and it's often credited separately from burglar alarm monitoring. See our guide to security system insurance discounts for how to request it.",
  },
];

export default function MonitoredSmokeDetectorsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "How monitored smoke, heat, and carbon monoxide detectors work on a home alarm system, where each belongs, and how they differ from standalone smoke alarms.",
            published: R.published,
            modified: R.modified,
            image: "/images/05-dcsi-honeywell-touchscreen-panel.webp",
            about: "Monitored smoke, heat, and carbon monoxide detection",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Monitored Smoke Detectors", path: PATH },
            ]}
          />
        }
        title="Monitored Smoke, Heat & CO Detectors"
        subtitle="A smoke alarm in an empty house is just noise. A monitored one calls the fire department."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Most people with a monitored alarm assume it covers fire. Often it doesn&apos;t. The
          smoke alarms on the ceiling came with the house and are wired only to each other — they
          make noise, and that&apos;s all. The alarm panel in the closet watches doors, windows,
          and motion, and knows nothing about smoke.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          That gap matters most exactly when nobody is home: at work, on vacation, or for the
          months a{" "}
          <Link href="/resources/vacant-home-security" className="text-accent hover:underline">
            seasonal home
          </Link>{" "}
          sits empty. It&apos;s usually inexpensive to close.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            What Monitored Life-Safety Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVICES.map((d) => (
              <div key={d.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <d.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{d.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            How to Tell What Your System Monitors
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            Look at the detectors on the ceiling. A standalone smoke alarm usually has a test
            button and a manufacturer&apos;s label meant for homeowners; a system detector is often
            plainer and labeled by the alarm manufacturer. The surest way is to call your monitoring
            company and ask which zones are fire zones — or put the system on test and press a
            detector&apos;s test button while they watch for the signal.
          </p>
        </div>
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            Fire Monitoring for Businesses
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            Commercial fire alarm systems are a different category, governed by fire code and local
            fire marshal requirements. If you&apos;re asking about a business, start with our{" "}
            <Link href="/services/commercial-security" className="text-accent hover:underline">
              commercial security
            </Link>{" "}
            page or the{" "}
            <Link href="/resources/small-business-security-checklist" className="text-accent hover:underline">
              small business security checklist
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Fire & CO Monitoring Questions" />
        </div>
      </section>

      <RelatedResources slugs={["security-system-insurance-discount", "vacant-home-security", "burglar-alarm-faq"]} />

      <CTABanner
        headline="Add Fire Monitoring to Your System"
        body="We'll add monitored smoke, heat, and CO detectors to the panel you already have and test every one with our center."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
