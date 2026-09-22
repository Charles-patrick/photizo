"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bell,
  Bookmark,
  Calendar,
  CircleHelp,
  Home,
  LayoutGrid,
  LogOut,
  Menu,
  Receipt,
  X,
} from "lucide-react";
import { dashboardNavLinks } from "@/lib/data";
import { clsx } from "@/lib/clsx";
import { useRouter } from "next/navigation";
import Image from "next/image";

const icons = {
  grid: LayoutGrid,
  home: Home,
  calendar: Calendar,
  bookmark: Bookmark,
  receipt: Receipt,
  bell: Bell,
  help: CircleHelp,
  logout: LogOut,
};

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();

  function handleSignOut() {
    onNavigate?.();
    router.replace("/login");
  }

  return (
    <div className="flex h-full flex-col">
      <Link href="/dashboard/customer">
        <Image
          src="/logo-dark-clear.png"
          alt="Photizo Properties"
          width={200}
          height={10}
          priority
        />
      </Link>

      <nav className="mt-8 flex flex-col gap-1">
        {dashboardNavLinks.map((link) => {
          const Icon = icons[link.icon];
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className={clsx(
                "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-olive-500 text-gold-50"
                  : "text-charcoal-600/75 hover:bg-gold-100",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={handleSignOut}
        className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-ember-500 transition-colors hover:bg-ember-100/40"
      >
        <LogOut className="h-4 w-4 shrink-0" />
        Sign Out
      </button>
    </div>
  );
}

export default function DashboardSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-charcoal-600/10 bg-gold-50 px-5 py-4 lg:hidden">
        <Link
          href="/dashboard/customer"
          className="relative block h-8 w-36"
          aria-label="Photizo Properties dashboard home"
        >
          <Image
            src="/logo-dark-clear.png"
            alt="Photizo Properties"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="text-charcoal-600"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-charcoal-900/50"
          />
          <div className="absolute inset-y-0 left-0 w-72 bg-gold-50 p-6 shadow-xl">
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden h-screen w-64 border-r-2 border-olive-500 bg-gold-50 p-6 lg:block">
        <SidebarContent />
      </aside>
    </>
  );
}
