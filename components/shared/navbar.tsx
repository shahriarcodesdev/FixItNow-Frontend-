"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";

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
  { label: "Profile", icon: User, action: "profile" },
  { label: "Settings", icon: Settings, action: "settings" },
  { label: "Logout", icon: LogOut, action: "logout" },
];

export default function Navbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserMenuAction = (action: string) => {
    console.log(`User clicked: ${action}`);
    setIsUserMenuOpen(false);
    // Add your action handlers here
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors cursor-pointer">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <CircleUser className="h-5 w-5 text-primary-foreground" />
                </div>

                <span className="hidden sm:inline">John Doe</span>

                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              {userMenuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <DropdownMenuItem
                    key={item.action}
                    onClick={() => handleUserMenuAction(item.action)}
                    className="cursor-pointer"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
