"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

/* HARDWARE */
const hardware = [
  {
    title: "Kiosk Slim – Self Service",
    price: "€1,185",
    preorderPrice: "€1,016",
    preorderEnabled: true,
    image: "https://hoxxes.app/images/Kiosk.png",
    description:
      "Wall-mounted self-service kiosk with touchscreen ordering, QR integration and built-in receipt printing.",
  highlight: "Space-saving self-service solution",
},

  {
    title: "Android POS Terminal",
    price: "€677",
    preorderPrice: "€593",
    preorderEnabled: true,
    image: "https://hoxxes.app/images/POS.png",
    description:
      "Dual-screen POS system with cashier + customer display, built for fast retail & restaurant operations.",
    highlight: "Dual-screen restaurant & retail POS",
  },
];

/* PREORDER LOGIC */
const PREORDER_DEADLINE = "2026-06-15";

function isPreorderActive() {
  return new Date(PREORDER_DEADLINE).getTime() > new Date().getTime();
}

export default function HardwarePage() {
  const preorderActive = isPreorderActive();

  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">

      {/* HEADER */}
      <Header />

      {/* HERO */}
<section className="max-w-6xl mx-auto px-6 pt-24 sm:pt-28 lg:pt-32 pb-20 text-center">

  <div className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-slate-400">
    Hardware Ecosystem
  </div>

  <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
    Enterprise hardware
    <span className="block text-slate-500 mt-2">
      for modern operations.
    </span>
  </h1>

  <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
    Fully integrated devices designed to run inside the Hoxxes SaaS ecosystem —
    from ordering to payments to customer experience.
  </p>

  <div className="relative mt-16">
  <img
    src="https://hoxxes.app/images/kiosk-ordering.png"
    alt="Hoxxes Self Service Kiosk"
    className="
      w-full
      rounded-[32px]
      shadow-2xl
      border
      border-slate-200
    "
  />
</div>

</section>

{/* FEATURES */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pb-16">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center">

    <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white">
      <div className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
        32" Touchscreen
      </div>

      <div className="mt-2 text-sm sm:text-base text-slate-500 max-w-[220px] mx-auto">
        Interactive self-service ordering
      </div>
    </div>

    <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white">
      <div className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
        Wall-Mounted
      </div>

      <div className="mt-2 text-sm sm:text-base text-slate-500 max-w-[220px] mx-auto">
        Space-saving installation design
      </div>
    </div>

    <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white">
      <div className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
        Integrated Printer
      </div>

      <div className="mt-2 text-sm sm:text-base text-slate-500 max-w-[220px] mx-auto">
        Built-in receipt printing
      </div>
    </div>

  </div>

  

</section>
<div className="text-center mt-4 mb-12">
  <span className="text-xs text-slate-400">
    All hardware prices shown exclude VAT and shipping.
  </span>
</div>

      {/* HARDWARE GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 sm:pb-32">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">

          {hardware.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-xl overflow-hidden flex flex-col"
            >

              {/* IMAGE */}
              <div className="relative h-44 sm:h-52 bg-slate-50 flex items-center justify-center p-4 overflow-hidden">

                {item.preorderEnabled && preorderActive && (
                  <div className="absolute top-3 left-3 z-10">
                    <div className="px-2.5 py-1 rounded-full bg-black text-white text-[10px] font-medium tracking-wide uppercase">
                      Preorder
                    </div>
                  </div>
                )}

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">

                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400">
                  {item.highlight}
                </div>

                <h3 className="mt-1.5 text-base sm:text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {item.description}
                </p>

                {/* PRICE */}
                <div className="mt-5 text-center">

                  {item.preorderEnabled && preorderActive ? (
                    <>
                      <div className="flex items-center justify-center gap-2">

                        <span className="text-slate-400 line-through text-sm">
                          {item.price}
                        </span>

                        <span className="text-2xl sm:text-3xl font-bold tracking-tight">
                          {item.preorderPrice}
                        </span>

                      </div>

                      <div className="mt-3 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
                        <span className="text-[11px] text-emerald-700 font-medium">
                          Preorder valid until {PREORDER_DEADLINE}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl sm:text-3xl font-bold tracking-tight">
                        {item.price}
                      </div>

                      <div className="text-xs text-slate-400 mt-1">
                        Starting price
                      </div>
                    </>
                  )}

                </div>

                {/* BUTTON */}
                <Link
                  href="/contact-sales"
                  className="mt-5 w-full px-5 py-3 rounded-xl bg-black text-white text-sm font-medium text-center hover:bg-slate-800 transition"
                >
                  {item.preorderEnabled && preorderActive
                    ? "Preorder"
                    : "Request Offer"}
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200 text-center px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          One ecosystem. All your hardware connected.
        </h2>

        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Deploy POS, kiosk and hardware fully synced with your SaaS platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">

          <Link
            href="/request-demo"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-slate-800 transition text-sm font-medium"
          >
            Request Demo
          </Link>

          <Link
            href="/pricing"
            className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-black hover:text-white hover:border-black transition text-sm font-medium"
          >
            View Pricing
          </Link>

        </div>

      </section>

    </div>
  );
}