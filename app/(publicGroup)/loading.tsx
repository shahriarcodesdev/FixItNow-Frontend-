import { Skeleton } from "@/components/ui/skeleton";

export default function PublicLoading() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 py-8">
      {/* Hero Section */}
      <div className="rounded-3xl border p-10">
        <Skeleton className="h-8 w-40" />

        <Skeleton className="mt-6 h-12 w-3/4" />

        <Skeleton className="mt-4 h-5 w-full" />
        <Skeleton className="mt-2 h-5 w-5/6" />

        <div className="mt-8 flex gap-4">
          <Skeleton className="h-11 w-36 rounded-lg" />
          <Skeleton className="h-11 w-36 rounded-lg" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border p-6 space-y-5"
          >
            <Skeleton className="h-20 w-20 rounded-full" />

            <Skeleton className="h-6 w-40" />

            <Skeleton className="h-4 w-28" />

            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-4 w-4/5" />

            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}