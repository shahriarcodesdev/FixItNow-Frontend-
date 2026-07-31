"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createBookingAction } from "../_actions/bookingAction";

type Service = {
  id: string;
  title: string;
  technicianId: string;
};

type Props = {
  service: Service;
};

export function BookingForm({ service }: Props) {
  const router = useRouter();

  const [state, action, pending] = useActionState(
    createBookingAction,
    null
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message);

      router.push("/dashboard/bookings");
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Information</CardTitle>
      </CardHeader>

      <CardContent>
        <form action={action} className="space-y-6">
          {/* Hidden Fields */}
          <input
            type="hidden"
            name="serviceId"
            value={service.id}
          />

          <input
            type="hidden"
            name="technicianId"
            value={service.technicianId}
          />

          {/* Service Name */}
          <div className="space-y-2">
            <Label htmlFor="service">Service</Label>

            <Input
              id="service"
              value={service.title}
              readOnly
            />
          </div>

          {/* Booking Date */}
          <div className="space-y-2">
            <Label htmlFor="bookingDate">
              Booking Date & Time
            </Label>

            <Input
              id="bookingDate"
              name="bookingDate"
              type="datetime-local"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={pending}
          >
            {pending ? "Creating Booking..." : "Confirm Booking"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}