import type { Metadata } from "next";
import Transactions from "@/components/sections/dashboard/Transactions";

export const metadata: Metadata = { title: "Transactions | Photizo Dashboard" };

export default function Page() {
  return <Transactions />;
}
