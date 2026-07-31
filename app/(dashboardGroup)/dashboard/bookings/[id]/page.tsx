import { getBookingById } from "@/service/getBookingById";

import { BookingInfo } from "./_components/BookingInfo";
import { ServiceInfo } from "./_components/ServiceInfo";
import { TechnicianInfo } from "./_components/TechnicianInfo";
import { PaymentCard } from "./_components/PaymentCard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookingDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const booking = await getBookingById(id);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">
          Booking Details
        </h1>

        <p className="text-muted-foreground">
          Track your booking and payment.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <BookingInfo booking={booking.data} />
          <ServiceInfo booking={booking.data} />
          <TechnicianInfo booking={booking.data} />
        </div>

        <PaymentCard booking={booking.data} />
      </div>
    </div>
  );
}