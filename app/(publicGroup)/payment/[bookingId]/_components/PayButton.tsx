"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { createPaymentAction } from "../_actions/createPaymentAction";

type Props = {
  bookingId: string;
};

export default function PayButton({
  bookingId,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const result = await createPaymentAction(bookingId);

    if (!result.success || !result.paymentUrl) {
      setLoading(false);
      return;
    }

    window.location.href = result.paymentUrl;
  };

  return (
    <Button
      className="w-full"
      onClick={handlePayment}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Redirecting...
        </>
      ) : (
        "Pay with Stripe"
      )}
    </Button>
  );
}