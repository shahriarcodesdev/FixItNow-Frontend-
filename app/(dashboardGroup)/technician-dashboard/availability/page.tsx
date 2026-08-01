import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { CalendarClock } from "lucide-react";

import { AvailabilityForm } from "./_components/AvailabilityForm";

export default function AvailabilityPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">

      <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background shadow-sm">

        <CardContent className="flex items-center gap-5 p-8">

          <div className="rounded-xl bg-primary/10 p-4">
            <CalendarClock className="h-7 w-7 text-primary" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Availability Schedule
            </h1>

            <p className="text-muted-foreground mt-2">
              Configure your working days and available hours so
              customers can book your services.
            </p>
          </div>

        </CardContent>

      </Card>

      <AvailabilityForm />

    </div>
  );
}