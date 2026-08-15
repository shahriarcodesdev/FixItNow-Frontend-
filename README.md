# 🔧 FixItNow - Home Service Booking Platform

FixItNow is a full-stack home service marketplace that connects customers with skilled technicians for home maintenance and repair services. Customers can book services, technicians can manage their services and bookings, and administrators can oversee the entire platform.

---

## 🌐 Live Demo

**Frontend:** https://fix-it-now-frontend-phi.vercel.app

**Backend:** https://fix-it-now-backend-seven.vercel.app

---

## 👨‍💻 Admin Credentials

| Email | Password |
|-------|----------|
| admin@gmail.com | 1234546 |

---

## ✨ Features

### 👤 Customer

- User Authentication
- Browse Available Services
- View Service Details
- Book Services
- Secure Stripe Payment
- View Booking History
- Submit Reviews
- Manage Profile

---

### 🔧 Technician

- Technician Dashboard
- Update Technician Profile
- Manage Availability
- Create Services
- Update Services
- Delete Services
- View Assigned Bookings
- Update Booking Status

---

### 🛡️ Admin

- Admin Dashboard
- View Platform Statistics
- User Management
- Ban / Unban Users
- Booking Management
- Category Management
- Create Service Categories

---

## 🚀 Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide React
- Sonner
- React Hook Form
- Zod

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Bcrypt
- Stripe

---

## 📁 Project Structure

```
app
│
├── (publicGroup)
│   ├── services
│   ├── technicians
│   ├── about
│   ├── contact
│   └── payment
│
├── (authGroup)
│   ├── login
│   └── register
│
└── (dashboardGroup)
    ├── dashboard
    ├── technician-dashboard
    └── admin-dashboard
```

---

## 🔑 Main Functionalities

### Authentication

- Register
- Login
- Logout
- Protected Routes
- JWT Authentication

---

### Customer

- Browse Services
- Book Services
- Stripe Checkout
- Booking History
- Reviews

---

### Technician

- Manage Services
- Update Availability
- Manage Bookings
- Update Profile

---

### Admin

- Dashboard Statistics
- User Management
- Booking Management
- Category Management

---

## 💳 Payment

Stripe Checkout is integrated for secure online payments.

- Payment Session Creation
- Success Page
- Cancel Page

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/fixitnow-frontend.git
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 📡 API Documentation

See:

```
API_INTEGRATION.md
```

for complete frontend ↔ backend endpoint mapping.

---

## 📱 Responsive Design

The application is fully responsive and optimized for

- Desktop
- Tablet
- Mobile

---

## 📌 Future Improvements

- Search & Filtering
- Notifications
- Wishlist
- Live Chat
- Technician Verification
- Analytics Dashboard

---

## 👨‍💻 Developed By

**Shahriar**

Aspiring Full-Stack MERN Developer

GitHub: https://github.com/your-github

LinkedIn: https://linkedin.com/in/your-linkedin

Portfolio: https://your-portfolio-link.com

---

## 📄 License

This project is developed for educational purposes as part of the Programming Hero Level 2 Web Development course.
