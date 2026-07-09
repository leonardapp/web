"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Link from "next/link";

const slides = [
{
    title: "Restaurant POS",
    desc: "Take orders, process payments and manage tables in real time.",
    benefits: ["Web POS", "Android POS", "Offline Mode", "Multi-Location"],
    image: "https://hoxxes.app/images/pos-operations.png",
    focusMobile: "50% 100%",
    focusDesktop: "100% 20%",
  },
  {
    title: "Operations Hub",
    desc: "Unified role-based app for staff, managers and owners.",
    benefits: ["Waiter Mode", "Manager Mode", "Owner Mode", "Real-time Sync"],
    image: "https://hoxxes.app/images/waiter-operations.png",
    focusMobile: "50% 70%",
    focusDesktop: "100% 10%",
  },
  {
    title: "QR Ordering",
    desc: "Orders flow directly to kitchen stations with live prioritization.",
    benefits: ["QR Scan", "Live Menu", "Waiter Call", "Real-time Sync"],
    image: "https://hoxxes.app/images/qr-ordering.png",
    ffocusMobile: "30% 70%",
    focusDesktop: "50% 75%",
  },
  {
    title: "Self-Service Kiosk",
    desc: "Fast self-ordering experience without queues.",
    benefits: ["Upselling", "Payments", "Branding", "Sync"],
    image: "https://hoxxes.app/images/kiosk-ordering.png",
    focusMobile: "15% 100%",
    focusDesktop: "100% 30%",
  },
{
    title: "Online Ordering",
    desc: "Your fully branded ordering ecosystem.",
    benefits: ["Delivery", "Pickup", "Wallet", "Loyalty"],
    image: "https://hoxxes.app/images/online-ordering.png",
    focusMobile: "90% 50%",
    focusDesktop: "50% 75%",
  },
  {
    title: "Kitchen Display System",
    desc: "Orders flow directly into kitchen stations in real time.",
    benefits: ["Live Orders", "Routing", "Stations", "Priority"],
    image: "https://hoxxes.app/images/kitchen-display-system.png",
    focusMobile: "30% 100%",
    focusDesktop: "100% 30%",
  },
  {
    title: "HQ Control Center",
    desc: "Centralized control for multi-location operations.",
    benefits: ["HQ View", "Sync", "Menus", "Campaigns"],
    image: "https://hoxxes.app/images/dashboard-overview.png",
    focusMobile: "15% 100%",
    focusDesktop: "100% 20%",
  },
  {
    title: "Analytics Cloud",
    desc: "Real-time business intelligence and performance tracking.",
    benefits: ["Sales", "KPI", "Reports", "Forecasting"],
    image: "https://hoxxes.app/images/analytics-dashboard.png",
    focusMobile: "60% 100%",
    focusDesktop: "75% 50%",
  },
];



  export default function SoftwarePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

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

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
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
    objectPosition: isDesktop
      ? s.focusDesktop
      : s.focusMobile,
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
  className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-95 transition flex items-center gap-2"
>
  Request Demo
  <span className="text-black/60"></span>
</a>

  {/* SECONDARY */}
  <div className="flex flex-wrap gap-3 justify-center">

    <a
  href="/hardware"
  className="px-5 py-2.5 rounded-full border border-white/30 bg-white/5 text-white text-sm font-medium backdrop-blur-md hover:bg-white/10 hover:border-white/50 transition active:scale-95"
>
  Hardware
</a>

    <a
  href="/pricing"
  className="px-5 py-2.5 rounded-full border border-white/30 bg-white/5 text-white text-sm font-medium backdrop-blur-md hover:bg-white/10 hover:border-white/50 transition active:scale-95"
>
  Pricing
</a>

    <a
  href="/learn-more"
  className="px-5 py-2.5 rounded-full border border-white/20 bg-white/0 text-white/70 text-sm font-medium hover:text-white hover:bg-white/5 transition active:scale-95"
>
  Learn More
</a>

  </div>

</div>

        </div>
        </div>
       {/* SCROLL INDICATOR */}
{active < slides.length - 1 && (
  <div className="fixed bottom-15 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center gap-2">
    
    <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase">
      Scroll
    </span>

    {/* line */}
    <div className="relative h-14 w-px bg-white/15 overflow-hidden rounded-full">
      <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-b from-white to-transparent animate-scroll-indicator" />
    </div>

  </div>
)}

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
      

      {/* FINAL QUOTE */}
<section className="py-28 px-6 border-t border-slate-200">
  <div className="max-w-4xl mx-auto text-center">

    <p className="text-3xl sm:text-5xl font-semibold leading-tight tracking-tight">
      "The best restaurant software
      <span className="block text-slate-400">
        disappears into the operation."
      </span>
    </p>

    <p className="mt-8 text-lg text-slate-500 max-w-2xl mx-auto">
      HOXXES connects every order, every device and every location into
      one real-time operating system.
    </p>

    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

      <Link
        href="/request-demo"
        className="px-7 py-3 rounded-full bg-black text-white hover:bg-slate-800 transition font-medium"
      >
        Request Demo
      </Link>

      <Link
        href="/pricing"
        className="px-7 py-3 rounded-full border border-slate-300 hover:bg-black hover:text-white transition font-medium"
      >
        View Pricing
      </Link>

    </div>

  </div>
</section>

       

    </div>
  );
}