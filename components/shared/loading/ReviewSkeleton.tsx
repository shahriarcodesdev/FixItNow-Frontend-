import { Skeleton } from "@/components/ui/skeleton";

export default function ReviewSkeleton() {
  return (
    <div className="rounded-xl border p-6 space-y-4">
      <Skeleton className="h-7 w-40" />

      <Skeleton className="h-12 w-full" />

      <Skeleton className="h-32 w-full" />

      <Skeleton className="h-11 w-full" />
    </div>
  );
}