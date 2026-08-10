import Image from "next/image";
import { Building2, Wifi, Shield, Camera, Speaker, Plug } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/new-construction";

export const metadata = pageMetadata({
  title: "New Construction Low Voltage Pre-Wire",
  description:
    "Low voltage pre-wire for builders across Hillsborough & Pasco Counties, FL — security and camera rough-in, CAT6 wiring, and home theater pre-wire.",
  path: PATH,
});

const SERVICES = [
  { icon: Shield, title: "Security System Pre-Wire", description: "Complete alarm and sensor pre-wire roughed in before drywall." },
  { icon: Camera, title: "Camera Pre-Wire", description: "Strategic camera locations pre-wired for seamless installation after construction." },
  { icon: Wifi, title: "Structured Wiring", description: "CAT6, coax, and data cabling for a future-proof smart home infrastructure." },
  { icon: Speaker, title: "Home Theater Pre-Wire", description: "Speaker, HDMI, and control wiring for dedicated media rooms." },
  { icon: Building2, title: "Access Control Pre-Wire", description: "Door access and intercom wiring for entry points throughout the property." },
  { icon: Plug, title: "Central Vacuum", description: "Central vac rough-in for convenient whole-home vacuuming." },
];

export default function NewConstructionPage() {
  return (
    <>
      <JsonLd data={serviceSchema(PATH)} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "New Construction", path: PATH }]} />}
        title="New Construction Low Voltage Services"
        subtitle="Partnering with builders and developers across Hillsborough and Pasco Counties — including the Wesley Chapel and Land O' Lakes growth corridor — to deliver complete low voltage pre-wire for residential and commercial new construction."
        ctaText="Contact Us for Builder Pricing"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Services</span>
        </div>
        <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
          Everything Before the Drywall Goes Up
        </h2>
        <p className="font-inter text-text-secondary leading-relaxed max-w-2xl mb-14">
          DCSI Inc. handles all your security and sound pre-wire needs during construction — making
          final installation cleaner, faster, and less expensive. We coordinate directly with your
          project timeline.
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

      {/* Construction photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/porch-ceiling-prewire.jpg"
              alt="Camera and speaker rough-in in a porch ceiling during construction"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/new-construction-structured-wiring.jpg"
              alt="Structured wiring run through new construction framing"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/underground-conduit-trenching.jpg"
              alt="Underground conduit trenching at a new development"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/conduit-trench-fence-line.jpg"
              alt="Conduit trenched in along a property fence line"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Builder & Developer Pricing Available"
        body="Contact us for volume pricing on new construction low voltage projects across Hillsborough and Pasco Counties."
        ctaText="Get in Touch"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
