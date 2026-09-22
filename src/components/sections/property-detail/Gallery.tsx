"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { clsx } from "@/lib/clsx";
import type { Property } from "@/types";

export default function Gallery({ property }: { property: Property }) {
  const images = property.gallery?.length ? property.gallery : [property.image];
  const [active, setActive] = useState(0);

  function prev() {
    setActive((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setActive((i) => (i + 1) % images.length);
  }

  return (
    <section className="bg-gold-50 pt-24 sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-600/60 sm:text-sm">
          <Link href="/our-properties" className="hover:text-olive-500">
            Our Properties
          </Link>
          <span>»</span>
          <span className="text-charcoal-600">{property.name}</span>
        </nav>

        {/* Title + price */}
        <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h1 className="font-display text-2xl font-semibold text-charcoal-600 sm:text-3xl lg:text-4xl">
              {property.name}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-charcoal-600/70">
              <MapPin className="h-4 w-4" />
              {property.location}, {property.state} State
            </p>
          </div>
          {property.price && (
            <p className="font-display text-xl font-semibold text-olive-500 sm:text-2xl">
              {property.price}
            </p>
          )}
        </div>

        {/* Main image with prev/next */}
        <div className="relative mt-6 aspect-16/9 w-full overflow-hidden rounded-2xl sm:mt-8">
          <Image
            src={images[active]}
            alt={property.imageAlt}
            fill
            priority
            className="object-cover"
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={prev}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gold-50/90 text-charcoal-600 shadow-sm transition-colors hover:bg-gold-50 sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={next}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gold-50/90 text-charcoal-600 shadow-sm transition-colors hover:bg-gold-50 sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-4 grid grid-cols-3 gap-3 sm:mt-5 sm:max-w-md">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={() => setActive(i)}
                className={clsx(
                  "relative aspect-4/3 overflow-hidden rounded-lg ring-2 transition-colors",
                  i === active ? "ring-olive-500" : "ring-transparent",
                )}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
