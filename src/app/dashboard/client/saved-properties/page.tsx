import type { Metadata } from "next";
import SavedPropertiesPage from "@/components/sections/dashboard/SavedPropertiesPage";

export const metadata: Metadata = {
  title: "Saved Properties | Photizo Dashboard",
  description: "View and manage the properties saved to your Photizo account.",
};

export default function Page() {
  return <SavedPropertiesPage />;
}
