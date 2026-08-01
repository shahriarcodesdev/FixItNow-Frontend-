"use client";

import { useState } from "react";

import { AdminUser } from "@/types/admin";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import { Badge } from "@/components/ui/badge";
import { BanUserButton } from "./BanUserButton";



type Props = {
  users: AdminUser[];
};

export function UsersTable({
  users,
}: Props) {
  const [search, setSearch] =
    useState("");

  const filteredUsers =
    users.filter((user) => {
      const value =
        search.toLowerCase();

      return (
        user.name
          .toLowerCase()
          .includes(value) ||
        user.email
          .toLowerCase()
          .includes(value)
      );
    });

  return (
    <div className="space-y-5">

      <Input
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="rounded-xl border">

        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>
                Name
              </TableHead>

              <TableHead>
                Email
              </TableHead>

              <TableHead>
                Role
              </TableHead>

              <TableHead>
                Status
              </TableHead>

              <TableHead>
                Action
              </TableHead>

            </TableRow>

          </TableHeader>

          <TableBody>

            {filteredUsers.map(
              (user) => (
                <TableRow
                  key={user.id}
                >
                  <TableCell className="font-medium">
                    {user.name}
                  </TableCell>

                  <TableCell>
                    {user.email}
                  </TableCell>

                  <TableCell>

                    <Badge
                      variant={
                        user.role ===
                        "ADMIN"
                          ? "default"
                          : user.role ===
                              "TECHNICIAN"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {user.role}
                    </Badge>

                  </TableCell>

                  <TableCell>

                    <Badge
                      variant={
                        user.status ===
                        "ACTIVE"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {user.status}
                    </Badge>

                  </TableCell>

                  <TableCell>

                    {user.role ===
                    "ADMIN" ? (
                      "-"
                    ) : (
                      <BanUserButton
                        id={user.id}
                        status={
                          user.status
                        }
                      />
                    )}

                  </TableCell>

                </TableRow>
              )
            )}

          </TableBody>

        </Table>

      </div>

    </div>
  );
}