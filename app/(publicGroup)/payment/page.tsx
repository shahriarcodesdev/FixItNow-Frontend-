import React from 'react'

import { CreditCard, Calendar, Clock, User, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function PaymentPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Booking Information */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <Badge className="w-fit">Payment</Badge>

              <CardTitle className="text-3xl">
                Complete Your Payment
              </CardTitle>

              <CardDescription>
                Review your booking details before proceeding to payment.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    AC Repair Service
                  </h3>

                  <p className="text-muted-foreground">
                    Booking #BK-20260731
                  </p>
                </div>
              </div>

              <Separator />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <User className="text-primary" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Technician
                    </p>

                    <p className="font-medium">
                      John Doe
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Date
                    </p>

                    <p className="font-medium">
                      5 August 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-primary" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Time
                    </p>

                    <p className="font-medium">
                      2:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CreditCard className="text-primary" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Status
                    </p>

                    <Badge>Awaiting Payment</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Summary */}
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="flex justify-between">
                <span>Service Fee</span>

                <span>$50</span>
              </div>

              <div className="flex justify-between">
                <span>Platform Fee</span>

                <span>$5</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>

                <span>$2</span>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>

                <span>$57</span>
              </div>
            </CardContent>

            <CardFooter className="flex-col gap-3">
              <Button className="w-full" size="lg">
                Pay with Stripe
              </Button>

             

              <p className="text-center text-xs text-muted-foreground">
                Secure payment powered by Stripe / SSLCommerz.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}