import { ArrowRight, Building2, MapPin, Sparkles, Wallet } from "lucide-react";
import {
  amenitiesList,
  priceRanges,
  propertyStates,
  propertyTypes,
} from "@/lib/data";

export interface DashboardFilters {
  search: string;
  type: string;
  state: string;
  amenity: string;
  priceRangeIndex: number;
}

interface DashboardFilterBarProps {
  filters: DashboardFilters;
  onChange: (filters: DashboardFilters) => void;
}

export default function DashboardFilterBar({
  filters,
  onChange,
}: DashboardFilterBarProps) {
  return (
    <div>
      <div className="flex items-center gap-3 border-b border-charcoal-600/25 py-4">
        <input
          type="text"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          placeholder="Search properties by location, type, or keyword"
          className="w-full bg-transparent text-sm text-charcoal-600 placeholder:text-charcoal-600/40 focus:outline-none"
        />
      </div>

      <div className="mt-5 flex flex-col gap-5 rounded-2xl bg-olive-500 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
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
          icon={<Wallet className="h-4 w-4" />}
          label="Property Price"
          value={String(filters.priceRangeIndex)}
          onChange={(value) =>
            onChange({ ...filters, priceRangeIndex: Number(value) })
          }
          options={priceRanges.map((range, i) => ({
            value: String(i),
            label: range.label,
          }))}
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
          icon={<Sparkles className="h-4 w-4" />}
          label="Amenities"
          value={filters.amenity}
          onChange={(value) => onChange({ ...filters, amenity: value })}
          options={[
            { value: "", label: "All Amenities" },
            ...amenitiesList.map((a) => ({ value: a, label: a })),
          ]}
        />

        <button
          type="button"
          onClick={() => onChange({ ...filters })}
          className="group ml-auto flex shrink-0 items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-gold-200 transition-colors hover:text-gold-50"
        >
          Apply
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
