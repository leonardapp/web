"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";


export default function TiketaPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-transparent overflow-hidden">
      
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="flex-1 relative bg-transparent">

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

  
    </div>
  );
}