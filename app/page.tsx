"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Button from "@/components/Button";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesGrid from "@/components/FeaturesGrid";



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
        {offerActive && (
  <motion.div
    className="mb-10 relative inline-flex"
    animate={{
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {/* OUTER GLOW RING */}
    <div className="absolute inset-0 -z-10 flex items-center justify-center">
      <div className="w-[240px] h-[70px] bg-black blur-2xl opacity-25 rounded-full" />
    </div>

    <Link
      href="/offers"
      className="
  relative
  inline-flex
  items-center
  rounded-full
  bg-slate-900
  px-7
  py-3.5
  text-xs
  font-semibold
  tracking-[0.25em]
  uppercase
  text-white
  shadow-[0_25px_90px_rgba(15,23,42,0.45)]
  border border-slate-800
  transition-all
  hover:scale-110
  hover:bg-slate-800
  hover:shadow-[0_35px_120px_rgba(15,23,42,0.6)]
  hover:-translate-y-1
  active:scale-95
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
      <div className="text-xs tracking-[0.35em] text-emerald-600 font-semibold mb-5 text-center">
        HOXXES Innovation Lab
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        Hologram BOX - HoloBox
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500 text-left">
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