"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

type LoginState = {
  success: boolean;
  message: string;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  prevState: LoginState,
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = {
    email,
    password,
  };

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    const result = await res.json();

    if (!result.success) {
      return result;
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    const decodedToken = jwt.decode(
      result.data.accessToken,
    ) as JwtPayload;

    if (decodedToken?.role === "CUSTOMER") {
      redirect("/dashboard");
    }

    if (decodedToken?.role === "TECHNICIAN") {
      redirect("/technician-dashboard");
    }

    if (decodedToken?.role === "ADMIN") {
      redirect("/admin-dashboard");
    }

    return result;

  } catch (error) {
    console.error("Login error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};


export const registerAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  };

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    const result = await res.json();

    return result;

  } catch (error) {
    console.error("Register error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};