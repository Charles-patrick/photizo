import { ArrowRight, Building2, MapPin, Search, Wallet } from "lucide-react";
import { priceRanges, propertyStates, propertyTypes } from "@/lib/data";

const fallbackPriceRanges = [
  { label: "All Prices", min: 0, max: Number.POSITIVE_INFINITY },
];

export interface Filters {
  search: string;
  type: string;
  state: string;
  priceRangeIndex: number;
}

interface SearchFilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export default function SearchFilterBar({
  filters,
  onChange,
}: SearchFilterBarProps) {
  return (
    <div className="mx-auto max-w-8xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
      {/* Search */}
      <div className="flex items-center gap-3 border-b border-charcoal-600/25 py-6">
        <Search className="h-4 w-4 shrink-0 text-charcoal-600/50" />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          placeholder="Search properties by location, type, or keyword"
          className="w-full bg-transparent text-sm text-charcoal-600 placeholder:text-charcoal-600/40 focus:outline-none"
        />
      </div>

      {/* Filter bar */}
      <div className="mt-6 flex flex-col gap-5 rounded-2xl bg-olive-500 px-5 py-5 sm:mt-8 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
        <FilterSelect
          icon={<Building2 className="h-4 w-4" />}
          label="Property Type"
          value={filters.type}
          onChange={(value) => onChange({ ...filters, type: value })}
          options={[
            { value: "", label: "All Types" },
            ...propertyTypes.map((t) => ({ value: t, label: t })),
          ]}
        />
        <div className="hidden h-10 w-px bg-gold-50/15 sm:block" />
        <FilterSelect
          icon={<MapPin className="h-4 w-4" />}
          label="Property Location"
          value={filters.state}
          onChange={(value) => onChange({ ...filters, state: value })}
          options={[
            { value: "", label: "All Locations" },
            ...propertyStates.map((s) => ({ value: s, label: s })),
          ]}
        />
        <div className="hidden h-10 w-px bg-gold-50/15 sm:block" />
        <FilterSelect
          icon={<Wallet className="h-4 w-4" />}
          label="Price Range"
          value={String(filters.priceRangeIndex)}
          onChange={(value) =>
            onChange({ ...filters, priceRangeIndex: Number(value) })
          }
          options={(priceRanges ?? fallbackPriceRanges).map((range, i) => ({
            value: String(i),
            label: range.label,
          }))}
        />

        <button
          type="button"
          onClick={() => onChange({ ...filters })}
          className="group ml-auto flex shrink-0 items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-gold-200 transition-colors hover:text-gold-50"
        >
          Apply Filter
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function FilterSelect({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex min-w-0 flex-1 items-center gap-3">
      <span className="text-gold-200">{icon}</span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gold-200/80">
          {label}
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full truncate bg-transparent text-sm text-gold-50 focus:outline-none [&>option]:bg-olive-900 [&>option]:text-gold-50"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </span>
    </label>
  );
}
