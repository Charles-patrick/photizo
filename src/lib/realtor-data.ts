// ---------------------------------------------------------------------
// Realtor dashboard content
// ---------------------------------------------------------------------
// Property browsing reuses the exact same catalog as the client dashboard
// (`featuredProperties`, `propertyTypes`, `propertyStates`, `priceRanges`,
// `amenitiesList` from `@/lib/data`) — realtors browse the same listings,
// so there's no separate/duplicated property dataset here.

export interface RealtorNavLink {
  label: string;
  href: string;
  icon: "grid" | "home" | "briefcase" | "wallet" | "users" | "bell" | "help" | "logout";
}

export const realtorNavLinks: RealtorNavLink[] = [
  { label: "Dashboard", href: "/realtor/dashboard", icon: "grid" },
  { label: "Browse Properties", href: "/realtor/dashboard/browse-properties", icon: "home" },
  { label: "My Deals", href: "/realtor/dashboard/my-deals", icon: "briefcase" },
  { label: "Earnings", href: "/realtor/dashboard/earnings", icon: "wallet" },
  { label: "Clients", href: "/realtor/dashboard/clients", icon: "users" },
  { label: "Notifications", href: "/realtor/dashboard/notifications", icon: "bell" },
  { label: "Support", href: "/realtor/dashboard/support", icon: "help" },
];

export const realtorUser = {
  firstName: "Patrick",
  lastName: "O.",
  realtorId: "OP-12345",
  kycStatus: "verified" as "verified" | "failed" | "processing",
};

export const annualScoreCard = {
  year: 2026,
  availableYears: [2024, 2025, 2026],
  totalReferralSalesVolume: 19_293_750,
  annualTarget: 50_000_000,
};

export interface DealStatCategory {
  id: string;
  label: string;
  count: number;
  color: string;
}

export const dealStatCategories: DealStatCategory[] = [
  { id: "inspecting", label: "Deals under Inspection", count: 23, color: "#5F8A50" },
  { id: "installment", label: "Deals in Installment", count: 37, color: "#C24507" },
  { id: "completed", label: "Deals Completed", count: 10, color: "#076E75" },
];

export const totalDeals = dealStatCategories.reduce((sum, c) => sum + c.count, 0);

export type DealStatus = "Inspecting Property" | "Installment Active" | "Completed Payment";

export interface Deal {
  id: string;
  propertyId: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  status: DealStatus;
  totalAmount: string;
  amountPaid: string;
  percentPaid: number;
  completedStages: number;
  stageDates: (string | null)[];
}

export const DEAL_STAGES = ["Inspecting Property", "Installment Active", "Payment Completed"] as const;

export const deals: Deal[] = [
  {
    id: "deal-1",
    propertyId: "dbricks-court-1",
    clientName: "John Doe",
    clientPhone: "+234 8123456789",
    clientEmail: "j.doe123@gmail.com",
    status: "Installment Active",
    totalAmount: "₦25,670,890",
    amountPaid: "₦19,293,750",
    percentPaid: 75,
    completedStages: 2,
    stageDates: ["2 Aug 2026", "5 Aug 2026", null],
  },
  {
    id: "deal-2",
    propertyId: "dbricks-court-2",
    clientName: "John Doe",
    clientPhone: "+234 8123456789",
    clientEmail: "j.doe123@gmail.com",
    status: "Completed Payment",
    totalAmount: "₦25,670,890",
    amountPaid: "₦25,670,890",
    percentPaid: 100,
    completedStages: 3,
    stageDates: ["2 Aug 2026", "5 Aug 2026", "5 Dec 2026"],
  },
  {
    id: "deal-3",
    propertyId: "adunni-terraces",
    clientName: "John Doe",
    clientPhone: "+234 8123456789",
    clientEmail: "j.doe123@gmail.com",
    status: "Inspecting Property",
    totalAmount: "₦25,670,890",
    amountPaid: "₦0",
    percentPaid: 0,
    completedStages: 1,
    stageDates: ["2 Aug 2026", null, null],
  },
  {
    id: "deal-4",
    propertyId: "haven-city",
    clientName: "John Doe",
    clientPhone: "+234 8123456789",
    clientEmail: "j.doe123@gmail.com",
    status: "Installment Active",
    totalAmount: "₦25,670,890",
    amountPaid: "₦19,293,750",
    percentPaid: 75,
    completedStages: 2,
    stageDates: ["1 Aug 2026", "4 Aug 2026", null],
  },
];

export interface RealtorClient {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export const realtorClients: RealtorClient[] = Array.from({ length: 10 }, (_, i) => ({
  id: `client-${i + 1}`,
  name: "John Doe",
  phone: "+234 8123456789",
  email: "j.doe123@gmail.com",
}));

export const totalClients = 70;

export interface RealtorNotification {
  id: string;
  icon: "calendar" | "bookmark" | "shield-check" | "bell" | "credit-card" | "x-circle";
  title: string;
  description: string;
  time: string;
}

export const realtorNotifications: RealtorNotification[] = [
  { id: "rnotif-1", icon: "bookmark", title: "Property Saved", description: "D'Bricks Court has been added to your list.", time: "1 day ago" },
  { id: "rnotif-2", icon: "calendar", title: "Inspection Reminder", description: "Your inspection at D'Bricks court is tomorrow at 2:00 PM.", time: "2 days ago" },
  { id: "rnotif-3", icon: "shield-check", title: "KYC Verified", description: "Hooray!! Your KYC verification has successfully been completed.", time: "2 days ago" },
  { id: "rnotif-4", icon: "credit-card", title: "Payment due soon", description: "Your next payment on D'Brick Court is due on the 10th of April, 2026.", time: "3 days ago" },
  { id: "rnotif-5", icon: "bookmark", title: "Property Saved", description: "D'Bricks Court has been added to your list.", time: "1 day ago" },
];
