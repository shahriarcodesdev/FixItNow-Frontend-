"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";

import { updateUserStatusAction } from "../_actions/updateUserStatusAction";

type Props = {
  id: string;
  status: string;
};

type ActionState = {
  success: boolean;
  message: string;
} | null;

export function BanUserButton({
  id,
  status,
}: Props) {
  const [state, action, pending] =
    useActionState<ActionState, FormData>(
      updateUserStatusAction,
      null
    );

  return (
    <form action={action}>
      <input
        type="hidden"
        name="userId"
        value={id}
      />

      <input
        type="hidden"
        name="status"
        value={
          status === "ACTIVE"
            ? "BLOCKED"
            : "ACTIVE"
        }
      />

      <Button
        type="submit"
        size="sm"
        variant={
          status === "ACTIVE"
            ? "destructive"
            : "default"
        }
        disabled={pending}
      >
        {pending
          ? "Updating..."
          : status === "ACTIVE"
            ? "Ban"
            : "Unban"}
      </Button>

      {state?.message && (
        <p className="mt-2 text-xs text-muted-foreground">
          {state.message}
        </p>
      )}
    </form>
  );
}