import Link from "next/link";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
  Star,
  BriefcaseBusiness,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

const technicians = [
  {
    id: 1,
    name: "John Smith",
    skill: "Electrician",
    experience: "8 Years",
    rating: "4.9",
  },
  {
    id: 2,
    name: "David Khan",
    skill: "Plumber",
    experience: "6 Years",
    rating: "4.8",
  },
  {
    id: 3,
    name: "Alex Rahman",
    skill: "AC Technician",
    experience: "5 Years",
    rating: "5.0",
  },
];

export default function TechniciansPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 py-8">
      {/* Hero */}
      <div className="rounded-3xl border bg-gradient-to-r from-primary/10 via-background to-primary/5 p-10 text-center">
        <Badge className="mb-4">
          Trusted Professionals
        </Badge>

        <h1 className="text-5xl font-bold tracking-tight">
          Meet Our Expert Technicians
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Browse experienced professionals specializing in home
          repair, electrical work, plumbing, AC servicing and
          more.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {technicians.map((tech) => (
          <Card
            key={tech.id}
            className="group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <CardContent className="space-y-6 p-6">
              <div className="flex items-start justify-between">
                <Avatar className="h-20 w-20 border">
                  <AvatarFallback className="bg-primary text-2xl text-primary-foreground">
                    {tech.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <Badge
                  variant="secondary"
                  className="gap-1"
                >
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  {tech.rating}
                </Badge>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">
                    {tech.name}
                  </h2>

                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>

                <p className="mt-1 text-muted-foreground">
                  {tech.skill}
                </p>
              </div>

              <div className="rounded-xl bg-muted/40 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Experience
                  </span>

                  <span className="flex items-center gap-2 font-medium">
                    <BriefcaseBusiness className="h-4 w-4 text-primary" />
                    {tech.experience}
                  </span>
                </div>
              </div>

              <Button
                asChild
                className="w-full"
              >
                <Link href={`/technicians/${tech.id}`}>
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}