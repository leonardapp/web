"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { spacing, text, layout } from "@/app/design-system";


/* HARDWARE */
const hardware = [
  {
    title: "Kiosk Slim – Self Service",
    price: "€1,399",
    image: "https://hoxxes.app/images/Kiosk.png",
    description:
      "Self-service kiosk with touchscreen ordering, QR integration and built-in receipt printing.",
    highlight: "Best for QSR & high-volume restaurants",
  },
  {
    title: "Android POS Terminal",
    price: "€799",
    image: "https://hoxxes.app/images/POS.png",
    description:
      "Dual-screen POS system with cashier + customer display, built for fast retail & restaurant operations.",
    highlight: "Most popular POS setup",
  },
  {
    title: "HoloBox – 3D Marketing Display",
    price: "€9,440",
    image: "https://hoxxes.app/images/HoloBox.png",
    description:
      "Interactive holographic 3D display for premium branding and product presentation.",
    highlight: "Premium marketing hardware",
  },
];

export default function HardwarePage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 sm:pt-32 pb-14 text-center">

        <div className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-slate-400">
          Hardware Ecosystem
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          Enterprise hardware
          <span className="block text-slate-500 mt-2">
            built for scale, speed & reliability
          </span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Fully integrated devices designed to run inside the Hoxxes SaaS ecosystem —
          from ordering to payments to customer experience.
        </p>

      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20 sm:pb-28">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {hardware.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-2xl overflow-hidden flex flex-col"
            >

              {/* IMAGE */}
              <div className="h-52 sm:h-56 bg-slate-50 flex items-center justify-center p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">

                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400">
                  {item.highlight}
                </div>

                <h3 className="mt-2 text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* PRICE */}
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold tracking-tight">
                    {item.price}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Starting price
                  </div>
                </div>

                {/* BUTTON */}
                <Link
                  href="/contact-sales"
                  className="mt-6 w-full px-6 py-3 rounded-xl bg-black text-white 
                  text-sm font-medium text-center hover:bg-slate-800 transition"
                >
                  Request Offer
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200 text-center px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          One ecosystem. All your hardware connected.
        </h2>

        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
          Deploy POS, kiosk and marketing hardware fully synced with your SaaS platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">

          <Link
            href="/request-demo"
            className="px-6 py-3 rounded-full bg-black text-white 
            hover:bg-slate-800 transition text-sm font-medium"
          >
            Request Demo
          </Link>

          <Link
            href="/contact-sales"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            Contact Sales
          </Link>

        </div>

      </section>

    
    </div>
  );
}