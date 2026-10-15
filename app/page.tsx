"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesGrid from "@/components/FeaturesGrid";
import { QRCodeSVG } from "qrcode.react";
import CustomerSuccess from "@/components/CustomerSuccess";



const OFFER_END_DATE = "2026-09-30";


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
  className="relative isolate w-full overflow-hidden bg-transparent text-center px-6 sm:px-8 lg:px-6 pt-28 sm:pt-32 lg:pt-36 pb-36 sm:pb-40"
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

    {/* BUTTONS */}
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
        <Button href="/request-demo" variant="primary">
          Request Demo
        </Button>

        <Button href="/software" variant="outline">
          Explore Platform
        </Button>
      </div>
    </motion.div>
    
  </motion.div>
</section>     

     {/* TRUSTED BY */}
<section className="pt-6 pb-12 sm:pt-8 sm:pb-16">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Trusted by Businesses
      </div>

      <p className="mt-2 text-sm text-slate-500">
        Powering real-world restaurants and retail with one unified platform.
      </p>
    </div>

    {/* LOGOS */}
    <div className="relative overflow-hidden mt-4">
      <LogoMarquee />
    </div>
    
  </div>
</section>


{/* NO GAP AT ALL */}
<div className="m-0 p-0 leading-none" />

{/* FEATURES DIRECTLY */}
<FeaturesGrid />


{/* QR ORDERING & TABLE MANAGEMENT */}

<section
  id="qr-ordering"
  className="relative overflow-hidden bg-transparent py-20 sm:py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Smart QR Ordering
      </div>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Everything your table needs. One QR code.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
        Give guests complete control of their dining experience.
        They can browse your menu, place orders, call a waiter and
        check their table bill — all from their own phone, without
        downloading an app.
      </p>
    </motion.div>


    {/* MAIN EXPERIENCE */}
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

      {/* ORIGINAL PHONE PREVIEW */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="relative flex justify-center"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88d21a]/10 blur-3xl sm:h-96 sm:w-96"
        />

        <div className="relative w-[220px] overflow-hidden rounded-[38px] border-[5px] border-[#17210c] bg-white shadow-[0_30px_80px_rgba(23,33,12,0.18)] sm:w-[260px]">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src="https://hoxxes.app/images/qr-menu.jpg"
              alt="HOXXES digital restaurant menu on a smartphone"
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-200/80 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#88d21a]" />
          <span className="text-xs font-medium text-[#17210c]">
            No app download required
          </span>
        </div>
      </motion.div>


      {/* FEATURES + LIVE QR */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mx-auto w-full max-w-lg"
      >

        {/* FOUR FEATURES */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

          {/* MENU */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/50 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f] transition-colors group-hover:bg-[#88d21a]/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v17H7.5A2.5 2.5 0 0 0 5 21.5z" />
                <path d="M5 4.5v17M9 7h7M9 11h7" />
              </svg>
            </div>

            <h3 className="mt-4 font-semibold text-[#17210c]">
              Browse the Menu
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Explore products, descriptions and prices directly from a phone.
            </p>
          </div>


          {/* ORDER */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/50 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f] transition-colors group-hover:bg-[#88d21a]/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
                <path d="M10 11h6M13 8v6" />
              </svg>
            </div>

            <h3 className="mt-4 font-semibold text-[#17210c]">
              Order at the Table
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Place orders from the table without waiting to give them manually.
            </p>
          </div>


          {/* WAITER */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/50 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f] transition-colors group-hover:bg-[#88d21a]/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 3a7 7 0 0 0-7 7v4a2 2 0 0 0 2 2h2v-6H7a5 5 0 0 1 10 0h-2v6h2a2 2 0 0 0 2-2v-4a7 7 0 0 0-7-7z" />
                <path d="M16 19c-.8 1.2-2 2-4 2" />
              </svg>
            </div>

            <h3 className="mt-4 font-semibold text-[#17210c]">
              Call Your Waiter
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Request assistance directly from your table when needed.
            </p>
          </div>


          {/* BILL */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/50 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5fce9] text-[#52820f] transition-colors group-hover:bg-[#88d21a]/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="5" y="2.5" width="14" height="19" rx="2" />
                <path d="M9 7h6M9 11h6M9 15h2M14 15h1" />
              </svg>
            </div>

            <h3 className="mt-4 font-semibold text-[#17210c]">
              View Your Bill
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Check the current table bill and the amount due.
            </p>
          </div>

        </div>


        {/* LIVE QR DEMO */}
        <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 sm:flex-row sm:items-center sm:p-6">

          <div className="flex shrink-0 justify-center rounded-xl border border-slate-100 bg-white p-2">
            <QRCodeSVG
              value="https://qr.hoxxes.com/qr/SSI718JKZ770"
              size={112}
              level="H"
              bgColor="#ffffff"
              fgColor="#17210c"
            />
          </div>

          <div className="min-w-0 flex-1 text-center sm:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
              Try it yourself
            </p>

            <h3 className="mt-2 text-lg font-semibold text-[#17210c]">
              Experience Smart QR Ordering
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Scan the code to explore the live menu from your phone.
            </p>

            <a
              href="https://qr.hoxxes.com/qr/SSI718JKZ770"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#88d21a] px-6 py-3 text-sm font-semibold text-[#17210c] transition duration-200 hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Explore Live Menu
              <span aria-hidden="true">↗</span>
            </a>
          </div>

        </div>

      </motion.div>

    </div>


    {/* BOTTOM VALUE STATEMENT */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-slate-200/70 pt-8 text-sm text-slate-500"
    >
      <span className="inline-flex items-center gap-2">
        <span className="text-[#52820f]">✓</span>
        No app installation
      </span>

      <span className="inline-flex items-center gap-2">
        <span className="text-[#52820f]">✓</span>
        Direct table ordering
      </span>

      <span className="inline-flex items-center gap-2">
        <span className="text-[#52820f]">✓</span>
        A smoother guest experience
      </span>
    </motion.div>

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
      {/* HOXXES PREMIUM SEAL */}
<div className="pointer-events-none absolute right-3 top-3 z-20 sm:right-6 sm:top-6">
  <div className="relative flex h-[76px] w-[76px] rotate-6 items-center justify-center rounded-full border-2 border-white/80 bg-[#17210c]/15 shadow-[0_8px_30px_rgba(23,33,12,0.22)] backdrop-blur-sm transition-transform duration-500 sm:h-[132px] sm:w-[132px]">
    <div className="absolute inset-[5px] rounded-full border border-dashed border-white/70" />

    <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <path
          id="hoxxes-seal-circle"
          d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
        />
      </defs>
      <text fill="white" fontSize="8.5" fontWeight="700" letterSpacing="2">
        <textPath href="#hoxxes-seal-circle" startOffset="0%">
          SOFTWARE • HARDWARE • ONE PLATFORM •
        </textPath>
      </text>
    </svg>

    <div className="flex flex-col items-center justify-center text-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" className="h-5 w-5 sm:h-8 sm:w-8" aria-hidden="true">
        <path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="mt-1 text-[8px] font-extrabold tracking-[0.12em] text-white sm:text-xs">
        HOXXES
      </span>
    </div>
  </div>
</div>

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