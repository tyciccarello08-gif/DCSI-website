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

const SLUG = "doorbell-camera-vs-security-system";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Video Doorbell vs. Security System: Need Both?",
  description:
    "What a video doorbell covers and what it misses, how it compares to a monitored alarm system, and how the two work together on a Florida home.",
  path: PATH,
  type: "article",
});

const ROWS = [
  {
    factor: "What it watches",
    doorbell: "The front door and a few feet of porch.",
    alarm: "Every protected door and window, plus interior motion.",
  },
  {
    factor: "When nobody responds",
    doorbell: "A notification sits on a phone.",
    alarm: "A monitoring center works your call list and dispatches.",
  },
  {
    factor: "Back and side approaches",
    doorbell: "Not covered. Most break-ins don't use the front door.",
    alarm: "Covered by the sensors on those doors and windows.",
  },
  {
    factor: "Package theft",
    doorbell: "Strong. This is what it's best at.",
    alarm: "Not addressed unless cameras are part of the system.",
  },
  {
    factor: "Talking to visitors",
    doorbell: "Yes — two-way audio from anywhere.",
    alarm: "Not by itself.",
  },
  {
    factor: "Fire, water, and CO",
    doorbell: "No.",
    alarm: "Can be monitored on the same panel.",
  },
  {
    factor: "Power or internet outage",
    doorbell: "Usually stops recording and notifying.",
    alarm: "Battery backup and cellular reporting keep it working.",
  },
];

const FAQS = [
  {
    q: "Is a video doorbell enough home security?",
    a: "For package theft and seeing who's at the door, a video doorbell is excellent. As whole-house security it falls short: it covers one entrance, depends on Wi-Fi and power, and relies on you to notice a notification. A monitored alarm covers every protected opening and has someone respond when you can't.",
  },
  {
    q: "Can a video doorbell work with my alarm system?",
    a: "Often, yes. Many alarm platforms support compatible video doorbells in the same app as the alarm, and some can trigger recordings or notifications from alarm events. Compatibility depends on the panel and doorbell model, so check before buying.",
  },
  {
    q: "Should I hardwire my video doorbell?",
    a: "If you have an existing doorbell transformer and wiring, yes. A hardwired doorbell doesn't need recharging and can record more continuously than a battery model, which often limits recording to save power.",
  },
  {
    q: "Do I need security cameras if I have a video doorbell?",
    a: "Usually, for anything beyond the front door. Driveways, side yards, back doors, lanais, and docks are the approaches a doorbell can't see. Our guide to how many security cameras a house needs walks through counting them by approach.",
  },
];

export default function DoorbellVsSecuritySystemPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "A comparison of video doorbells and monitored security systems for Florida homes, covering coverage, response, outages, and how they work together.",
            published: R.published,
            modified: R.modified,
            image: "/images/01-family-home-security.webp",
            about: "Video doorbells compared with home security systems",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Video Doorbell vs. Security System", path: PATH },
            ]}
          />
        }
        title="Video Doorbell vs. Security System"
        subtitle="A doorbell camera watches one door. A security system watches the house. Most homes are better off with both."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          A video doorbell is one of the most useful pieces of security hardware you can buy for
          what it costs. It stops a lot of package theft, it lets you answer the door from work,
          and it records everyone who walks up the front path.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          The trouble is when people treat it as the whole system. The front door is the most
          visible entrance to a house, which is exactly why it&apos;s rarely the one a burglar
          picks.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
            Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left font-inter text-sm">
              <thead className="bg-bg-card">
                <tr>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Factor</th>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Video doorbell</th>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Monitored alarm</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.factor} className="border-t border-border">
                    <th scope="row" className="px-5 py-4 text-text-primary font-medium align-top">{row.factor}</th>
                    <td className="px-5 py-4 text-text-secondary align-top">{row.doorbell}</td>
                    <td className="px-5 py-4 text-text-secondary align-top">{row.alarm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            How They Work Together
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            The best setups treat the doorbell as one camera in a larger plan. The alarm protects
            every opening and reports to a monitoring center. Cameras cover the approaches the
            doorbell can&apos;t — the driveway, the side gate, the lanai, the back of a lakefront
            or golf-course lot. And on many platforms the doorbell shows up in the same app as the
            alarm, so there&apos;s one place to look. Our{" "}
            <Link href="/resources/how-many-security-cameras" className="text-accent hover:underline">
              camera count guide
            </Link>{" "}
            covers where the rest should go.
          </p>
        </div>
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            The Florida Wrinkle: Storms
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            Most doorbells depend on home Wi-Fi and power, so they go dark in exactly the outages
            that follow a storm, when evacuated neighborhoods are emptiest. A monitored alarm with a
            backup battery and cellular reporting keeps working. Our{" "}
            <Link href="/resources/hurricane-season-security" className="text-accent hover:underline">
              hurricane season checklist
            </Link>{" "}
            covers keeping cameras up through an outage too.
          </p>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Doorbell Camera Questions" />
        </div>
      </section>

      <RelatedResources slugs={["how-many-security-cameras", "diy-vs-professional-security", "security-camera-footage-retention"]} />

      <CTABanner
        headline="More Than the Front Door"
        body="We'll design a system that covers every approach, with your doorbell in the same app as the alarm and cameras where they're compatible."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
