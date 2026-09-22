import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { myInspections } from "@/lib/data";
import { clsx } from "@/lib/clsx";

const statusClasses: Record<string, string> = {
  Upcoming: "bg-inspection-upcoming-bg text-inspection-upcoming-text",
  Cancelled: "bg-inspection-cancelled-bg text-inspection-cancelled-text",
  Completed: "bg-inspection-completed-bg text-inspection-completed-text",
};

export default function MyInspections() {
  const preview = [...myInspections]
    .sort((a, b) =>
      a.status === "Upcoming" ? -1 : b.status === "Upcoming" ? 1 : 0,
    )
    .slice(0, 3);

  return (
    <div className="rounded-2xl bg-gold-50 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-charcoal-600">
          My Inspections
        </h2>
        <Link
          href="/dashboard/customer/my-inspections"
          className="text-xs font-semibold text-olive-500 hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {preview.map((inspection) => (
          <div
            key={inspection.id}
            className="flex items-center gap-3 rounded-xl border border-charcoal-600/10 p-3"
          >
            <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={inspection.image}
                alt={inspection.propertyName}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-charcoal-600">
                {inspection.propertyName}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-charcoal-600/60">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {inspection.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {inspection.time}
                </span>
              </div>
            </div>
            <span
              className={clsx(
                "shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
                statusClasses[inspection.status],
              )}
            >
              {inspection.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
