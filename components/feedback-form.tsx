"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { gsap } from "@/lib/gsap";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeedbackForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    gsap.fromTo(
      card,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      }
    );

    return () => gsap.killTweensOf(card);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-royal-blue-900/70 to-royal-blue-800/40"
      id="feedback"
    >
      <div className="container px-4 md:px-6">
        <div ref={cardRef} className="mx-auto max-w-xl">
          <Card className="p-8 shadow-md border border-gray-200 bg-white text-center rounded-2xl">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl font-semibold text-gray-900">
                Share Your Feedback
              </CardTitle>
              <CardDescription className="text-gray-600 text-md">
                Your input helps us make our website better for everyone.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Link
                href="https://forms.gle/oBSYTDUpWnTKU4rK9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-700 hover:bg-blue-600 text-white font-medium px-6 py-2">
                  <Send className="mr-2 h-4 w-4" />
                  Go to Feedback Form
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
