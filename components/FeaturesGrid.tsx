"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";

const features = [
  {
    title: "Software Infrastructure",
    subtitle: "Core operating system layer",
    desc: "Unified cloud system powering all operations across locations.",
  },
  {
    title: "Smart QR Ordering",
    subtitle: "Digital table ordering",
    desc: "Every table becomes a real-time ordering endpoint.",
  },
  {
    title: "Multi-Location Control",
    subtitle: "HQ management system",
    desc: "Control menus, pricing and operations from one place.",
  },
  {
    title: "Inventory & Cost Control",
    subtitle: "Financial engine",
    desc: "Track stock, recipes and cost in real time.",
  },
  {
    title: "Workforce Management",
    subtitle: "Staff system",
    desc: "Manage employees, shifts and permissions.",
  },
  {
    title: "Order Management",
    subtitle: "Order engine",
    desc: "Unified orders from POS, QR, kiosk and online.",
  },
];

export default function HomeFeatures() {
  return (
    <section className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-emerald-600 uppercase tracking-[0.35em] text-xs font-medium">
            Hoxxes OS
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
             One Platform. Every Operation.
          </h2>

          <p className="mt-3 text-sm text-black/50 max-w-xl mx-auto">
            Explore the infrastructure powering restaurants,
            retail and enterprise operations.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((item, i) => (
            <Link key={i} href="/software" className="block">
              <motion.div
                whileHover={{ y: -5, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="
                  group relative overflow-hidden h-full rounded-3xl p-5
                  bg-white/70 backdrop-blur-xl border border-black/[0.08]
                  hover:border-emerald-600/20 transition-all shadow-sm hover:shadow-xl
                "
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative w-10 h-1 rounded-full bg-emerald-600 mb-4" />

                <h3 className="relative text-sm sm:text-base font-semibold text-black leading-tight">
                  {item.title}
                </h3>

                <p className="relative mt-1 text-xs text-black/40">
                  {item.subtitle}
                </p>

                <p className="relative mt-3 text-xs sm:text-sm leading-relaxed text-black/55 line-clamp-2">
                  {item.desc}
                </p>

                <div className="relative mt-5 text-[10px] uppercase tracking-[0.2em] text-black/30 group-hover:text-emerald-600 transition-colors">
                  Explore System →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <div className="mt-12 text-center">
          <Button href="/software" variant="primary">
            Explore Full Software Platform
          </Button>
        </div>

      </div>
    </section>
  );
}