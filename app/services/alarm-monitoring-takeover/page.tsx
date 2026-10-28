import Link from "next/link";
import { ClipboardCheck, Radio, KeyRound, FileText, CheckCircle2, XCircle } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import AreaLinks from "@/components/AreaLinks";
import QuoteSection from "@/components/QuoteSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/alarm-monitoring-takeover";

export const metadata = pageMetadata({
  title: "Alarm Monitoring Takeover — Switch Alarm Companies",
  description:
    "Switch alarm companies without replacing your system. DCSI takes over existing panels, upgrades the communicator, and monitors in house — no long-term contract.",
  path: PATH,
});

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Identify what's on the wall",
    body: "Send us a photo of the keypad and, if you can, the panel in the closet or garage. Most of the time that is enough to tell whether the system can be taken over and roughly what it involves — before anyone drives out.",
  },
  {
    icon: KeyRound,
    title: "Regain programming access",
    body: "The panel is reprogrammed to report to our center. On most industry-standard panels this is routine. Some previous dealers lock the installer code; when that happens we tell you what it means for cost before doing anything, rather than discovering it halfway through.",
  },
  {
    icon: Radio,
    title: "Upgrade the communicator",
    body: "If the panel reports over a landline or a retired 3G radio, we replace the communicator with an LTE cellular module. This is the part that actually fails on older systems — the sensors usually don't.",
  },
  {
    icon: FileText,
    title: "Test, set the call list, hand over",
    body: "Every zone is tested end to end with our center on the line. We set your call order and passcodes with you, walk through the app, and confirm the old company is no longer receiving signals.",
  },
];

const TAKEOVER_FIT = {
  good: [
    "Hardwired or wireless panels from mainstream manufacturers, including the Honeywell/Resideo keypads common across Tampa Bay",
    "Systems from a company that closed, sold its accounts, or stopped servicing the area",
    "Builder-installed panels whose original monitoring contract has run its term",
    "Working sensors and wiring with only the panel's communicator out of date",
  ],
  replace: [
    "Proprietary panels that only one provider's equipment can talk to",
    "Panels so old that replacement parts and compatible communicators no longer exist",
    "Systems where a dealer lockout can't be cleared and the board would cost more to unlock than to replace",
    "Batteries, sirens, or keypads that have failed — those get replaced, but the rest of the system usually stays",
  ],
};

const FAQS = [
  {
    q: "Can I switch alarm monitoring companies without replacing my equipment?",
    a: "Usually, yes. If your panel is an industry-standard model rather than a proprietary one, it can be reprogrammed to report to a new monitoring center while the existing sensors, wiring, and keypads stay in place. That is called a takeover, and it is typically far cheaper than a new system. We check what is on the wall before quoting.",
  },
  {
    q: "What happens to my contract with the old company?",
    a: "A takeover changes who monitors your system; it does not cancel your existing agreement. Read your contract for the term, the cancellation notice period, and whether it auto-renews — many require written notice 30 to 60 days before renewal. If you are still inside a term, we will tell you honestly whether it makes sense to switch now or wait for the renewal window.",
  },
  {
    q: "What does an alarm monitoring takeover cost?",
    a: "It depends on whether the panel's programming is accessible and whether the communicator needs replacing. A panel that only needs reprogramming is a short visit; a locked panel or a retired 3G radio adds parts and time. We give you the number before the visit, based on photos of the keypad and panel, and in writing before any work starts.",
  },
  {
    q: "My alarm used to work over a landline. Is it still being monitored?",
    a: "Possibly not. Copper phone service is being retired across Florida, and many homes moved to cable or fiber phone service that doesn't carry alarm signals reliably. A panel can look armed and normal on the keypad while failing to reach anyone. Ask your current company when they last received a signal from your system, or ask us to check it.",
  },
  {
    q: "Is there a long-term contract with DCSI after a takeover?",
    a: "No long-term contract is required. Monitoring is handled by our own team at our center in Lutz, and we would rather keep the account by answering the phone well than by holding you to a multi-year term.",
  },
  {
    q: "Do you take over commercial alarm systems too?",
    a: "Yes. Business takeovers follow the same process, with open/close reporting, user codes per employee, and — where cameras and access control are already installed — consolidation onto one account instead of three vendors.",
  },
];

export default function MonitoringTakeoverPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(PATH), faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Monitoring Takeover", path: PATH }]} />}
        title="Alarm Monitoring Takeover"
        subtitle="Keep the system already on your walls. We reprogram the panel, upgrade the communicator if it needs it, and monitor it from our own center in Lutz — no long-term contract."
        ctaText="Check My System"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Most people who want a different alarm company don&apos;t need a different alarm system.
          The door contacts, motion detectors, and wiring in a typical Tampa Bay home last for
          decades. What changes is everything around them: the original company sells its accounts,
          the builder&apos;s contract runs out and starts auto-renewing, or the landline the panel
          reported over quietly disappears.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          A takeover moves the monitoring to us without stripping working hardware off the walls.
          It is one of the most common jobs we do — across{" "}
          <Link href="/service-areas" className="text-accent hover:underline">
            every market we serve
          </Link>
          , from builder panels in Riverview and Wesley Chapel to thirty-year-old hardwired systems
          in Carrollwood and Palm Harbor.
        </p>
      </section>

      {/* Steps */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
              How It Works
            </span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            Four Steps From Their Monitoring to Ours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <step.icon size={18} className="text-accent" />
                  </div>
                  <span className="text-accent font-montserrat font-bold text-xs">0{i + 1}</span>
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{step.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
          Can Your System Be Taken Over?
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed max-w-3xl mb-12">
          Most can. Some can&apos;t, and it is better to know that from a photo than from a
          service invoice.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-bg-card border border-border rounded-xl p-7">
            <h3 className="font-montserrat font-bold text-text-primary text-lg mb-5">
              Usually a straightforward takeover
            </h3>
            <ul className="space-y-3">
              {TAKEOVER_FIT.good.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-text-secondary text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-7">
            <h3 className="font-montserrat font-bold text-text-primary text-lg mb-5">
              Where something has to be replaced
            </h3>
            <ul className="space-y-3">
              {TAKEOVER_FIT.replace.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <XCircle size={15} className="text-text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-text-secondary text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="font-inter text-text-secondary text-sm leading-relaxed mt-8">
          Not sure whether your panel still reports at all? Read{" "}
          <Link href="/resources/landline-alarm-upgrade" className="text-accent hover:underline">
            how to tell if your alarm is still on a landline or 3G
          </Link>
          , and{" "}
          <Link href="/resources/choosing-a-monitoring-company" className="text-accent hover:underline">
            what to compare between monitoring companies
          </Link>{" "}
          before you switch to anyone.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Monitoring Takeover Questions" />
        </div>
      </section>

      <AreaLinks service="Monitoring Takeovers" />

      <QuoteSection
        heading="See If We Can Take Over Your System"
        body="Tell us what panel is on the wall (a photo of the keypad helps) and who monitors it now. We'll tell you whether it can be moved to our monitoring and what it costs per month."
        defaultService="Monitoring Takeover (Existing System)"
        testimonialIndex={4}
      />

      <CTABanner
        headline="Send Us a Photo of Your Keypad"
        body="We'll tell you whether it can be taken over, what it costs, and what monthly monitoring runs — before anyone schedules a visit."
        ctaText="Check My System"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
