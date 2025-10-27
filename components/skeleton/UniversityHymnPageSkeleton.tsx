"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AnimatedPage from "@/components/animated-page";

export function UniversityHymnPageSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Skeleton className="h-10 w-32 mb-2" />
          <Skeleton className="h-8 w-60 mb-2" />
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <Skeleton className="h-4 w-12" />
            <span className="mx-2">/</span>
            <Skeleton className="h-4 w-16" />
            <span className="mx-2">/</span>
            <Skeleton className="h-4 w-24" />
            <span className="mx-2">/</span>
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Skeleton className="h-80 w-full rounded-lg" />

            <div className="space-y-6">
              <Skeleton className="h-5 w-48" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-4/5" />
              </div>

              <Skeleton className="h-5 w-32" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-5/6" />
              </div>

              <Skeleton className="h-5 w-24" />
              <div className="rounded-lg border p-6 space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="h-4 w-full" />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg space-y-3">
              <Skeleton className="h-6 w-44" />
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-4 w-40" />
              ))}
            </div>

            <div className="bg-slate-50 p-6 rounded-lg space-y-2">
              <Skeleton className="h-6 w-44" />
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-4 w-48" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
    </AnimatedPage>
  );
}
