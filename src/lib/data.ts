import type {
  FaqItem,
  InvestmentReason,
  NavLink,
  PaymentPlan,
  Property,
  PropertyFeature,
  Testimonial,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Properties", href: "/our-properties" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Contact Us", href: "/contact-us" },
];

export const heroSlides = [
  {
    id: "slide-1",
    image: "/hero-1.jpg",
    headingParts: [
      { text: "Looking to " },
      { text: "Invest", highlight: true },
      { text: " in " },
      { text: "Prime Property", highlight: true },
      { text: "?" },
    ],
    subtext:
      "Photizo Properties Ltd is a real estate investment company focused on land acquisition, estate development, and allocating serviced plots within planned gated communities.",
    ctaLabel: "Book an Inspection",
    ctaHref: "/contact-us",
    gradientFrom: "from-charcoal-900",
    gradientTo: "to-olive-700",
  },
  {
    id: "slide-2",
    image: "/hero-2.jpg",
    headingParts: [
      { text: "Generate " },
      { text: "Passive Income", highlight: true },
      { text: " through Real Estate Investing" },
    ],
    subtext: "Grow passive income with secure real estate investments.",
    ctaLabel: "Book an Inspection",
    ctaHref: "/contact-us",
    gradientFrom: "from-olive-900",
    gradientTo: "to-teal-700",
  },
  {
    id: "slide-3",
    image: "/hero-3.jpg",
    headingParts: [
      { text: "The Stock Market may crash, but your " },
      { text: "Land", highlight: true },
      { text: " won't." },
    ],
    subtext:
      "Secure your future with verified land investments designed for lasting value and long-term growth.",
    ctaLabel: "Book an Inspection",
    ctaHref: "/contact-us",
    gradientFrom: "from-olive-800",
    gradientTo: "to-olive-500",
  },
  {
    id: "slide-4",
    image: "/hero-4.jpg",
    headingParts: [
      { text: "Don't wait to buy " },
      { text: "Land", highlight: true },
      { text: ", Buy land and wait for " },
      { text: "Development", highlight: true },
    ],
    subtext:
      "Photizo Properties delivers secure land investments and thoughtfully planned estate developments across Nigeria.",
    ctaLabel: "Book an Inspection",
    ctaHref: "/contact-us",
    gradientFrom: "from-charcoal-900",
    gradientTo: "to-ember-900",
  },
];

export const investmentReasons: InvestmentReason[] = [
  {
    id: "returns",
    icon: "trending-up",
    title: "High Investment Returns",
    description:
      "Our properties are located in fast-developing areas which enhances the return on investment.",
  },
  {
    id: "affordability",
    icon: "handshake",
    title: "Affordability",
    description:
      "We're bridging Nigeria's housing gap through affordable, flexible financing options that fit our clients' growing population.",
  },
  {
    id: "locations",
    icon: "map-pin",
    title: "Strategic Locations",
    description:
      "Our estates are located near town centers, expressways and expanding neighborhoods, ensuring long-term property value.",
  },
];

// Shared defaults so every property doesn't need to repeat the same
// feature/payment-plan copy. Individual entries can still override any of
// these by passing their own `features`/`paymentPlans`/`description`.
function defaultFeatures(location: string, state: string): PropertyFeature[] {
  return [
    {
      icon: "map-pin",
      label: `${location.toUpperCase()}, ${state.toUpperCase()} STATE`,
    },
    { icon: "ruler", label: "500 SQUARE METERS" },
    { icon: "shield-check", label: "TIGHT SECURITY" },
    { icon: "droplet", label: "TREATED WATER" },
    { icon: "route", label: "GOOD ROAD NETWORK" },
    { icon: "zap", label: "24/7 ELECTRICITY" },
  ];
}

const defaultPaymentPlans: PaymentPlan[] = [
  {
    title: "Outright Plan",
    description: "One-time full payment",
    image: "/outright.png",
    bullets: [
      "Pay once and own outright",
      "Best for immediate ownership",
      "No additional charges",
      "Instant documentation",
    ],
  },
  {
    title: "6-Month Plan",
    description: "Payment spread across 6 months",
    image: "/6-months.png",
    bullets: [
      "Flexible 6-month payment",
      "Equal monthly installments",
      "Secure with first payment",
      "Documentation on completion",
    ],
  },
  {
    title: "12-Month Plan",
    description: "Payment spread across 12 months",
    image: "/12-months.png",
    bullets: [
      "Flexible 12-month payment",
      "Equal monthly installments",
      "Secure with first payment",
      "Documentation on completion",
    ],
  },
];

