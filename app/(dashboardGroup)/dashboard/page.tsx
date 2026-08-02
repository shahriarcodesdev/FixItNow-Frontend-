export const dynamic = "force-dynamic";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Wrench, Sparkles } from "lucide-react";

import { getServices } from "@/service/getServices";

import { ServiceGrid } from "./_components/customer/ServiceGrid";

export default async function CustomerDashboard() {
  const services = await getServices();

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* Hero Section */}
      <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background shadow-sm">
        <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="space-y-4">

            <Badge
              variant="secondary"
              className="w-fit"
            >
              Customer Dashboard
            </Badge>

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-primary/10 p-3">
                <Wrench className="h-7 w-7 text-primary" />
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  Welcome Back 👋
                </h1>

                <p className="mt-2 max-w-2xl text-muted-foreground">
                  Discover trusted technicians, book professional
                  services, and easily manage all your bookings in one
                  place.
                </p>
              </div>

            </div>

          </div>

          <div className="text-right">

            <div className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-5 py-4">

              <Sparkles className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Available Services
                </p>

                <h2 className="text-4xl font-bold">
                  {services?.data?.length ?? 0}
                </h2>
              </div>

            </div>

          </div>

        </CardContent>
      </Card>

      {/* Statistics */}
      {/* <DashboardStats /> */}

      {/* Available Services */}
      <section className="space-y-5">

        <div className="flex items-center justify-between">

         

          <Badge variant="outline">
            {services?.data?.length ?? 0} Services
          </Badge>

        </div>

        

<ServiceGrid services={services?.data ?? []} />

      </section>

    </div>
  );
}