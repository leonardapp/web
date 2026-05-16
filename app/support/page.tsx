"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const supportOptions = [
  {
    title: "Documentation Center",
    description:
      "Step-by-step technical guides for all modules, hardware devices, and integrations inside the Hoxxes ecosystem.",
    cta: "Open Docs",
    href: "https://hoxxes.app/udhezime",
  },
  {
    title: "Ticketing System",
    description:
      "Submit technical issues, track progress, and receive real-time email notifications for every update.",
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
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Support Infrastructure
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
          Everything you need
          <span className="block text-slate-500">
            to stay operational
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
          Documentation, ticketing, and direct communication channels —
          built for enterprise reliability inside Hoxxes SaaS ecosystem.
        </p>
      </section>

      {/* OPTIONS */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-8">

          {supportOptions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h2>

              <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>

              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-8 inline-flex px-5 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-slate-800 transition"
              >
                {item.cta}
              </a>
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

          <div className="mt-8 space-y-2 text-base">
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
    </div>
  );
}