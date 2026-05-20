"use client";

import Link from "next/link";
import Header from "@/components/Header";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-sm text-slate-500 bg-white relative z-10">
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

      {/* HEADER (force above iframe) */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 relative w-full overflow-hidden">
        <iframe
          src="https://hoxxes.app/tiketa/"
          className="absolute inset-0 w-full h-full border-0"
        />
      </main>

      {/* FOOTER */}
      <div className="relative z-10 bg-white">
        <Footer />
      </div>

    </div>
  );
}