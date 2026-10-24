import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { ORG_ID, abs, faqSchema, pageMetadata } from "@/lib/seo";

const PATH = "/resources/choosing-a-monitoring-company";
const R = resourceBySlug("choosing-a-monitoring-company");

export const metadata = pageMetadata({
  title: "How to Choose an Alarm Monitoring Company",
  description:
    "What separates alarm monitoring companies: in-house vs. wholesale monitoring, contract terms, equipment ownership, and communication path.",
  path: PATH,
  type: "article",
});

const CRITERIA = [
  {
    title: "Who is actually watching the system",
    good: "The company you hired monitors it with its own staff, who can see your account history and know the property.",
    bad: "The company sells the install and hands monitoring to a national wholesale center serving hundreds of unrelated dealers.",
    body: "This is the single biggest structural difference in the industry and it is almost never volunteered. Many local 'security companies' are dealers: they sell and install, then pass monitoring to a third party. It still works, but the people responding have no relationship with you or the company that sold you the system. Ask directly: 'Do you monitor in house, or is it contracted out?'",
  },
  {
    title: "Contract length and exit terms",
    good: "Month-to-month or a short term, with the exit terms stated plainly before you sign.",
    bad: "Three to five years with an early-termination fee equal to most of the remaining balance.",
    body: "Long agreements are where much of the industry's profit lives, which is why the monthly rate is advertised and the term is not. A lower monthly price on a five-year contract frequently costs more in total than a higher rate you can walk away from. Ask for the term, the early-termination fee, and whether the contract auto-renews.",
  },
  {
    title: "Who owns the equipment",
    good: "You own the panel and sensors outright, and any company can take over monitoring.",
    bad: "Equipment is 'free' but locked to that provider, and worthless if you leave.",
    body: "Proprietary panels that only one company can monitor turn a service dispute into a full replacement. Industry-standard equipment keeps you portable. If a quote includes free hardware, ask what happens to it when the agreement ends — the answer tells you what you are really buying.",
  },
  {
    title: "How the alarm gets to the monitoring center",
    good: "Cellular communication, with battery backup, so a cut line or dropped internet does not disable the system.",
    bad: "Internet-only or, worse, a landline that can be cut outside the house in seconds.",
    body: "The communication path is the part of the system an intruder can actually defeat. Landline is trivially cut at the exterior box. Internet-only fails whenever your service does, which in Florida includes most storms. Cellular with battery backup is the standard worth paying slightly more for.",
  },
  {
    title: "Response procedure",
    good: "A stated call order, verification steps, and dispatch policy you can review and edit.",
    bad: "Vague assurances about 'fast response' with no documented procedure.",
    body: "Ask what happens in the first ninety seconds after an alarm: who is called, in what order, how many attempts, what triggers dispatch, and how false alarms are handled. Municipalities in Florida commonly charge for false-alarm dispatches, so verification procedure has a direct cost to you.",
  },
  {
    title: "Licensing and local presence",
    good: "A Florida alarm contractor license you can verify, and a real local address.",
    bad: "A national brand operating through rotating local subcontractors, or no verifiable license.",
    body: "Florida licenses alarm system contractors, and the license is verifiable at myfloridalicense.com. A physical local office matters for service calls — when a sensor fails two years in, the question is whether anyone is still around to fix it.",
  },
];

