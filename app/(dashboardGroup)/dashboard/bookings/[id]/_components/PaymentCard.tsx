import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Booking } from "@/types/booking";

type Props = {
  booking: Booking;
};

export function PaymentCard({ booking }: Props) {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Payment</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="text-center">
          <p className="text-muted-foreground">
            Payment Status
          </p>

          <h3 className="text-2xl font-bold">
            {booking.payment ? "Paid" : "Pending"}
          </h3>
        </div>

      {!booking.payment && (
  <Button asChild className="w-full">
    <Link href={`/payment/${booking.id}`}>Pay Now</Link>
  </Button>
)}

        {booking.review && (
          <Button
            variant="secondary"
            className="w-full"
          >
            Review Submitted
          </Button>
        )}
      </CardContent>
    </Card>
  );
}