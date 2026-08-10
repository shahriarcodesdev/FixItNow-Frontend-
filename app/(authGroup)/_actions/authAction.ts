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

  let redirectPath: string | null = null;

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

    cookieStore.set(
      "accessToken",
      result.data.accessToken,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite:
          process.env.NODE_ENV === "production"
            ? "none"
            : "lax",
        maxAge: 60 * 60 * 24,
        path: "/",
      },
    );

    cookieStore.set(
      "refreshToken",
      result.data.refreshToken,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite:
          process.env.NODE_ENV === "production"
            ? "none"
            : "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      },
    );

    const decodedToken = jwt.decode(
      result.data.accessToken,
    ) as JwtPayload;

    switch (decodedToken?.role) {
      case "CUSTOMER":
        redirectPath = "/dashboard";
        break;

      case "TECHNICIAN":
        redirectPath = "/technician-dashboard";
        break;

      case "ADMIN":
        redirectPath = "/admin-dashboard";
        break;

      default:
        return {
          success: false,
          message: "Invalid user role.",
        };
    }
  } catch (error) {
    console.error("Login error:", error);

    return {
      success: false,
      message:
        "Something went wrong. Please try again.",
    };
  }

  if (redirectPath) {
    redirect(redirectPath);
  }

  return {
    success: true,
    message: "Login successful.",
  };
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
      message:
        "Something went wrong. Please try again.",
    };
  }
};

export const googleLoginAction = async (
  idtoken: string,
) => {
  let redirectPath: string | null = null;

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idtoken,
        }),
        cache: "no-store",
      },
    );

    const result = await res.json();

    if (!result.success) {
      return result;
    }

    const cookieStore = await cookies();

    cookieStore.set(
      "accessToken",
      result.data.accessToken,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite:
          process.env.NODE_ENV === "production"
            ? "none"
            : "lax",
        maxAge: 60 * 60 * 24,
        path: "/",
      },
    );

    cookieStore.set(
      "refreshToken",
      result.data.refreshToken,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite:
          process.env.NODE_ENV === "production"
            ? "none"
            : "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      },
    );

    const decodedToken = jwt.decode(
      result.data.accessToken,
    ) as JwtPayload;

    switch (decodedToken?.role) {
      case "CUSTOMER":
        redirectPath = "/dashboard";
        break;

      case "TECHNICIAN":
        redirectPath = "/technician-dashboard";
        break;

      case "ADMIN":
        redirectPath = "/admin-dashboard";
        break;

      default:
        return {
          success: false,
          message: "Invalid user role.",
        };
    }
  } catch (error) {
    console.error(
      "Google login error:",
      error,
    );

    return {
      success: false,
      message:
        "Something went wrong. Please try again.",
    };
  }

  if (redirectPath) {
    redirect(redirectPath);
  }

  return {
    success: true,
    message: "Google login successful.",
  };
};