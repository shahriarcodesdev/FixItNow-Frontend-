"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export type ActionState = {
  success: boolean;
  message: string;
} | null;

export async function updateUserStatusAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const userId = formData.get("userId") as string;
  const status = formData.get("status") as string;

  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("accessToken")?.value;

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/users/${userId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          result.message ||
          "Failed to update user",
      };
    }

    revalidatePath("/admin-dashboard/users");

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
}