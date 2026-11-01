
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const supportOptions = [
  {
    number: "01",
    title: "Knowledge & Documentation",
    description:
      "Explore PDF guides, step-by-step instructions, and practical resources to help you use the HOXXES platform more efficiently and get the most out of its features.",
    cta: "Open Docs",
    href: "/docs",
  },
  {
    number: "02",
    title: "Customer Assistance",
    description:
      "Submit assistance requests, track their status, and follow updates through the HOXXES ticketing system.",
    cta: "Open Tickets",
    href: "/ticket",
  },
  {
    number: "03",
    title: "Contact Our Team",
    description:
      "Get in touch with our team for business inquiries, onboarding discussions, or assistance with your HOXXES solution.",
    cta: "Contact Us",
    href: "mailto:info@hoxxes.com",
  },
];

export default function SupportPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-transparent text-slate-900">
      <Header />

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-24 text-center sm:pb-24 sm:pt-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-700">
            Customer Knowledge Center
          </div>

          <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Get more out of your
            <span className="block text-slate-500">
              HOXXES platform.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg md:text-xl">
            Explore practical guides, learn how to use your tools effectively,
            and discover how to get the most out of the HOXXES ecosystem.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/docs"
              className="rounded-full bg-[#88d21a] px-7 py-3.5 text-center text-sm font-medium text-[#17210c] shadow-sm transition duration-200 hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Open Docs
            </Link>

            <Link
              href="/ticket"
              className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-center text-sm font-medium text-slate-800 transition duration-200 hover:border-[#88d21a] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Create a Ticket
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SUPPORT OPTIONS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 sm:pb-32">
        <div className="mb-10 text-center sm:mb-14">
          <div className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-700">
            How can we help?
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Everything you need, in one place.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Find the right resources, get assistance, or connect with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportOptions.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-8"
            >
              {/* Subtle hover effect */}
              <div className="pointer-events-none absolute inset-0 bg-emerald-100/0 transition duration-300 group-hover:bg-emerald-50/60" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-widest text-emerald-700">
                    {item.number}
                  </span>

                  <div className="h-2 w-2 rounded-full bg-[#88d21a]" />
                </div>

                <h2 className="mt-7 text-xl font-semibold tracking-tight sm:text-2xl">
                  {item.title}
                </h2>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#88d21a] px-5 py-3 text-center text-sm font-medium text-[#17210c] transition duration-200 hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* KNOWLEDGE CENTER */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10 md:p-14"
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#88d21a]/10 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-14">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-700">
                Learn. Optimize. Grow.
              </div>

              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                Make the most of your platform.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Discover how to use HOXXES features, understand your workflows,
                and improve the way your business operates with practical
                documentation and user guides.
              </p>

              <div className="mt-8">
                <Link
                  href="/docs"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#88d21a] px-6 py-3 text-sm font-medium text-[#17210c] transition duration-200 hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
                >
                  Browse the Guides
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#88d21a]/15">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6 text-emerald-800"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 3.75h7l4.25 4.25v12.25H7a2 2 0 0 1-2-2V5.75a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 3.75V8h4.25M8.5 12h7M8.5 15.5h7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold tracking-tight">
                      Documentation Library
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Practical guides for your workflows
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px bg-slate-100" />

                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#88d21a]" />
                    <p>Platform usage guides</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#88d21a]" />
                    <p>Feature walkthroughs</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#88d21a]" />
                    <p>Operational instructions</p>
                  </div>
                </div>

                <p className="mt-6 border-t border-slate-100 pt-5 text-xs leading-relaxed text-slate-400">
                  Documentation availability depends on the resources published
                  in the Knowledge Center.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TECHNICAL SUPPORT / CONTACT */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10 md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-slate-50/70" />

          <div className="relative">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-700">
              Need further assistance?
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              We are here to help.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              If you need assistance beyond the available documentation, our
              team is available through our support channels.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-600">
              <div>
                Email:{" "}
                <a
                  className="font-medium text-slate-900 transition hover:text-emerald-700 hover:underline"
                  href="mailto:info@hoxxes.com"
                >
                  info@hoxxes.com
                </a>
              </div>

              <div>
                Phone:{" "}
                <a
                  className="font-medium text-slate-900 transition hover:text-emerald-700 hover:underline"
                  href="tel:+38348106060"
                >
                  +383 48 10 60 60
                </a>
              </div>
            </div>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/ticket"
                className="rounded-full bg-[#88d21a] px-7 py-3.5 text-center text-sm font-medium text-[#17210c] transition duration-200 hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
              >
                Create a Ticket
              </Link>

              <Link
                href="/contact-sales"
                className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-center text-sm font-medium text-slate-800 transition duration-200 hover:border-[#88d21a] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
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
