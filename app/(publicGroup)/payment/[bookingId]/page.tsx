import { getBookingById } from "@/service/getBookingById";

import PaymentSummary from "./_components/PaymentSummary";
import PayButton from "./_components/PayButton";

type Props = {
  params: Promise<{
    bookingId: string;
  }>;
};

export default async function PaymentPage({
  params,
}: Props) {
  const { bookingId } = await params;

  const booking = await getBookingById(bookingId);

  return (
    <div className="mx-auto max-w-xl space-y-8 py-12">
      <h1 className="text-3xl font-bold">
        Complete Payment
      </h1>

      <PaymentSummary booking={booking.data} />

      <PayButton bookingId={booking.data.id} />
    </div>
  );
}