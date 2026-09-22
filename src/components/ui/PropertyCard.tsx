import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";
import type { Property } from "@/types";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group relative aspect-4/3 overflow-hidden rounded-2xl">
      <Image
        src={property.image}
        alt={property.imageAlt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            {property.price && (
              <p className="pb-1 font-display text-sm font-semibold text-gold-50 sm:text-base">
                {property.price}
              </p>
            )}
          </div>
        </div>

        <p className="font-display text-sm text-gold-50 sm:text-base">
          {property.name}
        </p>

        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="pt-2 sm:pt-3">
              <ArrowLink
                href={`/our-properties/${property.id}`}
                variant="onDark"
              >
                View Details
              </ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
