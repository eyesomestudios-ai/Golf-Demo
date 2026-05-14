"use client";

import { whatsappLeads } from "@/data/mock";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhatsappLeadsPage() {
  return (
    <>
      <DashboardHeader title="WhatsApp Leads" />
      <div className="flex-1 px-4 py-6 sm:px-6">
        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-2xl">Inbound pipeline</CardTitle>
            <p className="text-sm text-muted-foreground">
              GHL pipeline · staff can qualify before outreach
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {whatsappLeads.map((w) => (
              <div
                key={w.id}
                className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-background/50 p-4 transition-all hover:border-emerald-500/30 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold">{w.name}</p>
                  <p className="text-xs text-muted-foreground">{w.id}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{w.last}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{w.stage}</Badge>
                  <Badge variant="secondary">Value: {w.value}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
