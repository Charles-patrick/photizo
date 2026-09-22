import type { Metadata } from "next";
import BrowseProperties from "@/components/sections/realtor/BrowseProperties";

export const metadata: Metadata = { title: "Browse Properties | Photizo Realtor" };

export default function Page() {
  return <BrowseProperties />;
}
