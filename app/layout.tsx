import "./globals.css";

import Footer from "@/components/Footer";
import Background from "@/components/Background";
import HoxxesAIWidget from "@/components/HoxxesAIWidget";
import CookieConsent from "@/components/CookieConsent";
import OfferBadge from "@/components/offers/OfferBadge";
import hoxxesSchema from "@/lib/schema";

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
    "HOXXES is a complete Restaurant & Retail Operating System combining POS software, Android hardware, QR Ordering, Self-Service Kiosks, Kitchen Display Systems and Business Automation.",

  keywords: [
  // Brand
  "Hoxxes",
  "HOXXES restaurant software",

  // Core Product
  "restaurant POS",
  "restaurant POS system",
  "restaurant management software",
  "restaurant operating system",
  "restaurant software",
  "hospitality software",
  "restaurant automation",

  // Ordering & Customer Experience
  "QR ordering system",
  "digital menu software",
  "self ordering kiosk",
  "self service kiosk",
  "online restaurant ordering",
  "table ordering system",

  // Kitchen & Operations
  "kitchen display system",
  "KDS system",
  "kitchen management software",
  "restaurant workflow management",

  // Retail
  "retail software",
  "retail POS system",
  "inventory management software",

  // Albanian
  "program per restorant",
  "program për restorant",
  "software per restorant",
  "softuer per restorant",
  "program per kafene",
  "program per bar",
  "program per fast food",
  "program per piceri",
  "program per hotel",
  "program per gastronomi",
  "sistem POS",
  "program POS",
  "POS per restorant",
  "menu digjitale",
  "menu elektronike",
  "menu me QR code",
  "porosi me QR code",
  "porosi nga tavolina",
  "kioske vetesherbyese",
  "sistem per kuzhine",
  "menaxhim inventari",
  "menaxhim i porosive",
  "android POS terminal",
"android POS system",
"restaurant POS hardware",
"POS terminal for restaurants",
"restaurant tablets",
"self ordering kiosk hardware",
"restaurant kiosk system",
"android ordering system",
"hardware per restorant",
"pajisje per restorante",
"terminal POS per restorant",
"kase elektronike per restorant",
"tablet per porosi restoranti",
],

  openGraph: {
  title: "HOXXES | Restaurant & Retail Operating System",
  description:
    "Complete restaurant technology platform combining software, Android hardware, POS, ordering and automation.",
  url: "https://hoxxes.com",
  siteName: "HOXXES",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "HOXXES Restaurant Operating System",
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title: "HOXXES | Restaurant & Retail Operating System",
  description:
    "Complete restaurant technology platform combining software, Android hardware, POS, ordering and automation.",
},

  alternates: {
  canonical: "https://hoxxes.com",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased selection:bg-emerald-200/50">

  {/* SEO Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(hoxxesSchema),
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

        {/* Analytics (vetëm një herë!) */}
        <Analytics />
        <SpeedInsights />
        

      </body>
    </html>
  );
}