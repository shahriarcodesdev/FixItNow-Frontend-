import { getServiceById } from "@/service/getServiceById";
import { BookingForm } from "./_components/BookingForm";
import { BookingSummary } from "./_components/BookingSummary";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookServicePage({ params }: Props) {
  const { id } = await params;

  const service = await getServiceById(id);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Book Service
        </h1>

        <p className="text-muted-foreground">
          Choose a date and submit your booking request.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BookingForm service={service.data} />
        </div>

        <div>
          <BookingSummary service={service.data} />
        </div>
      </div>
    </div>
  );
}