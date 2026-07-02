"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  { title: "Restaurant POS", image: "https://hoxxes.app/images/pos-operations.png" },
  { title: "QR Ordering", image: "https://hoxxes.app/images/qr-ordering.png" },
  { title: "Self-Service Kiosk", image: "https://hoxxes.app/images/kiosk-ordering.png" },
  { title: "Kitchen Display", image: "https://hoxxes.app/images/kitchen-display-system.png" },
  { title: "Waiter Operations", image: "https://hoxxes.app/images/waiter-operations.png" },
  { title: "Online Ordering", image: "https://hoxxes.app/images/online-ordering.png" },
  { title: "HQ Control Center", image: "https://hoxxes.app/images/dashboard-overview.png" },
  { title: "Analytics Cloud", image: "https://hoxxes.app/images/analytics-dashboard.png" },
];

export default function HomeFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const indexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ✅ ACTIVE SLIDE DETECTION
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.offsetWidth / 2;

      let closest = 0;
      let minDist = Infinity;

      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(center - childCenter);

        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      setActiveIndex(closest);
      indexRef.current = closest;
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ✅ AUTO SCROLL (FIXED + SAFE)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (paused) return;

    intervalRef.current = setInterval(() => {
      const next = (indexRef.current + 1) % features.length;
      const child = el.children[next] as HTMLElement;
      if (!child) return;

      el.scrollTo({
        left:
          child.offsetLeft -
          el.offsetWidth / 2 +
          child.offsetWidth / 2,
        behavior: "smooth",
      });

      indexRef.current = next;
    }, 3500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused]);

  // ✅ optional: keep sync on resize
  useEffect(() => {
    const handleResize = () => {
      const el = scrollRef.current;
      if (!el) return;

      const child = el.children[indexRef.current] as HTMLElement;
      if (!child) return;

      el.scrollTo({
        left:
          child.offsetLeft -
          el.offsetWidth / 2 +
          child.offsetWidth / 2,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative">

          {/* CAROUSEL */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-6"
          >
            {features.map((item, i) => (
              <Link
                key={i}
                href="/software"
                className="snap-center shrink-0 w-[80%] sm:w-[45%] md:w-[30%]"
              >
                <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CONTROL BAR */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-4 bg-black/10 backdrop-blur-md px-4 py-2 rounded-full">

              <div className="flex gap-2 items-center">
                {features.map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-2 rounded-full bg-black/20 overflow-hidden"
                  >
                    <div
                      className={`h-full transition-all duration-500 ${
                        i === activeIndex ? "w-full bg-black/80" : "w-0"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => setPaused((p) => !p)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition shadow-sm"
              >
                {paused ? (
                  <span className="text-xs font-bold">▶</span>
                ) : (
                  <span className="text-xs font-bold">❚❚</span>
                )}
              </button>

            </div>
          </div>

        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

      </div>
    </section>
  );
}