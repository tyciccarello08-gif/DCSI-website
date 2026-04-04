import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function initCinematicAnimations(): () => void {
  const mm = gsap.matchMedia();
  const triggers: ScrollTrigger[] = [];

  mm.add(
    {
      reducedMotion: "(prefers-reduced-motion: reduce)",
      normalMotion: "(prefers-reduced-motion: no-preference)",
    },
    (ctx) => {
      const conditions = ctx.conditions as {
        reducedMotion: boolean;
        normalMotion: boolean;
      };

      if (conditions.reducedMotion) {
        // Skip intro entirely — just hide overlay; reveals handled by Framer Motion
        const overlay = document.getElementById("dcsi-intro-overlay");
        if (overlay) {
          overlay.style.opacity = "0";
          overlay.style.pointerEvents = "none";
        }
        return;
      }

      // ── References ──
      const overlay = document.getElementById("dcsi-intro-overlay");
      const slash = document.getElementById("dcsi-slash-line");
      const logo = document.getElementById("dcsi-intro-logo");
      const headline = document.getElementById("dcsi-hero-headline");
      const eyebrow = document.getElementById("dcsi-hero-eyebrow");
      const subtitle = document.getElementById("dcsi-hero-subtitle");
      const ctas = document.getElementById("dcsi-hero-ctas");

      // Abort if no overlay (component not mounted yet)
      if (!overlay) return;

      // Make overlay immediately visible before timeline starts
      gsap.set(overlay, { opacity: 1, pointerEvents: "auto" });

      // ── Cinematic intro timeline ──
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Phase 1: Overlay locked and visible
      tl.set(overlay, { opacity: 1, pointerEvents: "auto" });

      // Phase 2: Red slash sweeps across
      if (slash) {
        tl.fromTo(
          slash,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.4, ease: "power3.out" },
          0.2
        );
      }

      // Phase 3: Logo slams in
      if (logo) {
        tl.fromTo(
          logo,
          { opacity: 0, scale: 1.4, y: -20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" },
          0.5
        );
      }

      // Phase 4: Fade out overlay
      tl.to(overlay, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, 1.2);
      tl.set(overlay, { pointerEvents: "none" }, 1.8);

      // Phase 5: Hero headline SplitText stagger
      if (headline) {
        try {
          const split = SplitText.create(headline, { type: "chars,words" });
          tl.fromTo(
            split.chars,
            { opacity: 0, y: 60, rotateX: -90 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              stagger: { each: 0.025, from: "start" },
              duration: 0.6,
              ease: "power3.out",
            },
            1.5
          );
        } catch {
          // Fallback if SplitText fails
          tl.fromTo(
            headline,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7 },
            1.5
          );
        }
      }

      // Phase 6: Eyebrow slides in from left
      if (eyebrow) {
        tl.fromTo(
          eyebrow,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          1.8
        );
      }

      // Phase 7: Subtitle fades up
      if (subtitle) {
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          2.0
        );
      }

      // Phase 8: CTAs fade up
      if (ctas) {
        tl.fromTo(
          ctas,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          2.2
        );
      }

      // ── Scroll reveals handled by Framer Motion whileInView on each element ──
      // GSAP ScrollTrigger.batch is intentionally removed to avoid conflict.

      // ── Stat counters ──
      const counters = document.querySelectorAll<HTMLElement>(
        ".dcsi-stat-counter"
      );
      counters.forEach((counter) => {
        const target = parseInt(
          counter.getAttribute("data-count") || "0",
          10
        );
        const suffix = counter.getAttribute("data-suffix") || "";
        const obj = { val: 0 };

        const t = ScrollTrigger.create({
          trigger: counter,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                counter.textContent = Math.floor(obj.val) + suffix;
              },
            });
          },
        });
        triggers.push(t);
      });

      // ── Horizontal gallery: CSS scroll-snap handles this; no GSAP pin needed ──
    }
  );

  return () => {
    triggers.forEach((t) => t?.kill());
    mm.revert();
  };
}
