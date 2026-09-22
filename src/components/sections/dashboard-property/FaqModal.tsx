"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { faqs } from "@/lib/data";
import { clsx } from "@/lib/clsx";
import type { Property } from "@/types";

export default function FaqModal({
  property,
  onClose,
}: {
  property: Property;
  onClose: () => void;
}) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const shortName = property.name.split(",")[0];

  return (
    <Modal onClose={onClose} maxWidth="max-w-2xl">
      <h2 className="font-display text-xl font-semibold text-charcoal-600">
        Frequently Asked Questions about {shortName}
      </h2>
      <button
        type="button"
        className="mt-1 text-xs font-semibold uppercase tracking-wide text-ember-500 hover:underline"
      >
        Also read {shortName}&apos;s Terms &amp; Conditions
      </button>

      <div className="mt-5 flex flex-col gap-3">
        {faqs.map((item) => {
          const isOpen = item.id === openId;
          return (
            <div key={item.id} className="rounded-xl bg-gold-100/70 px-4 py-3">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-sm font-medium text-charcoal-600">
                  {item.question}
                </span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-charcoal-600/40 text-charcoal-600">
                  {isOpen ? (
                    <Minus className="h-3 w-3" />
                  ) : (
                    <Plus className="h-3 w-3" />
                  )}
                </span>
              </button>
              <div className={clsx("accordion-panel", isOpen && "is-open")}>
                <div>
                  <p className="pt-2 text-xs leading-relaxed text-charcoal-600/75">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
