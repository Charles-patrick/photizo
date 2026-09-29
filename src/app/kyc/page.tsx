import type { Metadata } from "next";
import KycForm from "@/components/sections/kyc/KycForm";

export const metadata: Metadata = {
  title: "Complete your Profile (KYC) | Photizo Properties",
  description:
    "Complete your identity verification for your Photizo Properties account.",
  robots: { index: false, follow: false },
};

export default function KycPage() {
  return <KycForm />;
}
