import type { Metadata } from "next";
import BrowseProperties from "@/components/sections/realtor/BrowseProperties";

export const metadata: Metadata = {
  title: "Browse Properties | Photizo Realtor",
  description:
    "Browse available listings and property information in the Photizo realtor portal.",
};

export default function Page() {
  return <BrowseProperties />;
}
