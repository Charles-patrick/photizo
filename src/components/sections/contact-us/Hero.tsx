import Image from "next/image";
import { contactUsHero } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex h-[55vh] min-h-100 w-full flex-col items-center justify-center overflow-hidden bg-charcoal-900 sm:h-[60vh] lg:h-[65vh]">
      <Image
        src={contactUsHero.image}
        alt={contactUsHero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-50 sm:text-sm">
          {contactUsHero.preheader}
        </p>
        <h1 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.15em] text-gold-200 sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
          {contactUsHero.heading}
        </h1>
      </div>
    </section>
  );
}
