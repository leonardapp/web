"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function TiketaPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 flex flex-col">

      {/* HEADER (NORMAL FLOW, JO FIXED) */}
      <Header />

      {/* CONTENT AREA */}
      <main className="flex-1 relative w-full">

        {/* LOADER */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-10">
            <div className="text-sm text-slate-500 animate-pulse">
              Loading Ticket System...
            </div>
          </div>
        )}
        

        {/* IFRAME WRAPPER */}
        <div className="w-full h-[calc(100vh-80px)] md:h-[calc(100vh-96px)]">
          <iframe
            src="https://hoxxes.app/tiketa/"
            className="w-full h-full border-0"
            onLoad={() => setLoading(false)}
          />
        </div>

      </main>

    </div>
  );
}