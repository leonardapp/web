"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Logo size="md" />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-500">
          <Link href="/software" className="hover:text-black transition">Software</Link>
          <Link href="/hardware" className="hover:text-black transition">Hardware</Link>
          <Link href="/support" className="hover:text-black transition">Support</Link>
          <Link href="/download" className="hover:text-black transition">Download</Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          <Link
            href="/contact-sales"
            className="px-4 py-2 bg-black text-white rounded-full text-sm"
          >
            Contact Sales
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[999] md:hidden">

          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div className="absolute right-0 top-0 h-full w-[80%] bg-white p-6 flex flex-col gap-6 shadow-xl">

            <button
              onClick={() => setOpen(false)}
              className="self-end text-2xl"
            >
              ✕
            </button>

            <Link onClick={() => setOpen(false)} href="/software">Software</Link>
            <Link onClick={() => setOpen(false)} href="/hardware">Hardware</Link>
            <Link onClick={() => setOpen(false)} href="/support">Support</Link>
            <Link onClick={() => setOpen(false)} href="/download">Download</Link>
            <Link onClick={() => setOpen(false)} href="/contact-sales">Contact Sales</Link>

          </div>
        </div>
      )}
    </header>
  );
}