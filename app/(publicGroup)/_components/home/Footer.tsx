import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
 

} from "react-icons/fa";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-lg bg-primary p-2 text-primary-foreground">
                <Wrench className="h-5 w-5" />
              </div>

              <span className="text-2xl font-bold">
                FixItNow
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              FixItNow connects customers with trusted professionals
              for electrical, plumbing, AC repair, painting, cleaning,
              and many other home services.
            </p>

            <div className="mt-6 flex gap-3">
  <Link
    href="#"
    className="rounded-full border p-2 transition hover:bg-primary hover:text-white"
  >
    <FaFacebookF size={18} />
  </Link>

  <Link
    href="#"
    className="rounded-full border p-2 transition hover:bg-primary hover:text-white"
  >
    <FaLinkedinIn size={18} />
  </Link>

  <Link
    href="#"
    className="rounded-full border p-2 transition hover:bg-primary hover:text-white"
  >
    <FaGithub size={18} />
  </Link>

  <Link
    href="#"
    className="rounded-full border p-2 transition hover:bg-primary hover:text-white"
  >
    <FaInstagram size={18} />
  </Link>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-primary"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/technicians"
                  className="hover:text-primary"
                >
                  Technicians
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="hover:text-primary"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="hover:text-primary"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Electrical Repair</li>
              <li>Plumbing</li>
              <li>Home Cleaning</li>
              <li>AC Repair</li>
              <li>Painting</li>
              <li>Carpentry</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+880 1700-000000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>support@fixitnow.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} FixItNow. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}