import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kalice = localFont({
  src: [
    {
      path: "./fonts/Kalice-Trial-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Kalice-Trial-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Kalice-Trial-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kalice",
  display: "swap",
});

export const metadata: Metadata = { title: "Photizo Properties" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kalice.variable}>
      <body>{children}</body>
    </html>
  );
}

