import { getBookingById } from "@/service/getBookingById";

import { BookingInfo } from "./_components/BookingInfo";
import { ServiceInfo } from "./_components/ServiceInfo";
import { TechnicianInfo } from "./_components/TechnicianInfo";
import { PaymentCard } from "./_components/PaymentCard";
import { ReviewCard } from "./_components/ReviewCard";

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
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Booking Details
        </h1>

        <p className="text-muted-foreground">
          Track your booking, payment, and review.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Side */}
        <div className="space-y-6 lg:col-span-2">
          <BookingInfo booking={booking.data} />
          <ServiceInfo booking={booking.data} />
          <TechnicianInfo booking={booking.data} />
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <PaymentCard booking={booking.data} />
          <ReviewCard booking={booking.data} />
        </div>
      </div>
    </div>
  );
}