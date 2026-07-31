import Link from "next/link";
import {
  Calendar,
  Clock,
  Eye,
  CreditCard,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const bookings = [
  {
    id: "BK-1001",
    service: "AC Repair",
    technician: "John Doe",
    date: "5 Aug 2026",
    time: "2:00 PM",
    amount: 55,
    status: "ACCEPTED",
  },
  {
    id: "BK-1002",
    service: "Electrical Repair",
    technician: "Alex Smith",
    date: "10 Aug 2026",
    time: "10:00 AM",
    amount: 70,
    status: "PAID",
  },
  {
    id: "BK-1003",
    service: "Painting",
    technician: "David Lee",
    date: "15 Aug 2026",
    time: "11:30 AM",
    amount: 120,
    status: "COMPLETED",
  },
];

const badgeVariant = (status: string) => {
  switch (status) {
    case "REQUESTED":
      return "secondary";

    case "ACCEPTED":
      return "default";

    case "PAID":
      return "default";

    case "IN_PROGRESS":
      return "default";

    case "COMPLETED":
      return "outline";

    case "DECLINED":
      return "destructive";

    case "CANCELLED":
      return "destructive";

    default:
      return "secondary";
  }
};

export default function MyBookingsPage() {
  return (
    <div className="container mx-auto max-w-7xl py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            My Bookings
          </CardTitle>

          <CardDescription>
            View and manage all your service bookings.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left">
                  <th className="py-4">Booking</th>
                  <th>Technician</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th className="text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b"
                  >
                    <td className="py-5">
                      <div>
                        <p className="font-semibold">
                          {booking.service}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          #{booking.id}
                        </p>
                      </div>
                    </td>

                    <td>{booking.technician}</td>

                    <td>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />

                          {booking.date}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />

                          {booking.time}
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="font-semibold">
                        ${booking.amount}
                      </span>
                    </td>

                    <td>
                      <Badge
                        variant={badgeVariant(
                          booking.status
                        )}
                      >
                        {booking.status}
                      </Badge>
                    </td>

                    <td>
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                        >
                          <Link
                            href={`/dashboard/customer/bookings/${booking.id}`}
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>

                        {booking.status ===
                          "ACCEPTED" && (
                          <Button asChild>
                            <Link
                              href={`/dashboard/customer/bookings/${booking.id}/pay`}
                            >
                              <CreditCard className="mr-2 h-4 w-4" />
                              Pay
                            </Link>
                          </Button>
                        )}

                        {booking.status ===
                          "REQUESTED" && (
                          <Button
                            variant="destructive"
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Cancel
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}