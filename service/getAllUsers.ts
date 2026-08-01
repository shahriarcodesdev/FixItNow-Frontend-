import { cookies } from "next/headers";
import { GetAllUsersResponse } from "@/types/admin";

export async function getAllUsers(): Promise<GetAllUsersResponse> {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const result: GetAllUsersResponse =
    await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to fetch users"
    );
  }

  return result;
}