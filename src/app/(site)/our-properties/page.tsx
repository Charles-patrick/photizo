import type { Metadata } from "next";
import Hero from "@/components/sections/our-properties/Hero";
import Properties from "@/components/sections/our-properties/Properties";

export const metadata: Metadata = {
  title: "Our Properties | Photizo Properties",
  description:
    "Explore verified houses, apartments, and investment properties in Lagos and across Nigeria with Photizo Properties.",
  openGraph: {
    title: "Properties for Sale | Photizo Properties",
    description:
      "Browse verified properties and find a place that fits your plans and budget.",
    url: "/our-properties",
  },
};

export default function OurPropertiesPage() {
  return (
    <>
      <Hero />
      <Properties />
    </>
  );
}
