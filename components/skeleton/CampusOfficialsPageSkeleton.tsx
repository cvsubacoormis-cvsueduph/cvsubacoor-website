"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const leadershipSkeletonCount = 3;
const facultySkeletonCount = 25;

export function CampusOfficialsPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-8 w-64 mb-2" />
        <div className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
          <Skeleton className="h-4 w-12" />
          <span>/</span>
          <Skeleton className="h-4 w-16" />
          <span>/</span>
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <Skeleton className="h-7 w-72 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: leadershipSkeletonCount }).map((_, index) => (
              <div
                key={`leadership-skeleton-${index}`}
                className="flex flex-col items-center text-center rounded-lg border p-6"
              >
                <Skeleton className="h-60 w-60 rounded-full mb-6" />
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-56" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <Skeleton className="h-7 w-72 mx-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: facultySkeletonCount }).map((_, index) => (
              <div
                key={`faculty-skeleton-${index}`}
                className="flex flex-col items-center text-center rounded-lg border p-6"
              >
                <Skeleton className="h-52 w-52 rounded-full mb-4" />
                <Skeleton className="h-5 w-44 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 p-6 rounded-lg">
          <Skeleton className="h-7 w-80 mx-auto mb-6" />
          <div className="flex justify-center mb-4">
            <Skeleton className="h-[400px] w-full max-w-3xl rounded-md" />
          </div>
        </section>
      </div>
    </div>
  );
}
