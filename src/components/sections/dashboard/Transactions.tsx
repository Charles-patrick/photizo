"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { featuredProperties, transactions } from "@/lib/data";
import { clsx } from "@/lib/clsx";

type Tab = "all" | "Processing" | "Completed";

export default function Transactions() {
  const [tab, setTab] = useState<Tab>("all");

  const processingCount = transactions.filter(
    (t) => t.status === "Processing",
  ).length;
  const completedCount = transactions.filter(
    (t) => t.status === "Completed",
  ).length;

  const visible = useMemo(
    () =>
      tab === "all"
        ? transactions
        : transactions.filter((t) => t.status === tab),
    [tab],
  );

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "all", label: "All Transactions", count: transactions.length },
    { key: "Processing", label: "Processing", count: processingCount },
    { key: "Completed", label: "Completed", count: completedCount },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal-600">
        Transactions
      </h1>
      <p className="mt-1 text-sm text-charcoal-600/60">
        Track your property payment plans and transaction history.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={clsx(
              "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
              tab === t.key
                ? "bg-olive-900 text-gold-50"
                : "border border-charcoal-600/20 text-charcoal-600/75 hover:bg-charcoal-600/5",
            )}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {visible.map((txn) => {
          const property = featuredProperties.find(
            (p) => p.id === txn.propertyId,
          );
          if (!property) return null;
          const shortName = property.name.split(",")[0];

          return (
            <div key={txn.id} className="rounded-2xl bg-gold-50 p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3 sm:w-1/3">
                  <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={property.image}
                      alt={property.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-600">
                      {shortName}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-charcoal-600/60">
                      <MapPin className="h-3 w-3" />
                      {property.location}, {property.state} State
                    </p>
                  </div>
                </div>

                <div className="sm:w-1/6">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-600/50">
                    Total Price
                  </p>
                  <p className="mt-1 text-sm font-semibold text-charcoal-600">
                    {property.price}
                  </p>
                </div>

                <div className="sm:w-1/6">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-600/50">
                    Payment Plan
                  </p>
                  <p className="mt-1 text-sm font-semibold text-charcoal-600">
                    {txn.paymentPlan}
                  </p>
                </div>

                <div className="sm:w-1/6">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-600/50">
                    Start Date
                  </p>
                  <p className="mt-1 text-sm font-semibold text-charcoal-600">
                    {txn.startDate}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-teal-100 px-4 py-2 text-center">
                  {txn.status === "Completed" ? (
                    <p className="text-xs font-semibold text-teal-700">
                      Payment Completed
                    </p>
                  ) : (
                    <>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-700/80">
                        Next Payment
                      </p>
                      <p className="text-sm font-semibold text-teal-700">
                        {txn.nextPaymentAmount}
                      </p>
                      <p className="text-[11px] text-teal-700/70">
                        {txn.nextPaymentDate}
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-semibold text-charcoal-600">
                    Payment Progress
                  </p>
                  <p className="font-semibold text-olive-500">
                    {txn.percentPaid}% paid
                  </p>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-charcoal-600/10">
                  <div
                    className="h-full rounded-full bg-olive-500"
                    style={{ width: `${txn.percentPaid}%` }}
                  />
                </div>
                <div className="mt-1.5 flex items-center justify-between text-xs text-charcoal-600/60">
                  <span>{txn.amountPaid}</span>
                  {txn.amountLeft && <span>{txn.amountLeft}</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
