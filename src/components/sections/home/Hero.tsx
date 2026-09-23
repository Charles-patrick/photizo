"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/data";
import { clsx } from "@/lib/clsx";

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="h-screen-safe relative min-h-140 w-full overflow-hidden bg-charcoal-900">
      {" "}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== active}
          className={clsx(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === active ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <Image
            src={slide.image}
            alt={slide.headingParts.map((p) => p.text).join("")}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 md:px-12 lg:px-24">
              <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center text-center sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
                <h1 className="font-display text-3xl font-medium leading-[1.15] text-gold-50 sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-6xl">
                  {slide.headingParts.map((part, i) => (
                    <span
                      key={i}
                      className={part.highlight ? "text-ember-500" : undefined}
                    >
                      {part.text}
                    </span>
                  ))}
                </h1>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-gold-50/85 sm:mt-6 sm:max-w-md sm:text-base md:max-w-xl md:text-lg lg:max-w-2xl lg:text-xl">
                  {slide.subtext}
                </p>
                {/* <div className="mt-8">
                  <ArrowLink href={slide.ctaHref} variant="onDark">
                    {slide.ctaLabel}
                  </ArrowLink>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Dot pagination */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2.5 sm:bottom-8">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={clsx(
              "h-2 rounded-full transition-all duration-300",
              index === active
                ? "w-6 bg-ember-500"
                : "w-2 bg-gold-50/50 hover:bg-gold-50/80",
            )}
          />
        ))}
      </div>
    </section>
  );
}
