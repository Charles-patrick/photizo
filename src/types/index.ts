export interface HeroSlide {
  id: string;
  heading: React.ReactNode;
  highlightWords?: string[];
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  imageAlt: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface InvestmentReason {
  id: string;
  icon: "trending-up" | "handshake" | "map-pin";
  title: string;
  description: string;
}

export interface PropertyFeature {
  icon: "map-pin" | "ruler" | "shield-check" | "droplet" | "route" | "zap";
  label: string;
}

export interface PaymentPlan {
  title: string;
  description: string;
  image?: string;
  bullets?: string[];
}

export interface Property {
  id: string;
  name: string;
  location: string;
  state: string;
  type: string;
  price?: string;
  priceValue: number;
  image: string;
  imageAlt: string;
  gallery?: string[];
  description?: string;
  features?: PropertyFeature[];
  paymentPlans?: PaymentPlan[];
  mapEmbedSrc?: string;
  amenities?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
