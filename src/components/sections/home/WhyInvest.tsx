import { Handshake, MapPin, TrendingUp } from "lucide-react";
import { investmentReasons } from "@/lib/data";
import ArrowLink from "@/components/ui/ArrowLink";
import Image from "next/image";

const icons = {
  "trending-up": TrendingUp,
  handshake: Handshake,
  "map-pin": MapPin,
};

export default function WhyInvest() {
  return (
    <section className="bg-gold-50 py-14 sm:py-16 md:py-20 lg:py-24">
      {/*
        Single, gradually-growing gutter (px-5 on phones up to px-44 on very
        large screens) instead of jumping straight from px-15 to px-44 at the
        lg breakpoint — that jump is what squeezed everything on mobile.
      */}
      <div className="mx-auto max-w-8xl px-5 text-center sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
            <span className="flex shrink-0 items-center text-olive-500">
              <Image
                src="/left-cube-dark.png"
                alt="diamonddot"
                width={30}
                height={30}
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-[30px] lg:w-[30px]"
              />
            </span>

            <h2 className="font-display text-xl font-medium text-olive-500 sm:text-2xl md:text-3xl lg:text-4xl">
              WHY INVEST WITH <span className="text-ember-500">PHOTIZO</span>?
            </h2>

            <span className="flex shrink-0 items-center text-olive-500">
              <Image
                src="/right-cube-dark.png"
                alt="diamonddot"
                width={30}
                height={30}
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-[30px] lg:w-[30px]"
              />
            </span>
          </div>

          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-charcoal-600/80 sm:max-w-lg sm:text-base md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            Discover why investors trust Photizo Properties for secure land
            ownership, strategic locations, transparent processes, and long-term
            value.
          </p>
        </div>

        <div className="mt-10 grid gap-8 text-left sm:mt-12 sm:grid-cols-2 sm:gap-10 lg:mt-14 lg:grid-cols-3 lg:gap-8 lg:px-5">
          {investmentReasons.map((reason) => {
            const Icon = icons[reason.icon];
            return (
              <div
                key={reason.id}
                className="mx-auto flex w-full max-w-sm flex-col items-center justify-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-olive-500">
                  <Icon className="h-6 w-6 text-gold-200" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-charcoal-600">
                  {reason.title}
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-charcoal-600/75">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <ArrowLink href="/about-us" variant="onLight">
            Learn More About Us
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

// function DiamondDots() {
//   return (
//     <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
//       <rect x="0" y="0" width="6" height="6" fill="currentColor" />
//       <rect x="8" y="0" width="6" height="6" fill="currentColor" />
//       <rect x="0" y="8" width="6" height="6" fill="currentColor" />
//     </svg>
//   );
// }
