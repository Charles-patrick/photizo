import KycBadge from "@/components/ui/KycBadge";
import { dashboardUser } from "@/lib/data";

function formatOrdinalDate(date: Date) {
  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  return `${weekday}, ${day}${suffix} ${month}`;
}

export default function Header() {
  const today = formatOrdinalDate(new Date());

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p className="text-sm text-charcoal-600/60">{today}</p>
          <h1 className="mt-1 font-display text-2xl font-semibold text-charcoal-600 sm:text-3xl">
            Welcome, {dashboardUser.firstName} . {dashboardUser.lastName}
          </h1>
        </div>
        <KycBadge status={dashboardUser.kycStatus} />
      </div>
    </div>
  );
}
