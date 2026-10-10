"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Point of Sale",
    description: "Powerful tools to run your business in one place.",
    image: "https://hoxxes.app/images/pos.png",
    href: "/software",
  },
  {
    title: "Hardware",
    description: "POS terminals, kiosks and hardware built for your business.",
    image: "https://hoxxes.app/images/hardware2.png",
    href: "/hardware",
  },
  {
    title: "Online Ordering",
    description: "Turn your website into a powerful ordering channel.",
    image: "https://hoxxes.app/images/online-ordering.png",
    href: "/software",
  },
  {
    title: "Marketing",
    description: "Loyalty, gift cards, promotions and more.",
    image: "https://hoxxes.app/images/marketing.png",
    href: "/software",
  },
  {
    title: "Kitchen Display System",
    description: "Every order from every channel in one place.",
    image: "https://hoxxes.app/images/kds.png",
    href: "/software",
  },
  {
    title: "Delivery Integrations",
    description: "Connect your favorite delivery platforms.",
    image: "https://hoxxes.app/images/integrations.png",
    href: "/software",
  },
  {
    title: "Payment Integrations",
    description: "Integrated payments for seamless transactions.",
    image: "https://hoxxes.app/images/Delivery.png",
    href: "/software",
  },
  {
    title: "Operations Hub",
    description: "Manage your daily operations from one place.",
    image: "https://hoxxes.app/images/waiter2.png",
    href: "/software",
  },
  {
    title: "QR Ordering",
    description: "Let customers scan, browse and order instantly.",
    image: "https://hoxxes.app/images/qr.png",
    href: "/software",
  },
];

const BRAND_GREEN = "#88D21A";

export default function HomeFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const activeIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const goToSlide = useCallback((index: number) => {
    const nextIndex = (index + features.length) % features.length;

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(activeIndexRef.current + 1);
  }, [goToSlide]);

  const previousSlide = useCallback(() => {
    goToSlide(activeIndexRef.current - 1);
  }, [goToSlide]);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") previousSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, previousSlide]);

  const getCircularDistance = (index: number) => {
    let distance = index - activeIndex;

    if (distance > features.length / 2) {
      distance -= features.length;
    }

    if (distance < -features.length / 2) {
      distance += features.length;
    }

    return distance;
  };

  return (
    
<section className="overflow-hidden bg-transparent py-10 sm:py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6">
    {/* SECTION HEADER */}
    <div className="mb-8 text-center sm:mb-12">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
        One Platform. Every Operation.
      </p>


          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Everything your business needs.
            <span className="mt-1 block text-slate-400">
              Connected in one ecosystem.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            From POS and ordering to hardware, kitchen operations,
            payments and integrations — everything works together
            through HOXXES.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative mt-8 flex h-[440px] items-center justify-center overflow-visible sm:mt-12 sm:h-[510px]"
          style={{ perspective: "1500px" }}
        >
          {features.map((item, index) => {
            const distance = getCircularDistance(index);
            const absDistance = Math.abs(distance);
            const isActive = distance === 0;

            const isVisible = isMobile
              ? absDistance <= 1
              : absDistance <= 2;

            const translateX = distance * (isMobile ? 245 : 310);
            const rotateY = distance * -12;

            const translateZ = isActive
              ? 60
              : absDistance === 1
                ? 0
                : -100;

            const scale = isActive
              ? 1
              : absDistance === 1
                ? 0.88
                : 0.76;

            const opacity = isActive
              ? 1
              : absDistance === 1
                ? 0.72
                : 0.35;

            const zIndex = isActive
              ? 50
              : absDistance === 1
                ? 30
                : 10;

            return (
              <Link
                key={item.title}
                href={item.href}
                aria-label={`${item.title} — learn more`}
                onClick={(event) => {
                  if (!isActive) {
                    event.preventDefault();
                    goToSlide(index);
                  }
                }}
                className="absolute left-1/2 top-1/2 w-[82%] max-w-[340px] sm:w-[48%] md:w-[31%]"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${translateX}px)
                    translateZ(${translateZ}px)
                    rotateY(${rotateY}deg)
                    scale(${scale})
                  `,
                  opacity,
                  zIndex,
                  visibility: isVisible ? "visible" : "hidden",
                  pointerEvents: isVisible ? "auto" : "none",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  transition:
                    "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
                }}
              >
                {/* CARD */}
                <div className="group relative h-[410px] overflow-hidden rounded-[20px] bg-[#88D21A] shadow-xl sm:h-[460px]">
                  {/* BRAND BACKGROUND */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#88D21A] via-[#80C718] to-[#5F9F12]" />

                  {/* SOFT LIGHTING */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(255,255,255,0.25),transparent_55%)]" />

                  {/* SUBTLE PLATFORM / FLOOR */}
                  <div className="absolute inset-x-0 bottom-[100px] h-[70px] bg-gradient-to-b from-white/[0.08] to-black/[0.08]" />

                  {/* ARROW */}
                  <div className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/[0.06] text-white transition duration-300 group-hover:bg-white group-hover:text-[#6DAF12]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>

                  
{/* PRODUCT IMAGE — FULL CARD */}
<div className="absolute inset-0 z-10 overflow-hidden">
  <Image
    src={item.image}
    alt={item.title}
    fill
    sizes="(max-width: 639px) 82vw, (max-width: 1023px) 48vw, 31vw"
    className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
    priority={index === 0}
  />
</div>


                  {/* BOTTOM GRADIENT */}
                  <div className="absolute inset-x-0 bottom-0 z-20 h-[155px] bg-gradient-to-t from-[#477C0B]/90 via-[#5F9F12]/65 to-transparent" />

                  {/* CARD TEXT */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-6 pt-8 text-center sm:px-5 sm:pb-7">
                    <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-1 max-w-[260px] text-[11px] leading-relaxed text-white/95 sm:text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CONTROLS */}
        <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#88D21A] hover:text-[#6DAF12]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>

          {/* INDICATORS */}
          <div className="flex items-center gap-2">
            {features.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${item.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className="h-2 overflow-hidden rounded-full bg-slate-200 transition-all duration-300"
                style={{
                  width: index === activeIndex ? 26 : 8,
                }}
              >
                <span
                  className="block h-full rounded-full transition-all duration-300"
                  style={{
                    width: index === activeIndex ? "100%" : "0%",
                    backgroundColor: BRAND_GREEN,
                  }}
                />
              </button>
            ))}
          </div>

          {/* PLAY / PAUSE */}
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-label={paused ? "Play carousel" : "Pause carousel"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#88D21A] hover:text-[#6DAF12]"
          >
            {paused ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 5h4v14H7zM15 5h4v14h-4z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}