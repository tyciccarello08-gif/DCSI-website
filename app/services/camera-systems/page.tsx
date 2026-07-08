import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Smartphone, Eye, Users } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CCTV Camera Systems | DCSI Inc. Tampa Bay",
  description:
    "Professional CCTV and DVR camera system installation for homes and businesses in Tampa Bay. Remote mobile viewing, custom quotes.",
};

const ADVANTAGES = [
  "Use as video confirmation to an alarm event",
  "Review an incident at work without the 'he said she said'",
  "Know who is at your door before you open it",
  "Watch your home in real-time from anywhere in the world",
  "Visual confirmation that your children are home from school safely",
  "Know when a package is delivered to your home or business",
  "Monitor children while you work in another part of the house",
  "Keep an eye on your property while traveling",
  "View cameras live from your iPhone or smartphone",
  "Record full time or only when an event is triggered",
  "Save from days to months of video to your DVR",
  "Get email alerts of events on a custom schedule",
];

const CATEGORIES = [
  { icon: Camera, title: "DVRs & NVRs", description: "Digital and network video recorders storing days to months of footage." },
  { icon: Eye, title: "Outdoor Cameras", description: "Weatherproof cameras covering entry points, driveways, and perimeters." },
  { icon: Users, title: "Indoor Cameras", description: "Discreet indoor units for monitoring interior spaces." },
  { icon: Smartphone, title: "Mobile Viewing Apps", description: "View your DVR live from any iPhone, Android, or web browser." },
];

export default function CameraSystemsPage() {
  return (
    <>
      <HeroBanner
        title="Professional CCTV Camera Systems"
        subtitle="Custom camera installations for homes and businesses across Tampa Bay — with professional walkthrough, training, and ongoing support included."
        ctaText="Get a Custom Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Overview</span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
              Everything Included, Start to Finish
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-6">
              All DCSI camera installations come with a professional walkthrough and installation by
              our certified team. Every system includes cable installation, compression fittings,
              power supplies, demo, training, and end support.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">
              Custom quotes available to fit <strong className="text-text-primary">any</strong> commercial
              or residential need — we work with your layout, budget, and security goals.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-block bg-accent hover:bg-accent-light text-white font-montserrat font-semibold uppercase tracking-wide px-8 py-4 rounded-lg text-sm transition-colors"
            >
              Call for a Free Quote
            </a>
          </div>

          {/* Advantages list */}
          <div>
            <h3 className="font-montserrat font-bold text-xl text-text-primary mb-6">
              Why Install a Camera System?
            </h3>
            <ul className="space-y-3">
              {ADVANTAGES.map((adv) => (
                <li key={adv} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="font-inter text-text-secondary text-sm leading-relaxed">{adv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Installation photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/04-security-camera-dome-commercial.png"
              alt="Dome security camera on commercial building"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/07-security-camera-hidden-landscaping.png"
              alt="Discreet security camera hidden in landscaping"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Equipment</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-14">
            What We Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                  <cat.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-text-primary text-lg mb-3">{cat.title}</h3>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="font-inter text-text-secondary text-xs leading-relaxed border border-border rounded-lg p-6 bg-bg-card">
          <strong className="text-text-primary">Note:</strong> Some restrictions may apply. Additional fees may apply to wire
          runs over one hundred feet, inaccessible attics, conduit or piping that needs to be secured
          or trenched, A/C outlets added, internet modems, and networking DVR. All systems come with
          a ninety-day warranty on labor and one year on parts. Extended warranties and service
          contracts are available.
        </p>
      </section>

      <CTABanner
        headline="Get a Custom Camera System Quote"
        body="Tell us about your property and we'll design the perfect camera solution for you."
        ctaText="Request a Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
