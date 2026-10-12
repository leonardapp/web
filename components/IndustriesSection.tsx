"use client";

import { useState } from "react";

const industries = [
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

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState("All Businesses");

  return (
    <section className="bg-transparent px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#52820f]">
            Solutions for your business
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#17210c] sm:text-4xl md:text-5xl">
            Built for the way you do business.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            From restaurants and cafés to bakeries and retail, HOXXES brings
            your daily operations together in one connected platform.
          </p>
        </div>

        <div
          className="mx-auto mt-7 flex max-w-5xl flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-2.5"
          aria-label="Business categories"
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
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 sm:px-5 sm:py-2.5 sm:text-base",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2",
                  isActive
                    ? "border-[#88d21a] bg-[#88d21a] text-[#17210c]"
                    : "border-slate-200 bg-[#f7f8f5] text-slate-700 hover:border-[#88d21a]/60 hover:bg-[#f5fce9] hover:text-[#52820f]",
                ].join(" ")}
              >
                {industry}
              </button>
            );
          })}
        </div>

        <p
          className="mt-4 text-center text-xs text-slate-400"
          aria-live="polite"
        >
          {activeIndustry === "All Businesses"
            ? "Explore the HOXXES platform for your type of business."
            : `HOXXES solutions for ${activeIndustry.toLowerCase()} businesses.`}
        </p>
      </div>
    </section>
  );
}
