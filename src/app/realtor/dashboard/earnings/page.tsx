import type { Metadata } from "next";
import Earnings from "@/components/sections/realtor/Earnings";

export const metadata: Metadata = { title: "Earnings | Photizo Realtor" };

export default function Page() {
  return <Earnings />;
}
