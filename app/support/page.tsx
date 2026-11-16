"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const supportOptions = [
  {
    number: "01",
    title: "Knowledge & Documentation",
    description:
      "Explore PDF guides, step-by-step instructions, and practical resources to help you use the HOXXES platform more efficiently.",
    cta: "Open Docs",
    href: "/docs",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M7 3.75h7l4.25 4.25v12.25H7a2 2 0 0 1-2-2V5.75a2 2 0 0 1 2-2Z" />
        <path d="M14 3.75V8h4.25M8.5 12h7M8.5 15.5h7" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Customer Assistance",
    description:
      "Submit assistance requests, track their status, and follow updates through the HOXXES ticketing system.",
    cta: "Open Tickets",
    href: "/ticket",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M4 5.75A2.75 2.75 0 0 1 6.75 3h10.5A2.75 2.75 0 0 1 20 5.75v2.1a2.5 2.5 0 0 0 0 4.3v2.1A2.75 2.75 0 0 1 17.25 17h-10.5A2.75 2.75 0 0 1 4 14.25v-2.1a2.5 2.5 0 0 0 0-4.3v-2.1Z" />
        <path d="M9 7.5h6M9 12.5h6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Contact Our Team",
    description:
      "Connect with our team for business inquiries, onboarding discussions, or assistance with your HOXXES solution.",
    cta: "Contact Us",
    href: "mailto:info@hoxxes.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M4 18.5v-1.25A4.25 4.25 0 0 1 8.25 13h2.5A4.25 4.25 0 0 1 15 17.25v1.25" />
        <circle cx="9.5" cy="7.5" r="3.5" />
        <path d="M16 4.5a3.5 3.5 0 0 1 0 6.8M17 13.25a4.25 4.25 0 0 1 3 4.05v1.2" />
      </svg>
    ),
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08 },
  }),
};

export default function SupportPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="relative z-10 overflow-hidden px-6 pb-16 pt-28 text-center sm:pb-20 sm:pt-32 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-10 h-72 w-[min(90vw,760px)] -translate-x-1/2 rounded-full bg-[#88d21a]/[0.07] blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#88d21a]/25 bg-[#88d21a]/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#88d21a]" />
            HOXXES Support
          </div>

          <h1 className="mt-7 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
            Get more out of your
            <span className="mt-2 block text-slate-500">HOXXES platform.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base md:text-lg">
            Find the guidance you need, get help with your requests, and connect
            with our team whenever you need assistance.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#88d21a] px-7 py-3 text-sm font-semibold text-[#17210c] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#76b915] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Explore Documentation
            </Link>
            <Link
              href="/ticket"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-[#88d21a] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Create a Ticket
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SUPPORT OPTIONS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-4 sm:pb-24">
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700 sm:text-xs">
            How can we help?
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Support, your way.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Choose the right place to find answers or get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6">
          {supportOptions.map((item, index) => (
            <motion.article
              key={item.number}
              custom={index}
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[26px] border border-slate-200/90 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.035)] transition-shadow duration-300 hover:border-[#88d21a]/50 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] sm:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#88d21a]/[0.07] blur-2xl transition duration-300 group-hover:bg-[#88d21a]/[0.13]"
              />

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                  {item.number}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#88d21a]/[0.13] text-emerald-800 transition duration-300 group-hover:scale-105 group-hover:bg-[#88d21a]/20">
                  {item.icon}
                </div>
              </div>

              <div className="relative mt-7">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-[21px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>

              <div className="relative mt-auto flex justify-center pt-8">
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#88d21a] px-6 py-3 text-center text-sm font-semibold text-[#17210c] transition duration-200 hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
                >
                  {item.cta}
                  <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#88d21a]/[0.12] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#88d21a]/[0.08] blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700 sm:text-xs">
              Need further assistance?
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              We are here to help.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              If you need help beyond our documentation or ticketing system,
              you can reach our team directly.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:info@hoxxes.com"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-[#88d21a] hover:text-emerald-800"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4" aria-hidden="true">
                  <path d="M3.5 6.5h17v11h-17z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                info@hoxxes.com
              </a>
              <a
                href="tel:+38348106060"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-[#88d21a] hover:text-emerald-800"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M7 3.5h3l1.5 4-2 1.5a15 15 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5 6a2 2 0 0 1 2-2.5Z" />
                </svg>
                +383 48 10 60 60
              </a>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/ticket"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#88d21a] px-7 py-3.5 text-sm font-semibold text-[#17210c] transition duration-200 hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
              >
                Create a Ticket
              </Link>
              <Link
                href="/contact-sales"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition duration-200 hover:border-[#88d21a] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