const FAQS = [
  {
    q: "What is the difference between in-house and third-party alarm monitoring?",
    a: "In-house monitoring means the company that sold and installed your system also staffs the center that receives its alarms. Third-party (wholesale) monitoring means the installer passes signals to a large central station that serves many unrelated dealers. Wholesale monitoring is competent and widely used, but the responders have no relationship with your installer, and service issues have to travel through two companies instead of one.",
  },
  {
    q: "Should I sign a long-term alarm monitoring contract?",
    a: "You should at minimum know you are signing one. Three- and five-year agreements with early-termination fees are standard across much of the industry and are frequently how a low advertised monthly rate is funded. Ask for the term, the termination fee, and whether it auto-renews before comparing monthly prices between companies.",
  },
  {
    q: "Is cellular monitoring worth the extra cost?",
    a: "Yes, in almost every case. Landline connections can be cut outside the house, and internet-only monitoring fails whenever your internet does — which in Florida means during exactly the storms when you would most want the system working. Cellular with battery backup keeps the system reporting when the rest of the house is down.",
  },
  {
    q: "Can another company monitor my existing alarm system?",
    a: "Often, yes, if the panel is industry-standard rather than proprietary. Many homes in Tampa Bay have serviceable hardwired panels and sensors from companies that no longer operate here. Takeover is usually far cheaper than a full replacement, and it is worth having someone check before agreeing to rip out a working system.",
  },
  {
    q: "How do I verify a Florida alarm company is licensed?",
    a: "Florida licenses alarm system contractors through the Department of Business and Professional Regulation, and licenses are searchable at myfloridalicense.com. Ask any company for its license number and check it. A company that hesitates to give you the number has told you something useful.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${abs(PATH)}#article`,
  headline: "How to Choose an Alarm Monitoring Company",
  description:
    "The structural differences between alarm monitoring companies — in-house vs. wholesale monitoring, contract terms, equipment ownership, and communication path.",
  url: abs(PATH),
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  mainEntityOfPage: { "@type": "WebPage", "@id": abs(PATH) },
  image: abs("/images/keypad-honeywell-tuxedo-touchscreen.jpg"),
  datePublished: R.published,
  dateModified: R.modified,
  inLanguage: "en-US",
};

export default function ChoosingMonitoringPage() {
  return (
    <>
      <JsonLd data={[articleSchema, faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Resources", path: "/resources" }, { name: "Choosing a Monitoring Company", path: PATH }]} />}
        title="How to Choose a Monitoring Company"
        subtitle="Six questions that separate alarm companies — and the answers worth walking away from. Written to be useful even if you hire someone else."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed">
          Alarm monitoring is unusual as a purchase: you pay every month for something you hope
          never activates, which makes it very hard to judge whether you bought well. The
          differences that matter are structural — who staffs the center, what the contract says,
          who owns the hardware — and almost none of them show up in the advertised monthly price.
        </p>
      </section>

      {/* Criteria */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            Six Things to Compare
          </h2>
          <div className="space-y-6">
            {CRITERIA.map((c, i) => (
              <div key={c.title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent font-montserrat font-bold text-xs">0{i + 1}</span>
                  <h3 className="font-montserrat font-bold text-text-primary text-lg">{c.title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed mb-5">{c.body}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-text-secondary text-xs leading-relaxed">{c.good}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle size={15} className="text-text-secondary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-text-secondary text-xs leading-relaxed">{c.bad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where DCSI stands */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
          Where We Stand on Each
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-6">
          It would be dishonest to write this guide without saying where we land. DCSI monitors in
          house from our Lutz office. We do not require long-term monitoring contracts. Equipment
          we install is yours. We use cellular communication with battery backup as standard, and
          we go over the call and dispatch order with you at handover rather than filing it away.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          Apply the same six questions to us that you apply to anyone else. If a competitor answers
          them better for your situation, that is genuinely the right call —{" "}
          <Link href="/resources/security-system-cost" className="text-accent hover:underline">
            our cost guide
          </Link>{" "}
          is written the same way.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
            Monitoring Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-bg-card border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <h3 className="font-montserrat font-bold text-text-primary text-base">{faq.q}</h3>
                  <span className="text-accent font-montserrat text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-inter text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedResources slugs={["landline-alarm-upgrade", "security-system-cost", "false-alarm-prevention"]} />

      <CTABanner
        headline="Ask Us the Six Questions"
        body="We'll answer all of them on the phone before you schedule anything. No contract required to find out."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
