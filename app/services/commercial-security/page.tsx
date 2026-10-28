import Image from "next/image";
import Link from "next/link";
import { Bell, Camera, KeyRound, ClipboardList, Flame, Thermometer } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import AreaLinks from "@/components/AreaLinks";
import QuoteSection from "@/components/QuoteSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/commercial-security";

export const metadata = pageMetadata({
  title: "Commercial Security Systems in Tampa Bay",
  description:
    "Business alarm systems, security cameras, and access control for Tampa Bay offices, retail, and warehouses — with open/close reporting and 24/7 in-house monitoring.",
  path: PATH,
});

const FEATURES = [
  {
    icon: Bell,
    title: "Monitored Intrusion Alarms",
    body: "Door, motion, and glass-break coverage with a user code per employee, so every arm and disarm is tied to a person rather than a shared code taped inside the closet.",
  },
  {
    icon: ClipboardList,
    title: "Open/Close Reporting",
    body: "A record of when the building was actually opened and closed, by whose code — and an alert from our center when it wasn't armed by closing time.",
  },
  {
    icon: Camera,
    title: "Commercial Camera Systems",
    body: "Register, entrance, stockroom, dock, and lot coverage on a recorder with retention sized to how long it takes you to notice a problem — not a default seven days.",
  },
  {
    icon: KeyRound,
    title: "Employee Access Control",
    body: "Fobs, cards, or phone credentials on doors and gates. Revoke a former employee in seconds instead of re-keying the building.",
  },
  {
    icon: Thermometer,
    title: "Environmental Monitoring",
    body: "Cooler and freezer temperature, water on the floor, and power loss reported through the same 24/7 center — the failures that cost a business more than most break-ins.",
  },
  {
    icon: Flame,
    title: "Fire & Life Safety Signals",
    body: "Smoke and heat detection monitored alongside intrusion, so one center and one account handle every alarm the building can raise.",
  },
];

const BUSINESS_TYPES = [
  {
    title: "Retail & Storefronts",
    body: "Point-of-sale and entrance cameras positioned for faces, not ceilings; glass-break on display windows; panic buttons at the register; and open/close reports that match the schedule you actually keep.",
  },
  {
    title: "Offices & Medical Suites",
    body: "Suite access control with schedules, visitor entry at the front door, after-hours intrusion coverage, and records rooms on their own credential group.",
  },
  {
    title: "Warehouses & Light Industrial",
    body: "Dock door and yard coverage, long-range cameras on fence lines, roll-up door contacts, and access control on the doors employees actually use — common along the I-4 corridor and around the airport.",
  },
  {
    title: "Restaurants & Bars",
    body: "Back door and cash office coverage, walk-in cooler temperature alerts, and cameras that hold up in kitchen heat and grease.",
  },
  {
    title: "Agricultural & Rural Operations",
    body: "Packing houses, equipment barns, and gated field access with long cable runs and cellular reporting tested at the actual panel location.",
  },
  {
    title: "Property Managers",
    body: "Multiple sites on one account, credentials a manager can issue and revoke without a service call, and one company to call when something breaks.",
  },
];

const FAQS = [
  {
    q: "How is a commercial security system different from a residential one?",
    a: "Mostly in accountability and scale. A business system usually has a user code per employee, open/close reporting, scheduled arming, access control on more than one door, and cameras sized for retention and evidence rather than a doorbell clip. The monitoring center also needs a dispatch and call list that reflects who is responsible after hours, which is rarely the same person who signs the contract.",
  },
  {
    q: "What is open/close reporting and do I need it?",
    a: "Open/close reporting records each time the system is disarmed and armed, and by which user code. Paired with a schedule, it lets the monitoring center alert you when the building wasn't armed by closing time or was opened when nobody should be there. For any business with employees who open or close without the owner present, it is one of the most useful features a system has.",
  },
  {
    q: "Can cameras, access control, and the alarm be on one system?",
    a: "Yes, and for most small and mid-size businesses that is the point. One installer, one monitoring account, and one company to call means the camera clip, the door access log, and the alarm event for the same incident can actually be lined up — instead of three vendors each pointing at the others.",
  },
  {
    q: "Do you monitor commercial accounts in house?",
    a: "Yes. Commercial signals are handled by our own team at our monitoring center in Lutz, the same as residential accounts, rather than being handed to a third-party wholesale center.",
  },
  {
    q: "Can you take over an existing business alarm system?",
    a: "Often. If the panel is an industry-standard model, we can usually reprogram it to report to our center, upgrade an outdated landline or 3G communicator, and keep existing sensors and wiring. See our monitoring takeover page for how that works.",
  },
];

export default function CommercialSecurityPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(PATH), faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Commercial Security", path: PATH }]} />}
        title="Commercial Security Systems for Tampa Bay Businesses"
        subtitle="Alarms, cameras, and access control on one account — designed around how your business actually opens, closes, and runs, and monitored 24/7 by our own team."
        ctaText="Get a Free Quote"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
                Business Security
              </span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">
              Most Business Losses Aren&apos;t Break-Ins
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-5">
              A business security system earns its keep on ordinary days: the door left unlocked
              overnight, the former employee whose code still works, the cooler that failed on a
              Saturday, the cash count that came up short with no footage worth reviewing.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed">
              We design around those. Every system starts with a site walk and a conversation about
              who opens, who closes, and what you&apos;d need to see on video after a bad day — then
              a fixed written quote.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/camera-dome-soffit-install.jpg"
              alt="Dome security camera installed by DCSI under an exterior soffit"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            What a Commercial System Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <f.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{f.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
          By Type of Business
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_TYPES.map((b) => (
            <div key={b.title} className="border border-border rounded-xl p-6">
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{b.title}</h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
        <p className="font-inter text-text-secondary text-sm leading-relaxed mt-10 max-w-3xl">
          Related:{" "}
          <Link href="/services/access-control" className="text-accent hover:underline">
            access control &amp; gates
          </Link>
          ,{" "}
          <Link href="/services/camera-systems" className="text-accent hover:underline">
            camera systems
          </Link>
          , and{" "}
          <Link href="/services/hoa-cdd" className="text-accent hover:underline">
            HOA &amp; CDD community security
          </Link>
          . Commercial work is a large share of what we do in{" "}
          <Link href="/service-areas/brandon" className="text-accent hover:underline">
            Brandon
          </Link>
          ,{" "}
          <Link href="/service-areas/lakeland" className="text-accent hover:underline">
            Lakeland
          </Link>
          , and{" "}
          <Link href="/service-areas/town-n-country" className="text-accent hover:underline">
            Town &apos;n&apos; Country
          </Link>
          .
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Commercial Security Questions" />
        </div>
      </section>

      <AreaLinks service="Commercial Security" />

      <QuoteSection
        heading="Get a Free Commercial Security Quote"
        body="Storefront, office, warehouse, or multi-site: tell us what you're protecting and we'll walk the site and put a written proposal in front of you."
        defaultService="Commercial Security"
        testimonialIndex={2}
      />

      <CTABanner
        headline="Walk the Building With Us"
        body="A free site visit, a conversation about how your business opens and closes, and a fixed written quote."
        ctaText="Get a Free Quote"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
