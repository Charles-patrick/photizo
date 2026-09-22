import type { Metadata } from "next";
import Link from "next/link";
import { LogIn } from "lucide-react";
import AuthShell from "@/components/sections/auth/AuthShell";
import SignupForm from "@/components/sections/auth/SignupForm";

export const metadata: Metadata = { title: "Customer Signup | Photizo Properties" };

export default function SignupPage() {
  return (
    <AuthShell>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-lg font-semibold text-charcoal-600 sm:text-xl">
          Customer Signup
        </h1>
        <Link
          href="/login"
          className="flex items-center gap-1.5 text-xs font-medium text-charcoal-600/70 hover:text-olive-500"
        >
          <LogIn className="h-3.5 w-3.5" />
          Login
        </Link>
      </div>
      <SignupForm />
    </AuthShell>
  );
}
