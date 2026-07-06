"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/Button";

const slides = [
{
    title: "QR Ordering",
    desc: "Orders flow directly to kitchen stations with live prioritization.",
    benefits: ["QR Scan", "Live Menu", "Waiter Call", "Real-time Sync"],
    image: "https://hoxxes.app/images/qr-ordering.png",
    focus: "30% 70%",
  },
{
    title: "Online Ordering",
    desc: "Your fully branded ordering ecosystem.",
    benefits: ["Delivery", "Pickup", "Wallet", "Loyalty"],
    image: "https://hoxxes.app/images/online-ordering.png",
    focus: "90% 50%",
  },
  {
    title: "Restaurant POS",
    desc: "Take orders, process payments and manage tables in real time.",
    benefits: ["Web POS", "Android POS", "Offline Mode", "Multi-Location"],
    image: "https://hoxxes.app/images/pos-operations.png",
    focus: "50% 100%",
  },
  {
    title: "Kitchen Display System",
    desc: "Orders flow directly into kitchen stations in real time.",
    benefits: ["Live Orders", "Routing", "Stations", "Priority"],
    image: "https://hoxxes.app/images/kitchen-display-system.png",
    focus: "30% 100%",
  },
  {
    title: "Operations Hub",
    desc: "Unified role-based app for staff, managers and owners.",
    benefits: ["Waiter Mode", "Manager Mode", "Owner Mode", "Real-time Sync"],
    image: "https://hoxxes.app/images/waiter-operations.png",
    focus: "50% 70%",
  },
    {
    title: "Self-Service Kiosk",
    desc: "Fast self-ordering experience without queues.",
    benefits: ["Upselling", "Payments", "Branding", "Sync"],
    image: "https://hoxxes.app/images/kiosk-ordering.png",
    focus: "15% 100%",
  },
  {
    title: "HQ Control Center",
    desc: "Centralized control for multi-location operations.",
    benefits: ["HQ View", "Sync", "Menus", "Campaigns"],
    image: "https://hoxxes.app/images/dashboard-overview.png",
    focus: "15% 100%",
  },
  {
    title: "Analytics Cloud",
    desc: "Real-time business intelligence and performance tracking.",
    benefits: ["Sales", "KPI", "Reports", "Forecasting"],
    image: "https://hoxxes.app/images/analytics-dashboard.png",
    focus: "60% 100%",
  },
];

export default function SoftwarePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.abs(rect.top);

      const step = window.innerHeight;
      const index = Math.round(scrollProgress / step);

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
    Every order. Every screen. One real-time system.
  </h1>

  <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
    A unified operating system that connects ordering, kitchen, payments and analytics into one live flow.
  </p>

</section>

      {/* SCROLL SECTION */}
      <section
        ref={containerRef}
        className="relative"
        style={{ height: `${slides.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          {/* BACKGROUND */}
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
  style={{
    objectPosition: s.focus,
  }}
  priority={i === active}
/>
            </div>
          ))}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

          {/* CONTENT */}
          <div className="relative z-10 text-center max-w-2xl px-6 text-white">

            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight drop-shadow-xl">
              {slides[active].title}
            </h2>

            <p className="mt-4 text-white/80 text-sm sm:text-lg">
              {slides[active].desc}
            </p>

            {/* SPACER */}
            <div className="mt-5" />

            {/* BENEFITS (soft labels - NOT buttons) */}
            <div className="flex flex-wrap justify-center gap-2">
              {slides[active].benefits.map((b, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/70"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="mt-6 h-px w-10 bg-white/10 mx-auto" />

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

  {/* PRIMARY */}
  <a
    href="/request-demo"
    className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition"
  >
    Request Demo
  </a>

  {/* SECONDARY */}
  <div className="flex flex-wrap gap-2 justify-center">

    <a
      href="/hardware"
      className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition"
    >
      Hardware
    </a>

    <a
      href="/pricing"
      className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition"
    >
      Pricing
    </a>

    <a
      href="/learn-more"
      className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition"
    >
      Learn More
    </a>

  </div>

</div>

          {/* SCROLL INDICATOR */}
          {active < slides.length - 1 && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              <div className="relative h-16 w-px overflow-hidden rounded-full bg-white/10">
                <div className="absolute left-0 top-0 h-5 w-full bg-gradient-to-b from-white to-transparent animate-scroll-indicator" />
              </div>
            </div>
          )}

        </div>
        </div>

        {/* DOTS */}
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
          A system designed for real operational control.
        </h2>

        <p className="mt-4 text-black/60 max-w-2xl mx-auto">
          Hoxxes replaces fragmented tools with a unified real-time operating layer.
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