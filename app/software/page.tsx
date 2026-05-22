"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

/* FOOTER */
function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} HOXXES</p>

        <div className="flex gap-6">
          <Link href="/software" className="hover:text-black transition">
            Software
          </Link>
          <Link href="/hardware" className="hover:text-black transition">
            Hardware
          </Link>
          <Link href="/support" className="hover:text-black transition">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* MODULES */
const modules = [
  ["QR Table Ordering", "Customers scan a QR code to place orders, call staff, and view their bill in real time."],
  ["Android POS & Web POS", "Offline-ready POS infrastructure for high-speed restaurant operations."],
  ["Delivery & Pickup App", "Branded ordering applications with real-time order tracking."],
  ["Kiosk Self-Service", "Self-service ordering terminals fully integrated with your operations."],
  ["Kitchen Display System", "Real-time kitchen screens that synchronize instantly with incoming orders."],
  ["Staff Management", "Roles, permissions, scheduling and attendance control."],
  ["Check-In / Check-Out", "Geo-fenced attendance tracking with detailed reporting."],
  ["Printer Integration", "LAN, USB and fiscal printer support."],
  ["Analytics & Reporting", "Operational insights across sales, products, staff and locations."],
  ["Support Ticket System", "Track all technical requests through a centralized ticketing platform."],
  ["Documentation Center", "Structured guides for every module and configuration."],
  ["Custom Online Ordering Link", "Each client receives a branded web ordering page."]
];

export default function SoftwarePage() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">

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
          HOXXES combines POS, QR ordering, kiosk systems, delivery, kitchen displays,
          workforce tools and analytics into a single enterprise operating system.
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 sm:p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-base sm:text-lg font-semibold">
                {m[0]}
              </h3>

              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {m[1]}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

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
      <section className="py-24 sm:py-32 text-center px-6">

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

      <Footer />
    </div>
  );
}