import type { Metadata } from "next";
import ContactForm from "@/components/sections/contact-us/ContactForm";
import Hero from "@/components/sections/contact-us/Hero";

export const metadata: Metadata = {
  title: "Contact Us | Photizo Properties",
  description:
    "Contact Photizo Properties in Lagos to ask about available homes, property viewings, payment plans, or real estate support.",
  openGraph: {
    title: "Contact Photizo Properties",
    description:
      "Reach the Photizo Properties team for property enquiries and viewing appointments.",
    url: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Hero />
      <ContactForm />
    </>
  );
}
