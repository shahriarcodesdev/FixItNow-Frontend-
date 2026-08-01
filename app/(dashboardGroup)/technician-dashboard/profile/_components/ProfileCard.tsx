import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Star,
  User,
} from "lucide-react";

import { TechnicianProfile } from "@/types/profile";

type Props = {
  profile: TechnicianProfile;
};

export function ProfileCard({
  profile,
}: Props) {
  return (
    <Card className="h-fit">
      <CardHeader className="items-center text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <User className="h-12 w-12 text-primary" />
        </div>

        <CardTitle className="mt-3 text-2xl">
          {profile.name}
        </CardTitle>

        <Badge>{profile.role}</Badge>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-muted-foreground" />

          <span className="text-sm">
            {profile.email}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-muted-foreground" />

          <span className="text-sm">
            {profile.phone || "Not Added"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-muted-foreground" />

          <span className="text-sm">
            {profile.address || "Not Added"}
          </span>
        </div>

        <div className="border-t pt-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />

              <span>Experience</span>
            </div>

            <Badge variant="secondary">
              {profile.technician.experience} Years
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />

              <span>Rating</span>
            </div>

            <Badge variant="secondary">
              {profile.technician.averageRating.toFixed(
                1
              )}
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <span>Hourly Rate</span>

            <Badge>
              {profile.technician.hourlyRate
                ? `৳${profile.technician.hourlyRate}/hr`
                : "Not Set"}
            </Badge>
          </div>
        </div>

        <div className="border-t pt-5">
          <p className="mb-2 text-sm font-medium">
            Bio
          </p>

          <p className="text-sm text-muted-foreground leading-6">
            {profile.technician.bio ||
              "No bio added yet."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}