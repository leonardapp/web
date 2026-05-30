"use client";

import Link from "next/link";
import Header from "@/components/Header";

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900 overflow-x-hidden">

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="flex-1">

        {/* HERO */}
        <section className="w-full px-6 pt-24 sm:pt-28 lg:pt-32 pb-20 text-center">

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
        <section className="w-full px-6 pb-16 sm:pb-24">

          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md p-6 sm:p-10 md:p-14 text-center shadow-sm">

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Enterprise consultation
            </h2>

            <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Our team will design a full Hoxxes ecosystem setup for your business —
              software, POS hardware, and automation workflows tailored for scale.
            </p>

            {/* CONTACT */}
            <div className="mt-8 sm:mt-10 space-y-2 text-sm sm:text-base text-slate-600">

              <div>
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

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">

              <a
                href="mailto:info@hoxxes.com"
                className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-slate-800 transition"
              >
                Email Sales
              </a>

              <Link
                href="/request-demo"
                className="px-6 py-3 border border-slate-300 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Request Demo
              </Link>

            </div>

          </div>
        </section>
        <section className="py-24 sm:py-32 text-center px-6">

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
    Ready to deploy HOXXES?
  </h2>

  <p className="mt-4 text-slate-500">
    Speak with our team about software, hardware and enterprise infrastructure.
  </p>

  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">

    <a
      href="mailto:info@hoxxes.com"
      className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition"
    >
      Email Sales
    </a>

    <Link
      href="/request-demo"
      className="px-6 py-3 rounded-full border border-slate-300 text-sm font-medium hover:bg-black hover:text-white transition"
    >
      Request Demo
    </Link>

  </div>

</section>

      </main>

      {/* GLOBAL FOOTER HANDLED IN LAYOUT */}

    </div>
  );
}