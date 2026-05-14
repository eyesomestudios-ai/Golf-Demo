export const club = {
  name: "Izu Heights Golf Club",
  nameJp: "伊豆ハイツゴルフクラブ",
  tagline: "Trusted Reception, AI-Assisted — Staff Stay in Control",
  taglineJp: "信頼のおもてなし、AIは補助に。最終判断はスタッフへ",
  location: "Itō, Shizuoka · 伊東市、静岡県",
  phone: "+81 557-XX-XXXX",
};

export const heroStats = [
  { label: "After-hours coverage", value: "24/7", sub: "初動はアシスタント" },
  { label: "Staff-reviewed", value: "100%", sub: "確定予約は人が承認" },
  { label: "Languages", value: "12", sub: "対応言語" },
];

export const features = [
  {
    title: "Front-desk assistant",
    titleJp: "フロント補助",
    desc: "Answers routine questions, captures intent, and prepares clean handoffs for your reservations team—never bypassing them.",
    icon: "sparkles" as const,
  },
  {
    title: "Reservation coordination",
    titleJp: "予約調整",
    desc: "Requests and provisional holds flow into your existing tee-sheet process. Inventory stays authoritative in your legacy or club systems.",
    icon: "calendar" as const,
  },
  {
    title: "Hotel × Golf packages",
    titleJp: "宿泊セット",
    desc: "Concierge-style package suggestions; confirmations and changes remain with staff and partner properties.",
    icon: "building2" as const,
  },
  {
    title: "CRM & journeys (GHL)",
    titleJp: "CRM・オートメーション",
    desc: "GoHighLevel for leads, pipelines, LINE/WhatsApp follow-ups, and campaigns—while tee-time truth lives in your reservation stack.",
    icon: "globe2" as const,
  },
];

export const courseShowcase = [
  {
    name: "Fuji View Nine",
    nameJp: "富士ビューナイン",
    holes: "Holes 1–9",
    desc: "Elevated tees with layered Pacific mist and seasonal cherry wind corridors.",
    image: "/api/placeholder/800/500",
    tag: "Signature",
  },
  {
    name: "Coastal Links",
    nameJp: "コースタルリンクス",
    holes: "Holes 10–18",
    desc: "Ocean breeze strategy play with generous landing zones for resort guests.",
    image: "/api/placeholder/800/500",
    tag: "Guest Favorite",
  },
];

export const hotelPackages = [
  {
    id: "pkg-1",
    name: "Onsen × 36 Holes",
    nameJp: "温泉 × 36ホール",
    nights: 2,
    priceJPY: 428000,
    perks: ["Private onsen", "Caddie concierge", "Club storage"],
    availability: "3 suites left",
  },
  {
    id: "pkg-2",
    name: "Executive Summit",
    nameJp: "エグゼクティブサミット",
    nights: 1,
    priceJPY: 198000,
    perks: ["Boardroom", "Sunrise tee", "Champagne cart"],
    availability: "Limited May",
  },
];

export const testimonials = [
  {
    quote:
      "The assistant took our details overnight; the club called back with real tee options in the morning. Felt premium, not robotic.",
    name: "Sarah Chen",
    role: "Singapore · Handicap 12",
  },
  {
    quote:
      "LINEで要望を整理してくれて、最終確認はいつも担当の方。現場が忙しいときの受け皿になっている感じです。",
    name: "田中 誠",
    role: "東京 · メンバー",
  },
];

export const dashboardKpis = {
  activeCalls: 7,
  guestRequestsToday: 42,
  internationalLeads: 18,
  revenueJPY: 12400000,
  hotelComboRequests: 9,
  pendingStaffApproval: 14,
  provisionalHolds: 6,
};

export const liveCallExample = {
  caller: "Hi, we’re four Australians visiting next month.",
  ai: "We’d be delighted to welcome your group. I can note a Coastal Links morning preference and an onsen package interest—our reservations team will confirm against the live tee sheet and reply within one business day. Nothing is final until they approve.",
  language: "English (AU)",
  sentiment: "Warm / calm",
  tags: ["international", "hotel-combo", "4 players", "hold-requested"],
  whatsapp: "Draft saved · staff can edit before send",
  crm: "Lead logged · GoHighLevel",
  reservationStatus: "Hold Requested",
  frontDesk: "Front desk notified",
};

