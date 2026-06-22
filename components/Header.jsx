"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { href: "/software", label: "Software" },
    { href: "/hardware", label: "Hardware" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about-us", label: "About Us" },
    { href: "/support", label: "Support" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
<Link href="/" className="flex items-center gap-3">
  <motion.div
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className="relative"
  >
    <div className="relative scale-110 md:scale-115">
      <Logo size="md" />
    </div>
  </motion.div>
</Link>
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">

            <Link
              href="/download"
              className="hidden md:block text-sm text-slate-600 hover:text-black transition"
            >
              Download Center
            </Link>

            {/* CTA 1 */}
            <Link
              href="https://pos.hoxxes.com/#/login"
              className="hidden sm:block px-4 py-2 rounded-full border border-slate-300 text-sm font-medium text-black hover:bg-black hover:text-white transition-all"
            >
              Web POS
            </Link>

            {/* CTA 2 */}
            <Link
              href="https://backoffice.hoxxes.com/#/login"
              className="hidden sm:block px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              Back Office
            </Link>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-2xl"
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[10000]"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[10001] flex flex-col shadow-2xl"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <span className="text-lg font-semibold">Menu</span>

                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl hover:rotate-90 transition"
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
                  className="text-slate-500 text-base pt-4 border-t"
                >
                  Download Center
                </Link>
              </div>

              {/* ACTIONS */}
              <div className="mt-auto px-6 pt-6 pb-20 flex flex-col gap-3 border-t">
                <Link
                  href="https://pos.hoxxes.com/#/login"
                  className="w-full text-center py-3 border border-slate-300 rounded-full font-medium hover:bg-black hover:text-white transition"
                >
                  Web POS
                </Link>

                <Link
                  href="https://backoffice.hoxxes.com/#/login"
                  className="w-full text-center py-3 bg-black text-white rounded-full font-medium hover:bg-slate-800 transition"
                >
                  Back Office
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}