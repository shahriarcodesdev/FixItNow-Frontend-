import Link from "next/link";
import { XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>

          <CardTitle className="text-3xl">
            Payment Cancelled
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Your payment was cancelled. You can try again
            whenever you,re ready.
          </p>

          <Button className="w-full" asChild>
            <Link href="/dashboard/bookings">
              Back to My Bookings
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}