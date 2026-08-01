import Link from "next/link";

import {
  Users,
  UserCog,
  UserCheck,
  UserX,
  CalendarCheck,
  Layers,
  type LucideIcon,
} from "lucide-react";

import { getAllUsers } from "@/service/getAllUsers";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";


type User = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "TECHNICIAN" | "CUSTOMER";
  status: "ACTIVE" | "BLOCKED";
};



type StatCardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
};



type ManagementCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};




export default async function AdminDashboardPage() {


  const users = await getAllUsers();


  const allUsers: User[] =
    users.data || [];



  const totalUsers =
    allUsers.length;



  const technicians =
    allUsers.filter(
      (user) =>
        user.role === "TECHNICIAN"
    ).length;



  const customers =
    allUsers.filter(
      (user) =>
        user.role === "CUSTOMER"
    ).length;



  const blocked =
    allUsers.filter(
      (user) =>
        user.status === "BLOCKED"
    ).length;




  return (

    <div
      className="
      mx-auto
      max-w-7xl
      space-y-10
      "
    >


      {/* Header */}

      <Card
        className="
        border-none
        bg-gradient-to-r
        from-primary/10
        via-primary/5
        to-background
        "
      >

        <CardContent
          className="
          flex
          flex-col
          gap-6
          p-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          "
        >


          <div>

            <h1
              className="
              text-4xl
              font-bold
              tracking-tight
              "
            >
              Admin Dashboard
            </h1>


            <p
              className="
              mt-2
              text-muted-foreground
              "
            >
              Manage users, bookings and services from one place.
            </p>


          </div>



          <Button asChild>

            <Link href="/admin-dashboard/users">
              Manage Users
            </Link>

          </Button>



        </CardContent>

      </Card>






      {/* Statistics */}

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
        "
      >


        <StatCard
          title="Total Users"
          value={totalUsers}
          icon={Users}
        />


        <StatCard
          title="Technicians"
          value={technicians}
          icon={UserCog}
        />


        <StatCard
          title="Customers"
          value={customers}
          icon={UserCheck}
        />


        <StatCard
          title="Blocked Users"
          value={blocked}
          icon={UserX}
        />


      </div>








      {/* Management Section */}

      <div
        className="
        grid
        gap-6
        md:grid-cols-3
        "
      >


        <ManagementCard
          title="User Management"
          description="Manage users, roles and account status."
          icon={Users}
          href="/admin-dashboard/users"
        />



        <ManagementCard
          title="Booking Management"
          description="Monitor bookings, payments and status."
          icon={CalendarCheck}
          href="/admin-dashboard/bookings"
        />



        <ManagementCard
          title="Category Management"
          description="Create and manage service categories."
          icon={Layers}
          href="/admin-dashboard/categories"
        />



      </div>




    </div>

  );

}









function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {


  return (

    <Card
      className="
      transition
      hover:shadow-md
      "
    >

      <CardHeader
        className="
        flex
        flex-row
        items-center
        justify-between
        "
      >

        <CardTitle>
          {title}
        </CardTitle>


        <Icon
          className="
          h-5
          w-5
          text-primary
          "
        />


      </CardHeader>



      <CardContent>

        <p
          className="
          text-4xl
          font-bold
          "
        >
          {value}
        </p>


      </CardContent>


    </Card>

  );

}









function ManagementCard({
  title,
  description,
  icon: Icon,
  href,
}: ManagementCardProps) {


  return (

    <Card
      className="
      group
      transition-all
      hover:-translate-y-1
      hover:shadow-lg
      "
    >


      <CardHeader>


        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-primary/10
          "
        >

          <Icon
            className="
            h-6
            w-6
            text-primary
            "
          />

        </div>




        <CardTitle
          className="
          mt-4
          text-xl
          "
        >

          {title}

        </CardTitle>




        <p
          className="
          text-sm
          leading-relaxed
          text-muted-foreground
          "
        >

          {description}

        </p>



      </CardHeader>





      <CardContent>


        <Button
          asChild
          variant="outline"
          className="w-full"
        >

          <Link href={href}>
            Manage
          </Link>


        </Button>


      </CardContent>



    </Card>

  );

}