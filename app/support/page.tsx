"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const supportOptions = [
  {
    title: "Documentation Center",
    description:
      "Step-by-step technical guides for all modules, hardware devices, and integrations inside the Hoxxes ecosystem.",
    cta: "Open Docs",
    href: "/docs",
  },
  {
    title: "Ticketing System",
    description:
      "Submit issues, track resolution in real-time, and receive structured updates from our engineering team.",
    cta: "Open Tickets",
    href: "/ticket/",
  },
  {
    title: "Direct Engineering Contact",
    description:
      "Enterprise-grade support channel for urgent production issues and onboarding assistance.",
    cta: "Contact Us",
    href: "mailto:info@hoxxes.com",
  },
];

export default function SupportPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden">
      <Header />

      {/* BACKGROUND GLOW SYSTEM */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.05] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-200/30 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-250px] right-[-150px] w-[800px] h-[800px] bg-slate-200/40 blur-[180px] rounded-full" />

      {/* HERO */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
            Support Infrastructure
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Everything you need
            <span className="block text-slate-500">
              to stay operational
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Enterprise support layer built for real-time operations —
            documentation, ticketing, and engineering access in one system.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/docs"
              className="px-6 py-3 rounded-full border border-slate-300 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Open Docs
            </Link>

            <Link
              href="/ticket"
              className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              Create Ticket
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-6">
          {supportOptions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              {/* glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-100/30 blur-2xl" />

              <div className="relative">
                <h2 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h2>

                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-8 inline-flex items-center justify-center px-5 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition"
                >
                  {item.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EMERGENCY SUPPORT BLOCK */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-28">
        <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center overflow-hidden">

          <div className="absolute inset-0 bg-emerald-100/30 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Production issue?
            </h2>

            <p className="mt-4 text-slate-500">
              Our engineering team is available for urgent enterprise incidents.
            </p>

            <div className="mt-8 space-y-2 text-slate-600">
              <div>
                Email:{" "}
                <a className="font-medium hover:underline" href="mailto:info@hoxxes.com">
                  info@hoxxes.com
                </a>
              </div>

              <div>
                Phone:{" "}
                <a className="font-medium hover:underline" href="tel:+38348106060">
                  +383 48 10 60 60
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/contact-sales"
                className="px-6 py-3 rounded-full border border-slate-300 text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Contact Sales
              </Link>

              <Link
                href="/ticket"
                className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition"
              >
                Open Ticket
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}