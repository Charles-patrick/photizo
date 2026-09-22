import type { Property } from "@/types";
import Image from "next/image";
import { Check } from "lucide-react";

const headerStyles = [
  "bg-[var(--color-kyc-verified-bg)]",
  "bg-gold-400",
  "bg-[#B2D2D4]",
];

export default function PaymentPlans({ property }: { property: Property }) {
  if (!property.paymentPlans || property.paymentPlans.length === 0) return null;
  const plans = property.paymentPlans ?? [];
  const shortName = property.name.split(",")[0];

  return (
    <section className="mx-auto w-full max-w-5xl px-5 sm:px-8 md:px-12 mb-10">
      <div className="text-center">
        <h2 className="font-display text-xl font-semibold text-charcoal-600">
          Payment Plans
        </h2>
        <p className="mx-auto mt-1 text-sm text-charcoal-600/60">
          Flexible payment plans designed to make owning a home at {shortName}{" "}
          seamless.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {plans.map((plan, i) => {
          return (
            <div
              key={plan.title}
              className="overflow-hidden rounded-md border border-charcoal-600/15 bg-gold-50"
            >
              <div
                className={`flex min-h-30 flex-col items-center justify-center px-3 py-4 text-center ${headerStyles[i % headerStyles.length]}`}
              >
                {plan.image && (
                  <Image
                    src={plan.image}
                    alt=""
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain"
                  />
                )}
                <p className="mt-2 font-display text-sm font-semibold text-charcoal-600">
                  {plan.title}
                </p>
                <p className="mt-0.5 text-[11px] text-charcoal-600/75">
                  {plan.description}
                </p>
              </div>
              <ul className="flex min-h-51 flex-col justify-center gap-5 px-3 py-5 text-xs text-charcoal-600/75">
                {plan.bullets?.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-1.5">
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-olive-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
