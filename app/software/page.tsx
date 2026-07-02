"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";

const slides = [
  {
    title: "Restaurant POS",
    desc: "Control orders, tables and payments in real time.",
    benefits: ["Web POS", "Android POS", "Offline Mode", "Multi-location"],
    image: "https://hoxxes.app/images/pos-operations.png",
  },
  {
    title: "QR Ordering",
    desc: "Customers order instantly from their table.",
    benefits: ["QR Scan", "Live Menu", "Waiter Call", "Sync"],
    image: "https://hoxxes.app/images/qr-ordering.png",
  },
  {
    title: "Self-Service Kiosk",
    desc: "Fast ordering without queues.",
    benefits: ["Upselling", "Payments", "Branding", "Sync"],
    image: "https://hoxxes.app/images/kiosk-ordering.png",
  },
  {
    title: "Kitchen Display System",
    desc: "Orders flow directly to kitchen stations.",
    benefits: ["Live Orders", "Routing", "Stations", "Priority"],
    image: "https://hoxxes.app/images/kitchen-display-system.png",
  },
  {
    title: "Waiter Operations",
    desc: "Full control for staff mobility.",
    benefits: ["Tables", "Orders", "Live Updates", "Sync"],
    image: "https://hoxxes.app/images/waiter-operations.png",
  },
  {
    title: "Online Ordering",
    desc: "Your branded ordering ecosystem.",
    benefits: ["Delivery", "Pickup", "Wallet", "Loyalty"],
    image: "https://hoxxes.app/images/online-ordering.png",
  },
  {
    title: "HQ Control Center",
    desc: "Centralized multi-location management.",
    benefits: ["HQ View", "Sync", "Menus", "Campaigns"],
    image: "https://hoxxes.app/images/dashboard-overview.png",
  },
  {
    title: "Analytics Cloud",
    desc: "Real-time business intelligence.",
    benefits: ["Sales", "KPI", "Reports", "Forecasting"],
    image: "https://hoxxes.app/images/analytics-dashboard.png",
  },
];

export default function SoftwarePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const top = containerRef.current.offsetTop;
      const scrollY = window.scrollY;

      const step = window.innerHeight * 0.9;
      const index = Math.floor((scrollY - top) / step);

      setActive(Math.max(0, Math.min(slides.length - 1, index)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-transparent text-black">

      <Header />

      {/* INTRO */}
      <section className="pt-32 pb-10 text-center px-6">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          HOXXES Platform
        </div>

        <h1 className="mt-4 text-3xl sm:text-5xl font-semibold">
          One system for all operations
        </h1>

        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          POS, QR Ordering, Kiosk, Kitchen, Mobile & HQ — unified into one ecosystem.
        </p>
      </section>

      {/* VISION PRO SCROLL SECTION */}
      <section
        ref={containerRef}
        className="relative"
        style={{ height: `${slides.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          {/* BACKGROUND LAYERS */}
          {slides.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-700"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "scale(1)" : "scale(1.08)",
              }}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                priority={i === active}
              />
            </div>
          ))}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

          {/* TEXT */}
          <div className="relative z-10 text-center max-w-2xl px-6 text-white">

            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight drop-shadow-xl">
              {slides[active].title}
            </h2>

            <p className="mt-4 text-white/80 text-sm sm:text-lg">
              {slides[active].desc}
            </p>

            {/* BENEFITS */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {slides[active].benefits.map((b, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* CTA */}
<div className="mt-8 flex justify-center gap-3">
  <a
    href="/request-demo"
    className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90"
  >
    Demo
  </a>

  <a
    href="/hardware"
    className="px-5 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white/10"
  >
    Hardware
  </a>

  <a
    href="/pricing"
    className="px-5 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white/10"
  >
    Pricing
  </a>
</div>

            <p className="mt-4 text-xs text-white/50">
              Trusted by restaurants, retail & enterprise operators
            </p>
          </div>
        </div>

        {/* SCROLL INDICATORS */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === active ? "bg-white scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-24 px-6 text-center max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-semibold">
          Built for real operational efficiency.
        </h2>

        <p className="mt-4 text-black/60 max-w-2xl mx-auto">
          Reduce errors, increase speed and unify all restaurant operations into one system.
        </p>

        <div className="mt-12 grid sm:grid-cols-4 gap-6">

          <div className="p-6 rounded-2xl border border-black/10">
            <div className="text-2xl font-semibold">-35%</div>
            <p className="text-sm text-black/60 mt-2">Workload</p>
          </div>

          <div className="p-6 rounded-2xl border border-black/10">
            <div className="text-2xl font-semibold">+25%</div>
            <p className="text-sm text-black/60 mt-2">Efficiency</p>
          </div>

          <div className="p-6 rounded-2xl border border-black/10">
            <div className="text-2xl font-semibold">-50%</div>
            <p className="text-sm text-black/60 mt-2">Errors</p>
          </div>

          <div className="p-6 rounded-2xl border border-black/10">
            <div className="text-2xl font-semibold">Revenue</div>
            <p className="text-sm text-black/60 mt-2">Growth</p>
          </div>

        </div>
      </section>

    </div>
  );
}