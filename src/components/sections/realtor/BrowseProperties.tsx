"use client";

import { useMemo, useState } from "react";
import { featuredProperties, priceRanges, PROPERTIES_PER_PAGE } from "@/lib/data";
import PropertyGridCard from "@/components/ui/PropertyGridCard";
import Pagination from "@/components/ui/Pagination";
import PropertyFilterBar, { type PropertyFilters } from "@/components/ui/PropertyFilterBar";

const initialFilters: PropertyFilters = { search: "", type: "", state: "", amenity: "", priceRangeIndex: 0 };

export default function BrowseProperties() {
  const [filters, setFilters] = useState<PropertyFilters>(initialFilters);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const range = priceRanges[filters.priceRangeIndex] ?? priceRanges[0];
    const search = filters.search.trim().toLowerCase();

    return featuredProperties.filter((property) => {
      const matchesSearch =
        !search ||
        property.name.toLowerCase().includes(search) ||
        property.location.toLowerCase().includes(search) ||
        property.type.toLowerCase().includes(search);
      const matchesType = !filters.type || property.type === filters.type;
      const matchesState = !filters.state || property.state === filters.state;
      const matchesAmenity = !filters.amenity || (property.amenities ?? []).includes(filters.amenity);
      const matchesPrice = property.priceValue >= range.min && property.priceValue <= range.max;
      return matchesSearch && matchesType && matchesState && matchesAmenity && matchesPrice;
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PROPERTIES_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PROPERTIES_PER_PAGE, currentPage * PROPERTIES_PER_PAGE);

  function handleFilterChange(next: PropertyFilters) {
    setFilters(next);
    setPage(1);
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal-600">Browse Properties</h1>

      <div className="mt-6">
        <PropertyFilterBar filters={filters} onChange={handleFilterChange} />
      </div>

      {pageItems.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {pageItems.map((property) => (
            <PropertyGridCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-center text-sm text-charcoal-600/70">
          No properties match those filters. Try widening your search.
        </p>
      )}

      <div className="mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
}
