"use client";

import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  RotateCw,
  Send,
  Settings2,
  XCircle,
} from "lucide-react";
import Modal from "@/components/ui/Modal";
import { clsx } from "@/lib/clsx";
import type { Inspection } from "@/lib/data";

const statusClasses: Record<string, string> = {
  Upcoming: "bg-inspection-upcoming-bg text-inspection-upcoming-text",
  Cancelled: "bg-inspection-cancelled-bg text-inspection-cancelled-text",
  Completed: "bg-inspection-completed-bg text-inspection-completed-text",
};

const stages = [
  { key: "scheduled", label: "Scheduled", icon: Calendar },
  { key: "confirmed", label: "Confirmed", icon: Send },
  { key: "in-progress", label: "In Progress", icon: RotateCw },
  { key: "completed", label: "Completed", icon: Settings2 },
] as const;

export default function InspectionDetailsModal({
  inspection,
  onClose,
}: {
  inspection: Inspection;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose} maxWidth="max-w-2xl">
      <h2 className="font-display text-xl font-semibold text-charcoal-600">
        Inspections Details
      </h2>

      <div className="mt-5 grid gap-5 sm:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
          <Image
            src={inspection.image}
            alt={inspection.propertyName}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span
            className={clsx(
              "inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide",
              statusClasses[inspection.status],
            )}
          >
            {inspection.status}
          </span>
          <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-600">
            {inspection.propertyName}
          </h3>
          <p className="mt-2 flex items-start gap-1.5 text-sm text-charcoal-600/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            {inspection.location}
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-charcoal-600/70">
            <Calendar className="h-4 w-4 shrink-0" />
            {inspection.date}
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-charcoal-600/70">
            <Clock className="h-4 w-4 shrink-0" />
            {inspection.time}
          </p>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-teal-100 px-3 py-2.5 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-200"
            >
              <Calendar className="h-3.5 w-3.5" />
              Reschedule Inspection
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-ember-100 px-3 py-2.5 text-xs font-semibold text-ember-700 transition-colors hover:bg-ember-100/70"
            >
              <XCircle className="h-3.5 w-3.5" />
              Cancel Inspection
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-charcoal-600/10 p-5">
        <p className="text-sm font-semibold text-charcoal-600">
          Inspections Status
        </p>

        <div className="mt-5 flex items-center">
          {stages.map((stage, i) => {
            const reached = i < inspection.completedStages;
            const nextReached = i + 1 < inspection.completedStages;
            const Icon = stage.icon;
            return (
              <div
                key={stage.key}
                className={clsx(
                  "flex items-center",
                  i < stages.length - 1 ? "flex-1" : "",
                )}
              >
                <span
                  className={clsx(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2",
                    reached
                      ? "border-olive-500 bg-olive-100 text-olive-500"
                      : "border-charcoal-600/15 bg-charcoal-600/5 text-charcoal-600/40",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                {i < stages.length - 1 && (
                  <div
                    className={clsx(
                      "mx-2 h-0.5 flex-1",
                      nextReached ? "bg-olive-500/50" : "bg-charcoal-600/15",
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-2 grid grid-cols-4 text-center">
          {stages.map((stage, i) => (
            <div key={stage.key}>
              <p
                className={clsx(
                  "text-xs font-medium",
                  i < inspection.completedStages
                    ? "text-charcoal-600"
                    : "text-charcoal-600/40",
                )}
              >
                {stage.label}
              </p>
              <p className="mt-0.5 text-[10px] text-charcoal-600/45">
                {inspection.stageTimestamps[i] ?? "—"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
