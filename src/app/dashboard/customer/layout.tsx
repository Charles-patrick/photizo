import DashboardSidebar from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-gold-100/40">
      <DashboardSidebar />
      <main className="h-screen min-w-0 overflow-y-auto px-5 pb-8 pt-20 sm:px-6 lg:ml-64 lg:px-8 lg:pt-8">
        {children}
      </main>
    </div>
  );
}
