import type { Metadata } from "next";
import Support from "@/components/sections/dashboard/Support";

export const metadata: Metadata = {
  title: "Support | Photizo Dashboard",
  description:
    "Contact Photizo Properties support for help with your account or property journey.",
};

export default function Page() {
  return <Support />;
}
