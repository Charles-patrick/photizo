import type { Metadata } from "next";
import Notifications from "@/components/sections/realtor/Notifications";

export const metadata: Metadata = {
  title: "Notifications | Photizo Realtor",
  description:
    "View updates and reminders related to your Photizo realtor account.",
};

export default function Page() {
  return <Notifications />;
}
