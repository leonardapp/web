"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

/* HEADER */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo size="md" />

        <nav className="hidden md:flex gap-6 text-sm text-slate-500">
          <Link href="/software">Software</Link>
          <Link href="/download">Download</Link>
          <Link href="/support">Support</Link>
        </nav>

        <Link
          href="/request-demo"
          className="px-4 py-2 bg-black text-white rounded-full text-sm"
        >
          Request Demo
        </Link>
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
          <Link href="/software">Software</Link>
          <Link href="/hardware">Hardware</Link>
          <Link href="/support">Support</Link>
        </div>
      </div>
    </footer>
  );
}

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
      "Interactive holographic 3D display for premium marketing, retail branding and product presentation.",
    highlight: "Premium marketing hardware",
  },
];

export default function HardwarePage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-slate-400">
          Hardware Ecosystem
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Enterprise hardware
          <span className="block text-slate-500">
            built for scale, speed & reliability
          </span>
        </h1>

        <p className="mt-6 text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
          Fully integrated devices designed to run seamlessly inside the Hoxxes SaaS ecosystem —
          from ordering to payments to customer experience.
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hardware.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="h-56 bg-slate-50 flex items-center justify-center p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="text-[11px] uppercase tracking-wider text-slate-400">
                  {item.highlight}
                </div>

                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-6">
                  <div className="text-2xl font-bold tracking-tight">
                    {item.price}
                  </div>
                  <div className="text-xs text-slate-400">
                    Starting price
                  </div>
                </div>

                <Link
                  href="/contact-sales"
                  className="mt-6 inline-flex items-center justify-center w-full rounded-xl bg-black text-white py-3 text-sm font-medium hover:bg-slate-800 transition"
                >
                  Request Offer
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-slate-50 border-y border-slate-200 text-center">
        <h2 className="text-4xl font-semibold tracking-tight">
          One ecosystem. All your hardware connected.
        </h2>

        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          Deploy fully integrated POS, kiosk, and marketing hardware in minutes —
          fully synced with your Hoxxes SaaS platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/request-demo"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-slate-800 transition"
          >
            Request Demo
          </Link>

          <Link
            href="/contact-sales"
            className="px-6 py-3 border border-slate-300 rounded-full hover:bg-white transition"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}