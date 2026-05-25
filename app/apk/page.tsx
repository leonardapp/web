"use client";

import Header from "@/components/Header";

export default function ApkPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 overflow-hidden">

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="w-full h-[calc(100vh-80px)]">
        <iframe
          src="https://hoxxes.app/"
          className="w-full h-full border-0 bg-transparent"
          style={{ isolation: "isolate" }}
        />
      </main>

    </div>
  );
}