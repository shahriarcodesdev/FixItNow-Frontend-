"use client";

import Link from "next/link";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TechnicianBooking } from "@/types/technician-booking";
import { StatusBadge } from "../../technician-dashboard/bookings/_components/StatusBadge";

type Props = {
  bookings: TechnicianBooking[];
};

export function RecentBookings({ bookings }: Props) {
  const recentBookings = bookings.slice(0, 5);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Bookings</CardTitle>

        <Button asChild variant="outline">
          <Link href="/technician-dashboard/bookings">
            View All
          </Link>
        </Button>
      </CardHeader>

      <CardContent>
        {/* Desktop */}

        <div className="hidden lg:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>

                <TableHead>Service</TableHead>

                <TableHead>Date</TableHead>

                <TableHead>Status</TableHead>

                <TableHead />
              </TableRow>
            </TableHeader>

            <TableBody>
              {recentBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>
                    {booking.customer.name}
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

                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                    >
                      <Link
                        href={`/technician-dashboard/bookings/${booking.id}`}
                      >
                        Details
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile */}

        <div className="space-y-4 lg:hidden">
          {recentBookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="space-y-3 pt-6">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Customer
                  </p>

                  <p className="font-semibold">
                    {booking.customer.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Service
                  </p>

                  <p>{booking.service.title}</p>
                </div>

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

                <StatusBadge status={booking.status} />

                <Button
                  className="w-full"
                  variant="outline"
                  asChild
                >
                  <Link
                    href={`/technician-dashboard/bookings/${booking.id}`}
                  >
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}