import Link from "next/link";
import { Bookmark, Calendar, Receipt } from "lucide-react";
import { dashboardStats } from "@/lib/data";

const icons = { calendar: Calendar, receipt: Receipt, bookmark: Bookmark };

const statLinks = {
  inspections: "/dashboard/customer/my-inspections",
  transactions: "/dashboard/customer/transactions",
  saved: "/dashboard/customer/saved-properties",
} as const;

export default function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {dashboardStats.map((stat) => {
        const Icon = icons[stat.icon];
        return (
          <Link
            key={stat.id}
            href={statLinks[stat.id as keyof typeof statLinks]}
            className={`rounded-2xl ${stat.color} p-5 text-gold-50 transition-transform hover:-translate-y-0.5`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-snug">{stat.label}</p>
              <Icon className="h-5 w-5 shrink-0 opacity-90" />
            </div>
            <p className="mt-4 font-display text-3xl font-semibold">
              {stat.value}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
