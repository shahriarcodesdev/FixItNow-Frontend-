"use client";

import { useActionState, useState } from "react";

import { CalendarDays, Clock3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { updateAvailabilityAction } from "../_actions/updateAvailabilityAction";

type ActionState = {
  success: boolean;
  message: string;
} | null;

export function AvailabilityForm() {
  const [selectedDay, setSelectedDay] =
    useState("");

  const [state, action, pending] =
    useActionState<ActionState, FormData>(
      updateAvailabilityAction,
      null
    );

  return (
    <Card className="shadow-sm">

      <CardHeader>

        <CardTitle className="flex items-center gap-2">

          <CalendarDays className="h-5 w-5 text-primary" />

          Working Schedule

        </CardTitle>

        <CardDescription>
          Select your available working day and
          time.
        </CardDescription>

      </CardHeader>

      <CardContent>

        <form
          action={action}
          className="space-y-6"
        >

          {/* Day */}

          <div className="space-y-2">

            <Label>
              Day
            </Label>

            <Select
              value={selectedDay}
              onValueChange={setSelectedDay}
            >

              <SelectTrigger>

                <SelectValue placeholder="Select a day" />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="0">
                  Sunday
                </SelectItem>

                <SelectItem value="1">
                  Monday
                </SelectItem>

                <SelectItem value="2">
                  Tuesday
                </SelectItem>

                <SelectItem value="3">
                  Wednesday
                </SelectItem>

                <SelectItem value="4">
                  Thursday
                </SelectItem>

                <SelectItem value="5">
                  Friday
                </SelectItem>

                <SelectItem value="6">
                  Saturday
                </SelectItem>

              </SelectContent>

            </Select>

            <input
              type="hidden"
              name="dayOfWeek"
              value={selectedDay}
            />

          </div>

          {/* Time */}

          <div className="grid gap-5 md:grid-cols-2">

            <div className="space-y-2">

              <Label className="flex items-center gap-2">

                <Clock3 className="h-4 w-4" />

                Start Time

              </Label>

              <Input
                type="time"
                name="startTime"
                required
              />

            </div>

            <div className="space-y-2">

              <Label className="flex items-center gap-2">

                <Clock3 className="h-4 w-4" />

                End Time

              </Label>

              <Input
                type="time"
                name="endTime"
                required
              />

            </div>

          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={
              pending || !selectedDay
            }
          >
            {pending
              ? "Saving..."
              : "Save Availability"}
          </Button>

          {state?.message && (
            <div
              className={`rounded-md border p-3 text-sm ${
                state.success
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {state.message}
            </div>
          )}

        </form>

      </CardContent>

    </Card>
  );
}