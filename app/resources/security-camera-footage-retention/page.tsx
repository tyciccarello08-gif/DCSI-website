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

const SLUG = "security-camera-footage-retention";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "How Long Do Security Cameras Keep Footage?",
  description:
    "How many days of footage a security camera recorder holds, how to estimate storage from bitrate, and continuous vs. motion recording for homes and businesses.",
  path: PATH,
  type: "article",
});

/**
 * 1 Mbps sustained for 24 hours = 86,400 Mb = 10,800 MB ≈ 10.8 GB/day. Every
 * figure in the table derives from that, so the arithmetic stays checkable.
 */
const GB_PER_MBPS_DAY = 10.8;

const SCENARIOS = [
  { label: "4 cameras · 4 Mbps", cameras: 4, mbps: 4, drive: 4 },
  { label: "8 cameras · 4 Mbps", cameras: 8, mbps: 4, drive: 4 },
  { label: "8 cameras · 4 Mbps", cameras: 8, mbps: 4, drive: 8 },
  { label: "8 cameras · 8 Mbps", cameras: 8, mbps: 8, drive: 8 },
  { label: "16 cameras · 4 Mbps", cameras: 16, mbps: 4, drive: 12 },
].map((s) => {
  const perDay = s.cameras * s.mbps * GB_PER_MBPS_DAY;
  return { ...s, perDay: Math.round(perDay), days: Math.floor((s.drive * 1000) / perDay) };
});

const FACTORS = [
  {
    title: "Bitrate, not resolution, is what fills the drive",
    body: "Resolution sets the ceiling; bitrate is what the camera actually writes. Two 4K cameras can differ by half depending on compression and settings. The recorder shows each camera's bitrate, and that's the number to plan from.",
  },
  {
    title: "Compression",
    body: "H.265 typically produces noticeably smaller files than older H.264 at similar quality. Most current IP cameras and NVRs support it, but older recorders may not.",
  },
  {
    title: "Scene activity",
    body: "A camera watching a busy street, moving palm fronds, or a pool with rippling water produces more data than one watching a still hallway. Wind and rain make it worse.",
  },
  {
    title: "Continuous vs. event recording",
    body: "Recording only on motion can stretch storage several times over. The trade-off is that you lose the moments before and between events, which is sometimes exactly what an investigation needs.",
  },
  {
    title: "Frame rate",
    body: "Security video rarely needs 30 frames per second. Dropping to 15 or so roughly halves the data on many cameras with little loss of usefulness for identification.",
  },
];

const FAQS = [
  {
    q: "How long do security cameras keep footage?",
    a: "It depends entirely on the recorder's storage and how the cameras are configured. A typical home NVR recording eight cameras continuously keeps somewhere from one to several weeks before it starts overwriting the oldest footage. Recording on motion only, or adding storage, extends that.",
  },
  {
    q: "How much footage should a home security system keep?",
    a: "Two weeks is a practical minimum for most homes, and thirty days is a comfortable target. Many incidents — a package theft, a damaged car, an insurance claim — aren't noticed or reported for several days, and footage that overwrote itself on day five is no help.",
  },
  {
    q: "How do I calculate security camera storage?",
    a: "Multiply each camera's bitrate in megabits per second by 10.8 to get gigabytes per day, add the cameras together, and divide the drive size by that total. For example, eight cameras at 4 Mbps write about 346 GB a day, so a 4 TB drive holds roughly eleven days of continuous recording.",
  },
  {
    q: "Is cloud storage better than an NVR for security cameras?",
    a: "Cloud storage survives the recorder being stolen or destroyed, but it usually costs a monthly fee per camera and depends on your internet upload speed. A local NVR has no per-camera fee and records through an internet outage. Hiding the NVR or putting it in a locked cabinet addresses most of its risk.",
  },
  {
    q: "Do businesses need to keep camera footage longer?",
    a: "Often. Insurance carriers, landlords, franchise agreements, and some industries set their own retention requirements. Check those before sizing a commercial recorder rather than after.",
  },
];

export default function FootageRetentionPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "How to estimate security camera recorder storage and retention from bitrate, with worked examples and guidance on continuous versus motion recording.",
            published: R.published,
            modified: R.modified,
            image: "/images/camera-dome-soffit-install.jpg",
            about: "Security camera footage retention and storage",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Camera Footage Retention", path: PATH },
            ]}
          />
        }
        title="How Long Do Security Cameras Keep Footage?"
        subtitle="Most people find out how much their recorder holds on the day they need footage from last week. Here's how to work it out before then."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          A camera recorder (an NVR, for IP cameras) writes video to a hard drive until the drive is
          full, then overwrites the oldest footage. How many days that takes is retention, and it is
          set by three numbers: how many cameras, how much data each one writes, and how big the
          drive is.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          The rule of thumb that makes the math easy: one megabit per second, sustained for a day,
          is about 10.8 gigabytes.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-4">
            Worked Examples
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed mb-10">
            Continuous recording, before any motion-only savings. Real bitrates vary by camera and
            scene; these show the order of magnitude.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left font-inter text-sm">
              <thead className="bg-bg-card">
                <tr>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Setup</th>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Per day</th>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Drive</th>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Days kept</th>
                </tr>
              </thead>
              <tbody>
                {SCENARIOS.map((s) => (
                  <tr key={`${s.label}-${s.drive}`} className="border-t border-border">
                    <th scope="row" className="px-5 py-4 text-text-primary font-medium align-top">{s.label}</th>
                    <td className="px-5 py-4 text-text-secondary align-top">≈ {s.perDay} GB</td>
                    <td className="px-5 py-4 text-text-secondary align-top">{s.drive} TB</td>
                    <td className="px-5 py-4 text-text-secondary align-top">≈ {s.days} days</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
          What Changes the Number
        </h2>
        <div className="space-y-8">
          {FACTORS.map((f) => (
            <div key={f.title}>
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-2">{f.title}</h3>
              <p className="font-inter text-text-secondary leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mt-16 mb-5">
          How Much Is Enough
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed mb-5">
          Plan backward from how incidents actually get noticed. A package goes missing and nobody
          checks for two days. A neighbor asks about a car that drove through the street last
          weekend. An insurance adjuster asks for footage a week after a claim. For most homes,
          two weeks is a practical minimum and thirty days is comfortable. For businesses, check
          what your insurer or landlord requires first.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          Retention is one input in a camera design, alongside how many cameras and where. Our{" "}
          <Link href="/resources/how-many-security-cameras" className="text-accent hover:underline">
            guide to camera count
          </Link>{" "}
          covers placement, and our{" "}
          <Link href="/services/camera-systems" className="text-accent hover:underline">
            camera systems
          </Link>{" "}
          page covers what we install.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Camera Storage Questions" />
        </div>
      </section>

      <RelatedResources slugs={["how-many-security-cameras", "hurricane-season-security", "diy-vs-professional-security"]} />

      <CTABanner
        headline="Need More Days on Your Recorder?"
        body="We'll check your cameras' actual bitrates, tune the settings, and size storage to the retention you need."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
