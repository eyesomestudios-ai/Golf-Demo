"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CalendarDays, ChevronDown, Filter, Search } from "lucide-react";

import {
  bookings,
  members,
  teeSlots,
  type BookingWorkflowStatus,
} from "@/data/mock";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const tagColors: Record<string, "default" | "secondary" | "gold" | "outline"> = {
  international: "secondary",
  member: "default",
  "hotel-combo": "gold",
  VIP: "gold",
};

function statusBadgeVariant(
  status: BookingWorkflowStatus
): "default" | "secondary" | "gold" | "outline" {
  switch (status) {
    case "Confirmed by Staff":
      return "default";
    case "Awaiting Staff Approval":
      return "gold";
    case "Hold Requested":
      return "secondary";
    case "Pending Confirmation":
    default:
      return "outline";
  }
}

export function BookingsPage() {
  const [query, setQuery] = React.useState("");
  const [tag, setTag] = React.useState<string>("all");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [openRow, setOpenRow] = React.useState<(typeof bookings)[0] | null>(null);

  const filtered = bookings.filter((b) => {
    const q = query.toLowerCase();
    const matchesQ =
      !q ||
      b.guest.toLowerCase().includes(q) ||
      b.id.toLowerCase().includes(q) ||
      b.email.toLowerCase().includes(q);
    const matchesTag = tag === "all" || b.tags.includes(tag);
    const matchesStatus = statusFilter === "all" || b.status === statusFilter;
    return matchesQ && matchesTag && matchesStatus;
  });

  return (
    <>
      <DashboardHeader title="Reservations & CRM" />
      <div className="flex-1 space-y-6 px-4 py-6 sm:px-6">
        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="bookings">Tee times</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="hotel">Hotel</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="mt-6 space-y-6">
            <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
              <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="font-display text-xl">Illustrative tee grid</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Truth lives in your tee system — this view is for coordination only.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  May 18 preview · not inventory-authoritative
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {teeSlots.map((s) => (
                    <motion.div
                      key={s.time}
                      whileHover={{ y: -3 }}
                      className="min-w-[120px] flex-1 rounded-2xl border border-border/70 bg-gradient-to-b from-background/80 to-muted/30 p-3 text-center shadow-sm"
                    >
                      <p className="font-display text-lg">{s.time}</p>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                        {s.light}
                      </p>
                      <Badge
                        variant={s.status === "available" ? "secondary" : "outline"}
                        className="mt-2 text-[10px]"
                      >
                        {s.status}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
              <CardHeader className="gap-4 space-y-0">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <CardTitle className="font-display text-xl">Reservation ledger</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <div className="relative min-w-[200px] flex-1">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search guest, ID…"
                        className="rounded-xl pl-9"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[200px] rounded-xl">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All statuses</SelectItem>
                        <SelectItem value="Pending Confirmation">Pending Confirmation</SelectItem>
                        <SelectItem value="Hold Requested">Hold Requested</SelectItem>
                        <SelectItem value="Awaiting Staff Approval">Awaiting Staff Approval</SelectItem>
                        <SelectItem value="Confirmed by Staff">Confirmed by Staff</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={tag} onValueChange={setTag}>
                      <SelectTrigger className="w-[160px] rounded-xl">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Tags" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All tags</SelectItem>
                        <SelectItem value="international">international</SelectItem>
                        <SelectItem value="member">member</SelectItem>
                        <SelectItem value="hotel-combo">hotel-combo</SelectItem>
                        <SelectItem value="VIP">VIP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="border-b text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="pb-3 pr-4">ID</th>
                      <th className="pb-3 pr-4">Guest</th>
                      <th className="pb-3 pr-4">Date</th>
                      <th className="pb-3 pr-4">Slot</th>
                      <th className="pb-3 pr-4">Players</th>
                      <th className="pb-3 pr-4">Course</th>
                      <th className="pb-3 pr-4">Tags</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 pl-2" />
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((b) => (
                      <motion.tr
                        key={b.id}
                        layout
                        className="group border-b border-border/50 transition-colors hover:bg-muted/40"
                      >
                        <td className="py-3 pr-4 font-mono text-xs">{b.id}</td>
                        <td className="py-3 pr-4 font-medium">{b.guest}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{b.date}</td>
                        <td className="py-3 pr-4">{b.slot}</td>
                        <td className="py-3 pr-4">{b.players}</td>
                        <td className="py-3 pr-4">{b.course}</td>
                        <td className="py-3 pr-4">
                          <div className="flex flex-wrap gap-1">
                            {b.tags.map((t) => (
                              <Badge key={t} variant={tagColors[t] ?? "secondary"}>
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 pr-2">
                          <Badge variant={statusBadgeVariant(b.status)} className="max-w-[200px] whitespace-normal text-left">
                            {b.status}
                          </Badge>
                        </td>
                        <td className="py-3 pl-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                            onClick={() => setOpenRow(b)}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
                {filtered.length === 0 && (
                  <div className="py-16 text-center text-muted-foreground">
                    <p className="font-display text-xl">Quiet fairways</p>
                    <p className="mt-2 text-sm">No bookings match your filters.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {members.map((m) => (
                <Card
                  key={m.id}
                  className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-premium dark:border-white/10"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{m.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{m.id}</p>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Tier</p>
                      <p className="font-medium">{m.tier}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Member since</p>
                      <p className="font-medium">{m.since}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Handicap</p>
                      <p className="font-medium">{m.handicap}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Spend YTD</p>
                      <p className="font-medium">¥{m.spendYTD.toLocaleString()}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hotel" className="mt-6">
            <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
              <CardHeader>
                <CardTitle className="font-display text-xl">Hotel package inventory</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Ryokan partners · dynamic yield (mock)
                </p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Manage allotments from the Hotel Packages page for full detail. GHL can tag
                leads as <Badge variant="gold">hotel-combo</Badge>; partner confirmations remain
                manual.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Sheet open={!!openRow} onOpenChange={(o) => !o && setOpenRow(null)}>
        <SheetContent className="sm:max-w-md">
          {openRow && (
            <>
              <SheetHeader>
                <SheetTitle className="font-display">{openRow.guest}</SheetTitle>
                <SheetDescription className="flex flex-wrap items-center gap-2">
                  <span>{openRow.id}</span>
                  <Badge variant={statusBadgeVariant(openRow.status)}>{openRow.status}</Badge>
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="mt-6 h-[calc(100vh-8rem)]">
                <div className="space-y-4 pr-4 text-sm">
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-muted-foreground">
                    Final tee-time confirmation requires staff verification against the live
                    inventory in your reservation system.
                  </div>
                  <div className="rounded-xl border bg-muted/30 p-3">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium">{openRow.email}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border bg-muted/30 p-3">
                      <p className="text-xs text-muted-foreground">Date</p>
                      <p className="font-medium">{openRow.date}</p>
                    </div>
                    <div className="rounded-xl border bg-muted/30 p-3">
                      <p className="text-xs text-muted-foreground">Slot</p>
                      <p className="font-medium">{openRow.slot}</p>
                    </div>
                  </div>
                  <div className="rounded-xl border bg-muted/30 p-3">
                    <p className="text-xs text-muted-foreground">Internal notes</p>
                    <p className="mt-1 leading-relaxed">
                      Assistant captured dietary preference: pescatarian. Airport transfer
                      requested Haneda → Izu (premium sedan). Reviewed by reservations team when
                      status moves to Confirmed by Staff.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
