import type { Metadata } from "next";
import Notifications from "@/components/sections/dashboard/Notifications";

export const metadata: Metadata = {
  title: "Notifications | Photizo Dashboard",
};

export default function Page() {
  return <Notifications />;
}
