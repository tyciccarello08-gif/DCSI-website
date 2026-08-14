import Image from "next/image";
import Link from "next/link";
import { Building2, CalendarDays, MapPin, Phone, ShieldCheck, Wrench } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY, CONTACT, SERVICE_COUNTIES } from "@/lib/constants";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs";

export const metadata = pageMetadata({
  title: "DCS Security — DCSI, Inc. of Lutz, FL",
  description:
    "Searching for DCS Security in Tampa Bay? DCS is DCSI, Inc. of Lutz, FL — alarm systems, cameras, and 24/7 in-house monitoring since 2004. (813) 949-6500.",
  path: PATH,
});

/** The facts a branded search is usually after, in the order they get asked for. */
const QUICK_FACTS = [
  { icon: Building2, label: "Legal name", value: "DCSI, Inc. — “Security & Sound”" },
  { icon: Phone, label: "Phone", value: CONTACT.phone },
  { icon: MapPin, label: "Office", value: CONTACT.address },
  { icon: CalendarDays, label: "In business since", value: COMPANY.founded },
  { icon: ShieldCheck, label: "Monitoring", value: "24/7, in house — not outsourced" },
  { icon: Wrench, label: "Work performed", value: "Alarms, cameras, access control, AV, low-voltage wiring" },
];

const FAQS = [
  {
    q: "Is DCS the same company as DCSI?",
    a: "Yes. The legal name is DCSI, Inc., and the company does business as DCSI, Inc. “Security & Sound.” Customers and referrals routinely shorten it to DCS, so the two names point at the same security company in Lutz, Florida, at (813) 949-6500. If you were given the name “DCS” by a neighbor, builder, or HOA in the Tampa Bay area, this is almost certainly who they meant.",
  },
  {
    q: "What does DCS Security do?",
    a: "DCSI designs, installs, services, and monitors security systems: residential and commercial burglar alarms, CCTV and IP camera systems, gate and access control for HOAs and CDDs, plus home theater, whole-home audio, and structured low-voltage wiring. Alarm monitoring is handled in house, 24 hours a day, from the Lutz office rather than being contracted out to a national wholesale center.",
  },
  {
    q: "Where is DCS Security located?",
    a: `The office is at ${CONTACT.address}, on the Hillsborough–Pasco county line just north of Tampa. It is a real staffed office, not a mailbox or a dispatch address, and it is where the monitoring center operates from.`,
  },
  {
    q: "What areas does DCS Security cover?",
    a: "Installation and service concentrate on Hillsborough and Pasco Counties — Lutz, Wesley Chapel, Land O' Lakes, Odessa, Carrollwood, Westchase, New Tampa, Brandon, and Tampa. Monitoring and scheduled installation extend across Central Florida from Venice and Bradenton north to Ocala and east to Lakeland and Winter Haven.",
  },
  {
    q: "How long has DCS been in business?",
    a: `Since ${COMPANY.founded}. That is more than twenty years under the same name in the same market, which is worth checking on any alarm company you are considering — the industry has a lot of turnover, and a panel is only as good as whoever is still around to service it in year eight.`,
  },
  {
    q: "Is DCS Security a national company?",
    a: "No, and it does not present itself as one. DCSI is an independently owned Florida security company operating from a single office in Lutz. Other unrelated businesses use “DCS” in their names in other states and other industries; DCSI is not affiliated with any of them.",
  },
];

export default function DcsHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "DCS Security — DCSI, Inc. of Lutz, Florida",
            description:
              "Reference page for DCS Security, the short name for DCSI, Inc. of Lutz, Florida — a security and sound company founded in 2004 offering alarm systems, camera systems, access control, and 24/7 in-house monitoring across Hillsborough and Pasco Counties.",
            type: "CollectionPage",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />

      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "DCS", path: PATH }]} />}
        title="Looking for DCS Security? You're in the Right Place."
        subtitle="DCS is how people shorten DCSI, Inc. — the security and sound company in Lutz, Florida, protecting Tampa Bay homes and businesses since 2004."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* The name */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          If someone handed you the name <strong className="text-text-primary">DCS</strong> — a
          neighbor whose alarm we installed, a builder we pre-wired for, an HOA board that hired us
          for gate access — this is the company they meant. The legal name is{" "}
          <strong className="text-text-primary">DCSI, Inc.</strong>, and the fourth letter goes
          missing constantly: on the phone, in referrals, and in the search bar. Both names lead to
          the same office on Lutz Lake Fern Road and the same number, {CONTACT.phone}.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          This page exists so nobody gets lost between the two. Below are the basics, then a set of
          pages answering the specific things people ask once they&apos;ve found us — what we install,
          who watches the alarm, what to do when the panel beeps at 2am, and how to check that any
          Florida alarm company is what it says it is.
        </p>
      </section>

      {/* Quick facts */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            DCS at a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QUICK_FACTS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <span className="font-inter text-text-secondary uppercase tracking-[0.15em] text-[10px]">
                    {label}
                  </span>
                </div>
                <p className="font-montserrat font-bold text-text-primary text-base leading-snug">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <p className="font-inter text-text-secondary text-sm leading-relaxed mt-8 max-w-3xl">
            Counties covered:{" "}
            {SERVICE_COUNTIES.map((c) => c.replace(" County", "")).join(", ")} — see{" "}
            <Link href="/service-areas" className="text-accent hover:underline">
              service areas
            </Link>{" "}
            for what that means market by market.
          </p>
        </div>
      </section>

      {/* Truck image — visual confirmation you found the right company */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-56 sm:h-72">
          <Image
            src="/images/03-dcsi-truck-branding.webp"
            alt="DCSI Inc. service truck with company branding, Lutz, Florida"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="font-montserrat font-extrabold text-xl sm:text-3xl text-text-primary max-w-lg leading-snug">
                The trucks say DCSI.<br />
                <span className="text-accent">Everybody says DCS.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <DcsPageLinks
        heading="What Are You Trying to Find?"
        intro="Each of these answers one thing people ask after searching the DCS name. Start with whichever matches why you're here."
      />

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FaqAccordion faqs={FAQS} heading="Common Questions About DCS" />
      </section>

      {/* Disambiguation pointer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-bg-card border border-border rounded-xl p-7">
          <h2 className="font-montserrat font-bold text-text-primary text-lg mb-3">
            Looking for a different DCS?
          </h2>
          <p className="font-inter text-text-secondary text-sm leading-relaxed">
            &quot;DCS&quot; is a busy set of initials — it belongs to unrelated companies in other
            states and to entirely different fields, from industrial control systems to a
            well-known flight simulator. DCSI, Inc. is not affiliated with any of them. If you
            aren&apos;t sure this is the DCS you were looking for,{" "}
            <Link href="/dcs/what-does-dcs-stand-for" className="text-accent hover:underline">
              this page sorts it out
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner
        headline="Found Us. Now What?"
        body="Tell us what you're trying to protect and we'll design something around it. Free on-site quote, no long-term monitoring contract required."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
