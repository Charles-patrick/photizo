import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredProperties } from "@/lib/data";
import Gallery from "@/components/sections/property-detail/Gallery";
import Features from "@/components/sections/property-detail/Features";
import ScheduleInspection from "@/components/sections/property-detail/ScheduleInspection";
import LocationMap from "@/components/sections/property-detail/LocationMap";
import Faq from "@/components/sections/property-detail/Faq";
import PaymentPlans from "@/components/sections/property-detail/PaymentPlans";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return featuredProperties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = featuredProperties.find((p) => p.id === id);
  return {
    title: property
      ? `${property.name} | Photizo Properties`
      : "Property Not Found | Photizo Properties",
    description: property
      ? `${property.name} in ${property.location}, ${property.state}. Explore property details, features, location, FAQs, and payment plans with Photizo Properties.`
      : "Explore verified properties in Lagos and across Nigeria with Photizo Properties.",
    openGraph: property
      ? {
          type: "website",
          title: `${property.name} | Photizo Properties`,
          description: `${property.name} in ${property.location}, ${property.state}. View details and payment plans.`,
          url: `/our-properties/${property.id}`,
          images: [
            {
              url: property.image,
              alt: property.imageAlt,
            },
          ],
        }
      : undefined,
    twitter: property
      ? {
          card: "summary_large_image",
          title: `${property.name} | Photizo Properties`,
          description: `${property.name} in ${property.location}, ${property.state}. View details and payment plans.`,
          images: [property.image],
        }
      : undefined,
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = featuredProperties.find((p) => p.id === id);

  if (!property) notFound();

  return (
    <>
      <Gallery property={property} />
      <Features property={property} />
      <ScheduleInspection />
      <LocationMap property={property} />
      <Faq property={property} />
      <PaymentPlans property={property} />
    </>
  );
}
