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

const SLUG = "wired-vs-wireless-alarm-systems";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Wired vs. Wireless Alarm Systems for Florida Homes",
  description:
    "Hardwired or wireless alarm sensors? Why Florida's concrete block construction changes the answer, what each costs over time, and when a hybrid system makes sense.",
  path: PATH,
  type: "article",
});

const ROWS = [
  { factor: "Install in an existing block home", wired: "Difficult — exterior walls are solid masonry", wireless: "Straightforward, little or no wall damage" },
  { factor: "Install in new construction", wired: "Cheapest and cleanest before drywall", wireless: "Works, but gives up the pre-wire advantage" },
  { factor: "Batteries", wired: "None at the sensor", wireless: "Each sensor, typically every few years" },
  { factor: "Reliability", wired: "Excellent; nothing to drift or drain", wireless: "Excellent with modern supervised, encrypted sensors" },
  { factor: "Adding sensors later", wired: "Needs a cable path to each one", wireless: "Add almost anywhere in minutes" },
  { factor: "Moving out", wired: "Stays with the house", wireless: "Sensors can come with you, panel permitting" },
];

const FAQS = [
  {
    q: "Is a wired or wireless alarm system better?",
    a: "Neither is better in general — they suit different houses. Hardwired sensors are the best choice when walls are open, as in new construction or a remodel, because they need no batteries and cost little to run before drywall. Wireless sensors are usually the better choice for retrofitting an existing Florida home, particularly concrete block construction where running new wire through exterior walls is difficult.",
  },
  {
    q: "Are wireless alarm sensors reliable?",
    a: "Modern ones are. Current wireless sensors from mainstream manufacturers are supervised — the panel knows if one stops checking in — and many use encrypted signals. The main maintenance item is battery replacement, which the panel reports in advance. Older wireless sensors from the 1990s and early 2000s are less robust and worth evaluating individually.",
  },
  {
    q: "Can I add wireless sensors to my existing hardwired alarm?",
    a: "Usually, yes. Most industry-standard hardwired panels accept a wireless receiver, so existing wired zones keep working and new wireless sensors cover openings that were never wired — a converted garage, a new sliding door, a detached shed. This hybrid approach is one of the most common upgrades we install.",
  },
  {
    q: "Does 'wireless alarm' mean it doesn't need a phone line?",
    a: "Not necessarily. 'Wireless' can describe the sensors (how they talk to the panel) or the communicator (how the panel talks to the monitoring center). A system can have hardwired sensors and a wireless cellular communicator, or wireless sensors and a landline communicator. For monitoring, the communicator is what matters most — cellular is the standard to look for.",
  },
];

export default function WiredVsWirelessPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "A comparison of hardwired and wireless alarm sensors for Florida homes, including concrete block construction, new builds, and hybrid systems.",
            published: R.published,
            modified: R.modified,
            image: "/images/new-construction-framing-prewire.jpg",
            about: "Wired and wireless alarm systems",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Wired vs. Wireless Alarms", path: PATH },
            ]}
          />
        }
        title="Wired vs. Wireless Alarm Systems"
        subtitle="The right answer depends less on the technology than on the walls. In Florida, that usually means concrete block."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Most of the houses in Tampa Bay are concrete block and stucco. The exterior walls are
          solid masonry with a thin furring layer inside, which is excellent in a hurricane and
          awkward for anyone trying to fish a new cable to a window. That one fact settles the
          wired-versus-wireless question for most existing homes here.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          The other case — new construction — settles it the other way. With the walls open, a
          cable to every opening costs very little and never needs a battery.
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
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Hardwired</th>
                  <th scope="col" className="px-5 py-4 text-text-primary font-semibold">Wireless</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.factor} className="border-t border-border">
                    <th scope="row" className="px-5 py-4 text-text-primary font-medium align-top">{row.factor}</th>
                    <td className="px-5 py-4 text-text-secondary align-top">{row.wired}</td>
                    <td className="px-5 py-4 text-text-secondary align-top">{row.wireless}</td>
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
            When Hardwired Is the Right Call
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            New construction and major remodels. If the drywall isn&apos;t up yet, run wire to every
            exterior door and window, plus keypad, motion, and camera locations — it is the
            cheapest moment the house will ever offer. Our{" "}
            <Link href="/resources/builder-prewire-guide" className="text-accent hover:underline">
              builder pre-wire guide
            </Link>{" "}
            covers what to rough in and when, and we{" "}
            <Link href="/services/new-construction" className="text-accent hover:underline">
              pre-wire new homes
            </Link>{" "}
            across Hillsborough and Pasco.
          </p>
        </div>
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            When Wireless Is the Right Call
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            Most existing homes with no alarm wiring, and especially block homes from the 1960s
            through the 1990s — the bulk of the housing in places like{" "}
            <Link href="/service-areas/town-n-country" className="text-accent hover:underline">
              Town &apos;n&apos; Country
            </Link>{" "}
            and{" "}
            <Link href="/service-areas/carrollwood" className="text-accent hover:underline">
              Carrollwood
            </Link>
            . Wireless sensors install with little or no wall damage, and modern ones are
            supervised so the panel knows if one goes quiet.
          </p>
        </div>
        <div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
            When You Want Both
          </h2>
          <p className="font-inter text-text-secondary leading-relaxed">
            A house that already has wired contacts on the original openings but has since gained a
            new slider, an enclosed lanai, or a converted garage. Keep the wired zones, add a
            wireless receiver to the panel, and cover the new openings wirelessly. It is frequently
            the least expensive route to complete coverage — and it pairs naturally with a{" "}
            <Link href="/services/alarm-monitoring-takeover" className="text-accent hover:underline">
              monitoring takeover
            </Link>{" "}
            if the system came with the house.
          </p>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Wired & Wireless Questions" />
        </div>
      </section>

      <RelatedResources slugs={["security-system-cost", "landline-alarm-upgrade", "builder-prewire-guide"]} />

      <CTABanner
        headline="Not Sure Which Your House Needs?"
        body="We'll look at the walls, the existing wiring, and the openings, and recommend the cheapest route to full coverage."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
