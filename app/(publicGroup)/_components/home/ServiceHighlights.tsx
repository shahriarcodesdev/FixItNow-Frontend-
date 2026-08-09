import Link from "next/link";
import {
  AirVent,
  Droplets,
  Hammer,
  Paintbrush,
  PlugZap,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Electrical Services",
    description:
      "Safe and reliable electrical repairs, installations, and maintenance.",
    category: "Electrical",
    icon: PlugZap,
    accent: "bg-amber-50 text-amber-600 dark:bg-amber-950/30",
  },
  {
    title: "Plumbing Services",
    description:
      "Get leaks, pipes, taps, and other plumbing problems fixed quickly.",
    category: "Plumbing",
    icon: Droplets,
    accent: "bg-sky-50 text-sky-600 dark:bg-sky-950/30",
  },
  {
    title: "AC Repair",
    description:
      "Professional AC servicing and repair to keep your home comfortable.",
    category: "AC Repair",
    icon: AirVent,
    accent: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/30",
  },
  {
    title: "Home Painting",
    description:
      "Refresh your space with dependable painters and a clean finish.",
    category: "Painting",
    icon: Paintbrush,
    accent: "bg-violet-50 text-violet-600 dark:bg-violet-950/30",
  },
  {
    title: "Carpentry",
    description:
      "Skilled carpenters for furniture, doors, fittings, and custom work.",
    category: "Carpenter",
    icon: Hammer,
    accent: "bg-orange-50 text-orange-600 dark:bg-orange-950/30",
  },
  {
    title: "Home Cleaning",
    description:
      "Book trusted professionals for a cleaner, fresher, more comfortable home.",
    category: "Cleaning",
    icon: Sparkles,
    accent: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30",
  },
];

export function ServiceHighlights() {
  return (
    <section className="bg-muted/35 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-full px-4 py-1.5"
          >
            Popular Services
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything your home needs
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            From quick repairs to regular maintenance, find the right
            professional for every job.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group h-full border-border/70 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <CardHeader className="gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`rounded-2xl p-3.5 ${service.accent}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <Badge
                      variant="secondary"
                      className="rounded-full"
                    >
                      Verified Pros
                    </Badge>
                  </div>

                  <CardTitle className="text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>

                <CardFooter className="mt-auto pt-2">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between px-0 font-semibold text-primary hover:bg-transparent hover:text-primary/80"
                  >
                    <Link
                      href={`/services?category=${service.category}`}
                    >
                      Explore Service

                      <span
                        aria-hidden="true"
                        className="text-lg transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-7"
          >
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}