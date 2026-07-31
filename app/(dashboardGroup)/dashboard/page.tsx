// import { DashboardStats } from "./_components/DashboardStats";
// import { ServiceGrid } from "./_components/ServiceGrid";
// import { RecentBookings } from "./_components/RecentBookings";

import { getServices } from "@/service/getServices";
import { DashboardStats } from "./_components/customer/DashboardStats";
import { ServiceGrid } from "./_components/customer/ServiceGrid";

// import { getServices } from "@/service/getServices";

export default async function CustomerDashboard() {
  const services = await getServices();

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <DashboardStats />

      <ServiceGrid
        services={services.data}
      />


    </div>
  );
}