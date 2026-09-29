import type { Metadata } from "next";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

export const metadata: Metadata = {
  title: "Client Dashboard | Photizo Properties",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-charcoal-50">
      <DashboardSidebar />
      <main className="h-screen min-w-0 overflow-y-auto px-4 pb-8 pt-20 sm:px-6 lg:ml-64 lg:px-4 lg:pt-1">
        <div className="dashboard-surface rounded-2xl bg-white p-4 sm:p-6 lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
