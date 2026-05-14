"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calendar,
  Globe2,
  Headphones,
  Languages,
  Play,
  Sparkles,
  Star,
} from "lucide-react";

import { club, courseShowcase, features, heroStats, hotelPackages, testimonials } from "@/data/mock";
import { MarketingNav } from "@/components/marketing-nav";
import { MountFujiSilhouette } from "@/components/mount-fuji-silhouette";
import { VoiceWaveform } from "@/components/voice-waveform";
import { WeatherWidget } from "@/components/weather-widget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const iconMap = {
  sparkles: Sparkles,
  calendar: Calendar,
  building2: Building2,
  globe2: Globe2,
} as const;

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -40]);

  return (
    <div className="min-h-screen bg-hero-mesh fuji-bg">
      <MarketingNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 sm:pt-20 lg:pt-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--accent)/0.15),_transparent_55%)]" />
          <MountFujiSilhouette className="pointer-events-none absolute bottom-0 left-1/2 w-[min(900px,140%)] -translate-x-1/2 opacity-90" />

          <motion.div style={{ y: heroY }} className="relative mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/40 px-3 py-1 text-xs font-medium backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  AI-assisted reception · 伊豆
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.65 }}
                  className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                >
                  {club.tagline}
                </motion.h1>
                <p className="font-jp mt-3 text-sm text-muted-foreground">{club.taglineJp}</p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="mt-5 max-w-xl text-lg text-muted-foreground"
                >
                  {club.name} gives your front desk a calm, bilingual assistant for after-hours
                  coverage and intake — while tee-time truth and final confirmations stay with your
                  staff and existing reservation systems. GoHighLevel powers CRM, journeys, and
                  LINE/WhatsApp follow-up.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.55 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <Button asChild size="lg" variant="premium" className="rounded-2xl px-8">
                    <Link href="/dashboard">
                      See staff-supervised console
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-2xl">
                    <Link href="/dashboard/live-call">
                      <Play className="h-4 w-4" />
                      Voice intake workspace
                    </Link>
                  </Button>
                </motion.div>
                <div className="mt-10 grid grid-cols-3 gap-4 sm:max-w-lg">
                  {heroStats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="rounded-2xl border border-white/20 bg-white/30 p-3 text-center backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                    >
                      <p className="font-display text-2xl font-semibold">{s.value}</p>
                      <p className="text-[11px] font-medium text-muted-foreground">
                        {s.label}
                      </p>
                      <p className="font-jp mt-1 text-[10px] text-muted-foreground/80">
                        {s.sub}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl" />
                <Card className="relative overflow-hidden rounded-3xl border-white/25 bg-white/50 shadow-glass-lg backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Reception assistant</CardTitle>
                        <CardDescription>Voice · LINE · WhatsApp · staff handoff</CardDescription>
                      </div>
                      <Badge variant="glass" className="gap-1">
                        <Languages className="h-3 w-3" />
                        Auto-translate
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-2xl border border-white/30 bg-gradient-to-br from-background/60 to-muted/30 p-4 dark:border-white/10">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Headphones className="h-3.5 w-3.5" />
                          Inbound · Priority
                        </span>
                        <span>00:42</span>
                      </div>
                      <VoiceWaveform />
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        “We’re landing in Haneda Friday — can you note twilight preferences and a
                        ryokan transfer? We understand the club confirms from the live sheet.”
                      </p>
                    </div>
                    <WeatherWidget compact />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-white/10 bg-background/40 py-20 backdrop-blur-sm dark:bg-background/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Platform
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Built for trust on the fairway.
              </h2>
              <p className="mt-3 text-muted-foreground">
                スタッフの判断を尊重し、ゲストには誠実な案内を。
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {features.map((f, i) => {
                const Icon = iconMap[f.icon];
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: 0.06 * i }}
                  >
                    <Card className="group h-full rounded-2xl border-white/20 bg-white/40 transition-all hover:-translate-y-1 hover:shadow-glass-lg dark:border-white/10 dark:bg-zinc-900/40">
                      <CardHeader>
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">{f.title}</CardTitle>
                        <p className="font-jp text-sm text-muted-foreground">{f.titleJp}</p>
                        <CardDescription className="text-base leading-relaxed">
                          {f.desc}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Voice demo */}
        <section id="voice" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl">
                  Multilingual voice intake — staff stay in control
                </h2>
                <p className="mt-3 font-jp text-sm text-muted-foreground">
                  多言語の一次受付 · 予約確定はスタッフへ
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    After-hours answering with calm, luxury tone (simulated)
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-primary" />
                    Language hints for your team — not a substitute for local +81 trust
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-500" />
                    Draft requests & holds to GHL / reservations — never auto-confirms inventory
                  </li>
                </ul>
              </div>
              <Card className="rounded-3xl border-white/20 bg-gradient-to-br from-card/90 to-muted/30 p-6 shadow-premium backdrop-blur-xl dark:border-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Assistant console</p>
                  <Badge variant="secondary">Demo</Badge>
                </div>
                <div className="mt-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-4">
                  <VoiceWaveform />
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-xl bg-background/60 p-3 dark:bg-background/40">
                    <p className="text-xs text-muted-foreground">Detected</p>
                    <p className="font-medium">English (AU) · Confidence 0.97</p>
                  </div>
                  <div className="rounded-xl bg-background/60 p-3 dark:bg-background/40">
                    <p className="text-xs text-muted-foreground">Next step</p>
                    <p className="font-medium">Awaiting staff approval · 4 pax</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Course */}
        <section id="course" className="border-y border-white/10 bg-background/50 py-20 dark:bg-background/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl">Golf course showcase</h2>
                <p className="mt-2 text-muted-foreground">
                  Pacific elevation meets restrained Japanese landscaping.
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-xl self-start sm:self-auto">
                <Link href="/dashboard/bookings">Reservation queue</Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {courseShowcase.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                >
                  <Card className="overflow-hidden rounded-2xl border-white/15 bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950 text-zinc-50 shadow-glass-lg dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/80">
                    <div className="relative h-48 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_45%),linear-gradient(145deg,rgba(16,185,129,0.25),transparent)]" />
                    <CardContent className="space-y-2 p-6">
                      <Badge variant="glass" className="border-white/20 text-zinc-100">
                        {c.tag}
                      </Badge>
                      <h3 className="font-display text-2xl">{c.name}</h3>
                      <p className="font-jp text-sm text-zinc-300">{c.nameJp}</p>
                      <p className="text-xs uppercase tracking-widest text-zinc-400">
                        {c.holes}
                      </p>
                      <p className="text-sm text-zinc-300">{c.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotel */}
        <section id="hotel" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl">Hotel packages</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Curated stays with private onsen and summit shuttles — availability and changes are
              always confirmed by your team and partners.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {hotelPackages.map((h) => (
                <Card
                  key={h.id}
                  className="rounded-2xl border-white/20 bg-white/45 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle>{h.name}</CardTitle>
                        <p className="font-jp text-sm text-muted-foreground">{h.nameJp}</p>
                      </div>
                      <Badge>{h.nights} nights</Badge>
                    </div>
                    <CardDescription>{h.availability}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-display text-3xl">
                      ¥{h.priceJPY.toLocaleString()}
                      <span className="text-sm font-sans text-muted-foreground"> / party</span>
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {h.perks.map((p) => (
                        <li
                          key={p}
                          className="rounded-full bg-muted/60 px-3 py-1 text-xs font-medium"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full rounded-xl" variant="premium">
                      Send request to reservations
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-white/10 bg-muted/30 py-20 dark:bg-muted/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl">Trusted by discerning travelers</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <Card
                  key={t.name}
                  className="rounded-2xl border-white/15 bg-background/70 p-6 backdrop-blur-md dark:bg-background/50"
                >
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    “{t.quote}”
                  </p>
                  <p className="mt-4 text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className="border-t border-white/10 bg-gradient-to-b from-background to-primary/10 py-16">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <Building2 className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Hospitality-first operations at Izu Heights
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Explore how reception, reservations, and GHL journeys work together — with explicit
              staff approval before guests receive confirmations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-2xl" variant="premium">
                <Link href="/dashboard">Open operations console</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <Link href="/dashboard/marketing">CRM & follow-up flows</Link>
              </Button>
            </div>
            <p className="mt-10 text-xs text-muted-foreground">
              © {new Date().getFullYear()} {club.name} · Prototype UI
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
