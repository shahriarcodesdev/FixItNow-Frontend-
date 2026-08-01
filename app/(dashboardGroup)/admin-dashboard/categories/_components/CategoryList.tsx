"use client";

import { useState } from "react";

import { Category } from "@/types/category";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

type Props = {
  categories: Category[];
};

export function CategoryList({
  categories,
}: Props) {
  const [search, setSearch] =
    useState("");

  const filtered =
    categories.filter((category) =>
      category.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Categories
        </CardTitle>

        <CardDescription>
          Total Categories:{" "}
          {categories.length}
        </CardDescription>

      </CardHeader>

      <CardContent>

        <div className="mb-5">

          <Input
            placeholder="Search category..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        <div className="rounded-lg border">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>
                  #
                </TableHead>

                <TableHead>
                  Category Name
                </TableHead>

                <TableHead>
                  Status
                </TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>

              {filtered.length ===
              0 ? (
                <TableRow>

                  <TableCell
                    colSpan={3}
                    className="py-8 text-center text-muted-foreground"
                  >
                    No categories found.
                  </TableCell>

                </TableRow>
              ) : (
                filtered.map(
                  (
                    category,
                    index
                  ) => (
                    <TableRow
                      key={
                        category.id
                      }
                    >
                      <TableCell>
                        {index + 1}
                      </TableCell>

                      <TableCell className="font-medium">
                        {
                          category.name
                        }
                      </TableCell>

                      <TableCell>

                        <Badge>
                          Active
                        </Badge>

                      </TableCell>

                    </TableRow>
                  )
                )
              )}

            </TableBody>

          </Table>

        </div>

      </CardContent>

    </Card>
  );
}