"use client";

import Header from "@/components/Header";
import Link from "next/link";


export default function ApkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HEADER */}
      <div className="relative z-[9999]">
        <Header />
      </div>

      {/* MAIN */}
      <main className="flex-1 w-full">
        <div className="w-full h-[calc(100vh-80px)]">
          <iframe
            src="https://hoxxes.app/"
            className="w-full h-full border-0"
          />
        </div>
      </main>

  
    </div>
  );
}