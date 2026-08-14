import Link from "next/link";
import { BadgeCheck, Building2, FileSearch, Headset, Quote, ShieldQuestion } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ReviewCta from "@/components/ReviewCta";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { COMPANY, CONTACT, LICENSE, TESTIMONIALS } from "@/lib/constants";
import { ORG_ID, faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs/reviews";

export const metadata = pageMetadata({
  title: "Is DCS Security Legitimate? How to Verify Us",
  description:
    "Checking out DCS (DCSI, Inc.) of Lutz, FL? Here's how to verify any Florida alarm company — license lookup, physical office, monitoring structure — plus customer reviews.",
  path: PATH,
});

/** Checks a reader can run themselves, on us or on anyone else. */
const VERIFICATION_STEPS = [
  {
    icon: FileSearch,
    title: "Look up the Florida license",
    body: "Florida licenses alarm system contractors through the Department of Business and Professional Regulation, and every license is publicly searchable at myfloridalicense.com. Ask any company for its license number and check it against the name on the contract. A company that hesitates to hand over the number has told you something useful.",
  },
  {
    icon: Building2,
    title: "Confirm there's a real office",
    body: `Not a P.O. box, not a suite number that turns out to be a mail drop. Ours is at ${CONTACT.address} — you can look at it on a map, and you can drive to it. This matters most in year eight, when a sensor fails and the question is whether anyone is still around to fix it.`,
  },
  {
    icon: Headset,
    title: "Ask who actually monitors the alarm",
    body: "Ask directly: “Do you monitor in house, or is it contracted out?” Many local companies are dealers who sell and install, then pass monitoring to a national wholesale center. That is a legitimate business model, but you should know which one you are buying, because it determines who picks up when your alarm goes off.",
  },
  {
    icon: ShieldQuestion,
    title: "Read the contract before the price",
    body: "Term length, early-termination fee, auto-renewal, and who owns the equipment. A lower monthly rate on a five-year agreement frequently costs more in total than a higher rate you can leave. These terms are where much of the industry's profit lives, which is why the monthly is advertised and the term is not.",
  },
  {
    icon: BadgeCheck,
    title: "Check how long they've been at it",
    body: `The alarm industry has heavy turnover, and a company that has held one name in one market for a long time is a meaningful signal. DCSI has operated under the same name from the same area since ${COMPANY.founded}.`,
  },
];

const FAQS = [
  {
    q: "Is DCS Security a legitimate company?",
    a: `DCSI, Inc. — commonly shortened to DCS — is an independently owned Florida security and sound company that has operated from Lutz since ${COMPANY.founded}, at ${CONTACT.address}, reachable at ${CONTACT.phone}. Rather than ask you to take that on faith, this page lists the checks you can run yourself: the state license lookup, the physical office, the monitoring structure, and the contract terms. Run them on us and on anyone else you're considering.`,
  },
  {
    q: "How do I check if a Florida alarm company is licensed?",
    a: "Search the company name or license number at myfloridalicense.com, the Florida Department of Business and Professional Regulation's public license portal. Alarm system contractors are licensed by the state, and the record shows the license status and the qualifying name. Ask for the number rather than guessing at the search — and confirm the licensed entity matches the name on your contract, which is not always the name on the truck.",
  },
  {
    q: "Does DCS have reviews I can read?",
    a: "Customer comments collected over the years appear on this page and on the about page. We deliberately don't publish an aggregate star rating in our page code unless it reflects a rating that's actually verifiable on a live profile — fabricated rating markup is both a structured-data violation and a straightforward misrepresentation. For independent reviews, check the Google Business Profile and any other third-party listings directly.",
  },
  {
    q: "What should I be suspicious of when hiring an alarm company?",
    a: "High-pressure door-to-door sales, particularly anyone claiming your current provider has “gone out of business” or been “taken over” — that is a long-running tactic for getting homeowners to sign a new agreement at the door. Also: a monthly price quoted without a stated term, “free” equipment that turns out to be proprietary, and any reluctance to give a license number. Never let someone who arrives unannounced modify your panel.",
  },
  {
    q: "Is DCS affiliated with other companies named DCS?",
    a: "No. “DCS” is a common set of initials used by unrelated businesses in other states and in entirely different industries. DCSI, Inc. of Lutz, Florida is not affiliated with any of them, and a review or complaint about a differently-named DCS elsewhere is about a different company.",
  },
];

/** Customer comments, attributed to the business entity in the graph. */
const reviewSchema = TESTIMONIALS.map((t) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@id": ORG_ID },
  author: { "@type": "Person", name: t.name },
  reviewBody: t.quote,
}));

