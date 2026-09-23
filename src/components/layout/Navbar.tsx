"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowLink from "@/components/ui/ArrowLink";

const HERO_ROUTES = [
  "/",
  "/newsroom",
  "/our-properties",
  "/about-us",
  "/contact-us",
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-properties", label: "Our Properties" },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const hasHero = HERO_ROUTES.includes(pathname);
  const isSolid = !hasHero || scrolled;

  useEffect(() => {
    if (!hasHero) return;

    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isSolid ? "bg-olive-500" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-2 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
        {/* Logo */}
        <Link
          href="/"
          className="relative block h-10 w-32 shrink-0 sm:h-12 sm:w-40"
          aria-label="Photizo Properties home"
        >
          <Image
            src="/logo-light.png"
            alt="Photizo Properties"
            fill
            sizes="(max-width: 639px) 128px, 160px"
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden shrink-0 items-center gap-6 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`whitespace-nowrap text-sm uppercase tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-gold-200"
                    : "text-gold-50/90 hover:text-gold-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Get Started */}
        <div className="hidden shrink-0 lg:block">
          <ArrowLink
            href="/login"
            variant="onDark"
            className="mt-3 whitespace-nowrap"
          >
            Get Started
          </ArrowLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-gold-50 lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-gold-50/15 bg-olive-500 px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-base uppercase transition-colors ${
                    isActive(link.href)
                      ? "text-gold-200"
                      : "text-gold-50/90 hover:text-gold-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ArrowLink href="/login" variant="onDark" className="mt-5">
            Get Started
          </ArrowLink>
        </div>
      )}
    </header>
  );
}
