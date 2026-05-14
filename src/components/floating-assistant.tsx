"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Mic, Send, Sparkles, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function FloatingAssistant() {
  const [open, setOpen] = React.useState(false);
  const [typing, setTyping] = React.useState(false);

  const simulateReply = () => {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      toast.success("Reception assistant", {
        description:
          "Provisional hold drafted for Coastal Links — reservations will confirm from the live tee sheet. Front desk notified.",
      });
    }, 1400);
  };

  return (
    <>
      <motion.button
        type="button"
        layout
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-600 text-primary-foreground shadow-glass-lg ring-2 ring-white/30 dark:from-emerald-500 dark:to-teal-500 dark:ring-white/10 md:bottom-8 md:right-8",
          open && "ring-accent/60"
        )}
        aria-label="Open reception assistant"
      >
        {open ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-5 z-[60] w-[min(100vw-2.5rem,380px)] rounded-2xl border border-white/20 bg-background/90 p-4 shadow-glass-lg backdrop-blur-xl dark:border-white/10 md:bottom-28 md:right-8"
          >
            <div className="flex items-center gap-2 border-b border-border/60 pb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                <Mic className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Assistant · アシスタント</p>
                <p className="text-xs text-muted-foreground">
                  Bilingual intake · staff completes confirmations
                </p>
              </div>
            </div>
            <div className="mt-3 space-y-2 rounded-xl bg-muted/40 p-3 text-sm">
              <p className="text-muted-foreground">
                “Konnichiwa — may I note your June preferences for our reservations team?”
              </p>
              {typing && (
                <div className="flex gap-1 pt-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="mt-3 flex gap-2">
              <Input
                placeholder="Ask in any language…"
                className="rounded-xl"
                onKeyDown={(e) => {
                  if (e.key === "Enter") simulateReply();
                }}
              />
              <Button
                size="icon"
                className="rounded-xl"
                variant="premium"
                onClick={simulateReply}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 w-full gap-2 text-xs text-muted-foreground"
              onClick={() =>
                toast.message("Voice session", {
                  description: "Prototype: voice channel simulated.",
                })
              }
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Start voice preview
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
