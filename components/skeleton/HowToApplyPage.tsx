"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AnimatedPage from "@/components/animated-page";
import { Skeleton } from "@/components/ui/skeleton";

export function HowToApplyPageSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Skeleton className="h-10 w-32 mb-2" />
          <Skeleton className="h-9 w-[240px] mb-2" />
          <div className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
            <Skeleton className="h-4 w-16" />
            <span>/</span>
            <Skeleton className="h-4 w-24" />
            <span>/</span>
            <Skeleton className="h-4 w-36" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-slate-50 p-6 rounded-lg space-y-8">
              {/* Step 1 Skeleton */}
              <div className="flex items-start gap-4">
                <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                <div className="space-y-4 flex-1">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <div className="ml-6 space-y-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Skeleton
                        key={`step1-list-${index}`}
                        className="h-4 w-full"
                      />
                    ))}
                  </div>
                  <Skeleton className="h-10 w-40" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>

              {/* Step 2 Skeleton */}
              <div className="flex items-start gap-4">
                <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                <div className="space-y-3 flex-1">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>

              {/* Step 3 Skeleton */}
              <div className="flex items-start gap-4">
                <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                <div className="space-y-4 flex-1">
                  <Skeleton className="h-6 w-56" />
                  <Skeleton className="h-4 w-full" />
                  <div className="bg-white p-4 rounded-md border space-y-2">
                    <Skeleton className="h-5 w-32" />
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Skeleton
                        key={`step3-list-${index}`}
                        className="h-4 w-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4 Skeleton */}
              <div className="flex items-start gap-4">
                <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                <div className="space-y-4 flex-1">
                  <Skeleton className="h-6 w-44" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>

              {/* Step 5 Skeleton */}
              <div className="flex items-start gap-4">
                <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                <div className="space-y-3 flex-1">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Deadlines Card Skeleton */}
            <div className="rounded-lg border p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-5 w-40" />
              </div>
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={`deadline-${index}`} className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                ))}
              </div>
            </div>

            {/* Help Card Skeleton */}
            <div className="rounded-lg border p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-5 w-32" />
              </div>
              <Skeleton className="h-4 w-full" />
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={`help-${index}`} className="space-y-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