export const transcriptLines = [
  { role: "caller" as const, text: liveCallExample.caller, t: "0:02" },
  { role: "ai" as const, text: liveCallExample.ai, t: "0:05" },
  {
    role: "caller" as const,
    text: "Perfect — can you add two rooms at the partner ryokan?",
    t: "0:18",
  },
  {
    role: "ai" as const,
    text: "I’ve captured that for Sakura Wing and flagged reservations. They’ll verify partner availability and confirm back to you—no charge or commitment until staff approval.",
    t: "0:21",
  },
];

export const bookingExtraction = {
  date: "2026-06-12",
  time: "07:10",
  players: 4,
  course: "Coastal Links",
  package: "Onsen × 36 Holes",
  notes: "AU inbound · cart preference",
  staffApproval: "Awaiting Staff Approval",
  inventoryNote: "Sync from tee system may be delayed — do not overpromise",
};

export const memberRecognition = {
  name: "Guest · Lead",
  tier: "Prospect",
  history: "First contact",
  preferences: ["English", "WhatsApp", "Hotel combo"],
  nextStep: "Reservations desk review",
};

export const pendingApprovals = [
  {
    id: "PA-204",
    guest: "Walsh Party",
    type: "Tee hold + hotel",
    status: "Awaiting Staff Approval" as const,
    since: "12 min",
    priority: "Standard",
  },
  {
    id: "PA-203",
    guest: "Dupont · Paris",
    type: "Corporate block",
    status: "Pending Confirmation" as const,
    since: "41 min",
    priority: "Standard",
  },
  {
    id: "PA-201",
    guest: "Zurich Family Office",
    type: "VIP arrival + transfer",
    status: "Human approval required" as const,
    since: "6 min",
    priority: "VIP",
  },
];

export const staffInterventionTimeline = [
  {
    t: "09:41",
    actor: "Reservations · S. Yamada",
    action: "Reviewed tee request PA-198 · marked Confirmed by Staff",
  },
  {
    t: "09:18",
    actor: "Assistant",
    action: "Logged intake · provisional hold placed · front desk notified",
  },
  {
    t: "08:55",
    actor: "Front desk · M. Ito",
    action: "Escalated VIP transfer to ops (manual override)",
  },
];

export const escalatedVipRequests = [
  {
    id: "VIP-12",
    guest: "Zurich Family Office",
    summary: "Haneda sedan + dawn bag drop",
    state: "Escalated to front desk",
  },
  {
    id: "VIP-09",
    guest: "Victoria Hsu",
    summary: "Boardroom + 8-ball timing",
    state: "Reservations team reviewing",
  },
];

export const incomingCalls = [
  {
    id: "c1",
    from: "+61 400 *** 882",
    name: "James Walsh",
    wait: "0:12",
    lang: "EN",
    intent: "Tee time + hotel",
  },
  {
    id: "c2",
    from: "+81 90 **** 2211",
    name: "佐藤 美咲",
    wait: "0:04",
    lang: "JA",
    intent: "メンバー予約",
  },
  {
    id: "c3",
    from: "+852 **** 9012",
    name: "WeChat Lead",
    wait: "0:31",
    lang: "ZH",
    intent: "Corporate outing",
  },
];

/** Guest requests logged vs staff-finalized confirmations (does not imply auto-booking). */
export const chartBookingGrowth = [
  { month: "Jan", requests: 820, staffConfirmed: 610 },
  { month: "Feb", requests: 910, staffConfirmed: 702 },
  { month: "Mar", requests: 1040, staffConfirmed: 801 },
  { month: "Apr", requests: 1180, staffConfirmed: 920 },
  { month: "May", requests: 1320, staffConfirmed: 1044 },
];

export const chartPeakHours = [
  { hour: "6", calls: 12 },
  { hour: "7", calls: 38 },
  { hour: "8", calls: 52 },
  { hour: "9", calls: 44 },
  { hour: "10", calls: 28 },
  { hour: "11", calls: 22 },
  { hour: "12", calls: 18 },
];

export const chartRevenue = [
  { week: "W1", golf: 4.2, hotel: 1.8 },
  { week: "W2", golf: 4.6, hotel: 2.1 },
  { week: "W3", golf: 5.1, hotel: 2.4 },
  { week: "W4", golf: 5.4, hotel: 2.9 },
];

export type BookingWorkflowStatus =
  | "Pending Confirmation"
  | "Hold Requested"
  | "Awaiting Staff Approval"
  | "Confirmed by Staff";

