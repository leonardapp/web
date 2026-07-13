"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";

const hardware = [
  {
    id: 1,
    slug: "kiosk-slim",
    title: "Kiosk Slim",
    subtitle: '32" Wall-Mounted Self-Service Kiosk',
    price: 1185,
    availability: "in-stock",
    image: "https://hoxxes.app/images/kiosk.svg",
    description:
      "Space-saving 32-inch wall-mounted self-service kiosk fully integrated with POS, payment terminals and the HOXXES ordering ecosystem.",
  },
  {
    id: 2,
    slug: "pos-terminal",
    title: "POS Terminal",
    subtitle: "Enterprise Dual-Screen POS",
    price: 677,
    availability: "in-stock",
    image: "https://hoxxes.app/images/POS.png",
    description:
      "Enterprise dual-screen POS terminal featuring Offline Mode for uninterrupted operations.",
  },
  {
    id: 3,
    slug: "kds-display",
    title: "Kitchen Display System",
    subtitle: 'ALLNET Touch Display 21" (PoE) Android',
    price: 415,
    availability: "in-stock",
    image: "https://hoxxes.app/images/kds-allnet.png",
    description:
      "Recommended Android display for HOXXES Kitchen Display System.",
  },
];

export default function HardwarePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
 const [openDimensions, setOpenDimensions] = useState<string | null>(null);

  return (
    <div className="bg-transparent text-black overflow-hidden">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
  src="https://hoxxes.app/images/hero.png"
  alt="Hardware Hero"
  className="w-full h-full object-cover scale-110"
  style={{
    objectPosition: "75% 20%",
  }}
/>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6 text-white"
        >
          <div className="text-xs tracking-[0.35em] uppercase text-white/60">
            Hardware System
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Built for
            <span className="block text-white/70">modern commerce.</span>
          </h1>

          <p className="mt-6 text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            A unified hardware ecosystem designed for restaurants, retail and enterprise operations.
          </p>

          <div className="mt-10 flex justify-center gap-3">
            <Link
              href="/request-demo"
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
            >
              Request Demo
            </Link>

            <Link
              href="/contact-sales"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Hardware is not a device.
            <span className="block text-slate-500">It’s infrastructure.</span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Every device in the ecosystem is part of a unified operating system — connected, real-time, and intelligent.
          </p>
        </motion.div>
      </section>

      {/* ================= HARDWARE ================= */}
      <section className="space-y-40 pb-32">
        {hardware.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
          >
            {/* TEXT */}
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="text-xs tracking-[0.3em] uppercase text-slate-400">
                Hardware
              </div>

              <h3 className="mt-4 text-4xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-slate-500 text-lg">{item.subtitle}</p>

              {/* PRICE */}
              <div className="mt-3 text-black font-medium text-lg">
                €{item.price.toLocaleString()} + VAT
              </div>

              {/* STOCK */}
              <div className="mt-4 flex items-center gap-2">

  <div
    className={`w-2 h-2 rounded-full ${
      item.availability === "in-stock"
        ? "bg-emerald-500"
        : item.availability === "pre-order"
        ? "bg-amber-500"
        : "bg-red-500"
    }`}
  />

  <span className="text-sm text-slate-600">
    {item.availability === "in-stock" && "In Stock"}
    {item.availability === "pre-order" && "Pre-Order"}
    {item.availability === "out-of-stock" && "Out of Stock"}
  </span>

</div>

              {/* BADGE */}
              <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                Limited Stock • Buy now
              </span>

              <div className="h-0" />

              {/* LEARN MORE */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="inline-block mt-8 text-sm font-medium text-black/70 hover:text-black transition"
              >
                Learn more →
              </button>

              {/* VIEW DIMENSIONS (ONLY KIOSK) */}
              <button
  onClick={() => setOpenDimensions(item.slug)}
  className="block mt-4 text-sm font-medium text-black/70 hover:text-black underline transition"
>
  View Dimensions
</button>
          

              {/* EXPAND */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>

              {/* CTA */}
<div className="mt-6 flex gap-3 flex-wrap">
  <Link
    href={`/hardware/${item.slug}`}
    className="px-5 py-2 rounded-full bg-black text-white text-sm hover:scale-105 transition"
  >
    Buy Now
  </Link>

  <Link
    href="/contact-sales"
    className="px-5 py-2 rounded-full border border-black/20 text-sm hover:bg-black/5 transition"
  >
    Request Quote
  </Link>
</div>
            </div>

            {/* IMAGE */}
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="relative">
                <div className="absolute inset-0 bg-white blur-3xl rounded-full" />

                <img
                  src={item.image}
                  className="relative w-full rounded-2xl shadow-2xl"
                  alt={item.title}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ================= DIMENSIONS MODAL ================= */}
      {openDimensions && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setOpenDimensions(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
  src={`https://hoxxes.app/images/${openDimensions}-dimensions.png`}
  className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
  alt="Product Dimensions"
/>

            <button
              onClick={() => setOpenDimensions(null)}
              className="absolute top-3 right-3 bg-white text-black rounded-full px-3 py-1 text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ================= FINAL CTA ================= */}
      <section className="py-40 text-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">
            One ecosystem.
            <span className="block text-white/60">All hardware connected.</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            Deploy POS, kiosks and infrastructure fully integrated with your SaaS platform.
          </p>

          <div className="mt-10 flex justify-center gap-3">
            <Link
              href="/request-demo"
              className="px-6 py-3 rounded-full bg-white text-black hover:scale-105 transition"
            >
              Request Demo
            </Link>

            <Link
              href="/contact-sales"
              className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}