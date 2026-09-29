import type { Metadata } from "next";
import Transactions from "@/components/sections/dashboard/Transactions";

export const metadata: Metadata = {
  title: "Transactions | Photizo Dashboard",
  description:
    "Track property payment plans, transaction history, and payment progress.",
};

export default function Page() {
  return <Transactions />;
}
