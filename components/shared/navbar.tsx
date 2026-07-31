"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import { logout } from "@/service/logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Wrench } from "lucide-react";

// Navigation items array - easy to maintain and organize
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

// User dropdown menu items
const userMenuItems = [
  { label: "Profile", icon: User, href: "/profile" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

// "success": true,
//     "statusCode": 200,
//     "message": "User profile fetched successfully",
//     "data": {
//         "profile": {
//             "id": "f7df88b6-be93-4991-8acf-49d7f56d9553",
//             "name": "babul",
//             "email": "babul@gmail.com",
//             "phone": null,
//             "address": null,
//             "role": "CUSTOMER",
//             "status": "ACTIVE",
//             "stripeCustomerId": null,
//             "createdAt": "2026-07-11T11:03:15.576Z",
//             "updatedAt": "2026-07-11T11:03:15.576Z",
//             "technician": null
//         }
//     }
// }

type user = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    profile: {
      id: string;
      name: string;
      email: string;
    };
  };
};

type NavbarProps = {
  user: user;
};

export default function Navbar({ user }: NavbarProps) {
  //   console.log(user.success, "sucess");

  const router = useRouter();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserMenuAction = async (action: string) => {
    // console.log(`User clicked: ${action}`);
    setIsUserMenuOpen(false);
    // Add your action handlers here
    if (action === "logout") {
      await logout();
      toast.success("User logged out successfully");
      router.push("/login");
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <Wrench className="h-6 w-6" />
            </div>

            <div className="leading-tight">
              <h2 className="text-xl font-bold tracking-tight">FixItNow</h2>

              <p className="text-xs text-muted-foreground">
                Trusted Home Services
              </p>
            </div>
          </Link>

          {/* Nav Links */}
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
          {/* User Dropdown */}
          {user.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors cursor-pointer">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <CircleUser className="h-5 w-5 text-primary-foreground" />
                  </div>

                  <span className="hidden sm:inline">
                    {user?.data?.profile?.name}
                  </span>

                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col space-y-1">
                  <span className="text-sm font-medium leading-none">
                    {user?.data?.profile?.name}
                  </span>
                  <span className="text-xs leading-none text-muted-foreground">
                    {user?.data?.profile?.email}
                  </span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {userMenuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href}>
                        <Icon className="mr-2 h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={async () => await handleUserMenuAction("logout")}
                  className="cursor-pointer text-red-600 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3 ">
              <Link href="/login">
                <Button className="cursor-pointer" variant="ghost">Login</Button>
              </Link>

              <Link href="/register">
                <Button className="cursor-pointer">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
