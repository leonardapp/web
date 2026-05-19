"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import Header from "@/components/Header";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-sm text-slate-500">
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

      {/* HEADER */}
      <Header />

      {/* IFRAME CONTENT */}
      <div className="flex-1 w-full">
        <iframe
          src="https://hoxxes.app/tiketa/"
          className="w-full h-full min-h-[90vh] border-0"
        />
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}