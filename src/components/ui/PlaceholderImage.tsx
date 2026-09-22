import { ImageIcon } from "lucide-react";
import { clsx } from "@/lib/clsx";

interface PlaceholderImageProps {
  label: string;
  className?: string;
  from?: string;
  to?: string;
  /** Set true to mute the label for busy/overlay contexts */
  subtle?: boolean;
}

/**
 * Stand-in for a real photo. Swap any <PlaceholderImage /> for a Next.js
 * <Image src="..." /> once the actual Figma exports / property photos are
 * available — the component footprint (fills its parent) is designed to
 * make that a 1:1 swap.
 */
export default function PlaceholderImage({
  label,
  className,
  from = "from-olive-400",
  to = "to-olive-800",
  subtle = false,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={clsx(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br",
        from,
        to,
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
      <div
        className={clsx(
          "relative flex flex-col items-center gap-2 px-4 text-center",
          subtle ? "opacity-40" : "opacity-70"
        )}
      >
        <ImageIcon className="h-6 w-6 text-gold-50" strokeWidth={1.5} />
        <span className="text-[11px] font-medium leading-snug text-gold-50">
          {label}
        </span>
      </div>
    </div>
  );
}
