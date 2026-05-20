"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { href: "/software", label: "Software" },
    { href: "/hardware", label: "Hardware" },
    { href: "/about-us", label: "About Us" },
    { href: "/support", label: "Support" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-[9999] bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* DESKTOP NAV */}
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

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <Link
              href="/download"
              className="hidden md:block text-sm text-slate-600 hover:text-black transition"
            >
              Download
            </Link>

            <Link
              href="https://pos.hoxxes.com/#/login"
              className="hidden sm:block px-4 py-2 border border-slate-300 bg-white rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition"
            >
              POS
            </Link>

            <Link
              href="https://backoffice.hoxxes.com/#/login"
              className="hidden sm:block px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-slate-800 transition"
            >
              Backoffice
            </Link>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-3xl ml-2 text-black font-semibold"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[10000] md:hidden"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[10001] md:hidden flex flex-col shadow-2xl"
            >
              {/* MENU HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <span className="text-lg font-semibold">Menu</span>

                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6 p-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-700 hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/download"
                  onClick={() => setOpen(false)}
                  className="text-slate-500 text-base pt-2 border-t"
                >
                  Download Center
                </Link>
              </div>

              {/* ACTIONS */}
              <div className="mt-auto p-6 flex flex-col gap-3 border-t">
                <Link
                  href="https://pos.hoxxes.com/#/login"
                  className="w-full text-center py-3 border border-slate-300 rounded-full font-medium"
                >
                  POS Login
                </Link>

                <Link
                  href="https://backoffice.hoxxes.com/#/login"
                  className="w-full text-center py-3 bg-black text-white rounded-full font-medium"
                >
                  Backoffice
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}