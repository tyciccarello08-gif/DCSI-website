import Link from "next/link";
import Image from "next/image";
import { ClipboardList, Users, Scale, Wrench, FileText, ShieldCheck } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { ORG_ID, abs, faqSchema, pageMetadata } from "@/lib/seo";

const PATH = "/resources/hoa-board-security-guide";

export const metadata = pageMetadata({
  title: "HOA & CDD Board Guide to Community Security",
  description:
    "A guide for HOA and CDD boards: scoping gate access and camera projects, writing an RFP, budgeting reserves, and the liability questions to ask.",
  path: PATH,
  type: "article",
});

const STEPS = [
  {
    icon: ClipboardList,
    title: "1. Define the problem before the product",
    body: "Boards frequently start at 'we need cameras' and end up with coverage nobody uses. Start with incidents: what has actually happened, where, and at what time. Package theft at the mailbox kiosk, after-hours pool access, vandalism at the playground, and unauthorized contractor entry are four different problems with four different solutions. Write the incident list first — it becomes the scope, and later it becomes the justification when a resident asks why the money was spent.",
  },
  {
    icon: Scale,
    title: "2. Settle the liability and privacy questions early",
    body: "Cameras in common areas create records, and records create obligations. Decide up front who may view footage, how long it is retained, what the process is for a resident or law enforcement request, and who is accountable for the answer. Aim cameras at association property, not into private homes or yards. Have counsel review the policy before installation, not after the first request arrives.",
  },
  {
    icon: Users,
    title: "3. Decide who administers access",
    body: "Gate access systems fail on administration, not hardware. Someone has to add residents, revoke codes when people move, issue vendor and contractor access, and pull entry logs. If that person is a volunteer board member, choose a system a non-technical person can run from a browser. If it is a management company, confirm they will actually do it and what it costs.",
  },
  {
    icon: Wrench,
    title: "4. Budget the ten-year cost, not the install",
    body: "The purchase price is the smaller number. Over ten years a community system also incurs monitoring, cellular or internet service, camera cleaning and re-aiming, recorder replacement, gate operator maintenance, and eventual technology refresh. Boards that budget only the install end up funding replacements through a special assessment. Ask any vendor for a written ten-year cost of ownership and put it in the reserve study.",
  },
  {
    icon: FileText,
    title: "5. Write an RFP that produces comparable bids",
    body: "Three bids for undefined work are not comparable. Specify camera locations and what each must be able to see, retention period in days, resolution, who holds the equipment warranty and for how long, response time for service calls, and who administers access. When the scope is specific, price differences become meaningful instead of guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "6. Verify licensing and insurance before the vote",
    body: "Confirm the contractor holds a current Florida alarm system contractor license, carries general liability and workers' compensation, and can provide certificates naming the association. For CDDs, confirm the procurement process meets your district's statutory requirements — that is a question for district counsel, and getting it wrong can invalidate the award.",
  },
];

const SCOPE_ITEMS = [
  "Entry and exit gates — operators, keypads, fobs or app credentials, and vehicle detection",
  "Mailbox kiosks and package areas, which generate the most resident complaints",
  "Amenity centers: pools, clubhouses, fitness rooms, and after-hours access control",
  "Playgrounds, dog parks, and courts — usually about vandalism and after-hours use",
  "Perimeter and fence lines, particularly where a community backs onto open land",
  "Guest and vendor management: how a contractor gets in on a Tuesday without a board call",
];

