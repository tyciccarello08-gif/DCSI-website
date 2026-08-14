import Link from "next/link";
import { BatteryWarning, Home, ListChecks, PlugZap, UserPlus, Wrench } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs/customer-service";

export const metadata = pageMetadata({
  title: "DCS Customer Service — Existing Systems & Support",
  description:
    "Already have a DCS (DCSI, Inc.) system? Service calls, false alarms, beeping panels, call-list changes, and moving house — what to do and what to have ready.",
  path: PATH,
});

/** What people actually call about, in rough order of call volume. */
const REQUESTS = [
  {
    icon: BatteryWarning,
    title: "The panel is beeping and won't stop",
    body: "Almost always a low battery — either the panel's backup battery, which lasts a few years, or a wireless sensor's cell. The keypad will usually name the zone. It is not an emergency and the system still works, but it will keep beeping until the battery is replaced, and a panel battery that has failed means the next power outage takes the system with it.",
  },
  {
    icon: PlugZap,
    title: "AC loss after a storm",
    body: "The panel is telling you it lost building power and is running on battery. If the power is back and the message hasn't cleared, check that the transformer is still seated in its outlet and that nothing tripped the breaker it's on — a surprising share of these are an outlet someone unplugged for a vacuum or a holiday decoration.",
  },
  {
    icon: ListChecks,
    title: "Change who we call",
    body: "New phone number, a divorce, a college kid moving out, a neighbor who no longer wants to be on the list. Call the office — call-list changes are verified against the account, which is exactly why we can't take them by email from an address we can't confirm.",
  },
  {
    icon: UserPlus,
    title: "Add or remove a user code",
    body: "Cleaners, dog walkers, contractors, and former employees. Give each person their own code rather than sharing one: individual codes can be deleted without disrupting anyone else, and the reporting tells you which code disarmed the system.",
  },
  {
    icon: Home,
    title: "You're moving",
    body: "Two separate questions — what happens to the system at the old address, and what you need at the new one. Both are worth a phone call before closing, because a system left armed and reporting to your account after you've moved out generates alarms you'll be called about.",
  },
  {
    icon: Wrench,
    title: "Something isn't working",
    body: "A zone that won't clear, a sensor that fell off a door, a keypad that has gone dark, a camera that stopped recording. Service calls are scheduled during office hours; describing the symptom precisely on the phone frequently determines what the technician brings.",
  },
];

const FALSE_ALARM_STEPS = [
  "Call the office number and have your passcode ready — that is what cancels the alarm.",
  "Say clearly that it is a false alarm and give the passcode when asked. Disarming the panel alone does not always stop the signal that has already gone out.",
  "If police have already been dispatched, tell us — we can notify them, but only if we know.",
  "Then figure out why: a door that didn't latch, a pet under the motion, a balloon or a ceiling fan on a warm draft, or a sensor coming loose. Repeat false alarms on one zone are worth a service call rather than a workaround.",
];

