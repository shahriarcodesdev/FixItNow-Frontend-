import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Booking } from "@/types/booking";

type Props = {
  booking: Booking;
};

export function ServiceInfo({ booking }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <h3 className="text-lg font-semibold">
          {booking.service.title}
        </h3>

        <p className="text-muted-foreground">
          {booking.service.description}
        </p>

        <div className="flex justify-between">
          <span>Price</span>

          <span className="font-bold text-primary">
            ৳ {booking.service.price}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}