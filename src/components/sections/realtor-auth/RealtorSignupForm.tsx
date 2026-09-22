"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AuthField from "@/components/sections/auth/AuthField";
import AuthPasswordField from "@/components/sections/auth/AuthPasswordField";

export default function RealtorSignupForm() {
  return (
    <form className="mt-6 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <AuthField label="Full Name" name="fullName" autoComplete="name" />
      <AuthField label="Email Address" name="email" type="email" autoComplete="email" />
      <AuthField label="Phone Number" name="phone" type="tel" autoComplete="tel" />
      <AuthPasswordField label="Create Password" name="password" autoComplete="new-password" />
      <AuthPasswordField label="Confirm Password" name="confirmPassword" autoComplete="new-password" />
      <AuthField label="Referral Code (Optional)" name="referral" />

      <label className="flex items-start gap-2 text-xs leading-relaxed text-charcoal-600/70">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal-600/40 text-olive-500 focus:ring-olive-500" />
        I agree to the{" "}
        <Link href="/privacy-policy" className="text-olive-500 underline underline-offset-2">Terms and Conditions</Link>
      </label>

      <button type="submit" className="group mx-auto mt-2 inline-flex items-center gap-2.5 border-b border-olive-500/70 px-0.5 pb-2.5 text-sm font-semibold uppercase tracking-wide text-olive-500 transition-colors hover:border-olive-500">
        Sign Up
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
