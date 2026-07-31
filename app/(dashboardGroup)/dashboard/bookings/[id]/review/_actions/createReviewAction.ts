"use server";

import { cookies } from "next/headers";

type ReviewState = {
  success: boolean;
  message: string;
};

export async function createReviewAction(
  prevState: ReviewState | null,
  formData: FormData
): Promise<ReviewState> {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const payload = {
      bookingId: formData.get("bookingId"),
      rating: Number(formData.get("rating")),
      comment: formData.get("comment"),
    };

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/reviews`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
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
      message: result.message,
    };
  } catch {
    return {
      success: false,
      message: "Failed to submit review",
    };
  }
}