"use client";

import { hotelPackages } from "@/data/mock";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HotelPackagesPage() {
  return (
    <>
      <DashboardHeader title="Hotel Packages" />
      <div className="flex-1 space-y-6 px-4 py-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {hotelPackages.map((h) => (
            <Card
              key={h.id}
              className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="font-display text-2xl">{h.name}</CardTitle>
                    <p className="font-jp text-sm text-muted-foreground">{h.nameJp}</p>
                  </div>
                  <Badge>{h.nights} nights</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{h.availability}</p>
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
                <Button variant="premium" className="w-full rounded-xl">
                  Add to GHL nurture (staff review)
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
