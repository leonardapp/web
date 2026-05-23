"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

type Platform = "Windows" | "Android" | "iOS";

const platforms = [
  {
    platform: "Windows" as Platform,
    title: "HOXXES POS (Web App)",
    desc: "Instant access to the POS system. No installation required.",
    link: "https://pos.hoxxes.com/#/login",
    badge: "Instant Access",
  },
  {
    platform: "Android" as Platform,
    title: "HOXXES Android Suite",
    desc: "POS, KDS, Kiosk & Mobile apps built for Android ecosystem.",
    link: "/apk",
    badge: "All-in-One Suite",
  },
  {
    platform: "iOS" as Platform,
    title: "HOXXES iOS POS",
    desc: "Native POS experience for iPhone & iPad via App Store.",
    link: "https://apps.apple.com/sg/app/cloudpos-global/id6502969805",
    badge: "App Store",
  },
];

function detectOS(): Platform {
  if (typeof window === "undefined") return "Windows";

  const ua = navigator.userAgent;

  if (/android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
  return "Windows";
}

export default function DownloadCenter() {
  const [os, setOs] = useState<Platform>("Windows");

  useEffect(() => {
    setOs(detectOS());
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 overflow-hidden">

      {/* HEADER */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-200/25 blur-[160px] rounded-full" />
      </div>

      <div className="fixed inset-0 -z-10">
        <div className="absolute bottom-[-250px] right-[-200px] w-[800px] h-[800px] bg-slate-200/40 blur-[160px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
            Download Center
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Get HOXXES Apps
          </h1>

          <p className="mt-5 text-slate-500 text-base md:text-lg">
            Automatically optimized for your device and operating system.
          </p>

          <div className="mt-4 text-sm text-slate-500">
            Detected platform:{" "}
            <span className="text-black font-medium">{os}</span>
          </div>
        </motion.div>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid gap-6 md:grid-cols-3">

          {platforms.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-emerald-100/30 blur-2xl transition" />

              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-slate-400">
                  {p.badge}
                </div>

                <h2 className="mt-3 text-lg font-semibold">
                  {p.title}
                </h2>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {p.desc}
                </p>

                <Link
                  href={p.link}
                  className="mt-6 inline-flex items-center text-sm font-medium text-black hover:underline"
                >
                  Open download →
                </Link>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="py-24 bg-black text-white text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl" />

        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Enterprise-grade distribution system
          </h2>

          <p className="text-slate-300 mt-4">
            HOXXES automatically delivers the correct application for each device,
            ensuring zero friction deployment across your ecosystem.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/software"
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
            >
              Explore Software
            </Link>

            <Link
              href="/hardware"
              className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              View Hardware
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}