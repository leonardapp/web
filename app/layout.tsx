import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hoxxes",
    template: "%s | Hoxxes",
  },
  description: "Enterprise Restaurant & Retail Operating System",
  keywords: [
    "POS system",
    "Restaurant software",
    "Retail OS",
    "Kiosk system",
    "Hospitality platform",
  ],
  metadataBase: new URL("https://hoxxes.com"),
  openGraph: {
    title: "Hoxxes",
    description: "Enterprise Restaurant & Retail Operating System",
    url: "https://hoxxes.com",
    siteName: "Hoxxes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Prevent layout shift + better mobile scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-200/50">
        {/* GLOBAL BACKGROUND LAYER (optional future use) */}
        <div className="fixed inset-0 -z-10 bg-white" />

        {/* APP */}
        {children}

        {/* GLOBAL FOOTER */}
        <Footer />

        {/* GLOBAL AI ASSISTANT (Stripe / Intercom style placeholder) */}
        <div id="ai-assistant-root" />
      </body>
    </html>
  );
}