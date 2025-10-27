"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Newspaper, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { gsap } from "@/lib/gsap";
import { newsData } from "@/data/news";

export default function NewsSection() {
  const newsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newsCards = newsRef.current;
    const button = buttonRef.current;

    if (newsData.length && newsCards && button) {
      gsap.fromTo(
        newsCards.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: newsCards,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        button,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.8,
          scrollTrigger: {
            trigger: button,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      return () => {
        gsap.killTweensOf(newsCards.children);
        gsap.killTweensOf(button);
      };
    }
  }, []);

  if (newsData.length === 0) {
    return (
      <section className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-10 py-16 text-center shadow-[0_40px_80px_-40px_rgba(8,24,58,0.7)] backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-royal-blue-50">
          <Sparkles className="h-3.5 w-3.5 text-royal-blue-200" />
          News and Updates
        </span>

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-royal-blue-100 ring-1 ring-white/15">
          <Newspaper className="h-8 w-8" strokeWidth={1.2} />
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-white">
            We&apos;re catching up on the headlines
          </h2>
          <p className="mx-auto max-w-md text-base text-royal-blue-100/80">
            Fresh stories are on their way. In the meantime, explore our
            newsroom archive or check back soon for newly breaking updates.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <div
        ref={newsRef}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {newsData.slice(0, 3).map((item) => (
          <Card
            key={item.id}
            className="flex flex-col overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              <CardDescription className="flex items-center gap-1 text-royal-blue-700">
                <Calendar className="h-4 w-4" />
                {item.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="line-clamp-3 text-sm sm:text-base">
                {item.excerpt}
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/news/${item.id}`}
                className="inline-flex items-center text-sm font-medium text-royal-blue-800 transition-colors hover:text-royal-blue-600"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div ref={buttonRef} className="flex justify-center">
        <Button
          asChild
          variant="outline"
          className="border-royal-blue-800 text-royal-blue-800 transition-all duration-300 hover:scale-105 hover:bg-royal-blue-700 hover:text-white"
        >
          <Link href="/news" className="inline-flex items-center gap-1">
            View All News <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  );
}
