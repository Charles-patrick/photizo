"use client";

import Modal from "@/components/ui/Modal";
import AuthField from "@/components/sections/auth/AuthField";
import type { Property } from "@/types";

export default function BookInspectionModal({
  property,
  onClose,
}: {
  property: Property;
  onClose: () => void;
}) {
  const shortName = property.name.split(",")[0];

  return (
    <Modal onClose={onClose}>
      <div className="text-center">
        <h2 className="font-display text-xl font-semibold text-charcoal-600">
          Book an Inspection
        </h2>
        <p className="mt-1 text-sm text-charcoal-600/60">
          Schedule a visit to {shortName}
        </p>
      </div>

      <form
        className="mt-6 flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        <AuthField label="Full Name" name="fullName" autoComplete="name" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AuthField
            label="Phone Number"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
          <AuthField
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-600/50">
              Select Date
            </span>
            <input
              type="date"
              name="date"
              className="mt-2 w-full border-b border-charcoal-600/25 bg-transparent pb-2 text-sm text-charcoal-600 focus:border-olive-500 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-600/50">
              Select Time
            </span>
            <select
              name="time"
              defaultValue=""
              className="mt-2 w-full border-b border-charcoal-600/25 bg-transparent pb-2 text-sm text-charcoal-600 focus:border-olive-500 focus:outline-none"
            >
              <option value="" disabled>
                --:--
              </option>
              <option>9:00 AM</option>
              <option>11:00 AM</option>
              <option>1:00 PM</option>
              <option>3:00 PM</option>
            </select>
          </label>
        </div>

        <AuthField label="Referral Code (Optional)" name="referral" />

        <div className="mt-2 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg border border-charcoal-600/25 py-3 text-sm font-semibold text-charcoal-600 transition-colors hover:bg-charcoal-600/5"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-lg bg-olive-900 py-3 text-sm font-semibold text-gold-50 transition-colors hover:bg-olive-800"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </Modal>
  );
}
