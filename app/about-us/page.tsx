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

            <Link href="/software" onClick={() => setMenuOpen(false)}>
              Software
            </Link>
            <Link href="/hardware" onClick={() => setMenuOpen(false)}>
              Hardware
            </Link>
            <Link href="/support" onClick={() => setMenuOpen(false)}>
              Support
            </Link>
            <Link href="/contact-sales" onClick={() => setMenuOpen(false)}>
              Contact Sales
            </Link>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo size="md" />

        <nav className="hidden md:flex gap-6 text-sm text-slate-500">
          <Link href="/software">Software</Link>
          <Link href="/hardware">Hardware</Link>
          <Link href="/support">Support</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact-sales"
            className="px-4 py-2 bg-black text-white rounded-full text-sm"
          >
            Contact Sales
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl"
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
          <Link href="/software">Software</Link>
          <Link href="/hardware">Hardware</Link>
          <Link href="/support">Support</Link>
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-slate-400">
          About HOXXES
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight">
          Building the Operating System for Modern Hospitality
        </h1>

        <p className="mt-6 text-lg text-slate-500 leading-relaxed">
          HOXXES is an enterprise Restaurant & Retail Operating System designed
          to unify POS, kitchen operations, self-service ordering, and business
          intelligence into one seamless platform.
        </p>
      </section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            We help restaurants and retail businesses operate faster, smarter,
            and more efficiently by eliminating fragmented systems and replacing
            them with one unified platform.
          </p>
        </motion.div>

        <div className="p-10 border rounded-2xl bg-slate-50">
          <div className="text-sm text-slate-500">Core Philosophy</div>
          <div className="mt-4 text-lg font-medium">
            Simplicity. Reliability. Scale.
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10">What We Stand For</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Reliability First",
              desc: "Systems designed to work even offline.",
            },
            {
              title: "Enterprise Ready",
              desc: "Built for single stores and chains.",
            },
            {
              title: "Real-Time Everything",
              desc: "Instant sync across devices.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border rounded-2xl hover:shadow-sm transition"
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

        <p className="text-slate-600 leading-relaxed mb-4">
          HOXXES started with a simple problem: systems were slow and disconnected.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-20">
        <h2 className="text-3xl font-semibold">
          Ready to modernize your operations?
        </h2>

        <Link
          href="/contact-sales"
          className="mt-8 inline-block px-6 py-3 rounded-full bg-white text-black font-medium"
        >
          Contact Sales
        </Link>
      </section>

      <Footer />
    </div>
  );
}