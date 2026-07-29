import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-10">
      {/* Hero */}
      <section className="space-y-4">
        <Skeleton className="h-10 w-80" />
        <Skeleton className="h-5 w-[500px]" />
        <Skeleton className="h-5 w-[400px]" />

        <div className="flex gap-4 pt-4">
          <Skeleton className="h-11 w-40 rounded-md" />
          <Skeleton className="h-11 w-32 rounded-md" />
        </div>
      </section>

      {/* Categories */}
      <section>
        <Skeleton className="mb-6 h-8 w-52" />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-24 rounded-xl" />
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <Skeleton className="mb-6 h-8 w-48" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="space-y-4 rounded-xl border p-4"
            >
              <Skeleton className="h-48 rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />

              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-10 w-28 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}