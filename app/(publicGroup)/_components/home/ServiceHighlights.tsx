"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  AirVent,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Hammer,
  Paintbrush,
  PlugZap,
  Search,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const services = [
  {
    title: "Electrical Services",
    description:
      "Safe and reliable electrical repairs, installations, wiring, and maintenance.",
    category: "ELECTRICAL",
    categoryName: "Electrical",
    icon: PlugZap,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
    price: "$40.00",
    unit: "/ service",
    availability: "12 Pros",
  },
  {
    title: "Plumbing Services",
    description:
      "Get leaks, pipes, taps, drainage, and other plumbing problems fixed quickly.",
    category: "PLUMBING",
    categoryName: "Plumbing",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
    price: "$35.00",
    unit: "/ service",
    availability: "18 Pros",
  },
  {
    title: "AC Repair",
    description:
      "Professional AC servicing, maintenance, installation, and repair for your home.",
    category: "AC REPAIR",
    categoryName: "AC Repair",
    icon: AirVent,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
    price: "$50.00",
    unit: "/ service",
    availability: "9 Pros",
  },
  {
    title: "Home Painting",
    description:
      "Refresh your home with dependable painters and a clean, professional finish.",
    category: "PAINTING",
    categoryName: "Painting",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85",
    price: "$60.00",
    unit: "/ service",
    availability: "15 Pros",
  },
  {
    title: "Carpentry",
    description:
      "Skilled carpenters for furniture, doors, fittings, repairs, and custom work.",
    category: "CARPENTRY",
    categoryName: "Carpenter",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85",
    price: "$45.00",
    unit: "/ service",
    availability: "10 Pros",
  },
  {
    title: "Home Cleaning",
    description:
      "Book trusted professionals for a cleaner, fresher, and more comfortable home.",
    category: "CLEANING",
    categoryName: "Cleaning",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    price: "$30.00",
    unit: "/ service",
    availability: "20 Pros",
  },
];

const categories = [
  "All",
  "Electrical",
  "Plumbing",
  "AC Repair",
  "Painting",
  "Carpenter",
  "Cleaning",
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        service.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        service.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        service.categoryName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        service.categoryName === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-muted/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_35%)]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-5 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5 text-primary"
            >
              <Wrench className="mr-2 h-3.5 w-3.5" />
              Trusted Home Services
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Professional services for{" "}
              <span className="text-primary">every home</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Find trusted professionals for repairs, maintenance,
              installations, and everyday home services.
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search electrical, plumbing, cleaning..."
                className="h-14 rounded-2xl border-border/70 bg-background pl-12 pr-12 text-base shadow-lg focus-visible:ring-primary"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge
                variant="outline"
                className="mb-3 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5 text-primary"
              >
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Explore Services
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Find the right service
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                Choose a category or search for exactly what you
                need.
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filteredServices.length}
              </span>{" "}
              services available
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <Button
                  key={category}
                  type="button"
                  variant={active ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-5 ${
                    active
                      ? "shadow-sm"
                      : "border-border/70 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {category}
                </Button>
              );
            })}
          </div>

          {/* Service Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => {
                const Icon = service.icon;

                return (
                  <Card
                    key={service.title}
                    className="group overflow-hidden border-border/60 bg-card p-0 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
                  >
                    {/* Image */}
                    <div className="relative m-2 overflow-hidden rounded-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={900}
                        height={600}
                        className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Category */}
                      <div className="absolute left-4 top-4">
                        <Badge className="border border-white/20 bg-background/90 px-3 py-1.5 text-[10px] font-bold tracking-wider text-foreground shadow-lg backdrop-blur-md">
                          {service.category}
                        </Badge>
                      </div>

                      {/* Availability */}
                      <div className="absolute right-4 top-4">
                        <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {service.availability}
                        </div>
                      </div>

                      {/* Bottom Image Content */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-md">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                          Verified Professionals
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="px-5 pb-3 pt-4">
                      <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {service.title}
                      </h3>

                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        Trusted service providers
                      </div>

                      <p className="mt-4 line-clamp-2 min-h-[48px] text-sm leading-6 text-muted-foreground">
                        {service.description}
                      </p>

                      {/* Price */}
                      <div className="mt-5 flex items-end justify-between">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                            Starting from
                          </p>

                          <div className="mt-1 flex items-baseline gap-1">
                            <span className="text-2xl font-bold tracking-tight text-foreground">
                              {service.price}
                            </span>

                            <span className="text-xs text-muted-foreground">
                              {service.unit}
                            </span>
                          </div>
                        </div>

                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          Available
                        </span>
                      </div>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="grid grid-cols-2 gap-3 px-5 pb-5 pt-3">
                      <Button
                        asChild
                        className="h-11 rounded-xl font-semibold shadow-sm transition-all duration-300 hover:shadow-md"
                      >
                        <Link
                          href={`/services?category=${service.categoryName}`}
                        >
                          Book Now
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="group/button h-11 rounded-xl border-border/70 font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                      >
                        <Link
                          href={`/services?category=${service.categoryName}`}
                        >
                          Details
                          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-2xl border border-dashed border-border bg-muted/20 px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Search className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-foreground">
                No services found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                We couldnt find a service matching your search.
                Try another keyword or category.
              </p>

              <Button
                type="button"
                onClick={clearSearch}
                variant="outline"
                className="mt-6 rounded-xl"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col items-center justify-center rounded-2xl border bg-muted/30 px-6 py-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Wrench className="h-5 w-5" />
            </div>

            <h3 className="mt-4 text-2xl font-bold text-foreground">
              Need something else?
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Tell us what you need and well help you find the right
              professional for the job.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-6 rounded-xl px-7"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}