"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 sm:pt-28 lg:pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs tracking-[0.35em] uppercase text-slate-400">
            About HOXXES
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
  Operating infrastructure
  <span className="block text-slate-500">
    for modern commerce.
  </span>
</h1>

         <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
  HOXXES unifies POS, QR ordering, kiosks, kitchen operations, and analytics
  into one real-time enterprise infrastructure layer — built for scale, speed,
  and reliability.
</p>

<div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">

<Link
    href="/software"
    className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition"
  >
    Explore Platform
  </Link>

  <Link
    href="/request-demo"
    className="px-6 py-3 rounded-full border border-slate-300 text-sm font-medium hover:bg-black hover:text-white transition"
  >
    Request Demo
  </Link>

  <Link
    href="/hardware"
    className="px-6 py-3 rounded-full border border-slate-300 text-sm font-medium hover:bg-black hover:text-white transition"
  >
    Explore Hardware
  </Link>
</div>
 
</motion.div>
</section>
{/* OUR STORY */}

<section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">

  <div className="text-center">

<div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
  Our Story
</div>

<h2 className="mt-4 max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
  Building the future on proven foundations.
</h2>

  </div>

  <div className="mt-10 max-w-3xl mx-auto text-left">

<p className="text-base sm:text-lg text-slate-600 leading-8">
  HOXXES was founded in 2024 with a mission to bring enterprise-grade
  commerce technology to businesses across the region.
</p>

<p className="mt-5 text-base sm:text-lg text-slate-600 leading-8">
  Built on proven technology foundations, HOXXES was localized,
  expanded and transformed into a complete operating infrastructure
  for restaurants, retail businesses and multi-location enterprises.
</p>

<p className="mt-5 text-base sm:text-lg text-slate-600 leading-8">
  Today, HOXXES combines software, hardware and operational support
  into one unified ecosystem powering real-time commerce at scale.
</p>

  </div>

</section>


          {/* INDUSTRIES */}
<section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">

  <div className="text-center">
    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
      Industries
    </div>

    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
      Built for multiple business models.
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-6 mt-12">

    <div className="p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-xl transition">
      <h3 className="font-semibold">Restaurants</h3>
      <p className="mt-3 text-slate-500">
        Ordering, kiosks, kitchen and guest experiences.
      </p>
    </div>

    <div className="p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-xl transition">
      <h3 className="font-semibold">Retail</h3>
      <p className="mt-3 text-slate-500">
        Transactions, inventory and workforce management.
      </p>
    </div>

    <div className="p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-xl transition">
      <h3 className="font-semibold">Enterprise</h3>
      <p className="mt-3 text-slate-500">
        Centralized infrastructure across multiple locations.
      </p>
    </div>

  </div>

</section>
      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-semibold text-center md:text-left">
    Infrastructure Vision
  </h2>

  <p className="mt-4 text-slate-600 leading-relaxed">
    We eliminate fragmented business systems and replace them with one
    unified, real-time operating infrastructure connecting devices,
    orders, payments and operations.
  </p>
</motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl border border-slate-200 bg-white shadow-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-emerald-100/40 blur-3xl opacity-60" />

<div className="relative text-center">
  <div className="text-sm text-slate-500">
    Core Philosophy
  </div>

  <div className="mt-3 text-xl font-semibold">
    Simplicity. Reliability. Scale.
  </div>
</div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
       <div className="text-center mb-12">
  <h2 className="text-3xl sm:text-4xl font-semibold">
    Core Principles
  </h2>
</div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Reliability",
              desc: "Systems designed to operate even offline with zero downtime logic.",
            },
            {
              title: "Enterprise Architecture",
              desc: "Built for single stores, franchises, and global chains.",
            },
            {
              title: "Operational Intelligence",
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

      {/* PLATFORM OVERVIEW */}
<section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">

  <div className="text-center mb-12">
    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
      Platform Overview
    </div>

    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
      One infrastructure layer.
    </h2>

    <p className="mt-5 text-slate-500 max-w-3xl mx-auto">
      HOXXES connects ordering, payments, kitchen operations,
      workforce management, inventory and analytics into a unified platform.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

  {[
    "Ordering & Commerce",
    "Payments Infrastructure",
    "Operations & Analytics",
    "Multi-Location Management",
  ].map((item) => (
    <div
      key={item}
      className="h-24 flex items-center justify-center
      text-center px-6
      rounded-2xl border border-slate-200 bg-white"
    >
      <div className="font-medium">
        {item}
      </div>
    </div>
  ))}

</div>

</section>


      {/* CTA */}
     <section className="relative bg-black text-white text-center py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to modernize your operations?
          </h2>

          <p className="mt-4 text-slate-300">
  One platform powering ordering, payments and operations at scale.
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