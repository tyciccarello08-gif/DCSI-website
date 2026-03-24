"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  tall?: boolean;
}

export default function HeroBanner({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  tall = false,
}: HeroBannerProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden ${
        tall ? "min-h-screen" : "min-h-[48vh] pt-24 pb-16"
      }`}
    >
      {/* Atmospheric glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-0 w-[700px] h-[600px] bg-accent/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-accent/4 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-7">
            <div className="w-10 h-px bg-accent" />
            <span className="text-accent text-[11px] font-inter uppercase tracking-[0.2em]">
              DCSI, Inc. — Security &amp; Sound
            </span>
          </div>

          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-[1.05] tracking-tight mb-7">
            {title}
          </h1>

          {subtitle && (
            <p className="font-inter text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
              {subtitle}
            </p>
          )}

          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap gap-4">
              {ctaText && ctaHref && (
                <Link
                  href={ctaHref}
                  className="bg-accent hover:bg-accent-light text-white font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30"
                >
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className="border border-border hover:border-accent text-text-primary hover:text-accent font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-all"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
    </section>
  );
}