function defaultDescription(name: string): string {
  const shortName = name.split(",")[0];
  return `Did you know you can have a rental value of ₦400,000 at an increasing speed yearly? After you've lived in a house completely made of bricks, you won't want to live anywhere else — it gives you the feeling of comfort, safety, and it's eco-friendly. ${shortName} is a premium ultra-modern building that brings your home to life, designed with you and your family in mind, with state-of-the-art amenities such as 24hrs power supply, security, good road network, and internet access, and more.`;
}

// Amenity tags shown per property (distinct from the infrastructure
// "features" above) — defaulted by property type so existing entries don't
// need to be touched individually.
function defaultAmenities(type: string): string[] {
  const byType: Record<string, string[]> = {
    Lands: ["Fenced Perimeter", "Survey Plan", "C of O Documentation"],
    Duplex: [
      "Swimming Pool",
      "24/7 Security",
      "Fitted Kitchen",
      "Ample Parking",
    ],
    Bungalow: ["24/7 Security", "Borehole Water", "Ample Parking"],
    Terrace: ["24/7 Security", "Estate Fencing", "Shared Amenities"],
  };
  return byType[type] ?? ["24/7 Security"];
}

export const featuredProperties: Property[] = [
  {
    id: "oasis-garden-1",
    name: "Oasis Garden Phase 1, Poka, Epe.",
    location: "Poka, Epe",
    state: "Lagos",
    type: "Lands",
    priceValue: 8500000,
    price: "₦8,500,000",
    image: "/property-1.jpg",
    imageAlt: "Bungalow surrounded by trees at Oasis Garden Phase 1",
    gallery: ["/property-1.jpg", "/property-1.jpg", "/property-1.jpg"],
  },
  {
    id: "dbricks-court-1",
    name: "D'Bricks Court, Epe",
    location: "Epe",
    state: "Lagos",
    type: "Duplex",
    priceValue: 25725000,
    price: "₦25,725,000",
    image: "/property-2.jpg",
    imageAlt: "Modern duplex with private pool at D'Bricks Court",
    gallery: ["/property-2.jpg", "/property-2.jpg", "/property-2.jpg"],
  },
  {
    id: "dbricks-court-2",
    name: "D'Bricks Court, Epe",
    location: "Epe",
    state: "Lagos",
    type: "Duplex",
    priceValue: 25725000,
    price: "₦25,725,000",
    image: "/property-3.jpg",
    imageAlt: "Furnished dining area inside a D'Bricks Court home",
    gallery: ["/property-3.jpg", "/property-3.jpg", "/property-3.jpg"],
  },
  {
    id: "adunni-terraces",
    name: "Adunni Terraces, Lekki Scheme 2",
    location: "Lekki Scheme 2",
    state: "Lagos",
    type: "Terrace",
    priceValue: 18400000,
    price: "₦18,400,000",
    image: "/property-4.jpg",
    imageAlt: "Row of terrace houses at Adunni Terraces",
    gallery: ["/property-4.jpg", "/property-4.jpg", "/property-4.jpg"],
  },
  {
    id: "oasis-garden-2",
    name: "Oasis Garden Phase 1, Epe.",
    location: "Epe",
    state: "Lagos",
    type: "Bungalow",
    priceValue: 12900000,
    price: "₦12,900,000",
    image: "/property-5.jpg",
    imageAlt: "Duplex exterior view at Oasis Garden Phase 1",
    gallery: ["/property-5.jpg", "/property-5.jpg", "/property-5.jpg"],
  },
  {
    id: "haven-city",
    name: "Haven City Phase 3, Odo-Agboju",
    location: "Odo-Agboju",
    state: "Lagos",
    type: "Lands",
    priceValue: 9500000,
    price: "₦9,500,000",
    image: "/property-6.jpg",
    imageAlt: "Aerial view of serviced land plots at Haven City",
    gallery: ["/property-6.jpg", "/property-6.jpg", "/property-6.jpg"],
  },
  {
    id: "pearl-residences",
    name: "Pearl Residences, Ajah",
    location: "Ajah",
    state: "Lagos",
    type: "Duplex",
    priceValue: 32000000,
    price: "₦32,000,000",
    image: "/property-1.jpg",
    imageAlt: "Contemporary duplex with landscaped front yard",
    gallery: ["/property-1.jpg", "/property-1.jpg", "/property-1.jpg"],
  },
  {
    id: "golden-view-estate",
    name: "Golden View Estate, Ibeju-Lekki",
    location: "Ibeju-Lekki",
    state: "Lagos",
    type: "Lands",
    priceValue: 5200000,
    price: "₦5,200,000",
    image: "/property-2.jpg",
    imageAlt: "Cleared serviced plots at Golden View Estate",
    gallery: ["/property-2.jpg", "/property-2.jpg", "/property-2.jpg"],
  },
  {
    id: "crestwood-bungalows",
    name: "Crestwood Bungalows, Sangotedo",
    location: "Sangotedo",
    state: "Lagos",
    type: "Bungalow",
    priceValue: 15750000,
    price: "₦15,750,000",
    image: "/property-3.jpg",
    imageAlt: "Row of finished bungalows at Crestwood",
    gallery: ["/property-3.jpg", "/property-3.jpg", "/property-3.jpg"],
  },
  {
    id: "maple-court-abuja",
    name: "Maple Court, Guzape",
    location: "Guzape",
    state: "Abuja (FCT)",
    type: "Duplex",
    priceValue: 45000000,
    price: "₦45,000,000",
    image: "/property-4.jpg",
    imageAlt: "Luxury duplex with driveway in Guzape, Abuja",
    gallery: ["/property-4.jpg", "/property-4.jpg", "/property-4.jpg"],
  },
];

