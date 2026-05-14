"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Crown,
  Languages,
  MessageCircle,
  PhoneForwarded,
  Sparkles,
  User,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

import { bookingExtraction, liveCallExample, transcriptLines } from "@/data/mock";
import { VoiceWaveform } from "@/components/voice-waveform";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";

export function LiveCallScreen() {
  const [aiSpeaking, setAiSpeaking] = React.useState(true);
  React.useEffect(() => {
    const id = window.setInterval(() => setAiSpeaking((v) => !v), 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.35),_hsl(var(--background))_55%)]">
      <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,hsl(var(--accent)/0.08),transparent_40%,hsl(var(--primary)/0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <header className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-6">
        <Button variant="ghost" asChild className="gap-2 rounded-xl">
                  <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
            Reception overview
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="glass" className="hidden sm:inline-flex">
            Encrypted channel · デモ
          </Badge>
          <ThemeToggle />
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6">
        <div className="mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-muted-foreground backdrop-blur-md"
          >
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            Staff-supervised intake · Izu Heights
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl"
          >
            Voice reception workspace
          </motion.h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Assistant captures requests and drafts holds — reservations confirms against live
            inventory.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <motion.div
            layout
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-emerald-950/40 p-6 text-zinc-50 shadow-glass-lg backdrop-blur-2xl dark:from-zinc-950 dark:via-zinc-950/80 dark:to-emerald-950/50"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
            <div className="relative flex flex-col items-center py-8">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(16,185,129,0.25)]">
                <motion.div
                  className="absolute inset-2 rounded-full border border-emerald-400/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                />
                <Sparkles className="h-12 w-12 text-emerald-300" />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-zinc-400">
                {aiSpeaking ? "Assistant speaking" : "Listening"}
              </p>
              <div className="mt-6 w-full max-w-md px-4">
                <VoiceWaveform active={aiSpeaking} />
              </div>
            </div>

            <div className="relative mt-4 grid gap-4 md:grid-cols-2">
              <Card className="rounded-2xl border-white/10 bg-black/30 text-zinc-50 backdrop-blur-md">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Languages className="h-4 w-4" />
                    Language detection
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge className="bg-emerald-600/90">{liveCallExample.language}</Badge>
                    <Badge variant="outline" className="border-white/20 text-zinc-100">
                      Lead tag: international
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-white/10 bg-black/30 text-zinc-50 backdrop-blur-md">
                <CardContent className="p-4">
                  <p className="text-xs text-zinc-400">Guest tone (assist)</p>
                  <div className="mt-2 flex items-center gap-3">
                    <Progress value={86} className="h-2 flex-1 bg-zinc-800" />
                    <span className="text-sm font-medium text-emerald-300">Calm</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <ScrollArea className="relative mt-6 h-[220px] rounded-2xl border border-white/10 bg-black/25 p-4">
              <div className="space-y-4 pr-3">
                {transcriptLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="text-sm"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                      {line.role === "caller" ? "Caller" : "Assistant"} · {line.t}
                    </span>
                    <p
                      className={
                        line.role === "ai"
                          ? "mt-1 rounded-xl bg-emerald-500/15 px-3 py-2 text-zinc-100"
                          : "mt-1 text-zinc-400"
                      }
                    >
                      {line.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>

          <div className="space-y-4">
            <Card className="rounded-2xl border-white/15 bg-card/80 backdrop-blur-xl dark:border-white/10">
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">James Walsh</p>
                    <p className="text-xs text-muted-foreground">+61 · First-time inbound</p>
                  </div>
                </div>
                <SeparatorMini />
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{liveCallExample.reservationStatus}</Badge>
                  <Badge variant="secondary">{liveCallExample.frontDesk}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-muted/50 p-2">
                    <p className="text-muted-foreground">VIP match</p>
                    <p className="font-medium">Low</p>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-2">
                    <p className="text-muted-foreground">Channel</p>
                    <p className="font-medium">+81 voice (local trust)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-white/15 bg-card/80 backdrop-blur-xl dark:border-white/10">
              <CardContent className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Reservation draft (not confirmed)
                </p>
                <div className="mt-3 space-y-2 text-sm">
                  {Object.entries(bookingExtraction).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-2 border-b border-border/40 py-1 last:border-0">
                      <span className="text-muted-foreground capitalize">{k}</span>
                      <span className="font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-2">
              <Button
                className="rounded-xl"
                variant="premium"
                onClick={() =>
                  toast.success("Hold requested", {
                    description: "Queued for reservations desk — pending staff approval.",
                  })
                }
              >
                Request provisional hold
              </Button>
              <Button
                className="rounded-xl"
                variant="outline"
                onClick={() =>
                  toast.message("WhatsApp draft", {
                    description: "Saved in GHL — staff can edit before sending.",
                  })
                }
              >
                <MessageCircle className="h-4 w-4" />
                Queue WhatsApp draft
              </Button>
              <Button
                className="rounded-xl"
                variant="secondary"
                onClick={() =>
                  toast.info("Front desk notified", {
                    description: "Escalation card created for on-site team.",
                  })
                }
              >
                <PhoneForwarded className="h-4 w-4" />
                Escalate to front desk
              </Button>
              <Button
                className="rounded-xl"
                variant="outline"
                onClick={() =>
                  toast.success("VIP flag for review", {
                    description: "Reservations will confirm before any commitment messaging.",
                  })
                }
              >
                <Crown className="h-4 w-4" />
                Flag VIP for review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeparatorMini() {
  return <div className="h-px w-full bg-border/60" />;
}
