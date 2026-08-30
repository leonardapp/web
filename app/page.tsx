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
      <section id="hero"
        ref={ref}
        className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-6 pt-28 sm:pt-32 lg:pt-36 pb-36 sm:pb-40"
      >
        
        <motion.div
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
            className="
              mt-6
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-semibold
              leading-[1.05]
              tracking-tight
            "
          >
            The Operating System
            <span className="block text-slate-500 mt-2">
              for Restaurants & Retail
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="
              mt-6
              text-sm
              sm:text-base
              md:text-lg
              text-slate-500
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            One ecosystem. Software. Hardware. Intelligence.

POS, Self-Service Kiosk, Kitchen Display System (KDS), QR Ordering, Inventory Management and Analytics—all in one Restaurant & Retail Operating System.
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
<section className="pb-4">
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
<CustomerSuccess />

{/* NO GAP AT ALL */}
<div className="m-0 p-0 leading-none" />

{/* FEATURES DIRECTLY */}
<FeaturesGrid />

  {/* KIOSK */}
      
      <section id="kiosk" className="relative py-24 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT */}
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <div className="text-xs tracking-[0.35em] text-emerald-600 font-semibold mb-5 text-center">
    Flagship Hardware
  </div>

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center">
    Self-service kiosks,
    <span className="block text-slate-400">
      fully integrated.
    </span>
  </h2>

  <p className="mt-6 text-slate-500 leading-relaxed">
    Android-based self-service kiosks fully integrated with POS, KDS,
    fiscal printers and payment terminals.
  </p>
  

  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
    {[
  "Fully Integrated With POS",
  "Connected To Kitchen Display System",
  "Centralized Menu Management",
  "Real-Time Reporting",
  "Multi-Location Deployment",
  "Integrated Thermal Printer",
].map((f) => (
      <div key={f}>✓ {f}</div>
    ))}
  </div>

  <div className="mt-8 flex flex-col sm:flex-row gap-3">

  <div className="w-full sm:w-auto">
    <Button href="/hardware" variant="primary">
      Explore Hardware
    </Button>
  </div>

  <div className="w-full sm:w-auto">
    <Button href="/request-demo" variant="outline">
      Request Demo
    </Button>
  </div>

</div>
</motion.div>

