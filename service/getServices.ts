import { cookies } from "next/headers";

export const getServices = async () => {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/services/allservices`,
      {
        method: "GET",
        headers: {
          Authorization: accessToken
            ? `Bearer ${accessToken}`
            : "",
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch services:", error);

    return {
      success: false,
      data: [],
      message: "Failed to fetch services",
    };
  }
};