"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { updateBookingStatusAction } from "../_actions/updateBookingStatusAction";
import { TechnicianBooking } from "@/types/technician-booking";

type Props = {
  booking: TechnicianBooking;
};

export function BookingActions({
  booking,
}: Props) {
  const router = useRouter();

  const [pending, startTransition] =
    useTransition();

  const updateStatus = (
    status:
      | "ACCEPTED"
      | "DECLINED"
      | "IN_PROGRESS"
      | "COMPLETED"
  ) => {
    startTransition(async () => {
      const result =
        await updateBookingStatusAction(
          booking.id,
          status
        );

      if (result.success) {
        toast.success(result.message);

        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  };

  if (booking.status === "PENDING") {
    return (
      <div className="flex gap-2">
        <Button
          size="sm"
          disabled={pending}
          onClick={() =>
            updateStatus("ACCEPTED")
          }
        >
          Accept
        </Button>

        <Button
          size="sm"
          variant="destructive"
          disabled={pending}
          onClick={() =>
            updateStatus("DECLINED")
          }
        >
          Decline
        </Button>
      </div>
    );
  }

  if (booking.status === "ACCEPTED") {
    return (
      <Button
        size="sm"
        disabled={pending}
        onClick={() =>
          updateStatus("IN_PROGRESS")
        }
      >
        Mark In Progress
      </Button>
    );
  }

  if (booking.status === "IN_PROGRESS") {
    return (
      <Button
        size="sm"
        disabled={pending}
        onClick={() =>
          updateStatus("COMPLETED")
        }
      >
        Mark Completed
      </Button>
    );
  }

  if (booking.status === "COMPLETED") {
    return (
      <Button
        size="sm"
        disabled
        variant="secondary"
      >
        Completed
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      disabled
      variant="outline"
    >
      Declined
    </Button>
  );
}