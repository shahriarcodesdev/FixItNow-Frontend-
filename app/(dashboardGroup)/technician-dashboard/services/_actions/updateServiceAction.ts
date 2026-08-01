"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

type ActionState = {
  success: boolean;
  message: string;
};

export async function updateServiceAction(
  _: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const id = formData.get("id");

  const body = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    categoryId: formData.get("categoryId"),
  };

  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: result.message,
    };
  }

  revalidatePath("/technician-dashboard/services");

  return {
    success: true,
    message: "Service updated successfully",
  };
}