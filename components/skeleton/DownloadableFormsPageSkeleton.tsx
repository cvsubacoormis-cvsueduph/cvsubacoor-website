"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function DownloadableFormsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-6">
        <Skeleton className="h-10 w-40 mb-6" />

        <Skeleton className="h-8 w-80 mb-2" />
        <div className="flex items-center gap-2 mb-8">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-3" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-3" />
          <Skeleton className="h-4 w-40" />
        </div>

        <Skeleton className="h-4 w-full max-w-2xl" />
      </div>

      {/* Forms Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {[0, 1, 2, 3].map((categoryIndex) => (
          <Card
            key={categoryIndex}
            className="shadow-sm border border-gray-200"
          >
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-6 w-64" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[0, 1, 2].map((formIndex) => (
                  <li
                    key={formIndex}
                    className="flex items-center justify-between border rounded-md px-3 py-2"
                  >
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-9 w-24" />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
