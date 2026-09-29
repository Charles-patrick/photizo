import type { Metadata } from "next";
import BrowseProperties from "@/components/sections/dashboard/BrowseProperties";

export const metadata: Metadata = {
  title: "Browse Properties | Photizo Dashboard",
  description: "Browse and filter available Photizo Properties listings.",
};

export default function BrowsePropertiesPage() {
  return <BrowseProperties />;
}
