import type { Metadata } from "next";
import SavedPropertiesPage from "@/components/sections/dashboard/SavedPropertiesPage";

export const metadata: Metadata = {
  title: "Saved Properties | Photizo Dashboard",
};

export default function Page() {
  return <SavedPropertiesPage />;
}
