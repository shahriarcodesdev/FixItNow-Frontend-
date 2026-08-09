import {
  CalendarCheck2,
  Search,
  ShieldCheck,
  Wrench,
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
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Simple Process
            </p>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Home service without the hassle.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              FixItNow makes it easy to discover trusted professionals,
              schedule help, and keep your home running smoothly.
            </p>
          </div>

          {/* Right */}
          <div className="relative grid gap-4 sm:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-background text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="mb-1 text-xs font-semibold tracking-widest text-muted-foreground">
                        STEP {step.number}
                      </div>

                      <h3 className="text-lg font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}