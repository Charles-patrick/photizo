interface AuthTextareaProps {
  label: string;
  name: string;
  rows?: number;
}

export default function AuthTextarea({
  label,
  name,
  rows = 5,
}: AuthTextareaProps) {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={label}
      className="w-full rounded-lg border border-charcoal-600/25 bg-transparent p-4 text-sm text-charcoal-600 placeholder:text-[11px] placeholder:font-semibold placeholder:uppercase placeholder:tracking-wide placeholder:text-charcoal-600/50 focus:border-olive-500 focus:outline-none"
    />
  );
}
