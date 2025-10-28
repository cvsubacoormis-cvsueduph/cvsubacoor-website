"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AcademicCalendarPageSkeleton } from "@/components/skeleton/AcademicCalendarPageSkeleton";

export default function AcademicCalendarPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <AcademicCalendarPageSkeleton />;
  }

  const images = [
    "/calendar/2025-2026-1.jpg",
    "/calendar/2025-2026-2.jpg",
    "/calendar/2025-2026-3.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2 text-center md:text-left">
          Academic Calendar
        </h1>
        <div className="flex flex-wrap items-center justify-center md:justify-start text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/academics" className="hover:underline">
            Academics
          </Link>
          <span className="mx-2">/</span>
          <span>Academic Calendar</span>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center mt-10">
        <div className="relative w-full max-w-6xl">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px]">
              {images.map((src, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <Card className="shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={src}
                        width={1200}
                        height={1200}
                        alt={`Academic Calendar ${index + 1}`}
                        className="object-contain w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] bg-white"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Responsive Arrow Placement */}
            <CarouselPrevious className="absolute left-2 sm:left-4 md:left-[-3rem] top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 sm:right-4 md:right-[-3rem] top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