export const propertyTypes = Array.from(
  new Set(featuredProperties.map((property) => property.type)),
);

export const propertyStates = Array.from(
  new Set(featuredProperties.map((property) => property.state)),
);

export const priceRanges = [
  { label: "All Prices", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "Under ₦10m", min: 0, max: 10_000_000 },
  { label: "₦10m – ₦25m", min: 10_000_000, max: 25_000_000 },
  { label: "Above ₦25m", min: 25_000_000, max: Number.POSITIVE_INFINITY },
];

export const PROPERTIES_PER_PAGE = 6;

// Fill in the shared description / features / payment plans for every
// property that didn't specify its own — keeps the array above readable
// while every property still gets full detail-page content.
featuredProperties.forEach((property) => {
  property.description ??= defaultDescription(property.name);
  property.features ??= defaultFeatures(property.location, property.state);
  property.paymentPlans ??= defaultPaymentPlans;
  property.mapEmbedSrc ??= `https://www.google.com/maps?q=${encodeURIComponent(
    `${property.location}, ${property.state}, Nigeria`,
  )}&output=embed`;
  property.amenities ??= defaultAmenities(property.type);
});

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "You can never go wrong investing in real estate through Photizo Properties Ltd. With quick allocation of properties and swift documentation process. Just the best",
    name: "Fortune Vieyra",
    image: "/testimonial-1.jpg",
  },
  {
    id: "t2",
    quote:
      "You can never go wrong investing in real estate through Photizo Properties Ltd. With quick allocation of properties and swift documentation process. Just the best",
    name: "Fortune Vieyra",
    image: "/testimonial-1.jpg",
  },
  {
    id: "t3",
    quote:
      "You can never go wrong investing in real estate through Photizo Properties Ltd. With quick allocation of properties and swift documentation process. Just the best",
    name: "Fortune Vieyra",
    image: "/testimonial-1.jpg",
  },
  {
    id: "t4",
    quote:
      "You can never go wrong investing in real estate through Photizo Properties Ltd. With quick allocation of properties and swift documentation process. Just the best",
    name: "Fortune Vieyra",
    image: "/testimonial-1.jpg",
  },
  {
    id: "t5",
    quote:
      "You can never go wrong investing in real estate through Photizo Properties Ltd. With quick allocation of properties and swift documentation process. Just the best",
    name: "Fortune Vieyra",
    image: "/testimonial-1.jpg",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Are your lands verified and legally documented?",
    answer:
      "Yes. All our properties come with verified documentation and undergo thorough due diligence to ensure secure ownership. We are committed to providing our clients with genuine land investments and a transparent purchasing process.",
  },
  {
    id: "faq-2",
    question: "Can I pay for land in installments?",
    answer:
      "Yes, we offer flexible installment plans on select properties so you can spread payments over a period that works for you. Speak with our sales team to see the plans available on a property you're interested in.",
  },
  {
    id: "faq-3",
    question: "How do I book a site inspection?",
    answer:
      'You can book a site inspection directly from any property page, through the "Book an Inspection" link in the footer, or by contacting our team via phone or email — we\'ll schedule a convenient time to tour the property with you.',
  },
  {
    id: "faq-4",
    question: "Where are your estates located?",
    answer:
      "Our estates are located across fast-developing areas in and around Lagos, including Epe, Lekki and surrounding corridors, with more locations added as we expand.",
  },
  {
    id: "faq-5",
    question: "What documents will I receive after purchase?",
    answer:
      "After purchase you'll receive a contract of sale, a survey plan, and an allocation letter, with title documentation processed in line with the estate's registration status.",
  },
];
export const aboutHero = {
  image: "/about-us-hero.jpg",
  imageAlt: "about-us",
  heading: "Get to Know Photizo",
  highlightWord: "Photizo",
};

