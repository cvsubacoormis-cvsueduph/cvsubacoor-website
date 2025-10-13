import { Skeleton } from "@/components/ui/skeleton";

export default function DialogImageSkeleton() {
  return (
    <>
      {/* DialogTrigger skeleton (thumbnail) */}
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Skeleton className="h-full w-full" />
      </div>
    </>
  );
}
