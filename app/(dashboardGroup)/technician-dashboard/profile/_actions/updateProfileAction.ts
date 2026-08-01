"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { ActionState } from "@/types/action";


export async function updateProfileAction(
  state: ActionState,
  formData: FormData
): Promise<ActionState> {

  try {

    const cookieStore = await cookies();

    const token =
      cookieStore.get("accessToken")?.value;


    if (!token) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }



    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      bio: formData.get("bio"),
      experience: Number(
        formData.get("experience")
      ),

      hourlyRate:
        formData.get("hourlyRate")
          ? Number(formData.get("hourlyRate"))
          : null,
    };



    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/users/technician-profile`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",

          Authorization:
            `Bearer ${token}`,
        },

        body: JSON.stringify(payload),
      }
    );



    const result = await response.json();



    if (!response.ok) {

      return {
        success: false,
        message:
          result.message ||
          "Update failed",
      };

    }



    revalidatePath(
      "/technician-dashboard/profile"
    );


    return {
      success: true,
      message:
        "Profile updated successfully",
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