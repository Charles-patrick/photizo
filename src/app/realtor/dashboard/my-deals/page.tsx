import type { Metadata } from "next";
import MyDeals from "@/components/sections/realtor/MyDeals";

export const metadata: Metadata = {
  title: "My Deals | Photizo Realtor",
  description:
    "Track active and completed property deals in the Photizo realtor portal.",
};

export default function Page() {
  return <MyDeals />;
}
