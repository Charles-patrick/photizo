import type { Metadata } from "next";
import KycForm from "@/components/sections/kyc/KycForm";

export const metadata: Metadata = {
  title: "Complete your Profile (KYC) | Photizo Properties",
};

export default function KycPage() {
  return <KycForm />;
}
