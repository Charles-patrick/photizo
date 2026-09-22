import type { Metadata } from "next";
import Hero from "@/components/sections/about-us/Hero";
import MeetTeam from "@/components/sections/about-us/MeetTeam";
import ExploreProperties from "@/components/sections/about-us/ExploreProperties";
import Values from "@/components/sections/about-us/Values";
import Mission from "@/components/sections/about-us/Mission";

export const metadata: Metadata = { title: "About Us | Photizo Properties" };

export default function AboutUsPage() {
  return (
    <>
      <Hero />
      <Mission />
      <Values />
      <MeetTeam />
      <ExploreProperties />
    </>
  );
}
