"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

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
                className="relative group transition hover:text-[#6cab12]"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#88d21a] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <Link
              href="/download"
              className="hidden md:block text-sm text-slate-600 hover:text-[#6cab12] transition"
            >
              Download Center
            </Link>

            {/* WEB POS */}
            <Link
              href="https://pos.hoxxes.com/#/login"
              className="hidden sm:block px-4 py-2 rounded-full border border-[#88d21a] text-sm font-medium text-slate-900 hover:bg-[#f5fce9] hover:border-[#6cab12] transition-all"
            >
              Web POS
            </Link>

            {/* BACK OFFICE */}
            <Link
              href="https://backoffice.hoxxes.com/#/login"
              className="hidden sm:block px-4 py-2 rounded-full bg-[#88d21a] text-[#17210c] text-sm font-semibold hover:bg-[#76b915] transition-all shadow-sm"
            >
              Back Office
            </Link>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-2xl text-[#52820f]"
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
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
                <span className="text-lg font-semibold">Menu</span>

                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl text-slate-700 hover:text-[#6cab12] hover:rotate-90 transition"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col p-6 text-lg font-medium">
                <div className="flex flex-col gap-6">
                  {navLinks
                    .filter((link) => link.label !== "Support")
                    .map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-slate-700 hover:text-[#6cab12] transition"
                      >
                        {link.label}
                      </Link>
                    ))}
                </div>

                {/* SUPPORT & DOWNLOAD */}
                <div className="my-6 border-t border-slate-200" />

                <div className="flex flex-col gap-6">
                  <Link
                    href="/support"
                    onClick={() => setOpen(false)}
                    className="text-slate-700 hover:text-[#6cab12] transition"
                  >
                    Support
                  </Link>

                  <Link
                    href="/download"
                    onClick={() => setOpen(false)}
                    className="text-slate-700 hover:text-[#6cab12] transition"
                  >
                    Download Center
                  </Link>
                </div>

                <div className="mt-6 border-t border-slate-200" />
              </div>

              {/* MOBILE ACTIONS */}
              <div className="mt-auto px-6 pt-6 pb-10 flex flex-col gap-3 border-t border-slate-200">
                <Link
                  href="https://pos.hoxxes.com/#/login"
                  className="w-full text-center py-3 border border-[#88d21a] text-slate-900 rounded-full font-medium hover:bg-[#f5fce9] hover:border-[#6cab12] transition"
                >
                  Web POS
                </Link>

                <Link
                  href="https://backoffice.hoxxes.com/#/login"
                  className="w-full text-center py-3 bg-[#88d21a] text-[#17210c] rounded-full font-semibold hover:bg-[#76b915] transition"
                >
                  Back Office
                </Link>
              </div>

              {/* SOCIAL LINKS */}
              <div className="px-6 pb-6 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/hoxxes_innovation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#6cab12] hover:text-[#52820f] transition-all duration-200"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61569182421739"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#6cab12] hover:text-[#52820f] transition-all duration-200"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}