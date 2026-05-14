"use client";

import { motion } from "framer-motion";
import { CloudSun, Wind } from "lucide-react";

import { weatherMock } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";

export function WeatherWidget({ compact }: { compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="glass-panel overflow-hidden border-white/20 dark:border-white/10">
        <CardContent className={compact ? "p-4" : "p-5"}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Izu Peninsula · 伊豆半島
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold">
                  {weatherMock.tempC}°
                </span>
                <span className="text-sm text-muted-foreground">C</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {weatherMock.condition}
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-sky-400/20 to-primary/20 p-3">
              <CloudSun className="h-7 w-7 text-sky-600 dark:text-sky-300" />
            </div>
          </div>
          {!compact && (
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 rounded-full bg-background/50 px-2 py-1">
                <Wind className="h-3.5 w-3.5" />
                {weatherMock.wind}
              </span>
              <span className="rounded-full bg-background/50 px-2 py-1">
                AQI {weatherMock.aqi}
              </span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-emerald-700 dark:text-emerald-300">
                Playability {weatherMock.playability}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
