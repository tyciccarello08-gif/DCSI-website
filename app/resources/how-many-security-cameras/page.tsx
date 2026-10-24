import Image from "next/image";
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

const SLUG = "how-many-security-cameras";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "How Many Security Cameras Does a House Need?",
  description:
    "Count cameras by approach, not by wall. Typical counts for Florida homes, plus PoE vs. Wi-Fi, resolution, night vision, and how many days of recording to keep.",
  path: PATH,
  type: "article",
});

const APPROACHES = [
  { spot: "Front door & porch", why: "Where packages, visitors, and most daytime attempts arrive. Mount for faces at about head height range, not the top of a hat." },
  { spot: "Driveway & garage", why: "Vehicles, plates, and the garage door that gets left open. Often one camera covers both on a standard lot." },
  { spot: "Each side gate", why: "The route into the back yard. On narrow Florida lots, a single camera can usually cover a side yard end to end." },
  { spot: "Rear yard, lanai & pool", why: "The approach nobody sees from the street — and the one that matters most on lakefront, golf-course, and conservation lots." },
  { spot: "Detached buildings", why: "Sheds, workshops, barns, and docks on larger properties, each of which may need its own camera." },
];

const TYPICAL = [
  { home: "Townhouse or condo", count: "2–3", note: "Entry, rear patio or garage, and possibly a shared approach." },
  { home: "Standard suburban lot", count: "4–6", note: "Front, driveway, both side gates, and the back of the house." },
  { home: "Large lot or lakefront", count: "6–8", note: "Adds wider rear coverage, a dock or shoreline, and the far side of a pool." },
  { home: "Acreage", count: "8+", note: "Gate, long drive, outbuildings — and long cable runs between them." },
];

const FAQS = [
  {
    q: "How many security cameras do I need for my house?",
    a: "Count the ways someone can approach the house, not the walls. Most suburban Florida homes need four to six: front door, driveway, each side gate, and the rear of the house or lanai. Townhouses often need two or three, and acreage properties with gates and outbuildings can need eight or more.",
  },
  {
    q: "Are wired (PoE) or Wi-Fi security cameras better?",
    a: "Wired PoE cameras are more reliable: one cable carries power and video, nothing needs charging, and recording happens on a local recorder that keeps working if the internet goes down. Wi-Fi and battery cameras are easier to put up but depend on signal strength, battery life, and often a cloud subscription. For permanent coverage of a home, PoE is the standard we recommend.",
  },
  {
    q: "How many days of security camera footage should I keep?",
    a: "At least as long as it takes you to notice a problem — for most homes that means two to four weeks, and longer for a seasonal home or a business. Storage is sized from the number of cameras, the resolution, and whether they record continuously or only on motion.",
  },
  {
    q: "What resolution security camera do I need?",
    a: "Resolution matters less than how many pixels land on what you want to identify. A 4MP camera aimed correctly at a front door identifies faces; an 8MP camera covering an entire back yard may not. Use wider cameras for overview and tighter ones for entry points, and check night performance, since that is when most footage gets reviewed.",
  },
  {
    q: "Why do my security cameras show spider webs at night?",
    a: "Infrared night illumination on the camera attracts insects, and insects attract spiders. In Florida this is constant. Cameras with separate or external IR, mounting under a soffit rather than on an open wall, and occasional cleaning help — and on a motion-recording system, webs can trigger endless false recordings until they are cleared.",
  },
];

export default function HowManyCamerasPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "How to count security cameras by approach, typical camera counts for Florida homes, and how PoE, resolution, and retention affect the system.",
            published: R.published,
            modified: R.modified,
            image: "/images/camera-dome-soffit-install.jpg",
            about: "Home security camera planning",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "How Many Security Cameras", path: PATH },
            ]}
          />
        }
        title="How Many Security Cameras Does a House Need?"
        subtitle="Fewer than most kits sell you, placed better than most kits get placed. Count the approaches, then cover each one well."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          The most common camera mistake isn&apos;t too few cameras. It is cameras pointed at
          walls, roofs, and the neighbor&apos;s house while the side gate goes uncovered. Eight
          cameras placed for convenience record less useful footage than four placed for the
          approaches someone would actually use.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          So start from the other end: walk the property and list every way a person could reach a
          door or window. Each of those is a camera, and most homes have fewer than you&apos;d think.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
            The Approaches to Cover
          </h2>
          <div className="space-y-4">
            {APPROACHES.map((a) => (
              <div key={a.spot} className="bg-bg-card border border-border rounded-xl p-6 sm:flex sm:gap-8">
                <h3 className="font-montserrat font-bold text-text-primary text-base sm:w-56 flex-shrink-0 mb-2 sm:mb-0">
                  {a.spot}
                </h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{a.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
          Typical Camera Counts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {TYPICAL.map((t) => (
            <div key={t.home} className="border border-border rounded-xl p-6">
              <div className="font-montserrat font-extrabold text-accent text-3xl mb-2">{t.count}</div>
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-2">{t.home}</h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{t.note}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/camera-dome-soffit-install.jpg"
              alt="Dome security camera mounted under a soffit, sheltered from rain and sun"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-text-primary text-xl mb-4">
              Placement matters more than count
            </h3>
            <p className="font-inter text-text-secondary leading-relaxed mb-4">
              Mount high enough to be out of easy reach — eight to ten feet is typical — but not so
              high that every face becomes the top of a head. Mounting under a soffit keeps cameras
              out of the afternoon rain and direct sun, both of which shorten their life in Florida.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed">
              On tightly spaced lots like{" "}
              <Link href="/service-areas/westchase" className="text-accent hover:underline">
                Westchase
              </Link>
              , aim matters for privacy too: a wide-angle camera pointed carelessly looks straight
              into a neighbor&apos;s window.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
            Wired PoE vs. Wi-Fi Cameras
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed mb-5">
            A PoE (power over Ethernet) camera gets power and data over one cable from a local
            recorder. Nothing to charge, no Wi-Fi signal to lose, and the recorder keeps recording
            when the internet drops — which, with a battery backup on the recorder, includes most
            storms.
          </p>
          <p className="font-inter text-text-secondary leading-relaxed">
            Wi-Fi and battery cameras trade that reliability for an easier install. They are a
            reasonable choice for a renter or a single doorbell, and a poor one for a whole-property
            system you expect to rely on for years. The{" "}
            <Link href="/services/camera-systems" className="text-accent hover:underline">
              camera systems we install
            </Link>{" "}
            are wired to a local recorder for exactly that reason.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FaqAccordion faqs={FAQS} heading="Security Camera Questions" />
      </section>

      <RelatedResources slugs={["security-system-cost", "hurricane-season-security", "wired-vs-wireless-alarm-systems"]} />

      <CTABanner
        headline="We'll Count Them With You"
        body="A free walk of the property, a camera plan drawn around the approaches, and a fixed written quote."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
