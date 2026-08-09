import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <Badge
              variant="outline"
              className="mb-6 rounded-full border-primary/20 bg-primary/5 px-4 py-2 text-primary"
            >
              <ShieldCheck className="mr-2 h-4 w-4" />
              Trusted by Thousands of Customers
            </Badge>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Find Trusted{" "}
              <span className="text-primary">
                Home Service
              </span>{" "}
              Professionals
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Book verified electricians, plumbers, painters,
              cleaners, AC technicians and more — all from one
              trusted platform.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                asChild
                className="rounded-xl px-6 shadow-lg shadow-primary/20"
              >
                <Link href="/services">
                  Book a Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-xl px-6"
              >
                <Link href="/register">
                  Become a Technician
                </Link>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="mt-10 grid max-w-xl grid-cols-3 divide-x rounded-2xl border bg-card/50 p-4 shadow-sm backdrop-blur sm:mt-12 sm:p-5">
              {/* Customers */}
              <div className="px-3 first:pl-0 sm:px-5">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />

                  <span className="text-xl font-bold text-foreground sm:text-2xl">
                    15K+
                  </span>
                </div>

                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Happy Customers
                </p>
              </div>

              {/* Rating */}
              <div className="px-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                  <span className="text-xl font-bold text-foreground sm:text-2xl">
                    4.9
                  </span>
                </div>

                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Average Rating
                </p>
              </div>

              {/* Verified */}
              <div className="px-3 last:pr-0 sm:px-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />

                  <span className="text-xl font-bold text-foreground sm:text-2xl">
                    100%
                  </span>
                </div>

                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Verified Pros
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-[2rem] border bg-card p-2 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                  alt="Professional home service technician"
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[500px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Image Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                      <Wrench className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        Professional Service
                      </p>

                      <p className="text-sm text-white/75">
                        Skilled & verified technicians
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border bg-background p-4 shadow-xl sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Verified Professionals
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Safe & reliable service
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Rating */}
            <div className="absolute -right-3 top-8 hidden rounded-2xl border bg-background px-4 py-3 shadow-xl sm:block lg:-right-5">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                <div>
                  <p className="text-sm font-bold text-foreground">
                    4.9/5
                  </p>

                  <p className="text-[11px] text-muted-foreground">
                    Customer rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}