{/* RIGHT */}
<motion.div
  initial={{
    opacity: 0,
    y: 40,
    scale: 0.96,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.15,
  }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative z-0 flex justify-center items-center scale-125 sm:scale-110 lg:scale-100"
>
  {/* Emerald Glow */}
  <div
    className="pointer-events-none absolute w-[700px] h-[700px] bg-emerald-400/20 rounded-full blur-[180px]"
  />

  <img
    src="https://hoxxes.app/images/kiosk-produkt.png"
    alt="HOXXES Self-Service Kiosk"
    className="pointer-events-none relative z-10 w-[125vw] sm:w-[90vw] lg:w-full lg:max-w-[1400px] object-contain"
  />
</motion.div>

           </div>
        </div>
      </section>

{/* UNIFIED INFRASTRUCTURE */}
<section className="py-28 sm:py-32 bg-transparent">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Section Header */}
    <div className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-4">
      Unified Infrastructure
    </div>

    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
      One Platform. Four Ordering Channels.
    </h2>

    <p className="mt-5 text-slate-500 max-w-3xl mx-auto leading-7">
      Every order flows into one connected platform, linking ordering,
      kitchen operations, inventory, workforce and multi-location management
      in real time.
    </p>

    {/* ORDERING CHANNELS */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
      {[
        {
          title: "QR Ordering",
          description: "Customers order directly from the table.",
        },
        {
          title: "POS Ordering",
          description: "Fast ordering through Web or Android POS.",
        },
        {
          title: "Kiosk Ordering",
          description: "Self-service ordering with a guided experience.",
        },
        {
          title: "Online Ordering",
          description: "Accept orders through your digital storefront.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-6 min-h-[130px] flex flex-col items-center justify-center text-center"
        >
          <div className="text-sm font-medium">
            {item.title}
          </div>

          <p className="mt-2 text-xs leading-5 text-slate-500 max-w-[180px]">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    {/* FLOW ARROW */}
    <div className="my-10 text-emerald-500 text-3xl">
      ↓
    </div>

    {/* CORE PLATFORM */}
    <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-black text-white font-medium tracking-wide">
      HOXXES CORE PLATFORM
    </div>

    <p className="mt-4 text-sm text-slate-500">
      One operational layer connecting every part of your business.
    </p>

    {/* FLOW ARROW */}
    <div className="my-10 text-emerald-500 text-3xl">
      ↓
    </div>

    {/* CONNECTED OPERATIONS */}
    <div className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-5">
      Connected Operations
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {[
        "Kitchen Display System",
        "Customer Display System",
        "Self-Service Kiosk",
        "Caller ID",
        "Payment Terminal Integration",
      ].map((item, i, arr) => (
        <div
          key={item}
          className={`rounded-2xl border border-slate-200 p-5 bg-slate-50 min-h-[120px] flex flex-col items-center justify-center text-center ${
            i === arr.length - 1
              ? "col-span-2 md:col-span-1 opacity-75"
              : ""
          }`}
        >
          <div className="text-sm font-medium">
            {item}
          </div>

          {item === "Payment Terminal Integration" && (
            <div className="mt-2">
              <span className="inline-flex px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] uppercase tracking-wider font-medium">
                Coming Soon
              </span>
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>

     


{/* QR ORDERING & TABLE MANAGEMENT */}

<section id="qr-ordering" className="py-24 sm:py-32 bg-transparent">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Smart QR Ordering
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Every table becomes a digital ordering point.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Transform every table into a direct ordering channel.
Customers can browse menus, place orders and connect
directly with your kitchen — without installing an app.
      </p>
    </div>


    {/* FEATURES */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold">
          No App Required
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Customers scan, order and pay directly from their phone.
        </p>
      </div>


      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold">
          Instant Menu Updates
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Update prices, products and availability instantly across all tables.
        </p>
      </div>


      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold">
          Kitchen Integration
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Orders flow directly into your operational workflow.
        </p>
      </div>


      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold">
          Customer Insights
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Understand ordering behavior and improve your service.
        </p>
      </div>

    </div>



    {/* DIGITAL MENU PHONE PREVIEW */}

<div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">

  <div className="flex justify-center">

    <div className="relative w-[200px] sm:w-[220px] lg:w-[240px] rounded-[40px] bg-black p-3 shadow-xl">

      {/* Emerald Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
  <div className="w-[450px] h-[450px] absolute inset-0 bg-emerald-400/20 rounded-full blur-[140px]" />
</div>

      <div className="rounded-[32px] overflow-hidden bg-white">

        <img
          src="https://hoxxes.app/images/qr-menu.jpg"
          alt="HOXXES Digital Menu QR Ordering"
          className="w-full"
        />

      </div>

    </div>

  </div>





  <div className="flex flex-col items-center">

    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
      <QRCodeSVG
        value="https://qr.hoxxes.com/qr/SSI718JKZ770"
        size={140}
        level="H"
      />
    </div>

    <p className="mt-5 text-sm text-slate-500 text-center">
      Scan the live demo and experience Smart QR Ordering.
    </p>

  <a
  href="https://qr.hoxxes.com/qr/SSI718JKZ770"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 w-full sm:w-auto rounded-full bg-black px-8 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
>
  Explore Live Menu
</a>
    

  </div>
 </div>

</div>

</section>


{/* CORE PLATFORM */}
<section className="py-24 sm:py-32 bg-transparent">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Core Platform
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
        Everything You Need to Run Your Operation.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500 leading-7">
        Core platform capabilities for ordering, commerce, customer engagement
        and operational management — all connected through one unified system.
      </p>
    </div>

    {/* CORE CAPABILITIES */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* ORDERING */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-5">
          Ordering Infrastructure
        </div>

        <div className="space-y-3 text-sm text-slate-700">

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Web POS
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Android POS · Offline Ready
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            QR Ordering
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Android App
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            iOS App
          </div>

        </div>
      </div>

      {/* COMMERCE */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8">

        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-5">
          Commerce & Delivery
        </div>

        <div className="space-y-3 text-sm text-slate-700">

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Delivery & Pickup
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            E-Shop
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Online Ordering
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Membership
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Order History
          </div>

        </div>
      </div>

      {/* OPERATIONS */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-5">
          Operations & Analytics
        </div>

        <div className="space-y-3 text-sm text-slate-700">

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Wallet & Vouchers
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Analytics Dashboard
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Web Backoffice
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Inventory Management
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-600">✓</span>
            Workforce Management
          </div>

        </div>
      </div>

    </div>

   
    {/* CTA */}
    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

      <Button href="/learn-more" variant="primary">
        Learn More
      </Button>

      <Button href="/request-demo" variant="outline">
        Request Demo
      </Button>

    </div>

  </div>
</section>


      
{/* MULTI-LOCATION MANAGEMENT */}

<section id="multi-location" className="py-24 sm:py-32 bg-transparent">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Multi-Location
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
        Manage every location from HQ.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500 leading-7">
        Manage products, menus, pricing, inventory and operations across
        every location from one centralized platform.
      </p>
    </div>

    {/* CONTENT */}
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* FEATURES */}
      <div className="space-y-6">

        {/* PRODUCT & MENU */}
        <div className="rounded-3xl border border-slate-200 p-6 bg-white">
          <h3 className="font-semibold text-lg">
            Centralized Products & Menus
          </h3>

          <p className="mt-2 text-slate-500 text-sm leading-6">
            Create products, ingredients, categories and menus once,
            then synchronize them across selected or all locations.
          </p>
        </div>

        {/* PRICING */}
        <div className="rounded-3xl border border-slate-200 p-6 bg-white">
          <h3 className="font-semibold text-lg">
            Unified Pricing & Promotions
          </h3>

          <p className="mt-2 text-slate-500 text-sm leading-6">
            Update prices, discounts and promotions centrally without
            manually configuring each location.
          </p>
        </div>

        {/* VISIBILITY */}
        <div className="rounded-3xl border border-slate-200 p-6 bg-white">
          <h3 className="font-semibold text-lg">
            Real-Time Operational Visibility
          </h3>

          <p className="mt-2 text-slate-500 text-sm leading-6">
            Monitor sales, inventory, workforce and business performance
            across every location from one centralized dashboard.
          </p>
        </div>

      </div>

      {/* HQ VISUAL */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-10">

        <div className="text-center">

          {/* HQ */}
          <div className="inline-flex px-6 py-3 rounded-2xl bg-black text-white font-medium tracking-wide">
            HOXXES CONTROL CENTER
          </div>

          {/* FLOW */}
          <div className="my-6 text-emerald-500 text-3xl">
            ↓
          </div>

          {/* LOCATIONS */}
          <div className="grid grid-cols-2 gap-4">

            {[
              "Location A",
              "Location B",
              "Location C",
              "Location D",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium"
              >
                {item}
              </div>
            ))}

          </div>

          {/* CENTRALIZED CONTROLS */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs">

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
                className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
    
      {/* HOLOBOX */}
      
<section id="holobox" className="py-24 sm:py-36 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <div className="text-xs tracking-[0.35em] text-emerald-600 font-semibold mb-5 text-center">
        Featured Hardware
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        HoloBox Interactive Display
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500 text-center">
        Create immersive customer experiences with holographic visuals,
        AI-powered virtual presenters and interactive digital content.
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
          alt="HOXXES HoloBox"
          className="relative z-10 w-full max-w-[500px] object-contain"
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
          Interactive Experience Hardware
        </div>

        <h3 className="mt-6 text-3xl font-semibold">
          Bring products and experiences to life.
        </h3>

        <p className="mt-4 text-slate-500 leading-relaxed">
          Designed for retail locations, exhibitions,
corporate environments and hospitality venues,
HoloBox combines holographic visuals, AI-powered
presenters and interactive content to create
memorable customer experiences.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          <div>✓ Holographic Product Showcase</div>
          <div>✓ AI Virtual Presenter</div>
          <div>✓ Product Demonstrations</div>
          <div>✓ Corporate Presentations</div>
          <div>✓ Events & Exhibitions</div>
          <div>✓ Interactive Customer Engagement</div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button href="/hardware" variant="primary">
            Explore Hardware
          </Button>

          <Button
  href="https://hoxxes.app/holobox/upload_form.html"
  variant="outline"
>
  Upload Content
          </Button>
        </div>
      </motion.div>

    </div>
  </div>
</section>

{/* FAQ */}
<section className="py-28 sm:py-32 bg-transparent border-t border-slate-200">
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
      <section className="relative py-28 sm:py-44 bg-black text-white text-center overflow-hidden">
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
<section className="py-24 sm:py-40 text-center px-6">
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