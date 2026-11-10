"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const principles = [
  {
    title: "Reliability",
    desc: "Technology designed for dependable daily operations, with offline capabilities and synchronization when connectivity is restored.",
  },
  {
    title: "Enterprise Architecture",
    desc: "A connected platform built to support independent businesses, growing teams and multi-location operations.",
  },
  {
    title: "Operational Intelligence",
    desc: "Orders, payments and operational information connected across devices and locations in real time.",
  },
];

const platformAreas = [
  {
    number: "01",
    title: "Ordering & Commerce",
    desc: "POS, QR Ordering, Self-Service Kiosks and online ordering in one connected experience.",
  },
  {
    number: "02",
    title: "Payments Infrastructure",
    desc: "Integrated payment workflows connecting in-store and online business transactions.",
  },
  {
    number: "03",
    title: "Operations & Analytics",
    desc: "Centralized tools for managing daily operations, monitoring activity and accessing business insights.",
  },
  {
    number: "04",
    title: "Multi-Location Management",
    desc: "A unified operational environment for businesses managing multiple locations and teams.",
  },
];

const industries = [
  {
    title: "Restaurants",
    desc: "POS, QR Ordering, self-service kiosks, kitchen operations and connected guest experiences.",
  },
  {
    title: "Retail",
    desc: "Point of sale, inventory management and centralized business operations.",
  },
  {
    title: "Enterprise",
    desc: "Connected infrastructure for organizations managing multiple locations and business units.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 sm:pt-28 lg:pt-32 pb-20 text-center">
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
            HOXXES brings POS, QR Ordering, Self-Service Kiosks, Kitchen
            Display Systems and business operations together in one connected
            platform — helping restaurants, retailers and multi-location
            businesses operate more efficiently.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            

            <Link
              href="/software"
              className="rounded-full border border-[#88d21a] px-6 py-3 text-center text-sm font-medium text-[#26351a] transition hover:bg-[#88d21a] hover:text-[#17210c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Explore Platform
            </Link>

            <Link
              href="/hardware"
              className="rounded-full border border-[#88d21a] px-6 py-3 text-center text-sm font-medium text-[#26351a] transition hover:bg-[#88d21a] hover:text-[#17210c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Explore Hardware
            </Link>
          </div>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
            Our Story
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Building the future on proven foundations.
          </h2>

          <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our journey is driven by one goal: making business technology
            simpler, more connected and ready to grow.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 sm:p-10 rounded-[32px] border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-100/30 blur-3xl opacity-60" />

            <div className="relative text-center">
              <div className="text-xs uppercase tracking-[0.25em] text-emerald-600">
                HOXXES Vision
              </div>

              <h3 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
                One ecosystem.
                <br />
                Simpler operations.
              </h3>

              <div className="mt-6 flex justify-center">
                <div className="w-14 h-[2px] bg-emerald-500 rounded-full" />
              </div>

              <p className="mt-6 text-slate-600 leading-8">
                We believe business technology should work as one. Our vision
                is to connect ordering, payments, devices and operations into
                a unified infrastructure that makes everyday business
                management simpler.
              </p>
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <div className="text-left">
            <p className="text-lg text-slate-600 leading-9">
              HOXXES was founded in 2024 with a mission to bring modern,
              enterprise-grade commerce technology to businesses across the
              region.
            </p>

            <p className="mt-8 text-lg text-slate-600 leading-9">
              Built on proven technology foundations, HOXXES has evolved into
              a connected platform combining software, hardware and digital
              business tools for restaurants, retail businesses and
              multi-location operations.
            </p>

            <p className="mt-8 text-lg text-slate-600 leading-9">
              Our approach is focused on bringing essential business
              operations into one ecosystem — reducing fragmented workflows
              and creating a more connected way to manage daily activities.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-slate-200 pt-8">
              <div>
                <div className="text-2xl font-semibold text-slate-900">
                  2024
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  Founded
                </div>
              </div>

              <div>
                <div className="text-2xl font-semibold text-slate-900">
                  One Platform
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  Connected ecosystem
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
            Industries
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Built for different business models.
          </h2>

          <p className="mt-5 text-slate-500 max-w-2xl mx-auto">
            Flexible technology designed to support different operational
            needs, from individual businesses to multi-location organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {industries.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 border border-slate-200 rounded-3xl bg-white shadow-sm hover:shadow-xl transition"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-600">
                0{i + 1}
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-500 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
            What Drives Us
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Core Principles
          </h2>

          <p className="mt-5 text-slate-500 max-w-2xl mx-auto">
            The principles behind how we build, connect and support business
            technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-7 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="text-xs font-semibold tracking-widest text-emerald-600">
                0{i + 1}
              </div>

              <div className="font-semibold text-lg mt-4">
                {item.title}
              </div>

              <p className="text-sm text-slate-500 mt-3 leading-7">
                {item.desc}
              </p>
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

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            One infrastructure layer.
          </h2>

          <p className="mt-5 text-slate-500 max-w-3xl mx-auto leading-relaxed">
            HOXXES connects ordering, payments, business operations and
            multi-location management into one unified platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {platformAreas.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="min-h-[220px] flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-sm font-semibold text-emerald-600">
                {item.number}
              </div>

              <h3 className="mt-6 font-semibold text-lg">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-slate-500 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/software"
            className="inline-flex items-center justify-center rounded-full border border-[#88d21a] px-6 py-3 text-sm font-medium text-[#26351a] transition hover:bg-[#88d21a] hover:text-[#17210c]"
          >
            Explore the HOXXES Platform
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black text-white text-center py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.35em] text-[#88d21a]">
            Let's Connect
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
            Ready to modernize your operations?
          </h2>

          <p className="mt-4 text-slate-300 leading-relaxed">
            One connected platform for ordering, payments and business
            operations.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-sales"
              className="rounded-full bg-[#88d21a] px-6 py-3 text-center font-medium text-[#17210c] transition hover:scale-105 hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Contact Sales
            </Link>

          
          </div>
        </div>
      </section>
    </div>
  );
}