"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Clock, Monitor, Star, Phone, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import GoogleRating from "@/components/GoogleRating";
import QuoteSection from "@/components/QuoteSection";
import { CONTACT, COMPANY, SERVICES, TESTIMONIALS } from "@/lib/constants";

// HeroCanvas removed — GlobalBackground in layout.tsx now provides the fixed particle canvas
const PixiSparkDivider = dynamic(
  () => import("@/components/PixiSparkDivider"),
  { ssr: false }
);

const TRUST_ITEMS = [
  {
    icon: Shield,
    label: "Licensed & Professional",
    sub: "Certified Security Experts",
  },
  { icon: Clock, label: "Since 2004", sub: "Serving Tampa Bay" },
  { icon: Monitor, label: "24/7 Monitoring", sub: "In-House, Around the Clock" },
  { icon: Star, label: "White Glove Service", sub: "Installed by Our Own Team" },
];

export default function HomeClient() {
  useEffect(() => {
    // Safety: ensure overlay is never permanently stuck
    const removeOverlay = () => {
      const overlay = document.getElementById("dcsi-intro-overlay");
      if (overlay) {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
      }
    };

    const fallback = setTimeout(removeOverlay, 4000);

    let animationCleanup: (() => void) | undefined;

    import("@/lib/animation-controller").then(({ initCinematicAnimations }) => {
      clearTimeout(fallback);
      animationCleanup = initCinematicAnimations();
    }).catch(() => {
      clearTimeout(fallback);
      removeOverlay();
    });

    return () => {
      clearTimeout(fallback);
      animationCleanup?.();
    };
  }, []);

  return (
    <>
      {/* ─── Cinematic Intro Overlay (aria-hidden, purely visual) ─── */}
      <div
        id="dcsi-intro-overlay"
        className="dcsi-intro-overlay"
        aria-hidden="true"
      >
        <div
          id="dcsi-slash-line"
          className="dcsi-slash-line"
        />
        <div
          id="dcsi-intro-logo"
          className="dcsi-intro-logo font-bebas"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          DCSI INC.
          <div
            style={{
              fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
              letterSpacing: "0.4em",
              color: "#E3000F",
              marginTop: "0.25em",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 600,
            }}
          >
            SECURITY &amp; SOUND
          </div>
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Particle canvas comes from GlobalBackground (layout.tsx) — fixed, z-index:-1 */}

        {/* Dark overlay so text stays legible over canvas */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.65) 60%, rgba(10,10,10,0.5) 100%)",
            zIndex: 1,
          }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 grid-bg opacity-30 pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* Film grain + scanline overlay */}
        <div className="dcsi-scanline-hero" style={{ zIndex: 2 }} />

        {/* Atmospheric red glow blob */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <div
            className="absolute rounded-full blur-[140px]"
            style={{
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "900px",
              height: "700px",
              background: "rgba(227,0,15,0.07)",
            }}
          />
        </div>

        {/* Hero content */}
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24"
          style={{ zIndex: 3 }}
        >
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <motion.div
              id="dcsi-hero-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div
                className="h-px bg-accent"
                style={{ width: "2.5rem" }}
              />
              <span className="text-accent text-[11px] font-inter uppercase tracking-[0.25em]">
                Tampa Bay&apos;s Trusted Security Experts
              </span>
            </motion.div>

            {/* H1 — Bebas Neue, massive */}
            <motion.h1
              id="dcsi-hero-headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bebas text-text-primary leading-[0.95] tracking-wide mb-6"
              style={{
                fontSize: "clamp(4rem, 12vw, 9rem)",
                perspective: "1000px",
              }}
            >
              Tampa Bay&apos;s Source
              <br />
              for{" "}
              <span
                className="text-accent"
                style={{ textShadow: "0 0 40px rgba(227,0,15,0.5)" }}
              >
                Security Solutions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              id="dcsi-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
            >
              Residential &amp; Commercial Security, Cameras, Sound &amp; Smart
              Systems — Hillsborough &amp; Pasco Counties.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              id="dcsi-hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#quote"
                className="dcsi-btn-pulse bg-accent hover:bg-accent-light text-white font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-all shadow-xl shadow-accent/25 hover:shadow-accent/40"
              >
                Get a Free Quote
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 border border-border hover:border-accent text-text-primary hover:text-accent font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-all"
                style={{
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <Phone size={14} />
                Call {CONTACT.phone}
              </a>
            </motion.div>
          </div>

          {/* Est. badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute right-8 bottom-28 hidden xl:flex flex-col items-center justify-center w-28 h-28 rounded-full dcsi-bento-glow"
            style={{
              border: "1px solid rgba(227,0,15,0.25)",
              background: "rgba(227,0,15,0.04)",
            }}
          >
            <span className="text-accent text-[9px] font-inter uppercase tracking-[0.2em]">
              Est.
            </span>
            <span className="font-bebas text-3xl text-text-primary leading-none">
              2004
            </span>
            <span className="text-text-secondary text-[9px] font-inter uppercase tracking-wider mt-0.5">
              Tampa, FL
            </span>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--bg-primary), transparent)",
            zIndex: 4,
          }}
        />
      </section>

      {/* ─── Pixi Spark Divider ─── */}
      <PixiSparkDivider className="relative z-10" />

      {/* ─── Trust Bar ─── */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-border">
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="dcsi-reveal-up flex items-center gap-4 lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <div className="font-inter font-semibold text-text-primary text-sm">
                    {item.label}
                  </div>
                  <div className="font-inter text-text-secondary text-xs mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Protecting Families ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-border shadow-2xl aspect-[4/3] dcsi-bento-glow"
          >
            <Image
              src="/images/happy-family.webp"
              alt="Happy family at home protected by DCSI security"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="dcsi-reveal-up"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">
                Family First
              </span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary mb-6 leading-tight">
              Protecting Hillsborough &amp; Pasco{" "}
              <span className="italic">Families</span> Since 2004
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-5">
              Home is where your family feels safe, makes memories, and grows
              together. At DCSI Inc., we take that seriously. We&apos;re not a
              call center or a national chain — we&apos;re your neighbors, right
              here in Tampa Bay.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">
              Every system we design starts with a conversation about what
              matters to you. Whether it&apos;s knowing your kids are home
              safely, watching your front door from across the country, or
              simply sleeping better at night — we build security around your
              life, not a sales script.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#quote"
                className="bg-accent hover:bg-accent-light text-white font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-all shadow-lg shadow-accent/20"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/about"
                className="border border-border hover:border-accent text-text-secondary hover:text-accent font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-all"
              >
                About Our Company
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="dcsi-reveal-up mb-14"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">
                Our Services
              </span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary">
              What We Do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Work Gallery (CSS horizontal scroll-snap) ─── */}
      <section
        id="dcsi-gallery-section"
        className="bg-bg-secondary border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="dcsi-reveal-up mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">
                Our Work
              </span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary">
              Recent Installations
            </h2>
          </motion.div>
        </div>

        {/* CSS scroll-snap horizontal track */}
        <div
          id="dcsi-gallery-track"
          className="flex gap-4 pl-4 sm:pl-8 pr-4 sm:pr-8 pb-16 overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {[
            {
              src: "/images/amenity-center-camera.jpg",
              alt: "Security camera covering a community amenity center",
            },
            {
              src: "/images/gate-access-control.jpg",
              alt: "Access-controlled community gate installation",
            },
            {
              src: "/images/camera-dome-soffit-install.jpg",
              alt: "Dome security camera installed under a home soffit",
            },
            {
              src: "/images/new-construction-framing-prewire.jpg",
              alt: "Low-voltage pre-wire during new home construction",
            },
            {
              src: "/images/09-home-theater-wall-mount.webp",
              alt: "Home theater wall mount installation",
            },
            {
              src: "/images/10-commercial-tv-sports-bar.webp",
              alt: "Commercial AV installation",
            },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex-shrink-0 overflow-hidden rounded-xl border border-border group dcsi-bento-glow"
              style={{ width: "340px", height: "340px", scrollSnapAlign: "start" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="340px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── About Snippet / Stats ─── */}
      <section
        id="dcsi-stats-section"
        className="bg-bg-primary border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="dcsi-reveal-up"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">
                  About Us
                </span>
              </div>
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary mb-6">
                Tampa Bay&apos;s{" "}
                <span className="italic">Trusted</span> Security Experts
              </h2>
              <p className="font-inter text-text-secondary leading-relaxed mb-6">
                {COMPANY.name} was founded on providing quality service,
                competitive prices, and creating a quality workplace where
                employees enjoy coming to work and clients keep coming back to
                experience our white glove service.
              </p>
              <p className="font-inter text-text-secondary leading-relaxed mb-8">
                We are a full-service security and sound company serving
                Hillsborough and Pasco Counties, Florida — from alarm
                systems and camera installations to home theater and structured
                wiring.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-inter font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "20",    dataSuffix: "+",  dataCount: "20",    label: "Years Experience" },
                  { value: "24",    dataSuffix: "/7", dataCount: "24",    label: "Monitoring" },
                  { value: "2004",  dataSuffix: "",   dataCount: "",      label: "Founded in Lutz, FL" },
                  { value: "10000", dataSuffix: "+",  dataCount: "10000", label: "Installs Completed" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-bg-card border border-border rounded-2xl p-8 text-center group hover:border-accent/30 transition-colors dcsi-bento-glow"
                  >
                    <div className="font-bebas text-5xl text-accent mb-2 leading-none">
                      {stat.dataCount ? (
                        <span
                          className="dcsi-stat-counter"
                          data-count={stat.dataCount}
                          data-suffix={stat.dataSuffix}
                        >
                          {stat.value}{stat.dataSuffix}
                        </span>
                      ) : (
                        // A year shouldn't count up from zero.
                        <span>{stat.value}</span>
                      )}
                    </div>
                    <div className="font-inter text-text-secondary text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="dcsi-reveal-up mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">
              Client Reviews
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary">
              What Our Clients Say
            </h2>
            <GoogleRating />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </section>

      <QuoteSection
        heading="Get a Free Quote"
        body="Tell us what you need and roughly where you are. We'll set up a free on-site visit anywhere in Hillsborough or Pasco and put a fixed price in writing."
      />

      {/* ─── CTA Banner ─── */}
      <CTABanner
        headline="Protecting Tampa Bay Homes & Businesses"
        body="24/7 in-house monitoring, professional installation, and white glove service from a team that cares."
        ctaText="Get a Free Quote"
        ctaHref="#quote"
        secondaryCtaText={`Call ${CONTACT.phone}`}
        secondaryCtaHref={CONTACT.phoneHref}
      />
    </>
  );
}
