"use client";

import Link from "next/link";
import { format } from "date-fns";

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { TechnicianBooking } from "@/types/technician-booking";
import { StatusBadge } from "./StatusBadge";
import { BookingActions } from "./BookingActions";
import { BookingCard } from "./BookingCard";

type Props = {
  bookings: TechnicianBooking[];
};

export function BookingTable({
  bookings,
}: Props) {
  if (!bookings.length) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <h3 className="text-lg font-semibold">
            No Booking Requests
          </h3>

          <p className="mt-2 text-muted-foreground">
            You don,t have any customer bookings yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden rounded-lg border lg:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">
                      {booking.customer.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {booking.customer.email}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  {booking.service.title}
                </TableCell>

                <TableCell>
                  {format(
                    new Date(booking.bookingDate),
                    "dd MMM yyyy"
                  )}
                </TableCell>

                <TableCell>
                  <StatusBadge
                    status={booking.status}
                  />
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <BookingActions
                      booking={booking}
                    />

                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <Link
                        href={`/dashboard/technician-dashboard/bookings/${booking.id}`}
                      >
                        Details
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            booking={booking}
          />
        ))}
      </div>
    </>
  );
}