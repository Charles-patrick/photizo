"use client";

import Image from "next/image";
import { Check, Mail, MapPin, Phone, User } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { clsx } from "@/lib/clsx";
import { DEAL_STAGES, type Deal } from "@/lib/realtor-data";
import { featuredProperties } from "@/lib/data";

const statusClasses: Record<string, string> = {
  "Inspecting Property": "bg-[var(--color-inspection-upcoming-bg)] text-[var(--color-inspection-upcoming-text)]",
  "Installment Active": "bg-teal-100 text-teal-700",
  "Completed Payment": "bg-[var(--color-inspection-completed-bg)] text-[var(--color-inspection-completed-text)]",
};

export default function DealDetailsModal({ deal, onClose }: { deal: Deal; onClose: () => void }) {
  const property = featuredProperties.find((p) => p.id === deal.propertyId);
  if (!property) return null;
  const shortName = property.name.split(",")[0];

  return (
    <Modal onClose={onClose} maxWidth="max-w-2xl">
      <div className="flex items-start justify-between">
        <h2 className="font-display text-lg font-semibold text-charcoal-600">Deal Details</h2>
      </div>

      <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <div>
          <h3 className="font-display text-xl font-semibold text-charcoal-600">{shortName}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-charcoal-600/60">
            <MapPin className="h-3.5 w-3.5" />
            {property.location}, {property.state} State
          </p>
        </div>
        <span className={clsx("rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide", statusClasses[deal.status])}>
          {deal.status}
        </span>
      </div>

      <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl">
        <Image src={property.image} alt={property.imageAlt} fill className="object-cover" />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl bg-gold-100/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-600/50">Payment Summary</p>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="text-charcoal-600/70">Total Amount</span>
            <span className="font-semibold text-charcoal-600">{deal.totalAmount}</span>
          </div>
          <div className="mt-1.5 flex items-center justify-between text-sm">
            <span className="text-charcoal-600/70">Amount Paid</span>
            <span className="font-semibold text-charcoal-600">{deal.amountPaid}</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-charcoal-600/10">
            <div className="h-full rounded-full bg-olive-500" style={{ width: `${deal.percentPaid}%` }} />
          </div>
          <p className="mt-1 text-right text-[11px] text-charcoal-600/50">{deal.percentPaid}%</p>
        </div>

        <div className="rounded-xl bg-gold-100/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-600/50">Client Information</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-charcoal-600">
            <User className="h-3.5 w-3.5 text-charcoal-600/50" />
            {deal.clientName}
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-sm text-charcoal-600">
            <Phone className="h-3.5 w-3.5 text-charcoal-600/50" />
            {deal.clientPhone}
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-sm text-charcoal-600">
            <Mail className="h-3.5 w-3.5 text-charcoal-600/50" />
            {deal.clientEmail}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-charcoal-600/10 p-5">
        <p className="text-sm font-semibold text-charcoal-600">Deal Status</p>

        <div className="mt-5 flex items-center">
          {DEAL_STAGES.map((stage, i) => {
            const reached = i < deal.completedStages;
            const nextReached = i + 1 < deal.completedStages;
            return (
              <div key={stage} className={clsx("flex items-center", i < DEAL_STAGES.length - 1 ? "flex-1" : "")}>
                <span
                  className={clsx(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2",
                    reached ? "border-olive-500 bg-olive-100 text-olive-500" : "border-charcoal-600/15 bg-charcoal-600/5 text-charcoal-600/40"
                  )}
                >
                  <Check className="h-4 w-4" />
                </span>
                {i < DEAL_STAGES.length - 1 && (
                  <div className={clsx("mx-2 h-0.5 flex-1", nextReached ? "bg-olive-500/50" : "bg-charcoal-600/15")} />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-2 grid grid-cols-3 text-center">
          {DEAL_STAGES.map((stage, i) => (
            <div key={stage}>
              <p className={clsx("text-xs font-medium", i < deal.completedStages ? "text-charcoal-600" : "text-charcoal-600/40")}>
                {stage}
              </p>
              <p className="mt-0.5 text-[10px] text-charcoal-600/45">{deal.stageDates[i] ?? "—"}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
