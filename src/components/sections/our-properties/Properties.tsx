"use client";

import { useMemo, useState } from "react";
import {
  featuredProperties,
  priceRanges,
  PROPERTIES_PER_PAGE,
} from "@/lib/data";
import PropertyCard from "@/components/ui/PropertyCard";
import Pagination from "@/components/ui/Pagination";
import SearchFilterBar, { type Filters } from "./SearchFilterBar";

const initialFilters: Filters = {
  search: "",
  type: "",
  state: "",
  priceRangeIndex: 0,
};

const fallbackPriceRange = {
  label: "All Prices",
  min: 0,
  max: Number.POSITIVE_INFINITY,
};

export default function Properties() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const availablePriceRanges = priceRanges ?? [fallbackPriceRange];
    const range =
      availablePriceRanges[filters.priceRangeIndex] ?? availablePriceRanges[0];
    const search = filters.search.trim().toLowerCase();

    return featuredProperties.filter((property) => {
      const matchesSearch =
        !search ||
        property.name.toLowerCase().includes(search) ||
        property.location.toLowerCase().includes(search) ||
        property.type.toLowerCase().includes(search);
      const matchesType = !filters.type || property.type === filters.type;
      const matchesState = !filters.state || property.state === filters.state;
      const matchesPrice =
        property.priceValue >= range.min && property.priceValue <= range.max;

      return matchesSearch && matchesType && matchesState && matchesPrice;
    });
  }, [filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PROPERTIES_PER_PAGE),
  );
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PROPERTIES_PER_PAGE,
    currentPage * PROPERTIES_PER_PAGE,
  );

  function handleFilterChange(next: Filters) {
    setFilters(next);
    setPage(1); // reset to page 1 whenever the filter set changes
  }

  return (
    <section className="bg-gold-50 py-10 sm:py-12 md:py-14">
      <SearchFilterBar filters={filters} onChange={handleFilterChange} />

      <div className="mx-auto max-w-8xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
        {pageItems.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8">
            {pageItems.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-sm text-charcoal-600/70 sm:mt-12">
            No properties match those filters. Try widening your search.
          </p>
        )}

        <div className="mt-10 sm:mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={setPage}
          />
        </div>
      </div>
    </section>
  );
}
