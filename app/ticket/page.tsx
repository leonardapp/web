"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-sm text-slate-500 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} HOXXES</p>

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
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HEADER */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* MAIN */}
      <main className="flex-1 w-full relative">

        {/* SKELETON / LOADING OVERLAY */}
        {loading && (
          <div className="absolute inset-0 z-20 bg-white">
            <div className="h-full w-full flex flex-col items-center justify-center gap-4">
              
              {/* animated skeleton */}
              <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-black animate-spin" />

              <div className="space-y-2 text-center">
                <div className="h-3 w-40 bg-slate-200 rounded animate-pulse mx-auto" />
                <div className="h-3 w-28 bg-slate-100 rounded animate-pulse mx-auto" />
              </div>

              <p className="text-sm text-slate-400">
                Loading system...
              </p>
            </div>
          </div>
        )}

        {/* IFRAME */}
        <iframe
          src="https://hoxxes.app/tiketa/"
          className="w-full h-[calc(100vh-80px)] border-0"
          onLoad={() => setLoading(false)}
        />

      </main>

      {/* FOOTER */}
      <div className="relative z-10 bg-white">
        <Footer />
      </div>

    </div>
  );
}