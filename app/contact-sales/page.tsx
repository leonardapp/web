"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { spacing, text, layout } from "@/app/design-system";
function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-sm text-slate-500 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} HOXXES</p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center">
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

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 flex flex-col overflow-x-hidden">

      {/* HEADER (GLOBAL SAAS) */}
      <Header />

      {/* HERO */}
      <section className="w-full px-6 pt-24 sm:pt-28 pb-14 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Contact Sales
        </div>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Talk to our sales team.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Discuss enterprise deployments, hardware packages,
          multi-location rollouts, and custom integrations.
        </p>
      </section>

      {/* CARD */}
      <section className="w-full px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 md:p-14 text-center shadow-sm">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            Enterprise consultation
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Our team will design a full Hoxxes ecosystem setup for your business —
            software, POS hardware, and automation workflows.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-8 sm:mt-10 space-y-2 text-sm sm:text-base text-slate-600">
            <div className="break-words">
              Email:{" "}
              <a
                href="mailto:info@hoxxes.com"
                className="font-medium text-black hover:underline"
              >
                info@hoxxes.com
              </a>
            </div>

            <div>
              Phone:{" "}
              <a
                href="tel:+38348106060"
                className="font-medium text-black hover:underline"
              >
                +383 48 10 60 60
              </a>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            
            <a
              href="mailto:info@hoxxes.com"
              className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-slate-800 transition text-center"
            >
              Email Sales
            </a>

            <Link
              href="/request-demo"
              className="w-full sm:w-auto px-6 py-3 border border-slate-300 rounded-full text-sm font-medium hover:bg-black hover:text-white transition text-center"
            >
              Request Demo
            </Link>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}