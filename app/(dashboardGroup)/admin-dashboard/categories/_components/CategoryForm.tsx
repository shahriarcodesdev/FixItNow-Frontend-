"use client";

import { useActionState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import { createCategoryAction } from "../_actions/createCategoryAction";

type ActionState = {
  success: boolean;
  message: string;
} | null;

export function CategoryForm() {
  const [state, action, pending] =
    useActionState<ActionState, FormData>(
      createCategoryAction,
      null
    );

  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Create Category
        </CardTitle>

      </CardHeader>

      <CardContent>

        <form
          action={action}
          className="space-y-5"
        >

          <div>

            <Label>
              Category Name
            </Label>

            <Input
              name="name"
              placeholder="Electrical"
              required
            />

          </div>

          <Button
            className="w-full"
            disabled={pending}
          >
            {pending
              ? "Creating..."
              : "Create Category"}
          </Button>

          {state?.message && (
            <p
              className={
                state.success
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {state.message}
            </p>
          )}

        </form>

      </CardContent>

    </Card>
  );
}