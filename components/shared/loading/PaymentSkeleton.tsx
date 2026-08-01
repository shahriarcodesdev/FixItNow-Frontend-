import { Skeleton } from "@/components/ui/skeleton";

export default function PaymentSkeleton() {
  return (
    <div className="rounded-xl border p-6 space-y-5">
      <Skeleton className="h-7 w-32" />

      <Skeleton className="h-16 w-full" />

      <Skeleton className="h-11 w-full" />
    </div>
  );
}