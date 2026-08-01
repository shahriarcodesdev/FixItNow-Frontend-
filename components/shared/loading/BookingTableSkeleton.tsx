import { Skeleton } from "@/components/ui/skeleton";

export default function BookingTableSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-16 w-full rounded-lg"
        />
      ))}
    </div>
  );
}