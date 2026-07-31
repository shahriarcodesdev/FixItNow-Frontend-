import { getBookings } from "@/service/getBookings";
import { BookingTable } from "./_components/BookingTable";

export default async function MyBookingsPage() {
  const bookings = await getBookings();

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">
          My Bookings
        </h1>

        <p className="text-muted-foreground">
          View and manage all your service bookings.
        </p>
      </div>

      <BookingTable bookings={bookings.data} />
    </div>
  );
}