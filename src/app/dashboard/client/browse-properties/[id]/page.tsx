import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredProperties } from "@/lib/data";
import Detail from "@/components/sections/dashboard-property/Detail";

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
      ? `${property.name} | Photizo Dashboard`
      : "Property Not Found | Photizo Dashboard",
    description: property
      ? `Review ${property.name} in ${property.location}, ${property.state} and its available details and payment plans.`
      : "Browse available properties in the Photizo client portal.",
  };
}

export default async function DashboardPropertyDetailPage({
  params,
}: PageProps) {
  const { id } = await params;
  const property = featuredProperties.find((p) => p.id === id);
  if (!property) notFound();

  return <Detail property={property} />;
}
