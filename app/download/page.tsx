"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Platform = "Windows" | "Android" | "iOS";

const platforms = [
  {
    platform: "Windows" as Platform,
    title: "HOXXES POS (Web)",
    desc: "Instant access to POS system. No installation required.",
    link: "https://pos.hoxxes.com/#/login",
    badge: "Instant Access",
  },
  {
    platform: "Android" as Platform,
    title: "HOXXES Android Apps",
    desc: "POS Terminal, KDS, Kiosk & Mobile apps for Android ecosystem.",
    link: "https://hoxxes.app/",
    badge: "All Android Apps",
  },
  {
    platform: "iOS" as Platform,
    title: "HOXXES iOS POS",
    desc: "iPhone & iPad POS application via App Store.",
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
    <div className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-16 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Download Center
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight">
          Get HOXXES Apps
        </h1>

        <p className="mt-4 text-slate-500 text-lg">
          Auto-detected platform:{" "}
          <span className="text-black font-medium">{os}</span>
        </p>
      </section>

      {/* PLATFORM CARDS */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">

          {platforms.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="border rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="text-xs text-slate-400 uppercase tracking-widest">
                {p.badge}
              </div>

              <h2 className="mt-3 text-lg font-semibold">
                {p.title}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {p.desc}
              </p>

              <div className="mt-6">
                <Link
                  href={p.link}
                  className="inline-flex items-center text-sm font-medium text-black hover:underline"
                >
                  Open →
                </Link>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* STRIPE STYLE FOOTER */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-3xl font-semibold">
          Enterprise-grade distribution system
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          HOXXES automatically delivers the right application for your device and role.
        </p>
      </section>

    </div>
  );
}