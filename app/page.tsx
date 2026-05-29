"use client";
import { spacing, text, layout } from "@/app/design-system";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Header from "@/components/Header";
import Button from "@/components/Button";

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
        ref={ref}
        className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-6 pt-28 sm:pt-32 lg:pt-36 pb-24"
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
            Enterprise infrastructure for
            <span className="block text-slate-500 mt-2">
              modern hospitality
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
            POS, QR ordering, kiosk systems, staff management, analytics —
            unified into a single operating system for scalable hospitality businesses.
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

      {/* SOFTWARE */}
      <section className="py-20 sm:py-28 bg-slate-50 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-10">
            Software Ecosystem
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {[
    ["QR Ordering", "Table-based ordering with real-time sync"],
    ["POS Infrastructure", "Offline-capable transactional platform"],
    ["Kiosk OS", "Self-service restaurant flow"],
    ["Delivery Platform", "Branded ordering applications"],
    ["Kitchen System", "Live kitchen orchestration layer"],
    ["Back Office Cloud", "Analytics, workforce and operations"],
  ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="p-5 sm:p-6 bg-white border border-slate-200 rounded-2xl shadow-sm"
              >
                <h3 className="font-medium text-base sm:text-lg">
                  {item[0]}
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  {item[1]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KIOSK */}
      <section className="relative py-24 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                Android-based kiosk systems for high-volume restaurants with full POS + analytics sync.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                {[
                  "32” interactive display",
                  "Integrated thermal printer",
                  "High-speed QR code scanner",
                  "Payment terminal support",
                  "Real-time cloud sync",
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
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="relative flex justify-center items-center"
>
  {/* Emerald Glow */}
  <div
    className="absolute w-[650px] h-[650px] bg-emerald-400/25 rounded-full blur-[180px]"
  />

  <img
    src="https://hoxxes.app/images/kiosk.svg"
    alt="Hoxxes Kiosk"
    style={{
      width: "900px",
      maxWidth: "140%",
      display: "block",
      position: "relative",
      zIndex: 10
    }}
  />
</motion.div>

          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="relative py-28 sm:py-44 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0">
  <div className="w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] bg-emerald-500 blur-[200px] opacity-20 mx-auto animate-pulse-slow" />
</div>

        <div className="relative px-6">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            One platform. Every operation.
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
            From single restaurants to enterprise chains — Hoxxes becomes your infrastructure layer.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-40 text-center px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Built for enterprise scale
        </h2>

        <p className="text-slate-500 mt-3">
          Start your digital transformation today.
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