"use client";

import { members } from "@/data/mock";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MembersDirectory() {
  return (
    <>
      <DashboardHeader title="Members" />
      <div className="flex-1 px-4 py-6 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {members.map((m) => (
            <Card
              key={m.id}
              className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-premium dark:border-white/10"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-lg">{m.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{m.id}</p>
                </div>
                <Badge variant="gold">{m.tier}</Badge>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">Since</p>
                  <p className="font-medium">{m.since}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Handicap</p>
                  <p className="font-medium">{m.handicap}</p>
                </div>
                <div className="col-span-2 rounded-xl bg-muted/40 p-3">
                  <p className="text-xs text-muted-foreground">Spend YTD</p>
                  <p className="font-display text-xl font-semibold">
                    ¥{m.spendYTD.toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
