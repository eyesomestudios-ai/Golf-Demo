"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  ClipboardList,
  Crown,
  Globe2,
  Hotel,
  PhoneIncoming,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  bookingExtraction,
  dashboardKpis,
  escalatedVipRequests,
  incomingCalls,
  liveCallExample,
  memberRecognition,
  pendingApprovals,
  staffInterventionTimeline,
  transcriptLines,
} from "@/data/mock";
import { AnimatedCounter } from "@/components/animated-counter";
import { MountFujiSilhouette } from "@/components/mount-fuji-silhouette";
import { VoiceWaveform } from "@/components/voice-waveform";
import { WeatherWidget } from "@/components/weather-widget";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BookingGrowthChart,
  PeakHoursChart,
  RevenueStackChart,
} from "@/components/dashboard/charts";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

const kpis = [
  {
    key: "activeCalls",
    label: "Active calls",
    sub: "稼働中の通話",
    icon: PhoneIncoming,
    value: dashboardKpis.activeCalls,
    format: (n: number) => String(n),
  },
  {
    key: "guestRequests",
    label: "Guest requests (today)",
    sub: "問い合わせ・仮予約の記録",
    icon: TrendingUp,
    value: dashboardKpis.guestRequestsToday,
    format: (n: number) => String(n),
  },
  {
    key: "intl",
    label: "International leads",
    sub: "国際リード（GHL）",
    icon: Globe2,
    value: dashboardKpis.internationalLeads,
    format: (n: number) => String(n),
  },
  {
    key: "revenue",
    label: "Revenue (JPY)",
    sub: "推定売上",
    icon: Hotel,
    value: dashboardKpis.revenueJPY,
    format: (n: number) => `¥${Math.round(n).toLocaleString()}`,
  },
  {
    key: "combo",
    label: "Hotel combo interest",
    sub: "宿泊セットの問い合わせ",
    icon: Building2,
    value: dashboardKpis.hotelComboRequests,
    format: (n: number) => String(n),
  },
  {
    key: "pending",
    label: "Awaiting staff approval",
    sub: "承認待ちキュー",
    icon: ClipboardList,
    value: dashboardKpis.pendingStaffApproval,
    format: (n: number) => String(n),
  },
  {
    key: "holds",
    label: "Provisional holds",
    sub: "仮押さえ（未確定）",
    icon: Timer,
    value: dashboardKpis.provisionalHolds,
    format: (n: number) => String(n),
  },
] as const;

function roleLabel(role: "caller" | "ai") {
  return role === "caller" ? "Caller" : "Assistant";
}

