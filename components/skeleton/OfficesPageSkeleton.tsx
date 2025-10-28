"use client";

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const CARD_COUNT = 6;

export function OfficesPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-9 w-60 mb-2" />
        <div className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
          <Skeleton className="h-4 w-12" />
          <span>/</span>
          <Skeleton className="h-4 w-16" />
          <span>/</span>
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      <div className="mb-8">
        <Skeleton className="h-5 w-3/4 mx-auto mb-2" />
        <Skeleton className="h-4 w-2/3 mx-auto mb-2" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </div>

      <Tabs defaultValue="academic" className="mb-12">
        <TabsList className="grid w-full grid-cols-3 gap-2">
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
        </TabsList>

        <TabsContent value="academic" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: CARD_COUNT }).map((_, index) => (
              <div
                key={`academic-card-skeleton-${index}`}
                className="rounded-lg border p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-5 w-40" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="administrative" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: CARD_COUNT }).map((_, index) => (
              <div
                key={`administrative-card-skeleton-${index}`}
                className="rounded-lg border p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-5 w-36" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="student" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: CARD_COUNT }).map((_, index) => (
              <div
                key={`student-card-skeleton-${index}`}
                className="rounded-lg border p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-5 w-48" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
