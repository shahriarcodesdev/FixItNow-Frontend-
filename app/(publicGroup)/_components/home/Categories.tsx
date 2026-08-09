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
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Image Section */}
          <div className="relative">
            <div className="group relative overflow-hidden rounded-[2rem] border bg-muted shadow-2xl">
              <img
  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=90"
  alt="Professional technician providing home repair service"
  className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[540px]"
/>

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

              {/* Top Badge */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Trusted Home Services
                </div>
              </div>

              {/* Image Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl">
                    <Wrench className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Professional help,
                    <br />
                    right when you need it.
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                    Connect with skilled professionals for repairs,
                    maintenance, and everyday home services.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border bg-background/95 p-4 shadow-2xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Trusted Professionals
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Quality service you can rely on
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <Badge
              variant="outline"
              className="mb-4 rounded-full px-4 py-1.5"
            >
              Our Services
            </Badge>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Find the right service for every home
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              From quick repairs to complete home maintenance, choose a
              service category and find the right professional for the job.
            </p>

            {/* Category Grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.title}
                    href={`/services?category=${category.title}`}
                    className="group"
                  >
                    <Card className="border-border/70 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                      <CardContent className="flex items-center gap-4 p-4">
                        {/* Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold">
                            {category.title}
                          </h3>

                          <p className="mt-1 text-xs text-muted-foreground">
                            {category.count}
                          </p>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Link */}
            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}