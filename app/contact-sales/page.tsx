"use client";

import Link from "next/link";

export default function ContactSalesPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Contact Sales
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Talk to our sales team.
        </h1>

        <p className="mt-6 text-lg text-slate-500 leading-relaxed">
          Discuss enterprise deployments, hardware packages,
          multi-location rollouts, and custom integrations.
        </p>
      </section>

      {/* CONTACT CARD */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 md:p-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Enterprise consultation
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-500 leading-relaxed">
            Our team will review your operational requirements and recommend
            the best software and hardware configuration for your business.
          </p>

          <div className="mt-10 space-y-3 text-base">
            <div>
              Email:{" "}
              <a
                href="mailto:info@hoxxes.com"
                className="font-medium hover:underline"
              >
                info@hoxxes.com
              </a>
            </div>

            <div>
              Phone:{" "}
              <a
                href="tel:+38348106060"
                className="font-medium hover:underline"
              >
                +383 48 10 60 60
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@hoxxes.com"
              className="px-6 py-3 bg-black text-white rounded-full"
            >
              Email Sales
            </a>

            <Link
              href="/request-demo"
              className="px-6 py-3 border rounded-full"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}