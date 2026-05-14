"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { club } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function MarketingNav({ className }: { className?: string }) {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/55 backdrop-blur-xl dark:bg-background/40",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/90 to-emerald-600 text-primary-foreground shadow-premium">
            <Sparkles className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg tracking-tight">{club.name}</p>
            <p className="font-jp text-[10px] text-muted-foreground">
              {club.nameJp}
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Platform
          </a>
          <a href="#voice" className="transition-colors hover:text-foreground">
            Voice intake
          </a>
          <a href="#course" className="transition-colors hover:text-foreground">
            Course
          </a>
          <a href="#hotel" className="transition-colors hover:text-foreground">
            Stay
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-xl" variant="outline">
            <Link href="/dashboard">Console</Link>
          </Button>
          <Button asChild size="sm" className="hidden rounded-xl sm:inline-flex" variant="premium">
            <Link href="/dashboard/live-call">Voice workspace</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
