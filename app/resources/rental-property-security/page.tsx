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

const SLUG = "rental-property-security";
const PATH = `/resources/${SLUG}`;
const R = resourceBySlug(SLUG);

export const metadata = pageMetadata({
  title: "Security Systems for Rental Properties in Florida",
  description:
    "Alarm and camera systems for Florida landlords and vacation rental owners: user codes between tenants, tenant privacy, vacancy monitoring, and who pays.",
  path: PATH,
  type: "article",
});

const SECTIONS = [
  {
    title: "Change user codes, not locks",
    body: "Every tenant or guest gets their own alarm code, issued and deleted when they move in and out. On most current panels that can be done remotely from an app or by calling the monitoring company — no service visit, and the old tenant's code stops working the day the lease ends.",
  },
  {
    title: "Cameras on the outside, not the inside",
    body: "Cover entrances, the driveway, parking, and shared exterior areas. Don't put cameras inside an occupied unit. Beyond the obvious privacy problem, the major short-term rental platforms prohibit indoor cameras, and it's the fastest way to lose a good tenant.",
  },
  {
    title: "Decide who the system reports to",
    body: "On a long-term rental, the tenant usually holds the monitoring account and the call list, because they're the one at home. On a vacation rental or a unit between tenants, the owner or property manager does. Write it into the lease so nobody is surprised when the alarm company calls.",
  },
  {
    title: "Watch the unit while it's empty",
    body: "Vacancy is when rentals get damaged — burglary, squatting, and especially water. Water sensors under sinks and at the A/C drain pan, a high-temperature sensor for A/C failure, and power-loss reporting catch the problems that otherwise wait until the next showing.",
  },
  {
    title: "Arming reports for short-term rentals",
    body: "The panel can report when it was armed and disarmed, and by which code. That's a simple way to confirm a guest locked up at checkout or that the cleaner arrived when scheduled.",
  },
  {
    title: "Plan for the property manager",
    body: "If a management company handles the unit, give them their own code and a place on the call list. A manager with a key twenty minutes away is a better first call than an owner in another state.",
  },
];

const FAQS = [
  {
    q: "Should a landlord install a security system in a rental property?",
    a: "For many rentals it's worth it. A monitored system protects the property while it's vacant, can be offered to tenants as an amenity, and lets the landlord change access between tenants by deleting a code rather than rekeying. Water and temperature sensors often pay for themselves the first time they catch a leak in an empty unit.",
  },
  {
    q: "Can a landlord put security cameras in a rental?",
    a: "Exterior cameras covering entrances, parking, and common areas are common. Cameras inside an occupied unit are a serious privacy problem and are prohibited by the major short-term rental platforms. Florida law also requires a landlord to give tenants reasonable notice before entering a unit, which an indoor camera would undermine. When in doubt, ask an attorney before installing anything inside.",
  },
  {
    q: "Who pays for alarm monitoring in a rental?",
    a: "It varies. On long-term rentals, tenants often hold and pay for the monitoring account, sometimes on equipment the landlord owns. On vacation rentals and between tenants, the owner usually pays. Putting the arrangement in the lease avoids disputes.",
  },
  {
    q: "How do I give tenants access to the alarm without giving them my code?",
    a: "Create a separate user code for each tenant or guest. Most panels support many user codes, each of which can be added or deleted without affecting the master code.",
  },
];

export default function RentalPropertySecurityPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            path: PATH,
            headline: R.title,
            description:
              "A guide to alarm and camera systems for Florida rental properties, covering user codes, tenant privacy, vacancy monitoring, and account responsibility.",
            published: R.published,
            modified: R.modified,
            image: "/images/13-residential-home-exterior.webp",
            about: "Security systems for rental properties",
          }),
          faqSchema(FAQS, PATH),
        ]}
      />
      <HeroBanner
        breadcrumbs={
          <Breadcrumbs
            trail={[
              { name: "Resources", path: "/resources" },
              { name: "Rental Property Security", path: PATH },
            ]}
          />
        }
        title="Security Systems for Rental Properties"
        subtitle="A rental needs a system the owner can manage from somewhere else, that respects the tenant, and that keeps watching when the unit is empty."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ArticleByline modified={R.modified} />
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Rentals are a big part of the housing around Tampa Bay — student rentals near USF in{" "}
          <Link href="/service-areas/temple-terrace" className="text-accent hover:underline">
            Temple Terrace
          </Link>
          , vacation rentals on{" "}
          <Link href="/service-areas/clearwater" className="text-accent hover:underline">
            Clearwater Beach
          </Link>
          , and single-family rentals in every subdivision in between. The security needs are
          different from an owner-occupied home in a few specific ways.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          The person who lives there changes. The person who owns it often isn&apos;t nearby. And
          for weeks at a time, nobody may be there at all.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-12">
            Six Rules for Rental Security
          </h2>
          <ol className="space-y-10">
            {SECTIONS.map((s, i) => (
              <li key={s.title} className="flex items-start gap-5">
                <span className="text-accent font-montserrat font-bold text-sm w-6 flex-shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-montserrat font-bold text-text-primary text-lg mb-2">{s.title}</h3>
                  <p className="font-inter text-text-secondary leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-5">
          Inheriting a System With the Property?
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed">
          Investors often buy a house with an alarm panel already on the wall and an account
          belonging to the previous owner. That panel can usually be taken over and reprogrammed
          with fresh codes rather than replaced — see our guide to{" "}
          <Link href="/resources/switching-alarm-companies" className="text-accent hover:underline">
            switching alarm companies
          </Link>{" "}
          and our{" "}
          <Link href="/services/alarm-monitoring-takeover" className="text-accent hover:underline">
            monitoring takeover
          </Link>{" "}
          service.
        </p>
      </section>

      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FaqAccordion faqs={FAQS} heading="Rental Property Questions" />
        </div>
      </section>

      <RelatedResources slugs={["vacant-home-security", "switching-alarm-companies", "doorbell-camera-vs-security-system"]} />

      <CTABanner
        headline="Securing a Rental?"
        body="We'll set up a system you can manage remotely, with codes per tenant and sensors that watch the unit while it's empty."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
