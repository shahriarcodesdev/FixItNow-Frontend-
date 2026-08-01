"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export type ActionState = {
  success: boolean;
  message: string;
} | null;

export async function createCategoryAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name") as string;

  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("accessToken")?.value;

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/createcategories`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          result.message ??
          "Failed to create category",
      };
    }

    revalidatePath(
      "/admin-dashboard/categories"
    );

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