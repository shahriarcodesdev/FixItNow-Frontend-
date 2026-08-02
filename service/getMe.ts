"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();

  const accessToken =
    cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/users/me`,
    {
      headers: {
        cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return {
      success: false,
      message: "Failed to fetch user profile",
    };
  }

  const result = await res.json();

  return result;
};