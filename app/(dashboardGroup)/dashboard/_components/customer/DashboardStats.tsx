import {
  CalendarCheck,
  CreditCard,
  CircleCheckBig,
  Star,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type DashboardStatsProps = {
  activeBookings?: number;
  pendingPayments?: number;
  completedServices?: number;
  totalReviews?: number;
};

export function DashboardStats({
  activeBookings = 0,
  pendingPayments = 0,
  completedServices = 0,
  totalReviews = 0,
}: DashboardStatsProps) {
  const stats = [
    {
      title: "Active Bookings",
      value: activeBookings,
      icon: CalendarCheck,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Pending Payments",
      value: pendingPayments,
      icon: CreditCard,
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      title: "Completed Services",
      value: completedServices,
      icon: CircleCheckBig,
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Reviews Given",
      value: totalReviews,
      icon: Star,
      color: "bg-yellow-500/10 text-yellow-600",
    },
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Customer Dashboard</h2>

        <p className="text-muted-foreground">
          Track your bookings and discover trusted home services.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h3>
                </div>

                <div className={`rounded-xl p-4 ${item.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}