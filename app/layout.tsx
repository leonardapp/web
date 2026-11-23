import "./globals.css";

import Footer from "@/components/Footer";
import Background from "@/components/Background";
import HoxxesAIWidget from "@/components/HoxxesAIWidget";
import CookieConsent from "@/components/CookieConsent";
import OfferBadge from "@/components/offers/OfferBadge";

import type { Metadata } from "next";
import hoxxesSchema from "@/lib/schema";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://hoxxes.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: {
    default: "HOXXES | Restaurant & Retail Operating System",
    template: "%s | HOXXES",
  },
  description:
    "HOXXES connects restaurant and retail operations through POS, QR ordering, online ordering, kitchen display systems, self-service kiosks and business management tools.",
  applicationName: "HOXXES",
  authors: [{ name: "HOXXES", url: "https://hoxxes.com" }],
  creator: "HOXXES",
  publisher: "HOXXES",
  openGraph: {
    title: "HOXXES | Restaurant & Retail Operating System",
    description:
      "One connected platform for restaurant and retail operations — POS, QR ordering, online ordering, KDS and self-service kiosks.",
    url: "https://hoxxes.com",
    siteName: "HOXXES",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HOXXES | Restaurant & Retail Operating System",
    description:
      "One connected platform for restaurant and retail operations — POS, QR ordering, online ordering, KDS and self-service kiosks.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hoxxesSchema).replace(/</g, "\\u003c"),
          }}
        />

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