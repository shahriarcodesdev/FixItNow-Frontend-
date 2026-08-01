"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";


type ActionState = {
  success: boolean;
  message: string;
} | null;



export async function createServiceAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {

  try {

    const cookieStore = await cookies();

    const token =
      cookieStore.get("accessToken")?.value;


    if (!token) {
      return {
        success: false,
        message: "Unauthorized user",
      };
    }



    const payload = {
      title: formData.get("title")?.toString(),

      description:
        formData.get("description")?.toString(),

      price:
        Number(formData.get("price")),

      categoryId:
        formData.get("categoryId")?.toString(),
    };



    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/services`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization:
            `Bearer ${token}`,
        },

        body: JSON.stringify(payload),
      }
    );



    const result = await res.json();



    if (!res.ok) {
      return {
        success: false,
        message:
          result.message ||
          "Service creation failed",
      };
    }



    revalidatePath(
      "/technician-dashboard/services"
    );


    return {
      success: true,
      message:
        "Service created successfully",
    };


  } catch (error) {

    console.log(error);


    return {
      success: false,
      message:
        "Something went wrong",
    };

  }

}