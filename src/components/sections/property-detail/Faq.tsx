"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import ArrowLink from "@/components/ui/ArrowLink";
import { clsx } from "@/lib/clsx";
import type { Property } from "@/types";

export default function Faq({ property }: { property: Property }) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const shortName = property.name.split(",")[0];

  return (
    <section className="bg-gold-50 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto grid max-w-8xl gap-8 px-5 sm:gap-10 sm:px-8 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-16 xl:px-28 2xl:px-44">
        <div>
          <h2 className="font-display text-xl font-medium leading-tight text-charcoal-600 sm:text-2xl">
            Frequently Asked Questions about {shortName}
          </h2>
          <div className="mt-6">
            <ArrowLink href="/contact-us" variant="onLight">
              Ask a Question
            </ArrowLink>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-gold-100/70 px-4 py-4 sm:px-6 sm:py-5 md:px-8"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left sm:gap-6"
                >
                  <span className="font-display text-sm font-medium text-charcoal-600 sm:text-base md:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-charcoal-600/40 text-charcoal-600 sm:h-7 sm:w-7">
                    {isOpen ? (
                      <Minus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    ) : (
                      <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    )}
                  </span>
                </button>

                <div className={clsx("accordion-panel", isOpen && "is-open")}>
                  <div>
                    <p className="pt-3 text-xs leading-relaxed text-charcoal-600/80 sm:pt-4 sm:text-sm md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
