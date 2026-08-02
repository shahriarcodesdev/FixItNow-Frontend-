export const dynamic = "force-dynamic";
import { getAllUsers } from "@/service/getAllUsers";
import { UsersTable } from "./_components/UsersTable";



export default async function UsersPage() {
  const users =
    await getAllUsers();

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          User Management
        </h1>

        <p className="text-muted-foreground">
          Manage all customers,
          technicians and admins.
        </p>
      </div>

      <UsersTable
        users={users.data}
      />

    </div>
  );
}