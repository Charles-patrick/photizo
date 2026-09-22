"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthPasswordFieldProps {
  label: string;
  name: string;
  autoComplete?: string;
}

export default function AuthPasswordField({
  label,
  name,
  autoComplete,
}: AuthPasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        name={name}
        autoComplete={autoComplete}
        placeholder={label}
        className="w-full border-b border-charcoal-600/25 bg-transparent pb-2 pr-8 pt-3 text-sm text-charcoal-600 placeholder:text-[11px] placeholder:font-semibold placeholder:uppercase placeholder:tracking-wide placeholder:text-charcoal-600/50 focus:border-olive-500 focus:outline-none"
      />
      <button
        type="button"
        aria-label={visible ? "Hide password" : "Show password"}
        onClick={() => setVisible((v) => !v)}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal-600/50 hover:text-charcoal-600"
      >
        {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}
