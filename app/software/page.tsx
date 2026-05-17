"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "@/components/Logo";

/* HEADER */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[80%] bg-white shadow-xl p-6 flex flex-col gap-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-xl"
            >
              ✕
            </button>

            <Link href="/hardware" onClick={() => setMenuOpen(false)}>
              Hardware
            </Link>
            <Link href="/download" onClick={() => setMenuOpen(false)}>
              Download
            </Link>
            <Link href="/support" onClick={() => setMenuOpen(false)}>
              Support
            </Link>
            <Link href="/software" onClick={() => setMenuOpen(false)}>
              Software
            </Link>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo size="md" />

        <nav className="hidden md:flex gap-6 text-sm text-slate-500">
          <Link href="/hardware" className="hover:text-black transition">
            Hardware
          </Link>
          <Link href="/download" className="hover:text-black transition">
            Download
          </Link>
          <Link href="/support" className="hover:text-black transition">
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/request-demo"
            className="px-4 py-2 bg-black text-white rounded-full text-sm"
          >
            Request Demo
          </Link>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

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

/* REST OF FILE = 100% IDENTICAL (modules + page) */

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