// app/academics/departments/DepartmentsPageSkeleton.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const DEPARTMENT_COUNT = 8;
const PROGRAMS_COUNT = 5;

export function DepartmentsPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-6">
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-9 w-[280px] mb-2" />
        <div className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
          <Skeleton className="h-4 w-16" />
          <span>/</span>
          <Skeleton className="h-4 w-24" />
          <span>/</span>
          <Skeleton className="h-4 w-28" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Skeleton */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg border bg-white shadow-sm">
            <div className="bg-[#0A2463] text-white p-6 rounded-t-lg">
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-56" />
            </div>
            <div className="p-0">
              <ul className="divide-y">
                {Array.from({ length: DEPARTMENT_COUNT }).map(
                  (_, deptIndex) => (
                    <li key={`dept-skeleton-${deptIndex}`}>
                      <div className="px-4 py-3 flex items-center justify-between">
                        <Skeleton
                          className={`h-4 w-${
                            deptIndex % 3 === 0 ? "48" : "32"
                          }`}
                        />
                        <Skeleton className="h-4 w-4 rounded" />
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Area - Shows both states */}
        <div className="lg:col-span-2 space-y-6">
          {/* Selected Department State Skeleton */}
          <div className="space-y-6">
            <div className="bg-[#0A2463] text-white p-6 rounded-t-lg">
              <Skeleton className="h-6 w-56 mb-2" />
              <Skeleton className="h-4 w-40" />
            </div>

            <div className="rounded-b-lg border p-6 space-y-6">
              {/* Description Section */}
              <Skeleton className="h-32 w-full" />

              {/* Tabs Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Skeleton className="h-10 rounded-md" />
                  <Skeleton className="h-10 rounded-md" />
                </div>

                {/* Programs Tab Content */}
                <div className="space-y-4">
                  <Skeleton className="h-5 w-40" />
                  <ul className="space-y-2">
                    {Array.from({ length: PROGRAMS_COUNT }).map(
                      (_, programIndex) => (
                        <li
                          key={`program-skeleton-${programIndex}`}
                          className="flex items-start gap-2"
                        >
                          <Skeleton className="h-5 w-5 rounded-full mt-0.5" />
                          <Skeleton className="h-4 w-full" />
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Faculty Tab Content */}
                <div className="space-y-4">
                  <Skeleton className="h-5 w-44" />
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-64" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <div className="space-y-1">
                        {Array.from({ length: 3 }).map((_, coordIndex) => (
                          <Skeleton
                            key={`coord-${coordIndex}`}
                            className="h-4 w-56"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Empty State Skeleton (shown initially) */}
          <div className="rounded-lg border p-6 text-center space-y-4">
            <Skeleton className="h-6 w-48 mx-auto mb-2" />
            <Skeleton className="h-4 w-80 mx-auto" />
            <Skeleton className="h-48 w-64 mx-auto rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
