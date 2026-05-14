"use client";

import { motion } from "framer-motion";
import {
  Bell,
  ClipboardCheck,
  Database,
  MessageCircle,
  PhoneOff,
  RefreshCcw,
  Star,
} from "lucide-react";

import { automationNodes, lineCampaigns, whatsappCampaigns } from "@/data/mock";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const iconFor = (name: (typeof automationNodes)[number]["icon"]) => {
  const map = {
    "phone-off": PhoneOff,
    database: Database,
    "clipboard-check": ClipboardCheck,
    "message-circle": MessageCircle,
    bell: Bell,
    star: Star,
    "refresh-ccw": RefreshCcw,
  } as const;
  return map[name];
};

export function MarketingPage() {
  return (
    <>
      <DashboardHeader title="Marketing & follow-up" />
      <div className="flex-1 space-y-8 px-4 py-6 sm:px-6">
        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-2xl">Post-call journey</CardTitle>
            <p className="text-sm text-muted-foreground">
              GHL for CRM & campaigns — staff approval before guest-facing confirmations. No
              autonomous tee-time engine.
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-[1180px] items-stretch gap-2 px-1 py-2">
                {automationNodes.map((node, idx) => {
                  const Icon = iconFor(node.icon);
                  return (
                    <div key={node.id} className="flex flex-1 items-center gap-2">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.06 }}
                        className="min-w-[140px] flex-1"
                      >
                        <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-background/90 to-muted/40 p-4 text-center shadow-premium backdrop-blur-md dark:border-white/10">
                          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <p className="mt-3 text-sm font-semibold leading-tight">{node.label}</p>
                          <p className="font-jp mt-1 text-xs text-muted-foreground">{node.sub}</p>
                          <Badge variant="secondary" className="mt-2 text-[10px]">
                            Human-in-the-loop
                          </Badge>
                        </div>
                      </motion.div>
                      {idx < automationNodes.length - 1 && (
                        <motion.div
                          aria-hidden
                          className="hidden h-[2px] w-10 shrink-0 rounded-full bg-gradient-to-r from-primary/50 to-accent/60 sm:block"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: 0.08 + idx * 0.05 }}
                          style={{ originX: 0 }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
            <CardHeader>
              <CardTitle className="font-display text-xl">LINE campaigns</CardTitle>
              <p className="text-xs text-muted-foreground">公式LINE · 季節キャンペーン</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {lineCampaigns.map((c) => (
                <div
                  key={c.id}
                  className="rounded-xl border border-border/60 bg-background/50 p-4 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.status}</p>
                    </div>
                    <Badge variant="outline">{c.sent.toLocaleString()} sent</Badge>
                  </div>
                  <div className="mt-3">
                    <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                      <span>Open rate</span>
                      <span>{c.openRate}%</span>
                    </div>
                    <Progress value={c.openRate} className="h-1.5" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
            <CardHeader>
              <CardTitle className="font-display text-xl">WhatsApp campaigns</CardTitle>
              <p className="text-xs text-muted-foreground">インバウンド旅程 · レビュー依頼</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {whatsappCampaigns.map((c) => (
                <div
                  key={c.id}
                  className="rounded-xl border border-border/60 bg-background/50 p-4 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.status}</p>
                    </div>
                    <Badge variant="secondary">{c.sent} msgs</Badge>
                  </div>
                  <div className="mt-3">
                    <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                      <span>Reply rate</span>
                      <span>{c.replyRate}%</span>
                    </div>
                    <Progress value={c.replyRate} className="h-1.5" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-xl">Seasonal & review flows</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-xl border bg-muted/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Automated reminders
              </p>
              <p className="mt-2 text-muted-foreground">
                T-24h tee SMS/LINE, weather hold push, caddie ETA.
              </p>
            </div>
            <div className="rounded-xl border bg-muted/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Review request
              </p>
              <p className="mt-2 text-muted-foreground">
                Post-round WhatsApp with deep link to Google / TripAdvisor (geo-split).
              </p>
            </div>
            <div className="rounded-xl border bg-muted/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Rebooking campaign
              </p>
              <p className="mt-2 text-muted-foreground">
                If NPS ≥ 9, trigger soft upsell for Fuji View twilight next quarter.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
