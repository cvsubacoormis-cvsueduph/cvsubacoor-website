import { Skeleton } from "@/components/ui/skeleton";

export default function LibraryServicesSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div>
        <Skeleton className="h-10 w-48 mb-4" /> {/* Title */}
        <Skeleton className="h-5 w-96 mb-2" /> {/* Breadcrumb */}
      </div>

      {/* Overview */}
      <section>
        <Skeleton className="h-6 w-40 mb-3" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </section>

      {/* Vision / Mission / Goals / Objectives Cards */}
      <section className="grid md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </section>

      {/* Library Services */}
      <section>
        <Skeleton className="h-6 w-48 mb-4" />
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section>
        <Skeleton className="h-6 w-48 mb-3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-5 w-full" />
          ))}
        </div>
      </section>

      {/* Open Access Cards */}
      <section className="space-y-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <Skeleton className="h-5 w-1/2" />
            {[...Array(4)].map((_, j) => (
              <Skeleton key={j} className="h-4 w-full" />
            ))}
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="border-t pt-6 space-y-3">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-80" />
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-52" />
      </section>
    </div>
  );
}
