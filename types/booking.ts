export type Booking = {
  id: string;
  bookingDate: string;
  status: string;

  service: {
    id: string;
    title: string;
    description: string;
    price: number;
  };

  technician: {
    id: string;
    bio: string;
    experience: number;
    averageRating: number;

    user: {
      id: string;
      name: string;
      email: string;
      phone: string | null;
    };
  };

  payment: {
    id: string;
    amount: number;
    status: string;
    transactionId: string;
  } | null;

  review: {
    id: string;
    rating: number;
    comment: string;
  } | null;
};