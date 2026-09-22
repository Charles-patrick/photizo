import Hero from "@/components/sections/newsroom/Hero";
import Newsroom from "@/components/sections/newsroom/Newsroom";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Newsroom | Photizo Properties",
};

export default function OurNewsroomPage() {
  return (
    <>
      <Hero />
      <Newsroom />
    </>
  );
}
