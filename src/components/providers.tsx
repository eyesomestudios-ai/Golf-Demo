"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider delayDuration={200}>
        {children}
        <Toaster
          richColors
          position="top-center"
          toastOptions={{
            classNames: {
              toast:
                "rounded-xl border bg-background/90 backdrop-blur-md shadow-glass-lg",
            },
          }}
        />
      </TooltipProvider>
    </ThemeProvider>
  );
}
