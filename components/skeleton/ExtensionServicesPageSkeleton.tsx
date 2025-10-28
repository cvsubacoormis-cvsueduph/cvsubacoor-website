"use client";

import AnimatedPage from "@/components/animated-page";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ExtensionServicesSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        {/* Top bar: back button, title, breadcrumbs */}
        <div className="mb-6">
          <Skeleton className="h-10 w-40 mb-6" />
          <Skeleton className="h-8 w-64 mb-2" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-3" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-3" />
            <Skeleton className="h-4 w-36" />
          </div>
        </div>

        {/* Hero: text + image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <Skeleton className="h-6 w-80 mb-4" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-11/12 mb-3" />
            <Skeleton className="h-4 w-10/12 mb-3" />
            <Skeleton className="h-4 w-9/12" />
          </div>
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-6 w-24" />
                </CardHeader>
                <CardContent>
                  {i < 2 ? (
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-4 w-4/6" />
                      <Skeleton className="h-4 w-3/6" />
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {[0, 1, 2, 3].map((k) => (
                        <li key={k} className="flex items-start gap-2">
                          <Skeleton className="h-4 w-4 rounded-full mt-1" />
                          <Skeleton className="h-4 w-5/6" />
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Objectives */}
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

        {/* DrivePreview placeholder */}
        <div className="mb-12">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-28 w-full rounded-md" />
            ))}
          </div>
        </div>

        {/* Extension Thrust Areas */}
        <div className="mb-12">
          <Skeleton className="h-6 w-64 mb-2" />
          <Skeleton className="h-4 w-96 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-3">
              <Skeleton className="h-5 w-72" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-10/12" />
              <Skeleton className="h-4 w-8/12" />
            </div>
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
