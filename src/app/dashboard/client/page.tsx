import type { Metadata } from "next";
import Header from "@/components/sections/dashboard/Header";
import DashboardStats from "@/components/sections/dashboard/DashboardStats";
import MyInspections from "@/components/sections/dashboard/MyInspections";
import NotificationsPanel from "@/components/sections/dashboard/NotificationsPanel";
import SavedProperties from "@/components/sections/dashboard/SavedProperties";

export const metadata: Metadata = {
  title: "Dashboard | Photizo Properties",
  description:
    "View your property inspections, saved homes, transactions, and account updates.",
};

export default function DashboardPage() {
  return (
    <div className="dashboard-home">
      <Header />
      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-stretch">
        <div className="flex flex-col gap-6">
          <DashboardStats />
          <MyInspections />
        </div>
        <NotificationsPanel />
      </div>
      <SavedProperties />
    </div>
  );
}
