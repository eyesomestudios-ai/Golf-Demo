"use client";

import { motion } from "framer-motion";

export function VoiceWaveform({ active = true }: { active?: boolean }) {
  const bars = 24;
  return (
    <div className="flex h-14 items-end justify-center gap-[3px]">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-primary/40 via-emerald-400 to-accent"
          animate={
            active
              ? {
                  height: [10, 28 + (i % 5) * 8, 12, 36 - (i % 4) * 6, 10],
                }
              : { height: 8 }
          }
          transition={{
            duration: 1.1 + i * 0.03,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{ height: 8 }}
        />
      ))}
    </div>
  );
}
