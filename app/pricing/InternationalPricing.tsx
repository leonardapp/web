import Link from "next/link";
import Header from "@/components/Header";

export default function InternationalPricing() {
  return (
    <main className="relative overflow-hidden text-slate-900">
      <Header />

      <section className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-8 w-8 text-slate-600"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
          </svg>
        </div>

        <div className="text-xs uppercase tracking-[0.3em] text-emerald-600">
          Regional Pricing
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Looking for pricing
          <span className="block text-slate-500">in your region?</span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          HOXXES pricing and commercial terms may vary by market. For pricing
          information, availability, and the options applicable to your region,
          please contact our Sales Team.
        </p>

        <Link
          href="/contact-sales"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-[#88d21a] px-7 py-3 text-sm font-semibold text-[#17210c] shadow-sm transition hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
        >
          Contact Sales Team
          <span aria-hidden="true" className="ml-2">↗</span>
        </Link>

        <p className="mt-5 text-xs text-slate-400">
          Our team will help you find the right solution for your market.
        </p>
      </section>
    </main>
  );
}
