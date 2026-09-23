import Image from "next/image";
import { Wallet } from "lucide-react";
import { featuredProperties } from "@/lib/data";
import { deals } from "@/lib/realtor-data";

// No design mockup was provided for this page — this is a reasonable
// first pass (summary cards + a commission breakdown per deal at a flat
// 5% rate) rather than a pixel-matched build. Adjust COMMISSION_RATE and
// the layout freely once real figures/design are available.
const COMMISSION_RATE = 0.05;

function parseNaira(value: string): number {
  return Number(value.replace(/[^0-9]/g, "")) || 0;
}

function formatNaira(value: number) {
  return `₦${Math.round(value).toLocaleString("en-NG")}`;
}

export default function Earnings() {
  const rows = deals.map((deal) => {
    const paid = parseNaira(deal.amountPaid);
    const total = parseNaira(deal.totalAmount);
    const earned = paid * COMMISSION_RATE;
    const pending = (total - paid) * COMMISSION_RATE;
    return { deal, earned, pending };
  });

  const totalEarned = rows.reduce((sum, r) => sum + r.earned, 0);
  const totalPending = rows.reduce((sum, r) => sum + r.pending, 0);

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal-600">
        Earnings
      </h1>
      <p className="mt-1 text-sm text-charcoal-600/60">
        Commission earned across your deals, at a {COMMISSION_RATE * 100}%
        referral rate.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <SummaryCard
          label="Total Earned"
          value={formatNaira(totalEarned)}
          color="bg-[#5F8A50]"
        />
        <SummaryCard
          label="Pending"
          value={formatNaira(totalPending)}
          color="bg-[#C24507]"
        />
        <SummaryCard
          label="Lifetime Deals"
          value={String(deals.length)}
          color="bg-[#076E75]"
        />
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl bg-gold-50 p-5 sm:p-6">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="text-xs font-semibold uppercase tracking-wide text-charcoal-600/50">
              <th className="pb-3">Property</th>
              <th className="pb-3">Client</th>
              <th className="pb-3">Earned</th>
              <th className="pb-3">Pending</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal-600/10">
            {rows.map(({ deal, earned, pending }) => {
              const property = featuredProperties.find(
                (p) => p.id === deal.propertyId,
              );
              if (!property) return null;
              return (
                <tr key={deal.id}>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-12 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={property.image}
                          alt={property.imageAlt}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <p className="font-medium text-charcoal-600">
                        {property.name.split(",")[0]}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-charcoal-600">{deal.clientName}</td>
                  <td className="py-3 font-semibold text-charcoal-600">
                    {formatNaira(earned)}
                  </td>
                  <td className="py-3 text-charcoal-600/60">
                    {formatNaira(pending)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`rounded-2xl ${color} p-5 text-gold-50`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{label}</p>
        <Wallet className="h-5 w-5 opacity-90" />
      </div>
      <p className="mt-4 font-display text-2xl font-semibold">{value}</p>
    </div>
  );
}