export const aboutIntro = {
  heading:
    "A Nigerian real estate company established with a strong commitment to integrity, professionalism, and service excellence.",
  paragraphs: [
    "The brand was originally positioned to address housing accessibility by providing affordable property solutions within Nigeria's fast-growing urban landscape. Through years of experience, market exposure, and client engagement, Photizo evolved beyond affordability into a deeper understanding of property as an asset class, a lifestyle choice, and a legacy-building tool.",
    "Today, Photizo operates with a refined focus, delivering premium, end-to-end real estate solutions for clients who demand quality, discretion, and strategic value.",
  ],
};

export const aboutFeatureRows = [
  {
    id: "mission",
    label: "Our Mission",
    description:
      "To provide fully tailored real estate solutions with excellence at every stage, from advisory and acquisition to development and investment while upholding the highest standards of professionalism, trust, and client satisfaction.",
    image: "/mission.jpg",
    imageAlt: "Mission",
    imagePosition: "left" as const,
  },
  {
    id: "vision",
    label: "Our Vision",
    description:
      "To become a world-class, end-to-end premium real estate brand trusted for delivering exceptional property experiences, strategic investments, and enduring value across the real estate market.",
    image: "/vision.jpg",
    imageAlt: "Vision",
    imagePosition: "right" as const,
  },
  {
    id: "promise",
    label: "Our Promise",
    description:
      "Photizo promises clarity in complexity, confidence in decision-making, and excellence in execution. Engagement is guided by commitment to quality, transparency, and long-term value, ensuring every property decision feels informed, secure, and rewarding.",
    image: "/promise.jpg",
    imageAlt: "Promise",
    imagePosition: "left" as const,
  },
];

export const coreValues = [
  {
    id: "excellence",
    icon: "award" as const,
    title: "Excellence",
    description:
      "We aim for the highest standard in every delivery, process, and partnership. Excellence is our baseline, not our exception.",
  },
  {
    id: "professionalism",
    icon: "briefcase" as const,
    title: "Professionalism",
    description:
      "Every interaction reflects discipline, expertise, and respect. We conduct business with clarity, accountability, and integrity in every deal.",
  },
  {
    id: "trust",
    icon: "shield-check" as const,
    title: "Trust",
    description:
      "Trust is earned through consistency and transparency. It's the foundation of every relationship we build, and it's never taken for granted.",
  },
];

export const personalityAttributes = [
  {
    id: "refined",
    icon: "smile" as const,
    title: "Refined",
    description:
      "Calm, considered, and thoughtful — we take our time to get things right.",
  },
  {
    id: "assured",
    icon: "sun" as const,
    title: "Assured",
    description:
      "Knowledgeable without arrogance — confident because we do the work.",
  },
  {
    id: "discerning",
    icon: "list-checks" as const,
    title: "Discerning",
    description:
      "Detail-first and quality-minded — we don't cut corners, ever.",
  },
];

