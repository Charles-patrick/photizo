import { clsx } from "@/lib/clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2"
    >
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-current={page === currentPage ? "page" : undefined}
          onClick={() => onChange(page)}
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-md text-sm font-semibold transition-colors sm:h-9 sm:w-9",
            page === currentPage
              ? "bg-gold-200 text-olive-900"
              : "bg-gold-100 text-charcoal-600/70 hover:bg-gold-200/60",
          )}
        >
          {page}
        </button>
      ))}
    </nav>
  );
}
