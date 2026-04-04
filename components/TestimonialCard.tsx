"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  index?: number;
}

export default function TestimonialCard({
  quote,
  name,
  index = 0,
}: TestimonialCardProps) {
  // 3D tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
  const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

  const springRotateX = useSpring(rotateX, { stiffness: 250, damping: 25 });
  const springRotateY = useSpring(rotateY, { stiffness: 250, damping: 25 });

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
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="h-full group"
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative bg-bg-card border rounded-2xl p-8 h-full flex flex-col overflow-hidden dcsi-bento-glow"
        style={{ borderColor: "rgba(34,34,34,1)" }}
        whileHover={{
          borderColor: "rgba(227,0,15,0.4)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Corner accent glow */}
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-bl-[5rem] pointer-events-none"
          style={{ background: "rgba(227,0,15,0.05)" }}
        />

        {/* Red border trace — top edge highlight on hover (purely CSS) */}
        <div
          className="absolute top-0 left-4 right-4 h-px pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(227,0,15,0.6), transparent)",
          }}
        />

        {/* Large quote mark */}
        <div className="font-montserrat text-7xl text-accent leading-none mb-3 select-none -mt-2">
          &ldquo;
        </div>

        <p className="font-inter text-text-secondary text-sm leading-relaxed flex-1 -mt-3">
          {quote}
        </p>

        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-md shadow-accent/25">
            <span className="font-montserrat font-bold text-white text-sm">
              {name[0]}
            </span>
          </div>
          <span className="font-inter font-semibold text-text-primary text-sm">
            {name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
