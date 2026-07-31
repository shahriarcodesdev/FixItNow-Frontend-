import Link from "next/link";
import {
  Wrench,
  PlugZap,
  Paintbrush,
  Hammer,
  Sparkles,
  Droplets,
  AirVent,
  Tv,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Electrical",
    icon: PlugZap,
    count: "25+ Services",
  },
  {
    title: "Plumbing",
    icon: Droplets,
    count: "18+ Services",
  },
  {
    title: "Painting",
    icon: Paintbrush,
    count: "15+ Services",
  },
  {
    title: "Carpenter",
    icon: Hammer,
    count: "20+ Services",
  },
  {
    title: "Cleaning",
    icon: Sparkles,
    count: "30+ Services",
  },
  {
    title: "AC Repair",
    icon: AirVent,
    count: "12+ Services",
  },
  {
    title: "Appliance",
    icon: Tv,
    count: "17+ Services",
  },
  {
    title: "General",
    icon: Wrench,
    count: "40+ Services",
  },
];

export function Categories() {
  return (
    <section className="container mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Browse Service Categories
        </h2>

        <p className="text-muted-foreground mt-3">
          Choose the service you need from verified professionals.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.title}
              href={`/services?category=${category.title}`}
            >
              <Card className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <CardContent className="flex flex-col items-center gap-4 py-10">
                  <div className="rounded-full bg-primary/10 p-5">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {category.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}