export const teamMembers = [
  {
    id: "team-1",
    name: "Nneka Uban",
    role: "Admin/HR Manager",
    image: "/team-one.png",
  },
  {
    id: "team-2",
    name: "Dr. Patrick Oriyomi",
    role: "Chairman/CEO",
    image: "/team-two.png",
  },
  {
    id: "team-3",
    name: "Nneka Uban",
    role: "Admin/HR Manager",
    image: "/team-three.png",
  },
  {
    id: "team-4",
    name: "Daramsimi Sunday",
    role: "Creative Director",
    image: "/team-three.png",
  },
  {
    id: "team-5",
    name: "Rachael Okoli",
    role: "Sales & Marketing",
    image: "/team-two.png",
  },
  {
    id: "team-6",
    name: "Daramsimi Sunday",
    role: "Creative Director",
    image: "/team-one.png",
  },
];

export const aboutClosingStatement = {
  image: "/about-explore.jpg",
  imageAlt: "City skyline at dusk",
  quote:
    "Photizo Properties Limited is a premium, end-to-end real estate brand delivering tailored property solutions for discerning clients who value trust, excellence, and long-term investment value.",
};

export const contactUsHero = {
  image: "/contact-us-hero.jpg",
  imageAlt: "contact-us",
  preheader: "HAVE INQUIRIES?",
  heading: "SEND US A MESSAGE",
};

export const contactUsInfo = {
  heading: "We would love to hear from you.",
  phones: ["+234 915 090 0000", "+234 915 090 0000"],
  email: "info@photizoproperties.com",
  hours: ["Mon – Fri : 8am – 5pm", "Sat : 9am – 2pm"],
  address:
    "Photizo Properties Limited 27B, Chevron Alternative Drive, Lekki, Lagos",
  // Free Google Maps embed URL — no API key or package needed. Swap the
  // query in the URL for the exact address/coordinates once confirmed.
  mapEmbedSrc:
    "https://www.google.com/maps?q=27B+Chevron+Alternative+Drive+Lekki+Lagos&output=embed",
};

export const ourPropertiesHero = {
  image: "/properties-hero.jpg",
  imageAlt: "properties",
  preheader: "EXPLORE OUR",
  heading: "PROPERTIES",
};

export const newsroomHero = {
  image: "/newsroom-hero.jpg",
  imageAlt: "newsroom",
  preheader: "OUR",
  heading: "NEWSROOOM",
};

export interface DashboardNavLink {
  label: string;
  href: string;
  icon:
    | "grid"
    | "home"
    | "calendar"
    | "bookmark"
    | "receipt"
    | "bell"
    | "help"
    | "logout";
}

export const dashboardNavLinks: DashboardNavLink[] = [
  { label: "Dashboard", href: "/dashboard/customer", icon: "grid" },
  {
    label: "Browse Properties",
    href: "/dashboard/customer/browse-properties",
    icon: "home",
  },
  {
    label: "My Inspections",
    href: "/dashboard/customer/my-inspections",
    icon: "calendar",
  },
  {
    label: "Saved Properties",
    href: "/dashboard/customer/saved-properties",
    icon: "bookmark",
  },
  {
    label: "Transactions",
    href: "/dashboard/customer/transactions",
    icon: "receipt",
  },
  {
    label: "Notifications",
    href: "/dashboard/customer/notifications",
    icon: "bell",
  },
  { label: "Support", href: "/dashboard/customer/support", icon: "help" },
];

export const dashboardUser = {
  firstName: "Patrick",
  lastName: "O.",
  kycStatus: "verified" as "verified" | "failed" | "processing",
};

export const dashboardStats = [
  {
    id: "inspections",
    label: "Upcoming Inspections",
    value: 2,
    color: "bg-[#5F8A50]",
    icon: "calendar" as const,
  },
  {
    id: "transactions",
    label: "Transactions",
    value: 3,
    color: "bg-[#076E75]",
    icon: "receipt" as const,
  },
  {
    id: "saved",
    label: "Saved Properties",
    value: 14,
    color: "bg-[#C24507]",
    icon: "bookmark" as const,
  },
];

