"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import ArrowLink from "@/components/ui/ArrowLink";
import { myInspections } from "@/lib/data";
import { clsx } from "@/lib/clsx";
import type { Inspection } from "@/lib/data";
import InspectionDetailsModal from "./InspectionDetailsModal";

type Tab = "all" | Inspection["status"];

const statusClasses: Record<string, string> = {
  Upcoming: "bg-inspection-upcoming-bg text-inspection-upcoming-text",
  Cancelled: "bg-inspection-cancelled-bg text-inspection-cancelled-text",
  Completed: "bg-inspection-completed-bg text-inspection-completed-text",
};

export default function MyInspectionsPage() {
  const [tab, setTab] = useState<Tab>("all");
  const [selected, setSelected] = useState<Inspection | null>(null);

  const upcomingCount = myInspections.filter(
    (i) => i.status === "Upcoming",
  ).length;
  const completedCount = myInspections.filter(
    (i) => i.status === "Completed",
  ).length;
  const cancelledCount = myInspections.filter(
    (i) => i.status === "Cancelled",
  ).length;

  const visible = useMemo(
    () =>
      tab === "all"
        ? myInspections
        : myInspections.filter((i) => i.status === tab),
    [tab],
  );

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "all", label: "All Inspections", count: myInspections.length },
    { key: "Upcoming", label: "Upcoming", count: upcomingCount },
    { key: "Completed", label: "Completed", count: completedCount },
    { key: "Cancelled", label: "Cancelled", count: cancelledCount },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal-600">
        My Inspections
      </h1>

      <div className="mt-5 flex flex-wrap gap-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={clsx(
              "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
              tab === t.key
                ? "bg-olive-900 text-gold-50"
                : "border border-charcoal-600/20 text-charcoal-600/75 hover:bg-charcoal-600/5",
            )}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {visible.map((inspection) => (
          <div
            key={inspection.id}
            className="flex flex-col gap-4 rounded-2xl bg-gold-50 p-4 sm:flex-row sm:items-center sm:p-5"
          >
            <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-28">
              <Image
                src={inspection.image}
                alt={inspection.propertyName}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <span
                className={clsx(
                  "inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide",
                  statusClasses[inspection.status],
                )}
              >
                {inspection.status}
              </span>
              <p className="mt-1.5 text-sm font-semibold text-charcoal-600">
                {inspection.propertyName}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-charcoal-600/60">
                <MapPin className="h-3 w-3 shrink-0" />
                {inspection.location}
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

            <ArrowLink
              onClick={() => setSelected(inspection)}
              variant="onLight"
              className="shrink-0"
            >
              View Details
            </ArrowLink>
          </div>
        ))}

        {visible.length === 0 && (
          <p className="rounded-2xl bg-gold-50 p-8 text-center text-sm text-charcoal-600/70">
            No inspections in this category yet.
          </p>
        )}
      </div>

      {selected && (
        <InspectionDetailsModal
          inspection={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
