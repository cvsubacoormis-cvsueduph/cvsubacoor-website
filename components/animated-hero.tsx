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

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (!hero || !text || !image) return;

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
      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-900/70 to-royal-blue-800/40 backdrop-blur-sm"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            ref={textRef}
            className="flex flex-col space-y-4 text-center md:text-left"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Cavite State University Bacoor City Campus
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl">
                Empowering minds, shaping futures. Discover excellence in
                education and research.
              </p>
            </div>
            <div>
              <Button
                asChild
                className="bg-canary-yellow-500 hover:bg-royal-blue-600 text-royal-blue-900 font-bold"
              >
                <Link
                  href="/about/campus-history"
                  className="px-6 py-3 hover:text-white"
                >
                  Learn more
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
