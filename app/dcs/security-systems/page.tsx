import Image from "next/image";
import Link from "next/link";
import { Bell, DoorClosed, Flame, Radio, Siren, Wifi } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DcsPageLinks from "@/components/DcsPageLinks";
import FaqAccordion from "@/components/FaqAccordion";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/dcs/security-systems";

export const metadata = pageMetadata({
  title: "DCS Security Systems — What's in a DCSI Alarm System",
  description:
    "What a DCS (DCSI, Inc.) security system includes, how the install runs start to finish, and what each piece of equipment actually does. Lutz, FL since 2004.",
  path: PATH,
});

const COMPONENTS = [
  {
    icon: Radio,
    title: "The panel",
    body: "The box that makes every decision. It holds the zone programming, the entry and exit delays, the user codes, and the battery that keeps the system alive when the power goes out — which in Florida is a design requirement, not an edge case. It also holds the cellular radio that reports to the monitoring center.",
  },
  {
    icon: DoorClosed,
    title: "Door and window contacts",
    body: "Two-piece magnetic sensors that report the instant a protected opening breaks contact. Cheap, boring, and the highest-value part of any system, because the overwhelming majority of break-ins come through a door or a slider rather than through a wall.",
  },
  {
    icon: Siren,
    title: "Motion detectors and glass break",
    body: "Interior coverage for anything that gets past the perimeter. Modern pet-immune motions ignore animals under a weight threshold, and glass break sensors listen for the specific acoustic signature of breaking pane — useful in Florida rooms with large sliders where a contact alone leaves a gap.",
  },
  {
    icon: Flame,
    title: "Fire, smoke, and carbon monoxide",
    body: "Monitored life-safety devices differ from the hardware-store smoke alarm in one way that matters: they report to a monitoring center, so a fire at 3am in an empty house gets a dispatch instead of a chirp nobody hears.",
  },
  {
    icon: Bell,
    title: "Keypads, panics, and medical buttons",
    body: "How people actually operate the system day to day. Panic and medical buttons — fixed or worn — send a distinct signal type with its own response procedure, which is why they belong on the system rather than on a separate gadget.",
  },
  {
    icon: Wifi,
    title: "Cellular communicator",
    body: "How the alarm leaves the building. Cellular with battery backup is standard on our installs because a landline can be cut outside the house in seconds and internet-only monitoring stops working during exactly the storms that knock out service.",
  },
];

const STEPS = [
  {
    title: "Walk the property",
    body: "Someone comes out, walks the house or building with you, and looks at the actual openings, sightlines, and how you live in the space. A quote written without seeing the property is a guess about someone else's house.",
  },
  {
    title: "Design and quote",
    body: "You get a written scope: what goes where, what it costs to install, and what the monitoring runs monthly. Anything you decline is genuinely optional — the system works without it, and you can add it later.",
  },
  {
    title: "Install",
    body: "Most residential installs are a single day. New construction is different: the low-voltage rough-in happens before drywall, which is why builders schedule it against the framing inspection. See the builder pre-wire guide if that's your situation.",
  },
  {
    title: "Program and test",
    body: "Every zone is walk-tested against the monitoring center, so a device that reports the wrong zone or reports nothing gets caught on install day rather than during a break-in.",
  },
  {
    title: "Hand it over",
    body: "You get shown how to arm, disarm, bypass a zone, and cancel a false alarm — plus your call list and dispatch order, which we go over out loud rather than filing away.",
  },
];

