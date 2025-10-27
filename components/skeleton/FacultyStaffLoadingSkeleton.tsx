"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert } from "@/components/ui/alert";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function FacultyStaffLoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button and Header */}
      <div className="mb-6">
        <Skeleton className="h-10 w-32 mb-2" />
        <Skeleton className="h-8 w-64 mb-2" />
        <Skeleton className="h-4 w-48 mb-8" />
      </div>

      {/* Intro Text */}
      <div className="mb-8 flex flex-col items-center">
        <Skeleton className="h-5 w-3/4 max-w-2xl mb-2" />
        <Skeleton className="h-5 w-2/3 max-w-xl" />
      </div>

      {/* Search and Filter */}
      <div className="bg-slate-50 p-6 rounded-lg mb-6">
        <Skeleton className="h-6 w-56 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Skeleton className="h-10 md:col-span-2" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
        </div>
      </div>

      {/* Alert */}
      <Alert className="mb-12 border-blue-200 bg-blue-50 flex items-start gap-3 p-4">
        <AlertCircle className="h-5 w-5 text-blue-600 mt-1" />
        <div className="flex-1">
          <Skeleton className="h-5 w-40 mb-2" />
          <Skeleton className="h-4 w-80" />
        </div>
      </Alert>

      {/* Tabs */}
      <Tabs defaultValue="faculty" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="staff">Administrative Staff</TabsTrigger>
        </TabsList>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="flex flex-col items-center p-4">
              <Skeleton className="h-32 w-32 rounded-full mb-4" />
              <Skeleton className="h-5 w-40 mb-2" />
              <Skeleton className="h-4 w-32" />
            </Card>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <Skeleton className="h-8 w-8 rounded-md" />
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-8 rounded-md" />
          ))}
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </Tabs>
    </div>
  );
}
