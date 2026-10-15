"use client";



import Link from "next/link";

import Header from "@/components/Header";

import IndustriesSection from "@/components/IndustriesSection";
import { useEffect } from "react";

const featureTargets: Record<string, string> = {
  "pos": "pos",
  "operations-hub": "operations-hub",
  "kds": "kds",
  "online-ordering": "online-ordering",
  "qr-ordering": "qr-ordering",
  "kiosk": "kiosk",
  // These features are described by the closest existing section.
  "delivery-integrations": "delivery-integrations",
  "marketing": "promotions",
  "payment-integration": "payment-integration",
};

export default function SoftwarePage() {
  useEffect(() => {
    const feature = new URLSearchParams(window.location.search).get("feature");
    if (!feature) return;

    const targetId = featureTargets[feature];
    if (!targetId) return;

    // Wait until the page has mounted before scrolling to the selected feature.
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  return (

    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">



      {/* HEADER */}

      <Header />







      {/* VISUAL-FIRST HERO */}
      <style>{`
        @keyframes hoxxes-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes hoxxes-glow { 0%, 100% { box-shadow: 0 12px 35px rgba(136,210,26,.12); } 50% { box-shadow: 0 18px 48px rgba(136,210,26,.25); } }
        @keyframes hoxxes-reveal { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .hoxxes-float { animation: hoxxes-float 5s ease-in-out infinite; }
        .hoxxes-float-delay { animation: hoxxes-float 5.8s ease-in-out 1s infinite; }
        .hoxxes-reveal { animation: hoxxes-reveal .75s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .hoxxes-float, .hoxxes-float-delay, .hoxxes-reveal { animation: none !important; } }
      `}</style>

      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#88d21a]/10 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          <div className="hoxxes-reveal relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#88d21a]/40 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#88d21a] shadow-[0_0_0_4px_rgba(136,210,26,.15)]" /> Restaurant · Retail · Enterprise
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              Your whole business.
              <span className="mt-2 block text-slate-400">One connected system.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base lg:mx-0">
              Orders, POS, kitchen and business insights — working together.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/request-demo" className="rounded-full bg-[#88d21a] px-6 py-3.5 text-center text-sm font-semibold text-[#17210c] shadow-[0_8px_24px_rgba(136,210,26,.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#76b915]">See HOXXES in action <span aria-hidden="true">↗</span></Link>
              <Link href="#connected-workflow" className="rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-center text-sm font-medium text-slate-700 transition hover:border-[#88d21a] hover:bg-[#f7fceb]">Explore the platform <span aria-hidden="true">↓</span></Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 lg:justify-start">
              <span>✓ POS & payments</span><span>✓ QR & online orders</span><span>✓ Kitchen & analytics</span>
            </div>
          </div>

          <div className="hoxxes-reveal relative mx-auto min-h-[370px] w-full max-w-2xl [animation-delay:120ms] sm:min-h-[500px]">
            {/* Soft ambient glow gives the product composition depth without a heavy frame. */}
            <div className="pointer-events-none absolute inset-x-8 top-12 bottom-6 rounded-full bg-[#88d21a]/15 blur-3xl" />
            <div className="pointer-events-none absolute left-[12%] top-[17%] h-[58%] w-[76%] rounded-[3rem] border border-[#88d21a]/15 rotate-[-5deg]" />
            <div className="pointer-events-none absolute left-[18%] top-[12%] h-[58%] w-[76%] rounded-[3rem] border border-slate-200/70 rotate-[4deg]" />

            {/* Main POS screen stays the visual anchor. */}
            <div className="absolute inset-x-5 top-14 z-[1] rounded-[1.6rem] bg-white/80 p-2 shadow-[0_28px_70px_rgba(15,23,42,.16)] ring-1 ring-white/90 backdrop-blur-sm sm:inset-x-10 sm:top-12 sm:rounded-[2rem] sm:p-3">
              <img src="https://hoxxes.app/images/pos-menu.png" alt="HOXXES POS dashboard" className="aspect-[1.42/1] w-full rounded-[1.2rem] object-cover object-top sm:rounded-[1.5rem]" fetchPriority="high" />
            </div>

            {/* QR product floats independently, without a white image card. */}
            <div className="hoxxes-float absolute left-0 top-0 z-20 w-[35%] sm:left-1 sm:w-[32%]">
              <img src="https://hoxxes.app/images/QR-hero.png" alt="HOXXES QR Ordering" className="aspect-[1.05/1] w-full object-contain drop-shadow-[0_16px_20px_rgba(15,23,42,.18)] transition-transform duration-500 hover:scale-105" />
              <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[10px] font-semibold text-slate-700 shadow-md backdrop-blur-md sm:text-xs">QR Ordering <span className="text-[#5d9510]">↗</span></div>
            </div>

            {/* KDS floats from the opposite corner to avoid a static, stacked look. */}
            <div className="hoxxes-float-delay absolute bottom-0 right-0 z-20 w-[40%] sm:right-1 sm:w-[36%]">
              <img src="https://hoxxes.app/images/KDS-hero.png" alt="HOXXES Kitchen Display System" className="aspect-[1.2/1] w-full object-contain drop-shadow-[0_18px_24px_rgba(15,23,42,.2)] transition-transform duration-500 hover:scale-105" />
              <div className="flex items-center justify-between gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-md"><span className="text-[10px] font-semibold text-slate-700 sm:text-xs">Kitchen Display</span><span className="h-2 w-2 shrink-0 rounded-full bg-[#88d21a] shadow-[0_0_0_4px_rgba(136,210,26,.16)]" /></div>
            </div>

            {/* Small status chip, kept away from the product images. */}
            <div className="hoxxes-float absolute right-0 top-[43%] z-30 flex -translate-y-1/2 items-center gap-2 rounded-full border border-white/90 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md sm:right-0 sm:px-4 sm:py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#88d21a]/20 text-sm text-[#527f10]">✓</span><span className="text-[10px] font-semibold text-slate-700 sm:text-xs">Connected in one place</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL WORKFLOW */}
      <section id="connected-workflow" className="scroll-mt-24 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5d9510] sm:text-xs">One connected workflow</p><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">From order to insight.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">See how every part of your operation fits together.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="#qr-ordering" className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white/90 p-3 shadow-[0_8px_24px_rgba(15,23,42,.045)] transition duration-500 hover:-translate-y-2 hover:border-[#88d21a] hover:shadow-[0_22px_45px_rgba(15,23,42,.12)] lg:odd:translate-y-0 lg:even:translate-y-4">
              <div className="overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-[#f7fceb] via-slate-50 to-white"><img src="https://hoxxes.app/images/qr-ordering.png" alt="QR ordering" className="aspect-[1.28/1] w-full object-contain transition duration-500 group-hover:scale-[1.04]" loading="lazy" /></div>
              <div className="flex items-center justify-between px-2 pb-2 pt-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5d9510]">01 / Order</p><h3 className="mt-1 font-semibold">QR & Online Ordering</h3></div><span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-[#88d21a]">↗</span></div>
            </Link>
            <Link href="#pos" className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white/90 p-3 shadow-[0_8px_24px_rgba(15,23,42,.045)] transition duration-500 hover:-translate-y-2 hover:border-[#88d21a] hover:shadow-[0_22px_45px_rgba(15,23,42,.12)] lg:odd:translate-y-0 lg:even:translate-y-4">
              <div className="overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-slate-100 via-white to-[#f7fceb]"><img src="https://hoxxes.app/images/pos-operations2.png" alt="Restaurant point of sale" className="aspect-[1.28/1] w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" /></div>
              <div className="flex items-center justify-between px-2 pb-2 pt-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5d9510]">02 / Manage</p><h3 className="mt-1 font-semibold">Restaurant POS</h3></div><span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-[#88d21a]">↗</span></div>
            </Link>
            <Link href="#kds" className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white/90 p-3 shadow-[0_8px_24px_rgba(15,23,42,.045)] transition duration-500 hover:-translate-y-2 hover:border-[#88d21a] hover:shadow-[0_22px_45px_rgba(15,23,42,.12)] lg:odd:translate-y-0 lg:even:translate-y-4">
              <div className="overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-[#f7fceb] via-white to-slate-100"><img src="https://hoxxes.app/images/kitchen-display-system.png" alt="HOXXES order management interface" className="aspect-[1.28/1] w-full object-contain transition duration-500 group-hover:scale-[1.04]" loading="lazy" /></div>
              <div className="flex items-center justify-between px-2 pb-2 pt-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5d9510]">03 / Prepare</p><h3 className="mt-1 font-semibold">Kitchen Display</h3></div><span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-[#88d21a]">↗</span></div>
            </Link>
            <Link href="#analytics-dashboard" className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white/90 p-3 shadow-[0_8px_24px_rgba(15,23,42,.045)] transition duration-500 hover:-translate-y-2 hover:border-[#88d21a] hover:shadow-[0_22px_45px_rgba(15,23,42,.12)] lg:odd:translate-y-0 lg:even:translate-y-4">
              <div className="overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-slate-100 via-white to-[#f7fceb]"><img src="https://hoxxes.app/images/analytics-dashboard.png" alt="HOXXES analytics dashboard" className="aspect-[1.28/1] w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" /></div>
              <div className="flex items-center justify-between px-2 pb-2 pt-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5d9510]">04 / Understand</p><h3 className="mt-1 font-semibold">HQ & Analytics</h3></div><span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-[#88d21a]">↗</span></div>
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">{[{label:"Operations Hub",href:"#operations-hub"},{label:"Workforce",href:"#workforce-management"},{label:"Self-Service Kiosk",href:"#kiosk"},{label:"Delivery Integrations",href:"#delivery-integrations"},{label:"Marketing & Loyalty",href:"#promotions"},{label:"Payments",href:"#payment-integration"}].map((item) => <a key={item.href} href={item.href} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-600 transition hover:border-[#88d21a] hover:bg-[#f7fceb]">{item.label} <span aria-hidden="true">↗</span></a>)}</div>
        </div>
      </section>

      <IndustriesSection />

        <section id="pos" className="scroll-mt-24 pb-24 sm:pb-32">

  <div className="max-w-7xl mx-auto px-6">



    <div className="text-center mb-14">

      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">

        Restaurant POS

      </div>



      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">

        Web POS & Android POS.

      </h2>



      <p className="mt-5 max-w-3xl mx-auto text-slate-500">

    Operate from any browser or use the Android POS application with

offline capabilities. Manage tables, orders, payments and reporting

from a unified platform synchronized across all devices. Customize

the login experience with your company logo.

  </p>

    </div>



    <div className="relative mt-10">



  {/* FOTO REALE */}

  <div className="overflow-hidden rounded-[32px]">

    <img

      src="https://hoxxes.app/images/pos-operations2.png"

      alt="HOXXES Restaurant POS"

      className="w-full object-cover"

      loading="lazy"

    />

  </div>



</div>

<div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">

  <div>✓ Web POS</div>

<div>✓ Android POS</div>

<div>✓ Tables</div>

<div>✓ Offline Ready</div>

<div>✓ Takeaway</div>

<div>✓ Delivery</div>

<div>✓ Payments</div>

<div>✓ Customers</div>

<div>✓ Reporting</div>

<div>✓ Multi-Location</div>

<div>✓ Custom Logo</div>

<div>✓ Login Screen</div>

</div>



  </div>

 <p className="mt-10 max-w-md mx-auto text-sm text-slate-500 text-center px-4">

  Extend your POS with Android terminals and customer display solutions.

</p>



<div className="mt-8 flex justify-center px-4">

  <Link

    href="/hardware"

    className="

      w-full sm:w-auto

      max-w-md

      rounded-full

      border border-[#88d21a]

      px-6 py-3

      text-center text-sm font-medium

      text-[#26351a]

      transition

      hover:bg-[#88d21a]

      hover:text-[#17210c]

      focus-visible:outline-none

      focus-visible:ring-2

      focus-visible:ring-[#88d21a]

      focus-visible:ring-offset-2

    "

  >

    Explore Compatible Hardware

  </Link>

</div>

</section>



{/* MOBILE APP */}

<section id="operations-hub" className="scroll-mt-24 py-24 sm:py-32 bg-white">

  <div className="max-w-7xl mx-auto px-6">



    <div className="text-center mb-14">

      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">

        Operations Hub

      </div>



      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">

        Manage operations from anywhere.

      </h2>



      <p className="mt-5 max-w-3xl mx-auto text-slate-500">

  A unified control layer for staff, managers and business owners.

        Manage orders, tables, sales, reporting and live operations from any device — anytime.

</p>

    </div>



    <div className="relative">



      {/* REAL IMAGE */}

      <img

        src="https://hoxxes.app/images/waiter-operations.png"

        alt="HOXXES Waiter Operations"

        className="w-full rounded-[32px]"

        loading="lazy"

      />





    </div>

    <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">

      <div>✓ Ordering</div>

  <div>✓ Tables</div>

  <div>✓ Live Sales</div>

  <div>✓ Backoffice</div>

  <div>✓ Manager View</div>

  <div>✓ Owner View</div>

  <div>✓ Android</div>

  <div>✓ iOS</div>

    </div>



  </div>

</section>



{/* WORKFORCE MANAGEMENT */}



<section id="workforce-management" className="scroll-mt-24 py-24 sm:py-32 bg-transparent">

  <div className="max-w-7xl mx-auto px-6">



    <div className="text-center mb-14">



      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">

        Workforce Management

      </div>



      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">

        Smart attendance with location verification.

      </h2>



      <p className="mt-5 max-w-3xl mx-auto text-slate-500">

        Manage employee attendance with desktop and mobile punch in/out.

        Define allowed working zones, verify employee location and keep

        accurate attendance records with intelligent status tracking.

      </p>



    </div>





    {/* IMAGE */}



    <div className="flex justify-center">



      <div className="overflow-hidden rounded-[32px] max-w-5xl w-full">

        <img

          src="https://hoxxes.app/images/punch.png"

          alt="HOXXES Workforce Management"

          className="w-full h-auto object-contain"

          loading="lazy"

        />

      </div>



    </div>





    {/* FEATURES */}



    <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">



      <div>✓ Punch In</div>

      <div>✓ Punch Out</div>

      <div>✓ GPS Verification</div>

      <div>✓ Location Radius</div>

      <div>✓ 50m Range</div>

      <div>✓ 100m Range</div>

      <div>✓ 200m Range</div>

      <div>✓ 300m Range</div>

      <div>✓ 500m Range</div>

      <div>✓ Attendance History</div>

      <div>✓ Employee Records</div>

      <div>✓ Real-Time Tracking</div>



    </div>





    {/* STATUS FILTERS */}



    <div className="mt-12 grid md:grid-cols-4 gap-5">



      <div className="rounded-3xl border border-slate-200 bg-white p-6">

        <h3 className="font-semibold">

          Normal

        </h3>

        <p className="mt-2 text-sm text-slate-500">

          Employee attendance completed within approved location and schedule.

        </p>

      </div>





      <div className="rounded-3xl border border-slate-200 bg-white p-6">

        <h3 className="font-semibold">

          Late In

        </h3>

        <p className="mt-2 text-sm text-slate-500">

          Track employees arriving after their scheduled start time.

        </p>

      </div>





      <div className="rounded-3xl border border-slate-200 bg-white p-6">

        <h3 className="font-semibold">

          Late Out

        </h3>

        <p className="mt-2 text-sm text-slate-500">

          Monitor employees leaving after their scheduled end time.

        </p>

      </div>





      <div className="rounded-3xl border border-slate-200 bg-white p-6">

        <h3 className="font-semibold">

          Abnormal

        </h3>

        <p className="mt-2 text-sm text-slate-500">

          Identify unusual attendance activity or location mismatches.

        </p>

      </div>



    </div>





  </div>

</section>





{/* DIGITAL MENU */}

<section id="qr-ordering" className="scroll-mt-24 py-24 sm:py-32 bg-white">

  <div className="max-w-7xl mx-auto px-6">



    <div className="text-center mb-14">

      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">

        QR Ordering Infrastructure

      </div>



      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">

        Every table becomes a digital ordering point.

      </h2>



      <p className="mt-5 max-w-3xl mx-auto text-slate-500">

  Customers scan a QR code, browse the menu, place orders, call a waiter and track their bill in real time. Every table automatically becomes a digital ordering point with built-in QR management, analytics and real-time menu synchronization.

</p>

    </div>



    <div className="relative">



      {/* REAL IMAGE */}

      <img

        src="https://hoxxes.app/images/qr-ordering.png"

        alt="HOXXES QR Ordering System"

        className="w-full rounded-[32px]"

        loading="lazy"

      />



    </div>



    <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">

      <div>✓ QR Ordering</div>

<div>✓ QR Generation</div>

<div>✓ Temporary QR</div>

<div>✓ Analytics</div>

<div>✓ Contactless</div>

<div>✓ Live Menus</div>

<div>✓ Waiter Call</div>

<div>✓ Bill Tracking</div>

<div>✓ QR Printing</div>

<div>✓ Multi-Language</div>      

    </div>

    <div className="mt-10 text-center">

  <div className="inline-flex flex-wrap justify-center gap-3 text-sm">

    <span className="px-4 py-2 rounded-full bg-slate-100">

      Unlimited Tables

    </span>

    <span className="px-4 py-2 rounded-full bg-slate-100">

      Unlimited QR Codes

    </span>

    <span className="px-4 py-2 rounded-full bg-slate-100">

      Dynamic Floor Management

    </span>

    <span className="px-4 py-2 rounded-full bg-slate-100">

      Real-Time Analytics

    </span>

  </div>

</div>

    <p className="mt-10 max-w-md mx-auto text-sm text-slate-500 text-center px-4">

  Experience a live digital ordering journey from scan to checkout.

</p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">

  <a

  href="https://qr.hoxxes.com/qr/SSI718JKZ770"

  target="black"

  rel="noopener noreferrer"

  className="

    inline-flex

    items-center

    justify-center

    px-6

    py-3

    rounded-full

    border border-slate-300

    text-slate-700

    text-sm

    font-medium

    hover:bg-black

    hover:text-white

    hover:border-black

    transition

  "

>

  Explore Live Menu

</a>

</div>



  </div>

</section>



{/* SELF-SERVICE KIOSK */}

<section id="kiosk" className="scroll-mt-24 py-24 sm:py-32 bg-transparent">

  <div className="max-w-7xl mx-auto px-6">



    <div className="text-center mb-14">

      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">

        Self-Service Kiosk

      </div>



      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">

        Let customers order independently.

      </h2>



      <p className="mt-5 max-w-3xl mx-auto text-slate-500">

        Reduce queues, increase average order value and improve

operational efficiency with a fully integrated self-service

ordering experience connected directly to HOXXES POS,

Kitchen Display System and Analytics Cloud. Fully customizable

with your own branding and promotional content.

      </p>

    </div>



    <div className="relative">



      <img

        src="https://hoxxes.app/images/kiosk-ordering2.png"

        alt="HOXXES Self Service Kiosk"

        className="w-full rounded-[32px]"

        loading="lazy"

      />





    </div>



    <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">

       <div>✓ Self Ordering</div>

<div>✓ Payments</div>

<div>✓ Upselling</div>

<div>✓ Kitchen Sync</div>

<div>✓ Reporting</div>

<div>✓ Languages</div>

<div>✓ Custom Logo</div>

<div>✓ Brand Colors</div>

<div>✓ Welcome Screen</div>

<div>✓ Promo Slides</div>

    </div>



  </div>

 <p className="mt-10 max-w-md mx-auto text-sm text-slate-500 text-center px-4">

   Discover the hardware behind the HOXXES self-service ecosystem.

</p>



<div className="mt-8 flex justify-center px-4">

  <Link

    href="/hardware"

    className="

      w-full sm:w-auto

      max-w-md

      rounded-full

      border border-[#88d21a]

      px-6 py-3

      text-center text-sm font-medium

      text-[#26351a]

      transition

      hover:bg-[#88d21a]

      hover:text-[#17210c]

      focus-visible:outline-none

      focus-visible:ring-2

      focus-visible:ring-[#88d21a]

      focus-visible:ring-offset-2

    "

  >

    Explore Compatible Hardware

  </Link>

</div>

</section>



{/* PAYMENT INTEGRATION */}
<section id="payment-integration" className="scroll-mt-24 py-20 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Payment Integration
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Connect supported payment terminals to your kiosk.
      </h2>
      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Explore payment-terminal integration options for the HOXXES self-service experience.
        Contact our team to confirm compatibility and availability for your setup.
      </p>
    </div>
    <div className="overflow-hidden rounded-[32px] max-w-5xl mx-auto">
      <img
        src="https://hoxxes.app/images/payment-intg.png"
        alt="HOXXES payment terminal integration"
        className="w-full h-auto object-contain"
        loading="lazy"
      />
    </div>
    <div className="mt-8 flex justify-center">
      <Link
        href="/contact-sales"
        className="rounded-full bg-[#88d21a] px-6 py-3 text-center text-sm font-medium text-[#17210c] shadow-sm transition hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
      >
        Confirm Compatibility
      </Link>
    </div>
  </div>
</section>

{/* ONLINE ORDERING */}

<section id="online-ordering" className="scroll-mt-24 py-24 sm:py-32 bg-transparent">

  <div className="max-w-7xl mx-auto px-6">



    <div className="text-center mb-14">

      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">

        Online Ordering

      </div>



      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">

        Your own branded ordering page.

      </h2>



      <p className="mt-5 max-w-3xl mx-auto text-slate-500">

  Every subscriber receives a unique ordering link and a branded customer

  mini app for delivery, pickup, membership, loyalty rewards, wallet and

  vouchers. Orders arrive instantly inside HOXXES POS and Kitchen Display

  System.

</p>

    </div>



    <div className="relative">





      {/* REAL IMAGE */}

      <img

        src="https://hoxxes.app/images/online-ordering.png"

        alt="HOXXES Online Ordering"

        className="w-full rounded-[32px]"

        loading="lazy"

      />



    </div>



    <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">

      <div>✓ Membership</div>

  <div>✓ Loyalty</div>

  <div>✓ Wallet</div>

  <div>✓ Ordering Link</div>

  <div>✓ Branded Store</div>

  <div>✓ Pickup</div>

  <div>✓ Kitchen Sync</div>

  <div>✓ Mobile Ready</div>

    </div>

    <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

  <a

    href="https://order.hoxxes.com/store/4cbb7eb4-5ddc-4add-a203-fc535dc4686a"

    target="_blank"

    rel="noopener noreferrer"

    className="

      inline-flex justify-center

      rounded-full

      bg-[#88d21a]

      px-6 py-3

      text-center text-sm font-medium

      text-[#17210c]

      shadow-sm

      transition

      hover:bg-[#76b915]

      focus-visible:outline-none

      focus-visible:ring-2

      focus-visible:ring-[#88d21a]

      focus-visible:ring-offset-2

    "

  >

    View Live Store

  </a>



  <a

    href="https://miniprogram.hoxxes.com/app/17420/4cbb7eb4-5ddc-4add-a203-fc535dc4686a"

    target="_blank"

    rel="noopener noreferrer"

    className="

      inline-flex justify-center

      rounded-full

      border border-[#88d21a]

      px-6 py-3

      text-center text-sm font-medium

      text-[#26351a]

      transition

      hover:bg-[#88d21a]

      hover:text-[#17210c]

      focus-visible:outline-none

      focus-visible:ring-2

      focus-visible:ring-[#88d21a]

      focus-visible:ring-offset-2

    "

  >

    Open Membership App

  </a>

</div>



</div>

</section>



{/* DELIVERY INTEGRATIONS */}
<section id="delivery-integrations" className="scroll-mt-24 py-20 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Delivery Integrations
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Manage incoming delivery orders in one place.
      </h2>
      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Connect delivery platforms and bring incoming orders into a more unified workflow.
        Contact our team to confirm which integrations are supported for your business.
      </p>
    </div>
    <div className="overflow-hidden rounded-[32px] max-w-5xl mx-auto">
      <img
        src="https://hoxxes.app/images/delivery-Integration.png"
        alt="HOXXES delivery integrations"
        className="w-full h-auto object-contain"
        loading="lazy"
      />
    </div>
    <div className="mt-8 flex justify-center">
      <Link
        href="/contact-sales"
        className="rounded-full border border-[#88d21a] px-6 py-3 text-center text-sm font-medium text-[#26351a] transition hover:bg-[#88d21a] hover:text-[#17210c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
      >
        Ask About Integrations
      </Link>
    </div>
  </div>
</section>

{/* KDS */}

<section id="kds" className="scroll-mt-24 py-24 sm:py-32 bg-transparent">

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

    alt="HOXXES order management interface"

    className="w-full rounded-[32px]"

    loading="lazy"

  />



</div>

 <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">

   <div>✓ Live Orders</div>

  <div>✓ Routing</div>

  <div>✓ Prioritization</div>

  <div>✓ Station View</div>

  <div>✓ Order Status</div>

  <div>✓ Kitchen Analytics</div>

  <div>✓ Real-Time Sync</div>

  <div>✓ Multi-Station</div>

</div>



  </div>

</section>











{/* PROMOTIONS & CAMPAIGN AUTOMATION */}

<section id="promotions" className="scroll-mt-24 py-24 sm:py-32 bg-white">

  <div className="max-w-7xl mx-auto px-6">



    <div className="text-center mb-14">

      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">

        Promotions Automation

      </div>



      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">

        Promotions that run themselves.

      </h2>



      <p className="mt-5 max-w-3xl mx-auto text-slate-500">

        Schedule promotions once and let HOXXES automatically activate

        and deactivate discounts, campaigns and loyalty benefits with

        complete accuracy.

      </p>

    </div>



    <div className="grid md:grid-cols-3 gap-6">



      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

        <div className="text-lg font-medium mb-3">

          Happy Hour Automation

        </div>



        <p className="text-sm text-slate-600">

          Automatically activate and deactivate Happy Hour promotions

          based on day and time schedules.

        </p>

      </div>



      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

        <div className="text-lg font-medium mb-3">

          Scheduled Discounts

        </div>



        <p className="text-sm text-slate-600">

          Apply automatic discounts to products, categories or entire

          menus without manual intervention.

        </p>

      </div>



      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

        <div className="text-lg font-medium mb-3">

          Loyalty Campaigns

        </div>



        <p className="text-sm text-slate-600">

          Launch voucher, membership and loyalty campaigns that run

          automatically across all channels.

        </p>

      </div>



    </div>



    <div className="mt-12 text-center">

      <p className="text-sm sm:text-base text-slate-600">

        No manual changes. No staff mistakes. No missed promotions.

      </p>



      <p className="mt-2 text-lg font-medium">

        Set it once. Let HOXXES handle the rest.

      </p>

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

        Control every location from a single HQ.

      </h2>



      <p className="mt-5 max-w-3xl mx-auto text-slate-500">

          Centralized reporting, inventory management, workforce oversight, 

          product synchronization, menu administration, campaign scheduling 

          and operational control across all locations from a single HQ dashboard.

      </p>

    </div>



    <div className="relative">

      <img

        src="https://hoxxes.app/images/dashboard-overview.png"

        alt="HOXXES HQ Control Center"

        className="w-full rounded-[32px]"

        loading="lazy"

      />

    </div>

<div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 text-sm">

  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">

    HQ Reporting

  </span>

  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">

    Menu Control

  </span>

  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">

    Price Sync

  </span>

  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">

    Channel Menus

  </span>

   <span className="px-4 py-2 rounded-full bg-slate-100 text-center">

    Campaigns

  </span>

  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">

    HQ Deploy

  </span>

  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">

    Multi-Location

  </span>

  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">

    KPI Tracking

  </span>

</div>

  </div>

</section>



{/* ANALYTICS DASHBOARD */}

<section id="analytics-dashboard" className="scroll-mt-24 py-24 sm:py-32 bg-transparent">

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

  loading="lazy"

/>



    </div>

<div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">

   <div>✓ Sales</div>

  <div>✓ Inventory</div>

  <div>✓ Workforce</div>

  <div>✓ Multi-Location</div>

  <div>✓ Dashboards</div>

  <div>✓ Financials</div>

  <div>✓ KPI Tracking</div>

  <div>✓ Executive View</div>

</div>

  </div>

</section> 



{/* INCLUDED WITH EVERY DEPLOYMENT */}

<section className="pt-20 pb-24 sm:pt-12 sm:pb-32 bg-white">

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





      {/* FINAL CTA */}

      <section className="py-24 sm:py-32 text-center px-6">



        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">

          Ready to modernize your operations?

        </h2>





        <p className="mt-4 text-slate-500">

          Enterprise-grade infrastructure for scalable hospitality systems.

        </p>



        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

  <Link

    href="/request-demo"

    className="rounded-full bg-[#88d21a] px-6 py-3 text-center text-sm font-medium text-[#17210c] shadow-sm transition hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"

  >

    Request Demo

  </Link>



  <Link

    href="/hardware"

    className="rounded-full border border-[#88d21a] px-6 py-3 text-center text-sm font-medium text-[#26351a] transition hover:bg-[#88d21a] hover:text-[#17210c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"

  >

    Explore Hardware

  </Link>



  <Link

    href="/pricing"

    className="rounded-full border border-[#88d21a] px-6 py-3 text-center text-sm font-medium text-[#26351a] transition hover:bg-[#88d21a] hover:text-[#17210c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"

  >

    Pricing

  </Link>

</div>

      </section>





    </div>

  );

}