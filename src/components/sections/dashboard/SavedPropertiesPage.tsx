"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { featuredProperties, savedPropertyIds } from "@/lib/data";
import DashboardPropertyCard from "@/components/ui/DashboardPropertyCard";

export default function SavedPropertiesPage() {
  const [search, setSearch] = useState("");

  const saved = useMemo(() => {
    const query = search.trim().toLowerCase();
    return featuredProperties
      .filter((p) => savedPropertyIds?.includes(p.id))
      .filter(
        (p) =>
          !query ||
          p.name.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.type.toLowerCase().includes(query),
      );
  }, [search]);

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal-600">
        Saved Properties
      </h1>

      <div className="mt-5 flex items-center gap-3 border-b border-charcoal-600/25 py-3">
        <Search className="h-4 w-4 shrink-0 text-charcoal-600/40" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search properties by location, type, or keyword"
          className="w-full bg-transparent text-sm text-charcoal-600 placeholder:text-charcoal-600/40 focus:outline-none"
        />
      </div>

      {saved.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {saved.map((property) => (
            <DashboardPropertyCard
              key={property.id}
              property={property}
              defaultSaved
            />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-center text-sm text-charcoal-600/70">
          No saved properties match that search.
        </p>
      )}
    </div>
  );
}
