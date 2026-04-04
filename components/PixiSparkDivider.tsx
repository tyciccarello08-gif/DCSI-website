"use client";

import { useEffect, useRef } from "react";

interface PixiSparkDividerProps {
  className?: string;
}

export default function PixiSparkDivider({
  className = "",
}: PixiSparkDividerProps) {
  // Pass an existing <canvas> to PixiJS — React owns the DOM node, PixiJS never calls appendChild/removeChild
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let app: import("pixi.js").Application | null = null;
    let animId: number = 0;
    let destroyed = false;

    const init = async () => {
      try {
        const PIXI = await import("pixi.js");

        if (destroyed) return;

        app = new PIXI.Application();

        await app.init({
          canvas: canvas as HTMLCanvasElement,
          width: canvas.offsetWidth || window.innerWidth,
          height: 8,
          backgroundAlpha: 0,
          antialias: false,
          resolution: Math.min(window.devicePixelRatio, 2),
          autoDensity: true,
        });

        if (destroyed) {
          // Cleanup without touching the DOM — React owns the canvas
          app.destroy(false);
          app = null;
          return;
        }

        const W = app.screen.width;
        const H = app.screen.height;

        const SPARK_COUNT = Math.floor(W / 12);
        interface Spark {
          gfx: import("pixi.js").Graphics;
          x: number;
          y: number;
          speed: number;
          radius: number;
          alpha: number;
          alphaDecay: number;
        }

        const sparks: Spark[] = [];

        for (let i = 0; i < SPARK_COUNT; i++) {
          const gfx = new PIXI.Graphics();
          const radius = Math.random() * 1.5 + 0.5;

          const colorRoll = Math.random();
          let color: number;
          if (colorRoll < 0.65) {
            color = 0xe3000f;
          } else if (colorRoll < 0.85) {
            color = 0xff2a2a;
          } else {
            color = 0xffffff;
          }

          gfx.circle(0, 0, radius);
          gfx.fill({ color, alpha: 1 });

          const spark: Spark = {
            gfx,
            x: Math.random() * W,
            y: Math.random() * H,
            speed: Math.random() * 1.2 + 0.4,
            radius,
            alpha: Math.random() * 0.8 + 0.2,
            alphaDecay: Math.random() * 0.005 + 0.002,
          };

          gfx.x = spark.x;
          gfx.y = spark.y;
          gfx.alpha = spark.alpha;

          app.stage.addChild(gfx);
          sparks.push(spark);
        }

        if (!prefersReducedMotion) {
          const tick = () => {
            if (destroyed || !app) {
              cancelAnimationFrame(animId);
              return;
            }
            animId = requestAnimationFrame(tick);

            sparks.forEach((spark) => {
              spark.x += spark.speed;
              spark.alpha -= spark.alphaDecay;

              if (spark.x > W + 4 || spark.alpha <= 0) {
                spark.x = -spark.radius;
                spark.y = Math.random() * H;
                spark.speed = Math.random() * 1.2 + 0.4;
                spark.alpha = Math.random() * 0.8 + 0.3;
                spark.alphaDecay = Math.random() * 0.005 + 0.002;
              }

              spark.gfx.x = spark.x;
              spark.gfx.y = spark.y;
              spark.gfx.alpha = spark.alpha;
            });
          };
          tick();
        }
      } catch {
        // PixiJS failed to load — silently degrade
      }
    };

    init();

    return () => {
      destroyed = true;
      cancelAnimationFrame(animId);
      if (app) {
        // destroy(false) = do NOT remove the canvas from the DOM; React owns that node
        app.destroy(false, { children: true });
        app = null;
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`w-full pointer-events-none ${className}`}
      style={{ height: "8px", display: "block" }}
    />
  );
}
