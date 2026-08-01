"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export type ActionState = {
  success: boolean;
  message: string;
} | null;

export async function updateAvailabilityAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("accessToken")?.value;

    if (!token) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/users/technician-availability`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          dayOfWeek: Number(
            formData.get("dayOfWeek")
          ),
          startTime: formData.get(
            "startTime"
          ),
          endTime: formData.get(
            "endTime"
          ),
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          result.message ||
          "Failed to update availability",
      };
    }

    revalidatePath(
      "/technician-dashboard/availability"
    );

    return {
      success: true,
      message:
        result.message ||
        "Availability updated successfully",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}