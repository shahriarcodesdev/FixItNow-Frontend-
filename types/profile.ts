export type TechnicianProfile = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  role: "TECHNICIAN";
  status: "ACTIVE" | "BANNED";

  technician: {
    id: string;
    userId: string;
    bio: string | null;
    experience: number;
    hourlyRate: number | null;
    averageRating: number;
    createdAt: string;
  };
};

export type ProfileResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    profile: TechnicianProfile;
  };
};