// app/admission/academic-programs/AcademicProgramsPageSkeleton.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import AnimatedPage from "@/components/animated-page";
import { Skeleton } from "@/components/ui/skeleton";

export function AcademicProgramsPageSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Skeleton className="h-10 w-32 mb-2" />
          <Skeleton className="h-9 w-[280px] mb-2" />
          <div className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
            <Skeleton className="h-4 w-16" />
            <span>/</span>
            <Skeleton className="h-4 w-24" />
            <span>/</span>
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <Skeleton className="h-6 w-56" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <Skeleton className="h-[300px] rounded-lg" />
        </div>

        <Tabs defaultValue="undergraduate" className="mb-12">
          <TabsContent value="undergraduate" className="pt-2">
            <Card className="col-span-3">
              <CardHeader className="bg-royal-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <Skeleton className="h-6 w-48" />
                </CardTitle>
                <div className="space-y-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {Array.from({ length: 5 }).map((_, colIndex) => (
                    <div key={`dept-col-${colIndex}`} className="space-y-3">
                      <Skeleton className="h-5 w-32" />
                      <ul className="space-y-2 text-sm">
                        {Array.from({ length: 4 }).map((_, progIndex) => (
                          <li key={`program-${colIndex}-${progIndex}`}>
                            <Skeleton className="h-4 w-full" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedPage>
  );
}
