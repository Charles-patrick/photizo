"use client";

import { useMemo, useState } from "react";
import { Bell, Bookmark, Calendar, CreditCard, Search, ShieldCheck, XCircle } from "lucide-react";
import { realtorNotifications } from "@/lib/realtor-data";
import { clsx } from "@/lib/clsx";

const icons = { calendar: Calendar, bookmark: Bookmark, "shield-check": ShieldCheck, bell: Bell, "credit-card": CreditCard, "x-circle": XCircle };

const badgeStyles: Record<string, string> = {
  bookmark: "bg-teal-100 text-teal-700",
  calendar: "bg-gold-200 text-gold-900",
  "shield-check": "bg-[var(--color-kyc-verified-bg)] text-[var(--color-kyc-verified-text)]",
  "credit-card": "bg-teal-100 text-teal-700",
  "x-circle": "bg-ember-100 text-ember-700",
  bell: "bg-[var(--color-kyc-verified-bg)] text-[var(--color-kyc-verified-text)]",
};

export default function Notifications() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return realtorNotifications;
    return realtorNotifications.filter(
      (n) => n.title.toLowerCase().includes(query) || n.description.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal-600">Notifications</h1>

      <div className="mt-5 flex items-center gap-3 border-b border-charcoal-600/25 py-3">
        <Search className="h-4 w-4 shrink-0 text-charcoal-600/40" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search properties by location, type, or keyword"
          className="w-full bg-transparent text-sm text-charcoal-600 placeholder:text-charcoal-600/40 focus:outline-none"
        />
      </div>

      <div className="mt-6 flex flex-col divide-y divide-charcoal-600/10 rounded-2xl bg-gold-50">
        {filtered.map((notification) => {
          const Icon = icons[notification.icon];
          return (
            <div key={notification.id} className="flex items-start gap-4 p-4 sm:p-5">
              <span className={clsx("flex h-10 w-10 shrink-0 items-center justify-center rounded-full", badgeStyles[notification.icon])}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-charcoal-600">{notification.title}</p>
                <p className="mt-0.5 text-sm text-charcoal-600/65">{notification.description}</p>
              </div>
              <span className="shrink-0 whitespace-nowrap text-xs text-charcoal-600/45">{notification.time}</span>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="p-6 text-center text-sm text-charcoal-600/70">No notifications match that search.</p>
        )}
      </div>
    </div>
  );
}
