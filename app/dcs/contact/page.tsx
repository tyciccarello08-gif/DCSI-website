import Link from "next/link";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BusinessHours from "@/components/BusinessHours";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { BUSINESS, COMPANY, CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs/contact";

export const metadata = pageMetadata({
  title: "DCS Security Phone Number & Office — (813) 949-6500",
  description:
    "Reach DCS (DCSI, Inc.) in Lutz, FL: phone (813) 949-6500, email, fax, office address, and hours. Alarm monitoring runs 24/7 including nights and holidays.",
  path: PATH,
});

/** The four ways to reach the office, ordered by how people actually use them. */
const CHANNELS = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    note: "The fastest route for anything urgent, and the only one worth using for an active alarm.",
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: "Good for quote requests, drawings, and anything with an attachment. Not for emergencies.",
  },
  {
    icon: MapPin,
    label: "Office",
    value: CONTACT.address,
    href: CONTACT.mapsUrl,
    note: "A staffed office on the Hillsborough–Pasco line, just north of Tampa.",
  },
  {
    icon: Printer,
    label: "Fax",
    value: CONTACT.fax,
    href: null,
    note: "Still used for permits, HOA paperwork, and some builder documentation.",
  },
];

const REASONS = [
  {
    title: "You want a quote on a new system",
    body: "Call or use the contact form. Have a rough idea of the property — square footage, number of exterior doors, single or two story, and whether you want cameras. We'll schedule someone to walk it.",
  },
  {
    title: "Your alarm is going off right now",
    body: "Call the office number. Have your passcode ready. If we have already reached you and you gave a valid passcode, the alarm is cancelled — you do not need to call back to confirm.",
  },
  {
    title: "Your panel is beeping or showing trouble",
    body: "Not an emergency, and usually a low battery or an AC loss after a storm. Call during office hours; the customer service page covers what to check first and what to have ready when you call.",
  },
  {
    title: "You need to change who we call",
    body: "Call the office. Changes to a call list have to be verified against the account, which is exactly why they cannot be done by email from an address we cannot confirm.",
  },
  {
    title: "You're a builder, board member, or business",
    body: "Call or email, and say so up front — commercial and community projects get scoped differently and are worth routing correctly on the first call.",
  },
];

const FAQS = [
  {
    q: "What is DCS Security's phone number?",
    a: `${CONTACT.phone}. That number reaches DCSI, Inc. in Lutz, Florida — the company most people mean when they search for “DCS security” in the Tampa Bay area. It is the number for sales, scheduling, service, and active alarms.`,
  },
  {
    q: "Where is the DCS office located?",
    a: `${CONTACT.address}. The office sits on the Hillsborough–Pasco county line just north of Tampa, and it is where both the business and the alarm monitoring center operate from.`,
  },
  {
    q: "What are DCS Security's hours?",
    a: "The office is open Monday through Friday, 8:00 AM to 5:00 PM, for sales, scheduling, and service calls. Alarm monitoring is separate and runs 24 hours a day, every day of the year, including nights, weekends, and holidays.",
  },
  {
    q: "Can I reach DCS after hours?",
    a: "Alarm monitoring is staffed around the clock, so an alarm signal is always handled regardless of the time. Office functions — quotes, scheduling a technician, billing questions, account changes — are handled during business hours. If you call after hours about a non-emergency, the fastest path is to leave a message with your name, address, and callback number.",
  },
  {
    q: "Is DCSI the same as DCS?",
    a: `Yes — DCSI, Inc. is the legal name, and “DCS” is how customers and referrals routinely shorten it. Same company, same office, same number: ${CONTACT.phone}.`,
  },
];

export default function DcsContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: `Contact DCS Security (DCSI, Inc.) — ${CONTACT.phone}`,
            description: `Phone, email, fax, office address, and hours for DCS (DCSI, Inc.) at ${CONTACT.address}. Alarm monitoring is staffed 24/7.`,
            type: "ContactPage",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />

      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "DCS", path: "/dcs" },
              { name: "Phone & Office", path: PATH },
            ]}
          />
        }
        title={`DCS Security: ${CONTACT.phone}`}
        subtitle={`${COMPANY.name} — ${CONTACT.address}. Office hours for sales and service; monitoring staffed around the clock.`}
        ctaText="Send a Message"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Channels */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CHANNELS.map(({ icon: Icon, label, value, href, note }) => (
            <div key={label} className="bg-bg-card border border-border rounded-xl p-7">
              <div className="flex items-center gap-2.5 mb-3">
                <Icon size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                <span className="font-inter text-text-secondary uppercase tracking-[0.15em] text-[10px]">
                  {label}
                </span>
              </div>
              {href ? (
                <a
                  href={href}
                  className="font-montserrat font-bold text-text-primary hover:text-accent text-lg leading-snug transition-colors"
                >
                  {value}
                </a>
              ) : (
                <p className="font-montserrat font-bold text-text-primary text-lg leading-snug">
                  {value}
                </p>
              )}
              <p className="font-inter text-text-secondary text-xs leading-relaxed mt-3">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hours + map */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-bg-card border border-border rounded-xl p-7">
              <BusinessHours />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-sm text-text-primary uppercase tracking-wider mb-4">
                Finding the Office
              </h2>
              <p className="font-inter text-text-secondary text-sm leading-relaxed mb-4">
                {CONTACT.address}. West Lutz Lake Fern Road runs east–west between US-41 and the
                Suncoast Parkway, so most people come in from one of those two. The county line
                runs through this area, which is why the office serves Hillsborough and Pasco
                equally — Wesley Chapel, Land O&apos; Lakes, and Odessa are all closer than
                downtown Tampa.
              </p>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-inter text-accent hover:underline text-sm"
              >
                Open in Google Maps →
              </a>
              <p className="font-inter text-text-secondary text-xs leading-relaxed mt-6 pt-6 border-t border-border">
                Mailing and service address are the same. Coordinates {BUSINESS.latitude},{" "}
                {BUSINESS.longitude}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to call */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
          Which Reason Are You Calling For?
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-12">
          One number handles all of it, but knowing what to have ready makes the call shorter.
        </p>
        <div className="space-y-5">
          {REASONS.map((r) => (
            <div key={r.title} className="bg-bg-card border border-border rounded-xl p-7">
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-2">
                {r.title}
              </h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
        <p className="font-inter text-text-secondary text-sm leading-relaxed mt-10">
          Prefer to write it down?{" "}
          <Link href="/contact" className="text-accent hover:underline">
            The contact form
          </Link>{" "}
          reaches the same office. Already a customer?{" "}
          <Link href="/dcs/customer-service" className="text-accent hover:underline">
            Start here instead
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Contact Questions" />
        </div>
      </section>

      <DcsPageLinks exclude="contact" />

      <CTABanner
        headline={`Call ${CONTACT.phone}`}
        body="Sales and service during office hours. Monitoring, always."
        ctaText="Send a Message"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