export interface Inspection {
  id: string;
  propertyName: string;
  location: string;
  date: string;
  time: string;
  status: "Upcoming" | "Cancelled" | "Completed";
  image: string;
  // How many of the 4 pipeline stages (Scheduled, Confirmed, In Progress,
  // Completed) have been reached, and the timestamp shown under each
  // reached stage in the "Inspections Status" tracker.
  completedStages: number;
  stageTimestamps: (string | null)[];
}

export const myInspections: Inspection[] = [
  {
    id: "insp-1",
    propertyName: "Adunni Terraces",
    location: "Lekki Peninsula Scheme 2, Lagos State",
    date: "Sat, 18th July 2026",
    time: "3:00 PM",
    status: "Upcoming",
    image: "/property-1.jpg",
    completedStages: 2,
    stageTimestamps: [
      "2 Aug 2026 · 10:15 AM",
      "2 Aug 2026 · 10:15 AM",
      null,
      null,
    ],
  },
  {
    id: "insp-2",
    propertyName: "Oasis Court",
    location: "Epe, Lagos State",
    date: "Sat, 18th July 2026",
    time: "3:00 PM",
    status: "Completed",
    image: "/property-2.jpg",
    completedStages: 4,
    stageTimestamps: [
      "1 Aug 2026 · 9:00 AM",
      "1 Aug 2026 · 9:20 AM",
      "18 Jul 2026 · 3:00 PM",
      "18 Jul 2026 · 3:40 PM",
    ],
  },
  {
    id: "insp-3",
    propertyName: "Haven City Phase 3",
    location: "Odo-Agboju along Epe and Ijebu Ode Expressway",
    date: "Sat, 18th July 2026",
    time: "3:00 PM",
    status: "Cancelled",
    image: "/property-3.jpg",
    completedStages: 1,
    stageTimestamps: ["30 Jul 2026 · 11:00 AM", null, null, null],
  },
  {
    id: "insp-4",
    propertyName: "Oasis Court",
    location: "Epe, Lagos State",
    date: "Sat, 18th July 2026",
    time: "3:00 PM",
    status: "Completed",
    image: "/property-4.jpg",
    completedStages: 4,
    stageTimestamps: [
      "29 Jul 2026 · 9:00 AM",
      "29 Jul 2026 · 9:20 AM",
      "18 Jul 2026 · 3:00 PM",
      "18 Jul 2026 · 3:35 PM",
    ],
  },
  {
    id: "insp-5",
    propertyName: "D'Bricks Court",
    location: "Epe, Lagos State",
    date: "Sat, 18th July 2026",
    time: "3:00 PM",
    status: "Upcoming",
    image: "/property-5.jpg",
    completedStages: 2,
    stageTimestamps: [
      "3 Aug 2026 · 2:00 PM",
      "3 Aug 2026 · 2:10 PM",
      null,
      null,
    ],
  },
  {
    id: "insp-6",
    propertyName: "D'Bricks Court",
    location: "Epe, Lagos State",
    date: "Sat, 18th July 2026",
    time: "3:00 PM",
    status: "Completed",
    image: "/property-6.jpg",
    completedStages: 4,
    stageTimestamps: [
      "28 Jul 2026 · 1:00 PM",
      "28 Jul 2026 · 1:15 PM",
      "18 Jul 2026 · 3:00 PM",
      "18 Jul 2026 · 3:45 PM",
    ],
  },
  {
    id: "insp-7",
    propertyName: "Adunni Terraces",
    location: "Lekki Peninsula Scheme 2, Lagos State",
    date: "Sat, 18th July 2026",
    time: "3:00 PM",
    status: "Upcoming",
    image: "/property-1.jpg",
    completedStages: 2,
    stageTimestamps: [
      "4 Aug 2026 · 10:00 AM",
      "4 Aug 2026 · 10:05 AM",
      null,
      null,
    ],
  },
  {
    id: "insp-8",
    propertyName: "Golden View Estate",
    location: "Ibeju-Lekki, Lagos State",
    date: "Sat, 18th July 2026",
    time: "3:00 PM",
    status: "Completed",
    image: "/property-2.jpg",
    completedStages: 4,
    stageTimestamps: [
      "27 Jul 2026 · 8:00 AM",
      "27 Jul 2026 · 8:10 AM",
      "18 Jul 2026 · 3:00 PM",
      "18 Jul 2026 · 3:30 PM",
    ],
  },
  {
    id: "insp-9",
    propertyName: "Crestwood Bungalows",
    location: "Sangotedo, Lagos State",
    date: "Sat, 18th July 2026",
    time: "3:00 PM",
    status: "Cancelled",
    image: "/property-3.jpg",
    completedStages: 1,
    stageTimestamps: ["25 Jul 2026 · 4:00 PM", null, null, null],
  },
];

