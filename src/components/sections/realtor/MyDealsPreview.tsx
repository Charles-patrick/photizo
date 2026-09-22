import Image from "next/image";
import Link from "next/link";
import { featuredProperties } from "@/lib/data";
import { deals } from "@/lib/realtor-data";
import { clsx } from "@/lib/clsx";

const statusClasses: Record<string, string> = {
  "Inspecting Property": "bg-[var(--color-inspection-upcoming-bg)] text-[var(--color-inspection-upcoming-text)]",
  "Installment Active": "bg-teal-100 text-teal-700",
  "Completed Payment": "bg-[var(--color-inspection-completed-bg)] text-[var(--color-inspection-completed-text)]",
};

export default function MyDealsPreview() {
  const preview = deals.slice(0, 4);

  return (
    <div className="mt-6 rounded-2xl bg-gold-50 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ember-500">My Deals</h2>
        <Link href="/realtor/dashboard/my-deals" className="text-xs font-semibold text-olive-500 hover:underline">
          View all →
        </Link>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
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
            {preview.map((deal) => {
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
                    <Link
                      href="/realtor/dashboard/my-deals"
                      className="rounded-md border border-charcoal-600/15 px-3 py-1.5 text-xs font-semibold text-charcoal-600 transition-colors hover:bg-charcoal-600/5"
                    >
                      View
                    </Link>
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
