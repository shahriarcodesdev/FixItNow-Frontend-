import Link from "next/link";

import { Button } from "@/components/ui/button";


import { getTechnicianBookings } from "@/service/getTechnicianBookings";

import { DashboardStats } from "./_components/DashboardStats";
import { RecentBookings } from "./_components/RecentBookings";

export default async function TechnicianDashboardPage() {
  const bookings = await getTechnicianBookings();

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div> 
          <h1 className="text-3xl font-bold">
            Technician Dashboard
          </h1>

          <p className="text-muted-foreground mt-2">
            Welcome back! Manage your bookings and track your work.
          </p>
        </div>


        <Button asChild>
          <Link href="/technician-dashboard/profile">
            My Profile
          </Link>
        </Button>

        <Button asChild>

<Link href="/technician-dashboard/services">

Manage Services

</Link>

</Button>


      </div>


      {/* Dashboard Statistics */}
      <DashboardStats
        bookings={bookings.data}
      />


      {/* Recent Bookings */}
      <RecentBookings
        bookings={bookings.data}
      />

    </div>
  );
}