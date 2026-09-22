import type { Metadata } from "next";
import ContactForm from "@/components/sections/contact-us/ContactForm";
import Hero from "@/components/sections/contact-us/Hero";

export const metadata: Metadata = { title: "Contact Us | Photizo Properties" };

export default function ContactUsPage() {
  return (
    <>
      <Hero />
      <ContactForm />
    </>
  );
}
