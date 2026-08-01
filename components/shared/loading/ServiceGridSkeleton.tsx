import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border p-4 space-y-4"
        >
          <Skeleton className="h-40 w-full rounded-lg" />
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
    </div>
  );
}