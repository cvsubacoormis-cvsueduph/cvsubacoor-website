"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, GraduationCap, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { gsap } from "gsap";

export default function AnimatedStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    // Set up the cards animation with ScrollTrigger
    gsap.fromTo(
      cards.children,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate the numbers counting up
    const numberElements = document.querySelectorAll(".stat-number");
    numberElements.forEach((el) => {
      const target = Number.parseInt(el.textContent || "0", 10);
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      // Clean up animations
      gsap.killTweensOf(cards.children);
      gsap.killTweensOf(numberElements);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-royal-blue-900/70 to-royal-blue-800/40"
    >
      <div className="container px-4 md:px-6">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3"
        >
          <Card className="overflow-hidden transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Academic Programs"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                Academic Programs
              </CardTitle>
              <BookOpen className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold stat-number">
                9
              </div>
              {/* <p className="text-muted-foreground text-sm sm:text-base">
                Undergraduate and graduate programs across 8 colleges
              </p> */}
            </CardContent>
            {/* <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Explore Programs <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter> */}
          </Card>
          <Card className="overflow-hidden transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Enrolled Students"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                Enrolled Students
              </CardTitle>
              <GraduationCap className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold stat-number">
                7000+
              </div>
              {/* <p className="text-muted-foreground text-sm sm:text-base">
                Students from 50+ countries around the world
              </p> */}
            </CardContent>
            {/* <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Student Life <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter> */}
          </Card>
          <Card className="overflow-hidden transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Faculty & Staff"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                Faculty & Staff
              </CardTitle>
              <Users className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold stat-number">
                200+
              </div>
              {/* <p className="text-muted-foreground text-sm sm:text-base">
                Distinguished faculty members and dedicated staff
              </p> */}
            </CardContent>
            {/* <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Meet Our Team <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter> */}
          </Card>
          {/* <Card className="overflow-hidden transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Admission Procedures"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                Admission Procedures
              </CardTitle>
              <ClipboardList className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold stat-number">
                4
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Simple application process with rolling admissions
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/admission/how-to-apply"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                How to Apply <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
