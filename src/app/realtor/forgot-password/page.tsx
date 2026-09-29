import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Realtor Password | Photizo Properties",
  description: "Reset your Photizo Properties realtor account password.",
  robots: { index: false, follow: false },
};

export default function RealtorForgotPasswordPage() {
  return (
    <h1 className="flex min-h-screen items-center justify-center bg-gold-50 px-5 text-center font-display text-2xl font-semibold text-charcoal-600">
      Forgot Password
    </h1>
  );
}
