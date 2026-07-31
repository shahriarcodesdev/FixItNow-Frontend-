"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { createReviewAction } from "../_actions/createReviewAction";

type Props = {
  booking: {
    id: string;

    technician: {
      user: {
        name: string;
      };
    };

    service: {
      title: string;
    };
  };
};

export function ReviewForm({
  booking,
}: Props) {
  const router = useRouter();

  const [state, action, pending] =
    useActionState(createReviewAction, null);

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
        <CardTitle>
          Review {booking.technician.user.name}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          action={action}
          className="space-y-6"
        >
          <input
            type="hidden"
            name="bookingId"
            value={booking.id}
          />

          <div>
            <Label>Service</Label>

            <p className="mt-2 rounded-md border p-3">
              {booking.service.title}
            </p>
          </div>

          <div>
            <Label>Rating</Label>

            <select
              name="rating"
              required
              className="mt-2 w-full rounded-md border p-2"
            >
              <option value="">
                Select Rating
              </option>

              <option value="5">
                ⭐⭐⭐⭐⭐ (5)
              </option>

              <option value="4">
                ⭐⭐⭐⭐ (4)
              </option>

              <option value="3">
                ⭐⭐⭐ (3)
              </option>

              <option value="2">
                ⭐⭐ (2)
              </option>

              <option value="1">
                ⭐ (1)
              </option>
            </select>
          </div>

          <div>
            <Label>Comment</Label>

            <Textarea
              name="comment"
              rows={5}
              placeholder="Write your experience..."
              required
            />
          </div>

          <Button
            type="submit"
            disabled={pending}
            className="w-full"
          >
            {pending
              ? "Submitting..."
              : "Submit Review"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}