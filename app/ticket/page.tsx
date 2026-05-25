"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function TiketaPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 overflow-hidden">

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="relative w-full h-[calc(100vh-80px)]">

        {/* LOADING */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-sm text-slate-500 animate-pulse">
              Loading Ticket System...
            </div>
          </div>
        )}

        <iframe
          src="https://hoxxes.app/tiketa/"
          className="w-full h-full border-0 bg-transparent"
          style={{ isolation: "isolate" }}
          onLoad={() => setLoading(false)}
        />
      </main>

    </div>
  );
}