// app/about/campus-map/CampusMapPageSkeleton.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export function CampusMapPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-8 w-56 mb-2" />
        <div className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
          <Skeleton className="h-4 w-12" />
          <span>/</span>
          <Skeleton className="h-4 w-16" />
          <span>/</span>
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      <Tabs defaultValue="interactive" className="mb-12">
        <TabsContent value="interactive" className="pt-6">
          <div className="bg-white border rounded-lg overflow-hidden mb-6">
            <Skeleton className="h-[600px] w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <Skeleton className="h-6 w-40 mb-6" />
              <ul className="space-y-6">
                {Array.from({ length: 3 }).map((_, index) => (
                  <li key={`map-control-${index}`} className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-48" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="parking" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={`parking-card-${index}`}
                className="rounded-lg border p-6"
              >
                <Skeleton className="h-6 w-48 mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <ul className="space-y-3 mb-4">
                  {Array.from({ length: 4 }).map((__, itemIndex) => (
                    <li
                      key={`parking-item-${index}-${itemIndex}`}
                      className="flex items-center gap-3"
                    >
                      <Skeleton className="h-4 w-4 rounded-sm" />
                      <Skeleton className="h-4 w-40" />
                    </li>
                  ))}
                </ul>
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>

          <div className="bg-white border rounded-lg overflow-hidden">
            <Skeleton className="h-[400px] w-full" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
