"use client";

import Link from "next/link";
import { Bell, Search } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MobileNav } from "@/components/dashboard/mobile-nav";

export function DashboardHeader({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
        <MobileNav />
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Operations
          </p>
          <h1 className="truncate font-display text-xl font-semibold sm:text-2xl">{title}</h1>
        </div>
        <div className="hidden max-w-xs flex-1 md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search guests, bookings…" className="rounded-xl pl-9" />
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-xl" asChild>
          <Link href="/dashboard/calls">
            <Bell className="h-5 w-5" />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
