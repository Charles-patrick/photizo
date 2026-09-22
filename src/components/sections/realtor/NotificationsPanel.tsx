import Link from "next/link";
import { Bell, Bookmark, Calendar, CreditCard, ShieldCheck, XCircle } from "lucide-react";
import { realtorNotifications } from "@/lib/realtor-data";

const icons = { calendar: Calendar, bookmark: Bookmark, "shield-check": ShieldCheck, bell: Bell, "credit-card": CreditCard, "x-circle": XCircle };

export default function NotificationsPanel() {
  const preview = realtorNotifications.slice(0, 4);

  return (
    <div className="rounded-2xl bg-gold-50 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-ember-500">Notifications</h2>
        <Link href="/realtor/dashboard/notifications" className="text-xs font-semibold text-olive-500 hover:underline">
          View all →
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {preview.map((notification) => {
          const Icon = icons[notification.icon];
          return (
            <div key={notification.id} className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-olive-500/10 text-olive-500">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-charcoal-600">{notification.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-charcoal-600/65">{notification.description}</p>
                <p className="mt-1 text-[11px] text-charcoal-600/45">{notification.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
