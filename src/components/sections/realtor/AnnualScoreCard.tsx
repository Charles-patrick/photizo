"use client";

import { useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";
import { annualScoreCard } from "@/lib/realtor-data";

function formatNaira(value: number) {
  return `₦${value.toLocaleString("en-NG")}`;
}

export default function AnnualScoreCard() {
  const [year, setYear] = useState(annualScoreCard.year);
  const percent = Math.round((annualScoreCard.totalReferralSalesVolume / annualScoreCard.annualTarget) * 100);

  return (
    <div className="rounded-2xl bg-gold-50 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ember-500">Annual Score Card</h2>
        <div className="relative">
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="appearance-none rounded-md border border-charcoal-600/15 bg-gold-50 py-1.5 pl-3 pr-7 text-sm font-medium text-charcoal-600 focus:border-olive-500 focus:outline-none"
          >
            {annualScoreCard.availableYears.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-600/40" />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-600/50">Total Referral Sales Volume</p>
          <p className="mt-1 font-display text-xl font-semibold text-charcoal-600">
            {formatNaira(annualScoreCard.totalReferralSalesVolume)}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-600/50">Annual Target</p>
          <p className="mt-1 font-display text-xl font-semibold text-charcoal-600">
            {formatNaira(annualScoreCard.annualTarget)}
          </p>
        </div>
      </div>

      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-charcoal-600/10">
        <div className="h-full rounded-full bg-olive-500" style={{ width: `${Math.min(percent, 100)}%` }} />
      </div>

      <p className="mt-3 flex items-center gap-2 text-xs text-charcoal-600/70">
        <TrendingUp className="h-4 w-4 text-olive-500" />
        You are {percent}% towards your annual target. Keep pushing!
      </p>
    </div>
  );
}
