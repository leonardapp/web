"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";

const hardware = [
  {
    title: "Kiosk Slim",
    subtitle: "Self-service ordering system",
    image: "https://hoxxes.app/images/kiosk.svg",
    description:
      "High-performance self-service kiosk fully integrated with POS, payments and ordering system.",
  },
  {
    title: "POS Terminal",
    subtitle: "Dual-screen enterprise POS",
    image: "https://hoxxes.app/images/POS.png",
    description:
      "Enterprise-grade POS system designed for speed, reliability and real-time operations.",
  },
];

export default function HardwarePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white text-black overflow-hidden">
      <Header />

      {/* ================= HERO (APPLE KEYNOTE STYLE) ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="https://hoxxes.app/images/kiosk-ordering.png"
            className="w-full h-full object-cover scale-110"
            alt="Hardware Hero"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
        </div>

        {/* CONTENT */}
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
            <span className="block text-white/70">
              modern commerce.
            </span>
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
            <span className="block text-slate-500">
              It’s infrastructure.
            </span>
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Every device in the ecosystem is part of a unified operating system — connected, real-time, and intelligent.
          </p>
        </motion.div>
      </section>

      {/* ================= HARDWARE SHOWCASE ================= */}
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

              <h3 className="mt-4 text-4xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-500 text-lg">
                {item.subtitle}
              </p>

              <p className="mt-6 text-slate-400 leading-relaxed">
                Engineered for reliability, speed and seamless integration
                with POS, ordering and payment systems.
              </p>

              {/* LEARN MORE BUTTON (FIXED) */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="inline-block mt-8 text-sm font-medium text-black/70 hover:text-black transition"
              >
                Learn more →
              </button>

              {/* EXPAND (APPLE STYLE REVEAL) */}
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
            </div>

            {/* IMAGE */}
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full" />

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
            <span className="block text-white/60">
              All hardware connected.
            </span>
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