"use client";

import Link from "next/link";
import { useState } from "react";

import Header from "@/components/Header";


export default function SoftwarePage() {
  const [selectedModule, setSelectedModule] = useState<any>(null);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-24 sm:pt-28 lg:pt-32 pb-32 sm:pb-20 text-center">
       <div className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-slate-400">
  Restaurant • Retail • Enterprise
</div>

<h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
  Built for restaurants,
  <span className="block text-slate-500 mt-2">
    retail and enterprise.
  </span>
</h1>

<p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed">
  Built for restaurants, retail businesses and multi-location operations.
  HOXXES unifies ordering, payments, workforce, inventory and analytics
  into a single operating system.
</p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
                   
          <Link
            href="/request-demo"
            className="px-6 py-3 rounded-full bg-black text-white 
            hover:bg-slate-800 transition text-sm font-medium"
          >
            Request Demo
          </Link>

          <Link
            href="/hardware"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            Explore Hardware
          </Link>

        </div>
        </section> 
        <section className="pb-24 sm:pb-32">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Restaurant POS
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Manage tables, orders and payments.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Real-time table management, takeaway orders, delivery workflows
        and payment processing from a single interface.
      </p>
    </div>

    <div className="relative mt-10">

  {/* FOTO REALE */}
  <div className="overflow-hidden rounded-[32px]">
    <img
      src="https://hoxxes.app/images/pos-operations.png"
      alt="Restaurant POS Operations"
      className="w-full object-cover"
    />
  </div>

  {/* SCREENSHOT FLOATING */}
  {/* FLOATING SCREENSHOT */}
<div
  className="
    absolute
    -right-2 sm:-right-6 lg:-right-10
    -bottom-2 sm:-bottom-6 lg:-bottom-10
    w-[55%] sm:w-[48%] lg:w-[42%]
    rounded-[24px]
    overflow-hidden
    shadow-[0_25px_60px_rgba(0,0,0,0.25)]
    z-10
  "
>
  <img
    src="https://hoxxes.app/images/pos2.png"
    alt="HOXXES POS Software"
    className="w-full"
  />
</div>

</div>

  </div>
</section>

{/* DIGITAL MENU */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Digital Menu
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        QR ordering made simple.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Customers scan a QR code, browse the menu, customize products
        and place orders directly from their mobile device.
      </p>
    </div>

    <div className="relative">

      {/* REAL IMAGE */}
      <img
        src="https://hoxxes.app/images/qr-ordering.png"
        alt="HOXXES QR Ordering"
        className="w-full rounded-[32px]"
      />

      {/* FLOATING MOBILE SCREENSHOT */}
<div
  className="
    absolute
    -right-2 sm:-right-6 lg:-right-10
    -bottom-2 sm:-bottom-6 lg:-bottom-10
    w-[28%] sm:w-[24%] lg:w-[18%]
    rounded-3xl
    overflow-hidden
    shadow-2xl
    z-10
  "
>
  <img
    src="https://hoxxes.app/images/qr-menu.jpg"
    alt="HOXXES Digital Menu"
    className="w-full"
  />
</div>

    </div>

    <div className="mt-12 flex flex-wrap justify-center gap-4 text-slate-600">
      <div>✓ QR Ordering</div>
      <div>✓ Contactless Experience</div>
      <div>✓ Real-Time Menu Updates</div>
      <div>✓ Multi-Language Support</div>
      <div>✓ Integrated Payments</div>
    </div>

  </div>
</section>
<section className="py-24 sm:py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Kitchen Display System
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Every order. Every station. In real time.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Orders flow directly from POS, QR and online channels into the
        kitchen, helping teams prepare, prioritize and deliver faster.
      </p>
    </div>

    <div className="relative">
  <img
    src="https://hoxxes.app/images/kitchen-display-system.png"
    alt="HOXXES Kitchen Display System"
    className="w-full rounded-[32px]"
  />

  {/* FLOATING SCREENSHOT */}
<div
  className="
    absolute
    -left-2 sm:-left-6 lg:-left-10
    -bottom-2 sm:-bottom-6 lg:-bottom-10
    w-[55%] sm:w-[48%] lg:w-[42%]
    rounded-[24px]
    overflow-hidden
    shadow-[0_25px_60px_rgba(0,0,0,0.25)]
    z-10
  "
>
  <img
    src="https://hoxxes.app/images/kds.png"
    alt="HOXXES KDS"
    className="w-full"
  />
</div>
</div>

  </div>
</section>

{/* WAITER APP */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Waiter App
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Designed for modern service teams.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Waiters can manage tables, create orders, send items directly
        to the kitchen and process payments from a mobile device.
      </p>
    </div>

    <div className="relative">

      {/* REAL IMAGE */}
      <img
        src="https://hoxxes.app/images/waiter-operations.png"
        alt="HOXXES Waiter Operations"
        className="w-full rounded-[32px]"
      />

      {/* FLOATING SCREENSHOT */}
<div
  className="
    absolute
    -right-2 sm:-right-6 lg:-right-10
    -bottom-2 sm:-bottom-6 lg:-bottom-10
    w-[28%] sm:w-[24%] lg:w-[18%]
    rounded-3xl
    overflow-hidden
    shadow-2xl
    z-10
  "
>
  <img
    src="https://hoxxes.app/images/waiter-app.jpg"
    alt="HOXXES Waiter App"
    className="w-full"
  />
</div>

    </div>

  </div>
</section>
        {/* INCLUDED WITH EVERY DEPLOYMENT */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Included With Every Deployment
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        One platform. Every channel.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Every Hoxxes deployment includes ordering,
        commerce, customer engagement and operational
        management capabilities from a unified platform.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-4">
          Ordering Infrastructure
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div>✓ Web POS</div>
          <div>✓ Android POS (Offline Ready)</div>
          <div>✓ QR Ordering</div>
          <div>✓ Android App</div>
          <div>✓ iOS App</div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-4">
          Commerce Infrastructure
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div>✓ Delivery & Pickup</div>
          <div>✓ E-Shop</div>
          <div>✓ Membership</div>
          <div>✓ Loyalty</div>
          <div>✓ Wallet & Vouchers</div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-4">
          Operations Infrastructure
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div>✓ Analytics Dashboard</div>
          <div>✓ Web Backoffice</div>
          <div>✓ Inventory Management</div>
          <div>✓ Workforce Management</div>
          <div>✓ Multi-Location Control</div>
        </div>
      </div>

    </div>

  </div>
</section>
   {/* ANALYTICS DASHBOARD */}
<section className="py-24 sm:py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Analytics Cloud
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Complete operational visibility.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Monitor sales, inventory, workforce and multi-location performance
        from a unified dashboard.
      </p>
    </div>

    <div className="relative">

      {/* REAL IMAGE */}
<img
  src="https://hoxxes.app/images/analytics-dashboard.png"
  alt="HOXXES Analytics"
  className="w-full rounded-[32px]"
/>

{/* FLOATING DASHBOARD */}
<div
  className="
    absolute
    -left-2 sm:-left-6 lg:-left-10
    -bottom-2 sm:-bottom-6 lg:-bottom-10
    w-[55%] sm:w-[48%] lg:w-[42%]
    rounded-3xl
    overflow-hidden
    shadow-2xl
    z-10
  "
>
  <img
    src="https://hoxxes.app/images/dashboard-overview.png"
    alt="HOXXES Analytics Dashboard"
    className="w-full"
  />
</div>

    </div>

  </div>
</section>
{/* ORDERING CHANNELS */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Ordering Channels
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Reach customers everywhere.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Every channel connected to the same infrastructure,
        inventory, pricing and reporting system.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

      {[
  "Restaurant POS",
  "QR Ordering",
  "Waiter App",
  "Kitchen Display System",
  "Self-Service Kiosk",
  "Online Ordering",
  "Delivery & Pickup",
  "Customer Wallet"
].map((item) => (
  <div
    key={item}
    className="h-24 flex items-center justify-center text-center
    rounded-2xl border border-slate-200 bg-white
    hover:shadow-lg transition"
  >
    <div className="font-medium">
      {item}
    </div>
  </div>
))}

    </div>

  </div>
</section>     
    
      {/* INFRASTRUCTURE TYPES */}
<section className="py-24 sm:py-32">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Choose Your Infrastructure
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
        Built for every stage of growth.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Whether you operate a single restaurant, a retail store,
        or a multi-location enterprise, HOXXES adapts to your business model.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-6 mt-16">

      {/* RESTAURANTS */}
      <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl transition">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600">
          Restaurants
        </div>

        <h3 className="mt-4 text-2xl font-semibold">
          Hospitality Operations
        </h3>

        <p className="mt-4 text-slate-500">
          Digital ordering, kiosks, kitchen operations and guest experiences.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-slate-600">
          <li>✓ QR Ordering</li>
          <li>✓ Kiosk Self-Service</li>
          <li>✓ Kitchen Display System</li>
          <li>✓ Delivery & Pickup</li>
          <li>✓ Loyalty & Memberships</li>
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

        <p className="mt-4 text-slate-500">
          Modern retail infrastructure with inventory and workforce control.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-slate-600">
          <li>✓ POS Infrastructure</li>
          <li>✓ Inventory Management</li>
          <li>✓ Workforce Control</li>
          <li>✓ Fiscalization</li>
          <li>✓ Reporting & Analytics</li>
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

        <p className="mt-4 text-slate-500">
          Centralized control across restaurants, stores and operational teams.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-slate-600">
          <li>✓ HQ Control Center</li>
          <li>✓ Stock Transfers</li>
          <li>✓ Central Reporting</li>
          <li>✓ User Permissions</li>
          <li>✓ Real-Time Monitoring</li>
        </ul>
      </div>

    </div>
  </div>
</section>

      
{/* ORDER CENTER */}
<section className="py-24 sm:py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Order Management
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Fast and intuitive order processing.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Manage dine-in, takeaway and delivery orders from a single interface
        optimized for speed and operational efficiency.
      </p>
    </div>

    <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-xl overflow-hidden">
  <img
    src="https://hoxxes.app/images/order-center.png"
    alt="HOXXES Order Center"
    className="w-full rounded-2xl"
  />
</div>

  </div>
</section>
{/* ENTERPRISE INFRASTRUCTURE */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600 text-center">
  Enterprise Infrastructure
</div>

<h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-center">
  Multi-location operations.
</h2>

<p className="mt-5 text-slate-500 max-w-3xl text-center mx-auto">
  Centralized control across restaurants, stores and operational teams.
</p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

      {[
  "Head Office Management",
  "Stock Transfers",
  "Central Reporting",
  "Support Ticket System",
  "Documentation Center",
  "User Permissions",
].map((item) => (
  <div
    key={item}
    className="h-24 flex items-center justify-center text-center
    rounded-2xl border border-slate-200 bg-white
    hover:shadow-lg transition"
  >
    <div className="font-medium">
      {item}
    </div>
  </div>
))}

    </div>

  </div>
</section>   
{/* HQ CONTROL CENTER */}
<section className="py-24 sm:py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        HQ Control Center
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Manage every location from one place.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Centralized reporting, inventory management, workforce oversight
        and operational control across all locations.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl overflow-hidden">
      <img
        src="https://hoxxes.app/images/hq-dashboard.png"
        alt="HOXXES HQ Control Center"
        className="w-full rounded-2xl"
      />
    </div>

  </div>
</section>
    
      {/* ENTERPRISE BLOCK */}
<section className="py-24 sm:py-32 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Built for enterprise operations.
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            One platform connecting software, hardware and operations.
          </p>

          <div className="mt-8">
            <Link
              href="/hardware"
              className="inline-flex items-center text-sm font-medium text-white hover:text-emerald-400 transition group"
            >
              <span className="border-b border-transparent group-hover:border-emerald-400 transition">
                View compatible hardware
              </span>

              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 sm:py-32 text-center px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Ready to modernize your operations?
        </h2>

        <p className="mt-4 text-slate-500">
          Enterprise-grade infrastructure for scalable hospitality systems.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">

          <Link
            href="/hardware"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            View Hardware
          </Link>

          <Link
            href="/request-demo"
            className="px-6 py-3 rounded-full bg-black text-white 
            hover:bg-slate-800 transition text-sm font-medium"
          >
            Request Demo
          </Link>

          <Link
            href="/pricing"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            View Pricing
          </Link>

        </div>

      </section>

    </div>
  );
}