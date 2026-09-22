import { Droplet, MapPin, Route, Ruler, ShieldCheck, Zap } from "lucide-react";
import type { Property } from "@/types";

const icons = {
  "map-pin": MapPin,
  ruler: Ruler,
  "shield-check": ShieldCheck,
  droplet: Droplet,
  route: Route,
  zap: Zap,
};

export default function Features({ property }: { property: Property }) {
  return (
    <section className="bg-gold-50 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
        {property.description && (
          <>
            <h2 className="mt-8 mb-4 text-center font-display text-lg font-semibold uppercase tracking-wide text-charcoal-600 sm:mt-10 sm:text-xl">
              About {property.name.split(",")[0]}
            </h2>
            <p className=" text-sm leading-relaxed text-charcoal-600/80 sm:text-base">
              {property.description}
            </p>
          </>
        )}

        {property.features && property.features.length > 0 && (
          <>
            <h2 className="mt-8 text-center font-display text-lg font-semibold uppercase tracking-wide text-charcoal-600 sm:mt-10 sm:text-xl">
              Feature of {property.name.split(",")[0]}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4">
              {property.features.map((feature, i) => {
                const Icon = icons[feature.icon];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-b border-charcoal-600/10 pb-3"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-olive-500" />
                    <span className="text-xs font-medium uppercase tracking-wide text-charcoal-600/80 sm:text-sm">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
