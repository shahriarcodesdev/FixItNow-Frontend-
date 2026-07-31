import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Booking } from "@/types/booking";

type Props = {
  booking: Booking;
};

export function BookingInfo({ booking }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Status</span>

          <Badge>{booking.status}</Badge>
        </div>

        <div className="flex justify-between">
          <span>Date</span>

          <span>
            {format(
              new Date(booking.bookingDate),
              "dd MMM yyyy hh:mm a"
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Booking ID</span>

          <span className="font-mono text-sm">
            {booking.id}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}