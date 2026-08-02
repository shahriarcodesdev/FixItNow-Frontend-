export const dynamic = "force-dynamic";
import { getProfile } from "@/service/getProfile";


import { ProfileForm } from "./_components/ProfileForm";
import { ProfileCard } from "./_components/ProfileCard";

export default async function TechnicianProfilePage() {
  const response = await getProfile();

  const profile = response.data.profile;

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Technician Profile
        </h1>

        <p className="text-muted-foreground mt-2">
          Update your personal information and technician details.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ProfileCard profile={profile} />

        <div className="lg:col-span-2">
          <ProfileForm profile={profile} />
        </div>
      </div>
    </div>
  );
}