export default function DcsReviewsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "Is DCS Security Legitimate? Verifying DCSI, Inc.",
            description:
              "How to verify DCS (DCSI, Inc.) and any other Florida alarm company: state license lookup, physical office, in-house versus wholesale monitoring, and contract terms — with customer reviews.",
          }),
          faqSchema(FAQS, PATH),
          ...reviewSchema,
        ]}
      />

      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "DCS", path: "/dcs" },
              { name: "Is DCS Legitimate?", path: PATH },
            ]}
          />
        }
        title="Checking Us Out? Good."
        subtitle="You should verify any company you're about to give keys, codes, and a floor plan to. Here's exactly how — the same checks apply to us and to everyone else."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Alarm companies ask for an unusual amount of trust: access to your house, a map of where
          the sensors aren&apos;t, codes, and a monthly payment for a service you hope never
          activates. Searching &quot;is DCS legit&quot; before signing anything is the correct
          instinct.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          So rather than a page of assurances, here are five checks you can run in about ten
          minutes — none of which require taking our word for anything.
        </p>
      </section>

      {/* Verification steps */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            Five Checks Worth Running
          </h2>
          <div className="space-y-5">
            {VERIFICATION_STEPS.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-montserrat font-bold text-accent text-xs">0{i + 1}</span>
                  <Icon size={18} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-montserrat font-bold text-text-primary text-lg">{title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {LICENSE.number && (
            <div className="mt-8 bg-bg-card border border-accent/40 rounded-xl p-7">
              <p className="font-inter text-text-secondary text-sm leading-relaxed">
                <strong className="text-text-primary">Ours, to save you a step:</strong>{" "}
                {LICENSE.label} {LICENSE.number}. Verify it at myfloridalicense.com.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
          What Customers Have Said
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-12 max-w-2xl">
          Comments collected from customers over the years. For independent reviews, check our
          Google Business Profile and other third-party listings directly — a company quoting its
          own reviews is evidence, but it is not the same kind of evidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="bg-bg-card border border-border rounded-xl p-7">
              <Quote size={18} className="text-accent mb-4" aria-hidden="true" />
              <p className="font-inter text-text-secondary text-sm leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="font-montserrat font-bold text-text-primary text-sm">
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
        <ReviewCta className="mt-10" />
      </section>

      {/* Door-to-door warning */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-montserrat font-bold text-2xl text-text-primary mb-5">
            One Thing to Watch For
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed mb-4">
            If someone knocks on your door and tells you your alarm company has gone out of
            business, been bought, or is &quot;no longer servicing this area,&quot; and offers to
            upgrade your system on the spot — stop and call your provider directly using a number
            you already have. That claim is a long-running sales tactic, and homeowners who sign at
            the door frequently end up with a second monitoring agreement while the first one is
            still running.
          </p>
          <p className="font-inter text-text-secondary leading-relaxed">
            Nobody should be modifying your panel without an appointment you made.{" "}
            <Link href="/dcs/contact" className="text-accent hover:underline">
              Our number is {CONTACT.phone}
            </Link>{" "}
            — call it any time you want to confirm whether someone at your door actually works with
            us.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FaqAccordion faqs={FAQS} heading="Verification Questions" />
      </section>

      <DcsPageLinks exclude="reviews" />

      <CTABanner
        headline="Ask Us Anything on That List"
        body="License number, who monitors the alarm, contract terms, equipment ownership. All answerable on the phone before you schedule a thing."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
