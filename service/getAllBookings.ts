import { cookies } from "next/headers";

export async function getAllBookings() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/allbookings`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to fetch bookings"
    );
  }

  return result;
}