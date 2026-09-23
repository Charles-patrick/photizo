import type { Metadata } from "next";
import Link from "next/link";
import { LogIn } from "lucide-react";
import AuthShell from "@/components/sections/auth/AuthShell";
import RealtorSignupForm from "@/components/sections/realtor-auth/RealtorSignupForm";

export const metadata: Metadata = {
  title: "Realtor Signup | Photizo Properties",
};

export default function RealtorSignupPage() {
  return (
    <AuthShell>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-lg font-semibold text-charcoal-600 sm:text-xl">
          Realtor Signup
        </h1>
        <Link
          href="/realtor/login"
          className="flex items-center gap-1.5 text-sm font-medium text-charcoal-600/70 hover:text-olive-500"
        >
          <LogIn className="h-3.5 w-3.5" />
          Login
        </Link>
      </div>
      <RealtorSignupForm />
    </AuthShell>
  );
}
