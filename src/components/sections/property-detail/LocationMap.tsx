import type { Property } from "@/types";
import MapEmbed from "@/components/ui/MapEmbed";

export default function LocationMap({ property }: { property: Property }) {
  return (
    <section className="bg-gold-50 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
        <h2 className="text-center font-display text-lg font-semibold uppercase tracking-wide text-charcoal-600 sm:text-xl">
          Location
        </h2>
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl sm:mt-8">
          <MapEmbed
            src={property.mapEmbedSrc}
            title={`${property.name} location`}
          />
        </div>
      </div>
    </section>
  );
}
