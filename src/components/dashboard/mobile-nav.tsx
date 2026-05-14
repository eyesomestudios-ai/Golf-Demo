"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/calls", label: "Live Calls" },
  { href: "/dashboard/live-call", label: "Voice" },
  { href: "/dashboard/bookings", label: "Bookings" },
  { href: "/dashboard/members", label: "Members" },
  { href: "/dashboard/hotel-packages", label: "Hotel" },
  { href: "/dashboard/line-campaigns", label: "LINE" },
  { href: "/dashboard/whatsapp", label: "WhatsApp" },
  { href: "/dashboard/marketing", label: "Automation" },
  { href: "/dashboard/analytics", label: "Analytics" },
  { href: "/dashboard/settings", label: "Settings" },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Navigate</SheetTitle>
        </SheetHeader>
        <ScrollArea className="mt-4 h-[calc(100vh-8rem)] pr-2">
          <div className="flex flex-col gap-1">
            {links.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/dashboard" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm",
                    active
                      ? "bg-primary/15 font-medium"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
            >
              ← Landing
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
