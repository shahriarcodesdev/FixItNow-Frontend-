import { cookies } from "next/headers";

export const getServiceById = async (id: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services/${id}`,
    {
      headers: {
        Authorization: accessToken
          ? `Bearer ${accessToken}`
          : "",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch service");
  }

  return res.json();
};