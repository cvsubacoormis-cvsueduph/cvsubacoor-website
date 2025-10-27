"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AnimatedPage from "@/components/animated-page";

export function UniversitySealPageSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Skeleton className="h-10 w-32 mb-2" />
          <Skeleton className="h-8 w-52 mb-2" />
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
            <div className="flex justify-center mb-8">
              <div className="relative h-96 w-96">
                <Skeleton className="h-full w-full rounded-full" />
              </div>
            </div>

            <div className="mx-8 md:mx-0 md:p-8 space-y-6">
              <Skeleton className="h-5 w-64" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              <Skeleton className="h-5 w-80" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>

              <Skeleton className="h-5 w-72" />
              <div className="space-y-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ))}
              </div>

              <Skeleton className="h-5 w-64" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Skeleton key={idx} className="h-4 w-4/5" />
                ))}
              </div>

              <Skeleton className="h-5 w-60" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg space-y-4">
              <Skeleton className="h-6 w-48" />
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <Skeleton key={idx} className="h-4 w-full" />
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg space-y-4">
              <Skeleton className="h-6 w-48" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Skeleton key={idx} className="h-4 w-52" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
