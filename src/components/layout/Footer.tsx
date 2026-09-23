"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, CalendarDays, ArrowRight } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Explore Properties", href: "/our-properties" },
  { label: "Book an Inspection", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Blog", href: "/newsroom" },
];

// NOTE: this lucide-react version ships icon-only glyphs (no brand/logo
// icons), so the social icons below are small inline SVGs instead.
const socials = [
  { icon: FacebookLogo, label: "Facebook", href: "#" },
  { icon: XLogo, label: "X", href: "#" },
  { icon: YoutubeLogo, label: "YouTube", href: "#" },
  { icon: InstagramLogo, label: "Instagram", href: "#" },
  { icon: LinkedinLogo, label: "LinkedIn", href: "#" },
];

function FacebookLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.1h2.72l.41-3.15h-3.13V7.78c0-.91.25-1.53 1.56-1.53h1.67V3.42A22.7 22.7 0 0 0 14.2 3.3c-2.23 0-3.76 1.36-3.76 3.85v2.6H7.7v3.15h2.74V21z" />
    </svg>
  );
}
function XLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function YoutubeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23 12s0-3.5-.45-5.17a2.9 2.9 0 0 0-2.05-2.05C18.79 4.33 12 4.33 12 4.33s-6.79 0-8.5.45A2.9 2.9 0 0 0 1.45 6.83C1 8.5 1 12 1 12s0 3.5.45 5.17a2.9 2.9 0 0 0 2.05 2.05c1.71.45 8.5.45 8.5.45s6.79 0 8.5-.45a2.9 2.9 0 0 0 2.05-2.05C23 15.5 23 12 23 12ZM9.75 15.02V8.98L15.5 12z" />
    </svg>
  );
}
function InstagramLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.13s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76c-.5.5-1.1.9-1.76 1.15-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.13-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.44.54C6.08.29 6.81.12 7.87.07 8.94.02 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0Z" />
    </svg>
  );
}
function LinkedinLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-olive-500 text-gold-50">
      {/*
        Same fix as the other sections: one gutter that grows gradually
        (px-5 on phones up to px-44 on very large screens) instead of
        jumping straight from px-15 to px-44 at the lg breakpoint, which is
        what was squeezing the four columns together on mobile.
      */}
      <div className="mx-auto grid max-w-8xl gap-10 px-5 py-12 sm:gap-12 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:grid-cols-[1.1fr_1fr_1fr_1.2fr] lg:gap-8 lg:px-16 lg:py-20 xl:px-28 2xl:px-44">
        {/* Logo + socials */}
        <div className="flex h-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <Link
            href="/"
            className="relative block h-12 w-full max-w-36 overflow-hidden rounded-md sm:h-14 sm:max-w-40 lg:h-16 lg:max-w-[200px]"
            aria-label="Photizo Properties home"
          >
            <Image
              src="/logo-cut.png"
              alt="Photizo Properties logo"
              fill
              sizes="(max-width: 1023px) 100vw, 200px"
              priority
              className="object-contain"
            />
          </Link>
          <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
            {socials.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-200/15 text-gold-200 transition-colors hover:bg-gold-200 hover:text-olive-900"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div className="text-center lg:text-left">
          <h3 className="font-display text-base font-semibold text-white">
            Contact Info
          </h3>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-gold-50/90">
            <li className="flex items-start justify-center gap-3 lg:justify-start">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-200" />
              <span>+234 915 090 0000</span>
            </li>
            <li className="flex items-start justify-center gap-3 lg:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-200" />
              <span className="text-left">
                Photizo Properties Limited
                <br />
                27B, Chevron Alternative Drive, Lekki, Lagos
              </span>
            </li>
            <li className="flex items-start justify-center gap-3 lg:justify-start">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-200" />
              <span>info@photizoproperties.com</span>
            </li>
            <li className="flex items-start justify-center gap-3 lg:justify-start">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold-200" />
              <span className="text-left">
                Mon – Fri : 8am – 5pm
                <br />
                Sat : 9am – 2pm
              </span>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div className="text-center lg:text-left">
          <h3 className="font-display text-base font-semibold text-white">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-gold-50/90 sm:space-y-5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center lg:text-left">
          <h3 className="font-display text-base font-semibold text-white">
            Subscribe to our Newsletter
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-gold-50/90">
            Get the latest property updates, investment tips, and exclusive
            offers right in your inbox.
          </p>
          <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              className="w-full rounded-full border border-gold-50/40 bg-transparent px-5 py-3 text-sm text-gold-50 placeholder:text-gold-50/50 focus:border-gold-200 focus:outline-none"
            />
            <button
              type="submit"
              className="group mt-5 inline-flex items-center gap-2.5 border-b border-gold-200/70 px-0.5 pb-2.5 text-sm font-semibold uppercase tracking-wide text-gold-200 transition-colors hover:border-gold-200"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
