interface AuthFieldProps {
  label: string;
  type?: string;
  name: string;
  autoComplete?: string;
}

/**
 * The "placeholder sits above the line, then gets replaced once you type"
 * behaviour is just the native `placeholder` attribute — no separate label
 * element. Extra top padding on the input keeps the placeholder text
 * visually sitting above the underline rather than centered on it.
 */
export default function AuthField({
  label,
  type = "text",
  name,
  autoComplete,
}: AuthFieldProps) {
  return (
    <input
      type={type}
      name={name}
      autoComplete={autoComplete}
      placeholder={label}
      className="w-full border-b border-charcoal-600/25 bg-transparent pb-2 pt-3 text-sm text-charcoal-600 placeholder:text-[11px] placeholder:font-semibold placeholder:uppercase placeholder:tracking-wide placeholder:text-charcoal-600/50 focus:border-olive-500 focus:outline-none"
    />
  );
}
