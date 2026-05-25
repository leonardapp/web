import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden text-slate-900 antialiased selection:bg-emerald-200/50 bg-white">

        {/* BACKGROUND (fixed safe layer) */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Background />
        </div>

        {/* GLOBAL CONTAINER */}
        <div className="relative flex min-h-screen flex-col">
          
          {/* PAGE CONTENT */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* FOOTER ALWAYS AT BOTTOM */}
          <Footer />
        </div>

        <div id="ai-assistant-root" />
      </body>
    </html>
  );
}