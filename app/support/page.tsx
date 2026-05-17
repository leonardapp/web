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
      "Submit technical issues, track progress, and receive real-time updates for every request.",
    cta: "Open Tickets",
    href: "https://hoxxes.app/tiketa",
  },
  {
    title: "Direct Contact",
    description:
      "Speak directly with our engineering or sales team for enterprise support and onboarding.",
    cta: "Contact Us",
    href: "mailto:info@hoxxes.com",
  },
];

export default function SupportPage() {
  return (
    <div className="relative bg-white text-slate-900 overflow-hidden">

      {/* HEADER */}
      <Header />

      {/* NOISE + AMBIENT */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-200/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] bg-slate-200/40 blur-[160px] rounded-full" />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Support Infrastructure
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
          Everything you need
          <span className="block text-slate-500">to stay operational</span>
        </h1>

        <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
          Documentation, ticketing, and direct communication channels —
          built for enterprise reliability inside Hoxxes SaaS ecosystem.
        </p>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-6">

          {supportOptions.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h2>

              <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-8 inline-flex px-5 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-slate-800 transition"
              >
                {item.cta}
              </Link>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CONTACT BLOCK */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-10 text-center">

          <h2 className="text-3xl font-semibold tracking-tight">
            Need immediate assistance?
          </h2>

          <p className="mt-4 text-slate-500">
            Our engineering team is available for urgent production issues.
          </p>

          <div className="mt-8 space-y-2 text-base text-slate-600">
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

          <Link
            href="/contact-sales"
            className="mt-8 inline-flex px-6 py-3 border rounded-full hover:bg-white transition"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <p>© {new Date().getFullYear()} Hoxxes</p>

          <div className="flex gap-6">
            <Link href="/software">Software</Link>
            <Link href="/hardware">Hardware</Link>
            <Link href="/docs">Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}