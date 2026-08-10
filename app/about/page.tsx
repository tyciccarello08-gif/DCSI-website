import type { Metadata } from "next";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About DCSI Inc. | Tampa Bay Security Experts",
  description:
    "Learn about DCSI Inc., Tampa Bay's trusted source for residential and commercial security systems, cameras, and sound since 2004.",
};

const ALL_TESTIMONIALS = [
  {
    quote:
      "DCSI installed a home security system for my family last summer. They were a pleasure to work with; they really listened to what our safety concerns were and then made recommendations that were specific to us. I could tell from how it was presented that they were looking to meet our needs not sell us on it.",
    name: "Miranda Kelly",
  },
  {
    quote:
      "The guy that came & installed was very helpful and informative! Thanks.",
    name: "Frank Garcia — Universal Pro Shop",
  },
  {
    quote: "Thank you for your great service.",
    name: "Lauri Verbridge",
  },
  {
    quote:
      "Nelson is someone I have enjoyed doing business with for over eight years. I trust him implicitly and have always received the best value and service available. He started out as a subcontractor and quickly became my friend.",
    name: "Bryan Thomas",
  },
  {
    quote:
      "DCSI Security has helped me with my home security needs. I trust the people at DCSI with not just my security but I have referred many of my family and friends. They have always been prompt, courteous, professional and reliable.",
    name: "Verified Customer",
  },
  {
    quote:
      "Nelson was extremely knowledgeable and professional with his presentation of the security system. The technician was professional and timely. The system is easy to use and gives my family a feeling of safety and security.",
    name: "Paris",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About DCSI, Inc."
        subtitle="Tampa Bay's trusted source for security solutions — protecting families and businesses since 2004."
      />

      {/* Neighborhood banner */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-56 sm:h-72">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&auto=format&fit=crop"
            alt="Tampa Bay neighborhood protected by DCSI Inc."
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-bg-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="font-montserrat font-extrabold text-xl sm:text-3xl text-text-primary max-w-lg leading-snug">
                Trusted by Tampa Bay homeowners<br />
                <span className="text-accent">for over 20 years.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Story text */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-accent" />
                <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Our Story</span>
              </div>
              <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-6">
                Founded on Quality &amp; Trust
              </h2>
              <p className="font-inter text-text-secondary leading-relaxed text-base mb-5">
                DCSI, Inc. was founded in 2004 on a simple belief: that every family and business
                in Tampa Bay deserves reliable protection they can trust. We built our company
                around quality service, fair prices, and a genuine commitment to the people we serve
                — and that hasn&apos;t changed in over 20 years.
              </p>
              <p className="font-inter text-text-secondary leading-relaxed text-base">
                We are a full-service security and sound company serving Hillsborough County,
                Florida and surrounding areas. From alarm systems and camera installations to
                access control and structured wiring — we handle it all under one roof.
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-xl text-text-primary mb-4">
                Security Systems &amp; Services
              </h3>
              <p className="font-inter text-text-secondary leading-relaxed mb-5">
                Through our system design services we offer a variety of custom residential and
                commercial security systems. Each system can include silent alarms, outdoor and
                remote video surveillance, medical/panic alerts, and complete home automation.
                We also offer central vac systems, structured wiring, access systems, and intercom
                systems. Additionally, we provide fire systems and 24-hour in-house monitoring
                for both residential and commercial properties.
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-xl text-text-primary mb-4">
                Your Neighbor. Your Security Partner.
              </h3>
              <p className="font-inter text-text-secondary leading-relaxed">
                Unlike national chains, we&apos;re local. We live and work in the same communities
                we protect. When you call us, you speak to someone who knows your neighborhood —
                and who takes it personally when a family needs help.
              </p>
            </div>
          </div>

          {/* Family image + stats */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/images/01-family-home-security.png"
                alt="Family protected by DCSI home security system"
                width={400}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-bg-primary/90 to-transparent px-6 py-5">
                <p className="font-montserrat font-semibold text-text-primary text-sm">
                  Protecting what matters most — your family.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2004", label: "Year Founded" },
                { value: "24/7", label: "In-House Monitoring" },
                { value: "10,000+", label: "Installs Completed" },
                { value: "100%", label: "White Glove Commitment" },
              ].map((stat) => (
                <div key={stat.label} className="bg-bg-card border border-border rounded-xl p-5 text-center">
                  <div className="font-montserrat font-extrabold text-2xl text-accent mb-1">{stat.value}</div>
                  <div className="font-inter text-text-secondary text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
              <p className="font-inter text-text-secondary text-sm leading-relaxed">
                Serving <strong className="text-text-primary">Hillsborough County, FL</strong> and surrounding areas.
              </p>
              <a
                href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                className="mt-4 flex items-center gap-2 text-accent font-montserrat font-semibold uppercase tracking-wide text-xs"
              >
                Call {CONTACT.phone} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-text-primary mb-14">
            Work We&apos;re Proud Of
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/images/03-dcsi-truck-branding.png", caption: "DCSI Inc. — Serving Tampa Bay" },
              { src: "/images/05-dcsi-honeywell-touchscreen-panel.png", caption: "Smart Home Security Panel" },
              { src: "/images/12-gym-commercial-av-install.png", caption: "Commercial AV Installation" },
              { src: "/images/11-home-theater-projector-surround.png", caption: "Home Theater Build" },
              { src: "/images/new-construction-framing-prewire.jpg", caption: "New Construction Pre-Wire" },
              { src: "/images/new-construction-structured-wiring.jpg", caption: "Structured Wiring Installation" },
            ].map((item) => (
              <div
                key={item.caption}
                className="relative aspect-square overflow-hidden rounded-xl border border-border group"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-bg-primary/90 to-transparent px-4 py-3">
                  <span className="font-montserrat text-xs font-semibold text-text-primary uppercase tracking-wide">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-primary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-montserrat uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-text-primary mb-14">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Protect Your Home or Business?"
        body="Contact DCSI Inc. for a free consultation and custom security quote."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
