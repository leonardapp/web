"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Button from "@/components/Button";
import LogoMarquee from "@/components/LogoMarquee";

const OFFER_END_DATE = "2026-06-30";

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
        {offerActive && (
  <motion.div
  variants={fadeUp}
  className="mb-6"
  animate={{
    scale: [1, 1.03, 1],
    opacity: [1, 0.9, 1],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
    <Link
  href="/offers"
  className="
    inline-flex
    items-center
    rounded-full
    border
    border-emerald-200
    bg-white
    px-5
    py-2.5
    text-xs
    font-semibold
    tracking-[0.2em]
    uppercase
    text-emerald-700
    shadow-[0_10px_40px_rgba(16,185,129,0.12)]
    transition-all
hover:border-emerald-400
hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)]
hover:-translate-y-0.5
  "
>
  Current Promotions & Offers
</Link>
  </motion.div>
)}
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
            One ecosystem.
Software. Hardware. Intelligence.
      Hoxxes connects ordering, operations and customer experiences
into one unified platform.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button href="/request-demo" variant="primary">
              Request Demo
            </Button>
           


            <Button href="/software" variant="outline">
              Explore Platform
            </Button>
          </motion.div>
          
        </motion.div>
      </section>
      

     {/* TRUSTED BY */}
<section className="pb-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">
      <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
        Trusted by Businesses
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Powering restaurants and retail operations across multiple locations.
      </p>
    </div>

    <div className="relative overflow-hidden mt-10">

  <LogoMarquee />

</div>
<motion.div
  variants={fadeUp}
  className="mt-16"
>
  <img
    src="https://hoxxes.app/images/hero.png"
    alt="Hoxxes Platform"
    className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl"
  />
</motion.div>

  </div>
</section> 



      {/* SOFTWARE */}
  <section id="software" className="py-20 sm:py-28 bg-transparent">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-12">
  <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
    Software Infrastructure
  </div>

  <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
    Software Ecosystem
  </h2>

  <p className="mt-5 max-w-3xl mx-auto text-slate-500">
    Modular software infrastructure covering ordering,
    operations, workforce management, inventory,
    payments and analytics across every location.
  </p>
</div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {[
  [
    "POS & Cash Management",
    "Point of sale, shift reconciliation, cash tracking and transaction management."
  ],

  [
    "Inventory & Cost Control",
    "Stock tracking, recipe management, inventory transfers and low stock alerts."
  ],

  [
    "Workforce Management",
    "Mobile attendance, staff permissions, activity tracking and operational control."
  ],

  [
    "Kitchen Operations",
    "Kitchen Display System, kitchen printers and real-time production workflows."
  ],

  [
  "Smart QR Ordering",
  "Automatic QR generation, temporary QR codes, table analytics and digital ordering experiences."
],

  [
    "Self-Service Kiosks",
    "Fully integrated self-ordering kiosks connected to POS, KDS and analytics."
  ],

  [
    "Analytics & Reporting",
    "Real-time dashboards, operational insights and automated business reports."
  ],

  [
  "HQ Synchronization Engine",
  "Synchronize products, ingredients, menus and pricing across unlimited locations from a centralized control center."
],

  [
    "Customer Loyalty",
    "Memberships, vouchers, wallet and customer engagement tools."
  ],
].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
  y: -8,
  scale: 1.02,
}}
                className="p-5 sm:p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-medium text-base sm:text-lg">
                  {item[0]}
                </h3>
                <div className="flex items-center gap-2 mt-3">
  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

  <span className="text-xs uppercase tracking-[0.15em] text-slate-400">
  {
    [
  "Operations",
  "Inventory",
  "Workforce",
  "Kitchen",
  "Ordering",
  "Hardware",
  "Analytics",
  "Enterprise",
  "Commerce",
][i]
  }
</span>
</div>

                <p className="text-sm text-slate-500 mt-2">
                  {item[1]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM FLOW */}
      
