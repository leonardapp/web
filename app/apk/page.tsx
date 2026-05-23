"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { spacing, text, layout } from "@/app/design-system";

export default function ApkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">

      {/* HEADER */}
      <div className="relative z-[9999]">
        <Header />
      </div>

      {/* MAIN */}
      <main className="flex-1 w-full">
        <div className="w-full h-[calc(100vh-80px)]">
          <iframe
            src="https://hoxxes.app/"
            className="w-full h-full border-0 bg-transparent"
          />
        </div>
      </main>

  
    </div>
  );
}