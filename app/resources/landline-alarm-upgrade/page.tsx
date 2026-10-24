import Link from "next/link";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import ArticleByline from "@/components/ArticleByline";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { articleSchema, faqSchema, pageMetadata } from "@/lib/seo";

const SLUG = "landline-alarm-upgrade";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Is Your Alarm Still on a Landline or 3G? How to Tell",
  description:
    "Copper phone lines are being retired and 3G networks shut down in 2022. How to tell whether your alarm panel still reaches its monitoring center, and how to fix it.",
  path: PATH,
  type: "article",
});

const SIGNS = [
  "The keypad shows a communication trouble — wording like \"Comm Failure\", \"FC\", or a trouble light that never clears.",
  "You dropped your home phone line, or switched it to a cable or fiber provider, sometime after the alarm was installed.",
  "The system was installed before about 2017 and nobody has replaced the radio module since.",
  "You can't remember the last time the monitoring company called you after the alarm went off.",
  "The monitoring bill keeps arriving, but the company you pay isn't the company that installed the system.",
];

const STEPS = [
  {
    title: "Call your monitoring company and ask for the last signal",
    body: "Ask when they last received any signal from your panel — an alarm, a test, or a routine check-in. A supervised system checks in on a schedule, so a healthy account has a recent answer. If they can't give you a date, that is the answer.",
  },
  {
    title: "Run a live test with them on the phone",
    body: "Ask them to put the account in test mode, then open a protected door with the system armed and let the entry delay run out. They should see the alarm arrive within a minute or so. If nothing shows up, the panel isn't reaching them.",
  },
  {
    title: "Look at the panel itself",
    body: "The metal box in a closet, garage, or utility room usually holds the communicator. A cellular communicator has a small antenna or a labeled radio module; a panel with only a phone cord running to a wall jack is reporting over the phone line. A radio labeled 3G, or with no LTE marking, is worth having checked.",
  },
];

const FAQS = [
  {
    q: "Do alarm systems still work on landlines?",
    a: "Some do, for now, but it is a shrinking and less reliable path. Carriers are retiring traditional copper lines and moving customers to fiber or VoIP, and digital phone service can garble the tones an alarm panel uses to report. A landline can also be cut outside the house. Cellular is the standard most monitoring companies now recommend.",
  },
  {
    q: "What happened to 3G alarm communicators?",
    a: "The major U.S. carriers shut down their 3G networks during 2022. Alarm panels that reported over a 3G radio lost their connection to the monitoring center unless the radio was replaced with an LTE model. Many were replaced at the time; some were not, and those panels can look normal on the keypad while reporting to no one.",
  },
  {
    q: "Will my alarm work with a VoIP or cable phone line?",
    a: "Sometimes, but not reliably. VoIP compresses audio in ways that can corrupt the tones a panel uses to send alarm data, and the modem providing the line goes down when the power or the internet does — in Florida, that includes the storms when you'd most want the system working. If the panel's only path is a VoIP line, it is worth upgrading.",
  },
  {
    q: "Do I need a whole new system to switch to cellular?",
    a: "Usually not. On most industry-standard panels the communicator is a separate module that can be replaced on its own, keeping the existing sensors, wiring, and keypads. It is typically one part and a short visit, far less than a new system.",
  },
  {
    q: "Can a cellular alarm communicator be jammed?",
    a: "Jamming is possible in principle and rare in practice for homes. Supervised cellular communicators check in with the monitoring center on a schedule, so a communicator that goes silent raises a trouble at the center rather than failing quietly. Dual-path communicators that also report over the internet add a second route.",
  },
];

export default function LandlineAlarmUpgradePage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "How to tell whether an alarm panel still reaches its monitoring center after copper landline retirement and the 2022 3G shutdown, and how to upgrade to cellular.",
            published: R.published,
            modified: R.modified,
            image: "/images/05-dcsi-honeywell-touchscreen-panel.webp",
            about: "Alarm system communicators",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Landline & 3G Alarm Upgrade", path: PATH },
            ]}
          />
        }
        title="Is Your Alarm Still on a Landline or 3G?"
        subtitle="A panel can look armed and normal on the keypad while reporting to no one. Here's how to check yours in ten minutes — and what fixing it actually involves."
        ctaText="Check My System"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          An alarm system has two halves. The sensors detect a problem; the communicator tells
          someone. For most of the industry&apos;s history the communicator used the home phone
          line, and later a 3G cellular radio. Both of those paths have been disappearing out from
          under systems that are otherwise working perfectly.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          The major carriers shut down their 3G networks during 2022, and copper phone lines are
          being retired in favor of fiber and VoIP. Neither change announces itself at the keypad.
          A panel whose communicator has lost its path still arms, still chirps, and still sounds
          the siren — it just doesn&apos;t reach the monitoring center.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-8">
            Signs Your Panel May Not Be Reporting
          </h2>
          <ul className="space-y-4">
            {SIGNS.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <AlertTriangle size={16} className="text-accent flex-shrink-0 mt-1" />
                <span className="font-inter text-text-secondary leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
          How to Check in Ten Minutes
        </h2>
        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="bg-bg-card border border-border rounded-xl p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent font-montserrat font-bold text-xs">0{i + 1}</span>
                <h3 className="font-montserrat font-bold text-text-primary text-lg">{step.title}</h3>
              </div>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
            What the Fix Usually Is
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed mb-6">
            On most panels, the fix is replacing the communicator, not the system. An LTE cellular
            module goes in the panel, gets programmed to the monitoring account, and is tested end
            to end. The sensors, wiring, and keypads stay where they are.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "LTE cellular as the primary path — no phone line to cut, and it keeps working on the panel's standby battery when the power is out.",
              "Optionally dual-path: cellular plus internet, so either route can carry the signal.",
              "Supervised check-ins, so the center knows within a set window if the communicator ever goes quiet again.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-1" />
                <span className="font-inter text-text-secondary text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-inter text-text-secondary leading-relaxed">
            If the panel itself is too old to accept a modern communicator, or is a proprietary
            model locked to one provider, that is when replacement comes into it. Even then, the
            wired sensors can often be reused. We handle both as part of a{" "}
            <Link href="/services/alarm-monitoring-takeover" className="text-accent hover:underline">
              monitoring takeover
            </Link>
            , and we&apos;ll tell you which case you&apos;re in from a photo of the panel before
            anyone visits.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FaqAccordion faqs={FAQS} heading="Landline & Cellular Alarm Questions" />
      </section>

      <RelatedResources
        slugs={["choosing-a-monitoring-company", "hurricane-season-security", "security-system-cost"]}
      />

      <CTABanner
        headline="Not Sure Your Alarm Is Reporting?"
        body="Send us a photo of the panel. We'll tell you what communicator it has and what upgrading it involves — free, no visit required."
        ctaText="Check My System"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
