"use client";

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

export function CitizensCharterPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-9 w-[340px] max-w-full mb-2" />
        <div className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
          <Skeleton className="h-4 w-12" />
          <span>/</span>
          <Skeleton className="h-4 w-16" />
          <span>/</span>
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      <div className="mb-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Skeleton className="h-6 w-4/5 mx-auto" />
          <Skeleton className="h-5 w-2/3 mx-auto" />
          <div className="flex justify-center">
            <Skeleton className="h-[150px] w-[150px] rounded-full" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12 mx-auto" />
          <Skeleton className="h-4 w-10/12 mx-auto" />
        </div>
      </div>

      <Tabs defaultValue="vision" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
        </TabsList>

        <TabsContent value="vision" className="pt-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={`vision-card-${index}`}
                className="rounded-lg border p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <Skeleton className="h-5 w-40" />
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>

          <div>
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="bg-slate-50 p-6 rounded-lg space-y-4">
              <Skeleton className="h-4 w-3/4" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={`pledge-item-${index}`} className="flex gap-3">
                    <Skeleton className="h-5 w-5 rounded-full mt-0.5" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="pt-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <Skeleton className="h-6 w-56" />
              <Skeleton className="h-4 w-full" />
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`feedback-card-${index}`}
                  className="bg-slate-50 p-4 rounded-lg space-y-2"
                >
                  <Skeleton className="h-5 w-44" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border p-6 space-y-4">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton
                      key={`survey-item-${index}`}
                      className="h-4 w-4/5"
                    />
                  ))}
                </div>
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg space-y-6">
            <Skeleton className="h-6 w-60 mx-auto" />
            <Skeleton className="h-4 w-4/5 mx-auto" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`commitment-${index}`}
                  className="text-center space-y-2"
                >
                  <Skeleton className="h-12 w-12 rounded-full mx-auto" />
                  <Skeleton className="h-4 w-32 mx-auto" />
                  <Skeleton className="h-4 w-4/5 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-slate-50 p-6 rounded-lg space-y-4">
        <Skeleton className="h-6 w-64 mx-auto" />
        <Skeleton className="h-4 w-4/5 mx-auto" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
        <div className="flex justify-center">
          <Skeleton className="h-10 w-[290px] rounded-md" />
        </div>
      </div>
    </div>
  );
}
