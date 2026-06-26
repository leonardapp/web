"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white/80 backdrop-blur-xl overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-400/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10 sm:py-16">

        {/* TOP */}
        <div className="grid grid-cols-2 md:grid-cols-[1.25fr_1fr_1fr] gap-8 md:gap-12">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">
              Hoxxes
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-500 max-w-sm">
              Enterprise Restaurant & Retail Operating System built for
              modern hospitality infrastructure.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-400">
                Infrastructure online
              </span>
            </div>
            <div className="hidden md:flex mt-5 items-center gap-5">
  <a
    href="https://www.instagram.com/hoxxes_innovation/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-600 hover:text-emerald-500 hover:scale-110 transition-all duration-200"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61569182421739"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-600 hover:text-emerald-500 hover:scale-110 transition-all duration-200"
  >
    <FaFacebookF size={20} />
  </a>
</div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.18em]">
              Company
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                href="/about-us"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/support"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                Support
              </Link>

              <Link
                href="/contact-sales"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                Contact Sales
              </Link>

              <Link
                href="/download"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                Download Center
              </Link>
              <div className="flex md:hidden items-center gap-4 pt-4">
  <a
    href="https://www.instagram.com/hoxxes_innovation/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-600 hover:text-emerald-500 transition-all duration-200"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61569182421739"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-600 hover:text-emerald-500 transition-all duration-200"
  >
    <FaFacebookF size={20} />
  </a>
</div>

            </div>
          </div>
                    {/* PRODUCT */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.18em]">
              Product
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                href="/software"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                Software
              </Link>

              <Link
                href="/hardware"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                Hardware
              </Link>

              <Link
                href="/pricing"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                Pricing
              </Link>

              <Link
                href="/request-demo"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                Request Demo
              </Link>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-4 md:mt-10 pt-6 border-t border-slate-200 flex flex-col items-center md:flex-row md:items-center justify-between gap-4">
          <p className="order-2 md:order-1 text-xs sm:text-sm text-slate-400">
            © {new Date().getFullYear()} Hoxxes. All rights reserved.
          </p>

         <div className="order-1 md:order-2 flex w-full md:w-auto flex-wrap justify-center md:justify-start items-center gap-x-5 md:gap-10 gap-y-2 text-xs sm:text-sm font-medium">
            <Link
              href="/legal/privacy-policy"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/legal/terms-of-service"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              Terms of Service
            </Link>

            <Link
              href="/legal/cookie-policy"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              Cookie Policy
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}