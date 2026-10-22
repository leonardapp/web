"use client";

import { useState } from "react";

type Industry =
  | "All Businesses"
  | "Restaurant"
  | "Café"
  | "Bakery"
  | "Patisserie"
  | "Fast Food"
  | "Pizzeria"
  | "Ice Cream Shop"
  | "Food Truck"
  | "Grocery"
  | "Retail";

type ModuleRecommendation = {
  id: string;
  title: string;
  description: string;
};

const industries: Industry[] = [
  "All Businesses",
  "Restaurant",
  "Café",
  "Bakery",
  "Patisserie",
  "Fast Food",
  "Pizzeria",
  "Ice Cream Shop",
  "Food Truck",
  "Grocery",
  "Retail",
];

// Recommendation links target the corresponding module-card IDs in SoftwarePage.
// These are suggested starting points, not claims that every feature is required
// or available in every deployment.
const recommendations: Record<Industry, ModuleRecommendation[]> = {
  "All Businesses": [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Manage sales, orders and day-to-day transactions.",
    },
    {
      id: "qr-ordering",
      title: "QR Ordering",
      description: "Give customers a digital way to browse and order.",
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description: "Offer customers a branded online ordering page.",
    },
    {
      id: "kiosk",
      title: "Self-Service Kiosk",
      description: "Let customers place orders independently.",
    },
    {
      id: "kds",
      title: "Kitchen Display",
      description: "Organize incoming orders for kitchen teams.",
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Cloud",
      description: "Review business activity and performance indicators.",
    },
  ],
  Restaurant: [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Manage dine-in, takeaway and delivery workflows.",
    },
    {
      id: "operations-hub",
      title: "Operations Hub",
      description: "Support staff, managers and daily service operations.",
    },
    {
      id: "qr-ordering",
      title: "QR Ordering",
      description: "Let guests browse and order from the table.",
    },
    {
      id: "kds",
      title: "Kitchen Display",
      description: "Keep kitchen orders organized and visible.",
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description: "Accept pickup and delivery orders online.",
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Cloud",
      description: "Review sales and operational performance.",
    },
  ],
  Café: [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Handle counter sales and customer orders.",
    },
    {
      id: "qr-ordering",
      title: "QR Ordering",
      description: "Make menu browsing and table ordering easier.",
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description: "Offer a branded page for takeaway orders.",
    },
    {
      id: "promotions",
      title: "Promotions Automation",
      description: "Schedule configured offers and campaigns.",
    },
    {
      id: "workforce-management",
      title: "Workforce Management",
      description: "Record attendance and review employee records.",
    },
  ],
  Bakery: [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Manage product sales and daily transactions.",
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description: "Let customers order products online for pickup.",
    },
    {
      id: "kiosk",
      title: "Self-Service Kiosk",
      description: "Offer self-service ordering where it fits your setup.",
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Cloud",
      description: "Review sales and business performance.",
    },
  ],
  Patisserie: [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Handle counter sales and product orders.",
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description: "Display products in a branded online storefront.",
    },
    {
      id: "qr-ordering",
      title: "QR Ordering",
      description: "Provide digital menu access and ordering.",
    },
    {
      id: "promotions",
      title: "Promotions Automation",
      description: "Schedule offers for selected products or categories.",
    },
  ],
  "Fast Food": [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Keep counter, takeaway and delivery orders together.",
    },
    {
      id: "kiosk",
      title: "Self-Service Kiosk",
      description: "Let customers build and submit their own orders.",
    },
    {
      id: "kds",
      title: "Kitchen Display",
      description: "Send orders into an organized kitchen workflow.",
    },
    {
      id: "delivery-integrations",
      title: "Delivery Integrations",
      description: "Bring supported delivery orders into one workflow.",
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description: "Accept direct orders through your branded page.",
    },
    {
      id: "payment-integration",
      title: "Payment Integration",
      description: "Explore compatible payment-terminal options.",
    },
  ],
  Pizzeria: [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Manage orders across dine-in, pickup and delivery.",
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description: "Offer direct online ordering for pickup or delivery.",
    },
    {
      id: "delivery-integrations",
      title: "Delivery Integrations",
      description: "Bring supported delivery-platform orders together.",
    },
    {
      id: "kds",
      title: "Kitchen Display",
      description: "Help the kitchen organize and track incoming orders.",
    },
    {
      id: "qr-ordering",
      title: "QR Ordering",
      description: "Let guests order digitally from their table.",
    },
    {
      id: "promotions",
      title: "Promotions Automation",
      description: "Schedule configured offers and campaigns.",
    },
  ],
  "Ice Cream Shop": [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Manage counter sales and daily transactions.",
    },
    {
      id: "kiosk",
      title: "Self-Service Kiosk",
      description: "Offer customers another way to place an order.",
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description: "Share a branded online ordering experience.",
    },
    {
      id: "promotions",
      title: "Promotions Automation",
      description: "Schedule relevant offers when configured.",
    },
  ],
  "Food Truck": [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Handle counter orders and sales in one POS workflow.",
    },
    {
      id: "online-ordering",
      title: "Online Ordering",
      description: "Give customers a direct ordering link.",
    },
    {
      id: "payment-integration",
      title: "Payment Integration",
      description: "Review supported terminal options for your setup.",
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Cloud",
      description: "Review sales and key business indicators.",
    },
  ],
  Grocery: [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Manage point-of-sale transactions and sales activity.",
    },
    {
      id: "hq-control-center",
      title: "HQ Control Center",
      description: "Coordinate products and oversight across locations.",
    },
    {
      id: "workforce-management",
      title: "Workforce Management",
      description: "Review employee attendance records and status.",
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Cloud",
      description: "Review business performance from dashboard views.",
    },
  ],
  Retail: [
    {
      id: "pos",
      title: "Restaurant POS",
      description: "Manage point-of-sale transactions and sales activity.",
    },
    {
      id: "hq-control-center",
      title: "HQ Control Center",
      description: "Support centralized oversight across locations.",
    },
    {
      id: "workforce-management",
      title: "Workforce Management",
      description: "Track employee attendance and records.",
    },
    {
      id: "promotions",
      title: "Promotions Automation",
      description: "Coordinate configured promotions and campaigns.",
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Cloud",
      description: "Review sales and business performance indicators.",
    },
  ],
};

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("All Businesses");
  const activeRecommendations = recommendations[activeIndustry];

  return (
    <section
      aria-labelledby="industries-heading"
      className="bg-transparent px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRODUCTION */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#52820f] sm:text-xs">
            Solutions for Every Industry
          </p>

          <h2
            id="industries-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-[#17210c] sm:text-4xl md:text-5xl"
          >
            Technology that fits the way you work.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            From restaurants and cafés to bakeries, food-service businesses
            and retail, HOXXES connects the tools you need to manage orders,
            serve customers and oversee daily operations.
          </p>
        </div>

        {/* INDUSTRY SELECTOR */}
        <div
          role="group"
          aria-label="Select your business industry"
          className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-2.5"
        >
          {industries.map((industry) => {
            const isActive = activeIndustry === industry;

            return (
              <button
                key={industry}
                type="button"
                onClick={() => setActiveIndustry(industry)}
                aria-pressed={isActive}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium",
                  "transition-colors duration-200 sm:px-5 sm:py-2.5 sm:text-base",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[#88d21a] focus-visible:ring-offset-2",
                  isActive
                    ? "border-[#88d21a] bg-[#88d21a] text-[#17210c]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-[#88d21a]/60 hover:bg-[#f5fce9] hover:text-[#52820f]",
                ].join(" ")}
              >
                {industry}
              </button>
            );
          })}
        </div>

        {/* DYNAMIC MODULE RECOMMENDATIONS */}
        <div
          className="mt-10 border-t border-slate-200/80 pt-8 sm:mt-12 sm:pt-10"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="mb-6 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#52820f] sm:text-xs">
              Recommended modules
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#17210c] sm:text-2xl">
              {activeIndustry === "All Businesses"
                ? "Explore the HOXXES platform"
                : `Suggested for ${activeIndustry}`}
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Select a module to jump to its details and explore how it can fit
              into your workflow.
            </p>
          </div>

          <div className="grid items-stretch gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {activeRecommendations.map((module) => (
              <a
                key={module.id}
                href={`#${module.id}`}
                className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,.035)] transition duration-200 hover:-translate-y-0.5 hover:border-[#88d21a]/70 hover:shadow-[0_12px_28px_rgba(15,23,42,.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2 sm:p-6"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-slate-900 sm:text-base">
                    {module.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-6 text-slate-500">
                    {module.description}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#52820f]">
                    Explore module <span aria-hidden="true">↗</span>
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5fce9] text-[#52820f] transition group-hover:bg-[#88d21a] group-hover:text-[#17210c]"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
