import type { Metadata } from "next";
import Clients from "@/components/sections/realtor/Clients";

export const metadata: Metadata = { title: "Clients | Photizo Realtor" };

export default function Page() {
  return <Clients />;
}
