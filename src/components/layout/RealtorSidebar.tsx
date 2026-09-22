"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bell, Briefcase, CircleHelp, Home, LayoutGrid, LogOut, Menu, Users, Wallet, X } from "lucide-react";
import { realtorNavLinks } from "@/lib/realtor-data";
import { clsx } from "@/lib/clsx";

const icons = { grid: LayoutGrid, home: Home, briefcase: Briefcase, wallet: Wallet, users: Users, bell: Bell, help: CircleHelp, logout: LogOut };

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col">
      <Link href="/realtor/dashboard" className="font-display text-2xl font-semibold text-olive-500">Photizo</Link>
      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {realtorNavLinks.map((link) => {
          const Icon = icons[link.icon];
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className={clsx(
                "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                active ? "bg-olive-900 text-gold-50" : "text-charcoal-600/75 hover:bg-gold-100"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Link
        href="/realtor/login"
        onClick={onNavigate}
        className="mt-4 flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-ember-500 transition-colors hover:bg-ember-100/40"
      >
        <LogOut className="h-4 w-4 shrink-0" />
        Sign Out
      </Link>
    </div>
  );
}

export default function RealtorSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between border-b border-charcoal-600/10 bg-gold-50 px-5 py-4 lg:hidden">
        <Link href="/realtor/dashboard" className="font-display text-xl font-semibold text-olive-500">Photizo</Link>
        <button type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((v) => !v)} className="text-charcoal-600">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-charcoal-900/50" />
          <div className="absolute inset-y-0 left-0 w-72 bg-gold-50 p-6 shadow-xl">
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r-2 border-olive-500 bg-gold-50 p-6 lg:block">
        <SidebarContent />
      </aside>
    </>
  );
}
