"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Logo from "@/components/Logo";
import Header from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function HomePage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="relative bg-white text-slate-900 overflow-hidden">
      {/* NOISE LAYER */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035] z-50"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')"
        }}
      />

      {/* AMBIENT LIGHT SYSTEM */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-200/25 blur-[180px] rounded-full" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] bg-slate-200/40 blur-[180px] rounded-full" />
      </motion.div>

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section
        ref={ref}
        className="max-w-4xl mx-auto text-center px-6 py-36"
      >
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div
            variants={fadeUp}
            className="text-xs tracking-[0.35em] text-slate-400 uppercase"
          >
            Restaurant & Retail Operating System
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl md:text-6xl font-semibold leading-[1.05]"
          >
            Enterprise infrastructure for
            <span className="block text-slate-500 mt-2">
              modern hospitality
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            POS, QR ordering, kiosk systems, staff management, analytics —
            unified into a single operating system for scalable hospitality
            businesses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4 items-stretch sm:items-center w-full"
          >
            <Magnetic>
              <Link
                href="/request-demo"
                className="px-6 py-3 bg-black text-white rounded-full"
              >
                Request Demo
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href="/software"
                className="px-6 py-3 border rounded-full"
              >
                Explore Platform
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>
      </section>

      {/* SOFTWARE */}
      <section className="py-32 bg-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-12">
            Software Ecosystem
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["QR Ordering", "Table-based ordering with real-time sync"],
              ["POS Engine", "High-speed transactional system"],
              ["Kiosk OS", "Self-service restaurant flow"],
              ["Delivery Platform", "Branded ordering apps"],
              ["Kitchen System", "Live order orchestration layer"],
              ["Staff Cloud", "Enterprise workforce control"]
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md"
              >
                <h3 className="font-medium">{item[0]}</h3>
                <p className="text-sm text-slate-500 mt-2">{item[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KIOSK FLAGSHIP SECTION */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs uppercase tracking-[0.35em] text-emerald-600 font-semibold mb-6">
                Flagship Hardware
              </div>

              <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                Self-service kiosks,
                <span className="block text-slate-400">
                  fully integrated.
                </span>
              </h2>

              <p className="mt-8 text-lg text-slate-500 leading-relaxed max-w-xl">
                Android-based kiosk systems designed for high-volume
                restaurant operations, seamlessly connected with POS,
                kitchen displays, payments, and analytics.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
                {[
                  "24” dual-screen display",
                  "Integrated thermal printer",
                  "Payment terminal support",
                  "Real-time cloud sync"
                ].map((feature) => (
                  <div key={feature} className="text-slate-600">
                    ✓ {feature}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <Magnetic>
                  <Link
                    href="/hardware"
                    className="px-6 py-3 bg-black text-white rounded-full"
                  >
                    Explore Hardware
                  </Link>
                </Magnetic>

                <Magnetic>
                  <Link
                    href="/request-demo"
                    className="px-6 py-3 border rounded-full"
                  >
                    Request Demo
                  </Link>
                </Magnetic>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-emerald-300/20 blur-[100px] rounded-full scale-125" />

              {/* Device Mockup */}
              <div className="relative bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl p-6">
                <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white text-center p-10">
                  <div>
                    <div className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-4">
                      HOXXES KIOSK
                    </div>
                    <div className="text-3xl font-semibold leading-tight">
                      Faster ordering.
                      <br />
                      Better experience.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="relative py-44 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-[1000px] h-[1000px] bg-emerald-500 blur-[200px] opacity-20 mx-auto animate-pulse" />
        </div>

        <div className="relative">
          <h2 className="text-4xl font-semibold tracking-tight">
            One platform. Every operation.
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            From single restaurants to multi-location enterprise chains —
            Hoxxes becomes your operational infrastructure layer.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center">
        <h2 className="text-3xl font-semibold">
          Built for enterprise scale
        </h2>

        <p className="text-slate-500 mt-4">
          Start your digital transformation today.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Magnetic>
            <Link
              href="/request-demo"
              className="px-6 py-3 bg-black text-white rounded-full"
            >
              Request Demo
            </Link>
          </Magnetic>

          <Magnetic>
            <Link
              href="/contact-sales"
              className="px-6 py-3 border rounded-full"
            >
              Contact Sales
            </Link>
          </Magnetic>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <p>© {new Date().getFullYear()} Hoxxes</p>

          <div className="flex items-center gap-8 text-sm text-slate-500">
  
  <Link
    href="/software"
    className="relative group hover:text-black transition"
  >
    Software
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
  </Link>

  <Link
    href="/hardware"
    className="relative group hover:text-black transition"
  >
    Hardware
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
  </Link>

  <Link
    href="/support"
    className="relative group hover:text-black transition"
  >
    Support
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
  </Link>

</div>
        </div>
      </footer>
    </div>
  );
}

/* MAGNETIC MICRO-INTERACTION SYSTEM */
function Magnetic({ children }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320 }}
    >
      {children}
    </motion.div>
  );
}