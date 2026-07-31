import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Booking } from "@/types/booking";

type Props = {
  booking: Booking;
};

export function TechnicianInfo({ booking }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Technician</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <p>
          <strong>Name:</strong>{" "}
          {booking.technician.user.name}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {booking.technician.user.email}
        </p>

        <p>
          <strong>Experience:</strong>{" "}
          {booking.technician.experience} Years
        </p>

        <p>
          <strong>Rating:</strong>{" "}
          ⭐ {booking.technician.averageRating}
        </p>
      </CardContent>
    </Card>
  );
}