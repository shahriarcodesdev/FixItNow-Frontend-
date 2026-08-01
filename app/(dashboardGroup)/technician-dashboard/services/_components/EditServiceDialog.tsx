"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { TechnicianService } from "@/types/service";

import { updateServiceAction } from "../_actions/updateServiceAction";

type ActionState = {
  success: boolean;
  message: string;
} | null;

type Props = {
  service: TechnicianService;
};

export function EditServiceDialog({
  service,
}: Props) {
  const [state, action, pending] =
    useActionState<ActionState, FormData>(
      updateServiceAction,
      null
    );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex-1"
        >
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Edit Service
          </DialogTitle>
        </DialogHeader>

        <form
          action={action}
          className="space-y-5"
        >
          <input
            type="hidden"
            name="id"
            defaultValue={service.id}
          />

          <div>
            <Label>
              Title
            </Label>

            <Input
              name="title"
              defaultValue={service.title}
              required
            />
          </div>

          <div>
            <Label>
              Description
            </Label>

            <Textarea
              rows={5}
              name="description"
              defaultValue={
                service.description
              }
              required
            />
          </div>

          <div>
            <Label>
              Price
            </Label>

            <Input
              type="number"
              name="price"
              defaultValue={service.price}
              required
            />
          </div>

          <div>
            <Label>
              Category ID
            </Label>

            <Input
              name="categoryId"
              defaultValue={
                service.category.id
              }
              required
            />
          </div>

          <Button
            className="w-full"
            disabled={pending}
          >
            {pending
              ? "Updating..."
              : "Save Changes"}
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
      </DialogContent>
    </Dialog>
  );
}