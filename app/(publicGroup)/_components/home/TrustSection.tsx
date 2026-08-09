import {
  Clock3,
  LockKeyhole,
  ShieldCheck,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description:
      "Find service providers through a platform built around trust and quality.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Booking",
    description:
      "Your booking and account information stay protected throughout the process.",
  },
  {
    icon: Clock3,
    title: "Flexible Scheduling",
    description:
      "Choose a service and arrange help around the time that works for you.",
  },
  {
    icon: Star,
    title: "Quality Service",
    description:
      "A professional experience designed to make home maintenance easier.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-muted/35 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why FixItNow
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built to make home care effortless
          </h2>

          <p className="mt-4 text-muted-foreground sm:text-lg">
            Everything you need to book dependable home services with
            confidence.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid overflow-hidden rounded-3xl border bg-background sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`p-7 transition-colors hover:bg-muted/50 ${
                  index > 0
                    ? "border-t sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}