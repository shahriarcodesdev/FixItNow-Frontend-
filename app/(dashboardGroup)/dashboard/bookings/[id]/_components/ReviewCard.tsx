import Link from "next/link";
import { Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  booking: {
    id: string;
    status: string;
    review: {
      rating: number;
      comment: string;
    } | null;
  };
};

export function ReviewCard({ booking }: Props) {
  if (booking.review) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Review</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex gap-1">
            {Array.from({ length: booking.review.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            {booking.review.comment}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (booking.status !== "COMPLETED") {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Review</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            You can leave a review after the service is completed.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave a Review</CardTitle>
      </CardHeader>

      <CardContent>
        <Button asChild className="w-full">
          <Link href={`/dashboard/bookings/${booking.id}/review`}>
            Write Review
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}