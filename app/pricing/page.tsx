"use client";

import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "30 Days Free Trial",
    description:
      "Full access to the platform to evaluate all core capabilities.",
    features: [
      "Full Platform Access",
      "POS + QR Ordering",
      "Kitchen Display System",
      "Basic Analytics",
      "Email Support",
    ],
    cta: "Request Trial",
    href: "/request-demo",
  },
  {
    name: "Professional",
    price: "€500 + VAT / year",
    description:
      "Complete software suite for restaurants and hospitality businesses.",
    features: [
      "Android POS + Web POS",
      "Delivery & Pickup App",
      "Kiosk Self-Service",
      "Advanced Analytics",
      "Staff Management",
      "Custom Branding",
    ],
    cta: "Get Started",
    href: "/request-demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description:
      "Tailored deployments for multi-location and enterprise operations.",
    features: [
      "Multi-location HQ Control",
      "Dedicated Infrastructure",
      "Priority SLA Support",
      "Custom Integrations",
      "Advanced Access Control",
      "Hardware Rollout Planning",
    ],
    cta: "Contact Sales",
    href: "/contact-sales",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Pricing
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Transparent pricing for every stage.
        </h1>

        <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
          From single-location restaurants to enterprise chains,
          HOXXES scales with your business.
        </p>
      </section>

      {/* PLANS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-black bg-black text-white shadow-2xl"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-wider mb-6">
                  Recommended
                </div>
              )}

              <h2 className="text-2xl font-semibold">{plan.name}</h2>

              <div className="mt-4 text-3xl font-semibold">
                {plan.price}
              </div>

              <p
                className={`mt-4 text-sm leading-relaxed ${
                  plan.featured ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm ${
                      plan.featured
                        ? "text-slate-200"
                        : "text-slate-600"
                    }`}
                  >
                    • {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`mt-8 inline-flex w-full justify-center px-6 py-3 rounded-full font-medium transition ${
                  plan.featured
                    ? "bg-white text-black hover:bg-slate-100"
                    : "bg-black text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ENTERPRISE NOTE */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-10 md:p-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Enterprise deployments
          </h2>

          <p className="mt-4 text-slate-500 leading-relaxed max-w-3xl mx-auto">
            Includes centralized HQ management, dedicated infrastructure,
            custom integrations, and hardware deployment support.
          </p>

          <Link
            href="/contact-sales"
            className="mt-8 inline-flex px-6 py-3 bg-black text-white rounded-full"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}