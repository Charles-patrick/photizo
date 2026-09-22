import {
  Award,
  Briefcase,
  ListChecks,
  ShieldCheck,
  Smile,
  Sun,
} from "lucide-react";
import { coreValues, personalityAttributes } from "@/lib/data";
import Image from "next/image";

const valueIcons = {
  award: Award,
  briefcase: Briefcase,
  "shield-check": ShieldCheck,
};

const attributeIcons = {
  smile: Smile,
  sun: Sun,
  "list-checks": ListChecks,
};

function DotsMark({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      width="22"
      height="12"
      viewBox="0 0 26 14"
      fill="none"
      className={flipped ? "-scale-x-100" : undefined}
    >
      <rect x="0" y="0" width="6" height="6" fill="currentColor" />
      <rect x="8" y="0" width="6" height="6" fill="currentColor" />
      <rect x="16" y="0" width="6" height="6" fill="currentColor" />
      <rect x="0" y="8" width="6" height="6" fill="currentColor" />
      <rect x="8" y="8" width="6" height="6" fill="currentColor" />
    </svg>
  );
}

export default function Values() {
  return (
    <>
      {/* Our Values — dark olive background */}
      <section className="bg-olive-500 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
          <div className="mb-10 flex items-center justify-center gap-6 text-gold-200 sm:mb-14">
            <span className="flex items-center text-olive-500">
              <Image
                src="/left-cube-light.png"
                alt="diamonddot"
                width={30}
                height={30}
              />
            </span>{" "}
            <h2 className="font-display text-2xl font-semibold text-gold-50 sm:text-3xl">
              Our Values
            </h2>
            <span className="flex items-center text-olive-500">
              <Image
                src="/right-cube-light.png"
                alt="diamonddot"
                width={30}
                height={30}
              />
            </span>{" "}
          </div>

          <div className="mt-10 grid gap-10 text-center sm:mt-12 sm:grid-cols-3 sm:gap-8 lg:mt-14">
            {coreValues.map((value) => {
              const Icon = valueIcons[value.icon];
              return (
                <div
                  key={value.id}
                  className="mx-auto flex max-w-xs flex-col items-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-200/40 sm:h-16 sm:w-16">
                    <Icon
                      className="h-6 w-6 text-gold-200 sm:h-7 sm:w-7"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-gold-50 sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gold-50/75 sm:text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Personality & Attributes — gold background */}
      <section className="bg-gold-200 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
          <div className="mb-10 flex items-center justify-center gap-6 text-gold-200 sm:mb-14">
            <span className="flex items-center text-olive-500">
              <Image
                src="/left-cube-dark.png"
                alt="diamonddot"
                width={30}
                height={30}
              />
            </span>{" "}
            <h2 className="font-display text-2xl font-semibold text-olive-500 sm:text-3xl">
              Our Personality &amp; Attributes
            </h2>
            <span className="flex items-center text-olive-500">
              <Image
                src="/right-cube-dark.png"
                alt="diamonddot"
                width={30}
                height={30}
              />
            </span>{" "}
          </div>

          <div className="mt-10 grid gap-10 text-center sm:mt-12 sm:grid-cols-3 sm:gap-8 lg:mt-14">
            {personalityAttributes.map((attr) => {
              const Icon = attributeIcons[attr.icon];
              return (
                <div
                  key={attr.id}
                  className="mx-auto flex max-w-xs flex-col items-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-olive-500 sm:h-16 sm:w-16">
                    <Icon
                      className="h-6 w-6 text-gold-200 sm:h-7 sm:w-7"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-charcoal-600 sm:text-lg">
                    {attr.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-600/75 sm:text-sm">
                    {attr.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
