"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTABannerProps {
  headline: string;
  body?: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  headline,
  body,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-accent">
      {/* Subtle diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.5) 20px, rgba(0,0,0,0.5) 21px)",
        }}
      />
      {/* Radial highlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-3 leading-tight">
              {headline}
            </h2>
            {body && (
              <p className="font-inter text-white/80 leading-relaxed text-lg">
                {body}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <Link
              href={ctaHref}
              className="bg-white text-accent hover:bg-gray-100 font-inter font-bold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-colors whitespace-nowrap shadow-xl"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="border-2 border-white/50 hover:border-white text-white font-inter font-semibold uppercase tracking-wider px-8 py-4 rounded-lg text-sm transition-colors whitespace-nowrap"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
