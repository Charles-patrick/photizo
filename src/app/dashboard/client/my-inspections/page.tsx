import type { Metadata } from "next";
import MyInspectionsPage from "@/components/sections/dashboard/MyInspectionsPage";

export const metadata: Metadata = {
  title: "My Inspections | Photizo Dashboard",
};

export default function Page() {
  return <MyInspectionsPage />;
}
