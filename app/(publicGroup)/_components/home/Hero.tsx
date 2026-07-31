import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100">
      <div className="container mx-auto grid min-h-[85vh] items-center gap-12 px-4 py-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <Badge className="mb-4">
            Trusted by Thousands of Customers
          </Badge>

          <h1 className="text-5xl font-extrabold leading-tight lg:text-6xl">
            Find Trusted
            <span className="text-primary"> Home Service </span>
            Professionals
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Book verified electricians, plumbers, painters,
            cleaners, AC technicians and more in just a few clicks.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/services">
                Book a Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/register">
                Become a Technician
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <div className="flex items-center gap-2">
                <Users className="text-primary" />
                <span className="text-2xl font-bold">
                  15K+
                </span>
              </div>

              <p className="text-muted-foreground">
                Happy Customers
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Star className="fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold">
                  4.9
                </span>
              </div>

              <p className="text-muted-foreground">
                Average Rating
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-600" />
                <span className="text-2xl font-bold">
                  100%
                </span>
              </div>

              <p className="text-muted-foreground">
                Verified Professionals
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900"
            alt="Hero"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}