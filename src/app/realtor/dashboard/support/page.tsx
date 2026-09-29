import type { Metadata } from "next";
import Support from "@/components/sections/realtor/Support";

export const metadata: Metadata = {
  title: "Support | Photizo Realtor",
  description:
    "Contact Photizo Properties support for help with your realtor account.",
};

export default function Page() {
  return <Support />;
}