const FAQS = [
  {
    q: "How does an HOA pay for a community camera system?",
    a: "Most boards fund it through the operating budget if it is modest, through reserves if it is a capital replacement, or through a special assessment if neither is adequate. Because camera and gate systems have a finite service life, the more sustainable approach is to add them to the reserve study as a funded component, so replacement in year eight or ten does not require an assessment. Ask your reserve specialist to include it at the next study update.",
  },
  {
    q: "Can an HOA legally install cameras in common areas in Florida?",
    a: "Generally yes, in common areas the association controls, and it is widespread practice in Florida communities. The complications are policy rather than permission: retention periods, who may view footage, how requests from residents and law enforcement are handled, and making sure cameras are aimed at association property rather than into private homes. This is a question for association counsel, and the policy should exist before the cameras do.",
  },
  {
    q: "What is the difference between an HOA and a CDD for a security project?",
    a: "Practically, the difference is procurement and governance. A CDD is a special-purpose unit of local government in Florida, and its purchasing is subject to statutory requirements an HOA is not bound by. CDDs also frequently own larger infrastructure — entry features, extensive common grounds, sometimes amenity complexes. Scoping is similar; the process for awarding the contract is not, and district counsel should confirm it.",
  },
  {
    q: "How long should community camera footage be retained?",
    a: "Thirty days is a common target and is usually enough for an incident to be reported and pulled. Longer retention means more recorder storage and cost. The important part is that the board picks a period deliberately, documents it, and applies it consistently — inconsistent retention is harder to defend than a short one.",
  },
  {
    q: "Do we need monitoring, or just recording?",
    a: "They solve different problems. Recording gives you evidence after the fact and is what most communities actually need for package theft and vandalism. Monitoring means someone responds while it is happening, and matters most for amenity buildings with alarm systems and for after-hours access. Many communities record common areas and monitor only the clubhouse and equipment rooms.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${abs(PATH)}#article`,
  headline: "HOA & CDD Board Guide to Community Security Systems",
  description:
    "How HOA and CDD boards in Florida should scope, budget, and procure community gate access and camera systems.",
  url: abs(PATH),
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
  audience: { "@type": "Audience", audienceType: "HOA and CDD board members and property managers" },
};

export default function HoaBoardGuidePage() {
  return (
    <>
      <JsonLd data={[articleSchema, faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "HOA & CDD Board Guide", path: PATH }]} />}
        title="A Board's Guide to Community Security"
        subtitle="Written for HOA and CDD boards deciding how to scope, budget, and award a gate access or camera project — including the questions that are cheaper to ask before the vote than after."
        ctaText="Request Community Pricing"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-inter text-text-secondary text-lg leading-relaxed mb-6">
          Community security projects go wrong in predictable ways: scope written around a product
          instead of a problem, bids that cannot be compared because the specification was vague,
          and a ten-year cost nobody budgeted for. None of that is about the equipment.
        </p>
        <p className="font-inter text-text-secondary leading-relaxed">
          This guide is the process we walk boards through across Hillsborough and Pasco Counties.
          It is useful whether or not you end up working with us. Nothing here is legal advice —
          the liability and procurement items are genuinely questions for association or district
          counsel.
        </p>
      </section>

      {/* Process */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            Six Steps, In Order
          </h2>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.title} className="bg-bg-card border border-border rounded-xl p-7 flex gap-5">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <s.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{s.title}</h3>
                  <p className="font-inter text-text-secondary text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
              Scope Checklist
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">
              Walk the community with this list and mark what applies. It becomes the basis of an
              RFP that produces bids you can actually compare.
            </p>
            <ul className="space-y-3">
              {SCOPE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="font-inter text-text-secondary text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/images/gate-access-control.jpg", alt: "Community gate with access control hardware" },
              { src: "/images/amenity-center-camera.jpg", alt: "Camera covering a community amenity center" },
              { src: "/images/gate-operator-control-board.jpg", alt: "Gate operator control board wiring" },
              { src: "/images/conduit-trench-fence-line.jpg", alt: "Conduit trenched along a community fence line" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-square overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-10">
            Board Questions
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
          <p className="font-inter text-text-secondary text-sm leading-relaxed mt-8">
            See also our{" "}
            <Link href="/services/hoa-cdd" className="text-accent hover:underline">
              HOA &amp; CDD services
            </Link>{" "}
            and the{" "}
            <Link href="/resources/builder-prewire-guide" className="text-accent hover:underline">
              builder pre-wire guide
            </Link>{" "}
            if your community is still under development.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Board-Ready Proposals"
        body="We provide documented proposals with scoped locations, retention periods, and ten-year cost of ownership — the format a board can actually vote on."
        ctaText="Request Community Pricing"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