<section id="platform-flow" className="py-24 sm:py-36 bg-transparent">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <div className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-4">
      Unified Infrastructure
    </div>

    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
      One Platform. Four Ordering Channels.
    </h2>

    <p className="mt-5 text-slate-500 max-w-3xl mx-auto">
      Every order, payment and operation flows through a single infrastructure layer,
      delivering complete visibility across ordering, kitchen operations,
      inventory, workforce and multi-location management.
    </p>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
      {[
        "QR Ordering",
        "POS Ordering",
        "Kiosk Ordering",
        "Online Ordering",
      ].map((item) => (
        <div
          key={item}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
        >
          <div className="text-sm font-medium">{item}</div>
        </div>
      ))}
    </div>

    <div className="my-10 text-emerald-500 text-3xl">
  ↓
</div>

    <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-black text-white font-medium tracking-wide">
      HOXXES CORE PLATFORM
    </div>

    <div className="my-10 text-emerald-500 text-3xl">
      ↓
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">

  {[
  "Kitchen Display System",
  "Customer Display System",
  "Self-Service Kiosk",
  "Caller ID",
  "Payment Terminal Integration",
].map((item, i, arr) => (
  <div
    key={item}
    className={`rounded-2xl border border-slate-200 p-5 bg-slate-50
min-h-[120px] flex flex-col items-center justify-center text-center
${i === arr.length - 1 ? "col-span-2 md:col-span-1" : ""}
`}
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

<section id="qr-ordering" className="py-24 sm:py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Smart QR Ordering
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Every table becomes a digital ordering point.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Automatically generate QR codes for every table,
        create temporary ordering points and track customer
        engagement through real-time analytics.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold">Automatic QR Generation</h3>
        <p className="mt-2 text-sm text-slate-500">
          Every table automatically receives its own QR code.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold">Temporary QR Codes</h3>
        <p className="mt-2 text-sm text-slate-500">
          Create temporary QR codes for events, terraces and VIP areas.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold">Real-Time Analytics</h3>
        <p className="mt-2 text-sm text-slate-500">
          Monitor scans, orders and table performance instantly.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold">One-Click Printing</h3>
        <p className="mt-2 text-sm text-slate-500">
          Download and print QR codes directly from the platform.
        </p>
      </div>

    </div>

  </div>
</section>

      
{/* MULTI-LOCATION MANAGEMENT */}

<section id="multi-location" className="py-24 sm:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-14">
  <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
    Multi-Location Management
  </div>

  <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
    Manage every location from HQ.
  </h2>

  <p className="mt-5 max-w-3xl mx-auto text-slate-500">
    Control products, ingredients, menus, pricing and operations
    across all locations from a centralized management layer.
  </p>
</div>

<div className="grid lg:grid-cols-2 gap-10 items-center">

  <div className="space-y-6">

    <div className="rounded-3xl border border-slate-200 p-6">
      <h3 className="font-semibold text-lg">
        HQ Product & Menu Synchronization
      </h3>

      <p className="mt-2 text-slate-500 text-sm">
        Create products, ingredients, categories and menus once,
        then synchronize them across one, multiple or all locations
        with a single action.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-200 p-6">
      <h3 className="font-semibold text-lg">
        Unified Pricing & Promotion Control
      </h3>

      <p className="mt-2 text-slate-500 text-sm">
        Update prices, discounts and promotions centrally
        without manually configuring every store.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-200 p-6">
      <h3 className="font-semibold text-lg">
        Real-Time Operational Visibility
      </h3>

      <p className="mt-2 text-slate-500 text-sm">
        Monitor sales, inventory, workforce and business
        performance across every location from one dashboard.
      </p>
    </div>

  </div>

  <div className="rounded-3xl bg-slate-50 border border-slate-200 p-10">

    <div className="text-center">

      <div className="inline-flex px-6 py-3 rounded-2xl bg-black text-white font-medium">
        HOXXES CONTROL CENTER
      </div>

      <div className="my-6 text-emerald-500 text-3xl">
        ↓
      </div>

      <div className="grid grid-cols-2 gap-4">

        {[
          "Location A",
          "Location B",
          "Location C",
          "Location D",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            {item}
          </div>
        ))}

      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs">
        <span className="px-3 py-1 rounded-full bg-white border">
          Products
        </span>

        <span className="px-3 py-1 rounded-full bg-white border">
          Ingredients
        </span>

        <span className="px-3 py-1 rounded-full bg-white border">
          Menus
        </span>

        <span className="px-3 py-1 rounded-full bg-white border">
          Pricing
        </span>

        <span className="px-3 py-1 rounded-full bg-white border">
          Promotions
        </span>

        <span className="px-3 py-1 rounded-full bg-white border">
          Synchronization
        </span>
      </div>

    </div>

  </div>

</div>

  </div>
</section>

{/* INVENTORY & COST CONTROL */}

<section id="inventory" className="py-24 sm:py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Inventory & Cost Control
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Control Costs Before They Control You.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Track inventory, monitor ingredient consumption,
        manage recipes and maintain full visibility over
        stock movement and operational costs.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div className="space-y-5">

        {[
          {
            title: "Recipe & Cost Control",
            description:
              "Define recipes, ingredient consumption and profitability across products.",
          },
          {
            title: "Real-Time Inventory Tracking",
            description:
              "Monitor stock levels and inventory movement across all locations.",
          },
          {
            title: "Inventory Transfers",
            description:
              "Move inventory between locations with complete transfer history.",
          },
          {
            title: "Low Stock Alerts",
            description:
              "Receive proactive notifications before inventory shortages affect operations.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">

              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>

            </div>
          </motion.div>
        ))}

      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-xl overflow-hidden"
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="px-4 py-2 rounded-full bg-emerald-500 text-white text-xs font-medium shadow-lg">
            Inventory Overview
          </div>
        </div>

        <img
          src="https://hoxxes.app/images/dashboard-overview.png"
          alt="Inventory Dashboard"
          className="w-full rounded-2xl"
        />
      </motion.div>

    </div>

  </div>
</section>

{/* WORKFORCE MANAGEMENT */}

<section id="workforce" className="py-24 sm:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Workforce Management
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Manage your workforce from anywhere.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Track attendance, manage permissions and monitor
        workforce activity across every location.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="rounded-3xl border border-slate-200 p-8">
        <h3 className="font-semibold text-xl">
          Mobile Attendance
        </h3>

        <p className="mt-3 text-slate-500">
          Employees can check in and out directly
          from their mobile devices.
        </p>

        <div className="mt-6 space-y-3 text-sm">
          <div>✓ Mobile Check-In</div>
          <div>✓ Mobile Check-Out</div>
          <div>✓ Geo-Fencing Control</div>
          <div>✓ Attendance History</div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8">
        <h3 className="font-semibold text-xl">
          Access & Permissions
        </h3>

        <p className="mt-3 text-slate-500">
          Create unlimited users with custom roles
          and operational permissions.
        </p>

        <div className="mt-6 space-y-3 text-sm">
          <div>✓ Unlimited Users</div>
          <div>✓ Custom Roles</div>
          <div>✓ Permission Control</div>
          <div>✓ Activity Tracking</div>
        </div>
      </div>

    </div>

  </div>
</section>

      

{/* EVERYTHING INCLUDED */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Included With Every Deployment
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Everything you need from day one.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Every Hoxxes deployment includes ordering,
        commerce, customer engagement and operational
        management capabilities from a unified platform.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      {/* Ordering */}
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

      {/* Commerce */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-4">
          Commerce & Delivery
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div>✓ Delivery & Pickup</div>
          <div>✓ E-Shop</div>
          <div>✓ Online Ordering</div>
          <div>✓ Membership</div>
          <div>✓ Order History</div>
        </div>
      </div>

      {/* Operations */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-4">
          Operations & Analytics
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div>✓ Wallet & Vouchers</div>
          <div>✓ Analytics Dashboard</div>
          <div>✓ Web Backoffice</div>
          <div>✓ Inventory Management</div>
          <div>✓ Workforce Management</div>
        </div>
      </div>

    </div>

    {/* Optional Modules */}
    <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8">

      <div className="text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Optional Infrastructure Modules
        </div>
        

        <h3 className="mt-3 text-2xl font-semibold">
          Extend your infrastructure.
        </h3>

        <p className="mt-3 text-slate-500">
          Additional modules available based on operational requirements.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">

  {[
  "Kitchen Display System",
  "Customer Display System",
  "Self-Service Kiosk",
  "Caller ID",
  "Payment Terminal Integration",
].map((item, i, arr) => (
  <div
  key={item}
  className={`rounded-2xl border border-slate-200 p-5 bg-slate-50
  flex flex-col items-center justify-center text-center
  ${
    i === arr.length - 1 ? "col-span-2 md:col-span-1" : ""
  }`}
>
  <div className="text-sm font-medium">
    {item}
  </div>

  {item === "Payment Terminal Integration" && (
    <div className="mt-2 text-[10px] uppercase tracking-wider text-emerald-600 font-medium">
      Coming Soon
    </div>
  )}
</div>
))}

</div>

  </div>
</div>
</section>

{/* Order management */}
<section id="order-center" className="py-24 sm:py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Order Management
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
  Order management at operational speed.
</h2>

<p className="mt-5 max-w-3xl mx-auto text-slate-500">
  Process dine-in, takeaway and delivery orders from a unified interface
  designed for high-volume operations.
</p>
    </div>

    <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-xl overflow-hidden">

      <div className="absolute top-0 sm:top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="px-3 sm:px-5 py-1 sm:py-2 rounded-full bg-emerald-500 text-white text-[10px] sm:text-xs font-medium shadow-lg whitespace-nowrap">
          Order Center
        </div>
      </div>

      <img
        src="https://hoxxes.app/images/order-center.png"
        alt="HOXXES Order Center"
        className="w-full rounded-2xl"
      />
    </div>

  </div>
</section>

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
  <div className="text-xs tracking-[0.35em] text-emerald-600 font-semibold mb-5">
    Flagship Hardware
  </div>

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
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
    <Button href="/hardware" variant="primary">
      Explore Hardware
    </Button>

    <Button href="/request-demo" variant="outline">
      Request Demo
    </Button>
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
  className="relative flex justify-center items-center"
>
  {/* Emerald Glow */}
  <div
    className="absolute w-[500px] h-[500px] bg-emerald-400/25 rounded-full blur-[140px]"
  />

  <img
  src="https://hoxxes.app/images/kiosk.svg"
  alt="Hoxxes Kiosk"
  className="relative z-10 w-full max-w-[900px] sm:max-w-[900px] max-h-[500px] object-contain"
/>
</motion.div>

           </div>
        </div>
      </section>
      {/* HOLOBOX */}
      
<section id="holobox" className="py-24 sm:py-36 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        HOXXES Innovation Lab
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        HoloBox
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Transform customer attention into unforgettable experiences
        with holographic presentations, AI-powered virtual presenters
        and immersive visual engagement.
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
          Interactive Experience Platform
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
          <Button href="/request-demo" variant="primary">
            Request Demo
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

      {/* VALUE STRIP */}
      <section className="relative py-28 sm:py-44 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0">
  <div className="w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] bg-emerald-500 blur-[200px] opacity-20 mx-auto animate-pulse-slow" />
</div>

        <div className="relative z-10 px-6">
  <h2 className="relative z-20 text-2xl sm:text-4xl font-semibold">
    The infrastructure behind
    <br />
    modern hospitality.
  </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
            From single restaurants to enterprise chains —
  Hoxxes connects ordering, payments,
  operations and analytics into one platform.
          </p>
        </div>
      </section>
      

      {/* CTA */}
<section className="py-24 sm:py-40 text-center px-6">
  <h2 className="text-2xl sm:text-3xl font-semibold">
    Ready to modernize your operations?
  </h2>

  <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
    Deploy a unified platform across restaurants,
    retail stores and enterprise locations.
  </p>

  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
<Button href="/request-demo" variant="primary">
    Request Demo
  </Button>

  <Button href="/software" variant="outline">
    Explore Platform
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