import Link from "next/link";
import { HeartPulse, BellRing, Mic, Users, Radio, BatteryCharging } from "lucide-react";
import ArticleByline from "@/components/ArticleByline";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { articleSchema, faqSchema, pageMetadata } from "@/lib/seo";

const SLUG = "medical-alert-alarm-systems";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Medical Alert Through Your Home Alarm System",
  description:
    "Adding medical alert pendants and emergency buttons to a monitored home alarm: how it works, two-way voice, call lists, range limits, and what to ask.",
  path: PATH,
  type: "article",
});

const PARTS = [
  {
    icon: HeartPulse,
    title: "Wearable pendant",
    body: "A waterproof button worn on a lanyard or wrist. Pressed, it sends a medical signal through the alarm panel to the monitoring center. It's meant to be worn in the shower — the bathroom is where a lot of falls happen.",
  },
  {
    icon: BellRing,
    title: "Wall-mounted buttons",
    body: "Fixed emergency buttons beside the bed and in the bathroom, for the times the pendant is on the nightstand. Low enough to reach from the floor is the right height.",
  },
  {
    icon: Mic,
    title: "Two-way voice",
    body: "Some panels let the monitoring operator speak and listen through the panel itself, so a person who can't reach a phone can still say what's wrong. Coverage depends on where the panel sits relative to the bedroom.",
  },
  {
    icon: Users,
    title: "A medical call list",
    body: "Medical signals can follow a different call list than burglary — a neighbor with a key first, then family, with emergency medical services dispatched when the situation calls for it.",
  },
  {
    icon: Radio,
    title: "Cellular reporting",
    body: "A medical signal that has to travel over a landline or home internet fails exactly when the power does. A cellular communicator with supervision is the reliable path.",
  },
  {
    icon: BatteryCharging,
    title: "Battery supervision",
    body: "Pendants and buttons run on batteries. The system should report a low battery to the monitoring center, not only beep at a keypad someone may not hear.",
  },
];

const QUESTIONS = [
  "Does the pendant work in the yard, on the lanai, or at the mailbox? Most alarm-based pendants only reach as far as the panel's wireless range.",
  "Is fall detection included, or only a button? Many systems offer only a button; if automatic fall detection matters, ask specifically.",
  "Can the operator speak through the panel, or only call the house phone?",
  "Who answers — the same center that monitors the burglar alarm, or a separate service?",
  "What happens if nobody on the call list answers?",
  "Will there be a key lockbox or gate code on file so responders can get in without breaking a door?",
];

const FAQS = [
  {
    q: "Can a home alarm system be used as a medical alert system?",
    a: "Yes. Most modern alarm panels support wireless medical pendants and emergency buttons that send a distinct medical signal to the monitoring center. The operator follows a medical call list and can dispatch emergency medical services, and on panels with two-way voice can talk to the person through the panel.",
  },
  {
    q: "Is a medical alert pendant on an alarm system better than a standalone service?",
    a: "It depends on what you need. An alarm-based pendant puts medical, burglary, fire, and environmental monitoring on one account and one call list, which suits someone who is home most of the time. A standalone mobile device with GPS suits someone who is out of the house often, because alarm pendants generally only work within range of the panel.",
  },
  {
    q: "Do medical alert pendants on alarm systems have fall detection?",
    a: "Some do and many don't. Plenty of alarm-system pendants are button-only, which depends on the person being able to press it. If automatic fall detection is a priority, ask about the specific device before buying.",
  },
  {
    q: "Does DCSI monitor medical alert devices?",
    a: "Yes. Medical and panic signals go to our own 24/7 monitoring center in Lutz on the same account as the rest of the system. We install and service the equipment ourselves.",
  },
];

export default function MedicalAlertAlarmSystemsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "How medical alert pendants and emergency buttons work on a monitored home alarm system, including two-way voice, call lists, range, and questions to ask.",
            published: R.published,
            modified: R.modified,
            image: "/images/keypad-honeywell-tuxedo-touchscreen.jpg",
            about: "Medical alert monitoring through home alarm systems",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Medical Alert Systems", path: PATH },
            ]}
          />
        }
        title="Medical Alert Through Your Alarm System"
        subtitle="A pendant on the same monitored system as the burglar alarm — one account, one call list, and a person on the other end."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          In communities like{" "}
          <Link href="/service-areas/sun-city-center" className="text-accent hover:underline">
            Sun City Center
          </Link>{" "}
          and{" "}
          <Link href="/service-areas/spring-hill" className="text-accent hover:underline">
            Spring Hill
          </Link>
          , medical alert comes up as often as burglary when people call about an alarm. That makes
          sense. For someone living alone, a fall with no way to call for help is a far more likely
          emergency than a break-in.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          If the house already has a monitored alarm — or is getting one — a medical pendant can
          usually be added to it rather than bought as a separate subscription from a separate
          company.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            What a Medical Alert Setup Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTS.map((p) => (
              <div key={p.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <p.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{p.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-8">
          Questions to Ask Before You Buy
        </h2>
        <ol className="space-y-4">
          {QUESTIONS.map((item, i) => (
            <li key={item} className="flex items-start gap-4">
              <span className="text-accent font-montserrat font-bold text-sm w-6 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-inter text-text-secondary leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
        <p className="font-inter text-text-secondary leading-relaxed mt-10">
          The other half of the answer is the monitoring center itself. Our{" "}
          <Link href="/resources/choosing-a-monitoring-company" className="text-accent hover:underline">
            guide to choosing a monitoring company
          </Link>{" "}
          covers in-house versus wholesale centers, and our{" "}
          <Link href="/services/security-monitoring" className="text-accent hover:underline">
            monitoring service
          </Link>{" "}
          page explains how ours works.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Medical Alert Questions" />
        </div>
      </section>

      <RelatedResources slugs={["choosing-a-monitoring-company", "vacant-home-security", "burglar-alarm-faq"]} />

      <CTABanner
        headline="Add Medical Alert to Your System"
        body="We'll add pendants and emergency buttons to an existing panel, or include them in a new system, monitored by our own team in Lutz."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