const FAQS = [
  {
    q: "How do I reach DCS customer service?",
    a: `Call ${CONTACT.phone} during office hours, Monday through Friday, 8:00 AM to 5:00 PM, for service calls, account changes, scheduling, and billing. Alarm monitoring is staffed 24/7 separately, so an actual alarm at 3am is always handled — but account and service functions happen during business hours.`,
  },
  {
    q: "Why is my alarm panel beeping?",
    a: "The most common cause by far is a low battery — either the panel's backup battery or a battery in a wireless sensor — and the keypad usually names the affected zone. The second most common is an AC power loss, typical after a storm. Neither disables the system immediately, but both should be resolved: a dead backup battery means the next outage takes the whole system down with it.",
  },
  {
    q: "How do I cancel a false alarm?",
    a: "Call the office and give your passcode. That is the step that cancels it — simply disarming the panel does not always stop a signal that has already transmitted. If a dispatch has already gone out, tell us so we can notify responders. Florida municipalities commonly charge for false-alarm dispatches, so cancelling quickly has a direct cost.",
  },
  {
    q: "How do I add or change the people you call?",
    a: "Call the office. Because a call list controls who can cancel an alarm on your behalf, changes are verified against the account rather than accepted by email. It takes a couple of minutes on the phone, and it is worth reviewing the list once a year — most out-of-date call lists are discovered during an actual alarm.",
  },
  {
    q: "What happens to my system if I move?",
    a: "Call before closing. Two things need handling: the system at the property you are leaving, so it stops reporting alarms to your account after you no longer live there, and whatever you need at the new address — which may be a new install, or a takeover of a system already in the house. Both are simpler arranged in advance than sorted out afterward.",
  },
  {
    q: "Can DCS service a system another company installed?",
    a: "Frequently, yes. Plenty of homes in Tampa Bay have serviceable panels and sensors from companies that no longer operate here. If the equipment is industry-standard rather than proprietary, service and monitoring takeover are usually both possible and considerably cheaper than a full replacement.",
  },
  {
    q: "Do I need to be home for a service call?",
    a: "For anything involving the panel, sensors, or interior wiring, yes — someone eighteen or older who can grant access and knows the system's code. Exterior-only work, like a camera on a soffit, can sometimes be done without you there. Ask when scheduling so nobody loses a day.",
  },
];

export default function DcsCustomerServicePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "DCS Customer Service — Support for Existing Systems",
            description:
              "Support information for existing DCS (DCSI, Inc.) customers: service calls, false alarm cancellation, beeping panels and trouble codes, call-list and user-code changes, and moving.",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />

      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "DCS", path: "/dcs" },
              { name: "Customer Service", path: PATH },
            ]}
          />
        }
        title="DCS Customer Service"
        subtitle="Already have a system from us? Here's what to do about the beeping, the false alarm, the call list, and the move — and what to have ready when you phone."
        ctaText="Contact the Office"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-bg-card border border-border rounded-xl p-7">
          <p className="font-inter text-text-primary leading-relaxed">
            <strong>If your alarm is going off right now,</strong> call{" "}
            <a href={CONTACT.phoneHref} className="text-accent hover:underline">
              {CONTACT.phone}
            </a>{" "}
            and have your passcode ready. Monitoring is staffed 24/7 — everything else on this page
            is for normal business hours.
          </p>
        </div>
      </section>

      {/* Common requests */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            What People Call About
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REQUESTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-montserrat font-bold text-text-primary text-base leading-snug">
                    {title}
                  </h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* False alarm procedure */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
          Cancelling a False Alarm
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-10">
          In order, because the order matters — the passcode is what actually cancels it.
        </p>
        <ol className="space-y-5">
          {FALSE_ALARM_STEPS.map((step, i) => (
            <li key={step} className="flex gap-5">
              <span className="font-montserrat font-bold text-accent text-sm flex-shrink-0 w-7 pt-0.5">
                0{i + 1}
              </span>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* What to have ready */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-montserrat font-bold text-2xl text-text-primary mb-6">
            Have This Ready When You Call
          </h2>
          <ul className="space-y-3">
            {[
              "The service address on the account — not necessarily your mailing address.",
              "The name the account is under, which on older accounts may be a previous owner or a spouse.",
              "Your passcode, for anything involving alarms or account changes.",
              "What the keypad says, word for word. “Trouble zone 14” is a diagnosis; “it's beeping” is a guess.",
              "When it started, and whether it followed a storm, an outage, or a battery change.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="font-inter text-text-secondary text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="font-inter text-text-secondary text-sm leading-relaxed mt-8">
            Trying to arm from your phone instead?{" "}
            <Link href="/dcs/app-and-login" className="text-accent hover:underline">
              See app and remote access
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FaqAccordion faqs={FAQS} heading="Customer Service Questions" />
      </section>

      <DcsPageLinks exclude="customer-service" />

      <CTABanner
        headline="Still Stuck? Call the Office."
        body="Most of these are a five-minute phone call. Some are a service visit — we'll tell you honestly which one you have."
        ctaText="Contact the Office"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
