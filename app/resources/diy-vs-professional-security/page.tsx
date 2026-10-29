import Link from "next/link";
import ArticleByline from "@/components/ArticleByline";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { articleSchema, faqSchema, pageMetadata } from "@/lib/seo";

const SLUG = "diy-vs-professional-security";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "DIY vs. Professional Security Systems: Which Fits?",
  description:
    "Self-install alarm kits vs. professionally installed systems for Florida homes — coverage, monitoring, wiring, contracts, and when each one makes sense.",
  path: PATH,
  type: "article",
});

const ROWS = [
  {
    factor: "Upfront cost",
    diy: "Lower. You buy a kit and spend a Saturday installing it.",
    pro: "Higher, because labor and a site-specific design are included.",
  },
  {
    factor: "Design",
    diy: "You decide where sensors go, usually from a box of a fixed size.",
    pro: "Someone walks the property and places sensors and cameras by approach.",
  },
  {
    factor: "Existing wiring",
    diy: "Ignored. A prewired house gets battery sensors on top of wire already in the walls.",
    pro: "Reused. Old hardwired sensors can usually be connected to a new panel.",
  },
  {
    factor: "Monitoring",
    diy: "Optional and often app-only. You are the one who has to notice the alert.",
    pro: "A monitoring center calls you and dispatches if you can't be reached.",
  },
  {
    factor: "Cameras",
    diy: "Mostly Wi-Fi cameras with cloud subscriptions and battery or plug-in power.",
    pro: "Usually wired PoE cameras recording locally to an NVR, no per-camera fee.",
  },
  {
    factor: "Environmental sensors",
    diy: "Water and temperature sensors are available on some platforms.",
    pro: "Water, temperature, power loss, and fire can report to the same center.",
  },
  {
    factor: "Service",
    diy: "Support by chat or phone. Replacement parts ship to you.",
    pro: "A technician comes out. Response time depends on the company.",
  },
];

const DIY_FITS = [
  "An apartment or small condo with one or two entry doors.",
  "A renter who needs to take the system along when they move.",
  "Someone who wants app notifications and is comfortable being the one who responds.",
  "A short-term need — a few months between houses, for example.",
];

const PRO_FITS = [
  "A house that already has alarm wiring in the walls, which most Tampa Bay homes built from the 1980s on do.",
  "Acreage, outbuildings, gates, or a dock — anything beyond a few doors and a hallway.",
  "A seasonal home, where nobody is there to respond to an app alert.",
  "A business that needs open/close reporting, user codes per employee, or fire monitoring.",
  "Anyone who wants recorded camera footage without paying a monthly cloud fee per camera.",
];

const FAQS = [
  {
    q: "Is a DIY security system as good as a professional one?",
    a: "For a small apartment with one entry door, a self-install kit can be perfectly adequate. The gap opens as the property gets larger or more complicated: more doors and windows, outbuildings, a gate, a dock, or existing hardwired sensors. Professional installation is mostly about design — putting sensors and cameras where the real approaches are — and about having a monitoring center rather than an app as the thing that responds.",
  },
  {
    q: "Can a DIY alarm system be professionally monitored?",
    a: "Many self-install platforms offer optional professional monitoring for a monthly fee. Check who actually answers the signal — it is often a wholesale center that serves many brands — and whether the system can report over cellular when the internet is down.",
  },
  {
    q: "My house already has an old alarm. Should I buy a DIY kit instead of fixing it?",
    a: "Usually not. The wiring already in the walls is the expensive part of a hardwired system, and it rarely wears out. In most cases replacing only the panel and communicator, and keeping the existing sensors, costs less than a full new system and avoids putting battery sensors on every door. See our guide to switching alarm companies for how that works.",
  },
  {
    q: "Do professionally installed systems require a long contract?",
    a: "Some companies require multi-year agreements, often to recover the cost of discounted equipment. DCSI doesn't require long-term monitoring contracts. Whoever you talk to, ask for the term length, the renewal clause, and who owns the equipment before you sign.",
  },
];

export default function DiyVsProfessionalSecurityPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "A comparison of self-install security kits and professionally installed alarm systems for Florida homes, covering design, wiring, monitoring, cameras, and cost.",
            published: R.published,
            modified: R.modified,
            image: "/images/05-dcsi-honeywell-touchscreen-panel.webp",
            about: "DIY vs. professionally installed security systems",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "DIY vs. Professional Security", path: PATH },
            ]}
          />
        }
        title="DIY vs. Professional Security Systems"
        subtitle="A self-install kit is a reasonable answer for some homes and the wrong one for others. The difference is mostly about the property, not the hardware."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          The sensors in a good self-install kit and the sensors on a professionally installed
          panel are not that different. Both detect a door opening and a body moving through a
          room. What differs is everything around them: where they go, what they report to, and
          who does something about it at 3 a.m.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          This is an honest comparison from a company that installs systems for a living. There
          are homes where we&apos;d tell you a kit is fine, and we say which ones below.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
            Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left font-inter text-sm">
              <thead className="bg-bg-card">
                <tr>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Factor</th>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">DIY kit</th>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Professional install</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.factor} className="border-t border-border">
                    <th scope="row" className="px-5 py-4 text-text-primary font-medium align-top">{row.factor}</th>
                    <td className="px-5 py-4 text-text-secondary align-top">{row.diy}</td>
                    <td className="px-5 py-4 text-text-secondary align-top">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-14">
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
            When a DIY Kit Makes Sense
          </h2>
          <ul className="space-y-3">
            {DIY_FITS.map((item) => (
              <li key={item} className="flex items-start gap-3 font-inter text-text-secondary leading-relaxed">
                <span className="text-accent mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
            When Professional Installation Pays Off
          </h2>
          <ul className="space-y-3">
            {PRO_FITS.map((item) => (
              <li key={item} className="flex items-start gap-3 font-inter text-text-secondary leading-relaxed">
                <span className="text-accent mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            The Question That Actually Decides It
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed mb-5">
            Ask what happens when the system goes off and you don&apos;t answer your phone. With an
            app-only system, the answer is nothing — the notification sits there. With a monitored
            system, someone works down your call list and dispatches if they can&apos;t verify a false
            alarm. Our{" "}
            <Link href="/resources/choosing-a-monitoring-company" className="text-accent hover:underline">
              guide to choosing a monitoring company
            </Link>{" "}
            covers what to ask about that center.
          </p>
          <p className="font-inter text-text-secondary leading-relaxed">
            The second question is what&apos;s already in your walls. Most homes across Hillsborough
            and Pasco built in the last forty years have alarm wiring to the doors and often the
            windows. Putting a battery kit on top of that throws away the most reliable part of the
            system. A{" "}
            <Link href="/services/alarm-monitoring-takeover" className="text-accent hover:underline">
              monitoring takeover
            </Link>{" "}
            or a panel replacement usually keeps it.
          </p>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="DIY vs. Pro Questions" />
        </div>
      </section>

      <RelatedResources slugs={["security-system-cost", "wired-vs-wireless-alarm-systems", "switching-alarm-companies"]} />

      <CTABanner
        headline="Not Sure Which You Need?"
        body="Tell us about the house and we'll say honestly whether it needs a professional system — and if it does, what it would take."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
