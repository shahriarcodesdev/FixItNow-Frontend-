import {
  CalendarCheck2,
  Search,
  ShieldCheck,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Find a Service",
    description:
      "Browse our services and choose the help that matches your home needs.",
    icon: Search,
  },
  {
    number: "02",
    title: "Choose a Professional",
    description:
      "Compare available technicians and select someone you can trust.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Book a Time",
    description:
      "Pick a convenient schedule and confirm your service request in a few clicks.",
    icon: CalendarCheck2,
  },
  {
    number: "04",
    title: "Get It Fixed",
    description:
      "Your technician arrives ready to work and gets the job done professionally.",
    icon: Wrench,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Simple Process
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How It Works
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Get reliable home services in just a few simple steps.
          </p>
        </div>

        {/* Main Content */}
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Image */}
          <div className="relative">
            <div className="group relative overflow-hidden rounded-3xl border bg-muted shadow-xl">
              <img
  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=90"
  alt="Professional handyman working on home repairs"
  className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[560px]"
/>

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Image Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <Wrench className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Trusted professionals,
                    <br />
                    quality service.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/80">
                    From small repairs to essential home maintenance,
                    FixItNow helps you find the right professional for the
                    job.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Verification Card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-background/95 p-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Verified Professionals
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Skilled, reliable, and ready to help
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Steps */}
          <div className="relative">
            {/* Vertical Timeline */}
            <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-border sm:block" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative flex gap-5"
                  >
                    {/* Timeline Active Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-6 top-16 hidden h-[calc(100%+24px)] w-px bg-primary/30 sm:block" />
                    )}

                    {/* Icon */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-2xl border bg-card p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-lg sm:border-none sm:bg-transparent sm:p-1">
                      <div className="mb-1 text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                        STEP {step.number}
                      </div>

                      <h3 className="text-lg font-bold sm:text-xl">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-[15px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}