"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  index?: number;
}

export default function TestimonialCard({ quote, name, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <div className="relative bg-bg-card border border-border rounded-2xl p-8 h-full flex flex-col overflow-hidden">
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-[5rem]" />

        {/* Large serif quote mark */}
        <div className="font-montserrat text-7xl text-accent leading-none mb-3 select-none -mt-2">
          &ldquo;
        </div>

        <p className="font-inter text-text-secondary text-sm leading-relaxed flex-1 -mt-3">
          {quote}
        </p>

        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-md shadow-accent/20">
            <span className="font-montserrat font-bold text-white text-sm">
              {name[0]}
            </span>
          </div>
          <span className="font-inter font-semibold text-text-primary text-sm">{name}</span>
        </div>
      </div>
    </motion.div>
  );
}
