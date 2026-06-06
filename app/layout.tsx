import "./globals.css";

import Footer from "@/components/Footer";
import Background from "@/components/Background";
import HoxxesAIWidget from "@/components/HoxxesAIWidget";
import CookieConsent from "@/components/CookieConsent";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased selection:bg-emerald-200/50">

        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Background />
        </div>

        <div className="flex min-h-screen flex-col">
          <main className="flex-1 w-full relative z-10">
            {children}
          </main>

          <Footer />
        </div>

        <div className="relative z-50">
          <HoxxesAIWidget />
        </div>

        <CookieConsent />

        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}