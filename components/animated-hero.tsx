"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/gsap";

export default function AnimatedHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const waveContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    const waveContainer = waveContainerRef.current;

    if (!hero || !text || !image || !waveContainer) return;

    // Create a timeline for the hero section
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate the hero section
    tl.fromTo(hero, { opacity: 0 }, { opacity: 1, duration: 0.8 });

    // Animate the text elements
    tl.fromTo(
      text.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
      "-=0.4"
    );

    // Animate the wave container
    tl.fromTo(
      waveContainer,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.6"
    );

    // Animate all wave paths
    const waves = waveContainer.querySelectorAll(".wave-path");
    waves.forEach((wave, index) => {
      gsap.to(wave, {
        y: `${Math.sin(index) * 10}`,
        x: `${Math.cos(index) * 5}`,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });

    // Animate the image
    tl.fromTo(
      image,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );

    return () => {
      // Clean up animation
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-900/70 to-royal-blue-800/40"></div>

      {/* Decorative wave background - Most attractive position */}
      <div
        ref={waveContainerRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="waveGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#FCD34D" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="waveGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#1E3A8A" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Multiple flowing waves */}
          <path
            className="wave-path"
            d="M0,300 C360,250 360,350 720,300 C1080,250 1080,350 1440,300"
            stroke="url(#waveGradient1)"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
          />
          <path
            className="wave-path"
            d="M0,320 C360,270 360,370 720,320 C1080,270 1080,370 1440,320"
            stroke="url(#waveGradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          <path
            className="wave-path"
            d="M0,280 C360,230 360,330 720,280 C1080,230 1080,330 1440,280"
            stroke="url(#waveGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            ref={textRef}
            className="flex flex-col space-y-4 text-center md:text-left"
          >
            <div className="space-y-2 relative">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white relative">
                Cavite State University Bacoor City Campus
                {/* Accent wave under specific words */}
              </h1>

              <p className="max-w-[700px] text-gray-100 md:text-xl mt-6">
                Empowering minds, shaping futures. Discover excellence in
                education and research.
              </p>
            </div>
            <div>
              <Button
                asChild
                className="bg-canary-yellow-500 hover:bg-royal-blue-600 text-royal-blue-900 font-bold relative overflow-hidden group"
              >
                <Link
                  href="/about/campus-history"
                  className="px-6 py-3 hover:text-white"
                >
                  <span className="relative z-10">Learn more</span>
                  {/* Wave effect on hover */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-royal-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 20"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,10 Q25,0 50,10 T100,10 L100,20 L0,20 Z"
                          fill="currentColor"
                          className="text-royal-blue-700"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
          <div ref={imageRef} className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-canary-yellow-500 rounded-lg rotate-3 transform-gpu"></div>
              <Image
                src="/herobg.png"
                alt="University Students"
                width={500}
                height={500}
                className="object-cover rounded-lg shadow-lg relative z-10 transform-gpu -rotate-3 hover:rotate-0 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
