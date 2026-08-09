import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Technicians", href: "/technicians" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Electrical Repair",
  "Plumbing",
  "AC Repair",
  "Home Cleaning",
  "Painting",
  "Carpentry",
];

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Wrench className="h-5 w-5" />
              </div>

              <span className="text-xl font-bold tracking-tight">
                FixItNow
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Connecting you with trusted professionals for reliable,
              convenient, and hassle-free home services.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>

            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services?category=${encodeURIComponent(
                      service
                    )}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <span className="text-sm leading-5 text-muted-foreground">
                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <span className="text-sm text-muted-foreground">
                  +880 1700-000000
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <span className="break-all text-sm text-muted-foreground">
                  support@fixitnow.com
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Contact our team
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-center text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} FixItNow. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 md:justify-end">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}