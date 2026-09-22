import { featuredProperties } from "@/lib/data";
import ArrowLink from "@/components/ui/ArrowLink";
import Image from "next/image";


export default function FeaturedProperties() {
  return (
    <section className="bg-olive-500">
      <div className="mx-auto max-w-8xl">
        <div className="px-5 py-14 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-200">
            Featured
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-wide text-gold-50 sm:text-4xl">
            Properties
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.slice(0, 6).map((property) => {
            return (
              <div
                key={property.id}
                className="group relative aspect-14/9 overflow-hidden"
              >
                <Image
                  src={property.image}
                  alt={property.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                  {/* Price + CTA reveal on hover */}
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      {property.price && (
                        <p className="pb-1 font-display text-sm font-semibold text-gold-50 sm:text-base lg:text-lg">
                          {property.price}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="font-display text-sm text-gold-50 sm:text-base lg:text-lg">
                    {property.name}
                  </p>

                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="pt-2 sm:pt-3">
                        <ArrowLink href={`/our-properties`} variant="onDark">
                          View Details
                        </ArrowLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center py-12">
          <ArrowLink href="/our-properties" variant="onDark">
            EXPLORE MORE
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
