import type { Metadata } from "next";
import Hero from "@/components/sections/our-properties/Hero";
import Properties from "@/components/sections/our-properties/Properties";

export const metadata: Metadata = {
  title: "Our Properties | Photizo Properties",
};

export default function OurPropertiesPage() {
  return (
    <>
      <Hero />
      <Properties />
    </>
  );
}
