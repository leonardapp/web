"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

/* FOOTER */
function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex justify-between">
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

const modules = [
  {
    title: "QR Table Ordering",
    description:
      "Customers scan a QR code to place orders, call staff, and view their bill in real time.",
  },
  {
    title: "Android POS & Web POS",
    description:
      "Offline-ready POS infrastructure for high-speed restaurant operations.",
  },
  {
    title: "Delivery & Pickup App",
    description:
      "Branded ordering applications with real-time order tracking.",
  },
  {
    title: "Kiosk Self-Service",
    description:
      "Self-service ordering terminals fully integrated with your operations.",
  },
  {
    title: "Kitchen Display System",
    description:
      "Real-time kitchen screens that synchronize instantly with incoming orders.",
  },
  {
    title: "Staff Management",
    description:
      "Roles, permissions, scheduling and attendance control.",
  },
  {
    title: "Check-In / Check-Out",
    description:
      "Geo-fenced attendance tracking with detailed reporting.",
  },
  {
    title: "Printer Integration",
    description:
      "LAN, USB and fiscal printer support.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Operational insights across sales, products, staff and locations.",
  },
  {
    title: "Support Ticket System",
    description:
      "Track all technical requests through a centralized ticketing platform.",
  },
  {
    title: "Documentation Center",
    description:
      "Structured guides for every module and configuration.",
  },
  {
    title: "Custom Online Ordering Link",
    description:
      "Each client receives a branded web ordering page.",
  },
];

export default function SoftwarePage() {
  return (
    <div className="bg-white text-slate-900">

      {/* HEADER (CORRECT PLACE) */}
      <Header />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Software Platform
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Every software module,
          <span className="block text-slate-500">
            unified into one platform.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-500 leading-relaxed">
          HOXXES combines POS, QR ordering, kiosk systems, delivery,
          kitchen displays, workforce tools and analytics into a
          single enterprise operating system.
        </p>
      </section>

      {/* MODULE GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{module.title}</h3>
              <p className="mt-3 text-sm text-slate-500">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ENTERPRISE BLOCK */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold">
            Built for enterprise operations.
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-semibold">
          Ready to modernize your operations?
        </h2>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/request-demo" className="px-6 py-3 bg-black text-white rounded-full">
            Request Demo
          </Link>
          <Link href="/pricing" className="px-6 py-3 border rounded-full">
            View Pricing
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}