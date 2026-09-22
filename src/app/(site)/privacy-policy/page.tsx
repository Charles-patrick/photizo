import type { Metadata } from "next";
import PageComingSoon from "@/components/ui/PageComingSoon";

export const metadata: Metadata = { title: "Privacy Policy | Photizo Properties" };

export default function PrivacyPolicyPage() {
  return (
    <PageComingSoon
      title="Privacy Policy"
      description="Our privacy policy will be published here."
    />
  );
}
