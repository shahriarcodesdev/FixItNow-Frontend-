import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  booking: {
    id: string;
    service: {
      title: string;
      price: number;
    };
    technician: {
      user: {
        name: string;
      };
    };
  };
};

export default function PaymentSummary({
  booking,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Service</span>
          <span>{booking.service.title}</span>
        </div>

        <div className="flex justify-between">
          <span>Technician</span>
          <span>{booking.technician.user.name}</span>
        </div>

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>৳ {booking.service.price}</span>
        </div>
      </CardContent>
    </Card>
  );
}