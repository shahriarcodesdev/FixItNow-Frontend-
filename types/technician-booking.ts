export type TechnicianBooking = {
  id: string;

  bookingDate: string;

  status:
    | "PENDING"
    | "ACCEPTED"
    | "DECLINED"
    | "IN_PROGRESS"
    | "COMPLETED";

  customer: {
    name: string;
    email: string;
  };

  service: {
    title: string;
    price: number;
  };

  payment: {
    id: string;
  } | null;

  review: {
    id: string;
  } | null;
};