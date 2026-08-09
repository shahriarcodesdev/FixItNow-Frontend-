import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const points = [
  "Trusted service professionals",
  "Simple online booking",
  "Convenient scheduling",
];

export function CTASection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-background sm:px-12 lg:px-16">
          {/* Background decoration */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Ready when you are
              </p>

              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Take care of your home today.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-background/70 sm:text-lg">
                Find the right professional, choose a convenient time,
                and get your next home task moving with FixItNow.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 text-sm text-background/80"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-full px-7"
            >
              <Link href="/services">
                Browse Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}