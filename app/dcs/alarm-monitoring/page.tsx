import Link from "next/link";
import { AlertTriangle, HeartPulse, Flame, Battery, ShieldAlert, PhoneCall } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs/alarm-monitoring";

export const metadata = pageMetadata({
  title: "DCS Alarm Monitoring — In-House, 24/7, from Lutz FL",
  description:
    "How DCS (DCSI, Inc.) alarm monitoring works: an in-house center in Lutz, cellular signal path, what happens in the first ninety seconds, and false alarm handling.",
  path: PATH,
});

const SEQUENCE = [
  {
    title: "The panel decides",
    body: "A tripped zone starts the entry delay if it's a delay zone, or reports immediately if it isn't. This is the window where most false alarms die quietly: you come in the side door, punch your code, and nothing ever leaves the building.",
  },
  {
    title: "The signal leaves over cellular",
    body: "If the delay expires without a valid code, the panel transmits over its cellular radio — not the phone line, not your internet. The signal carries the account, the zone, and the event type, so the operator knows it was the back slider and not a smoke detector before they pick up the phone.",
  },
  {
    title: "An operator in Lutz sees it",
    body: "The signal lands at our own center, staffed by our own people, who can see your account history and the notes on the property. It does not route to a national wholesale center serving hundreds of unrelated dealers.",
  },
  {
    title: "Verification calls go out",
    body: "We work your call list in the order you set, and we ask for your passcode. A correct passcode cancels. No answer, a wrong passcode, or a duress code moves it forward — the duress code is the one that looks like a cancel to whoever is standing there and isn't.",
  },
  {
    title: "Dispatch",
    body: "If it isn't cancelled, we dispatch to the address and stay reachable to responding units. On systems with cameras, the operator can often verify what actually tripped, which changes both how the call is prioritized and whether it was worth dispatching at all.",
  },
];

const SIGNAL_TYPES = [
  { icon: ShieldAlert, label: "Burglary / intrusion", note: "Perimeter and interior zones, with your call order and dispatch policy applied." },
  { icon: Flame, label: "Fire and smoke", note: "Treated as immediate — life safety signals are not held for a verification call the way a burglary signal is." },
  { icon: HeartPulse, label: "Medical and panic", note: "Fixed buttons or worn pendants, each with its own response procedure." },
  { icon: AlertTriangle, label: "Duress", note: "A code that disarms the keypad normally while silently telling us you were forced to." },
  { icon: Battery, label: "Low battery and AC loss", note: "Supervisory signals. Not an emergency, but the reason a panel starts beeping days after a storm." },
  { icon: PhoneCall, label: "Test and supervisory", note: "The panel checks in on a schedule; a system that stops checking in gets noticed instead of failing silently." },
];

