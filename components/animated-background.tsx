"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Particles from "./Particles";

export default function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    // Array of possible background gradients
    const gradients = [
      "linear-gradient(to right bottom, #0d47a1, #1565c0, #1976d2, #1e88e5)",
      "linear-gradient(to right bottom, #0d47a1, #0f4cad, #1152b9, #1358c5)",
      "linear-gradient(to right bottom, #0d47a1, #0a367b, #072654, #03162e)",
      "linear-gradient(to right bottom, #0d47a1, #115eb3, #1575c5, #198cd7)",
      "linear-gradient(to right bottom, #0d47a1, #0e3d7e, #0e335c, #0d293b)",
    ];

    // Randomly select a gradient
    const randomGradient =
      gradients[Math.floor(Math.random() * gradients.length)];

    // Set initial state (invisible)
    gsap.set(background, {
      opacity: 0,
      background: randomGradient,
    });

    // Animate the background in
    gsap.to(background, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });

    return () => {
      gsap.killTweensOf(background);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 -z-10 opacity-0"
      aria-hidden="true"
    >
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={500}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}
