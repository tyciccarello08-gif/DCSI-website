"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Camera,
  Building2,
  Users,
  Wifi,
  Projector,
  Speaker,
  Network,
  Store,
  KeyRound,
  RefreshCw,
  LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Shield,
  Camera,
  Building2,
  Users,
  Wifi,
  Projector,
  Speaker,
  Network,
  Store,
  KeyRound,
  RefreshCw,
};

const NUMS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  index = 0,
}: ServiceCardProps) {
  const Icon = ICONS[icon] ?? Shield;

  // 3D tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className="group relative block bg-bg-card border border-border hover:border-accent/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-accent/8 h-full overflow-hidden dcsi-bento-glow"
      >
        {/* Left accent bar */}
        <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-accent rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Red corner glow on hover */}
        <div
          className="absolute top-0 left-0 w-32 h-32 rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(227,0,15,0.08) 0%, transparent 70%)" }}
        />

        {/* Decorative number */}
        <div className="absolute top-4 right-5 font-montserrat font-bold text-8xl text-text-primary/[0.03] leading-none select-none group-hover:text-accent/8 transition-colors duration-300">
          {NUMS[index] ?? "01"}
        </div>

        {/* Icon */}
        <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-sm">
          <Icon
            size={20}
            className="text-accent group-hover:text-white transition-colors duration-300"
          />
        </div>

        <h3 className="font-montserrat font-bold text-text-primary text-xl mb-3 leading-snug">
          {title}
        </h3>

        <p className="font-inter text-text-secondary text-sm leading-relaxed mb-6">
          {description}
        </p>

        <span className="inline-flex items-center gap-2 text-accent text-sm font-inter font-medium group-hover:gap-3 transition-all duration-200">
          Learn More
          <span className="text-base leading-none transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
