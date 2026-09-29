import Hero from "@/components/sections/newsroom/Hero";
import Newsroom from "@/components/sections/newsroom/Newsroom";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Newsroom | Photizo Properties",
  description:
    "Read the latest property news, company updates, media coverage, and real estate insights from Photizo Properties.",
  openGraph: {
    title: "Our Newsroom | Photizo Properties",
    description:
      "Property news, company updates, and real estate insights from Photizo Properties.",
    url: "/newsroom",
  },
};

export default function OurNewsroomPage() {
  return (
    <>
      <Hero />
      <Newsroom />
    </>
  );
}