const FAQS = [
  {
    q: "What does a DCS security system include?",
    a: "A typical DCSI residential system is a panel with battery backup and a cellular communicator, contacts on the exterior doors and accessible windows, one or more pet-immune motion detectors, a keypad or two, an interior siren, and monitored smoke detection. Cameras, glass break sensors, access control, medical buttons, and smart locks are common additions. The system is designed around the property, so no two quotes are identical.",
  },
  {
    q: "Does DCS install security systems for businesses as well as homes?",
    a: "Yes. Commercial work is a large share of what DCSI does — retail, warehouse, office, and community properties — and it typically adds access control, door schedules, multi-user reporting, and camera coverage on top of intrusion detection. Community associations and CDDs are handled as their own category, with gate access and common-area coverage.",
  },
  {
    q: "Do I own the equipment DCS installs?",
    a: "Yes. Equipment we install is yours outright, on industry-standard hardware rather than a proprietary panel locked to one provider. That matters more than it sounds: a proprietary panel turns any future service dispute into a full replacement, while standard equipment means another company could take over monitoring if you ever wanted them to.",
  },
  {
    q: "Does DCS require a long-term contract?",
    a: "No. Long multi-year monitoring agreements with early-termination fees are common across the industry and are frequently how a low advertised monthly rate gets funded. DCSI does not require them. Ask any company you are comparing for the term, the termination fee, and whether it auto-renews before you compare monthly prices.",
  },
  {
    q: "Can DCS take over the alarm system that's already in my house?",
    a: "Often, yes. Plenty of Tampa Bay homes have perfectly serviceable hardwired panels and sensors installed by companies that no longer operate here. If the panel is industry-standard rather than proprietary, a takeover is usually far cheaper than a replacement, and it is worth having someone check before agreeing to rip out working hardware.",
  },
  {
    q: "How much does a DCS security system cost?",
    a: "It depends on the size of the property, how many openings need coverage, whether the walls are open, and what you add beyond intrusion detection. Rather than publish an invented number, we walk the property and give you a written quote. The cost guide on this site explains what actually drives the price and which quoted line items are worth questioning.",
  },
];

export default function DcsSecuritySystemsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "DCS Security Systems — What a DCSI Alarm System Includes",
            description:
              "The components of a DCS (DCSI, Inc.) security system, how an installation is scoped and performed, equipment ownership, and takeover of existing panels.",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />

      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "DCS", path: "/dcs" },
              { name: "Security Systems", path: PATH },
            ]}
          />
        }
        title="DCS Security Systems"
        subtitle="What's actually in the system, what each piece does, and how an install runs from the first walkthrough to the handover."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed">
          &quot;Security system&quot; is a vague enough phrase that two quotes for it can describe
          genuinely different things. This page breaks a DCS system into its parts so you can read
          any quote — ours or a competitor&apos;s — and know what you&apos;re looking at.
        </p>
      </section>

      {/* Components */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            The Parts of the System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COMPONENTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-bg-card border border-border rounded-xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-montserrat font-bold text-text-primary text-lg">{title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel image */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-56 sm:h-72">
          <Image
            src="/images/05-dcsi-honeywell-touchscreen-panel.webp"
            alt="Touchscreen alarm keypad installed by DCSI Inc. in a Tampa Bay home"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/55 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="font-montserrat font-extrabold text-xl sm:text-3xl text-text-primary max-w-lg leading-snug">
                Standard equipment.<br />
                <span className="text-accent">You own it outright.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-12">
          How a DCS Install Runs
        </h2>
        <ol className="space-y-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-5">
              <span className="font-montserrat font-bold text-accent text-sm flex-shrink-0 w-7 pt-1">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-2">
                  {s.title}
                </h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="font-inter text-text-secondary text-sm leading-relaxed mt-10">
          Building new?{" "}
          <Link href="/resources/builder-prewire-guide" className="text-accent hover:underline">
            The builder pre-wire guide
          </Link>{" "}
          covers the rough-in timing. Comparing quotes?{" "}
          <Link href="/resources/security-system-cost" className="text-accent hover:underline">
            The cost guide
          </Link>{" "}
          explains what drives the number.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Questions About DCS Systems" />
        </div>
      </section>

      <DcsPageLinks exclude="security-systems" />

      <CTABanner
        headline="Get a System Designed for Your Property"
        body="We walk the house or building, then quote what it actually needs. No obligation, no long-term contract."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
