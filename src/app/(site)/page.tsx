import Hero from "@/components/sections/home/Hero";
import WhyInvest from "@/components/sections/home/WhyInvest";
import FeaturedProperties from "@/components/sections/home/FeaturedProperties";
import Testimonials from "@/components/sections/home/Testimonials";
import Faq from "@/components/sections/home/Faq";
import CtaBanner from "@/components/sections/home/CtaBanner";

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
