import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  src: [
    {
      path: "./fonts/Cormorant_Garamond/static/CormorantGaramond-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Cormorant_Garamond/static/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Cormorant_Garamond/static/CormorantGaramond-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Cormorant_Garamond/static/CormorantGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const siteDescription =
  "Discover verified properties, flexible payment plans, and trusted real estate services with Photizo Properties in Lagos, Nigeria.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://photizoproperties.com",
  ),
  title: "Photizo Properties | Trusted Real Estate in Lagos",
  description: siteDescription,
  applicationName: "Photizo Properties",
  icons: {
    icon: "/logo-cut.png",
  },
  openGraph: {
    type: "website",
    siteName: "Photizo Properties",
    locale: "en_NG",
    title: "Photizo Properties | Trusted Real Estate in Lagos",
    description: siteDescription,
    images: [
      {
        url: "/logo-cut.png",
        alt: "Modern real estate in Lagos from Photizo Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photizo Properties | Trusted Real Estate in Lagos",
    description: siteDescription,
    images: ["/properties-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>{children}</body>
    </html>
  );
}
