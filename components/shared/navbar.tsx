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

// Navigation items array - easy to maintain and organize
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
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
    <nav className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">
                  V0
                </span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                FixItNow
              </span>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-accent"
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
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>

              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
