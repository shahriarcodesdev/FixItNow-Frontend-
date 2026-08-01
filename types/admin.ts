export type AdminUser = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  role: "ADMIN" | "TECHNICIAN" | "CUSTOMER";
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
  updatedAt: string;

  technician: {
    id: string;
    bio: string | null;
    experience: number;
    hourlyRate: number | null;
    averageRating: number;
  } | null;
};

export type GetAllUsersResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: AdminUser[];
};