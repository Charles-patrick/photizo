export default function PageComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="flex min-h-[70vh] items-center bg-gold-50 pt-28">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-500">
          Coming Soon
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium text-charcoal-600 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-charcoal-600/75 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
