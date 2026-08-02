export const dynamic = "force-dynamic";
import Link from "next/link";

import {
  User,
  BriefcaseBusiness,
  CalendarClock,
  ArrowRight,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { getTechnicianBookings } from "@/service/getTechnicianBookings";

import { RecentBookings } from "./_components/RecentBookings";

export default async function TechnicianDashboardPage() {
  const bookings = await getTechnicianBookings();

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* Hero */}
      <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background shadow-sm">
        <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Technician Dashboard
            </h1>

            <p className="mt-2 max-w-2xl text-muted-foreground">
              Welcome back! Manage your profile, services,
              availability, and customer bookings from one place.
            </p>
          </div>

          <div className="rounded-xl bg-primary/10 px-6 py-4">
            <p className="text-sm text-muted-foreground">
              Total Bookings
            </p>

            <h2 className="text-4xl font-bold">
              {bookings?.data?.length ?? 0}
            </h2>
          </div>

        </CardContent>
      </Card>

      {/* Quick Actions */}

      <div>

        <h2 className="mb-5 text-2xl font-bold">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {/* Profile */}

          <Link href="/technician-dashboard/profile">

            <Card className="cursor-pointer transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">

              <CardContent className="flex items-center justify-between p-6">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-950">

                    <User className="h-7 w-7 text-blue-600" />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      My Profile
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Update your personal information
                    </p>

                  </div>

                </div>

                <ArrowRight className="h-5 w-5 text-muted-foreground" />

              </CardContent>

            </Card>

          </Link>

          {/* Services */}

          <Link href="/technician-dashboard/services">

            <Card className="cursor-pointer transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">

              <CardContent className="flex items-center justify-between p-6">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-green-100 p-3 dark:bg-green-950">

                    <BriefcaseBusiness className="h-7 w-7 text-green-600" />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      My Services
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Create, edit and delete services
                    </p>

                  </div>

                </div>

                <ArrowRight className="h-5 w-5 text-muted-foreground" />

              </CardContent>

            </Card>

          </Link>

          {/* Availability */}

          <Link href="/technician-dashboard/availability">

            <Card className="cursor-pointer transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">

              <CardContent className="flex items-center justify-between p-6">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-orange-100 p-3 dark:bg-orange-950">

                    <CalendarClock className="h-7 w-7 text-orange-600" />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Availability
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Set your working schedule
                    </p>

                  </div>

                </div>

                <ArrowRight className="h-5 w-5 text-muted-foreground" />

              </CardContent>

            </Card>

          </Link>

        </div>

      </div>

      {/* Recent Bookings */}

      <div>

        <h2 className="mb-5 text-2xl font-bold">
          Recent Bookings
        </h2>

        <RecentBookings bookings={bookings.data} />

      </div>

    </div>
  );
}