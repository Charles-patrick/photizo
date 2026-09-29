import type { Metadata } from "next";
import RealtorSidebar from "@/components/layout/RealtorSidebar";

export const metadata: Metadata = {
  title: "Realtor Dashboard | Photizo Properties",
  robots: { index: false, follow: false },
};

export default function RealtorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gold-100/40">
      <RealtorSidebar />
      <main className="flex-1 p-5 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}
