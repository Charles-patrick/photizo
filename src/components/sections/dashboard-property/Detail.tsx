"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Droplet, MapPin, Route, Ruler, ShieldCheck, Zap } from "lucide-react";
import { clsx } from "@/lib/clsx";
import type { Property } from "@/types";
import BookInspectionModal from "./BookInspectionModal";
import PaymentPlanModal from "./PaymentPlanModal";
import LocationModal from "./LocationModal";
import FaqModal from "./FaqModal";

const featureIcons = {
  "map-pin": MapPin,
  ruler: Ruler,
  "shield-check": ShieldCheck,
  droplet: Droplet,
  route: Route,
  zap: Zap,
};

type ModalKey = "inspection" | "payment" | "location" | "faq" | null;

export default function Detail({ property }: { property: Property }) {
  const rawImages = property.gallery?.length
    ? property.gallery
    : [property.image];
  const images =
    rawImages.length >= 4
      ? rawImages
      : [...rawImages, ...Array(4 - rawImages.length).fill(property.image)];

  const [active, setActive] = useState(0);
  const [modal, setModal] = useState<ModalKey>(null);
  const shortName = property.name.split(",")[0];

  return (
    <div>
      <nav className="flex items-center gap-2 text-xs text-charcoal-600/60 sm:text-sm">
        <Link
          href="/dashboard/customer/browse-properties"
          className="hover:text-olive-500"
        >
          Browse Properties
        </Link>
        <span>/</span>
        <span className="text-ember-500">{shortName}</span>
      </nav>

      <div className="mt-4 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl">
            <Image
              src={images[active]}
              alt={property.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-3 grid grid-cols-4 gap-3">
            {images.slice(0, 4).map((src, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={() => setActive(i)}
                className={clsx(
                  "relative aspect-4/3 overflow-hidden rounded-lg ring-2 transition-colors",
                  i === active ? "ring-olive-500" : "ring-transparent",
                )}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 25vw, 14vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {property.features && property.features.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-base font-semibold uppercase tracking-wide text-charcoal-600">
                Features of {shortName}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {property.features.map((feature, i) => {
                  const Icon = featureIcons[feature.icon];
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 border-b border-charcoal-600/10 pb-2.5"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-olive-500" />
                      <span className="text-xs font-medium uppercase tracking-wide text-charcoal-600/80">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div>
          <h1 className="font-display text-2xl font-semibold text-charcoal-600">
            {shortName}
          </h1>
          {property.price && (
            <p className="mt-1 font-display text-2xl font-semibold text-olive-500">
              {property.price}
            </p>
          )}
          {property.description && (
            <p className="mt-4 text-sm leading-relaxed text-charcoal-600/75">
              {property.description}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setModal("inspection")}
              className="rounded-lg bg-olive-900 py-3 text-sm font-semibold text-gold-50 transition-colors hover:bg-olive-800"
            >
              Book an Inspection
            </button>
            <button
              type="button"
              onClick={() => setModal("payment")}
              className="rounded-lg bg-teal-100 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-200"
            >
              View payment plans
            </button>
            <button
              type="button"
              onClick={() => setModal("location")}
              className="rounded-lg border border-charcoal-600/25 py-3 text-sm font-semibold text-charcoal-600 transition-colors hover:bg-charcoal-600/5"
            >
              View map location
            </button>
            <button
              type="button"
              onClick={() => setModal("faq")}
              className="rounded-lg bg-gold-200/60 py-3 text-sm font-semibold text-charcoal-600 transition-colors hover:bg-gold-200"
            >
              FAQs about {shortName}
            </button>
          </div>
        </div>
      </div>

      {modal === "inspection" && (
        <BookInspectionModal
          property={property}
          onClose={() => setModal(null)}
        />
      )}
      {modal === "payment" && (
        <PaymentPlanModal property={property} onClose={() => setModal(null)} />
      )}
      {modal === "location" && (
        <LocationModal property={property} onClose={() => setModal(null)} />
      )}
      {modal === "faq" && (
        <FaqModal property={property} onClose={() => setModal(null)} />
      )}
    </div>
  );
}
