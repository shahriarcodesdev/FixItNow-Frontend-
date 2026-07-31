"use client";

import Link from "next/link";
import { format } from "date-fns";
import {
  Eye,
  CreditCard,
  Clock,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Booking = {
  id: string;
  bookingDate: string;
  status: string;

  service: {
    title: string;
    price: number;
  };

  technician: {
    user: {
      name: string;
    };
  };

  payment: unknown;
};

type Props = {
  bookings: Booking[];
};

export function BookingTable({ bookings }: Props) {
  return (
    <div className="rounded-xl border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Technician</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">
                {booking.service.title}
              </TableCell>

              <TableCell>
                {booking.technician.user.name}
              </TableCell>

              <TableCell>
                {format(
                  new Date(booking.bookingDate),
                  "dd MMM yyyy"
                )}
              </TableCell>

              <TableCell>
                ৳ {booking.service.price}
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    booking.status === "COMPLETED"
                      ? "default"
                      : booking.status === "PENDING"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {booking.status}
                </Badge>
              </TableCell>

              <TableCell className="text-right">
                {booking.status === "ACCEPTED" &&
                !booking.payment ? (
                  <Button size="sm" asChild>
                    <Link href={`/payment/${booking.id}`}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Pay
                    </Link>
                  </Button>
                ) : booking.status === "PENDING" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    disabled
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    Waiting
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <Link
                      href={`/dashboard/bookings/${booking.id}`}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}