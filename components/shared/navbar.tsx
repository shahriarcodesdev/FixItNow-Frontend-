"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ChevronDown,
  LogOut,
  Settings,
  User,
  Wrench,
  CircleUser,
  LayoutDashboard,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { logout } from "@/service/logout";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Navigation items
const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Technicians",
    href: "/technicians",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// User menu items
const userMenuItems = [
  {
    label: "Profile",
    icon: User,
    href: "/profile",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

type User = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    profile: {
      id: string;
      name: string;
      email: string;
      role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
    };
  };
};

type NavbarProps = {
  user: User;
};

export default function Navbar({
  user,
}: NavbarProps) {
  const router = useRouter();

  const dashboardHref =
    user?.data?.profile?.role === "ADMIN"
      ? "/admin-dashboard"
      : user?.data?.profile?.role ===
          "TECHNICIAN"
      ? "/technician-dashboard"
      : "/dashboard";

  const handleLogout =
    async () => {
      await logout();

      toast.success(
        "User logged out successfully"
      );

      router.push("/login");
    };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <Wrench className="h-6 w-6" />
            </div>

            <div className="leading-tight">
              <h2 className="text-xl font-bold tracking-tight">
                FixItNow
              </h2>

              <p className="text-xs text-muted-foreground">
                Trusted Home Services
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* User */}
          {user.success ? (
            <DropdownMenu>

              <DropdownMenuTrigger
                asChild
              >
                <button className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <CircleUser className="h-5 w-5 text-primary-foreground" />
                  </div>

                  <span className="hidden sm:inline">
                    {
                      user.data.profile
                        .name
                    }
                  </span>

                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-56"
              >
                <DropdownMenuLabel className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">
                    {
                      user.data.profile
                        .name
                    }
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {
                      user.data.profile
                        .email
                    }
                  </span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Dashboard */}
                <DropdownMenuItem
                  asChild
                >
                  <Link
                    href={
                      dashboardHref
                    }
                  >
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Profile & Settings */}
                {userMenuItems.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <DropdownMenuItem
                        key={
                          item.href
                        }
                        asChild
                      >
                        <Link
                          href={
                            item.href
                          }
                        >
                          <Icon className="mr-2 h-4 w-4" />

                          {
                            item.label
                          }
                        </Link>
                      </DropdownMenuItem>
                    );
                  }
                )}

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem
                  onClick={
                    handleLogout
                  }
                  className="cursor-pointer text-red-600 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>

            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="cursor-pointer"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}