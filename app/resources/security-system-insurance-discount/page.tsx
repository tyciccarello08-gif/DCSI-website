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

const SLUG = "security-system-insurance-discount";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Do Security Systems Lower Home Insurance in Florida?",
  description:
    "Which alarm systems homeowners insurers usually credit, the alarm certificate they ask for, and how to request a security system discount in Florida.",
  path: PATH,
  type: "article",
});

const ROWS = [
  {
    system: "Local alarm (siren only, not monitored)",
    typical: "Small credit with some carriers, none with many.",
  },
  {
    system: "Monitored burglar alarm",
    typical: "The most commonly credited setup. Usually requires central-station monitoring.",
  },
  {
    system: "Monitored fire / smoke detection",
    typical: "Often credited separately from burglary, and sometimes worth more.",
  },
  {
    system: "Monitored burglary and fire together",
    typical: "Usually the largest available alarm credit.",
  },
  {
    system: "Water leak detection with shutoff",
    typical: "Increasingly credited by some carriers. Ask specifically — it isn't universal.",
  },
  {
    system: "Cameras only",
    typical: "Rarely credited on their own. Insurers look for a monitored alarm.",
  },
];

const STEPS = [
  "Ask your agent which systems the carrier credits and what proof they need. Don't assume — discounts vary by carrier and policy form.",
  "Request an alarm certificate from your monitoring company. It typically lists the address, the monitoring company, and what is monitored (burglary, fire, or both).",
  "Send the certificate to your agent or carrier and ask them to confirm in writing that the discount was applied.",
  "Check the next renewal declarations page. Discounts sometimes drop off when a policy is rewritten or moves to a new carrier.",
  "If you change monitoring companies, send a new certificate. The old one names the old company.",
];

const FAQS = [
  {
    q: "Does a security system lower homeowners insurance in Florida?",
    a: "Often, yes. Many homeowners insurers offer a premium credit for a centrally monitored burglar alarm, a monitored fire alarm, or both. The amount depends on the carrier, the policy, and what the system monitors, so ask your agent for the specific credit before assuming one applies.",
  },
  {
    q: "What is an alarm certificate?",
    a: "A short document from your monitoring company confirming that your home has a monitored alarm system, what it monitors, and who monitors it. Insurers use it as proof for the alarm discount. DCSI provides certificates to monitored customers on request.",
  },
  {
    q: "Do security cameras lower insurance premiums?",
    a: "Usually not on their own. Most carriers credit monitored alarm systems rather than cameras. Cameras can still help after a loss by documenting what happened.",
  },
  {
    q: "Is monitored fire protection worth more than burglary for insurance?",
    a: "With some carriers it is, because fire losses tend to be far larger than burglary losses. Smoke and heat detectors connected to a monitored panel are often credited separately, so having both can mean a larger total discount.",
  },
];

export default function InsuranceDiscountPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "How Florida homeowners can get an insurance discount for a monitored security or fire alarm system, including which systems qualify and how alarm certificates work.",
            published: R.published,
            modified: R.modified,
            image: "/images/13-residential-home-exterior.webp",
            about: "Homeowners insurance discounts for security systems",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Insurance Discounts", path: PATH },
            ]}
          />
        }
        title="Do Security Systems Lower Home Insurance?"
        subtitle="Often, if the system is monitored and you ask. Here's what insurers usually credit and the paperwork that gets the discount applied."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Florida homeowners insurance is expensive, and every credit on the declarations page
          matters. A monitored alarm is one of the few that you control directly — but insurers
          don&apos;t apply it automatically. Someone has to ask, and someone has to send proof.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          Discount amounts vary widely by carrier and aren&apos;t something we can quote for your
          policy. What we can tell you is which kinds of systems are usually credited and how the
          process works.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
            What Insurers Typically Credit
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left font-inter text-sm">
              <thead className="bg-bg-card">
                <tr>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">System</th>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Typical treatment</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.system} className="border-t border-border">
                    <th scope="row" className="px-5 py-4 text-text-primary font-medium align-top">{row.system}</th>
                    <td className="px-5 py-4 text-text-secondary align-top">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-inter text-text-secondary text-sm leading-relaxed mt-6">
            General patterns, not a promise of any discount. Confirm with your agent.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-8">
          How to Get the Discount Applied
        </h2>
        <ol className="space-y-4">
          {STEPS.map((item, i) => (
            <li key={item} className="flex items-start gap-4">
              <span className="text-accent font-montserrat font-bold text-sm w-6 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-inter text-text-secondary leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
        <p className="font-inter text-text-secondary leading-relaxed mt-10">
          Fire monitoring is often the overlooked half. If your system only covers doors and
          windows, our guide to{" "}
          <Link href="/resources/monitored-smoke-detectors" className="text-accent hover:underline">
            monitored smoke and heat detectors
          </Link>{" "}
          explains what adding them involves. And a credit only offsets part of the cost — our{" "}
          <Link href="/resources/security-system-cost" className="text-accent hover:underline">
            cost guide
          </Link>{" "}
          covers the rest.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Insurance Discount Questions" />
        </div>
      </section>

      <RelatedResources slugs={["monitored-smoke-detectors", "security-system-cost", "choosing-a-monitoring-company"]} />

      <CTABanner
        headline="Need an Alarm Certificate?"
        body="Monitored DCSI customers can request one any time. Not monitored yet? We'll quote a system that qualifies."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
