import { getBookings } from "@/service/getBookings";
import { BookingTable } from "./_components/BookingTable";

export default async function MyBookingsPage() {
  const bookings = await getBookings();

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-4 sm:px-6 sm:py-6 lg:space-y-8 lg:px-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          My Bookings
        </h1>

        <p className="text-sm text-muted-foreground sm:text-base">
          View and manage all your service bookings.
        </p>
      </div>

      <BookingTable bookings={bookings.data} />
    </div>
  );
}