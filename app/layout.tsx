import "./globals.css";

import Footer from "@/components/Footer";
import Background from "@/components/Background";
import HoxxesAIWidget from "@/components/HoxxesAIWidget";
import CookieConsent from "@/components/CookieConsent";
import OfferBadge from "@/components/offers/OfferBadge";

import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://hoxxes.com"),

  title: {
    default: "HOXXES | Restaurant & Retail Operating System",
    template: "%s | HOXXES",
  },

  description:
    "HOXXES is a Restaurant & Retail Operating System combining POS, QR Ordering, Online Ordering, Kitchen Display Systems, Self-Service Kiosks, inventory management and analytics in one unified platform.",

  applicationName: "HOXXES",

  authors: [
    {
      name: "HOXXES",
      url: "https://hoxxes.com",
    },
  ],

  creator: "HOXXES",
  publisher: "HOXXES",

  openGraph: {
    title: "HOXXES | Restaurant & Retail Operating System",
    description:
      "One unified platform for restaurant and retail operations — POS, QR Ordering, Online Ordering, KDS, Self-Service Kiosks, inventory and analytics.",
    siteName: "HOXXES",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HOXXES Restaurant & Retail Operating System",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HOXXES | Restaurant & Retail Operating System",
    description:
      "One unified platform for restaurant and retail operations — POS, QR Ordering, KDS, Self-Service Kiosks, inventory and analytics.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased selection:bg-emerald-200/50">

        {/* Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Background />
        </div>

        {/* Page */}
        <div className="flex min-h-screen flex-col">
          <main className="flex-1 w-full relative z-10">
            {children}
          </main>

          <Footer />
        </div>

        {/* Floating UI */}
        <div className="relative z-50">
          <HoxxesAIWidget />
        </div>

        <CookieConsent />
        <OfferBadge />

        {/* Analytics */}
        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}