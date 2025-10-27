import { Skeleton } from "@/components/ui/skeleton";

export default function HistoryPageSkeleton() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        {/* Header Skeleton */}
        <div className="mb-6 animate-element">
          <Skeleton className="h-10 w-32 mb-2" />
          <Skeleton className="h-8 w-full mb-4" />
          <Skeleton className="h-4 w-3/4 mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {/* Image Skeleton */}
            <Skeleton className="h-80 w-full mb-6" />

            {/* Content Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Additional content skeletons */}
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="space-y-4 mt-6">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
          </div>

          <div className="space-y-6">
            {/* Sidebar Skeleton (Key Milestones) */}
            <div className="bg-slate-50 p-6 rounded-lg animate-element">
              <Skeleton className="h-6 w-full mb-4" />
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
            </div>

            {/* Sidebar Skeleton (Related Links) */}
            <div className="bg-slate-50 p-6 rounded-lg animate-element">
              <Skeleton className="h-6 w-full mb-4" />
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <Skeleton key={index} className="h-4 w-full mb-2" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
