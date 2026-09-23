"use client";

import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { contactUsInfo } from "@/lib/data";
import AuthField from "@/components/sections/auth/AuthField";
import AuthTextarea from "@/components/sections/auth/AuthTextarea";

export default function ContactForm() {
  return (
    <section className="bg-gold-50 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-8xl gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:px-28 2xl:px-44">
        <div>
          <h2 className="font-display text-2xl font-medium leading-snug text-charcoal-600 sm:text-3xl ">
            {contactUsInfo.heading}
          </h2>

          <ul className="mt-8 space-y-4 text-sm leading-relaxed text-charcoal-600/85 sm:mt-10 sm:text-base">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
              <span>
                {contactUsInfo.phones.map((phone, i) => (
                  <span key={i} className="block">
                    {phone}
                  </span>
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
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
              <span>{contactUsInfo.address}</span>
            </li>
          </ul>

          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl sm:mt-10">
            <iframe
              src={contactUsInfo.mapEmbedSrc}
              title="Photizo Properties office location"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <AuthField
            label="First Name"
            name="firstName"
            autoComplete="given-name"
          />
          <AuthField
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
          <AuthField
            label="Mobile Number"
            name="mobile"
            type="tel"
            autoComplete="tel"
          />
          <AuthField
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
          />
          <AuthTextarea label="Message" name="message" />

          <label className="flex items-start gap-2.5 text-xs leading-relaxed text-charcoal-600/70 sm:text-sm">
            <input
              type="checkbox"
              name="newsletter"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal-600/40 text-olive-500 focus:ring-olive-500"
            />
            Stay in touch by getting news &amp; updates regularly from Photizo
            newsletter
          </label>

          <button
            type="submit"
            className="group mt-2 inline-flex w-fit items-center gap-2.5 border-b border-olive-500/70 px-0.5 pb-2.5 text-sm font-semibold uppercase tracking-wide text-olive-500 transition-colors hover:border-olive-500"
          >
            Submit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}
