// app/about/university/mission-vision/MissionVisionPageSkeleton.tsx
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookCopy,
  CheckCircle,
  EyeIcon,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedPage from "@/components/animated-page";
import { Skeleton } from "@/components/ui/skeleton";

export function MissionVisionPageSkeleton() {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Skeleton className="h-8 w-80 mb-2" />
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <Skeleton className="h-4 w-12" />
            <span className="mx-2">/</span>
            <Skeleton className="h-4 w-16" />
            <span className="mx-2">/</span>
            <Skeleton className="h-4 w-24" />
            <span className="mx-2">/</span>
            <Skeleton className="h-4 w-36" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[Target, EyeIcon].map((Icon, idx) => (
            <Card key={idx} className="bg-slate-50">
              <CardHeader className="flex flex-row items-center gap-4">
                <Icon className="h-8 w-8 text-muted-foreground" />
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {[BookCopy, BookCopy].map((Icon, idx) => (
          <Card key={idx} className={`bg-slate-50 ${idx === 1 ? "mt-12" : ""}`}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Icon className="h-8 w-8 text-muted-foreground" />
              <Skeleton className="h-6 w-44" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="mb-12 mt-12">
          <Skeleton className="h-6 w-48 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Card key={idx} className="h-16">
                <CardHeader className="flex items-center">
                  <Skeleton className="h-5 w-24" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Skeleton className="h-6 w-40 mb-6" />
          <Skeleton className="h-4 w-72 mb-6" />
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-muted-foreground mt-1" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-slate-50 mt-12">
          <CardHeader className="flex flex-row items-center gap-4">
            <CheckCircle className="h-8 w-8 text-muted-foreground" />
            <Skeleton className="h-6 w-40" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedPage>
  );
}
