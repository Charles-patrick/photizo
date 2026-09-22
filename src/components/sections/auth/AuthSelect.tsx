import { ChevronDown } from "lucide-react";

interface AuthSelectProps {
  label: string;
  name: string;
  options: string[];
}

export default function AuthSelect({ label, name, options }: AuthSelectProps) {
  return (
    <div className="relative">
      <select
        name={name}
        defaultValue=""
        className="w-full appearance-none border-b border-charcoal-600/25 bg-transparent pb-2 pt-3 pr-6 text-sm text-charcoal-600 focus:border-olive-500 focus:outline-none"
      >
        <option
          value=""
          disabled
          className="text-[11px] uppercase tracking-wide text-charcoal-600/50"
        >
          {label}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-600/40" />
    </div>
  );
}
