import { Users, UserCog, UserCheck, UserX } from "lucide-react";

import { getAllUsers } from "@/service/getAllUsers";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function AdminDashboardPage() {
  const users = await getAllUsers();

  const allUsers = users.data;

  const totalUsers = allUsers.length;

  const technicians =
    allUsers.filter(
      (u) => u.role === "TECHNICIAN"
    ).length;

  const customers =
    allUsers.filter(
      (u) => u.role === "CUSTOMER"
    ).length;

  const blocked =
    allUsers.filter(
      (u) => u.status === "BLOCKED"
    ).length;

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-muted-foreground mt-2">
          Monitor your platform and manage users.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Users</CardTitle>

            <Users className="h-5 w-5 text-primary" />
          </CardHeader>

          <CardContent>
            <h2 className="text-4xl font-bold">
              {totalUsers}
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              Technicians
            </CardTitle>

            <UserCog className="h-5 w-5 text-primary" />
          </CardHeader>

          <CardContent>
            <h2 className="text-4xl font-bold">
              {technicians}
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              Customers
            </CardTitle>

            <UserCheck className="h-5 w-5 text-primary" />
          </CardHeader>

          <CardContent>
            <h2 className="text-4xl font-bold">
              {customers}
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              Blocked Users
            </CardTitle>

            <UserX className="h-5 w-5 text-destructive" />
          </CardHeader>

          <CardContent>
            <h2 className="text-4xl font-bold">
              {blocked}
            </h2>
          </CardContent>
        </Card>

      </div>

    </div>
  );
}