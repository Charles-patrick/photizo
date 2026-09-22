import Link from "next/link";
import { featuredProperties, savedPropertyIds } from "@/lib/data";
import DashboardPropertyCard from "@/components/ui/DashboardPropertyCard";

export default function SavedProperties() {
  const saved = featuredProperties
    .filter((p) => savedPropertyIds.includes(p.id))
    .slice(0, 3);

  return (
    <div className="mt-6 rounded-2xl bg-gold-50 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-olive-500">
          Saved Properties
        </h2>
        <Link
          href="/dashboard/customer/saved-properties"
          className="text-xs font-semibold text-olive-500 hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {saved.map((property) => (
          <DashboardPropertyCard
            key={property.id}
            property={property}
            defaultSaved
          />
        ))}
      </div>
    </div>
  );
}