export interface DashboardNotification {
  id: string;
  icon:
    | "calendar"
    | "bookmark"
    | "shield-check"
    | "bell"
    | "credit-card"
    | "x-circle";
  title: string;
  description: string;
  time: string;
}

export const dashboardNotifications: DashboardNotification[] = [
  {
    id: "notif-1",
    icon: "bookmark",
    title: "Property Saved",
    description: "D'Bricks Court has been added to your list.",
    time: "1 day ago",
  },
  {
    id: "notif-2",
    icon: "calendar",
    title: "Inspection Reminder",
    description: "Your inspection at D'Bricks court is tomorrow at 2:00 PM.",
    time: "2 days ago",
  },
  {
    id: "notif-3",
    icon: "shield-check",
    title: "KYC Verified",
    description:
      "Hooray!! Your KYC verification has successfully been completed.",
    time: "2 days ago",
  },
  {
    id: "notif-4",
    icon: "credit-card",
    title: "Payment due soon",
    description:
      "Your next payment on D'Brick Court is due on the 10th of April, 2026.",
    time: "3 days ago",
  },
  {
    id: "notif-5",
    icon: "x-circle",
    title: "Inspection Cancelled",
    description: "Your inspection at D'Bricks court has been cancelled.",
    time: "5 days ago",
  },
  {
    id: "notif-6",
    icon: "bell",
    title: "Welcome to Photizo",
    description:
      "Thank you for joining Photizo. Let's help you find your perfect property.",
    time: "1 week ago",
  },
];

// Real property ids (from `featuredProperties`) that this demo user has
// saved. Both the dashboard home widget and the full Saved Properties page
// derive their card lists from this + featuredProperties, so every saved
// card correctly links through to /dashboard/browse-properties/[id] —
// there's no separate, disconnected "saved property" record anymore.
export const savedPropertyIds = [
  "dbricks-court-1",
  "adunni-terraces",
  "dbricks-court-2",
  "haven-city",
  "oasis-garden-1",
];

// ---------------------------------------------------------------------
// Transactions
// ---------------------------------------------------------------------

export interface Transaction {
  id: string;
  propertyId: string;
  paymentPlan: string;
  startDate: string;
  percentPaid: number;
  status: "Processing" | "Completed";
  amountPaid: string;
  amountLeft?: string;
  nextPaymentAmount?: string;
  nextPaymentDate?: string;
}

export const transactions: Transaction[] = [
  {
    id: "txn-1",
    propertyId: "dbricks-court-1",
    paymentPlan: "12 Month Plan",
    startDate: "15 Aug 2026",
    percentPaid: 75,
    status: "Processing",
    amountPaid: "₦19,293,750 paid",
    amountLeft: "₦6,431,250 left",
    nextPaymentAmount: "₦5,725,000",
    nextPaymentDate: "15 Aug 2026",
  },
  {
    id: "txn-2",
    propertyId: "dbricks-court-1",
    paymentPlan: "Outright",
    startDate: "15 Aug 2026",
    percentPaid: 100,
    status: "Completed",
    amountPaid: "₦25,725,000 paid",
  },
  {
    id: "txn-3",
    propertyId: "dbricks-court-1",
    paymentPlan: "6 Month Plan",
    startDate: "15 Aug 2026",
    percentPaid: 25,
    status: "Processing",
    amountPaid: "₦6,431,250 paid",
    amountLeft: "₦19,293,750 left",
    nextPaymentAmount: "₦15,725,000",
    nextPaymentDate: "15 Aug 2026",
  },
];

//must come after foreach
export const amenitiesList = Array.from(
  new Set(featuredProperties.flatMap((property) => property.amenities ?? [])),
).sort();
