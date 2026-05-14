"use client";

import { lineCampaigns } from "@/data/mock";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function LineCampaignsPage() {
  return (
    <>
      <DashboardHeader title="LINE Campaigns" />
      <div className="flex-1 space-y-6 px-4 py-6 sm:px-6">
        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-2xl">Broadcast performance</CardTitle>
            <p className="text-sm text-muted-foreground">
              公式LINE · セグメント配信（デモ）
            </p>
          </CardHeader>
          <CardContent className="space-y-5">
            {lineCampaigns.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl border border-border/60 bg-background/50 p-4 transition-all hover:border-primary/30"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-xs text-muted-foreground">Status · {c.status}</p>
                  </div>
                  <Badge variant="secondary">{c.sent.toLocaleString()} recipients</Badge>
                </div>
                <div className="mt-3">
                  <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                    <span>Open rate</span>
                    <span>{c.openRate}%</span>
                  </div>
                  <Progress value={c.openRate} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
