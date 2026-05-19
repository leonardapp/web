"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/software", label: "Software" },
    { href: "/hardware", label: "Hardware" },
    { href: "/about-us", label: "About Us" },
    { href: "/support", label: "Support" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center">
          <Logo size="md" />
        </Link>

        {/* CENTER: DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: ACTION BUTTONS */}
        <div className="flex items-center gap-3">

          <Link
            href="/download"
            className="hidden md:block text-sm text-slate-600 hover:text-black transition"
          >
            Download
          </Link>

          <Link
            href="https://pos.hoxxes.com/#/login"
            className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            POS
          </Link>

          <Link
            href="https://backoffice.hoxxes.com/#/login"
            className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-slate-800 transition"
          >
            Backoffice
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl ml-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ✅ BACKDROP / OVERLAY (OPTION 1) */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden"
            />

            {/* MOBILE MENU */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-[80%] bg-white shadow-2xl z-50 p-6 flex flex-col gap-6 md:hidden"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="self-end text-2xl"
              >
                ✕
              </button>

              {/* LINKS */}
              <div className="flex flex-col gap-5 text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-black text-slate-700"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/download"
                  onClick={() => setOpen(false)}
                  className="text-slate-600"
                >
                  Download Center
                </Link>
              </div>

              {/* ACTIONS */}
              <div className="mt-auto flex flex-col gap-3">
                <Link
                  href="https://pos.hoxxes.com/#/login"
                  className="px-4 py-3 border rounded-full text-center"
                >
                  POS Login
                </Link>

                <Link
                  href="https://backoffice.hoxxes.com/#/login"
                  className="px-4 py-3 bg-black text-white rounded-full text-center"
                >
                  Backoffice
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}