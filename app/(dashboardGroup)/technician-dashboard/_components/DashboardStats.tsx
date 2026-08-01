"use client";

import {
  CalendarCheck,
  Clock3,
  CircleCheck,
  Loader,
  Star,
  Briefcase,
} from "lucide-react";

import { StatCard } from "./StatCard";
import { TechnicianBooking } from "@/types/technician-booking";

type Props = {
  bookings: TechnicianBooking[];
};

export function DashboardStats({
  bookings,
}: Props) {
  const total = bookings.length;

  const pending = bookings.filter(
    (b) => b.status === "PENDING"
  ).length;

  const accepted = bookings.filter(
    (b) => b.status === "ACCEPTED"
  ).length;

  const inProgress = bookings.filter(
    (b) => b.status === "IN_PROGRESS"
  ).length;

  const completed = bookings.filter(
    (b) => b.status === "COMPLETED"
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <StatCard
        title="Total Jobs"
        value={total}
        icon={Briefcase}
      />

      <StatCard
        title="Pending"
        value={pending}
        icon={Clock3}
      />

      <StatCard
        title="Accepted"
        value={accepted}
        icon={CalendarCheck}
      />

      <StatCard
        title="In Progress"
        value={inProgress}
        icon={Loader}
      />

      <StatCard
        title="Completed"
        value={completed}
        icon={CircleCheck}
      />

      <StatCard
        title="Rating"
        value="⭐ 5.0"
        icon={Star}
      />
    </div>
  );
}