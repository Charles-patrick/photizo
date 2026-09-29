import type { Metadata } from "next";
import Clients from "@/components/sections/realtor/Clients";

export const metadata: Metadata = {
  title: "Clients | Photizo Realtor",
  description:
    "View and manage your client relationships in the Photizo realtor portal.",
};

export default function Page() {
  return <Clients />;
}
