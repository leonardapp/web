"use client";

import Link from "next/link";
import Header from "@/components/Header";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-sm text-slate-500 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">

        <p>
          © {new Date().getFullYear()} HOXXES
        </p>

        <div className="flex gap-6">
          <Link href="/software" className="hover:text-black transition">
            Software
          </Link>

          <Link href="/hardware" className="hover:text-black transition">
            Hardware
          </Link>

          <Link href="/support" className="hover:text-black transition">
            Support
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default function TiketaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HEADER - forced on top */}
      <div className="relative z-[9999]">
        <Header />
      </div>

      {/* MAIN CONTENT - FIXED IFRAME LAYOUT */}
      <main className="flex-1 w-full">
        <div className="w-full h-[calc(100vh-80px)]">
          <iframe
            src="https://hoxxes.app/tiketa/"
            className="w-full h-full border-0"
          />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}