import { cookies } from "next/headers";


export async function getMyServices() {

  const cookieStore = await cookies();


  const token =
    cookieStore.get("accessToken")?.value;



  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services/my-services`,
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
    await res.json();



  console.log(
    "MY SERVICES RESPONSE:",
    result
  );



  if (!res.ok) {

    throw new Error(
      result.message ||
      "Failed to fetch services"
    );

  }



  return result;

}