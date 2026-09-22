import ArrowLink from "@/components/ui/ArrowLink";

export default function ScheduleInspection() {
  return (
    <section className="bg-gold-100/70 py-10 sm:py-12">
      <div className="mx-auto flex max-w-8xl flex-col items-center gap-4 px-5 text-center sm:px-8 md:px-12 lg:px-16 xl:px-28 2xl:px-44">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-600/60">
          Schedule an Inspection
        </p>
        <p className="max-w-lg text-sm leading-relaxed text-charcoal-600/80 sm:text-base">
          Create an account to schedule property visits, track your bookings,
          and receive personalized property recommendations.
        </p>
        <ArrowLink href="/contact-us" variant="onLight">
          Get Started
        </ArrowLink>
      </div>
    </section>
  );
}
