"use client";

import AnimatedPage from "@/components/animated-page";
import { Skeleton } from "@/components/ui/skeleton";

export default function JobPlacementSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        {/* Back button, title, breadcrumbs */}
        <div className="mb-6">
          <Skeleton className="h-10 w-40 mb-6" />
          <Skeleton className="h-8 w-56 mb-2" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-3" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-3" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        {/* Hero section: title + description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Skeleton className="h-6 w-72 mb-4" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-11/12 mb-3" />
            <Skeleton className="h-4 w-10/12" />
          </div>
        </div>

        {/* JobFilter skeleton */}
        <div className="mb-12 p-6 border rounded-lg bg-slate-50">
          <div className="space-y-4">
            {/* Search input */}
            <div>
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Filter grid (category, type, location) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job cards skeleton */}
        <div className="space-y-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border rounded-lg p-6 bg-white">
              {/* Card header with title, company, and meta info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                <div className="flex-1">
                  <Skeleton className="h-6 w-96 mb-2" />
                  <Skeleton className="h-4 w-48 mb-3" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-32 rounded-full" />
                  </div>
                </div>

                {/* Apply button */}
                <Skeleton className="h-10 w-32 mt-4 md:mt-0" />
              </div>

              {/* Card description */}
              <div className="space-y-2 mb-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-10/12" />
              </div>

              {/* Requirements list skeleton */}
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <div className="space-y-2">
                  {[0, 1, 2].map((k) => (
                    <div key={k} className="flex gap-2">
                      <Skeleton className="h-4 w-4 rounded-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
