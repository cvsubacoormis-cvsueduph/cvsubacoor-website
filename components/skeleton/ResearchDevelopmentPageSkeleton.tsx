"use client";

import AnimatedPage from "@/components/animated-page";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ResearchDevelopmentSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        {/* Top bar: back button, title, breadcrumbs */}
        <div className="mb-6">
          <Skeleton className="h-10 w-40 mb-6" />
          <Skeleton className="h-8 w-64 mb-2" />
          <div className="flex items-center gap-2 text-sm">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-3" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-3" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>

        {/* Hero: text + image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <Skeleton className="h-6 w-72 mb-4" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-5/6 mb-3" />
            <Skeleton className="h-4 w-4/6" />
          </div>
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>

        {/* Our Research Direction: 3 cards */}
        <div className="mb-12">
          <Skeleton className="h-6 w-56 mb-2" />
          <Skeleton className="h-4 w-96 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-6 w-24" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                    <Skeleton className="h-4 w-3/6" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Objectives: list with numbered badges */}
        <div className="mb-12">
          <Skeleton className="h-6 w-56 mb-6" />
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="flex items-start gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-64 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Thrust Areas: title + sample content layout */}
        <div className="mb-12">
          <Skeleton className="h-6 w-64 mb-2" />
          <Skeleton className="h-4 w-96 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-3">
              <Skeleton className="h-5 w-72" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
              <Skeleton className="h-4 w-3/6" />
            </div>
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
