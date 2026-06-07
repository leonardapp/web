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

    <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-xl overflow-hidden">

      <div className="absolute top-3 sm:top-5 left-1/2 -translate-x-1/2 z-20">
        <div className="px-3 sm:px-5 py-1 sm:py-2 rounded-full bg-emerald-500 text-white text-[10px] sm:text-xs font-medium shadow-lg whitespace-nowrap">
          Analytics Cloud
        </div>
      </div>

      <img
        src="https://hoxxes.app/images/dashboard-overview.png"
        alt="HOXXES Analytics Dashboard"
        className="w-full rounded-2xl"
      />

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
  "Web POS",
  "Android POS",
  "QR Ordering",
  "Android App",
  "iOS App",
  "Delivery Mini App",
  "E-Shop",
  "Online Ordering",
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


      {/* RESTAURANT SOLUTIONS */}
<section className="py-24 sm:py-32 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
      Restaurant Solutions
    </div>

    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
      Everything restaurants need.
    </h2>

    <p className="mt-5 text-slate-500 max-w-3xl">
      Built to streamline ordering, kitchen operations and customer experiences.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

      {[
  "QR Table Ordering",
  "Android POS & Web POS",
  "Kiosk Self-Service",
  "Kitchen Display System",
  "Delivery & Pickup",
  "Loyalty & Memberships",
].map((item) => (
  <div
    key={item}
    className="h-24 flex items-center justify-center sm:justify-start
    text-center sm:text-left px-6
    rounded-2xl border border-slate-200 bg-transparent
    transition"
  >
    <div className="font-medium">
      {item}
    </div>
  </div>
))}

    </div>

  </div>
</section>
{/* RETAIL SOLUTIONS */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
      Retail Solutions
    </div>

    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
      Infrastructure for modern retail.
    </h2>

    <p className="mt-5 text-slate-500 max-w-3xl">
      Inventory, workforce and transaction infrastructure for growing businesses.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

      {[
  "POS Infrastructure",
  "Inventory Management",
  "Printer Integration",
  "Workforce Management",
  "Check-In / Check-Out",
  "Analytics & Reporting",
].map((item) => (
  <div
    key={item}
    className="h-24 flex items-center justify-center sm:justify-start
    text-center sm:text-left px-6
    rounded-2xl border border-slate-200 bg-white
    transition"
  >
    <div className="font-medium">
      {item}
    </div>
  </div>
))}

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

    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
      Enterprise Infrastructure
    </div>

    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
      Multi-location operations.
    </h2>

    <p className="mt-5 text-slate-500 max-w-3xl">
      Centralized control across restaurants, stores and operational teams.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

      {[
  "HQ Control Center",
  "Stock Transfers",
  "Central Reporting",
  "Support Ticket System",
  "Documentation Center",
  "User Permissions",
].map((item) => (
  <div
    key={item}
    className="h-24 flex items-center justify-center sm:justify-start
    text-center sm:text-left px-6
    rounded-2xl border border-slate-200 bg-white
    transition"
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