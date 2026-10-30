import Link from "next/link";
import { Store, Camera, KeyRound, Receipt, DoorOpen, Warehouse } from "lucide-react";
import ArticleByline from "@/components/ArticleByline";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { articleSchema, faqSchema, pageMetadata } from "@/lib/seo";

const SLUG = "small-business-security-checklist";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Small Business Security Checklist",
  description:
    "A security checklist for small businesses: monitored alarms with open/close reporting, cameras on registers and doors, employee codes, and after-hours gaps.",
  path: PATH,
  type: "article",
});

const AREAS = [
  {
    icon: Store,
    title: "Monitored alarm with open/close reporting",
    body: "Beyond detecting a break-in, a commercial panel can report every arm and disarm by user code. You'll know when the building was opened, by whom, and get a call if it wasn't closed at night.",
  },
  {
    icon: KeyRound,
    title: "A code for every employee",
    body: "Shared codes make open/close reports useless and can't be revoked when someone leaves. Individual codes, deleted on an employee's last day, are free and take minutes.",
  },
  {
    icon: Camera,
    title: "Cameras where losses actually happen",
    body: "Registers and counters, the back door, the receiving area, and the parking lot. Inside theft and delivery shortages are often a bigger cost than burglary.",
  },
  {
    icon: Receipt,
    title: "Footage that lasts long enough",
    body: "A disputed transaction or a slip-and-fall claim can surface weeks later. Size the recorder for thirty days or more, and check what your insurer or landlord requires.",
  },
  {
    icon: DoorOpen,
    title: "Access control on staff doors",
    body: "Fobs or phone credentials on the back door and office replace keys that walk out with former employees, and every entry is logged.",
  },
  {
    icon: Warehouse,
    title: "Yards, docks, and outbuildings",
    body: "Contractors, distributors, and growers often keep their most valuable equipment outdoors or in a separate building. Coverage has to reach it, with cameras that can identify a person at night.",
  },
];

const AFTER_HOURS = [
  "Is the alarm armed every night, and would anyone know if it weren't?",
  "Does the alarm still report if the internet or phone line is cut? Cellular reporting covers that.",
  "Who is on the call list, in what order, and are those numbers current?",
  "Is the camera recorder hidden or locked, so it can't be stolen along with the footage?",
  "Are there any keys held by people who no longer work for you?",
  "Is there a panic button at the register or front desk for a robbery during business hours?",
];

const FAQS = [
  {
    q: "What security does a small business need?",
    a: "At minimum, a monitored alarm with cellular reporting and a separate code for each employee, and cameras covering registers, entrances, and the back door. Depending on the business, access control for staff doors, panic buttons, and coverage for yards or outbuildings come next.",
  },
  {
    q: "What is open/close reporting?",
    a: "A feature of commercial alarm monitoring that records each time the system is disarmed and armed, and by which user code. It shows when the business was opened and closed and by whom, and can trigger a call if the building isn't armed by a set time.",
  },
  {
    q: "How long should a business keep security camera footage?",
    a: "Thirty days is a common target, and some insurers, landlords, and franchise agreements require more. Claims and disputes often come up weeks after the event. Our footage retention guide explains how to size a recorder.",
  },
  {
    q: "Is access control worth it for a small business?",
    a: "If you have more than a few employees or regular turnover, often yes. It replaces keys that can't be revoked with credentials that can, and logs every entry. Even a single controlled back door can solve most of the problem.",
  },
];

export default function SmallBusinessChecklistPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "A practical security checklist for small businesses covering monitored alarms, open/close reporting, employee codes, cameras, access control, and after-hours gaps.",
            published: R.published,
            modified: R.modified,
            image: "/images/10-commercial-tv-sports-bar.webp",
            about: "Small business security",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Small Business Security Checklist", path: PATH },
            ]}
          />
        }
        title="Small Business Security Checklist"
        subtitle="Most small business losses aren't a smashed window at 3 a.m. They're the back door left unlocked, the shared code, and the footage that overwrote itself."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          A business security system has a different job from a home one. It still has to catch a
          break-in, but much of its value is in the record it keeps: who opened the building, when
          it was closed, what happened at the register, and who came through the back door.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          This checklist is how we&apos;d walk a storefront, office, restaurant, or shop. Use it to
          find the gaps in what you already have.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            Six Areas to Cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((a) => (
              <div key={a.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <a.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{a.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-8">
          Six After-Hours Questions
        </h2>
        <ol className="space-y-4">
          {AFTER_HOURS.map((item, i) => (
            <li key={item} className="flex items-start gap-4">
              <span className="text-accent font-montserrat font-bold text-sm w-6 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-inter text-text-secondary leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
        <p className="font-inter text-text-secondary leading-relaxed mt-10">
          If any of those answers is &ldquo;I&apos;m not sure,&rdquo; that&apos;s where to start.
          Our{" "}
          <Link href="/services/commercial-security" className="text-accent hover:underline">
            commercial security
          </Link>{" "}
          and{" "}
          <Link href="/services/access-control" className="text-accent hover:underline">
            access control
          </Link>{" "}
          pages cover what we install for businesses, and the{" "}
          <Link href="/resources/security-camera-footage-retention" className="text-accent hover:underline">
            footage retention guide
          </Link>{" "}
          explains recorder sizing.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Business Security Questions" />
        </div>
      </section>

      <RelatedResources slugs={["security-camera-footage-retention", "monitored-smoke-detectors", "choosing-a-monitoring-company"]} />

      <CTABanner
        headline="Walk Your Business With Us"
        body="We'll look at your alarm, cameras, and doors, and tell you plainly where the gaps are."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
