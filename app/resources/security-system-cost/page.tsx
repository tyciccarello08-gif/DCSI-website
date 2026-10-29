import Link from "next/link";
import { AlertTriangle, CheckCircle2, HelpCircle } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedResources from "@/components/RelatedResources";
import { CONTACT, HAS_PRICING, PRICING, resourceBySlug } from "@/lib/constants";
import { ORG_ID, abs, faqSchema, pageMetadata } from "@/lib/seo";

const PATH = "/resources/security-system-cost";
const R = resourceBySlug("security-system-cost");

export const metadata = pageMetadata({
  title: "How Much Does a Home Security System Cost in Tampa?",
  description:
    "What drives the price of a home security system and alarm monitoring in Tampa Bay — equipment, wiring, and the contract terms that cost the most.",
  path: PATH,
  type: "article",
});

const DRIVERS = [
  {
    title: "Number of openings, not square footage",
    body: "Pricing tracks how many doors and windows need a sensor, not the size of the house. A 3,000 sq ft home with a compact footprint and eight ground-floor openings costs less to protect than a sprawling 2,200 sq ft ranch with fourteen. Count your ground-floor doors and accessible windows and you have the main variable.",
  },
  {
    title: "Wired vs. wireless",
    body: "Wireless sensors install fast and cost less in labor, but each one has a battery to replace every few years. Hardwired sensors cost more up front in a finished home because walls have to be fished, and essentially nothing after. In new construction, hardwired is barely more expensive because the walls are already open.",
  },
  {
    title: "Whether the walls are open",
    body: "This is the biggest single swing in the whole quote. Running cable during construction is a fraction of what the same run costs after drywall. If you are building or renovating, the pre-wire decision is worth more than any equipment choice you will make.",
  },
  {
    title: "Cameras and where they go",
    body: "Camera cost scales with count, resolution, and how hard each location is to reach. A camera under an accessible soffit is straightforward. One at the end of a 200-foot driveway needs trenched conduit and possibly its own power, and costs several times as much. Florida block construction also makes exterior penetrations slower than frame construction.",
  },
  {
    title: "Monitoring and how it communicates",
    body: "Monthly monitoring is the recurring cost. Cellular communication costs slightly more than internet-only and is far more reliable — a cut phone line or a dropped internet connection does not take the system offline. This is not the place to save five dollars a month.",
  },
  {
    title: "Who actually answers the alarm",
    body: "Many companies quoting you in Tampa are dealers who sell the install and hand monitoring to a national wholesale center. That is not inherently bad, but it is a different product from in-house monitoring, and it is worth knowing which one you are buying before comparing two numbers side by side.",
  },
];

const WATCH_OUT = [
  "Long-term contracts. Three- and five-year monitoring agreements with early-termination fees are common and are where the real money is made. Ask the term length before you ask the monthly price.",
  "Free equipment offers. Equipment given away is financed inside the monitoring rate. Over a five-year agreement you will usually pay more than buying it outright.",
  "Quotes given over the phone. Nobody can price a system responsibly without seeing the property. A phone quote is either padded to be safe or a number that will change on install day.",
  "Proprietary equipment. Some systems can only ever be monitored by the company that sold them. If you leave, the hardware is worthless. Ask whether the panel is industry-standard.",
  "Permit costs left out. Many Florida municipalities require an alarm permit and charge for false-alarm responses. A complete quote should mention this.",
];

