import { dealStatCategories, totalDeals } from "@/lib/realtor-data";

/**
 * Pure-CSS donut chart via conic-gradient — no charting library needed.
 * Each category's slice angle is derived from its share of `totalDeals`.
 */
function buildConicGradient() {
  let cursor = 0;
  const stops = dealStatCategories.map((cat) => {
    const start = cursor;
    const sliceDeg = (cat.count / totalDeals) * 360;
    cursor += sliceDeg;
    return `${cat.color} ${start}deg ${cursor}deg`;
  });
  return `conic-gradient(${stops.join(", ")})`;
}

export default function DealStatistics() {
  return (
    <div className="mt-6 rounded-2xl bg-gold-50 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ember-500">Deal Statistics</h2>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-olive-100 px-3 py-1 text-xs font-semibold text-olive-500">
          Total Deals : {totalDeals}
        </span>
      </div>

      <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
        <div
          className="relative h-28 w-28 shrink-0 rounded-full"
          style={{ background: buildConicGradient() }}
        >
          <div className="absolute inset-3 rounded-full bg-gold-50" />
        </div>

        <div className="flex w-full flex-col gap-3">
          {dealStatCategories.map((cat) => {
            const percent = Math.round((cat.count / totalDeals) * 100);
            return (
              <div key={cat.id}>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-charcoal-600/80">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    {cat.label}
                  </span>
                  <span className="font-semibold text-charcoal-600">
                    {cat.count} <span className="font-normal text-charcoal-600/50">({percent}%)</span>
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-charcoal-600/10">
                  <div className="h-full rounded-full" style={{ width: `${percent}%`, backgroundColor: cat.color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
