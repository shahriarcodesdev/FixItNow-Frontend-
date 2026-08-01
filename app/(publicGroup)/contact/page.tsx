import {
  Card,
  CardContent,
} from "@/components/ui/card";

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
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 py-8">
      {/* Hero */}
      <section className="rounded-3xl border bg-gradient-to-r from-primary/10 via-background to-primary/5 p-10 text-center">
        <Badge className="mb-4">
          Contact Us
        </Badge>

        <h1 className="text-5xl font-bold tracking-tight">
          Wed Love to Hear From You
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Have a question, need support, or want to become a
          technician? Our team is here to help.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="text-sm text-muted-foreground">
                  +880 1700-000000
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-sm text-muted-foreground">
                  support@fixitnow.com
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Address
                </h3>

                <p className="text-sm text-muted-foreground">
                  Dhaka, Bangladesh
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-xl bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Working Hours
                </h3>

                <p className="text-sm text-muted-foreground">
                  Sat - Thu • 9:00 AM - 8:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="lg:col-span-2">
          <CardContent className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">
                Send us a Message
              </h2>

              <p className="mt-2 text-muted-foreground">
                Fill out the form below and well get back to
                you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  placeholder="Your Name"
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <Input
                placeholder="Phone Number"
              />

              <Input
                placeholder="Subject"
              />

              <Textarea
                rows={6}
                placeholder="Write your message..."
              />

              <Button
                size="lg"
                className="w-full md:w-auto"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}