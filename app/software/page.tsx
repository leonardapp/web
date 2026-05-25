"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import Header from "@/components/Header";

/* MODULES */
const modules = [
  {
    title: "QR Table Ordering",
    desc: "Customers scan a QR code to place orders instantly.",
    detail:
      "Guests can scan a table QR code to browse the menu, place orders, call staff, and view their bill in real time. Orders are synchronized instantly with kitchen displays and POS systems.",
    benefit:
      "Reduces waiter workload and increases table turnover speed.",
  },
  {
    title: "Android POS & Web POS",
    desc: "Offline-ready POS infrastructure for fast operations.",
    detail:
      "High-performance POS system built for restaurants and retail with real-time synchronization, offline mode, multi-device support, and centralized management.",
    benefit:
      "Enables faster transactions and operational reliability.",
  },
  {
    title: "Delivery & Pickup App",
    desc: "Branded ordering applications with live tracking.",
    detail:
      "White-label customer ordering apps with integrated delivery, pickup scheduling, loyalty programs, vouchers, and real-time order tracking.",
    benefit:
      "Helps businesses own customer relationships directly.",
  },
  {
    title: "Kiosk Self-Service",
    desc: "Self-service ordering terminals for modern hospitality.",
    detail:
      "Interactive kiosk systems allowing customers to browse menus, customize products, place orders, and complete payments independently.",
    benefit:
      "Reduces operational costs and improves ordering accuracy.",
  },
  {
    title: "Kitchen Display System",
    desc: "Real-time kitchen synchronization.",
    detail:
      "Live kitchen display infrastructure that organizes incoming orders, prioritizes preparation flow, and synchronizes instantly with POS and QR systems.",
    benefit:
      "Improves kitchen efficiency and eliminates confusion.",
  },
  {
    title: "Staff Management",
    desc: "Roles, scheduling and workforce control.",
    detail:
      "Manage staff permissions, schedules, attendance tracking, and workforce performance from a centralized cloud dashboard.",
    benefit:
      "Improves operational visibility and staff productivity.",
  },
  {
    title: "Check-In / Check-Out",
    desc: "Geo-fenced attendance monitoring.",
    detail:
      "Track employee attendance using geo-fenced check-in systems with detailed reporting and centralized workforce records.",
    benefit:
      "Ensures accountability and simplifies attendance control.",
  },
  {
    title: "Printer Integration",
    desc: "LAN, USB and fiscal printer support.",
    detail:
      "Compatible with thermal, LAN, USB, and fiscal printers across restaurant and retail environments with automatic print routing.",
    benefit:
      "Provides stable and reliable printing infrastructure.",
  },
  {
    title: "Analytics & Reporting",
    desc: "Business intelligence across operations.",
    detail:
      "Advanced analytics platform providing sales reports, staff performance insights, operational metrics, and multi-location reporting.",
    benefit:
      "Enables data-driven business decisions.",
  },
  {
    title: "Support Ticket System",
    desc: "Centralized technical support infrastructure.",
    detail:
      "Integrated ticketing system allowing clients to report technical issues, monitor progress, and communicate with support teams efficiently.",
    benefit:
      "Improves support response time and issue tracking.",
  },
  {
    title: "Documentation Center",
    desc: "Structured operational guides and manuals.",
    detail:
      "Centralized documentation hub for onboarding, configuration, troubleshooting, and operational procedures across the ecosystem.",
    benefit:
      "Simplifies training and platform adoption.",
  },
  {
    title: "Custom Online Ordering Link",
    desc: "Branded online ordering experience.",
    detail:
      "Every client receives a dedicated branded ordering page connected directly to the HOXXES ecosystem and payment infrastructure.",
    benefit:
      "Strengthens brand identity and direct sales channels.",
  },
];

export default function SoftwarePage() {
  const [selectedModule, setSelectedModule] = useState<any>(null);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
        
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-slate-400">
          Software Platform
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          Every software module,
          <span className="block text-slate-500 mt-2">
            unified into one platform.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed">
          HOXXES combines POS, QR ordering, kiosk systems, delivery,
          kitchen displays, workforce tools and analytics into a single
          enterprise operating system.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          
          <Link
            href="/hardware"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            Explore Hardware
          </Link>

          <Link
            href="/request-demo"
            className="px-6 py-3 rounded-full bg-black text-white 
            hover:bg-slate-800 transition text-sm font-medium"
          >
            Request Demo
          </Link>

        </div>
      </section>

      {/* MODULE GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 sm:pb-32">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {modules.map((m, i) => (
            <motion.div
              key={i}
              onClick={() => setSelectedModule(m)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer p-6 sm:p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-base sm:text-lg font-semibold">
                {m.title}
              </h3>

              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {m.desc}
              </p>

              <div className="mt-4 text-xs text-emerald-600 font-medium">
                Click for details →
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* MODAL */}
      {selectedModule && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedModule(null)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="bg-white max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[10px] tracking-[0.35em] uppercase text-emerald-600 font-semibold">
              HOXXES MODULE
            </div>

            <h2 className="mt-4 text-2xl font-semibold">
              {selectedModule.title}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
              {selectedModule.detail}
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="text-sm font-medium text-slate-900">
                Business impact
              </div>

              <p className="mt-2 text-sm text-slate-600">
                {selectedModule.benefit}
              </p>
            </div>

            <button
              onClick={() => setSelectedModule(null)}
              className="mt-8 text-sm text-slate-500 hover:text-black transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* ENTERPRISE BLOCK */}
      <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Built for enterprise operations.
          </h2>

          <p className="mt-4 text-slate-500 text-sm sm:text-base">
            Software and hardware working together as one ecosystem.
          </p>

          <div className="mt-8">
            <Link
              href="/hardware"
              className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-black transition group"
            >
              <span className="border-b border-transparent group-hover:border-black transition">
                View compatible hardware
              </span>

              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-24 text-center px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Ready to modernize your operations?
        </h2>

        <p className="mt-4 text-slate-500">
          Enterprise-grade infrastructure for scalable hospitality systems.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">

          <Link
            href="/hardware"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            View Hardware
          </Link>

          <Link
            href="/request-demo"
            className="px-6 py-3 rounded-full bg-black text-white 
            hover:bg-slate-800 transition text-sm font-medium"
          >
            Request Demo
          </Link>

          <Link
            href="/pricing"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            View Pricing
          </Link>

        </div>

      </section>

    </div>
  );
}