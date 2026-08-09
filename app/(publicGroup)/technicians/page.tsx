import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Star,
  BriefcaseBusiness,
  ArrowRight,
  BadgeCheck,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const technicians = [
  {
    id: 1,
    name: "John Smith",
    skill: "Electrician",
    experience: "8 Years",
    rating: "4.9",
    reviews: "124 Reviews",
    location: "Dhaka, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "David Khan",
    skill: "Plumber",
    experience: "6 Years",
    rating: "4.8",
    reviews: "98 Reviews",
    location: "Dhaka, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Alex Rahman",
    skill: "AC Technician",
    experience: "5 Years",
    rating: "5.0",
    reviews: "87 Reviews",
    location: "Dhaka, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
  },
];

export default function TechniciansPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <Badge
            variant="outline"
            className="mb-5 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5 text-primary"
          >
            <ShieldCheck className="mr-2 h-4 w-4" />
            Trusted Professionals
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Meet Our Expert{" "}
            <span className="text-primary">Technicians</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Connect with skilled, verified, and highly-rated professionals
            ready to handle your home repairs, maintenance, and installation
            needs.
          </p>
        </div>
      </section>

      {/* Technicians */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Professionals
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Find the right expert for your job
              </h2>

              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Every technician is carefully selected to provide reliable
                and professional home services.
              </p>
            </div>

            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Cards */}
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {technicians.map((tech) => (
              <Card
                key={tech.id}
                className="group overflow-hidden rounded-2xl border-border/60 bg-card p-0 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative m-2 overflow-hidden rounded-xl">
                  <Image
                    src={tech.image}
                    alt={`${tech.name} - ${tech.skill}`}
                    width={900}
                    height={600}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Verified */}
                  <div className="absolute left-4 top-4">
                    <Badge className="border border-white/20 bg-background/90 text-foreground shadow-md backdrop-blur-md">
                      <BadgeCheck className="mr-1.5 h-3.5 w-3.5 text-primary" />
                      Verified
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="absolute right-4 top-4">
                    <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {tech.rating}
                    </div>
                  </div>

                  {/* Image bottom content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-medium text-white/80">
                      {tech.skill}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-white">
                      {tech.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-5">
                  {/* Rating + Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">
                          {tech.rating}
                        </span>
                      </div>

                      <span className="text-sm text-muted-foreground">
                        • {tech.reviews}
                      </span>
                    </div>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Available
                    </span>
                  </div>

                  {/* Location */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {tech.location}
                  </div>

                  {/* Experience */}
                  <div className="mt-4 rounded-xl bg-muted/40 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BriefcaseBusiness className="h-4 w-4 text-primary" />
                        Experience
                      </div>

                      <span className="text-sm font-semibold">
                        {tech.experience}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className="mt-5 h-11 w-full rounded-xl font-semibold shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <Link href={`/technicians/${tech.id}`}>
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-primary/30 px-7 font-semibold hover:border-primary hover:bg-primary/5"
            >
              <Link href="/technicians">
                Browse All Technicians
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}