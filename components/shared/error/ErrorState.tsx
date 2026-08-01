"use client";

import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  message?: string;
};

export default function ErrorState({
  message = "Something went wrong.",
}: Props) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <TriangleAlert className="h-14 w-14 text-destructive" />

      <div>
        <h2 className="text-2xl font-bold">
          Oops!
        </h2>

        <p className="text-muted-foreground">
          {message}
        </p>
      </div>

      <Button
        onClick={() => window.location.reload()}
      >
        Try Again
      </Button>
    </div>
  );
}