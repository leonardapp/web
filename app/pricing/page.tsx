"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Header from "@/components/Header";

/* PRICING LOGIC */
function getPricePerLocation(locations: number) {
  if (locations <= 2) return 499;
  if (locations <= 5) return 449;
  if (locations <= 9) return 399;
  return 349;
}

export default function PricingPage() {
  const [locations, setLocations] = useState(5);

  const price = useMemo(() => getPricePerLocation(locations), [locations]);
  const total = useMemo(() => price * locations, [price, locations]);

  const isEnterprise = locations >= 10;

  return (
    <div className="relative min-h-screen text-slate-900 overflow-hidden">

      <Header />
      {/* HERO */}
      <section className="text-center px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-20">
        
        <div className="text-[10px] sm:text-xs tracking-[0.35em] text-slate-400 uppercase">
  Pricing
</div>

<h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
  One platform.
  <span className="block text-slate-500">
    Pricing that scales with you.
  </span>
</h1>

<p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
  Transparent pricing designed to scale from single locations
  to enterprise operations.
</p>
<div className="mt-12 flex flex-col sm:flex-row justify-center gap-3">

  <Link
    href="/request-demo"
    className="px-6 py-3 rounded-full bg-black text-white 
            hover:bg-slate-800 transition text-sm font-medium"
    
  >
    Request Demo
  </Link>

  <Link
    href="#pricing-calculator"
    className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
  >
    Calculate Pricing
  </Link>

</div>
      </section>
      
      
        {/* PRICING MODELS */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
  <div className="text-center">

    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
Deployment Types
</div>

<h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
Pricing aligned with your operations.
</h2>

<p className="mt-5 text-slate-500 max-w-3xl mx-auto">
Choose the deployment model that best matches your operational requirements.
</p>

  </div>

  <div className="grid lg:grid-cols-3 gap-6 mt-14">

    {/* RESTAURANT */}
    <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
      <div className="text-xs uppercase tracking-[0.25em] text-emerald-600">
        Restaurant
      </div>

      <h3 className="mt-4 text-2xl font-semibold">
        Hospitality Operations
      </h3>

      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        <li>✓ POS</li>
        <li>✓ QR Ordering</li>
        <li>✓ Kitchen Display System</li>
        <li>✓ Kiosk Support</li>
        <li>✓ Delivery & Pickup</li>
      </ul>
    </div>

    {/* RETAIL */}
    <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl transition">
      <div className="text-xs uppercase tracking-[0.25em] text-emerald-600">
        Retail
      </div>

      <h3 className="mt-4 text-2xl font-semibold">
        Store Operations
      </h3>

      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        <li>✓ POS Infrastructure</li>
        <li>✓ Inventory Management</li>
        <li>✓ Workforce Management</li>
        <li>✓ Fiscalization</li>
        <li>✓ Analytics</li>
      </ul>
    </div>

    {/* ENTERPRISE */}
    <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl transition">
      <div className="text-xs uppercase tracking-[0.25em] text-emerald-600">
        Enterprise
      </div>

      <h3 className="mt-4 text-2xl font-semibold">
        Multi-Location Infrastructure
      </h3>

      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        <li>✓ HQ Control Center</li>
        <li>✓ Stock Transfers</li>
        <li>✓ Central Reporting</li>
        <li>✓ User Permissions</li>
        <li>✓ Priority Technical Support</li>
      </ul>
    </div>

  </div>
</section>
{/* INCLUDED WITH EVERY SUBSCRIPTION */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">

  <div className="text-center">
    <h2 className="text-2xl sm:text-3xl font-semibold">
      Everything included from day one.  
    </h2>
    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
Core platform capabilities are included with every subscription.
</p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

    {[
  "Cloud Platform",
  "Real-Time Synchronization",
  "Automatic Updates",
  "Fiscalization Support",
  "Technical Support",
  "Advanced Reporting",
  "User Permissions",
].map((item) => (
      <div
  key={item}
  className="
    p-6
    rounded-2xl
    border
    border-slate-200
    bg-white
    hover:border-emerald-300
    hover:shadow-lg
    transition-all
    duration-300
    flex
    items-center
    justify-center
    text-center
    min-h-[88px]
    font-medium
  "
>
  ✓ {item}
</div>
    ))}

  </div>

</section>


      {/* CALCULATOR SECTION */}
<section
  id="pricing-calculator"
  className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20"
>

  {/* HEADER */}
  <div className="text-center mb-12">
    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
      Pricing Calculator
    </div>

    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
      Estimate your infrastructure licensing cost.
    </h2>

    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
      Adjust the number of locations and instantly calculate your annual
      licensing cost.
    </p>
  </div>

  {/* CONTENT */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

    {/* LEFT */}
    <div className="space-y-6">
      <div>
        <div className="text-sm text-slate-500">
          Number of locations
        </div>

        <div className="text-3xl sm:text-4xl font-semibold mt-2">
          {locations}
        </div>
      </div>

      <input
        type="range"
        min="1"
        max="20"
        value={locations}
        onChange={(e) => setLocations(Number(e.target.value))}
        className="w-full accent-black"
      />

      <div className="text-xs text-slate-400">
        Drag to simulate your annual pricing instantly
      </div>
    </div>

    {/* RIGHT CARD */}
    <motion.div
      key={locations}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="border rounded-3xl p-5 sm:p-8 shadow-sm bg-white"
    >

      {isEnterprise && (
        <div className="text-xs uppercase text-emerald-600 mb-2">
          Enterprise Volume Pricing Active
        </div>
      )}

      <div className="text-xs uppercase tracking-widest text-slate-400">
        Pricing Tier
      </div>

      <div className="mt-3 text-3xl sm:text-4xl font-semibold">
        €{price}
        <span className="text-sm text-slate-400">
          {" "} / year / location
        </span>
      </div>

      <div className="mt-4 text-2xl font-semibold">
        €{total.toLocaleString()}
      </div>

      <div className="text-sm text-slate-500">
        Total yearly cost (excl. VAT)
      </div>

      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        <li>✔ Web POS & Android POS</li>
        <li>✔ QR Ordering & Online Ordering</li>
        <li>✔ Inventory & Workforce Management</li>
        <li>✔ Analytics & HQ Control Center</li>

        {isEnterprise && (
  <>
    <li>✔ 30-Day Free Trial</li>
    <li>✔ Priority Technical Support</li>
    <li>✔ Multi-location scaling tools</li>
  </>
)}
      </ul>

      <Link
        href="/request-demo"
        className="mt-6 w-full block text-center bg-black text-white py-3 rounded-full hover:bg-slate-800 transition"
      >
        Start Deployment
      </Link>

      <p className="text-xs text-slate-400 text-center mt-3">
        VAT applies depending on region
      </p>

    </motion.div>

  </div>

</section>

      {/* TIER GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">

    <div className="border rounded-2xl p-5">
      <div className="font-medium">1–2 Locations</div>
      <div className="text-sm text-slate-500">€499 / year</div>
    </div>

    <div className="border rounded-2xl p-5">
      <div className="font-medium">3–5 Locations</div>
      <div className="text-sm text-slate-500">€449 / year</div>
    </div>

    <div className="border rounded-2xl p-5">
      <div className="font-medium">6–9 Locations</div>
      <div className="text-sm text-slate-500">€399 / year</div>
    </div>

    <div className="border rounded-2xl p-5">
      <div className="font-medium">10+ Locations</div>
      <div className="text-sm text-slate-500">€349 / year</div>
    </div>

  </div>
</section>
      {/* OPTIONAL INFRASTRUCTURE */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">

  <div className="text-center">
    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
      Optional Platform Extensions
    </div>

    <h2 className="mt-4 text-3xl font-semibold">
      Extend your deployment.
    </h2>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">

    {[
  "Kitchen Display System",
  "Customer Display System",
  "Self-Service Kiosk",
  "Caller ID",
  "Payment Terminal Integration",
].map((item, i, arr) => (
  <div
    key={item}
    className={`rounded-2xl border border-slate-200 p-5 bg-slate-50
min-h-[120px] flex flex-col items-center justify-center text-center
${i === arr.length - 1 ? "col-span-2 md:col-span-1" : ""}
`}
    
  >
    <div className="text-sm font-medium">
      {item}
    </div>

    {item === "Payment Terminal Integration" && (
      <div className="mt-2 text-[10px] uppercase tracking-wider text-emerald-600 font-medium">
        Coming Soon
      </div>
    )}
  </div>
))}

  </div>

</section>
      

      {/* ADD-ONS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* SUPPORT */}
          <div className="border rounded-3xl p-6 sm:p-8 bg-slate-50 text-center">
            <h3 className="text-lg font-semibold">
              Operational Assistance
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              5 hours monthly support for operations & training
            </p>

            <div className="mt-4 text-xl font-semibold">
  €150 / month
</div>

            <Link
              href="/contact-sales"
              className="mt-5 w-full block text-center bg-black text-white py-2 rounded-full hover:bg-slate-800 transition"
            >
              Activate
            </Link>
          </div>

          {/* TOKEN */}
          <div className="border rounded-3xl p-6 sm:p-8 text-center">
            <h3 className="text-lg font-semibold">
              POS Payment Token
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Required for each kiosk or POS device handling payments
            </p>

            <div className="mt-4 text-sm font-medium">
              Payment terminal integration licensing
            </div>

            <Link
              href="/contact-sales"
              className="mt-5 w-full block text-center bg-black text-white py-2 rounded-full hover:bg-slate-800 transition"
            >
              Request Setup
            </Link>
          </div>
          
        </div>
        {/* import button from "react" */}
      </section>
{/* FINAL CTA */}
<section className="py-20 sm:py-28 text-center">

  <h2 className="text-3xl sm:text-4xl font-semibold">
  Ready to scale with HOXXES?
</h2>


<p className="mt-4 text-slate-500 max-w-2xl mx-auto">
  Deploy the infrastructure layer powering
modern hospitality and retail operations.
</p>

  <div className="mt-8 flex justify-center items-center gap-3 flex-wrap">

    <Link
      href="/request-demo"
      className="inline-flex w-auto items-center justify-center px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition"
    >
      Request Demo
    </Link>

    <Link
      href="/contact-sales"
      className="inline-flex w-auto items-center justify-center px-5 py-2 rounded-full border border-slate-300 text-sm font-medium hover:bg-black hover:text-white transition"
    >
      Contact Sales
    </Link>

  </div>

</section>
    

    </div>
  );
}