export const bookings = [
  {
    id: "B-10482",
    guest: "Walsh Party",
    email: "j.walsh@email.com",
    date: "2026-06-12",
    slot: "07:10",
    players: 4,
    course: "Coastal Links",
    tags: ["international", "hotel-combo"],
    status: "Awaiting Staff Approval" as BookingWorkflowStatus,
    member: false,
  },
  {
    id: "B-10481",
    guest: "田中 誠",
    email: "tanaka@example.jp",
    date: "2026-05-18",
    slot: "08:40",
    players: 2,
    course: "Fuji View Nine",
    tags: ["member"],
    status: "Confirmed by Staff" as BookingWorkflowStatus,
    member: true,
  },
  {
    id: "B-10480",
    guest: "Victoria Hsu",
    email: "v.hsu@corp.hk",
    date: "2026-05-22",
    slot: "06:50",
    players: 8,
    course: "36 Corporate",
    tags: ["VIP", "international"],
    status: "Hold Requested" as BookingWorkflowStatus,
    member: false,
  },
  {
    id: "B-10479",
    guest: "Dupont · Paris",
    email: "events@dupont.fr",
    date: "2026-06-02",
    slot: "09:20",
    players: 4,
    course: "Coastal Links",
    tags: ["international"],
    status: "Pending Confirmation" as BookingWorkflowStatus,
    member: false,
  },
];

export const members = [
  {
    id: "M-2201",
    name: "田中 誠",
    tier: "Gold",
    since: "2019",
    handicap: 14,
    spendYTD: 1280000,
  },
  {
    id: "M-8842",
    name: "James Walsh",
    tier: "International Guest",
    since: "2026",
    handicap: 12,
    spendYTD: 420000,
  },
];

export const lineCampaigns = [
  {
    id: "L1",
    name: "Golden Week Recovery",
    status: "Active",
    sent: 18420,
    openRate: 61,
  },
  {
    id: "L2",
    name: "Member Tee Priority",
    status: "Scheduled",
    sent: 0,
    openRate: 0,
  },
];

export const whatsappCampaigns = [
  {
    id: "W1",
    name: "Inbound Itinerary",
    status: "Active",
    sent: 942,
    replyRate: 44,
  },
  {
    id: "W2",
    name: "Review Request Flow",
    status: "Active",
    sent: 1204,
    replyRate: 38,
  },
];

export const automationNodes = [
  { id: "1", label: "Call Ended", sub: "通話終了", icon: "phone-off" as const },
  { id: "2", label: "CRM (GHL)", sub: "リード同期", icon: "database" as const },
  { id: "3", label: "Staff approval", sub: "承認待ち", icon: "clipboard-check" as const },
  { id: "4", label: "LINE / WhatsApp", sub: "スタッフ確認後", icon: "message-circle" as const },
  { id: "5", label: "Reminder", sub: "リマインド", icon: "bell" as const },
  { id: "6", label: "Review ask", sub: "レビュー", icon: "star" as const },
  { id: "7", label: "Rebooking nurture", sub: "再予約", icon: "refresh-ccw" as const },
];

export const teeSlots = [
  { time: "06:20", status: "available", light: "Dawn" },
  { time: "06:50", status: "member", light: "Golden" },
  { time: "07:10", status: "held", light: "Peak" },
  { time: "07:40", status: "available", light: "Bright" },
  { time: "08:10", status: "weather-hold", light: "Mist" },
];

export const weatherMock = {
  tempC: 19,
  condition: "Light mist · 薄霧",
  wind: "NW 12 km/h",
  aqi: "Excellent",
  playability: "92%",
};

export const chartAiVsHuman = [
  { name: "Assistant intake only", value: 68, fill: "hsl(158 42% 42%)" },
  { name: "Staff / reservations involved", value: 32, fill: "hsl(38 78% 58%)" },
];

export const chartIntlRatio = [
  { month: "Jan", intl: 22 },
  { month: "Feb", intl: 26 },
  { month: "Mar", intl: 31 },
  { month: "Apr", intl: 34 },
  { month: "May", intl: 38 },
];

export const chartSatisfaction = [
  { week: "W1", csat: 4.6 },
  { week: "W2", csat: 4.7 },
  { week: "W3", csat: 4.8 },
  { week: "W4", csat: 4.85 },
];

export const whatsappLeads = [
  {
    id: "WA-901",
    name: "Corporate HK",
    last: "Requested 8-ball + boardroom",
    stage: "Qualified",
    value: "High",
  },
  {
    id: "WA-902",
    name: "Melbourne Golf Society",
    last: "Asked for June mist window",
    stage: "Nurture",
    value: "Med",
  },
  {
    id: "WA-903",
    name: "Zurich Family Office",
    last: "VIP transfer Haneda",
    stage: "Hot",
    value: "High",
  },
];
