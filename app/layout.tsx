import "./globals.css";

import Footer from "@/components/Footer";
import Background from "@/components/Background";
import HoxxesAIWidget from "@/components/HoxxesAIWidget";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased selection:bg-emerald-200/50">

        {/* BACKGROUND LAYER */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Background />
        </div>

        {/* APP WRAPPER */}
        <div className="flex min-h-screen flex-col">

          {/* MAIN CONTENT */}
          <main className="flex-1 w-full relative z-10">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />
        </div>

        {/* AI WIDGET (GLOBAL FLOATING) */}
        <div className="relative z-50">
          <HoxxesAIWidget />
        </div>
        {/* COOKIE CONSENT */}
        <CookieConsent />

      </body>
    </html>
  );
}