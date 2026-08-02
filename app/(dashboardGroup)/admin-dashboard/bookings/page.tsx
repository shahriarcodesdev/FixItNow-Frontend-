export const dynamic = "force-dynamic";
import { getAllBookings } from "@/service/getAllBookings";
import { BookingTable } from "./_components/BookingTable";

export default async function AdminBookingsPage() {
  const bookings = await getAllBookings();

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Booking Management
        </h1>

        <p className="text-muted-foreground">
          Manage all bookings.
        </p>
      </div>

      <BookingTable
        bookings={bookings.data}
      />
    </div>
  );
}