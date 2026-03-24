import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Wifi, Shield, Camera, Speaker, Plug } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Construction Low Voltage Services | DCSI Inc. Tampa",
  description:
    "Low voltage pre-wire for new construction in Hillsborough County. Security, cameras, structured wiring, home theater pre-wire, and more.",
};

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
      <HeroBanner
        title="New Construction Low Voltage Services"
        subtitle="Partnering with builders and developers across Hillsborough County to deliver complete low voltage pre-wire for residential and commercial new construction."
        ctaText="Contact Us for Builder Pricing"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.tollFree}`}
        secondaryCtaHref={CONTACT.tollFreeHref}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/17-pre-wire-soffit-camera.png"
              alt="Pre-wire camera mount in soffit during construction"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/06-structured-wiring-installation.png"
              alt="Structured wiring installation in new construction"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Builder & Developer Pricing Available"
        body="Contact us for volume pricing on new construction low voltage projects in Hillsborough County and surrounding areas."
        ctaText="Get in Touch"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.tollFree}`}
        secondaryCtaHref={CONTACT.tollFreeHref}
      />
    </>
  );
}