const FAQS = [
  {
    q: "How much does a home security system cost in Tampa?",
    a: "The install is driven mainly by how many doors and windows need covering, whether the system is wired or wireless, and whether cameras are included. Monitoring is a separate monthly cost. Because the same house can vary by thousands of dollars depending on wiring access and camera placement, DCSI quotes on site rather than over the phone — the consultation is free and the resulting number is fixed and in writing.",
  },
  {
    q: "How much is alarm monitoring per month?",
    a: "Monitoring is billed monthly and varies with how the system communicates (cellular is more reliable and slightly more than internet-only) and whether camera storage is included. The more important question than price is the contract term: a low monthly rate locked into a five-year agreement with an early-termination fee usually costs more overall than a slightly higher rate you can leave.",
  },
  {
    q: "Is a security system cheaper in new construction?",
    a: "Substantially. Running cable before drywall costs a fraction of fishing the same runs through finished walls, and it lets you rough in for cameras, audio, and data at the same time. If you are building in Wesley Chapel, Land O' Lakes, or anywhere else in our area, pre-wire is the single cheapest decision available to you.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "Not with DCSI. Long-term monitoring agreements with early-termination penalties are standard practice in this industry and are worth asking about with any company you get a quote from. Ask the term length, the early-termination fee, and whether the equipment stays yours if you leave.",
  },
  {
    q: "Can I use equipment I already have?",
    a: "Often, yes. Many older homes in Carrollwood, Brandon, and New Tampa still have a hardwired panel and sensors from a company that no longer services them. In a lot of those cases the existing wiring and contacts are reusable and only the panel and communicator need replacing, which costs considerably less than a full new system. We check before quoting a replacement.",
  },
  {
    q: "Are DIY systems cheaper?",
    a: "Up front, usually. Whether they are cheaper overall depends on the property. On a small home with good Wi-Fi and simple coverage needs, a DIY kit is a reasonable choice and we will tell you so. On acreage in Odessa or Keystone, with outbuildings, a gate, and long camera runs, DIY equipment cannot do the job and the money spent trying is wasted.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${abs(PATH)}#article`,
  headline: "How Much Does a Home Security System Cost in Tampa?",
  description:
    "What drives the price of a home security system and alarm monitoring in Tampa Bay, and the contract terms that cost buyers the most.",
  url: abs(PATH),
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  mainEntityOfPage: { "@type": "WebPage", "@id": abs(PATH) },
  image: abs("/images/05-dcsi-honeywell-touchscreen-panel.webp"),
  datePublished: R.published,
  dateModified: R.modified,
  inLanguage: "en-US",
  about: { "@type": "Thing", name: "Home security system pricing" },
};

export default function SecuritySystemCostPage() {
  return (
    <>
      <JsonLd data={[articleSchema, faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Resources", path: "/resources" }, { name: "Security System Cost", path: PATH }]} />}
        title="What Does a Security System Actually Cost?"
        subtitle="A straight answer about what moves the price in Tampa Bay — and about the contract terms that end up costing people far more than the equipment ever did."
        ctaText="Get a Free On-Site Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Why we don't publish a single number */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-bg-card border border-border rounded-xl p-8">
          <div className="flex items-start gap-4">
            <HelpCircle size={22} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-montserrat font-bold text-xl text-text-primary mb-3">
                Why nobody honest gives you one number
              </h2>
              <p className="font-inter text-text-secondary leading-relaxed">
                Two houses of identical size on the same street can differ by thousands of dollars
                — one has an accessible attic and eight openings, the other is two-story block with
                fourteen openings and a camera at the end of a long driveway. Anyone quoting a
                security system sight-unseen is either padding the number to be safe or planning to
                revise it on install day. What follows is what actually moves the price, so you can
                read any quote you receive — ours or a competitor&apos;s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price table — only renders once real ranges are filled in */}
      {HAS_PRICING && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-8">
            Typical Ranges
          </h2>
          <div className="overflow-x-auto border border-border rounded-xl">
            <table className="w-full text-left">
              <thead className="bg-bg-secondary">
                <tr>
                  <th className="font-montserrat text-xs uppercase tracking-wider text-text-secondary px-6 py-4">
                    What
                  </th>
                  <th className="font-montserrat text-xs uppercase tracking-wider text-text-secondary px-6 py-4">
                    Typical range
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING.filter((p) => p.low !== null && p.high !== null).map((p) => (
                  <tr key={p.item} className="border-t border-border align-top">
                    <td className="px-6 py-5">
                      <div className="font-inter font-semibold text-text-primary text-sm">{p.item}</div>
                      <div className="font-inter text-text-secondary text-xs mt-1">{p.note}</div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className="font-montserrat font-bold text-accent">
                        ${p.low?.toLocaleString()}–${p.high?.toLocaleString()}
                      </span>
                      <div className="font-inter text-text-secondary text-xs mt-1">{p.unit}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-inter text-text-secondary text-xs mt-4">
            Ranges are typical for Hillsborough and Pasco County properties. Your quote is fixed and
            in writing after an on-site walkthrough.
          </p>
        </section>
      )}

      {/* Cost drivers */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">The Variables</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            Six Things That Move the Price
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DRIVERS.map((d, i) => (
              <div key={d.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent font-montserrat font-bold text-xs">0{i + 1}</span>
                  <h3 className="font-montserrat font-bold text-text-primary">{d.title}</h3>
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to watch out for */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle size={16} className="text-accent" />
          <span className="text-accent text-xs font-montserrat uppercase tracking-widest">
            Read the Fine Print
          </span>
        </div>
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-8">
          Five Things That Cost More Than They Look
        </h2>
        <ul className="space-y-4">
          {WATCH_OUT.map((w) => (
            <li key={w} className="flex items-start gap-3 bg-bg-card border border-border rounded-xl p-5">
              <AlertTriangle size={16} className="text-accent flex-shrink-0 mt-0.5" />
              <span className="font-inter text-text-secondary text-sm leading-relaxed">{w}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How to compare quotes */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-8">
            Questions to Ask Every Company You Call
          </h2>
          <ul className="space-y-4">
            {[
              "How long is the monitoring agreement, and what is the early-termination fee?",
              "Do you monitor in house, or is it contracted to a third-party center?",
              "Is the equipment mine outright, and can another company monitor it if I leave?",
              "Does the system communicate over cellular, or only over internet?",
              "Is the quote fixed, or does it change if the install takes longer than expected?",
              "What is covered by warranty, for how long, and who comes out for a service call?",
            ].map((q) => (
              <li key={q} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="font-inter text-text-secondary text-sm leading-relaxed">{q}</span>
              </li>
            ))}
          </ul>
          <p className="font-inter text-text-secondary text-sm leading-relaxed mt-8">
            For more on the monitoring side specifically, see{" "}
            <Link href="/resources/choosing-a-monitoring-company" className="text-accent hover:underline">
              how to choose an alarm monitoring company
            </Link>
            . If you&apos;re building, the{" "}
            <Link href="/resources/builder-prewire-guide" className="text-accent hover:underline">
              pre-wire guide
            </Link>{" "}
            covers where the real savings are.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
          Cost Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group bg-bg-card border border-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <h3 className="font-montserrat font-bold text-text-primary text-base">{faq.q}</h3>
                <span className="text-accent font-montserrat text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <RelatedResources slugs={["choosing-a-monitoring-company", "diy-vs-professional-security", "how-many-security-cameras"]} />

      <CTABanner
        headline="Get a Real Number, Free"
        body="We walk the property, count the openings, look at the wiring access, and give you a fixed written quote. No obligation and no pressure."
        ctaText="Book a Free Consultation"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
