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
      <section className="max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
        
       <div className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-slate-400">
  Restaurant • Retail • Enterprise
</div>

<h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
  One platform,
  <span className="block text-slate-500 mt-2">
    multiple business models.
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
            href="/hardware"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            Explore Hardware
          </Link>

          <Link
            href="/request-demo"
            className="px-6 py-3 rounded-full bg-black text-white 
            hover:bg-slate-800 transition text-sm font-medium"
          >
            Request Demo
          </Link>

        </div>
      </section>
      {/* INFRASTRUCTURE TYPES */}
<section className="py-20 sm:py-28">
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
{/* DEPLOYMENT MODELS */}
<section className="py-24 sm:py-32 border-t border-slate-100">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
      Deployment Models
    </div>

    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
      Flexible deployment.
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-slate-500">
      Start with a single location and scale to a multi-location operation
      without changing your infrastructure.
    </p>

    <div className="grid lg:grid-cols-3 gap-6 mt-14">

      <div className="p-8 rounded-3xl border border-slate-200 bg-white">
        <div className="text-sm font-medium">Single Location</div>
        <p className="mt-3 text-sm text-slate-500">
          Ideal for independent restaurants and retail stores.
        </p>
      </div>

      <div className="p-8 rounded-3xl border border-slate-200 bg-white">
        <div className="text-sm font-medium">Multi-Location</div>
        <p className="mt-3 text-sm text-slate-500">
          Centralized management across multiple branches.
        </p>
      </div>

      <div className="p-8 rounded-3xl border border-slate-200 bg-white">
        <div className="text-sm font-medium">Enterprise</div>
        <p className="mt-3 text-sm text-slate-500">
          Advanced reporting, permissions and HQ infrastructure.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* RESTAURANT SOLUTIONS */}
<section className="py-24 sm:py-32 border-t border-slate-100">
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
          className="p-6 rounded-2xl border border-slate-200 bg-white"
        >
          {item}
        </div>
      ))}

    </div>

  </div>
</section>
{/* RETAIL SOLUTIONS */}
<section className="py-24 sm:py-32 bg-slate-50">
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
          className="p-6 rounded-2xl border border-slate-200 bg-white"
        >
          {item}
        </div>
      ))}

    </div>

  </div>
</section>
{/* ENTERPRISE INFRASTRUCTURE */}
<section className="py-24 sm:py-32">
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
          className="p-6 rounded-2xl border border-slate-200 bg-white"
        >
          {item}
        </div>
      ))}

    </div>

  </div>
</section>   

    
      {/* ENTERPRISE BLOCK */}
      <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Built for enterprise operations.
          </h2>

          <p className="mt-4 text-slate-500 text-sm sm:text-base">
            Software and hardware working together as one ecosystem.
          </p>

          <div className="mt-8">
            <Link
              href="/hardware"
              className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-black transition group"
            >
              <span className="border-b border-transparent group-hover:border-black transition">
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
      <section className="py-20 sm:py-24 text-center px-6">

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