import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Photizo Properties",
  description: "Reset your Photizo Properties account password.",
  robots: { index: false, follow: false },
};

export default function ForgotPasswordPage() {
  return (
    <h1 className="flex min-h-screen items-center justify-center bg-gold-50 px-5 text-center font-display text-2xl font-semibold text-charcoal-600">
      Forgot Password
    </h1>
  );
}
