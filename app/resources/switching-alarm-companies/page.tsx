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

const SLUG = "switching-alarm-companies";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "How to Switch Alarm Companies (Keep Your System)",
  description:
    "Switching alarm monitoring companies without ripping out your system: reading the contract, giving notice, locked panels, and how a takeover works.",
  path: PATH,
  type: "article",
});

const STEPS = [
  {
    title: "Find the contract and read three clauses",
    body: "The term (how long you agreed to), the renewal clause (many agreements renew automatically for another year or more unless you cancel in writing), and the cancellation clause (how much notice, delivered how, and what it costs to leave early). If you can't find your copy, ask the current company to send it — they are required to have it.",
  },
  {
    title: "Work out where you are in the term",
    body: "If the original term has ended and the agreement has renewed, the notice window matters more than the fee. If you're still inside the original term, an early termination charge often applies — commonly some or all of the remaining monthly payments. Knowing the number lets you decide whether to switch now or at renewal.",
  },
  {
    title: "Find out who owns the equipment",
    body: "Equipment you bought outright is yours. Equipment that was leased or provided free in exchange for the contract may need to be returned or paid off. In practice the wired sensors in the walls stay with the house; the question is usually the panel and keypad.",
  },
  {
    title: "Have the new company look at the panel first",
    body: "Before you cancel, have the panel make and model identified. Most common panels can be taken over. Some are locked with an installer code the old company won't release, which may mean resetting the panel or replacing only the panel and communicator while keeping every sensor.",
  },
  {
    title: "Schedule the cutover, then cancel",
    body: "Line up the new monitoring start date first, then send cancellation in the form the contract requires — often written notice, sometimes by certified mail. Keep a copy and a record of the date. That order avoids a gap where the house reports to no one.",
  },
  {
    title: "Test everything on the new account",
    body: "Every door, window, motion detector, smoke detector, and keypad panic should be tested with the new monitoring center on the line, and the call list and passcode set fresh. It's also the moment to replace an old landline or 3G communicator with LTE cellular.",
  },
];

const FAQS = [
  {
    q: "Can I switch alarm companies and keep my existing equipment?",
    a: "Usually, yes. The sensors and wiring in the walls work with most panels, and many panels can be taken over by a new company directly. If the panel is locked or too old to support a current communicator, the panel and communicator can be replaced while every existing sensor is kept, which costs far less than a new system.",
  },
  {
    q: "How do I get out of an alarm monitoring contract?",
    a: "Read the contract's term, renewal, and cancellation clauses. Most require written notice within a set window before the renewal date, and many charge an early termination fee if you leave during the original term. Sending notice in exactly the form the contract specifies, and keeping a dated copy, is the step people most often get wrong.",
  },
  {
    q: "What is a locked alarm panel?",
    a: "Many panels have an installer code that controls programming. Some companies keep that code from customers and other companies, which makes the panel hard to reprogram for a new monitoring account. Depending on the model, a locked panel can sometimes be defaulted, and otherwise the panel is swapped while the existing sensors stay in place.",
  },
  {
    q: "I just signed with a door-to-door alarm salesperson. Can I cancel?",
    a: "The FTC's Cooling-Off Rule generally gives buyers three business days to cancel many sales made at their home, and the seller is supposed to tell you about that right in writing. Read the cancellation notice in your paperwork and act inside the window if you want out.",
  },
  {
    q: "Does DCSI require a long-term contract after a takeover?",
    a: "No. We don't require long-term monitoring contracts, including on takeover accounts. Monitoring is handled by our own team at our center in Lutz.",
  },
];

export default function SwitchingAlarmCompaniesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "How to switch alarm monitoring companies while keeping an existing security system: contract terms, notice, equipment ownership, locked panels, and cutover.",
            published: R.published,
            modified: R.modified,
            image: "/images/keypad-honeywell-lcd.webp",
            about: "Switching alarm monitoring companies",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Switching Alarm Companies", path: PATH },
            ]}
          />
        }
        title="How to Switch Alarm Companies"
        subtitle="You can usually change who monitors your alarm without changing the alarm. The hard part is the paperwork, not the hardware."
        ctaText="Ask About a Takeover"
        ctaHref="/services/alarm-monitoring-takeover"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          A lot of people stay with an alarm company they&apos;re unhappy with because they assume
          leaving means tearing the system off the walls. It almost never does. The sensors on your
          doors and windows don&apos;t belong to a monitoring company in any meaningful sense —
          they&apos;re wired into the house, and most panels can report to whichever center you
          choose.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          What does take care is the contract. Alarm agreements are written to renew, and the
          window to cancel cleanly is often short. This is the order we&apos;d do it in.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            Six Steps to Switch Cleanly
          </h2>
          <ol className="space-y-10">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex items-start gap-5">
                <span className="text-accent font-montserrat font-bold text-sm w-6 flex-shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-montserrat font-bold text-text-primary text-lg mb-2">{s.title}</h3>
                  <p className="font-inter text-text-secondary leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            Signs It&apos;s Time to Switch
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed mb-5">
            The company that installed the system was bought out and you&apos;ve never spoken to the
            new one. Nobody calls when the alarm goes off, or the call comes from a center that
            doesn&apos;t know your house. The price went up at renewal. Or the panel still reports
            over a phone line you no longer have — our{" "}
            <Link href="/resources/landline-alarm-upgrade" className="text-accent hover:underline">
              landline and 3G guide
            </Link>{" "}
            shows how to check.
          </p>
          <p className="font-inter text-text-secondary leading-relaxed">
            If the answer to &ldquo;who actually answers my alarm?&rdquo; is &ldquo;I don&apos;t
            know,&rdquo; that alone is reason to look.
          </p>
        </div>
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            What a Takeover Costs Compared With a New System
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            A takeover is typically a programming visit, a new cellular communicator if the old one
            is landline or 3G, and testing — sometimes a new panel and keypad if the old one is
            locked or obsolete. A new system means a sensor on every opening. Keeping the wiring
            you already have is nearly always the cheaper path. Our{" "}
            <Link href="/resources/security-system-cost" className="text-accent hover:underline">
              cost guide
            </Link>{" "}
            breaks down what drives each.
          </p>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Switching Questions" />
        </div>
      </section>

      <RelatedResources slugs={["choosing-a-monitoring-company", "landline-alarm-upgrade", "security-system-cost"]} />

      <CTABanner
        headline="Keep the System. Change the Company."
        body="Send us the panel make and model, or a photo of the keypad, and we'll tell you whether it can be taken over as is."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
