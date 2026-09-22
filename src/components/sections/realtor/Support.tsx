"use client";

import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { contactUsInfo } from "@/lib/data";
import AuthField from "@/components/sections/auth/AuthField";
import AuthTextarea from "@/components/sections/auth/AuthTextarea";

export default function Support() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-charcoal-600">Contact Support</h1>
      <p className="mt-1 text-sm text-charcoal-600/60">
        We&apos;re here to help. Reach out to us and we&apos;ll get back to you as soon as possible.
      </p>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-lg font-semibold text-charcoal-600">Send us a Message</h2>
          <form className="mt-6 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <AuthField label="First Name" name="firstName" autoComplete="given-name" />
            <AuthField label="Last Name" name="lastName" autoComplete="family-name" />
            <AuthField label="Email Address" name="email" type="email" autoComplete="email" />
            <AuthField label="Phone Number" name="phone" type="tel" autoComplete="tel" />
            <AuthTextarea label="Message" name="message" />

            <button
              type="submit"
              className="group mt-2 inline-flex w-fit items-center gap-2.5 border-b border-olive-500/70 px-0.5 pb-2.5 text-sm font-semibold uppercase tracking-wide text-olive-500 transition-colors hover:border-olive-500"
            >
              Submit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-charcoal-600">Other ways to reach Us.</h2>

          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-charcoal-600/85">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
              <span>
                {contactUsInfo.phones.map((phone, i) => (
                  <span key={i} className="block">{phone}</span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
              <span>{contactUsInfo.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
              <span>
                {contactUsInfo.hours.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
              <span>{contactUsInfo.address}</span>
            </li>
          </ul>

          <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl">
            <iframe
              src={contactUsInfo.mapEmbedSrc}
              title="Photizo Properties office location"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
