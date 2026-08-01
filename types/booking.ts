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
// ---------------------------------------------


export type AdminBooking = {
  id: string;
  bookingDate: string;
  status: string;
  createdAt: string;

  customer: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    address: string | null;
  };

  technician: {
    id: string;

    user: {
      id: string;
      name: string;
      email: string;
      phone: string | null;
      address: string | null;
    };
  };

  service: {
    id: string;
    title: string;
    price: number;

    category: {
      id: string;
      name: string;
    };
  };

  payment: {
    id: string;
    status: string;
  } | null;

  review: {
    id: string;
    rating: number;
  } | null;
};

export type BookingResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: AdminBooking[];
};