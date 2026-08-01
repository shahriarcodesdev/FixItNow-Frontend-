import { cookies } from "next/headers";

export async function getCategories() {

  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;


  const response = await fetch(
    `${process.env.BACKEND_API_URL}/api/categories`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
      },
      cache: "no-store",
    }
  );


  const result =
    await response.json();


  console.log(
    "STATUS:",
    response.status
  );


  console.log(
    "CATEGORY API RESPONSE:",
    result
  );


  if (!response.ok) {
    throw new Error(
      result.message ||
      "Failed to fetch categories"
    );
  }


  return result;
}