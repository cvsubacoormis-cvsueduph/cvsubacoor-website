"use client";

import AnimatedPage from "@/components/animated-page";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function StudentOrganizationsSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        {/* Back button, title, breadcrumbs */}
        <div className="mb-6">
          <Skeleton className="h-10 w-40 mb-6" />
          <Skeleton className="h-8 w-64 mb-2" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-3" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-3" />
            <Skeleton className="h-4 w-36" />
          </div>
        </div>

        {/* Hero: text + image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <Skeleton className="h-6 w-80 mb-4" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-5/6 mb-3" />
            <Skeleton className="h-4 w-4/6" />
          </div>

          {/* Dialog image skeleton */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer">
                <Skeleton className="h-full w-full" />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[1200px] p-0 border-none shadow-none">
              <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
                <Skeleton className="h-full w-full" />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Tabs with cards */}
        <Tabs defaultValue="academic" className="mb-12">
          <TabsContent value="academic" className="pt-6">
            {/* Card skeleton grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <Card key={i} className="overflow-hidden">
                  {/* Card image skeleton */}
                  <div className="relative h-48 w-full">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative h-48 w-full cursor-pointer group">
                          <Skeleton className="h-full w-full" />
                        </div>
                      </DialogTrigger>

                      <DialogContent className="max-w-[1100px] p-0 border-none shadow-none">
                        <div className="relative w-full h-[70vh] bg-black/5 rounded-lg overflow-hidden">
                          <Skeleton className="h-full w-full" />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Card content skeleton */}
                  <CardHeader>
                    <Skeleton className="h-6 w-40" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex items-center gap-2 mt-4">
                      <Skeleton className="h-4 w-4 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Skeleton className="h-9 w-28" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedPage>
  );
}
