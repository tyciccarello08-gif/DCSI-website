"use client";

/* Wrapper component so layout.tsx (server) can dynamic-import the canvas */
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), {
  ssr: false,
});

export default function GlobalBackground() {
  return (
    /* position:fixed so it stays behind every page, not just the hero */
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <HeroCanvas />
    </div>
  );
}
