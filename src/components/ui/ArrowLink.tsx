import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { clsx } from "@/lib/clsx";

type Variant = "onDark" | "onLight";

// const variantClasses: Record<Variant, string> = {
//   // Cream/gold text — for use on dark (olive/charcoal) backgrounds or photos
//   onDark: "text-gold-200 decoration-gold-50/70 hover:decoration-gold-50",
//   // Olive green text — for use on light (ivory/cream/white) backgrounds
//   onLight: "text-olive-500 decoration-olive-500/60 hover:decoration-olive-500",
// };

const variantClasses: Record<Variant, string> = {
  onDark: "text-gold-50 border-gold-50/70 hover:border-gold-50",
  onLight: "text-olive-500 border-olive-500/60 hover:border-olive-500",
};

interface ArrowLinkOwnProps {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

type ArrowLinkProps<T extends ElementType> = ArrowLinkOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ArrowLinkOwnProps | "href">;

/**
 * The site's recurring CTA: small-caps-ish label, underlined, with a right
 * arrow that nudges forward on hover. Renders a Next.js <Link> when `href`
 * is provided, otherwise a <button> (e.g. for accordion toggles).
 */
export default function ArrowLink({
  variant = "onLight",
  href,
  className,
  children,
  ...props
}: ArrowLinkProps<"a"> | ArrowLinkProps<"button">) {
    const classes = clsx(
      "group inline-flex items-center text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase transition-colors",
      variantClasses[variant],
      className,
    );

       const content = (
         <span
           className={clsx(
             "inline-flex items-center gap-2.5 border-b px-0.5 pb-2.5 transition-colors",
             variantClasses[variant],
           )}
         >
           <span>{children}</span>
           <ArrowRight
             className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
             strokeWidth={2}
           />
         </span>
       );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {content}
    </button>
  );
}
