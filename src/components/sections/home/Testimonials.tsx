import { testimonials } from "@/lib/data";
import Image from "next/image";

export default function Testimonials() {
  const [featured, ...rest] = testimonials;
  return (
    <section className="bg-olive-500 py-5 sm:py-7 lg:py-14 border-t border-gold-50">
      <div className="mx-auto max-w-8xl px-15 sm:px-18 lg:px-44">
        <div className="mb-10 flex items-center justify-center gap-6 text-gold-200 sm:mb-14">
          <span className="flex items-center text-olive-500">
            <Image
              src="/left-cube-light.png"
              alt="diamonddot"
              width={30}
              height={30}
            />
          </span>
          <h2 className="font-display text-xl font-semibold text-gold-50 sm:text-2xl">
            CLIENT TESTIMONIALS
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

        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr_1fr] lg:grid-rows-2">
          {/* Featured photo card spans both rows */}
          <div className="relative min-h-80 overflow-hidden rounded-2xl lg:row-span-2">
            <Image
              src={featured.image}
              alt={`Portrait of ${featured.name}`}
              fill
              sizes="(max-width: 1023px) 100vw, 36vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-sm leading-relaxed text-gold-50">
                “{featured.quote}”
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold-50">
                <span className="relative h-8 w-8 overflow-hidden rounded-full border border-gold-50/50">
                  <Image
                    src={featured.image}
                    alt={featured.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </span>
                {featured.name}
              </p>
            </div>
          </div>

          {rest.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl bg-gold-50/95 p-6"
            >
              <p className="text-sm leading-relaxed text-charcoal-600">
                “{t.quote}”
              </p>
              <p className="mt-6 flex items-center gap-2.5 text-sm font-semibold text-charcoal-600">
                <span className="relative h-8 w-8 overflow-hidden rounded-full border border-olive-500/30">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </span>
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
