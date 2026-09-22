import RealtorSidebar from "@/components/layout/RealtorSidebar";

export default function RealtorDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gold-100/40">
      <RealtorSidebar />
      <main className="flex-1 p-5 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}
