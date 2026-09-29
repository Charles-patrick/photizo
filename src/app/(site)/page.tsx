import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import WhyInvest from "@/components/sections/home/WhyInvest";
import FeaturedProperties from "@/components/sections/home/FeaturedProperties";
import Testimonials from "@/components/sections/home/Testimonials";
import Faq from "@/components/sections/home/Faq";
import CtaBanner from "@/components/sections/home/CtaBanner";

export const metadata: Metadata = {
  title: "Photizo Properties | Trusted Real Estate in Lagos",
  description:
    "Find verified homes and investment properties in Lagos, with flexible payment plans and a trusted team guiding you from viewing to ownership.",
  openGraph: {
    title: "Photizo Properties | Trusted Real Estate in Lagos",
    description:
      "Find verified homes and investment properties in Lagos, with flexible payment plans and a trusted team guiding you from viewing to ownership.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyInvest />
      <FeaturedProperties />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
