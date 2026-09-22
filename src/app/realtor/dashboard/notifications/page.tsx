import type { Metadata } from "next";
import Notifications from "@/components/sections/realtor/Notifications";

export const metadata: Metadata = { title: "Notifications | Photizo Realtor" };

export default function Page() {
  return <Notifications />;
}
