import Image from "next/image";
import { aboutHero, aboutIntro } from "@/lib/data";

/**
 * Combines what would otherwise be two sections: the half-viewport hero
 * image (with the shared Navbar overlaying it transparently, same as the
 * home page) and the intro copy block right below it — "A Nigerian real
 * estate company established with a strong commitment to integrity,
 * professionalism, and service excellence." plus its two paragraphs.
 *
 * The two together fill roughly one full viewport on first load: the image
 * takes ~55–65% of the screen height depending on breakpoint, and the copy
 * block below has a matching min-height so it fills out the rest.
 */
export default function Hero() {
  return (
    <>
      {/* Image half */}
      <section className="relative flex h-[55vh] min-h-100 w-full items-center justify-center overflow-hidden bg-charcoal-900 sm:h-[60vh] lg:h-[65vh]">
        <Image
          src={aboutHero.image}
          alt={aboutHero.imageAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <h1 className="relative z-10 px-5 text-center font-display text-2xl font-semibold uppercase tracking-[0.15em] text-gold-50 sm:text-3xl md:text-4xl">
          Get to Know{" "}
          <span className="text-ember-500">{aboutHero.highlightWord}</span>
        </h1>
      </section>

      {/* Intro copy half */}
      <section className="flex min-h-100 items-center bg-gold-50 py-10 sm:min-h-110 sm:py-12 md:py-16 lg:min-h-120 lg:py-20">
        <div className="mx-auto max-w-8xl text-center px-5 sm:px-8 md:px-12 lg:px-24">
          <h2 className="mx-auto font-display text-xl font-medium leading-snug text-charcoal-600 sm:text-2xl md:text-3xl ">
            {aboutIntro.heading}
          </h2>
          <div className="mx-auto mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
            {aboutIntro.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-charcoal-600/80 sm:text-base lg:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
