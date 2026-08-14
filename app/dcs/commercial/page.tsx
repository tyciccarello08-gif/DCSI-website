import Image from "next/image";
import Link from "next/link";
import { Building, DoorOpen, KeyRound, ScrollText, Store, Warehouse } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs/commercial";

export const metadata = pageMetadata({
  title: "DCS Commercial Security — Business Alarms & Access Control",
  description:
    "DCS (DCSI, Inc.) commercial security in Tampa Bay: business alarm systems, card and code access control, gates, cameras, and HOA/CDD community security since 2004.",
  path: PATH,
});

const PROPERTY_TYPES = [
  {
    icon: Store,
    title: "Retail and restaurant",
    body: "Perimeter and interior detection, camera coverage over registers and back doors, and open/close reporting so you can see who disarmed at 5:40am and who armed at midnight. Reporting is usually the part owners find most valuable and the part they didn't know to ask for.",
  },
  {
    icon: Warehouse,
    title: "Warehouse and industrial",
    body: "Large open spans, roll-up doors, and yards — a different detection problem from an office, and one where camera placement and exterior coverage carry more of the load than interior motions.",
  },
  {
    icon: Building,
    title: "Office and professional",
    body: "Suite-level arming, access control on the main entry, and after-hours schedules for cleaning crews and staff who work late. Access records answer the question a camera can't: who used a credential, and when.",
  },
  {
    icon: DoorOpen,
    title: "HOA and CDD communities",
    body: "Gate access and entry control, amenity center and pool cameras, and common-area coverage — scoped for a board that has to approve it, document it, and live with it across turnover.",
  },
];

const ACCESS_FEATURES = [
  {
    icon: KeyRound,
    title: "Credentials instead of keys",
    body: "Cards, fobs, and codes can be revoked in seconds. A key that walks off with a former employee can't be, which is why a lost key is a rekey and a lost fob is a two-minute administrative change.",
  },
  {
    icon: ScrollText,
    title: "Schedules and audit trail",
    body: "Doors unlock and lock on a schedule instead of by hand, and the system keeps a record of which credential opened which door at what time. For a business with turnover or after-hours vendors, that record is often the whole reason to install the system.",
  },
];

const FAQS = [
  {
    q: "Does DCS do commercial security, or only residential?",
    a: "Both. Commercial work is a substantial part of what DCSI does — retail, restaurants, warehouses, offices, and community associations — alongside residential systems. Commercial installs generally add access control, door schedules, per-user reporting, and larger camera systems to the intrusion detection layer.",
  },
  {
    q: "What is access control, and does my business need it?",
    a: "Access control replaces mechanical keys with credentials — cards, fobs, or codes — that can be issued and revoked individually, combined with door schedules and a record of who opened what and when. The practical test for whether you need it: if losing a key would mean rekeying doors, or if you cannot currently answer who was in the building at 9pm last Thursday, access control solves a problem you already have.",
  },
  {
    q: "Can DCS handle security for an HOA or CDD community?",
    a: "Yes, and community work is scoped differently from a single building. It typically covers entry and exit gate access, amenity center and pool cameras, and common-area coverage, with the documentation a board needs to approve a project and hand it cleanly to the next board. There is a dedicated guide on this site written for HOA and CDD board members.",
  },
  {
    q: "Can you monitor a business alarm after hours and on weekends?",
    a: "That is when most of it matters. Monitoring runs 24/7 from our own center in Lutz, and commercial accounts commonly add open/close supervision — reporting on whether the system was armed and disarmed at expected times, which catches both a missed closing and an unexpected 3am disarm.",
  },
  {
    q: "Does DCS work with builders and general contractors?",
    a: "Yes. Low-voltage rough-in for new commercial and residential construction is a distinct line of work, scheduled against framing rather than against move-in. The builder pre-wire guide on this site covers the timing and what should be in the rough-in even if the security system itself is a later decision.",
  },
  {
    q: "Can DCS service multiple locations?",
    a: "Yes, within our service footprint — Hillsborough and Pasco Counties for install and service, extending across Central Florida from Venice and Bradenton to Ocala for monitoring and scheduled work. Multi-site accounts are administered together so reporting and user changes don't have to be repeated site by site.",
  },
];

export default function DcsCommercialPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "DCS Commercial Security — Business Alarm Systems and Access Control",
            description:
              "Commercial security from DCS (DCSI, Inc.): business alarm systems, card and code access control, gate entry, camera coverage, open/close reporting, and HOA/CDD community security in Tampa Bay.",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />

      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "DCS", path: "/dcs" },
              { name: "Commercial", path: PATH },
            ]}
          />
        }
        title="DCS Commercial Security"
        subtitle="Alarms, access control, gates, and cameras for Tampa Bay businesses and communities — with monitoring handled in house."
        ctaText="Request a Site Walk"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed">
          A commercial system answers questions a residential one never has to: who has a
          credential, which doors unlock when, whether the building actually got armed last night,
          and who to call at 2am when it didn&apos;t. The detection hardware is the easy part — the
          reporting and the procedure around it are what you end up using every week.
        </p>
      </section>

      {/* Property types */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            Properties We Secure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROPERTY_TYPES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-montserrat font-bold text-text-primary text-lg">{title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gate image */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-56 sm:h-72">
          <Image
            src="/images/gate-access-control.jpg"
            alt="Community gate access control system installed by DCSI Inc."
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/55 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="font-montserrat font-extrabold text-xl sm:text-3xl text-text-primary max-w-lg leading-snug">
                Gates, doors, and everyone<br />
                <span className="text-accent">who comes through them.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access control */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
          Why Access Control Usually Pays for Itself
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-12 max-w-2xl">
          Two capabilities, both of which are administrative rather than dramatic — and both of
          which get used constantly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ACCESS_FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-bg-card border border-border rounded-xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={18} className="text-accent flex-shrink-0" aria-hidden="true" />
                <h3 className="font-montserrat font-bold text-text-primary text-lg">{title}</h3>
              </div>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="font-inter text-text-secondary text-sm leading-relaxed mt-10">
          On a board?{" "}
          <Link href="/resources/hoa-board-security-guide" className="text-accent hover:underline">
            The HOA &amp; CDD board guide
          </Link>{" "}
          is written for approving and documenting this kind of project. Building?{" "}
          <Link href="/resources/builder-prewire-guide" className="text-accent hover:underline">
            The builder pre-wire guide
          </Link>{" "}
          covers rough-in timing.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Commercial Questions" />
        </div>
      </section>

      <DcsPageLinks exclude="commercial" />

      <CTABanner
        headline="Let's Walk Your Site"
        body="Commercial quotes start with someone looking at the doors, the yard, and how your people actually move through the building."
        ctaText="Request a Site Walk"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
