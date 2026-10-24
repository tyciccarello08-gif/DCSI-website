import Image from "next/image";
import Link from "next/link";
import { Camera, Shield, Key, Bell, Users, Wrench } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/hoa-cdd";

export const metadata = pageMetadata({
  title: "HOA & CDD Gate Access & Cameras in Tampa Bay",
  description:
    "Gate access control, common area and amenity cameras, and 24/7 monitoring for HOAs and CDDs across Hillsborough & Pasco Counties, FL.",
  path: PATH,
});

const SERVICES = [
  {
    icon: Key,
    title: "Gate & Entry Access Control",
    description:
      "Keypad and card/fob access for community gates, garages, and entry points. Remote management lets your board grant or revoke access without a service call.",
  },
  {
    icon: Camera,
    title: "Common Area Camera Systems",
    description:
      "CCTV and DVR coverage for pools, clubhouses, playgrounds, mailbox kiosks, and parking areas. Remote viewing available for board members and management.",
  },
  {
    icon: Shield,
    title: "Amenity Area Security",
    description:
      "Protect your pool house, fitness center, tennis courts, and recreation facilities with alarm systems and camera monitoring tailored to shared-use spaces.",
  },
  {
    icon: Bell,
    title: "Perimeter Monitoring",
    description:
      "Camera and intrusion detection along community perimeters, fence lines, and entry corridors to deter trespassers and document incidents.",
  },
  {
    icon: Users,
    title: "Intercom & Visitor Management",
    description:
      "Video intercom systems at guarded and unguarded entry gates give residents and management full control over who enters the community.",
  },
  {
    icon: Wrench,
    title: "New Development Pre-Wire",
    description:
      "Partnering with CDD developers and builders to pre-wire all security and access infrastructure before construction is complete — saving time and cost.",
  },
];

const WHY_DCSI = [
  "Volume & bulk pricing for community-wide contracts",
  "Single point of contact for the entire HOA or CDD",
  "24/7 in-house monitoring — no third-party dispatch",
  "Local Hillsborough & Pasco company since 2004",
  "Experience with both residential communities and commercial CDDs",
  "Ongoing maintenance and service contracts available",
  "Fast response — we're in your backyard, not across the country",
  "Board-friendly reporting and documentation",
];

const FAQS = [
  {
    q: "Do you work directly with HOA and CDD boards?",
    a: "Yes. We work with boards, management companies, and district staff, and we provide the documented proposals and scope a board needs in hand before it votes.",
  },
  {
    q: "Can you replace or upgrade our community gate system?",
    a: "Yes. We install and service gate operators, resident credentials, telephone-entry and video intercoms, and the cameras covering entry and exit lanes — including the trenching and conduit gate work usually requires.",
  },
  {
    q: "Who manages resident gate credentials after installation?",
    a: "Usually the management company or a designated board member. We set the system up so credentials can be issued and revoked from software without a service call, and we train whoever will run it.",
  },
  {
    q: "Do you cover amenity centers and pools?",
    a: "Yes. Amenity centers, pools, fitness rooms, and playgrounds are some of the most common community camera and access control projects we do, including after-hours access schedules for residents.",
  },
  {
    q: "What areas do you serve for community security?",
    a: "Communities across Hillsborough and Pasco Counties, including Wesley Chapel, Land O' Lakes, Lutz, New Tampa, and Riverview, and master-planned communities from Lakewood Ranch north to Ocala on a scheduled basis.",
  },
];

