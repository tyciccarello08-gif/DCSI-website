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

const SLUG = "hurricane-season-security";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Hurricane Season Security Checklist for Florida Homes",
  description:
    "Keep your alarm and security cameras working through a Florida hurricane: power outages, evacuation, shutters, and the vulnerable week after the storm.",
  path: PATH,
  type: "article",
});

const PHASES = [
  {
    label: "Early in the season",
    title: "Before there's a storm on the map",
    items: [
      "Confirm your alarm reports over cellular, not a landline or a VoIP line that dies with the power. If you're not sure, our landline and 3G guide shows how to check.",
      "Test the panel's standby battery. Most panels report a low battery, but only once the battery is already failing — and a battery that lasts hours on a good day lasts less in August heat.",
      "Put the camera recorder, modem, and router on a UPS battery backup. Without one, the cameras go dark the moment the power does.",
      "Update the monitoring call list with cell numbers, including someone outside the storm's likely path.",
      "Add water sensors near the water heater, washing machine, and A/C air handler if the system doesn't have them yet.",
    ],
  },
  {
    label: "Storm approaching",
    title: "When you're boarding up",
    items: [
      "Tell your monitoring company whether you're staying or evacuating, and where to reach you.",
      "Install shutters before arming the system, then check the keypad shows ready — shutters going up can nudge window contacts.",
      "Expect glass-break sensors to react to debris striking shutters. If you're staying, consider arming in a mode that leaves them off.",
      "If you're leaving, arm the system fully. Empty evacuated neighborhoods are the scenario monitoring exists for.",
      "Keep generators outside and away from openings. Carbon monoxide detection on the alarm system is worth having before the first time you run one.",
    ],
  },
  {
    label: "After the storm",
    title: "The week after landfall",
    items: [
      "Expect AC power-loss and low-battery signals from the panel; the center sees them too. A system that reports nothing at all is the one to worry about.",
      "Walk every door and window once power is back. Wind and water shift frames, and a contact that no longer lines up will fault the next time you arm.",
      "Check sensors and the panel for water intrusion before relying on them, especially in garages and ground-floor utility rooms.",
      "Review camera footage from the outage window once the recorder is back up — and if it wasn't recording, that tells you what the UPS needs to cover next year.",
      "Keep arming the system. Theft from storm-damaged and empty homes is a recurring problem after major hurricanes.",
    ],
  },
];

const FAQS = [
  {
    q: "Does a home alarm system work when the power goes out?",
    a: "Yes, for a while. Alarm panels have a standby battery that keeps the system armed and reporting during an outage — typically for hours rather than days, depending on the panel, the battery's age, and how many devices it is powering. Whether the alarm still reaches the monitoring center depends on the communicator: cellular keeps working on battery, while landline and especially internet-based paths often don't.",
  },
  {
    q: "Do security cameras work during a hurricane power outage?",
    a: "Only if the recorder and network equipment have backup power. Wired cameras powered from the recorder stop recording the moment it loses power unless it is on a UPS or generator circuit. Wi-Fi cameras additionally need the modem and router running, and cloud cameras need the internet connection to be up — which, after a hurricane, often takes the longest to come back.",
  },
  {
    q: "Will hurricane shutters set off my alarm?",
    a: "They can. Window contacts are normally unaffected by closed shutters, but installing shutters can bump a contact out of alignment, and glass-break sensors can respond to the noise of debris hitting shutters. Check that the keypad shows ready after the shutters are up, and ask your monitoring company about arming without glass-break zones if you are staying in the house.",
  },
  {
    q: "Should I tell my alarm company I'm evacuating?",
    a: "Yes. Tell them you are leaving, where you can be reached, and who has a key locally if anyone. That lets the center handle alarms and trouble signals from your property sensibly while you are gone, and it keeps them from calling a home phone nobody is there to answer.",
  },
  {
    q: "When is hurricane season in Florida?",
    a: "The Atlantic hurricane season runs from June 1 through November 30, with the most activity typically from mid-August through October. Early June is the practical time to test batteries, confirm the communicator, and update call lists — before there is a storm in the forecast and every store is out of UPS units.",
  },
];

export default function HurricaneSeasonSecurityPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "A hurricane season checklist for keeping Florida home alarm systems and security cameras working through power outages, evacuation, and recovery.",
            published: R.published,
            modified: R.modified,
            image: "/images/13-residential-home-exterior.webp",
            about: "Hurricane preparedness for home security systems",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Hurricane Season Checklist", path: PATH },
            ]}
          />
        }
        title="Hurricane Season Security Checklist"
        subtitle="The storm is when your security system is most likely to fail and the week after is when you most need it. Here's how to make sure it gets through both."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Most security systems are designed for a normal day: power on, internet up, someone
          nearby to answer the phone. A hurricane takes away all three at once, often for days, and
          leaves whole neighborhoods empty while it does.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          None of the fixes are exotic. They come down to three questions — what keeps the system
          powered, how the alarm leaves the house, and who gets called — and they are much easier
          to answer in June than with a storm already in the forecast.
        </p>
      </section>

      {PHASES.map((phase, i) => (
        <section
          key={phase.title}
          className={i % 2 === 0 ? "bg-bg-secondary border-y border-border" : ""}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
                {phase.label}
              </span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-8">
              {phase.title}
            </h2>
            <ul className="space-y-4">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-1" />
                  <span className="font-inter text-text-secondary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
          The Part We Handle
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed">
          Our monitoring center in Lutz is staffed through storms, and the accounts it watches are
          our own customers rather than a wholesale list. If you want a storm-season check of your
          system — communicator, standby battery, call list, and water sensors — we can do that as
          a service visit, and if your panel is still on a landline we can{" "}
          <Link href="/services/alarm-monitoring-takeover" className="text-accent hover:underline">
            upgrade it to cellular
          </Link>{" "}
          without replacing the system. Coastal owners in{" "}
          <Link href="/service-areas/bradenton" className="text-accent hover:underline">
            Bradenton
          </Link>
          ,{" "}
          <Link href="/service-areas/clearwater" className="text-accent hover:underline">
            Clearwater
          </Link>
          , and{" "}
          <Link href="/service-areas/south-tampa" className="text-accent hover:underline">
            South Tampa
          </Link>{" "}
          should also look at where the panel and recorder sit relative to the flood line.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Hurricane & Power Outage Questions" />
        </div>
      </section>

      <RelatedResources slugs={["vacant-home-security", "landline-alarm-upgrade", "how-many-security-cameras"]} />

      <CTABanner
        headline="Get Storm-Ready Before the Forecast"
        body="Battery, communicator, call list, and water sensors checked in one visit."
        ctaText="Schedule a Check"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
