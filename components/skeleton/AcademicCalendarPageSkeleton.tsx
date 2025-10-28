"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function AcademicCalendarPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-10 w-32 mb-2 mx-auto md:mx-0" />
        <Skeleton className="h-9 w-[280px] mb-2 mx-auto md:mx-0" />
        <div className="flex flex-wrap items-center justify-center md:justify-start text-sm text-muted-foreground mb-8 gap-2">
          <Skeleton className="h-4 w-16" />
          <span>/</span>
          <Skeleton className="h-4 w-24" />
          <span>/</span>
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      {/* Carousel Skeleton */}
      <div className="flex justify-center mt-10">
        <div className="relative w-full max-w-6xl">
          <div className="relative w-full overflow-hidden">
            {/* Carousel Content Skeleton */}
            <div className="flex justify-center">
              <div className="w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] rounded-2xl shadow-lg">
                <Skeleton className="w-full h-full" />
              </div>
            </div>

            {/* Responsive Arrow Placeholders */}
            <div className="absolute left-2 sm:left-4 md:left-[-3rem] top-1/2 -translate-y-1/2 z-10">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            <div className="absolute right-2 sm:right-4 md:right-[-3rem] top-1/2 -translate-y-1/2 z-10">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
