// app/about/careers/CareersPageSkeleton.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

export function CareersPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-9 w-[520px] max-w-full mb-2" />
        <div className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
          <Skeleton className="h-4 w-12" />
          <span>/</span>
          <Skeleton className="h-4 w-16" />
          <span>/</span>
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
        <Skeleton className="h-[300px] rounded-lg" />
      </div>

      <div className="bg-slate-50 p-6 rounded-lg mb-8">
        <Skeleton className="h-6 w-56 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Skeleton className="h-10 rounded-md md:col-span-2" />
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
        </div>
      </div>

      <Tabs defaultValue="openings" className="mb-12">
        <TabsContent value="openings" className="pt-6">
          <div className="grid grid-cols-1 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={`job-card-${index}`} className="rounded-lg border">
                <div className="p-6 border-b flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                  <Skeleton className="h-16 w-full" />
                </div>
                <div className="p-6 border-t flex flex-wrap gap-4 justify-between">
                  <Skeleton className="h-10 w-36" />
                  <Skeleton className="h-10 w-36" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
