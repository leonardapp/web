"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { spacing, text, layout } from "@/app/design-system";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs tracking-[0.35em] uppercase text-slate-400">
            About HOXXES
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
  Bringing the Operating System
  <span className="block text-slate-500">
    for modern hospitality
  </span>
</h1>

          <p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
            HOXXES unifies POS, QR ordering, kiosks, kitchen operations, and analytics
            into one real-time enterprise infrastructure layer — built for scale, speed,
            and reliability.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/request-demo"
              className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              Request Demo
            </Link>

            <Link
              href="/software"
              className="px-6 py-3 rounded-full border border-slate-300 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Explore Platform
            </Link>
          </div>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We eliminate fragmented restaurant systems and replace them with one
            unified, real-time operating system that connects every device, order,
            and transaction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl border bg-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-emerald-100/40 blur-3xl opacity-60" />
          <div className="relative">
            <div className="text-sm text-slate-500">Core Philosophy</div>
            <div className="mt-3 text-xl font-semibold">
              Simplicity. Reliability. Scale.
            </div>
          </div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10">What We Stand For</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Reliability First",
              desc: "Systems designed to operate even offline with zero downtime logic.",
            },
            {
              title: "Enterprise Ready",
              desc: "Built for single stores, franchises, and global chains.",
            },
            {
              title: "Real-Time Everything",
              desc: "Every order, payment, and update syncs instantly across devices.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="font-semibold text-lg">{v.title}</div>
              <p className="text-sm text-slate-500 mt-2">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">Our Story</h2>

        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            HOXXES started with a simple problem — restaurant systems were slow,
            fragmented, and disconnected.
          </p>

          <p>
            We offer a unified platform that connects ordering, kitchen operations,
            payments, and analytics into one real-time ecosystem.
          </p>

          <p>
            Today, HOXXES evolves into a full enterprise operating system for
            modern hospitality infrastructure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black text-white text-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to modernize your operations?
          </h2>

          <p className="mt-4 text-slate-300">
            Join the next generation of restaurant infrastructure systems.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact-sales"
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
            >
              Contact Sales
            </Link>

            <Link
              href="/request-demo"
              className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

    
    </div>
  );
}