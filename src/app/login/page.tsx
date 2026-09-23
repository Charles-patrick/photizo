import type { Metadata } from "next";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import AuthShell from "@/components/sections/auth/AuthShell";
import LoginForm from "@/components/sections/auth/LoginForm";

export const metadata: Metadata = {
  title: "Customer Login | Photizo Properties",
};

export default function LoginPage() {
  return (
    <AuthShell>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-lg font-semibold text-charcoal-600 sm:text-xl">
          Customer Login
        </h1>
        <Link
          href="/signup"
          className="flex items-center gap-1.5 text-sm font-medium text-charcoal-600/70 hover:text-olive-500"
        >
          <UserPlus className="h-3.5 w-3.5" />
          Sign Up
        </Link>
      </div>
      <LoginForm />
    </AuthShell>
  );
}
