"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

import { incomingCalls } from "@/data/mock";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CallsPage() {
  return (
    <>
      <DashboardHeader title="Live Calls" />
      <div className="flex-1 space-y-6 px-4 py-6 sm:px-6">
        <Card className="rounded-2xl border-white/15 bg-gradient-to-br from-card/80 via-card/60 to-primary/5 backdrop-blur-md dark:border-white/10">
          <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="font-display text-2xl">Live queue</CardTitle>
              <p className="text-sm text-muted-foreground">
                Assistant triage · staff confirms outcomes
              </p>
            </div>
            <Button asChild variant="premium" className="rounded-xl">
              <Link href="/dashboard/live-call">Open voice intake workspace</Link>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {incomingCalls.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i }}
                className="rounded-2xl border border-border/60 bg-background/50 p-4 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <Badge variant="outline">{c.wait}</Badge>
                </div>
                <p className="mt-3 font-semibold">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.from}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <Badge>{c.lang}</Badge>
                  <span className="text-muted-foreground">{c.intent}</span>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
