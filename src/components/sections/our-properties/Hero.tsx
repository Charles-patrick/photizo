import Image from "next/image";
import { ourPropertiesHero } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex h-[45vh] min-h-90 w-full flex-col items-center justify-center overflow-hidden bg-charcoal-900 sm:h-[50vh] lg:h-[55vh]">
      <Image
        src={ourPropertiesHero.image}
        alt={ourPropertiesHero.imageAlt}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-50 sm:text-sm">
          {ourPropertiesHero.preheader}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.15em] text-gold-200 sm:mt-4 sm:text-4xl md:text-5xl">
          {ourPropertiesHero.heading}
        </h1>
      </div>
    </section>
  );
}
