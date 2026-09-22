import type { Metadata } from "next";
import MyDeals from "@/components/sections/realtor/MyDeals";

export const metadata: Metadata = { title: "My Deals | Photizo Realtor" };

export default function Page() {
  return <MyDeals />;
}
