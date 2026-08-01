"use client";

import { useState } from "react";

import { AdminBooking } from "@/types/booking";

import { Input } from "@/components/ui/input";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  bookings: AdminBooking[];
};

export function BookingTable({
  bookings,
}: Props) {
  const [search, setSearch] =
    useState("");

  const filtered =
    bookings.filter((booking) => {
      const keyword =
        search.toLowerCase();

      return (
        booking.customer.name
          .toLowerCase()
          .includes(keyword) ||
        booking.technician.user.name
          .toLowerCase()
          .includes(keyword) ||
        booking.service.title
          .toLowerCase()
          .includes(keyword)
      );
    });

  return (
    <Card>

      <CardHeader>

        <CardTitle>
          All Bookings
        </CardTitle>

        <CardDescription>
          Total Bookings:{" "}
          {bookings.length}
        </CardDescription>

      </CardHeader>

      <CardContent>

        <div className="mb-5">

          <Input
            placeholder="Search customer, technician or service..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        <div className="rounded-lg border overflow-x-auto">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>
                  Customer
                </TableHead>

                <TableHead>
                  Technician
                </TableHead>

                <TableHead>
                  Service
                </TableHead>

                <TableHead>
                  Category
                </TableHead>

                <TableHead>
                  Date
                </TableHead>

                <TableHead>
                  Payment
                </TableHead>

                <TableHead>
                  Review
                </TableHead>

                <TableHead>
                  Status
                </TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>

              {filtered.length ===
              0 ? (
                <TableRow>

                  <TableCell
                    colSpan={8}
                    className="py-10 text-center text-muted-foreground"
                  >
                    No bookings found.
                  </TableCell>

                </TableRow>
              ) : (
                filtered.map(
                  (booking) => (
                    <TableRow
                      key={booking.id}
                    >
                      <TableCell className="font-medium">
                        {
                          booking
                            .customer
                            .name
                        }
                      </TableCell>

                      <TableCell>
                        {
                          booking
                            .technician
                            .user.name
                        }
                      </TableCell>

                      <TableCell>
                        {
                          booking
                            .service
                            .title
                        }
                      </TableCell>

                      <TableCell>
                        {
                          booking
                            .service
                            .category
                            ?.name
                        }
                      </TableCell>

                      <TableCell>
                        {new Date(
                          booking.bookingDate
                        ).toLocaleDateString()}
                      </TableCell>

                      <TableCell>

                        <Badge
                          variant={
                            booking
                              .payment
                              ?.status ===
                            "PAID"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {booking
                            .payment
                            ?.status ??
                            "UNPAID"}
                        </Badge>

                      </TableCell>

                      <TableCell>
                        {booking.review
                          ? `⭐ ${booking.review.rating}`
                          : "No Review"}
                      </TableCell>

                      <TableCell>

                        <Badge
                          variant={
                            booking.status ===
                            "COMPLETED"
                              ? "default"
                              : booking.status ===
                                "PENDING"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {
                            booking.status
                          }
                        </Badge>

                      </TableCell>

                    </TableRow>
                  )
                )
              )}

            </TableBody>

          </Table>

        </div>

      </CardContent>

    </Card>
  );
}