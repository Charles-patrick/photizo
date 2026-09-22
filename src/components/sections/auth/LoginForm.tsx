"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import AuthField from "@/components/sections/auth/AuthField";
import AuthPasswordField from "@/components/sections/auth/AuthPasswordField";

export default function LoginForm() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.replace("/dashboard/customer");
  }

  return (
    <form className="mt-8 flex flex-col gap-9" onSubmit={handleSubmit}>
      <AuthField
        label="Email Address"
        name="email"
        type="email"
        autoComplete="email"
      />
      <div>
        <AuthPasswordField
          label="Password"
          name="password"
          autoComplete="current-password"
        />
        <div className="mt-2 text-right">
          <Link
            href="/forgot-password"
            className="text-xs text-ember-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        className="group mx-auto mt-2 inline-flex items-center gap-2.5 border-b border-olive-500/70 px-0.5 pb-2.5 text-sm font-semibold uppercase tracking-wide text-olive-500 transition-colors hover:border-olive-500"
      >
        Login
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
