"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import { clsx } from "@/lib/clsx";
import type { Property } from "@/types";

export default function DashboardPropertyCard({
  property,
  defaultSaved = false,
}: {
  property: Property;
  defaultSaved?: boolean;
}) {
  const [saved, setSaved] = useState(defaultSaved);

  return (
    <div className="group relative aspect-4/3 overflow-hidden rounded-xl">
      <Image
        src={property.image}
        alt={property.imageAlt}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

      <Link
        href={`/dashboard/customer/browse-properties/${property.id}`}
        aria-label={property.name}
        className="absolute inset-0 z-10"
      />

      <button
        type="button"
        aria-label={saved ? "Remove from saved properties" : "Save property"}
        onClick={(e) => {
          e.preventDefault();
          setSaved((v) => !v);
        }}
        className={clsx(
          "absolute right-2.5 top-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-full transition-colors",
          saved
            ? "bg-charcoal-900/80 text-gold-50 hover:bg-charcoal-900"
            : "bg-gold-50/90 text-charcoal-600 hover:bg-gold-50",
        )}
      >
        <Bookmark className={clsx("h-3.5 w-3.5", saved && "fill-current")} />
      </button>

      <p className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-xs font-medium text-gold-50 sm:text-sm">
        {property.name}
      </p>
    </div>
  );
}
