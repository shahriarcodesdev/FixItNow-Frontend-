"use server";

import { cookies } from "next/headers";

type BookingState = {
  success: boolean;
  message: string;
};

export const createBookingAction = async (
  prevState: BookingState | null,
  formData: FormData
): Promise<BookingState> => {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const payload = {
      serviceId: formData.get("serviceId"),
      technicianId: formData.get("technicianId"),
      bookingDate: formData.get("bookingDate"),
    };

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/bookings/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Booking failed",
      };
    }

    return {
      success: true,
      message: result.message,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};