import { cookies } from "next/headers";

import { CategoryResponse } from "@/types/category";

export async function getAllCategories(): Promise<CategoryResponse> {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/allcategories`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const result: CategoryResponse =
    await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}