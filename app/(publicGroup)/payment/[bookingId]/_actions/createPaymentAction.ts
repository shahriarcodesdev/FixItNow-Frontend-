"use server";

import { cookies } from "next/headers";

export async function createPaymentAction(bookingId: string): Promise<{
  success: boolean;
  paymentUrl?: string;
  message?: string;
}> {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/payments/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingId,
        }),
      },
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message,
      };
    }

    return {
      success: true,
      paymentUrl: result.data.paymentUrl,
    };
  } catch {
    return {
      success: false,
      message: "Payment failed",
    };
  }
}
