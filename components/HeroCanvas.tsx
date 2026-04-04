"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  // Pass an existing <canvas> element directly to Three.js so we never
  // call appendChild / removeChild — React owns the DOM node.
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    // ── Scene ──
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      Math.max(canvas.offsetWidth, 1) / Math.max(canvas.offsetHeight, 1),
      0.1,
      100
    );
    camera.position.z = 8;

    // Use the existing <canvas> element — no appendChild needed
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ── Particles ──
    const count = isMobile ? 450 : 1500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const mix = Math.random();
      if (mix < 0.6) {
        // #E3000F red
        colors[i * 3] = 0.89; colors[i * 3 + 1] = 0.0; colors[i * 3 + 2] = 0.06;
      } else if (mix < 0.85) {
        // Deep dark red
        colors[i * 3] = 0.4;  colors[i * 3 + 1] = 0.0; colors[i * 3 + 2] = 0.02;
      } else {
        // Near-white with warm tint
        colors[i * 3] = 0.92; colors[i * 3 + 1] = 0.86; colors[i * 3 + 2] = 0.86;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color",    new THREE.BufferAttribute(colors,    3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.04 : 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // ── Geometric shards (desktop only) ──
    const shards: THREE.Mesh[] = [];
    if (!isMobile) {
      for (let i = 0; i < 6; i++) {
        const geo = new THREE.IcosahedronGeometry(Math.random() * 0.2 + 0.05, 0);
        const mat = new THREE.MeshBasicMaterial({
          color: 0xe3000f,
          transparent: true,
          opacity: Math.random() * 0.3 + 0.1,
          wireframe: true,
        });
        const shard = new THREE.Mesh(geo, mat);
        shard.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5
        );
        scene.add(shard);
        shards.push(shard);
      }
    }

    // ── Red point lights ──
    const light1 = new THREE.PointLight(0xe3000f, 2, 20);
    light1.position.set(5, 3, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xe3000f, 1, 15);
    light2.position.set(-5, -3, 3);
    scene.add(light2);

    // ── Animation loop ──
    let animId: number = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        particles.rotation.y = t * 0.05;
        particles.rotation.x = t * 0.02;

        shards.forEach((shard, i) => {
          shard.rotation.x = t * (0.1 + i * 0.05);
          shard.rotation.y = t * (0.15 + i * 0.03);
          shard.position.y += Math.sin(t + i) * 0.002;
        });

        light1.position.x = Math.sin(t * 0.3) * 6;
        light1.position.y = Math.cos(t * 0.2) * 4;
      }

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize handler ──
    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false);
    };
    window.addEventListener("resize", handleResize);

    // ── Cleanup — no removeChild, React owns the <canvas> ──
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      shards.forEach((s) => {
        s.geometry.dispose();
        (s.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      style={{ opacity: 0.65 }}
    />
  );
}
