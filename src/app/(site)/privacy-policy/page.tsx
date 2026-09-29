import type { Metadata } from "next";
import PageComingSoon from "@/components/ui/PageComingSoon";

export const metadata: Metadata = {
  title: "Privacy Policy | Photizo Properties",
  description:
    "Learn how Photizo Properties handles personal information and protects your privacy when you use our website and services.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <PageComingSoon
      title="Privacy Policy"
      description="Our privacy policy will be published here."
    />
  );
}
