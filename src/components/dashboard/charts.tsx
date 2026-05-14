"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  chartAiVsHuman,
  chartBookingGrowth,
  chartIntlRatio,
  chartPeakHours,
  chartRevenue,
  chartSatisfaction,
} from "@/data/mock";

export function BookingGrowthChart() {
  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartBookingGrowth} margin={{ left: 0, right: 8, top: 8 }}>
          <defs>
            <linearGradient id="gBookings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(158 42% 42%)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="hsl(158 42% 42%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gStaffConfirmed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(38 78% 58%)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="hsl(38 78% 58%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "hsl(var(--border))",
              background: "hsl(var(--popover) / 0.95)",
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="requests"
            name="Guest requests logged"
            stroke="hsl(var(--primary))"
            fill="url(#gBookings)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="staffConfirmed"
            name="Staff-confirmed"
            stroke="hsl(var(--accent))"
            fill="url(#gStaffConfirmed)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PeakHoursChart() {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartPeakHours} margin={{ left: 0, right: 8, top: 8 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" vertical={false} />
          <XAxis dataKey="hour" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "hsl(var(--border))",
              background: "hsl(var(--popover) / 0.95)",
            }}
          />
          <Bar
            dataKey="calls"
            name="Calls"
            fill="url(#barGrad)"
            radius={[8, 8, 0, 0]}
          />
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(158 42% 42%)" />
              <stop offset="100%" stopColor="hsl(200 35% 35%)" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RevenueStackChart() {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartRevenue} margin={{ left: 0, right: 8, top: 8 }}>
          <defs>
            <linearGradient id="revGolf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="revHotel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.45} />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" />
          <XAxis dataKey="week" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "hsl(var(--border))",
              background: "hsl(var(--popover) / 0.95)",
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="golf"
            name="Golf (M JPY)"
            stackId="1"
            stroke="hsl(var(--primary))"
            fill="url(#revGolf)"
          />
          <Area
            type="monotone"
            dataKey="hotel"
            name="Hotel (M JPY)"
            stackId="1"
            stroke="hsl(var(--accent))"
            fill="url(#revHotel)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AiHumanPieChart() {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartAiVsHuman}
            dataKey="value"
            nameKey="name"
            innerRadius={52}
            outerRadius={78}
            paddingAngle={4}
          >
            {chartAiVsHuman.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "hsl(var(--border))",
              background: "hsl(var(--popover) / 0.95)",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IntlRatioChart() {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartIntlRatio} margin={{ left: 0, right: 8, top: 8 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11 }}
            stroke="hsl(var(--muted-foreground))"
          />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "hsl(var(--border))",
              background: "hsl(var(--popover) / 0.95)",
            }}
          />
          <Line
            type="monotone"
            dataKey="intl"
            name="Intl share"
            stroke="hsl(var(--accent))"
            strokeWidth={3}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SatisfactionChart() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartSatisfaction} margin={{ left: 0, right: 8, top: 8 }}>
          <defs>
            <linearGradient id="csatGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" />
          <XAxis dataKey="week" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <YAxis domain={[4, 5]} tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "hsl(var(--border))",
              background: "hsl(var(--popover) / 0.95)",
            }}
          />
          <Area
            type="monotone"
            dataKey="csat"
            name="CSAT"
            stroke="hsl(var(--primary))"
            fill="url(#csatGrad)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
