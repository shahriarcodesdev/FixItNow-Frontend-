import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const contactInfo = [
  {
    title: "Phone",
    value: "+880 1700-000000",
    icon: Phone,
  },
  {
    title: "Email",
    value: "support@fixitnow.com",
    icon: Mail,
  },
  {
    title: "Location",
    value: "Dhaka, Bangladesh",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Sat - Thu • 9 AM - 8 PM",
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-muted/20">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5 text-primary"
          >
            <MessageCircle className="mr-2 h-3.5 w-3.5" />
            Contact FixItNow
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Were Here to <span className="text-primary">Help</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Have a question, need support, or want to become a technician?
            Our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">
              Get in <span className="text-primary">Touch</span>
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Whether you need help with a booking or have questions about
              FixItNow, were here for you.
            </p>

            <div className="mt-6 space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={item.title}
                    className="transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                  >
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="rounded-xl bg-primary/10 p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-medium">
                          {item.title}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <Card className="lg:col-span-3">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">
                  Send us a Message
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Well get back to you as soon as possible.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your Name" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                  />
                </div>

                <Input
                  type="tel"
                  placeholder="Phone Number"
                />

                <Input placeholder="Subject" />

                <Textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="rounded-lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t bg-muted/20">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center">
          <ShieldCheck className="mx-auto h-10 w-10 text-primary" />

          <h2 className="mt-4 text-2xl font-bold">
            Trusted Home Services
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            FixItNow connects customers with verified professionals for
            reliable and hassle-free home services.
          </p>

          <Button asChild className="mt-5">
            <Link href="/services">
              Explore Services
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}