import type { Metadata } from "next";
import Earnings from "@/components/sections/realtor/Earnings";

export const metadata: Metadata = {
  title: "Earnings | Photizo Realtor",
  description:
    "Review your earnings and deal-related payments in the Photizo realtor portal.",
};

export default function Page() {
  return <Earnings />;
}
