"use client";

import Link from "next/link";
import { ArrowRight, Calendar, LogOut } from "lucide-react";
import AuthField from "@/components/sections/auth/AuthField";
import AuthSelect from "@/components/sections/auth/AuthSelect";

const titles = ["Mr", "Mrs", "Miss", "Dr", "Engr", "Chief"];
const genders = ["Male", "Female"];
const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
const nationalities = ["Nigerian", "Other"];

export default function KycForm() {
  return (
    <div className="min-h-screen bg-gold-50">
      <header className="flex items-center justify-between border-b border-charcoal-600/10 bg-gold-50 px-5 py-4 sm:px-8">
        <Link
          href="/dashboard"
          className="font-display text-2xl font-semibold text-olive-500"
        >
          Photizo
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-1.5 text-sm font-medium text-ember-500 transition-colors hover:text-ember-700"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        <h1 className="font-display text-2xl font-semibold text-charcoal-600 sm:text-3xl">
          Complete your Profile (KYC)
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-600/70">
          To continue, please provide your KYC (Know Your Customer) information.
          This helps us verify your identity and keep your account secure.
        </p>

        <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-base font-semibold text-charcoal-600">
            Client Information
          </h2>

          <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <div className="w-24 shrink-0">
                <AuthSelect label="Title" name="title" options={titles} />
              </div>
              <div className="flex-1">
                <AuthField
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                />
              </div>
            </div>

            <AuthField label="Other Names" name="otherNames" />

            <AuthField
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />

            <div className="flex gap-3">
              <div className="flex-1">
                <AuthSelect label="Gender" name="gender" options={genders} />
              </div>
              <div className="relative flex-1">
                <input
                  type="date"
                  name="dob"
                  className="w-full border-b border-charcoal-600/25 bg-transparent pb-2 pt-3 pr-6 text-sm text-charcoal-600 focus:border-olive-500 focus:outline-none"
                />
                <Calendar className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-600/40" />
              </div>
            </div>

            <AuthField
              label="Telephone Number"
              name="phone"
              type="tel"
              autoComplete="tel"
            />
            <AuthSelect
              label="Marital Status"
              name="maritalStatus"
              options={maritalStatuses}
            />

            <AuthField label="Occupation" name="occupation" />
            <AuthField
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
            />

            <AuthSelect
              label="Nationality"
              name="nationality"
              options={nationalities}
            />
          </div>

          <button
            type="submit"
            className="group mt-8 inline-flex w-fit items-center gap-2.5 border-b border-olive-500/70 px-0.5 pb-2.5 text-sm font-semibold uppercase tracking-wide text-olive-500 transition-colors hover:border-olive-500"
          >
            Submit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  );
}
