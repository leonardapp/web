"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesGrid from "@/components/FeaturesGrid";
import { QRCodeSVG } from "qrcode.react";


const OFFER_END_DATE = "2026-07-17";


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
            <Button href="/software" variant="primary">
              Explore Platform
            </Button>

            <Button href="/hardware" variant="outline">
              Explore Hardware
            </Button>
          </motion.div>
          
        </motion.div>
      </section>
      

     {/* TRUSTED BY */}
<section className="pb-4">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">
      <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
        Trusted by Businesses
      </div>

      <p className="mt-2 text-sm text-slate-500">
        Powering restaurants and retail operations across multiple locations.
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
  className="relative flex justify-center items-center scale-125 sm:scale-110 lg:scale-100"
>

  {/* Emerald Glow */}
<div
  className="absolute w-[700px] h-[700px] bg-emerald-400/25 rounded-full blur-[180px]"
/>

<img
  src="https://hoxxes.app/images/kiosk.svg"
  alt="Hoxxes Kiosk"
  className="relative z-10 w-[125vw] sm:w-[90vw] lg:w-full lg:max-w-[1400px] object-contain"
/>
</motion.div>

           </div>
        </div>
      </section>

{/* PLATFORM FLOW */}
      
<section id="platform-flow" className="py-5 sm:py-32 bg-transparent">
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

    <div className="w-[200px] sm:w-[220px] lg:w-[240px] rounded-[40px] bg-black p-3 shadow-xl">

      <div className="rounded-[32px] overflow-hidden bg-white">

        <img
          src="https://hoxxes.app/images/qr-menu.jpg"
          alt="Digital Menu"
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


{/* EVERYTHING INCLUDED */}
<section className="py-24 sm:py-32 bg-transparent">
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
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
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
<section className="py-0 px-6 border-t border-slate-200">
 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
    <Button href="/software" variant="primary">
      Explore Platform
    </Button>

    <Button href="/request-demo" variant="outline">
      Request Demo
    </Button>
  </div>

</section>
</section>


      
{/* MULTI-LOCATION MANAGEMENT */}

<section id="multi-location" className="py-24 sm:py-32 bg-transparent">
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


    
      {/* HOLOBOX */}
      
<section id="holobox" className="py-24 sm:py-36 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <div className="text-xs tracking-[0.35em] text-emerald-600 font-semibold mb-5 text-center">
        HOXXES Innovation Lab
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        Hologram BOX - HoloBox
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500 text-center">
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
          <Button href="/offers" variant="primary">
            Order HoloBox
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