"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesGrid from "@/components/FeaturesGrid";
import { QRCodeSVG } from "qrcode.react";
import CustomerSuccess from "@/components/CustomerSuccess";



const OFFER_END_DATE = "2026-11-08";


const offerActive =
  new Date(OFFER_END_DATE).getTime() > new Date().getTime();

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="relative text-slate-900 overflow-hidden isolate">
      
      {/* NOISE LAYER */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03] z-50"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
{/* ECOSYSTEM RIBBON (ambient SaaS layer) */}
<div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
  <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1400px] h-[300px] rotate-[-12deg] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent blur-[60px] animate-pulse-slow" />

  <div className="absolute bottom-[10%] right-[-300px] w-[1200px] h-[250px] rotate-[18deg] bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent blur-[80px] animate-pulse-slower" />
</div>
      

      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] bg-slate-200/40 blur-[180px] rounded-full" />
      </motion.div>

      {/* HEADER */}
      <Header />
      

{/* HERO */}
<section
  id="hero"
  ref={ref}
  className="relative isolate w-full overflow-hidden bg-transparent text-center px-6 sm:px-8 lg:px-6 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20"
>
  {/* BACKGROUND VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    aria-hidden="true"
    tabIndex={-1}
    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
  >
    <source src="https://hoxxes.app/images/hero-video.mp4" type="video/mp4" />
  </video>

  {/* SOFT WHITE OVERLAY */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/55 via-white/60 to-white/95"
  />

  {/* HERO CONTENT */}
  <motion.div
    className="relative z-10 mx-auto max-w-5xl"
    initial="hidden"
    animate="show"
    transition={{ staggerChildren: 0.08 }}
  >
    <motion.div
      variants={fadeUp}
      className="text-[10px] sm:text-xs tracking-[0.35em] text-slate-400 uppercase"
    >
      Restaurant & Retail Operating System
    </motion.div>

    <motion.h1
      variants={fadeUp}
      className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
    >
      The Operating System
      <span className="block text-slate-500 mt-2">
        for Restaurants & Retail
      </span>
    </motion.h1>

    <motion.p
      variants={fadeUp}
      className="mt-6 text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
    >
      One ecosystem. Software. Hardware. Intelligence.
      <br />
      POS, Self-Service Kiosk, Kitchen Display System (KDS), QR Ordering,
      Inventory Management and Analytics—all in one Restaurant & Retail
      Operating System.
    </motion.p>

   
<motion.div
  variants={fadeUp}
  className="mt-10 flex flex-col items-center w-full"
>
  <div className="mb-4 text-center">
    <div className="text-xs uppercase tracking-[0.3em] text-emerald-600 font-semibold">
      30 Days Free
    </div>

    <div className="mt-1 text-sm text-slate-500">
      Full platform access. Hardware sold separately.
    </div>
  </div>

  <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
    

    <Button href="/software" variant="outline">
      Explore Platform
    </Button>

    <Button href="/hardware" variant="outline">
      Buy Hardware
    </Button>
  </div>
  {/* CUSTOMER LOGOS */}
<motion.div
  variants={fadeUp}
  className="mt-12 sm:mt-14 mx-auto w-full max-w-5xl"
>
  <div className="relative w-full overflow-hidden">
    <LogoMarquee />
  </div>
</motion.div>
</motion.div>
</motion.div>
</section>
    
    

{/* NO GAP AT ALL */}
<div className="m-0 p-0 leading-none" />

{/* FEATURES DIRECTLY */}
<FeaturesGrid />




{/* QR ORDERING — 3 STEP STORY */}

<section
  id="qr-ordering"
  className="relative overflow-hidden bg-transparent py-20 sm:py-24"
>
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#52820f]">
        Smart QR Ordering
      </span>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#17210c] sm:text-4xl lg:text-5xl">
        One scan.
        <span className="text-[#88d21a]"> Endless possibilities.</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
        A smarter dining experience for your guests and complete
        control for your business — all connected through one QR system.
      </p>
    </motion.div>

    {/* STORY GRID */}
    <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-3">

      {/* STEP 01 — SCAN */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white sm:rounded-[28px]"
      >
        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-[0.2em] text-[#52820f]">
              STEP 01
            </span>
            <span className="rounded-full bg-[#f5fce9] px-3 py-1 text-xs font-semibold text-[#52820f]">
              Scan
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-[#17210c]">
            Scan & Discover
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
            One simple scan opens your digital menu instantly.
            No app installation. No waiting.
          </p>

          {/* QUICK SCAN HIGHLIGHT */}
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#88d21a]/15 bg-[#f8faf6] p-3.5 sm:mt-7 sm:p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#52820f] shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M4 9V5a1 1 0 0 1 1-1h4M15 4h4a1 1 0 0 1 1 1v4M20 15v4a1 1 0 0 1-1 1h-4M9 20H5a1 1 0 0 1-1-1v-4" />
                <rect x="8" y="8" width="8" height="8" rx="1" />
                <path d="M10.5 10.5h3v3h-3z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#17210c]">Your menu, one scan away</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Guests scan the table QR and start browsing instantly.</p>
            </div>
            <span className="ml-auto h-2.5 w-2.5 shrink-0 rounded-full bg-[#88d21a] shadow-[0_0_0_4px_rgba(136,210,26,0.12)]" />
          </div>
        </div>

        {/* PHONE VISUAL */}
        <div className="relative mt-auto flex min-h-[230px] items-end justify-center overflow-hidden bg-[#f6f9f1] px-5 pt-5 sm:min-h-[310px] sm:px-6 sm:pt-6">
          <div className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 rounded-full bg-[#88d21a]/15 blur-3xl" />

          <div className="relative w-[150px] overflow-hidden rounded-t-[26px] border-[4px] border-b-0 border-[#17210c] bg-white shadow-[0_15px_45px_rgba(23,33,12,0.16)] sm:w-[205px] sm:rounded-t-[30px] sm:border-[5px]">
            <img
              src="https://hoxxes.app/images/qr-menu.jpg"
              alt="HOXXES digital menu displayed on a smartphone"
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 shadow-md">
            <span className="h-2 w-2 rounded-full bg-[#88d21a]" />
            <span className="text-[11px] font-medium text-[#17210c]">
              No app required
            </span>
          </div>
        </div>
      </motion.div>

      {/* STEP 02 — INTERACT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white sm:rounded-[28px]"
      >
        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-[0.2em] text-[#52820f]">
              STEP 02
            </span>
            <span className="rounded-full bg-[#f5fce9] px-3 py-1 text-xs font-semibold text-[#52820f]">
              Interact
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-[#17210c]">
            Order & Enjoy
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
            Browse the menu and order anytime from the table.
          </p>
        </div>

        {/* CUSTOMER ACTIONS */}
        <div className="mt-auto flex flex-1 flex-col justify-center gap-2.5 bg-[#f6f9f1] p-5 sm:gap-3 sm:p-7">

          {/* MENU */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v17H7.5A2.5 2.5 0 0 0 5 21.5z" />
                <path d="M5 4.5v17M9 7h7M9 11h7" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#17210c]">Browse the Menu</h4>
              <p className="mt-1 text-xs text-slate-500">Explore products and prices</p>
            </div>
          </div>

          {/* ORDER */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M3 8h18M4 8l1-2h14l1 2M12 8v10M8 20h8" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#17210c]">Order at the Table</h4>
              <p className="mt-1 text-xs text-slate-500">Place orders directly</p>
            </div>
          </div>

          {/* WAITER */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M12 3v3M5 8h14M7 8l-2 12h14L17 8" />
                <path d="M9 13h6" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#17210c]">Call Your Waiter</h4>
              <p className="mt-1 text-xs text-slate-500">Request assistance anytime</p>
            </div>
          </div>

          {/* BILL */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <rect x="5" y="2.5" width="14" height="19" rx="2" />
                <path d="M9 7h6M9 11h6M9 15h2M14 15h1" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#17210c]">View Your Bill</h4>
              <p className="mt-1 text-xs text-slate-500">Check your current bill</p>
            </div>
          </div>

          {/* REPEAT ORDERS — COUNTER NOTIFICATION */}
          <div className="rounded-2xl border border-[#88d21a]/20 bg-white p-3 shadow-sm sm:p-4">
            <div className="flex items-start gap-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                  <path d="M10 21h4" />
                </svg>
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-[#17210c]">Order Again, Anytime</h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Order again anytime. The counter gets a bell alert, and each order is added to the same table.
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-[#f8faf6] px-3 py-2.5">
              <div className="flex min-w-0 items-center gap-2">
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#52820f] shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                    <path d="M10 21h4" />
                  </svg>
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">1</span>
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-[#17210c]">New order received</p>
                  <p className="text-[10px] text-slate-500">Counter notification</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5">
                <span className="text-[10px] font-medium text-slate-500">Table 04</span>
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">1</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* STEP 03 — MANAGE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.24 }}
        className="flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white sm:rounded-[28px]"
      >
        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-[0.2em] text-[#52820f]">
              STEP 03
            </span>
            <span className="rounded-full bg-[#f5fce9] px-3 py-1 text-xs font-semibold text-[#52820f]">
              Manage
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-[#17210c]">
            Stay in Control
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
            Manage every table QR code directly from your HOXXES Back Office.
          </p>
        </div>

        {/* MANAGEMENT VISUAL */}
        <div className="flex flex-1 flex-col bg-[#f6f9f1] p-5 sm:p-7">

          <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm sm:p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#88d21a]/15 text-[#52820f]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <path d="M14 14h3v3h-3zM20 14v2M14 20h2M20 19v2M18 21h3" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#17210c]">QR Management</p>
                <p className="text-xs text-slate-500">Back Office</p>
              </div>
              <span className="ml-auto rounded-full bg-[#88d21a]/15 px-2.5 py-1 text-[10px] font-semibold text-[#52820f]">
                Active
              </span>
            </div>

            <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-[#f8faf6] p-3">
                <div>
                  <p className="text-xs font-semibold text-[#17210c]">Static QR Code</p>
                  <p className="mt-1 text-[11px] text-slate-500">Permanent table code</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#88d21a]" />
              </div>

              <div className="flex items-center justify-between rounded-xl bg-[#f8faf6] p-3">
                <div>
                  <p className="text-xs font-semibold text-[#17210c]">Temporary QR Code</p>
                  <p className="mt-1 text-[11px] text-slate-500">Create when needed</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#88d21a]" />
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1.5 sm:mt-4 sm:gap-2">
              {[
                "Instant activation",
                "4 download styles",
                "One-click copy",
                "Delete anytime",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0 text-[#72b914]">
                    <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-xs leading-5 text-[#52820f] sm:mt-4">
            No technical assistance. No waiting. Full control from your Back Office.
          </p>

          {/* LIVE DEMO */}
          <div className="mt-4 pt-2 sm:mt-auto sm:pt-6">
            <div className="flex items-center gap-3 rounded-2xl bg-[#17210c] p-3.5 text-white sm:gap-4 sm:p-4">
              <div className="shrink-0 rounded-lg bg-white p-2">
                <QRCodeSVG
                  value="https://qr.hoxxes.com/qr/SSI718JKZ770"
                  size={76}
                  level="H"
                  bgColor="#ffffff"
                  fgColor="#17210c"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#a9d96a]">
                  Live Demo
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Try Smart QR Ordering
                </p>
                <a
                  href="https://qr.hoxxes.com/qr/SSI718JKZ770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#a9d96a] transition hover:text-white"
                >
                  Explore Live Menu
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</section>


{/* UNIFIED INFRASTRUCTURE */}

<section className="relative overflow-hidden bg-transparent py-20 sm:py-28">
  <div className="mx-auto max-w-6xl px-6">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="mb-4 text-xs uppercase tracking-[0.3em] text-emerald-600">
        Unified Infrastructure
      </div>

      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        One Platform. Four Ordering Channels.
      </h2>

      <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-500">
        Every order flows into one connected platform, linking ordering,
        kitchen operations, inventory, workforce and multi-location management.
      </p>
    </motion.div>


    {/* ORDERING CHANNELS */}
    <div className="relative mt-16">

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        {[
          {
            title: "QR Ordering",
            description: "Guests browse menus and order directly from the table.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <path d="M14 14h3v3h-3zM19 14h2M14 19h7" />
              </svg>
            ),
          },
          {
            title: "POS Ordering",
            description: "Process orders through Web or Android POS.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <path d="M8 6h8M8 10h8M8 14h2M14 14h2M8 18h8" />
              </svg>
            ),
          },
          {
            title: "Kiosk Ordering",
            description: "Offer a guided self-service ordering experience.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
                <rect x="4" y="2" width="16" height="15" rx="2" />
                <path d="M9 21h6M12 17v4M8 6h8M8 10h5" />
              </svg>
            ),
          },
          {
            title: "Online Ordering",
            description: "Accept orders through your digital storefront.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
              </svg>
            ),
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/60 hover:shadow-[0_16px_35px_rgba(23,33,12,0.07)] sm:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f] transition-colors duration-300 group-hover:bg-[#88d21a]/20">
              {item.icon}
            </div>

            <h3 className="mt-4 text-sm font-semibold text-[#17210c] sm:text-base">
              {item.title}
            </h3>

            <p className="mt-2 max-w-[200px] text-xs leading-5 text-slate-500 sm:text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}

      </div>


      {/* CONNECTING FLOW */}
      <div className="relative flex h-24 items-center justify-center">
        <div className="absolute inset-x-[12.5%] top-0 hidden h-px bg-gradient-to-r from-transparent via-[#88d21a]/60 to-transparent lg:block" />

        <div className="absolute top-0 h-full w-px bg-gradient-to-b from-[#88d21a]/60 via-[#88d21a] to-[#88d21a]/60" />

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#88d21a]/40 bg-white text-[#52820f] shadow-sm"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
            <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>


      
{/* HOXXES AI CORE */}
<motion.div
  initial={{ opacity: 0, scale: 0.94 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="relative mx-auto flex min-h-[300px] max-w-2xl items-center justify-center overflow-hidden rounded-3xl"
>
  {/* Ambient AI glow */}
  <div className="absolute inset-0 rounded-3xl bg-[#88d21a]/[0.06] blur-2xl" />

  {/* Energy orbit */}
  <div
    className="pointer-events-none absolute h-[260px] w-[260px] animate-[spin_8s_linear_infinite] rounded-full"
    style={{
      background:
        "conic-gradient(from 0deg, transparent 0deg, transparent 210deg, #52820f 245deg, #88d21a 285deg, #eaffc7 305deg, transparent 335deg, transparent 360deg)",
      maskImage:
        "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 1px))",
      WebkitMaskImage:
        "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 1px))",
    }}
  />

  {/* Secondary orbit */}
  <div className="pointer-events-none absolute h-[220px] w-[220px] animate-[spin_12s_linear_infinite_reverse] rounded-full border border-[#88d21a]/20" />

  {/* Central AI core */}
  <motion.div
    animate={{
      boxShadow: [
        "0 0 20px rgba(136,210,26,0.15), inset 0 0 15px rgba(136,210,26,0.08)",
        "0 0 55px rgba(136,210,26,0.4), inset 0 0 30px rgba(136,210,26,0.18)",
        "0 0 20px rgba(136,210,26,0.15), inset 0 0 15px rgba(136,210,26,0.08)",
      ],
      scale: [1, 1.035, 1],
    }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-[#88d21a]/50 bg-[#1b2b10] text-center sm:h-40 sm:w-40"
  >
    {/* AI symbol */}
    <motion.div
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="mb-2 text-3xl font-light tracking-widest text-[#b9f76b]"
    >
      
    </motion.div>

    <span className="text-sm font-semibold tracking-[0.22em] text-white">
      HOXXES
    </span>
    <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#88d21a]">
      One ecosystem
    </span>
  </motion.div>

  
</motion.div>



      {/* FLOW TO OPERATIONS */}
      <div className="relative flex h-24 items-center justify-center">
        <div className="absolute top-0 h-full w-px bg-gradient-to-b from-[#88d21a]/70 to-[#88d21a]/40" />

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#88d21a]/40 bg-white text-[#52820f] shadow-sm"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
            <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>


      {/* CONNECTED OPERATIONS */}
      <div>
        <div className="mb-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Connected Operations
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Connect ordering with the tools your team uses every day.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

          {[
            {
              title: "Kitchen Display System",
              description: "Kitchen order workflow",
              icon: "kitchen",
            },
            {
              title: "Customer Display System",
              description: "Customer-facing order display",
              icon: "display",
            },
            {
              title: "Self-Service Kiosk",
              description: "Automated ordering",
              icon: "kiosk",
            },
            {
              title: "Caller ID",
              description: "Incoming call identification",
              icon: "phone",
            },
            {
              title: "Payment Terminal Integration",
              description: "Connected payment workflow",
              icon: "payment",
              comingSoon: true,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`group relative flex min-h-[150px] flex-col items-center justify-center rounded-2xl border bg-white p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5 ${
                item.comingSoon
                  ? "border-dashed border-slate-300 bg-slate-50/80"
                  : "border-slate-200/80 hover:border-[#88d21a]/50"
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                item.comingSoon
                  ? "bg-slate-100 text-slate-500"
                  : "bg-[#f5fce9] text-[#52820f] group-hover:bg-[#88d21a]/20"
              }`}>
                {item.icon === "kitchen" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="13" rx="2" />
                    <path d="M8 21h8M12 17v4M7 8h4M7 12h7" />
                  </svg>
                )}

                {item.icon === "display" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4M7 8h10M7 12h6" />
                  </svg>
                )}

                {item.icon === "kiosk" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
                    <rect x="5" y="2" width="14" height="16" rx="2" />
                    <path d="M9 22h6M12 18v4M8 6h8M8 10h5" />
                  </svg>
                )}

                {item.icon === "phone" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
                    <path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
                  </svg>
                )}

                {item.icon === "payment" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 10h18M7 15h4" />
                  </svg>
                )}
              </div>

              <h3 className="mt-3 text-xs font-semibold leading-5 text-[#17210c] sm:text-sm">
                {item.title}
              </h3>

              <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                {item.description}
              </p>

              {item.comingSoon && (
                <span className="mt-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-amber-700">
                  Coming Soon
                </span>
              )}
            </motion.div>
          ))}

        </div>
      </div>

    </div>

  </div>
</section>

  

{/* CITY PARTNER — BRAND CTA */}
<section className="px-4 py-12 sm:px-6 sm:py-16">
  <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-r from-[#88d21a] via-[#70b914] to-[#52820f] px-7 py-10 text-white shadow-xl shadow-[#52820f]/15 sm:px-12 sm:py-14 lg:px-12 lg:py-12">

    {/* SUBTLE DECORATIVE GLOW */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-white/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#17210c]/10 blur-3xl"
    />

    <div className="relative grid gap-10 lg:grid-cols-2 lg:items-stretch">

      {/* LEFT: HEADLINE */}
      <div className="flex flex-col items-start justify-between gap-8">
        <div>
          <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[52px]">
            Your Network.
            <br />
            Your City.
            <br />
            Your Opportunity.
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-white/85 sm:text-base">
  Connect local businesses with Hoxxes.
  <br />
  Be the One Who Brings Innovation to Your City.
</p>
      </div>

      {/* RIGHT: BENEFITS + ACTIONS */}
      <div className="relative flex flex-col justify-between gap-10">

        <div className="space-y-5 lg:pr-32 lg:pt-1">
          {[
            "Introduce local businesses to Hoxxes.",
            "Build relationships in your city.",
            "Grow through successful partnerships.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/80 text-sm leading-none">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </span>

              <p className="pt-0.5 text-base font-medium leading-6 text-white sm:text-lg">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* HOXXES PREMIUM SEAL */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden sm:block lg:right-0 lg:top-0">
          <div className="relative flex h-[108px] w-[108px] rotate-6 items-center justify-center rounded-full border-2 border-white/80 bg-[#17210c]/15 shadow-[0_8px_30px_rgba(23,33,12,0.22)] backdrop-blur-sm transition-transform duration-500 sm:h-[132px] sm:w-[132px]">

            <div className="absolute inset-[5px] rounded-full border border-dashed border-white/70" />

            <svg
              viewBox="0 0 120 120"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="hoxxes-seal-circle"
                  d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                />
              </defs>

              <text
                fill="white"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="2"
              >
                <textPath href="#hoxxes-seal-circle" startOffset="0%">
                  SOFTWARE • HARDWARE • ONE PLATFORM •
                </textPath>
              </text>
            </svg>

            <div className="flex flex-col items-center justify-center text-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                className="h-7 w-7 sm:h-8 sm:w-8"
                aria-hidden="true"
              >
                <path
                  d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z"
                  strokeLinejoin="round"
                />
                <path
                  d="m9 12 2 2 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mt-1 text-[10px] font-extrabold tracking-[0.16em] text-white sm:text-xs">
                HOXXES
              </span>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href="/request-demo"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white bg-transparent px-6 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
          >
            Request Demo
          </a>

          <a
            href="https://hoxxes.app/city-partner/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-center text-sm font-medium text-[#52820f] transition-colors duration-200 hover:bg-[#88d21a] hover:text-[#17210c]"
          >
            Become a City Partner
          </a>
        </div>

      </div>
    </div>
  </div>
</section>

      

{/* MULTI-LOCATION MANAGEMENT */}

<section
  id="multi-location"
  className="relative overflow-hidden bg-transparent py-24 sm:py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Multi-Location
      </div>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Manage every location from HQ.
      </h2>

      <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-500">
        Manage products, menus, pricing, inventory and operations across
        every location from one centralized platform.
      </p>
    </motion.div>


    {/* MAIN CONTENT */}
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

      {/* LEFT: BENEFITS */}
      <div className="space-y-4">

        {/* FEATURE 1 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/50 hover:shadow-[0_16px_40px_rgba(23,33,12,0.06)] sm:p-7"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f] transition-colors group-hover:bg-[#88d21a]/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22.5z" />
                <path d="M4 5.5v17M8 7h8M8 11h8M8 15h5" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#17210c]">
                Centralized Products & Menus
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Create products, ingredients, categories and menus once,
                then synchronize them across selected or all locations.
              </p>
            </div>
          </div>
        </motion.div>


        {/* FEATURE 2 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/50 hover:shadow-[0_16px_40px_rgba(23,33,12,0.06)] sm:p-7"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f] transition-colors group-hover:bg-[#88d21a]/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M3 7h18M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
                <rect x="3" y="7" width="18" height="14" rx="2" />
                <path d="M8 12h8M8 16h4" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#17210c]">
                Unified Pricing & Promotions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Manage prices, discounts and promotions centrally,
                while maintaining control over individual locations.
              </p>
            </div>
          </div>
        </motion.div>


        {/* FEATURE 3 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/50 hover:shadow-[0_16px_40px_rgba(23,33,12,0.06)] sm:p-7"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f] transition-colors group-hover:bg-[#88d21a]/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="8" height="8" rx="1.5" />
                <rect x="13" y="3" width="8" height="5" rx="1.5" />
                <rect x="13" y="10" width="8" height="11" rx="1.5" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#17210c]">
                Centralized Business Overview
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Access sales, inventory and operational information
                across your locations from one central dashboard.
              </p>
            </div>
          </div>
        </motion.div>

      </div>


      {/* RIGHT: HQ CONTROL CENTER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute inset-8 rounded-full bg-[#88d21a]/10 blur-3xl"
        />

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_24px_70px_rgba(23,33,12,0.07)] sm:p-8">

          {/* DASHBOARD HEADER */}
          <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
                HOXXES
              </p>

              <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#17210c] sm:text-xl">
                Control Center
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                One overview. Multiple locations.
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#88d21a] text-[#17210c] shadow-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </div>
          </div>


          {/* CONNECTION LINE */}
          <div className="relative py-6">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#88d21a] via-[#88d21a]/50 to-slate-200" />

            <div className="relative mx-auto flex w-fit items-center gap-3 rounded-2xl border border-[#88d21a]/40 bg-[#f5fce9] px-5 py-3.5 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#88d21a] text-[#17210c]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h1M14 10h1M9 14h1M14 14h1M10 21v-3h4v3" />
                </svg>
              </span>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#52820f]">
                  Headquarters
                </p>
                <p className="text-sm font-semibold text-[#17210c]">
                  Central Management
                </p>
              </div>
            </div>
          </div>


          {/* LOCATIONS */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">

            {[
              { name: "Location A", id: "01" },
              { name: "Location B", id: "02" },
              { name: "Location C", id: "03" },
              { name: "Location D", id: "04" },
            ].map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/60 hover:shadow-md sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-colors group-hover:bg-[#f5fce9] group-hover:text-[#52820f]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h1M14 10h1M9 14h1M14 14h1M10 21v-3h4v3" />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
                      Branch {location.id}
                    </p>

                    <p className="mt-1 truncate text-sm font-semibold text-[#17210c]">
                      {location.name}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#88d21a]" />
                  <span className="text-xs text-slate-500">
                    Centrally managed
                  </span>
                </div>
              </motion.div>
            ))}

          </div>


          
{/* SHARED CONTROLS */}
<div className="mt-6 border-t border-slate-100 pt-5">
  <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-left">
    Centralized controls
  </p>

  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
    {[
      "Products",
      "Ingredients",
      "Menus",
      "Pricing",
      "Promotions",
      "Synchronization",
    ].map((item) => (
      <span
        key={item}
        className="flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-2 py-2 text-center text-[11px] font-medium leading-tight text-slate-600 transition-colors hover:border-[#88d21a]/50 hover:bg-[#f5fce9] hover:text-[#52820f] sm:px-3 sm:text-xs"
      >
        {item}
      </span>
    ))}
  </div>
</div>

</div>
</motion.div>

</div>

</div>
</section>


{/* HOLOBOX ADVERTISING */}

<section id="holobox" className="py-20 sm:py-36 bg-transparet overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <div className="text-xs tracking-[0.35em] text-emerald-600 font-semibold mb-5">
        HOLOBOX ADVERTISING
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        Put Your Brand in the Spotlight.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Promote your business with engaging video advertising on HoloBox.
        Choose your campaign duration, upload your video, and let your brand
        stand out.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative flex justify-center"
      >
        <div className="absolute w-[450px] h-[450px] bg-emerald-400/20 rounded-full blur-[120px]" />

        <img
          src="https://hoxxes.app/images/holo.png"
          alt="HoloBox Advertising Display"
          className="relative z-10 w-full max-w-[500px] object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium uppercase tracking-wider">
          Advertising Packages
        </div>

        <h3 className="mt-6 text-3xl font-semibold">
          Make every second count.
        </h3>

        <p className="mt-4 text-slate-500 leading-relaxed">
          Upload your promotional video and choose a package that fits
          your business. Start with a free one-time demo, or select
          a longer campaign to keep your brand visible on HoloBox.
          All content is reviewed before publication.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          <div>✓ Video Advertising</div>
          <div>✓ Flexible Campaign Packages</div>
          <div>✓ 1, 3, 6 & 12-Month Options</div>
          <div>✓ Free One-Time Demo</div>
          <div>✓ Simple Video Upload</div>
          <div>✓ Content Review Before Display</div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button
            href="https://hoxxes.app/holobox/upload_form.html"
            variant="primary"
          >
            Start Advertising
          </Button>

          <Button href="/hardware" variant="outline">
            Explore Hardware
          </Button>
        </div>
      </motion.div>

    </div>
  </div>
</section>

<CustomerSuccess />
   

{/* FAQ */}
<section className="py-20 sm:py-32 bg-transparent border-t border-slate-200">
  <div className="max-w-4xl mx-auto px-6">

    <div className="text-center mb-16">

      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        FAQ
      </div>

      <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
        Frequently Asked Questions
      </h2>

      <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-7">
        Find answers about HOXXES Restaurant & Retail Operating System,
        including POS, QR Ordering, Self-Service Kiosks, Kitchen Display
        System (KDS), hardware, integrations and cloud management.
      </p>

    </div>

    <div className="divide-y divide-slate-200">

      {/* 1 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          What is HOXXES?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          HOXXES is a Restaurant & Retail Operating System that combines
          POS, Self-Service Kiosks, Kitchen Display System (KDS), QR Ordering,
          Online Ordering, Analytics and AI into one unified platform.
        </p>
      </details>

      {/* 2 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Does HOXXES work offline?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. The Android POS application continues working offline and
          automatically synchronizes data once the connection is restored.
        </p>
      </details>

      {/* 3 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Does HOXXES support multiple locations?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. Manage restaurants and retail locations from one centralized
          HQ Control Center with real-time synchronization.
        </p>
      </details>

      {/* 4 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Does HOXXES support Kitchen Display System (KDS)?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. KDS is part of the HOXXES platform and can be activated
          based on your operational requirements. Orders from POS,
          QR Ordering and Online Ordering can be routed directly to
          kitchen stations.
        </p>
      </details>

      {/* 5 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Does HOXXES support QR Ordering?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. Customers can scan QR codes, browse digital menus,
          place orders and call waiters directly from their phones.
        </p>
      </details>

      {/* 6 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Does HOXXES support Self-Service Kiosks?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. Self-Service Kiosks are part of the HOXXES platform and
          can be activated when needed. They integrate with POS, kitchen
          operations and centralized management.
        </p>
      </details>

      {/* 7 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Does HOXXES support loyalty and membership?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. HOXXES supports loyalty programs, membership, digital wallets,
          vouchers and branded customer applications.
        </p>
      </details>

      {/* 8 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Can I use my own hardware?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. HOXXES supports compatible Android devices together with
          enterprise hardware including POS terminals, kiosks and kitchen displays.
        </p>
      </details>

      {/* 9 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Is HOXXES suitable for retail businesses?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. Besides restaurants, HOXXES supports retail businesses with
          POS, inventory management, online ordering and centralized operations.
        </p>
      </details>

      {/* 10 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Does HOXXES support fiscal printers?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. HOXXES integrates with supported fiscal printers and
          local fiscalization requirements where available.
        </p>
      </details>

      {/* 11 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Is card payment integration available?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Card payment terminal integration is currently in development
          and will be available in a future release.
        </p>
      </details>

      {/* 12 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Can I migrate from another POS system?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. Our team assists with menu import, configuration, staff
          onboarding and data migration whenever possible.
        </p>
      </details>

      {/* 13 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Does HOXXES support cloud management?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. Every location is connected to a centralized cloud platform
          for real-time monitoring, reporting and management.
        </p>
      </details>

      {/* 14 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Can HOXXES be customized for my business?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          Yes. HOXXES can be configured to match your workflows,
          branding, menus and operational requirements.
        </p>
      </details>

      {/* 15 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
          Which businesses use HOXXES?

          <span className="text-3xl font-light text-slate-400 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 text-slate-500 leading-7">
          HOXXES is designed for restaurants, cafés, bars, bakeries,
          fast-food chains, hotels and retail businesses.
        </p>
      </details>

    </div>

  </div>
</section>

      {/* VALUE STRIP */}
      <section className="relative py-20 sm:py-44 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0">
  <div className="w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] bg-emerald-500 blur-[200px] opacity-20 mx-auto animate-pulse-slow" />
</div>

        <div className="relative z-10 px-6">
  <h2 className="relative z-20 text-2xl sm:text-4xl font-semibold">
    Built for Modern Restaurant & Retail Operations
    
  </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
            One unified platform connecting POS, QR Ordering, Self-Service Kiosks, Kitchen Display Systems, inventory and analytics.
          </p>
        </div>
      </section>

      
      

      {/* CTA */}
<section className="py-20 sm:py-40 text-center px-6">
  <h2 className="text-2xl sm:text-3xl font-semibold">
    Ready to get started?
  </h2>

  <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
    Experience the full HOXXES platform with 30 days of free access.
  </p>

  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
<Button href="/request-demo" variant="primary">
    Request Demo
  </Button>

  <Button href="/contact-sales" variant="outline">
    Contact Sales
  </Button>

</div>
</section>

    
<style jsx global>{`
@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.45;
  }
}

@keyframes pulse-slower {
  0%, 100% {
    transform: scale(1);
    opacity: 0.12;
  }
  50% {
    transform: scale(1.25);
    opacity: 0.3;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 5s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 6s ease-in-out infinite;
}
`}</style>
    </div>
    
  );
}