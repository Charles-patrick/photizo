import type { Metadata } from "next";
import Header from "@/components/sections/realtor/Header";
import AnnualScoreCard from "@/components/sections/realtor/AnnualScoreCard";
import DealStatistics from "@/components/sections/realtor/DealStatistics";
import MyDealsPreview from "@/components/sections/realtor/MyDealsPreview";
import NotificationsPanel from "@/components/sections/realtor/NotificationsPanel";

export const metadata: Metadata = { title: "Dashboard | Photizo Realtor" };

export default function RealtorDashboardPage() {
  return (
    <>
      <Header />
      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <AnnualScoreCard />
          <DealStatistics />
        </div>
        <NotificationsPanel />
      </div>
      <MyDealsPreview />
    </>
  );
}
