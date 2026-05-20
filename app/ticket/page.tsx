"use client";

import Link from "next/link";
import Header from "@/components/Header";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-sm text-slate-500 bg-white">
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
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* HEADER FIXED OVERLAY */}
      <div className="fixed top-0 left-0 w-full z-[99999]">
        <Header />
      </div>

      {/* PUSH CONTENT BELOW HEADER */}
      <div className="pt-[80px] flex-1 flex flex-col">
        {/* MAIN */}
        <main className="flex-1 relative z-0">
          <iframe
            src="https://hoxxes.app/tiketa/"
            className="relative z-0 w-full h-[calc(100vh-80px)] border-0"
          />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}