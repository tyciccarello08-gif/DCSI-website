import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import ArticleByline from "@/components/ArticleByline";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, resourceBySlug } from "@/lib/constants";
import { articleSchema, faqSchema, pageMetadata } from "@/lib/seo";

const SLUG = "false-alarm-prevention";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "How to Prevent False Burglar Alarms",
  description:
    "The common causes of false burglar alarms in Florida homes and businesses, and the settings, sensors, and habits that stop them before they become dispatch fees.",
  path: PATH,
  type: "article",
});

const CAUSES = [
  {
    title: "Someone who doesn't know the system",
    body: "A house guest, a new cleaner, a dog walker, a teenager's friend. User error is the single most common cause of false alarms, and it is almost always a person who was never shown the keypad or given their own code.",
    fix: "Give every regular visitor their own user code, walk them through arming and disarming once, and make sure they know the passcode to give the monitoring center if they set it off.",
  },
  {
    title: "Doors and windows that aren't quite closed",
    body: "Florida humidity swells wooden doors and shifts frames, and a contact that sat a quarter inch from its magnet when installed can drift out of range. A sliding door that bounces back after it's pulled shut does the same.",
    fix: "Use the keypad's \"not ready\" indicator before arming, and have a contact re-aligned the first time it starts faulting rather than the fifth.",
  },
  {
    title: "Pets and motion detectors",
    body: "A standard motion detector cannot tell a 60-pound dog on the couch from a person. Cats that climb furniture defeat even pet-immune sensors aimed the wrong way.",
    fix: "Pet-immune motion detectors, mounted and aimed for the animals you actually have, or arming in a mode that leaves interior motion off while the pets are loose.",
  },
  {
    title: "Things that move on their own",
    body: "Ceiling fans, curtains over an A/C vent, a helium balloon drifting after a party, and — in Florida especially — insects and spiders crawling across a motion detector's lens.",
    fix: "Keep motion detectors clear of vents and fans, and wipe the lens and housing occasionally. A sensor that alarms at the same time every night is usually telling you about one of these.",
  },
  {
    title: "Weak batteries and aging equipment",
    body: "Wireless sensors and the panel's standby battery both wear out, and a failing battery can produce erratic signals before it produces a clean low-battery warning. Lightning surges also damage panels and sensors in a way that shows up as intermittent faults.",
    fix: "Replace sensor batteries when the panel reports them low, replace the panel's standby battery every few years, and have the system checked after a nearby lightning strike.",
  },
];

const FAQS = [
  {
    q: "What does Florida law require before police are dispatched on a burglar alarm?",
    a: "Under section 489.529 of the Florida Statutes, a monitoring company must attempt to confirm a burglary alarm with the owner, an occupant, or an authorized contact — by call, text, or other electronic means — before requesting a law enforcement dispatch, and must make a second attempt if the first fails. Systems with working video or audio verification are an exception. That is why an accurate, current call list matters: it is the list the center works through in those first minutes.",
  },
  {
    q: "Are there fines for false alarms in Florida?",
    a: "Many Florida cities and counties require alarm registration and charge fees for repeat false alarm dispatches, usually after a set number of free ones per year. The rules and amounts vary by jurisdiction, so check with your city or county sheriff's office for where your property is. The cheapest false alarm is the one that is cancelled before dispatch.",
  },
  {
    q: "What should I do if I set off my alarm by accident?",
    a: "Disarm it at the keypad right away — on most systems that sends a cancel signal. Then answer the monitoring center's call, give your passcode, and tell them it was a false alarm. If you miss the call, call the center back. Cancelling quickly is what keeps a mistake from becoming a dispatch.",
  },
  {
    q: "Why does my alarm go off at the same time every night?",
    a: "A repeating time usually points to something mechanical or environmental rather than a person: the A/C cycling on and moving a curtain, a sprinkler hitting a window, a timer-controlled light or fan, or an insect active at that hour near a motion detector. The panel's event history shows which zone triggered, which narrows it down quickly.",
  },
  {
    q: "Do cameras help reduce false alarm dispatches?",
    a: "They can. When monitoring personnel can see or hear the premises, Florida's two-attempt confirmation requirement doesn't apply in the same way, and more importantly the center can tell a real intrusion from a dog on the couch. A center that can tell law enforcement what it is seeing gives them far better information than an unverified alarm signal.",
  },
];

export default function FalseAlarmPreventionPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "Common causes of false burglar alarms and how to prevent them, including Florida's alarm confirmation requirement before police dispatch.",
            published: R.published,
            modified: R.modified,
            image: "/images/keypad-honeywell-lcd.webp",
            about: "False alarm prevention",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "False Alarm Prevention", path: PATH },
            ]}
          />
        }
        title="How to Prevent False Alarms"
        subtitle="Five causes account for most false alarms. Each has a fix that costs little or nothing — and every one avoided is a dispatch fee you don't pay."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          False alarms cost more than an awkward phone call. Many Florida jurisdictions charge for
          repeat false dispatches, every false alarm trains the household to ignore the siren, and
          a system that keeps going off is a system people stop arming.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          The good news is that false alarms are rarely random. Nearly all of them come from the
          same short list of causes, and the panel&apos;s event history usually says which one.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
            The Five Common Causes — and the Fix for Each
          </h2>
          <div className="space-y-6">
            {CAUSES.map((c, i) => (
              <div key={c.title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent font-montserrat font-bold text-xs">0{i + 1}</span>
                  <h3 className="font-montserrat font-bold text-text-primary text-lg">{c.title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed mb-4">{c.body}</p>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-text-primary text-sm leading-relaxed">{c.fix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
          What Happens Between the Siren and a Dispatch
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-6">
          Florida law builds a safety net into burglary alarms. Before a monitoring center asks
          law enforcement to respond, it has to try to confirm the alarm with you or someone on
          your call list — and try a second time if the first attempt fails. Alarms with working
          video or audio verification are the exception.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed mb-6">
          That confirmation step only works if the call list is current. A list with a disconnected
          landline, an ex-spouse, and a neighbor who moved away in 2019 turns a cancellable mistake
          into a dispatch. Review it once a year, and any time someone in the household changes
          numbers.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          Our monitoring is handled in house from Lutz, so changing your call list or passcode is a
          phone call to the same people who answer your alarms. More on how that works in{" "}
          <Link href="/resources/choosing-a-monitoring-company" className="text-accent hover:underline">
            how to choose a monitoring company
          </Link>
          .
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="False Alarm Questions" />
        </div>
      </section>

      <RelatedResources slugs={["burglar-alarm-faq", "landline-alarm-upgrade", "how-many-security-cameras"]} />

      <CTABanner
        headline="Alarm Keeps Going Off?"
        body="We'll pull the event history, find the zone that's causing it, and fix the cause — not just reset the panel."
        ctaText="Request Service"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
