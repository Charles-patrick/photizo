import ArrowLink from "@/components/ui/ArrowLink";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-16 xl:px-28 2xl:px-44">
      <div className="relative mx-auto max-w-8xl overflow-hidden rounded-2xl">
        <Image
          src="/book-inspection.jpg"
          alt="Aerial view of a Photizo estate at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center px-5 py-12 text-center sm:px-6 sm:py-16 md:py-20">
          <h2 className="font-display text-2xl font-medium text-gold-200 sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Own a Valuable Asset?
          </h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-gold-200 sm:mt-4 sm:max-w-md sm:text-base md:max-w-xl md:text-lg lg:max-w-150">
            Book a site inspection and discover secure investment opportunities
            with Photizo Properties.
          </p>
          <div className="mt-6 sm:mt-8">
            <ArrowLink href="/contact-us" variant="onDark">
              Book an Inspection
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
