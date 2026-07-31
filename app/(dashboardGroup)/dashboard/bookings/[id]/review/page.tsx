import { getBookingById } from "@/service/getBookingById";
import { ReviewForm } from "./_components/ReviewForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ReviewPage({
  params,
}: Props) {
  const { id } = await params;

  const booking = await getBookingById(id);

  return (
    <div className="mx-auto max-w-3xl py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Leave a Review
        </h1>

        <p className="text-muted-foreground">
          Share your experience with the technician.
        </p>
      </div>

      <ReviewForm booking={booking.data} />
    </div>
  );
}