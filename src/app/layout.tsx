import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Noto_Sans_JP } from "next/font/google";

import { FloatingAssistant } from "@/components/floating-assistant";
import { Providers } from "@/components/providers";

import "./globals.css";

import { club } from "@/data/mock";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${club.name} · AI-assisted reception`,
  description: club.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${instrument.variable} ${notoJp.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <FloatingAssistant />
        </Providers>
      </body>
    </html>
  );
}
