"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Building2,
  LayoutDashboard,
  MessageCircle,
  PhoneCall,
  Settings,
  Sparkles,
  Users,
  Voicemail,
  Workflow,
} from "lucide-react";

import { club } from "@/data/mock";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/calls", label: "Live Calls", icon: PhoneCall },
  { href: "/dashboard/live-call", label: "Voice workspace", icon: Voicemail },
  { href: "/dashboard/bookings", label: "Bookings", icon: Sparkles },
  { href: "/dashboard/members", label: "Members", icon: Users },
  { href: "/dashboard/hotel-packages", label: "Hotel Packages", icon: Building2 },
  { href: "/dashboard/line-campaigns", label: "LINE Campaigns", icon: MessageCircle },
  { href: "/dashboard/whatsapp", label: "WhatsApp Leads", icon: MessageCircle },
  { href: "/dashboard/marketing", label: "Automation", icon: Workflow },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
] as const;

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border/60 bg-background/70 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="flex h-16 items-center gap-2 border-b border-border/60 px-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-emerald-600 text-primary-foreground shadow-premium">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold">{club.name}</p>
          <p className="font-jp text-[10px] text-muted-foreground">コンソール</p>
        </div>
      </div>
      <ScrollArea className="flex-1 px-2 py-3">
        <nav className="space-y-1">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all",
                    active
                      ? "bg-primary/15 text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4 shrink-0 opacity-80" />
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      <Separator />
      <div className="p-3">
        <Button asChild variant="outline" size="sm" className="w-full rounded-xl">
          <Link href="/">Marketing site</Link>
        </Button>
      </div>
    </aside>
  );
}