export default function HoaCddPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(PATH), faqSchema(FAQS, PATH)]} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "HOA & CDD Services", path: PATH }]} />}
        title="HOA & CDD Security Services"
        subtitle="Protecting Tampa Bay communities from the gate in — gate access, common area cameras, amenity security, and 24/7 in-house monitoring for homeowner associations and community development districts."
        ctaText="Request Community Pricing"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Intro with gate photo */}
      <section className="bg-bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-accent" />
                <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Community Security</span>
              </div>
              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-6 leading-tight">
                Your Community Deserves Professional Protection
              </h2>
              <p className="font-inter text-text-secondary leading-relaxed mb-5">
                Homeowner associations and community development districts face unique security
                challenges — shared spaces, multiple entry points, rotating residents, and vendor
                access that requires oversight and documentation. A one-size-fits-all approach
                doesn&apos;t work for communities.
              </p>
              <p className="font-inter text-text-secondary leading-relaxed mb-8">
                DCSI Inc. has been working with communities across Hillsborough and Pasco Counties since 2004 —
                including the CDD-governed communities of Wesley Chapel, Land O&apos; Lakes, and New Tampa.
                We understand the dynamics of HOA and CDD management, and we design security
                solutions that are practical for board members, transparent for residents, and
                effective against real threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
                >
                  Request Community Pricing
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center border border-border hover:border-accent text-text-secondary hover:text-accent font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
                >
                  Call {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/gate-access-control.jpg"
                  alt="Access-controlled community gate with push-to-exit hardware"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/amenity-center-camera.jpg"
                  alt="Dome camera covering a community amenity center and pool deck"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent text-xs font-montserrat uppercase tracking-widest">What We Offer</span>
        </div>
        <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-6">
          Complete Community Security Solutions
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed max-w-2xl mb-14">
          From the entry gate to the back fence line, DCSI Inc. provides every layer of
          security your community needs — designed, installed, and monitored by us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-bg-card border border-border rounded-xl p-6">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <s.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{s.title}</h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why DCSI + planning image */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-accent" />
                <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Why DCSI</span>
              </div>
              <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
                The Right Partner for Your Association
              </h2>
              <p className="font-inter text-text-secondary leading-relaxed mb-8">
                Managing security for an HOA or CDD means dealing with boards, residents,
                property managers, and developers — all with different priorities. DCSI Inc.
                is experienced at navigating that. We communicate clearly, document everything,
                and deliver on time and on budget.
              </p>
              <ul className="space-y-3">
                {WHY_DCSI.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="font-inter text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/gate-lock-hardware.jpg"
                  alt="Electronic gate lock hardware installed at a community entrance"
                  fill
                  sizes="(max-width: 1024px) 33vw, 17vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/gate-operator-control-board.jpg"
                  alt="Gate operator control board wired and programmed by DCSI"
                  fill
                  sizes="(max-width: 1024px) 33vw, 17vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/gate-post-conduit-cabling.jpg"
                  alt="Cabling run to a community gate operator post"
                  fill
                  sizes="(max-width: 1024px) 33vw, 17vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For developers/builders callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-bg-card border border-border rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-accent" />
                <span className="text-accent text-xs font-montserrat uppercase tracking-widest">For Developers</span>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl text-text-primary mb-4">
                Building a New Community?
              </h3>
              <p className="font-inter text-text-secondary leading-relaxed mb-6">
                DCSI Inc. partners with developers and builders on CDD projects from the ground
                up. We pre-wire for all security, access control, and camera infrastructure
                during construction — making final build-out faster, cleaner, and less expensive.
                We coordinate directly with your project schedule and build team.
              </p>
              <a
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-light text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
              >
                Talk to Our Team
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/new-construction-speaker-rough-in.jpg"
                alt="Low-voltage rough-in during new community construction"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FaqAccordion faqs={FAQS} heading="HOA & CDD Security Questions" />
        <p className="font-inter text-text-secondary text-sm leading-relaxed mt-10">
          Board members: our <Link href="/resources/hoa-board-security-guide" className="text-accent hover:underline">HOA &amp; CDD board guide</Link> covers scoping, budgeting, and procurement. Gate hardware and credentials are covered on <Link href="/services/access-control" className="text-accent hover:underline">access control &amp; gates</Link>.
        </p>
      </section>

      <CTABanner
        headline="Ready to Secure Your Community?"
        body="Contact DCSI Inc. for community pricing, a site walkthrough, and a custom security plan tailored to your HOA or CDD."
        ctaText="Request Community Pricing"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
