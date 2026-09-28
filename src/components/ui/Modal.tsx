"use client";

import { X } from "lucide-react";
import { clsx } from "@/lib/clsx";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

/**
 * Generic overlay dialog: backdrop click or the X button closes it.
 * Used for Book an Inspection / Payment Plans / Location / FAQ on the
 * dashboard property detail page.
 */
export default function Modal({
  onClose,
  children,
  maxWidth = "max-w-lg",
}: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-charcoal-900/60 p-3 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className={clsx(
          "relative max-h-[calc(100dvh-1.5rem)] w-full overflow-y-auto rounded-2xl bg-gold-50 p-5 shadow-xl sm:max-h-[calc(100dvh-3rem)] sm:p-8",
          maxWidth,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 text-charcoal-600/50 transition-colors hover:text-charcoal-600"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