export function DashboardOverview() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <DashboardHeader title="Reception & reservations" />
      <div className="relative flex-1 overflow-hidden px-4 py-6 sm:px-6">
        <MountFujiSilhouette className="pointer-events-none absolute -right-10 bottom-0 w-[420px] opacity-50" />
        <div className="relative mx-auto max-w-7xl space-y-6">
          <p className="max-w-3xl text-sm text-muted-foreground">
            AI-assisted hospitality: the assistant captures intent and prepares work for your team.
            Tee-time truth stays in your club systems—staff confirm every reservation.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {kpis.map((k, i) => (
              <motion.div
                key={k.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {k.label}
                    </CardTitle>
                    <k.icon className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    {loading ? (
                      <Skeleton className="h-9 w-32" />
                    ) : (
                      <p className="font-display text-3xl font-semibold">
                        <AnimatedCounter value={k.value} formatter={k.format} />
                      </p>
                    )}
                    <p className="font-jp mt-1 text-xs text-muted-foreground">{k.sub}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-2xl border-amber-500/20 bg-card/70 backdrop-blur-md dark:border-amber-500/15">
              <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2">
                <div>
                  <CardTitle className="font-display text-xl">Manual review queue</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Human approval required · 予約はスタッフが確定
                  </p>
                </div>
                <Badge variant="outline" className="border-amber-500/40 text-amber-800 dark:text-amber-200">
                  Pending approvals
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingApprovals.map((p) => (
                  <div
                    key={p.id}
                    className="flex flex-col gap-2 rounded-xl border border-border/60 bg-background/40 p-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium">{p.guest}</p>
                      <p className="text-xs text-muted-foreground">
                        {p.id} · {p.type}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant={
                          p.priority === "VIP" ? "gold" : "secondary"
                        }
                        className="text-[10px]"
                      >
                        {p.priority}
                      </Badge>
                      <Badge variant="outline" className="text-[10px]">
                        {p.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">Since {p.since}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
              <CardHeader>
                <CardTitle className="font-display text-xl">Staff intervention timeline</CardTitle>
                <p className="text-xs text-muted-foreground">
                  Overrides & confirmations · フロント・予約
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {staffInterventionTimeline.map((row, idx) => (
                  <div key={idx} className="flex gap-3 border-l-2 border-primary/30 pl-3">
                    <div className="min-w-[3rem] text-xs font-mono text-muted-foreground">
                      {row.t}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary">{row.actor}</p>
                      <p className="text-sm text-muted-foreground">{row.action}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
              <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2">
                <div>
                  <CardTitle className="font-display text-xl">Request vs confirmation</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Intake logged vs staff-finalized · インベントリは別システム
                  </p>
                </div>
                <Badge variant="secondary">Live sim</Badge>
              </CardHeader>
              <CardContent>
                {loading ? <Skeleton className="h-[240px] w-full" /> : <BookingGrowthChart />}
              </CardContent>
            </Card>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
              <WeatherWidget />
              <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
                <CardHeader>
                  <CardTitle className="font-display text-lg">Peak hours</CardTitle>
                  <p className="text-xs text-muted-foreground">本日の通話ピーク</p>
                </CardHeader>
                <CardContent>
                  {loading ? <Skeleton className="h-[220px]" /> : <PeakHoursChart />}
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="rounded-2xl border-rose-500/15 bg-card/70 backdrop-blur-md dark:border-rose-500/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-display text-xl">Escalated VIP requests</CardTitle>
                <p className="text-xs text-muted-foreground">
                  Front desk notified · 手動エスカレーション
                </p>
              </div>
              <Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {escalatedVipRequests.map((v) => (
                <div
                  key={v.id}
                  className="rounded-xl border border-border/60 bg-background/40 p-3"
                >
                  <p className="text-sm font-semibold">{v.guest}</p>
                  <p className="text-xs text-muted-foreground">{v.id}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{v.summary}</p>
                  <Badge variant="outline" className="mt-2 text-[10px]">
                    {v.state}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-display text-xl">Incoming calls</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Queue · assistant triage（確定はスタッフ）
                  </p>
                </div>
                <Users className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-3">
                {incomingCalls.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between rounded-xl border border-border/60 bg-background/40 p-3 transition-all hover:border-primary/40 hover:shadow-sm"
                  >
                    <div>
                      <p className="text-sm font-medium">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.from}</p>
                    </div>
                    <div className="text-right text-xs">
                      <Badge variant="outline" className="mb-1">
                        {c.lang}
                      </Badge>
                      <p className="text-muted-foreground">Wait {c.wait}</p>
                      <p className="text-[11px] text-primary">{c.intent}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-white/15 bg-gradient-to-br from-card/80 via-card/60 to-primary/5 backdrop-blur-md dark:border-white/10">
              <CardHeader>
                <CardTitle className="font-display text-xl">Spotlight · Live intake</CardTitle>
                <p className="text-xs text-muted-foreground">
                  Language hint · CRM (GHL) · messaging drafts · reservation state
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-2xl border border-white/20 bg-background/50 p-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Live audio
                    </p>
                    <Badge variant="secondary" className="gap-1">
                      Assistant speaking
                    </Badge>
                  </div>
                  <VoiceWaveform />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{liveCallExample.reservationStatus}</Badge>
                  <Badge variant="secondary">{liveCallExample.frontDesk}</Badge>
                </div>
                <ScrollArea className="h-[180px] rounded-xl border border-border/60 bg-muted/20 p-3">
                  <div className="space-y-3 pr-3">
                    {transcriptLines.map((line, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {roleLabel(line.role)} · {line.t}
                        </p>
                        <p
                          className={
                            line.role === "ai"
                              ? "mt-1 rounded-lg bg-primary/10 px-2 py-1.5 text-foreground"
                              : "mt-1 text-muted-foreground"
                          }
                        >
                          {line.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-xs">
                    <p className="text-muted-foreground">Language</p>
                    <p className="mt-1 font-medium">{liveCallExample.language}</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-xs">
                    <p className="text-muted-foreground">Tone</p>
                    <p className="mt-1 font-medium">{liveCallExample.sentiment}</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-xs">
                    <p className="text-muted-foreground">CRM</p>
                    <p className="mt-1 font-medium text-emerald-600 dark:text-emerald-400">
                      {liveCallExample.crm}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/50 p-3 text-xs">
                    <p className="text-muted-foreground">WhatsApp</p>
                    <p className="mt-1 font-medium text-sky-600 dark:text-sky-400">
                      {liveCallExample.whatsapp}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {liveCallExample.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
              <CardHeader>
                <CardTitle className="font-display text-xl">Reservation draft (extraction)</CardTitle>
                <p className="text-xs text-muted-foreground">
                  For staff review · 予約システムと突合せが必要
                </p>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {Object.entries(bookingExtraction).map(([key, val]) => (
                  <div
                    key={key}
                    className="rounded-xl border border-border/60 bg-background/40 p-3 text-sm capitalize"
                  >
                    <p className="text-xs text-muted-foreground">{key.replace(/([A-Z])/g, " $1")}</p>
                    <p className="mt-1 font-medium">{val}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
              <CardHeader>
                <CardTitle className="font-display text-xl">Guest context</CardTitle>
                <p className="text-xs text-muted-foreground">ゲストプロファイル</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{memberRecognition.name}</p>
                    <p className="text-xs text-muted-foreground">{memberRecognition.history}</p>
                  </div>
                  <Badge variant="gold">{memberRecognition.tier}</Badge>
                </div>
                <Separator />
                <p className="text-xs font-medium text-primary">{memberRecognition.nextStep}</p>
                <p className="text-xs text-muted-foreground">Preferences</p>
                <div className="flex flex-wrap gap-2">
                  {memberRecognition.preferences.map((p) => (
                    <Badge key={p} variant="outline">
                      {p}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">Match confidence (assist only)</p>
                  <Progress value={88} className="mt-2 h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-display text-xl">Revenue composition</CardTitle>
                <p className="text-xs text-muted-foreground">ゴルフ vs ホテル · M JPY</p>
              </div>
            </CardHeader>
            <CardContent>
              {loading ? <Skeleton className="h-[220px]" /> : <RevenueStackChart />}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
