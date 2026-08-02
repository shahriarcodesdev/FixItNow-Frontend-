# API Integration

## Authentication

| Frontend | Backend |
|----------|----------|
| Login | POST /api/auth/login |
| Register | POST /api/users/register |
| Logout | POST /api/auth/logout |
| Profile | GET /api/users/me |
| Refresh Token | POST /api/auth/refresh-token |

---

## Customer

| Frontend | Backend |
|----------|----------|
| Dashboard | GET /api/users/me |
| All Services | GET /api/services/allservices |
| Service Details | GET /api/services/:serviceId |
| Book Service | POST /api/bookings/create |
| My Bookings | GET /api/bookings/getallbookings |
| Booking Details | GET /api/bookings/booking-details/:id |
| Submit Review | POST /api/reviews |

---

## Technician

| Frontend | Backend |
|----------|----------|
| Dashboard | GET /api/users/me |
| Update Profile | PUT /api/users/technician-profile |
| Update Availability | PUT /api/users/technician-availability |
| My Services | GET /api/services/my-services |
| Create Service | POST /api/services |
| Update Service | PATCH /api/services/:id |
| Delete Service | DELETE /api/services/:id |
| Technician Bookings | GET /api/users/technician-bookings |
| Update Booking Status | PATCH /api/users/update-technician-bookings/:id |

---

## Public

| Frontend | Backend |
|----------|----------|
| Home | GET /api/services/allservices |
| Services | GET /api/services/allservices |
| Service Details | GET /api/services/:serviceId |
| Technicians | GET /api/services/technicians |
| Technician Profile | GET /api/services/technicians/:id |
| Reviews | GET /api/reviews |

---

## Admin

| Frontend | Backend |
|----------|----------|
| Dashboard | GET /api/admin |
| User Management | GET /api/admin |
| Ban / Unban User | PUT /api/admin/users/:id |
| Booking Management | GET /api/admin/allbookings |
| Category Management | GET /api/admin/allcategories |
| Create Category | POST /api/admin/createcategories |

---

## Payment

| Frontend | Backend |
|----------|----------|
| Create Stripe Checkout | POST /api/payments/create/:bookingId |
| Payment Success | /payment/success |
| Payment Cancel | /payment/cancel |