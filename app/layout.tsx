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
    default: "HOXXES",
    template: "%s | HOXXES",
  },

  description:
    "Restaurant & Retail Operating System with POS, Self-Service Kiosks, Kitchen Display Systems, Hardware and Business Automation.",

  keywords: [
    "restaurant POS",
    "self service kiosk",
    "restaurant software",
    "kitchen display system",
    "retail software",
    "restaurant operating system",
    "program per restorant",
    "sistem POS",
    "kioske vetesherbyese",
    "program per kafene",
    "Hoxxes",
  ],

  openGraph: {
    title: "HOXXES",
    description:
      "Restaurant & Retail Operating System with POS, Self-Service Kiosks, Kitchen Display Systems and Business Automation.",
    url: "https://hoxxes.com",
    siteName: "HOXXES",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HOXXES",
    description:
      "Restaurant & Retail Operating System with POS, Self-Service Kiosks and Business Automation.",
  },

  alternates: {
    canonical: "https://hoxxes.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

        {/* Analytics (vetëm një herë!) */}
        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}