const FAQS = [
  {
    q: "Does DCS monitor alarms in house or contract it out?",
    a: "In house. The people watching your system work for DCSI at the Lutz office and can see your account history and property notes. This is the single biggest structural difference between alarm companies and it is almost never volunteered: many local “security companies” are dealers who sell and install, then hand monitoring to a national wholesale center. Both arrangements work, but with a wholesale center the responders have no relationship with you or the company that sold you the system, and a service problem has to travel through two companies.",
  },
  {
    q: "What happens when my DCS alarm goes off?",
    a: "The panel runs the entry delay, then transmits over cellular to our monitoring center. An operator sees the account, the zone, and the event type, and works your call list asking for your passcode. A valid passcode cancels the alarm. No answer, an incorrect passcode, or a duress code results in dispatch to the property. Fire and medical signals are handled on a faster path than burglary signals.",
  },
  {
    q: "What do I do about a false alarm?",
    a: "Call the monitoring number as soon as you realize it, have your passcode ready, and say it is a false alarm — that is usually enough to cancel before anyone is dispatched. Do not simply disarm the panel and assume it stopped; on many configurations the signal has already gone out. Florida municipalities commonly charge for false-alarm dispatches, so cancelling quickly has a direct cost benefit.",
  },
  {
    q: "Does DCS monitoring work if my internet or power goes out?",
    a: "Yes. Monitored systems use a cellular radio rather than your internet connection, and the panel carries a backup battery. That combination is specifically what keeps the system reporting through a Florida storm, which is when internet-only monitoring fails and when landline connections are least useful — a phone line can be cut outside the house in seconds.",
  },
  {
    q: "Can DCS monitor an alarm system another company installed?",
    a: "Frequently, yes. If the existing panel is industry-standard rather than proprietary, a takeover means reprogramming the panel to report to our center rather than replacing the hardware. It is worth having someone look at what you have before agreeing to a full replacement, particularly on hardwired systems in older Tampa Bay homes, where the sensors and wiring are often still perfectly good.",
  },
  {
    q: "Is there a long-term monitoring contract?",
    a: "No. DCSI does not require multi-year monitoring agreements. When comparing us to anyone else, ask for the term length, the early-termination fee, and whether the agreement auto-renews — a lower advertised monthly rate on a five-year term frequently costs more in total than a higher rate you can leave.",
  },
  {
    q: "How much does DCS alarm monitoring cost per month?",
    a: "It depends on what is being monitored — intrusion only, versus a system that also carries fire, medical, cellular, and camera services. Rather than advertise a headline rate that only applies to the simplest possible configuration, the monthly is quoted with the system. Ask us on the phone; it is a short answer once we know what you have.",
  },
];

export default function DcsMonitoringPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "DCS Alarm Monitoring — In-House 24/7 Monitoring from Lutz, Florida",
            description:
              "How alarm monitoring works at DCS (DCSI, Inc.): in-house monitoring center, cellular signal path, verification and dispatch procedure, signal types, false alarms, and takeover of existing systems.",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />

      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "DCS", path: "/dcs" },
              { name: "Alarm Monitoring", path: PATH },
            ]}
          />
        }
        title="DCS Alarm Monitoring"
        subtitle="Watched in house, around the clock, from the Lutz office — not handed to a national call center that has never heard of your property."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Monitoring is a strange thing to buy. You pay every month for something you hope never
          activates, which makes it nearly impossible to judge whether you bought well — until the
          one night it matters, which is a terrible time to find out.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          So here is the procedure, written out. Ask any company you&apos;re comparing to walk you
          through theirs the same way.
        </p>
      </section>

      {/* The first ninety seconds */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-4">
            The First Ninety Seconds
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed mb-12">
            What happens between a zone tripping and someone being dispatched.
          </p>
          <ol className="space-y-6">
            {SEQUENCE.map((s, i) => (
              <li key={s.title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-montserrat font-bold text-accent text-xs">0{i + 1}</span>
                  <h3 className="font-montserrat font-bold text-text-primary text-lg">{s.title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Signal types */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
          What We Monitor For
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-12 max-w-2xl">
          Not every signal is an emergency, and they are not all handled the same way.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SIGNAL_TYPES.map(({ icon: Icon, label, note }) => (
            <div key={label} className="bg-bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <Icon size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                <h3 className="font-montserrat font-bold text-text-primary text-sm">{label}</h3>
              </div>
              <p className="font-inter text-text-secondary text-xs leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison pointer */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-montserrat font-extrabold text-2xl text-text-primary mb-5">
            Comparing Monitoring Companies
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            We wrote a guide to this that is useful even if you hire someone else — six structural
            questions covering who staffs the center, contract terms, equipment ownership, and the
            communication path.{" "}
            <Link
              href="/resources/choosing-a-monitoring-company"
              className="text-accent hover:underline"
            >
              Read how to choose a monitoring company
            </Link>
            , then apply the same six questions to us.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FaqAccordion faqs={FAQS} heading="Monitoring Questions" />
      </section>

      <DcsPageLinks exclude="alarm-monitoring" />

      <CTABanner
        headline="Ask Who's Actually Watching"
        body="It's a fair question for any alarm company, and ours has a short answer: we are, from Lutz, 24/7."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
