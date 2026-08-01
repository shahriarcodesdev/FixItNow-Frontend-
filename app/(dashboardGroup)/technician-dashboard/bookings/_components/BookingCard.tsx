"use client";

import Link from "next/link";
import { format } from "date-fns";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { TechnicianBooking } from "@/types/technician-booking";
import { StatusBadge } from "./StatusBadge";
import { BookingActions } from "./BookingActions";

type Props = {
  booking: TechnicianBooking;
};

export function BookingCard({
  booking,
}: Props) {
  return (
    <Card>
      <CardContent className="space-y-5 pt-6">
        <div>
          <p className="text-sm text-muted-foreground">
            Customer
          </p>

          <h3 className="font-semibold">
            {booking.customer.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {booking.customer.email}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Service
          </p>

          <p>{booking.service.title}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Booking Date
            </p>

            <p>
              {format(
                new Date(booking.bookingDate),
                "dd MMM yyyy"
              )}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Status
            </p>

            <StatusBadge
              status={booking.status}
            />
          </div>
        </div>

        <BookingActions
          booking={booking}
        />

        <Button
          className="w-full"
          variant="outline"
          asChild
        >
          <Link
            href={`/dashboard/technician-dashboard/bookings/${booking.id}`}
          >
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}