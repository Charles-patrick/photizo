import Image from "next/image";
import { aboutFeatureRows } from "@/lib/data";
import { clsx } from "@/lib/clsx";

export default function Mission() {
  return (
    <section className="bg-olive-150 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-8xl flex-col gap-12 px-5 sm:gap-14 sm:px-8 md:gap-16 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
        {aboutFeatureRows.map((row) => (
          <div
            key={row.id}
            className={clsx(
              "flex flex-col items-center gap-4 sm:gap-8 lg:flex-row lg:gap-6",
              row.imagePosition === "right" && "lg:flex-row-reverse",
            )}
          >
            <div className="relative aspect-6/3 w-full overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src={row.image}
                alt={row.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="font-display text-xl font-semibold text-olive-500 sm:text-2xl lg:text-3xl">
                {row.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-600/80 sm:mt-4 sm:text-base lg:text-lg">
                {row.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
