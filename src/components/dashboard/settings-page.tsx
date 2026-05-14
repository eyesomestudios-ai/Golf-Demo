"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export function SettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" />
      <div className="mx-auto max-w-4xl flex-1 space-y-6 px-4 py-6 sm:px-6">
        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-xl">Voice · 音声</CardTitle>
            <CardDescription>
              Reception tone & latency — assistant defers inventory questions to staff (mock)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border bg-muted/30 p-4">
              <div>
                <p className="font-medium">Ultra-low latency mode</p>
                <p className="text-xs text-muted-foreground">Prioritizes short barge-in windows</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Voice timbre</Label>
                <Select defaultValue="calm">
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="calm">Calm concierge</SelectItem>
                    <SelectItem value="bright">Bright host</SelectItem>
                    <SelectItem value="deep">Deep night mode</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Background ambience</Label>
                <Select defaultValue="izu">
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="izu">Izu forest · 伊豆の森</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-xl">Assistant tone</CardTitle>
            <CardDescription>Respectful, calm phrasing — never implies auto-confirmed tee times</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border bg-muted/30 p-4">
              <div>
                <p className="font-medium">Extended honorifics (JP)</p>
                <p className="text-xs text-muted-foreground">敬語を深めて応答</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-xl border bg-muted/30 p-4">
              <div>
                <p className="font-medium">Soft package hints</p>
                <p className="text-xs text-muted-foreground">
                  Only from staff-approved scripts — no hard sell
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-xl">Languages</CardTitle>
            <CardDescription>Priority routing for detection fallbacks</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {["日本語", "English", "中文", "한국어"].map((lang) => (
              <div
                key={lang}
                className="flex items-center justify-between rounded-xl border bg-muted/30 px-3 py-2 text-sm"
              >
                <span>{lang}</span>
                <Switch defaultChecked={lang !== "中文"} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-xl">Integrations</CardTitle>
            <CardDescription>GoHighLevel for CRM & journeys · Local +81 telephony</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>GoHighLevel pipeline</Label>
                <Input defaultValue="Inbound · Izu Heights" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Salesforce org (optional)</Label>
                <Input placeholder="Not connected" className="rounded-xl" />
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Twilio numbers</Label>
              <Input defaultValue="+81 557-XX-XXXX (Voice)" className="rounded-xl" />
              <Input defaultValue="+81 90-XXXX-LINE bridge" className="rounded-xl" />
            </div>
            <div className="flex justify-end">
              <Button
                type="button"
                variant="secondary"
                className="rounded-xl"
                onClick={() => toast.success("Saved integration profile (prototype)")}
              >
                Save integrations
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-xl">Business hours</CardTitle>
            <CardDescription>
              Assistant can answer after hours · escalations route to on-duty staff
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Staff desk</Label>
              <Input defaultValue="06:00 – 22:00 JST" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label>VIP override</Label>
              <Input defaultValue="24/7 human bridge" className="rounded-xl" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-white/15 bg-card/70 backdrop-blur-md dark:border-white/10">
          <CardHeader>
            <CardTitle className="font-display text-xl">Membership tiers</CardTitle>
            <CardDescription>Billing handled externally — labels for assistant context only</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              { tier: "Platinum", perks: "Guaranteed dawn window, private lounge" },
              { tier: "Gold", perks: "48h hold, complimentary replay rain check" },
              { tier: "Guest", perks: "Standard routing — staff confirms all bookings" },
            ].map((row) => (
              <div
                key={row.tier}
                className="flex flex-col justify-between gap-2 rounded-xl border bg-muted/30 p-4 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="font-semibold">{row.tier}</p>
                  <p className="text-xs text-muted-foreground">{row.perks}</p>
                </div>
                <Switch defaultChecked={row.tier !== "Guest"} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
