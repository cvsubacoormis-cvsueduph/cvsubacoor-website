"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import gsap from "gsap";

export default function CoreValues() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;

    if (!cards) return;

    // Animate cards
    gsap.fromTo(
      cards.children,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cards,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate list items inside cards
    cards.querySelectorAll("li").forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          x: -20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          delay: 0.8 + index * 0.1,
          scrollTrigger: {
            trigger: item.parentElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      gsap.killTweensOf(cards.children);
      gsap.killTweensOf(cards.querySelectorAll("li"));
    };
  }, []);
  return (
    <div>
      <div ref={cardsRef} className="mb-12 mt-12">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="h-16">
            <CardHeader className="flex items-center">
              <CardTitle>
                <span className="text-royal-blue-500 font-semibold">T</span>
                ruth
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="h-16">
            <CardHeader className="flex items-center">
              <CardTitle>
                <span className="text-royal-blue-500 font-semibold">I</span>
                ntegrity
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="h-16">
            <CardHeader className="flex items-center">
              <CardTitle>
                <span className="text-royal-blue-500 font-semibold">E</span>
                xcellence
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="h-16">
            <CardHeader className="flex items-center">
              <CardTitle>
                <span className="text-royal-blue-500 font-semibold">S</span>
                ervice
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
