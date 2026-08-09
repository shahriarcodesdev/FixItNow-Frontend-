"use client";

import {
  AirVent,
  Droplets,
  Hammer,
  Paintbrush,
  PlugZap,
  Sparkles,
  Wrench,
} from "lucide-react";

const categories = [
  ["Electrical", PlugZap],
  ["Plumbing", Droplets],
  ["AC Repair", AirVent],
  ["Cleaning", Sparkles],
  ["Painting", Paintbrush],
  ["Carpentry", Hammer],
  ["Home Repair", Wrench],
];

export default function ServiceCategories() {
  return (
    <section className="relative overflow-hidden border-y bg-gradient-to-r from-primary/[0.04] via-background to-primary/[0.04] py-8 max-w-7xl mx-auto px-4 sm:py-12 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="relative z-10 mb-6 text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          Explore Services
        </div>

        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Everything your home needs
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Trusted professionals for every job.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Side fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee gap-4">
          {[...categories, ...categories].map(
            ([name, Icon], index) => (
              <div
                key={`${name}-${index}`}
                className="group flex min-w-[180px] items-center gap-3 rounded-2xl border border-border/60 bg-background/90 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Text */}
                <div>
                  <p className="whitespace-nowrap text-sm font-bold">
                    {name as string}
                  </p>

                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Verified professionals
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}