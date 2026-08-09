"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  ChevronDown,
  CircleUser,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  Wrench,
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

import { ThemeToggle } from "@/components/shared/theme-toggle";

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

export default function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const dashboardHref =
    user?.data?.profile?.role === "ADMIN"
      ? "/admin-dashboard"
      : user?.data?.profile?.role === "TECHNICIAN"
        ? "/technician-dashboard"
        : "/dashboard";

  const handleLogout = async () => {
    await logout();

    toast.success("User logged out successfully");

    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Wrench className="h-5 w-5" />
          </div>

          <div className="hidden leading-tight sm:block">
            <h2 className="text-lg font-bold tracking-tight">
              FixItNow
            </h2>

            <p className="text-[11px] text-muted-foreground">
              Trusted Home Services
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            // Exact match for Home
            // StartsWith match for other pages/sub-pages
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative rounded-lg px-3.5 py-2 text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-foreground/85 hover:bg-primary/5 hover:text-primary"
                  }
                `}
              >
                {item.label}

                {/* Active route glow/indicator */}
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-[9px] h-0.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Theme */}
          <ThemeToggle />

          {/* User */}
          {user.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="
                    flex cursor-pointer items-center gap-2
                    rounded-full border bg-background
                    px-2 py-1.5 text-sm font-medium
                    transition-colors hover:bg-accent
                    sm:px-3
                  "
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <CircleUser className="h-5 w-5 text-primary-foreground" />
                  </div>

                  <span className="hidden max-w-28 truncate sm:inline">
                    {user.data.profile.name}
                  </span>

                  <ChevronDown className="hidden h-4 w-4 sm:block" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-60"
              >
                <DropdownMenuLabel className="flex flex-col space-y-1.5">
                  <span className="text-sm font-semibold">
                    {user.data.profile.name}
                  </span>

                  <span className="truncate text-xs font-normal text-muted-foreground">
                    {user.data.profile.email}
                  </span>

                  <span className="mt-1 w-fit rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    {user.data.profile.role}
                  </span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Dashboard */}
                <DropdownMenuItem asChild>
                  <Link href={dashboardHref}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Profile & Settings */}
                {userMenuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <DropdownMenuItem
                      key={item.href}
                      asChild
                    >
                      <Link href={item.href}>
                        <Icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="
                    cursor-pointer text-red-600
                    focus:bg-red-50 focus:text-red-600
                    dark:focus:bg-red-950/30
                  "
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="cursor-pointer"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="cursor-pointer rounded-lg">
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