"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const features = [
  // Core platform
  {
    title: "Point of Sale",
    description:
      "Manage sales and orders online on Windows, or online and offline on Android.",
    image: "https://hoxxes.app/images/pos2.png",
    href: "/software",
  },
  {
    title: "Back Office",
    description:
      "Manage your business, reports and settings from one central platform.",
    image: "https://hoxxes.app/images/backoffice.png",
    href: "/software",
  },
  {
    title: "Operations Hub",
    description:
      "Streamline daily workflows, staff activities and business operations.",
    image: "https://hoxxes.app/images/waiter2.png",
    href: "/software",
  },

  // Order preparation and customer ordering channels
  {
    title: "Kitchen Display System",
    description:
      "Keep kitchen orders organized and service running smoothly.",
    image: "https://hoxxes.app/images/kds.png",
    href: "/software",
  },
  {
    title: "Online Ordering",
    description:
      "Accept online orders through your E-Shop link and Mini Apps for Delivery & Pickup.",
    image: "https://hoxxes.app/images/delivery.png",
    href: "/software",
  },
  {
    title: "QR Ordering",
    description:
      "Let customers scan a QR code at their table and order directly from their phones.",
    image: "https://hoxxes.app/images/qr3.png",
    href: "/software",
  },
  {
    title: "Kiosk Ordering",
    description:
      "Let customers place orders quickly and independently.",
    image: "https://hoxxes.app/images/kiosk-ordering3.png",
    href: "/software",
  },
  {
    title: "Order Display System",
    description:
      "Display order statuses in real time, keeping customers informed.",
    image: "https://hoxxes.app/images/ods.png",
    href: "/software",
  },

  // Integrations, payments, growth and devices
  {
    title: "Delivery Integrations",
    description:
      "Connect delivery platforms and manage incoming orders in one place.",
    image: "https://hoxxes.app/images/integrations.png",
    href: "/software",
  },
  {
    title: "Payment Integration",
    description:
      "Connect supported payment terminals to your Kiosk for seamless payments.",
    image: "https://hoxxes.app/images/payment.png",
    href: "/software",
  },
  {
    title: "Marketing",
    description:
      "Build customer loyalty with promotions, rewards and gift cards.",
    image: "https://hoxxes.app/images/marketing.png",
    href: "/software",
  },
  {
    title: "Hardware",
    description:
      "Equip your business with POS terminals, self-service kiosks and Android KDS devices.",
    image: "https://hoxxes.app/images/hardware3.png",
    href: "/hardware",
  },
];

const BRAND_GREEN = "#88D21A";

export default function HomeFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const swipeHandled = useRef(false);

  const goToSlide = useCallback((index: number) => {
    const next = (index + features.length) % features.length;
    setActiveIndex(next);
    const track = trackRef.current;
    const card = track?.children[next] as HTMLElement | undefined;
    if (track && card) {
      const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
      track.scrollTo({ left, behavior: "smooth" });
    }
  }, []);

  const nextSlide = useCallback(() => goToSlide(activeIndex + 1), [activeIndex, goToSlide]);
  const previousSlide = useCallback(() => goToSlide(activeIndex - 1), [activeIndex, goToSlide]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(track.children) as HTMLElement[];
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let distance = Infinity;
        children.forEach((card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const delta = Math.abs(center - cardCenter);
          if (delta < distance) { distance = delta; closest = index; }
        });
        setActiveIndex(closest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => { track.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
    swipeHandled.current = false;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    const dy = event.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      swipeHandled.current = true;
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section className="overflow-hidden bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-0 sm:px-6">
        <div className="mb-8 px-5 text-center sm:mb-12 sm:px-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            One Platform. Every Operation.
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Everything your business needs.
            <span className="mt-1 block text-slate-400">Connected in one ecosystem.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            From sales and ordering to hardware, kitchen operations and integrations — everything works together through HOXXES.
          </p>
        </div>

        {/* Toast-inspired product cards: responsive rail on mobile, 4-up grid on desktop */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-[7vw] pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-0 sm:gap-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0"
          style={{ touchAction: "pan-x pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => { touchStartX.current = null; touchStartY.current = null; }}
        >
          {features.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              aria-label={`${item.title} — learn more`}
              onClick={(event) => {
                if (swipeHandled.current) {
                  event.preventDefault();
                  swipeHandled.current = false;
                }
              }}
              className="group relative block aspect-[0.78] w-[86vw] max-w-[440px] shrink-0 snap-center overflow-hidden rounded-[24px] bg-[#88D21A] shadow-sm transition-shadow duration-300 hover:shadow-xl sm:w-[calc((100%-2rem)/3)] lg:aspect-[0.72] lg:w-auto lg:max-w-none lg:shrink"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#88D21A] via-[#80C718] to-[#5F9F12]" />
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 639px) 86vw, (max-width: 1023px) 30vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                priority={index === 0}
                draggable={false}
              />
              <div className="absolute inset-x-0 bottom-0 z-10 h-[38%] bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

              {item.title === "Hardware" && (
                <div className="absolute left-4 top-4 z-20">
                  <span className="inline-flex items-center rounded-full border border-white/35 bg-black/35 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-[10px]">
                    Physical Devices
                  </span>
                </div>
              )}

              <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-black/10 text-white transition group-hover:bg-white group-hover:text-[#6DAF12]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-6 pt-12 text-center sm:px-4 sm:pb-5">
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-lg xl:text-xl">
                  {item.title}
                </h3>
                <p className="mx-auto mt-1.5 max-w-[300px] text-xs leading-relaxed text-white/95 sm:text-[11px] xl:text-xs">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Manual slide controls on all screen sizes; no automatic scrolling */}
        <div className="mt-5 flex items-center justify-center gap-4 sm:mt-7 lg:hidden">
          <button type="button" onClick={previousSlide} aria-label="Previous product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#88D21A] hover:text-[#6DAF12]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
            </svg>
          </button>

          <div className="flex max-w-[55vw] items-center gap-1.5 overflow-hidden">
            {features.map((item, index) => (
              <button key={item.title} type="button" onClick={() => goToSlide(index)}
                aria-label={`Go to ${item.title}`} aria-current={index === activeIndex ? "true" : undefined}
                className="h-2 shrink-0 rounded-full transition-all duration-300"
                style={{ width: index === activeIndex ? 24 : 7, backgroundColor: index === activeIndex ? BRAND_GREEN : "#D1D5DB" }}
              />
            ))}
          </div>

          <button type="button" onClick={nextSlide} aria-label="Next product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#88D21A] hover:text-[#6DAF12]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </button>


        </div>
      </div>
    </section>
  );
}
