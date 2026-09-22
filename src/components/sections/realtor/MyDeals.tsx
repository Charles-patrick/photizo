"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { featuredProperties } from "@/lib/data";
import { deals, type Deal } from "@/lib/realtor-data";
import { clsx } from "@/lib/clsx";
import DealDetailsModal from "./DealDetailsModal";

const statusClasses: Record<string, string> = {
  "Inspecting Property": "bg-[var(--color-inspection-upcoming-bg)] text-[var(--color-inspection-upcoming-text)]",
  "Installment Active": "bg-teal-100 text-teal-700",
  "Completed Payment": "bg-[var(--color-inspection-completed-bg)] text-[var(--color-inspection-completed-text)]",
};

export default function MyDeals() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Deal | null>(null);

  const visible = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return deals;
    return deals.filter((deal) => {
      const property = featuredProperties.find((p) => p.id === deal.propertyId);
      return (
        deal.clientName.toLowerCase().includes(query) ||
        deal.totalAmount.toLowerCase().includes(query) ||
        property?.name.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal-600">My Deals</h1>

      <div className="mt-5 flex items-center gap-3 border-b border-charcoal-600/25 py-3">
        <Search className="h-4 w-4 shrink-0 text-charcoal-600/40" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search deal by property name, client, or value"
          className="w-full bg-transparent text-sm text-charcoal-600 placeholder:text-charcoal-600/40 focus:outline-none"
        />
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl bg-gold-50 p-5 sm:p-6">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="text-xs font-semibold uppercase tracking-wide text-charcoal-600/50">
              <th className="pb-3">Property</th>
              <th className="pb-3">Client</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Value</th>
              <th className="pb-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal-600/10">
            {visible.map((deal) => {
              const property = featuredProperties.find((p) => p.id === deal.propertyId);
              if (!property) return null;
              return (
                <tr key={deal.id}>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-12 shrink-0 overflow-hidden rounded-lg">
                        <Image src={property.image} alt={property.imageAlt} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal-600">{property.name.split(",")[0]}</p>
                        <p className="text-xs text-charcoal-600/50">{property.location}, {property.state}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <p className="text-charcoal-600">{deal.clientName}</p>
                    <p className="text-xs text-charcoal-600/50">{deal.clientPhone}</p>
                  </td>
                  <td className="py-3">
                    <span className={clsx("rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide", statusClasses[deal.status])}>
                      {deal.status}
                    </span>
                  </td>
                  <td className="py-3 font-semibold text-charcoal-600">{deal.totalAmount}</td>
                  <td className="py-3">
                    <button
                      type="button"
                      onClick={() => setSelected(deal)}
                      className="rounded-md border border-charcoal-600/15 px-3 py-1.5 text-xs font-semibold text-charcoal-600 transition-colors hover:bg-charcoal-600/5"
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {visible.length === 0 && (
          <p className="py-8 text-center text-sm text-charcoal-600/70">No deals match that search.</p>
        )}
      </div>

      {selected && <DealDetailsModal deal={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
