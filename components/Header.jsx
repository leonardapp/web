
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { getCart } from "@/lib/cart";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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

  
const CartButton = () => (
  <Link
    href="/cart"
    aria-label={`Shopping cart, ${cartCount} items`}
    title="Shopping Cart"
    className="relative inline-flex h-10 w-10 items-center justify-center text-[#17210c] transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2 rounded-full"
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
      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-[9999] border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="relative"
            >
              <div className="relative scale-110 md:scale-115">
                <Logo size="md" />
              </div>
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-600 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative transition hover:text-[#6cab12]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#88d21a] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <Link
              href="/download"
              className="hidden text-sm text-slate-600 transition hover:text-[#6cab12] md:block"
            >
              Download Center
            </Link>

            {/* SHOPPING CART */}
            <CartButton />

            {/* WEB POS */}
            <Link
              href="https://pos.hoxxes.com/#/login"
              className="hidden rounded-full border border-[#88d21a] px-4 py-2 text-sm font-medium text-slate-900 transition-all hover:border-[#6cab12] hover:bg-[#f5fce9] sm:block"
            >
              Web POS
            </Link>

            {/* BACK OFFICE */}
            <Link
              href="https://backoffice.hoxxes.com/#/login"
              className="hidden rounded-full bg-[#88d21a] px-4 py-2 text-sm font-semibold text-[#17210c] shadow-sm transition-all hover:bg-[#76b915] sm:block"
            >
              Back Office
            </Link>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-2xl text-[#52820f] md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
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
              className="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-sm"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className="fixed right-0 top-0 z-[10001] flex h-full w-full flex-col bg-white shadow-2xl sm:w-[420px]"
            >
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <span className="text-lg font-semibold">Menu</span>

                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl text-slate-700 transition hover:rotate-90 hover:text-[#6cab12]"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* MOBILE CART */}
              <div className="border-b border-slate-200 px-6 py-4">
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
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
                        className="text-slate-700 transition hover:text-[#6cab12]"
                      >
                        {link.label}
                      </Link>
                    ))}
                </div>

                <div className="my-6 border-t border-slate-200" />

                <div className="flex flex-col gap-6">
                  <Link
                    href="/support"
                    onClick={() => setOpen(false)}
                    className="text-slate-700 transition hover:text-[#6cab12]"
                  >
                    Support
                  </Link>

                  <Link
                    href="/download"
                    onClick={() => setOpen(false)}
                    className="text-slate-700 transition hover:text-[#6cab12]"
                  >
                    Download Center
                  </Link>
                </div>

                <div className="mt-6 border-t border-slate-200" />
              </div>

              {/* MOBILE ACTIONS */}
              <div className="mt-auto flex flex-col gap-3 border-t border-slate-200 px-6 pb-10 pt-6">
                <Link
                  href="https://pos.hoxxes.com/#/login"
                  className="w-full rounded-full border border-[#88d21a] py-3 text-center font-medium text-slate-900 transition hover:border-[#6cab12] hover:bg-[#f5fce9]"
                >
                  Web POS
                </Link>

                <Link
                  href="https://backoffice.hoxxes.com/#/login"
                  className="w-full rounded-full bg-[#88d21a] py-3 text-center font-semibold text-[#17210c] transition hover:bg-[#76b915]"
                >
                  Back Office
                </Link>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-4 px-6 pb-6">
                <a
                  href="https://www.instagram.com/hoxxes_innovation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#6cab12] transition-all duration-200 hover:text-[#52820f]"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61569182421739"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#6cab12] transition-all duration-200 hover:text-[#52820f]"
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
