"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { spacing, text, layout } from "@/app/design-system";
/* PRICING LOGIC */
function getPricePerLocation(locations: number) {
  if (locations <= 2) return 499;
  if (locations <= 9) return 449;
  return 349;
}

export default function PricingPage() {
  const [locations, setLocations] = useState(5);

  const price = useMemo(() => getPricePerLocation(locations), [locations]);
  const total = useMemo(() => price * locations, [price, locations]);

  const isEnterprise = locations >= 10;

  return (
    <div className="relative min-h-screen text-slate-900 overflow-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Logo size="md" />

          <div className="flex items-center gap-3">
            <Link
              href="/software"
              className="hidden sm:block text-sm text-slate-500 hover:text-black transition"
            >
              Software
            </Link>

            <Link
              href="/request-demo"
              className="w-full sm:w-auto text-xs sm:text-sm px-4 py-2 border border-slate-300 rounded-full hover:bg-black hover:text-white transition text-center"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center px-4 sm:px-6 pt-14 sm:pt-20 pb-10 sm:pb-14">
        <div className="text-[10px] sm:text-xs tracking-[0.35em] text-slate-400 uppercase">
          SaaS Pricing Engine
        </div>

        <h1 className="mt-5 text-3xl sm:text-5xl font-semibold leading-tight">
          Pay per location
          <span className="block text-slate-500">
            scale with confidence
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          Full restaurant operating system: POS, QR, KDS, kiosks, analytics.
        </p>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-slate-500">
                Number of locations
              </div>

              <div className="text-3xl sm:text-4xl font-semibold mt-2">
                {locations}
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="20"
              value={locations}
              onChange={(e) => setLocations(Number(e.target.value))}
              className="w-full accent-black"
            />

            <div className="text-xs text-slate-400">
              Drag to simulate your annual pricing instantly
            </div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            key={locations}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-3xl p-5 sm:p-8 shadow-sm bg-white"
          >

            {isEnterprise && (
              <div className="text-xs uppercase text-emerald-600 mb-2">
                Enterprise Volume Pricing Active
              </div>
            )}

            <div className="text-xs uppercase tracking-widest text-slate-400">
              Pricing Tier
            </div>

            <div className="mt-3 text-3xl sm:text-4xl font-semibold">
              €{price}
              <span className="text-sm text-slate-400"> / year / location</span>
            </div>

            <div className="mt-4 text-2xl font-semibold">
              €{total.toLocaleString()}
            </div>

            <div className="text-sm text-slate-500">
              Total yearly cost (excl. VAT)
            </div>

            {/* FEATURES */}
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>✔ POS + QR Ordering</li>
              <li>✔ Kitchen Display System</li>
              <li>✔ Staff Management</li>
              <li>✔ Analytics Dashboard</li>

              {isEnterprise && (
                <>
                  <li>✔ 30-Day Free Trial</li>
                  <li>✔ Multi-location scaling tools</li>
                </>
              )}
            </ul>

            {/* BUTTON (FIXED) */}
            <Link
              href="/request-demo"
              className="mt-6 w-full block text-center bg-black text-white py-3 rounded-full hover:bg-slate-800 transition"
            >
              Start Deployment
            </Link>

            <p className="text-xs text-slate-400 text-center mt-3">
              VAT applies depending on region
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIER GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

          <div className="border rounded-2xl p-5">
            <div className="font-medium">1–2</div>
            <div className="text-sm text-slate-500">€499</div>
          </div>

          <div className="border rounded-2xl p-5">
            <div className="font-medium">3–9</div>
            <div className="text-sm text-slate-500">€449</div>
          </div>

          <div className="border rounded-2xl p-5">
            <div className="font-medium">10–20</div>
            <div className="text-sm text-slate-500">€349</div>
          </div>

        </div>
      </section>

      {/* ADD-ONS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* SUPPORT */}
          <div className="border rounded-3xl p-6 sm:p-8 bg-slate-50">
            <h3 className="text-lg font-semibold">
              Operational Assistance
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              5 hours monthly support for operations & training
            </p>

            <div className="mt-4 text-xl font-semibold">
              €150 / month
            </div>

            <Link
              href="/contact-sales"
              className="mt-5 w-full block text-center bg-black text-white py-2 rounded-full hover:bg-slate-800 transition"
            >
              Activate
            </Link>
          </div>

          {/* TOKEN */}
          <div className="border rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold">
              POS Payment Token
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Required for each kiosk or POS device handling payments
            </p>

            <div className="mt-4 text-sm font-medium">
              One-time activation per device
            </div>

            <Link
              href="/contact-sales"
              className="mt-5 w-full block text-center bg-black text-white py-2 rounded-full hover:bg-slate-800 transition"
            >
              Request Setup
            </Link>
          </div>

        </div>
      </section>

    

    </div>
  );
}