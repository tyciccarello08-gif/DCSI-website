"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Clock, Monitor, Star, Phone, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import { CONTACT, COMPANY, SERVICES, TESTIMONIALS } from "@/lib/constants";

const TRUST_ITEMS = [
  { icon: Shield, label: "Licensed & Professional", sub: "Certified Security Experts" },
  { icon: Clock, label: "Since 2004", sub: "Serving Tampa Bay" },
  { icon: Monitor, label: "24/7 Monitoring", sub: "In-House, Around the Clock" },
  { icon: Star, label: "White Glove Service", sub: "5-Star Client Experience" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-bg-primary">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        </div>

        {/* Atmospheric glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">
                Tampa Bay&apos;s Trusted Security Experts
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-montserrat font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-text-primary leading-[1.02] tracking-tight mb-7"
            >
              Tampa Bay&apos;s Source<br />
              for{" "}
              <span className="text-accent italic">Security Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
            >
              Residential &amp; Commercial Security, Cameras, Sound &amp; Smart
              Systems — Hillsborough County &amp; Surrounding Areas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-light text-white font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-all shadow-xl shadow-accent/25 hover:shadow-accent/35"
              >
                Get a Free Quote
              </Link>
              <a
                href={CONTACT.tollFreeHref}
                className="flex items-center gap-2 border border-border hover:border-accent text-text-primary hover:text-accent font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-all"
              >
                <Phone size={14} />
                Call {CONTACT.tollFree}
              </a>
            </motion.div>
          </div>

          {/* Est. badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute right-8 bottom-28 hidden xl:flex flex-col items-center justify-center w-28 h-28 border border-accent/20 rounded-full"
          >
            <span className="text-accent text-[9px] font-inter uppercase tracking-[0.2em]">Est.</span>
            <span className="font-montserrat font-bold text-3xl text-text-primary leading-none">2004</span>
            <span className="text-text-secondary text-[9px] font-inter uppercase tracking-wider mt-0.5">Tampa, FL</span>
          </motion.div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg-primary to-transparent" />
      </section>

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
                className="flex items-center gap-4 lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <div className="font-inter font-semibold text-text-primary text-sm">{item.label}</div>
                  <div className="font-inter text-text-secondary text-xs mt-0.5">{item.sub}</div>
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
            className="relative overflow-hidden rounded-2xl border border-border shadow-2xl aspect-[4/3]"
          >
            <Image
              src="/images/happy-family.png"
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
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">Family First</span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary mb-6 leading-tight">
              Protecting Hillsborough County{" "}
              <span className="italic">Families</span> Since 2004
            </h2>
            <p className="font-inter text-text-secondary leading-relaxed mb-5">
              Home is where your family feels safe, makes memories, and grows together. At DCSI Inc.,
              we take that seriously. We&apos;re not a call center or a national chain — we&apos;re
              your neighbors, right here in Tampa Bay.
            </p>
            <p className="font-inter text-text-secondary leading-relaxed mb-8">
              Every system we design starts with a conversation about what matters to you. Whether
              it&apos;s knowing your kids are home safely, watching your front door from across the
              country, or simply sleeping better at night — we build security around your life,
              not a sales script.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
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
            className="mb-14"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">Our Services</span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary">What We Do</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Work Gallery ─── */}
      <section className="bg-bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">Our Work</span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary">
              Recent Installations
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/04-security-camera-dome-commercial.png", alt: "Commercial security camera installation" },
              { src: "/images/14-gate-security-camera.png", alt: "Gate security camera system" },
              { src: "/images/09-home-theater-wall-mount.png", alt: "Home theater wall mount installation" },
              { src: "/images/10-commercial-tv-sports-bar.png", alt: "Commercial AV installation" },
            ].map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative aspect-square overflow-hidden rounded-xl border border-border group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Snippet ─── */}
      <section className="bg-bg-primary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-px bg-accent" />
                <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">About Us</span>
              </div>
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary mb-6">
                Tampa Bay&apos;s <span className="italic">Trusted</span> Security Experts
              </h2>
              <p className="font-inter text-text-secondary leading-relaxed mb-6">
                {COMPANY.name} was founded on providing quality service, competitive prices, and
                creating a quality workplace where employees enjoy coming to work and clients keep
                coming back to experience our white glove service.
              </p>
              <p className="font-inter text-text-secondary leading-relaxed mb-8">
                We are a full-service security and sound company serving Hillsborough County, Florida
                and surrounding areas — from alarm systems and camera installations to home theater
                and structured wiring.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-inter font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "24/7", label: "Monitoring" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "10,000+", label: "Installs Completed" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-bg-card border border-border rounded-2xl p-8 text-center group hover:border-accent/30 transition-colors"
                  >
                    <div className="font-montserrat font-bold text-4xl text-accent mb-2 italic">
                      {stat.value}
                    </div>
                    <div className="font-inter text-text-secondary text-sm">{stat.label}</div>
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
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">Client Reviews</span>
          </div>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <CTABanner
        headline="Protecting Tampa Bay Homes & Businesses"
        body="24/7 in-house monitoring, professional installation, and white glove service from a team that cares."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText={`Call ${CONTACT.tollFree}`}
        secondaryCtaHref={CONTACT.tollFreeHref}
      />
    </>
  );
}
