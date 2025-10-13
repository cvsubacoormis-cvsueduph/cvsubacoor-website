import { Skeleton } from "@/components/ui/skeleton";

export default function OrganizationCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border bg-card shadow-sm"
        >
          {/* Image placeholder */}
          <Skeleton className="h-48 w-full" />

          {/* Card header */}
          <div className="p-4 space-y-3">
            <Skeleton className="h-5 w-2/3" /> {/* Title */}
            <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
            <Skeleton className="h-4 w-5/6" /> {/* Description line 2 */}
            {/* Members section */}
            <div className="flex items-center gap-2 mt-4">
              <Skeleton className="h-4 w-4 rounded-full" /> {/* Users icon */}
              <Skeleton className="h-4 w-1/3" /> {/* Member count */}
            </div>
            {/* Button footer */}
            <div className="flex justify-between mt-6">
              <Skeleton className="h-8 w-24 rounded-md" /> {/* Button */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
