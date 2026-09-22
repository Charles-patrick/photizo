import type { Metadata } from "next";
import BrowseProperties from "@/components/sections/dashboard/BrowseProperties";

export const metadata: Metadata = {
  title: "Browse Properties | Photizo Dashboard",
};

export default function BrowsePropertiesPage() {
  return <BrowseProperties />;
}
