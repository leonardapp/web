import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="min-h-screen overflow-x-hidden text-slate-900 antialiased selection:bg-emerald-200/50">

        {/* BACKGROUND (GLOBAL) */}
        <Background />

        {/* APP */}
        <div className="relative z-10">
          {children}
          <Footer />
        </div>

        {/* AI ROOT */}
        <div id="ai-assistant-root" />

      </body>
    </html>
  );
}