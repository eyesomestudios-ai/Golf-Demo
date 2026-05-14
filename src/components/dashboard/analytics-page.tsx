"use client";

import * as React from "react";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  AiHumanPieChart,
  BookingGrowthChart,
  IntlRatioChart,
  PeakHoursChart,
  RevenueStackChart,
  SatisfactionChart,
} from "@/components/dashboard/charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AnalyticsPage() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <DashboardHeader title="Analytics" />
      <div className="flex-1 space-y-6 px-4 py-6 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Booking growth (MoM)",
              value: 18,
              sub: "予約成長率",
              format: (v: number) => `${Math.round(v)}%`,
            },
            {
              label: "Intl tourist ratio",
              value: 38,
              sub: "国際比率",
              format: (v: number) => `${Math.round(v)}%`,
            },
            {
              label: "Assistant-only intake",
              value: 68,
              sub: "エスカレ無しの一次対応",
              format: (v: number) => `${Math.round(v)}%`,
            },
            {
              label: "CSAT (30d)",
              value: 4.85,
              sub: "満足度",
              format: (v: number) => v.toFixed(2),
            },
          ].map((m) => (
            <Card
              key={m.label}
              className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {m.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <Skeleton className="h-10 w-24" />
                ) : (
                  <p className="font-display text-3xl font-semibold">
                    <AnimatedCounter value={m.value} formatter={m.format} />
                  </p>
                )}
                <p className="font-jp mt-1 text-xs text-muted-foreground">{m.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
            <CardHeader>
              <CardTitle className="font-display text-xl">Booking growth</CardTitle>
              <p className="text-xs text-muted-foreground">
                Guest requests logged vs staff-finalized
              </p>
            </CardHeader>
            <CardContent>
              {loading ? <Skeleton className="h-[240px]" /> : <BookingGrowthChart />}
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
            <CardHeader>
              <CardTitle className="font-display text-xl">International mix</CardTitle>
              <p className="text-xs text-muted-foreground">Share of inbound guests</p>
            </CardHeader>
            <CardContent>
              {loading ? <Skeleton className="h-[220px]" /> : <IntlRatioChart />}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
            <CardHeader>
              <CardTitle className="font-display text-lg">Peak booking hours</CardTitle>
              <p className="text-xs text-muted-foreground">Calls / holds</p>
            </CardHeader>
            <CardContent>
              {loading ? <Skeleton className="h-[220px]" /> : <PeakHoursChart />}
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
            <CardHeader>
              <CardTitle className="font-display text-lg">Collaboration split</CardTitle>
              <p className="text-xs text-muted-foreground">
                Assistant intake vs reservations / front desk involved
              </p>
            </CardHeader>
            <CardContent>
              {loading ? <Skeleton className="h-[220px]" /> : <AiHumanPieChart />}
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
            <CardHeader>
              <CardTitle className="font-display text-lg">Satisfaction</CardTitle>
              <p className="text-xs text-muted-foreground">Post-stay pulse</p>
            </CardHeader>
            <CardContent>
              {loading ? <Skeleton className="h-[200px]" /> : <SatisfactionChart />}
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-xl">Revenue trends</CardTitle>
            <p className="text-xs text-muted-foreground">ゴルフ + ホテル · millions JPY</p>
          </CardHeader>
          <CardContent>
            {loading ? <Skeleton className="h-[220px]" /> : <RevenueStackChart />}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
