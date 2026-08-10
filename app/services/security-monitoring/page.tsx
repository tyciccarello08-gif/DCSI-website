import Image from "next/image";
import { Shield, Clock, Radio, Lock, Bell, Eye } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/constants";
import { pageMetadata, serviceSchema } from "@/lib/seo";

const PATH = "/services/security-monitoring";

export const metadata = pageMetadata({
  title: "Security System Installation & 24/7 Monitoring",
  description:
    "Custom residential and commercial burglar alarm systems with 24/7 in-house monitoring — not an outsourced call center. Hillsborough & Pasco, FL.",
  path: PATH,
});

const FEATURES = [
  {
    icon: Clock,
    title: "24/7 In-House Monitoring",
    description:
      "Our team monitors your system around the clock — no outsourcing, no delays. When something happens, we respond immediately.",
  },
  {
    icon: Shield,
    title: "Custom System Design",
    description:
      "Every home and business is different. We design a security solution tailored to your specific layout, needs, and budget.",
  },
  {
    icon: Bell,
    title: "Burglary & Intrusion Detection",
    description:
      "Silent alarms, motion sensors, door/window contacts, and glass break detectors provide comprehensive coverage.",
  },
  {
    icon: Radio,
    title: "Fire & Life Safety",
    description:
      "Smoke detectors, heat sensors, and carbon monoxide monitoring integrated directly into your security system.",
  },
  {
    icon: Eye,
    title: "Remote Surveillance",
    description:
      "View your cameras and arm/disarm your system from anywhere in the world via your smartphone.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Keypads, intercoms, and door access systems for residential and commercial properties.",
  },
];

export default function SecurityMonitoringPage() {
  return (
    <>
      <JsonLd data={serviceSchema(PATH)} />
      <HeroBanner
        breadcrumbs={<Breadcrumbs trail={[{ name: "Security & Monitoring", path: PATH }]} />}
        title="Security Systems & 24/7 Monitoring in Tampa Bay"
        subtitle="Custom residential and commercial security solutions with in-house monitoring — protecting Tampa Bay families and businesses around the clock."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Family & Home Hero Image */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-64 sm:h-80 lg:h-96">
          <Image
            src="/images/13-residential-home-exterior.webp"
            alt="Beautiful Tampa Bay home protected by DCSI security"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-text-primary max-w-xl leading-tight">
                Your home is where your family is.<br />
                <span className="text-accent">We keep it safe.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protecting Your Family section */}
      <section className="bg-bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Family image */}
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl order-2 lg:order-1 aspect-[3/4]">
              <Image
                src="/images/01-family-home-security.webp"
                alt="Family at home protected by a DCSI Inc. monitored security system"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-bg-primary/80 to-transparent px-6 py-5">
                <p className="font-montserrat font-semibold text-text-primary text-sm">
                  Protecting what matters most — your family.
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-accent" />
                <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Peace of Mind</span>
              </div>
              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-6 leading-tight">
                Every Family Deserves to Feel Safe at Home
              </h2>
              <p className="font-inter text-text-secondary leading-relaxed mb-5">
                At DCSI Inc., we understand that your home is more than a building — it&apos;s where
                your family lives, grows, and makes memories. That&apos;s why we take security
                personally. We listen to your concerns, assess your specific situation, and design
                a system that gives you real peace of mind, not just a sales package.
              </p>
              <p className="font-inter text-text-secondary leading-relaxed mb-8">
                From families in Lutz, Wesley Chapel, and Land O&apos; Lakes who want to feel safe at night, to
                parents who want to know their kids got home from school safely — DCSI Inc. is
                the neighbor you can count on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
                >
                  Call {CONTACT.phone}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center border border-border hover:border-accent text-text-secondary hover:text-accent font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-accent" />
          <span className="text-accent text-xs font-montserrat uppercase tracking-widest">What We Offer</span>
        </div>
        <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
          Comprehensive Protection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg-card border border-border rounded-xl p-6"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <feature.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose DCSI */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-accent" />
                <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Why DCSI</span>
              </div>
              <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
                Your Safety Is Our Top Priority
              </h2>
              <p className="font-inter text-text-secondary leading-relaxed mb-6">
                Unlike large national companies, DCSI Inc. monitors your system in-house — meaning
                you get a faster, more personal response when it matters most. We know our clients
                by name, not by account number.
              </p>
              <p className="font-inter text-text-secondary leading-relaxed mb-8">
                Our certified installation team handles everything from initial consultation and
                system design to installation, training, and ongoing support — all under one roof.
              </p>
              <a
                href={CONTACT.phoneHref}
                className="inline-block bg-accent hover:bg-accent-light text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
              >
                Call {CONTACT.phone}
              </a>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/05-dcsi-honeywell-touchscreen-panel.webp"
                  alt="DCSI Honeywell touchscreen security panel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Residential Systems",
                  "Commercial Systems",
                  "Medical / Panic Alerts",
                  "Home Automation",
                  "Central Vacuum",
                  "Structured Wiring",
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-bg-card border border-border rounded-lg px-4 py-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-inter text-text-secondary text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready for a Custom Security System?"
        body="Contact us for a free no-pressure consultation. We'll design the right solution for your property."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
