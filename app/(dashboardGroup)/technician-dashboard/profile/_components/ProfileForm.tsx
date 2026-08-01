"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TechnicianProfile } from "@/types/profile";

import { updateProfileAction } from "../_actions/updateProfileAction";


type Props = {
  profile: TechnicianProfile;
};


type ProfileActionState = {
  success: boolean;
  message: string;
} | null;



export function ProfileForm({
  profile,
}: Props) {

  const router = useRouter();


  const [state, action, pending] =
  useActionState(
    updateProfileAction,
    null
  );


  const [formData, setFormData] = useState({
    name: profile.name,
    phone: profile.phone || "",
    address: profile.address || "",
    bio: profile.technician.bio || "",
    experience:
      profile.technician.experience.toString(),

    hourlyRate:
      profile.technician.hourlyRate?.toString() || "",
  });



  useEffect(() => {

    if (!state) return;


    if (state.success) {

      toast.success(state.message);

      router.refresh();

    } else {

      toast.error(state.message);

    }


  }, [state, router]);




  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Update Profile
        </CardTitle>

      </CardHeader>


      <CardContent>


        <form
          action={action}
          className="space-y-5"
        >


          <div className="grid gap-5 md:grid-cols-2">


            <div>
              <Label>
                Name
              </Label>

              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>



            <div>

              <Label>
                Phone
              </Label>

              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>




            <div>

              <Label>
                Address
              </Label>

              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
              />

            </div>




            <div>

              <Label>
                Experience
              </Label>


              <Input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />


            </div>




            <div>

              <Label>
                Hourly Rate
              </Label>


              <Input
                type="number"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
              />


            </div>


          </div>




          <div>

            <Label>
              Bio
            </Label>


            <Textarea

              rows={5}

              name="bio"

              value={formData.bio}

              onChange={handleChange}

            />


          </div>





          <Button

            className="w-full"

            disabled={pending}

          >

            {pending
              ? "Updating..."
              : "Update Profile"}

          </Button>




        </form>


      </CardContent>


    </Card>
  );
}