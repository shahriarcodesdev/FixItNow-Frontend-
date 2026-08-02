"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/users/me`,
      {
        method: "GET",
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Failed to fetch user profile",
      };
    }

    return result;

  } catch (error) {
    console.error("getMe error:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};