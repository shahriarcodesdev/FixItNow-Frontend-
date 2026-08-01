"use server";

import { cookies } from "next/headers";


export async function deleteServiceAction(
  serviceId: string
) {

  const cookieStore = await cookies();


  const token =
    cookieStore.get("accessToken")?.value;



  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services/${serviceId}`,
    {
      method: "DELETE",

      headers:{
        Authorization:`Bearer ${token}`,
      },

      cache:"no-store",
    }
  );



  const result =
    await res.json();



  if(!res.ok){

    throw new Error(
      result.message ||
      "Failed to delete service"
    );

  }



  return result;

}