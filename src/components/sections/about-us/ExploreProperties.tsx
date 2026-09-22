import Image from "next/image";
import ArrowLink from "@/components/ui/ArrowLink";
import { aboutClosingStatement } from "@/lib/data";

export default function ExploreProperties() {
  return (
    <section className="">
      <div className="relative mx-auto overflow-hidden px-5 sm:px-8 md:px-12 lg:px-24">
        <Image
          src={aboutClosingStatement.image}
          alt={aboutClosingStatement.imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center px-5 py-14 text-center sm:px-10 sm:py-16 md:py-20">
          <p className=" font-display text-lg leading-relaxed text-gold-50 sm:text-xl md:text-2xl lg:text-3xl">
            {aboutClosingStatement.quote}
          </p>
          <div className="mt-8 sm:mt-10">
            <ArrowLink href="/our-properties" variant="onDark">
              Explore Properties
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
