"use server";

import { cookies } from "next/headers";

type loginState = {
  success: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  prevState: loginState,
  fromData: FormData,
) => {
  console.log(prevState, "prev State");
  const email = fromData.get("email");
  const password = fromData.get("password");

  const payload = {
    email,
    password,
  };
  // console.log(fromData)
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  // console.log(result)
  
  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 days
      sameSite: "lax",
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
    });

    return result;
  }
};
