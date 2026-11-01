
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { getCart } from "@/lib/cart";

const POS_URL = "https://pos.hoxxes.com/#/login";
const BACKOFFICE_URL = "https://backoffice.hoxxes.com/#/login";

const navLinks = [
  { href: "/software", label: "Software" },
  { href: "/hardware", label: "Hardware" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about-us", label: "About Us" },
  { href: "/support", label: "Support" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const loginRef = useRef(null);

  // ==========================================
  // SHOPPING CART SYNCHRONIZATION
  // ==========================================
  useEffect(() => {
    const syncCart = () => {
      const cart = getCart();

      const count = cart.reduce(
        (total, item) => total + Math.max(0, item.quantity),
        0
      );

      setCartCount(count);
    };

    syncCart();

    window.addEventListener("cart-updated", syncCart);
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener("cart-updated", syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  // ==========================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU OPEN
  // ==========================================
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ==========================================
  // CLOSE LOGIN DROPDOWN
  // Outside click + Escape
  // ==========================================
  useEffect(() => {
    const handlePointerDown = (event) => {
      const target = event.target;

      if (
        loginRef.current &&
        target instanceof Node &&
        !loginRef.current.contains(target)
      ) {
        setLoginOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLoginOpen(false);
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ==========================================
  // CLOSE MOBILE MENU
  // ==========================================
  const closeMenu = () => {
    setOpen(false);
  };

  // ==========================================
  // CART BUTTON
  // ==========================================
  const CartButton = () => (
    <Link
      href="/cart"
      aria-label={`Shopping cart, ${cartCount} items`}
      title="Shopping Cart"
      className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#17210c] transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 8h14l-1 12H6L5 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>

      {cartCount > 0 && (
        <span
          aria-live="polite"
          className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#88d21a] px-1 text-[10px] font-bold leading-none text-[#17210c] ring-2 ring-white"
        >
          {cartCount > 99 ? "99+" : cartCount}
        </span>
      )}
    </Link>
  );

  return (
    <>
      {/* ======================================
          HEADER
      ====================================== */}
      <header className="fixed left-0 right-0 top-0 z-[9999] border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">

          {/* LOGO */}
          <Link
            href="/"
            aria-label="HOXXES Home"
            className="flex shrink-0 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="relative"
            >
              <div className="relative scale-105 sm:scale-110">
                <Logo size="md" />
              </div>
            </motion.div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex xl:gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative whitespace-nowrap transition-colors hover:text-[#6cab12]"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#88d21a] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">

            {/* DOWNLOAD CENTER */}
            <Link
              href="/download"
              className="hidden whitespace-nowrap text-sm text-slate-600 transition hover:text-[#6cab12] xl:block"
            >
              Download Center
            </Link>

            {/* SHOPPING CART */}
            <CartButton />

            {/* REQUEST DEMO */}
            <Link
              href="/request-demo"
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#88d21a] px-3 py-2.5 text-xs font-semibold text-[#17210c] shadow-sm transition-all duration-200 hover:bg-[#76b915] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2 sm:px-5 sm:text-sm"
            >
              Request Demo
            </Link>

            {/* LOGIN DROPDOWN */}
            <div ref={loginRef} className="relative hidden md:block">
              <button
                type="button"
                onClick={() => setLoginOpen((prev) => !prev)}
                aria-haspopup="menu"
                aria-expanded={loginOpen}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 px-3.5 py-2.5 text-sm font-medium text-slate-800 transition-all hover:border-[#88d21a] hover:bg-[#f5fce9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
              >
                Log In

                <motion.svg
                  animate={{ rotate: loginOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </motion.svg>
              </button>

              {/* LOGIN MENU */}
              <AnimatePresence>
                {loginOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    role="menu"
                    aria-label="Login options"
                    className="absolute right-0 top-full z-[10002] mt-3 w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-black/10"
                  >
                    <div className="px-3 pb-2 pt-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Access your account
                      </p>
                    </div>

                    {/* WEB POS */}
                    <a
                      href={POS_URL}
                      role="menuitem"
                      onClick={() => setLoginOpen(false)}
                      className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-[#f5fce9] focus-visible:bg-[#f5fce9] focus-visible:outline-none"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f8e5] text-[#52820f]">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="13"
                            rx="2"
                          />
                          <path d="M8 21h8M12 17v4M7 8h10M7 12h6" />
                        </svg>
                      </span>

                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-sm font-semibold text-slate-900">
                          Web POS
                        </span>
                        <span className="text-xs text-slate-500">
                          Point of Sale
                        </span>
                      </span>

                      <span className="text-slate-400" aria-hidden="true">
                        ↗
                      </span>
                    </a>

                    {/* BACK OFFICE */}
                    <a
                      href={BACKOFFICE_URL}
                      role="menuitem"
                      onClick={() => setLoginOpen(false)}
                      className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-[#f5fce9] focus-visible:bg-[#f5fce9] focus-visible:outline-none"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f8e5] text-[#52820f]">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="3"
                          />
                          <path d="M3 9h18M9 21V9M13 13h4M13 17h4" />
                        </svg>
                      </span>

                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-sm font-semibold text-slate-900">
                          Back Office
                        </span>
                        <span className="text-xs text-slate-500">
                          Operations & Management
                        </span>
                      </span>

                      <span className="text-slate-400" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#52820f] transition hover:bg-[#f5fce9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ======================================
          MOBILE MENU
      ====================================== */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* MOBILE DRAWER */}
            <motion.aside
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed right-0 top-0 z-[10001] flex h-[100dvh] w-full flex-col overflow-y-auto bg-white shadow-2xl sm:w-[420px] lg:hidden"
            >
              {/* DRAWER HEADER */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5">
                <Link
                  href="/"
                  onClick={closeMenu}
                  aria-label="HOXXES Home"
                >
                  <Logo size="md" />
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-700 transition hover:bg-[#f5fce9] hover:text-[#6cab12]"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* MOBILE CART */}
              <div className="border-b border-slate-200 px-6 py-4">
                <Link
                  href="/cart"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:border-[#88d21a] hover:bg-[#f5fce9]"
                >
                  <div className="flex items-center gap-3">
                    <FaBagShopping size={23} />

                    <div>
                      <p className="font-semibold text-slate-900">
                        Shopping Cart
                      </p>

                      <p className="text-xs text-slate-500">
                        {cartCount} {cartCount === 1 ? "item" : "items"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {cartCount > 0 && (
                      <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#88d21a] px-2 text-xs font-bold text-[#17210c]">
                        {cartCount > 99 ? "99+" : cartCount}
                      </span>
                    )}

                    <span className="text-lg text-slate-500">→</span>
                  </div>
                </Link>
              </div>

              {/* MOBILE NAVIGATION */}
              <nav
                aria-label="Mobile navigation links"
                className="flex flex-col px-6 py-6"
              >
                {/* MAIN LINKS */}
                <div className="flex flex-col gap-5">
                  {navLinks
                    .filter((link) => link.label !== "Support")
                    .map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="text-base font-medium text-slate-700 transition hover:text-[#6cab12]"
                      >
                        {link.label}
                      </Link>
                    ))}
                </div>

                {/* SEPARATE SERVICES */}
                <div className="my-6 border-t border-slate-200" />

                <div className="flex flex-col gap-3">
                  {/* SUPPORT CENTER */}
                  <Link
                    href="/support"
                    onClick={closeMenu}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-[#88d21a] hover:bg-[#f5fce9]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f8e5] text-[#52820f]">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 12a8 8 0 0 1 16 0" />
                        <path d="M4 12v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
                        <path d="M20 12v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2Z" />
                        <path d="M16 20h-4" />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        Support Center
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        Tickets, PDF documentation &amp; instructions
                      </p>
                    </div>

                    <span
                      className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#6cab12]"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>

                  {/* DOWNLOAD CENTER */}
                  <Link
                    href="/download"
                    onClick={closeMenu}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-[#88d21a] hover:bg-[#f5fce9]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f8e5] text-[#52820f]">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M12 15V3" />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        Download Center
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        Download HOXXES apps &amp; software
                      </p>
                    </div>

                    <span
                      className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#6cab12]"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </nav>

              {/* MOBILE ACTIONS */}
              <div className="mt-auto border-t border-slate-200 px-6 pb-6 pt-5">

                {/* REQUEST DEMO */}
                <Link
                  href="/request-demo"
                  onClick={closeMenu}
                  className="mb-5 flex w-full items-center justify-center rounded-full bg-[#88d21a] py-3.5 text-sm font-semibold text-[#17210c] shadow-sm transition hover:bg-[#76b915]"
                >
                  Request Demo
                </Link>

                {/* LOGIN OPTIONS */}
                <div className="mb-3">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Log In to your account
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={POS_URL}
                      className="flex min-h-12 items-center justify-center rounded-full border border-[#88d21a] px-3 py-3 text-sm font-medium text-slate-900 transition hover:bg-[#f5fce9]"
                    >
                      Web POS
                    </a>

                    <a
                      href={BACKOFFICE_URL}
                      className="flex min-h-12 items-center justify-center rounded-full bg-[#88d21a] px-3 py-3 text-sm font-semibold text-[#17210c] transition hover:bg-[#76b915]"
                    >
                      Back Office
                    </a>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-5 px-6 pb-6">
                <a
                  href="https://www.instagram.com/hoxxes_innovation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#6cab12] transition hover:text-[#52820f]"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61569182421739"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#6cab12] transition hover:text-[#52820f]"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
