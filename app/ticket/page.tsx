"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-sm text-slate-500 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} HOXXES</p>

        <div className="flex flex-wrap justify-center gap-6">
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
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="flex-1 relative bg-slate-50">

        {/* LOADING OVERLAY */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-sm text-slate-500 animate-pulse">
              Loading Ticket System...
            </div>
          </div>
        )}

        <iframe
          src="https://hoxxes.app/tiketa/"
          title="HOXXES Ticket System"
          className="w-full h-[calc(100vh-72px)] md:h-[calc(100vh-80px)] border-0"
          onLoad={() => setLoading(false)}
        />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}