import Link from "next/link";
import { CheckCircle2, HelpCircle } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY, CONTACT, DCS_ALIASES } from "@/lib/constants";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs/what-does-dcs-stand-for";

export const metadata = pageMetadata({
  title: "What Does DCS Stand For? (And Which DCS You Want)",
  description:
    "DCS in Tampa Bay security means DCSI, Inc. of Lutz, FL. “DCS” also belongs to unrelated companies and industries — here's how to tell which one you're looking for.",
  path: PATH,
});

/** Signals that the reader has landed on the right company — or hasn't. */
const YOU_WANT_US_IF = [
  "You're in the Tampa Bay area — Lutz, Wesley Chapel, Land O' Lakes, Odessa, Carrollwood, Westchase, New Tampa, Brandon, or Tampa itself.",
  "You were given the name by a neighbor, a builder, an HOA or CDD board, or a real estate agent.",
  "You have a yard sign, a window decal, or a keypad with DCSI on it.",
  "You're looking for a burglar alarm, security cameras, gate access control, or 24/7 alarm monitoring.",
  "You have a bill, a contract, or a service sticker with the number (813) 949-6500 on it.",
];

const YOU_WANT_SOMEONE_ELSE_IF = [
  "You're looking for a video game — DCS World is a combat flight simulator, made by a software company with no connection to us.",
  "You mean distributed control systems — the industrial automation term used in plants and refineries. Also abbreviated DCS, also unrelated.",
  "You're looking for a state agency. Several states run a Department of Child Safety or Department of Children's Services under the initials DCS. Florida's equivalent is the Department of Children and Families, and none of them are us.",
  "You're outside Florida and looking for a company named DCS in your own state. Several unaffiliated businesses use those initials in other markets.",
  "You mean digital cinema, data center services, or one of the dozens of other things three common letters get used for.",
];

const FAQS = [
  {
    q: "What does DCS stand for in the security company DCSI?",
    a: `DCSI, Inc. is the legal name of the security and sound company in Lutz, Florida, operating since ${COMPANY.founded}. In everyday use the name gets shortened to DCS — on the phone, in referrals, and in search — so “DCS,” “DCSI,” and “DCS Security” all point to the same company at ${CONTACT.phone}. The company does business as DCSI, Inc. “Security & Sound.”`,
  },
  {
    q: "Is DCS the same as DCSI?",
    a: "Yes, when you mean the Tampa Bay security company. DCSI, Inc. is the registered name and DCS is the shortened version people actually say. Same office, same phone number, same technicians.",
  },
  {
    q: "Are there other companies called DCS?",
    a: "Yes — “DCS” is a common set of initials, and unaffiliated businesses use it in other states and other industries. DCSI, Inc. of Lutz, Florida is not affiliated with, endorsed by, or related to any of them. If you are dealing with a company called DCS outside Florida, it is a different company, and its reviews, contracts, and complaints belong to it rather than to us.",
  },
  {
    q: "What else does DCS stand for?",
    a: "Commonly: DCS World, a combat flight simulator; distributed control systems, the industrial automation term; and Department of Child Safety or Department of Children's Services, used by several state agencies (Florida's equivalent is the Department of Children and Families). It also stands for digital cinema, data center services, and many other things. None of them are related to this company.",
  },
  {
    q: "How do I know if DCSI is the DCS I'm looking for?",
    a: `If you're in Hillsborough or Pasco County and the context is a burglar alarm, security cameras, gate access, or alarm monitoring, this is almost certainly the one. The definitive check is the phone number — ${CONTACT.phone} — which appears on our contracts, invoices, decals, and trucks.`,
  },
];

export default function WhatDoesDcsStandForPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "What Does DCS Stand For? DCSI, Inc. of Lutz, Florida",
            description:
              "In Tampa Bay security, DCS refers to DCSI, Inc. of Lutz, Florida. The initials DCS are also used by unrelated companies, industries, and government agencies — this page disambiguates them.",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />

      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "DCS", path: "/dcs" },
              { name: "What Does DCS Stand For?", path: PATH },
            ]}
          />
        }
        title="What Does DCS Stand For?"
        subtitle="Three letters doing a lot of jobs. If you mean the security company in Lutz, Florida, you've found it — DCS is how people shorten DCSI, Inc."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* The short answer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          The short version: in Tampa Bay security, <strong className="text-text-primary">DCS
          means DCSI, Inc.</strong> — the security and sound company at{" "}
          {CONTACT.address}, in business since {COMPANY.founded}, reachable at{" "}
          <a href={CONTACT.phoneHref} className="text-accent hover:underline">
            {CONTACT.phone}
          </a>
          . The company does business as DCSI, Inc. &quot;Security &amp; Sound,&quot; and the
          fourth letter goes missing constantly in conversation.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed mb-8">
          All of these refer to the same company:
        </p>
        <div className="flex flex-wrap gap-2.5">
          {DCS_ALIASES.map((alias) => (
            <span
              key={alias}
              className="bg-bg-card border border-border rounded-lg px-4 py-2 font-inter text-text-primary text-sm"
            >
              {alias}
            </span>
          ))}
        </div>
      </section>

      {/* Which DCS */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            Which DCS Are You Looking For?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-accent/40 rounded-xl p-8">
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-6">
                You&apos;re looking for us if…
              </h3>
              <ul className="space-y-4">
                {YOU_WANT_US_IF.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="text-accent flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-inter text-text-secondary text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-xl p-8">
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-6">
                You want a different DCS if…
              </h3>
              <ul className="space-y-4">
                {YOU_WANT_SOMEONE_ELSE_IF.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <HelpCircle
                      size={15}
                      className="text-text-secondary flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-inter text-text-secondary text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-inter text-text-secondary text-sm leading-relaxed mt-8 max-w-3xl">
            DCSI, Inc. is not affiliated with, endorsed by, or otherwise connected to any other
            organization using the initials DCS. Names on this page are mentioned only to tell them
            apart from us.
          </p>
        </div>
      </section>

      {/* Why the confusion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
          Why This Page Exists
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-5">
          Word-of-mouth is how most of our work arrives, and word-of-mouth loses letters. A
          neighbor says &quot;call DCS,&quot; a builder writes &quot;DCS&quot; on a punch list, an
          HOA board minutes it as &quot;DCS.&quot; Then someone types those three letters into a
          search bar and gets a flight simulator.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          So: same company, four letters or three. If you want to be certain you have the right
          one, the phone number is the tiebreaker —{" "}
          <a href={CONTACT.phoneHref} className="text-accent hover:underline">
            {CONTACT.phone}
          </a>
          , the same number on our trucks, decals, and invoices. More on{" "}
          <Link href="/dcs" className="text-accent hover:underline">
            who DCS is
          </Link>{" "}
          and{" "}
          <Link href="/about" className="text-accent hover:underline">
            the company&apos;s history
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Name Questions" />
        </div>
      </section>

      <DcsPageLinks exclude="what-does-dcs-stand-for" />

      <CTABanner
        headline="Right DCS? Let's Talk."
        body="Alarms, cameras, access control, and monitoring across Hillsborough and Pasco Counties since 2004."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
