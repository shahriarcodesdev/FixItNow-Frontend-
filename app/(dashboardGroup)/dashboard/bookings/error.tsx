"use client";

import ErrorState from "@/components/shared/error/ErrorState";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <ErrorState message={error.message} />
  );
}