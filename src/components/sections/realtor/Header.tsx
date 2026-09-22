import { Copy } from "lucide-react";
import { realtorUser } from "@/lib/realtor-data";
import KycBadge from "@/components/ui/KycBadge";

function formatOrdinalDate(date: Date) {
  const day = date.getDate();
  const suffix = day % 10 === 1 && day !== 11 ? "st" : day % 10 === 2 && day !== 12 ? "nd" : day % 10 === 3 && day !== 13 ? "rd" : "th";
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  return `${weekday}, ${day}${suffix} ${month}`;
}

export default function Header() {
  const today = formatOrdinalDate(new Date());

  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
      <div>
        <p className="text-sm text-charcoal-600/60">{today}</p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-charcoal-600 sm:text-3xl">
          Welcome, {realtorUser.firstName} . {realtorUser.lastName}
        </h1>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-charcoal-600/15 bg-gold-50 px-4 py-1.5 text-xs font-semibold text-charcoal-600/80">
          Realtor ID: {realtorUser.realtorId}
          <Copy className="h-3.5 w-3.5 text-charcoal-600/40" />
        </span>
        <KycBadge status={realtorUser.kycStatus} />
      </div>
    </div>
  );
}
