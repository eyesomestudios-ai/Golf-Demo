"use client";

import { motion } from "framer-motion";

export function MountFujiSilhouette({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      aria-hidden
    >
      <defs>
        <linearGradient id="fujiGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        d="M0 120 L140 40 L200 120 L260 35 L400 120 Z"
        fill="url(#fujiGrad)"
        className="dark:opacity-80"
      />
      <path
        d="M120 120 L200 55 L280 120"
        stroke="hsl(var(--foreground) / 0.08)"
        strokeWidth="1"
      />
    </motion.svg>
  );
}
