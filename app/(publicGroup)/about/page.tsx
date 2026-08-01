import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Users,
  ShieldCheck,
  Clock,
  Award,
  Wrench,
  Star,
} from "lucide-react";

const stats = [
  {
    title: "500+",
    desc: "Happy Customers",
    icon: Users,
  },
  {
    title: "100+",
    desc: "Verified Technicians",
    icon: ShieldCheck,
  },
  {
    title: "24/7",
    desc: "Customer Support",
    icon: Clock,
  },
];

const features = [
  {
    title: "Verified Professionals",
    description:
      "Every technician is carefully verified to ensure quality and trust.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Service",
    description:
      "From electrical work to plumbing, we deliver reliable home services.",
    icon: Award,
  },
  {
    title: "Fast Response",
    description:
      "Book trusted technicians quickly and get your work done on time.",
    icon: Wrench,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-14 py-8">
      {/* Hero */}
      <section className="rounded-3xl border bg-gradient-to-r from-primary/10 via-background to-primary/5 p-10 text-center">
        <Badge className="mb-4">
          About FixItNow
        </Badge>

        <h1 className="text-5xl font-bold tracking-tight">
          Trusted Home Services,
          <br />
          Delivered with Confidence
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          FixItNow connects homeowners with trusted,
          verified professionals for electrical,
          plumbing, AC servicing, appliance repair,
          cleaning, and many more home services.
        </p>
      </section>

      {/* Stats */}
      <section className="grid gap-6 md:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="rounded-xl bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h2 className="mt-5 text-4xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-2 text-muted-foreground">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Mission */}
      <section className="rounded-3xl border bg-muted/30 p-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            Our mission is to simplify home maintenance
            by providing a secure platform where customers
            can easily find experienced technicians.
            We focus on trust, transparency, and
            exceptional service quality to make every
            booking hassle-free.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <div className="mb-8 text-center">
          <Badge variant="secondary">
            Why Choose Us
          </Badge>

          <h2 className="mt-4 text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-3 text-muted-foreground">
            We make finding reliable home services
            simple, safe, and convenient.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="transition hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="space-y-5 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Bottom Banner */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-10 text-center">
          <Star className="h-12 w-12 text-primary" />

          <h2 className="text-3xl font-bold">
            Your Trusted Partner for Home Services
          </h2>

          <p className="max-w-2xl text-muted-foreground">
            Whether its a small repair or a major
            installation, FixItNow ensures you receive
            professional service from skilled technicians
            you can trust.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}