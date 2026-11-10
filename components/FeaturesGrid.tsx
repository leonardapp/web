
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const features = [
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

// Hardware gets priority on mobile.
const mobileFeatures = [
  features[11],
  ...features.filter((_, index) => index !== 11),
];

export default function HomeFeatures() {
  // Desktop / tablet state
  const [activeIndex, setActiveIndex] = useState(0);

  // Mobile 3D carousel state
  const [mobileIndex, setMobileIndex] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const swipeHandled = useRef(false);

  // Desktop / tablet navigation
  const goToSlide = useCallback((index: number) => {
    const next = (index + features.length) % features.length;

    setActiveIndex(next);

    const track = trackRef.current;
    const card = track?.children[next] as HTMLElement | undefined;

    if (track && card) {
      const left =
        card.offsetLeft -
        (track.clientWidth - card.clientWidth) / 2;

      track.scrollTo({
        left,
        behavior: "smooth",
      });
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const previousSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Mobile navigation
  const goToMobileSlide = useCallback((index: number) => {
    const next =
      (index + mobileFeatures.length) % mobileFeatures.length;

    setMobileIndex(next);
  }, []);

  const nextMobileSlide = useCallback(() => {
    goToMobileSlide(mobileIndex + 1);
  }, [mobileIndex, goToMobileSlide]);

  const previousMobileSlide = useCallback(() => {
    goToMobileSlide(mobileIndex - 1);
  }, [mobileIndex, goToMobileSlide]);

  // Existing tablet scroll detection
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const children = Array.from(
          track.children
        ) as HTMLElement[];

        const center = track.scrollLeft + track.clientWidth / 2;

        let closest = 0;
        let distance = Infinity;

        children.forEach((card, index) => {
          const cardCenter =
            card.offsetLeft + card.offsetWidth / 2;

          const delta = Math.abs(center - cardCenter);

          if (delta < distance) {
            distance = delta;
            closest = index;
          }
        });

        setActiveIndex(closest);
      });
    };

    track.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Mobile swipe
  const handleMobileTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
    swipeHandled.current = false;
  };

  const handleMobileTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const dx =
      event.changedTouches[0].clientX -
      touchStartX.current;

    const dy =
      event.changedTouches[0].clientY -
      touchStartY.current;

    if (
      Math.abs(dx) > 40 &&
      Math.abs(dx) > Math.abs(dy) * 1.2
    ) {
      swipeHandled.current = true;

      if (dx < 0) {
        nextMobileSlide();
      } else {
        previousMobileSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Tablet swipe
  const handleTabletTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
    swipeHandled.current = false;
  };

  const handleTabletTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) return;

    const dx =
      event.changedTouches[0].clientX -
      touchStartX.current;

    const dy =
      event.changedTouches[0].clientY -
      touchStartY.current;

    if (
      Math.abs(dx) > 45 &&
      Math.abs(dx) > Math.abs(dy) * 1.2
    ) {
      swipeHandled.current = true;
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section className="overflow-hidden bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-0 sm:px-6">

        {/* HEADER */}
        <div className="mb-8 px-5 text-center sm:mb-12 sm:px-0">
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
            From sales and ordering to hardware, kitchen operations
            and integrations — everything works together through HOXXES.
          </p>
        </div>

        {/* ======================================
             MOBILE: HOXXES 3D PRODUCT UNIVERSE
        ====================================== */}

        <div
          className="relative h-[470px] overflow-hidden sm:hidden"
          style={{
            perspective: "1100px",
            touchAction: "pan-y",
          }}
          onTouchStart={handleMobileTouchStart}
          onTouchEnd={handleMobileTouchEnd}
          onTouchCancel={() => {
            touchStartX.current = null;
            touchStartY.current = null;
          }}
        >
          {/* Ambient background */}
          <div className="pointer-events-none absolute left-1/2 top-[43%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88D21A]/10 blur-[65px]" />

          {/* Decorative orbit rings */}
          <div
            className="pointer-events-none absolute left-1/2 top-[43%] h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#88D21A]/15"
            style={{ transform: "translate(-50%, -50%) rotateX(68deg)" }}
          />

          <div
            className="pointer-events-none absolute left-1/2 top-[43%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#88D21A]/20"
            style={{ transform: "translate(-50%, -50%) rotateX(68deg)" }}
          />

          {/* 3D carousel */}
          <div className="absolute inset-0">
            {mobileFeatures.map((item, index) => {
              const count = mobileFeatures.length;

              // Shortest circular distance from active card
              const offset =
                (index - mobileIndex + count / 2 + count) %
                  count -
                count / 2;

              const distance = Math.abs(offset);

              const scale = Math.max(
                0.68,
                1 - distance * 0.14
              );

              const opacity =
                distance === 0
                  ? 1
                  : distance === 1
                    ? 0.78
                    : distance === 2
                      ? 0.18
                      : 0;

              const isActive = index === mobileIndex;
              const isHardware = item.title === "Hardware";

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  tabIndex={isActive ? 0 : -1}
                  aria-hidden={distance > 1}
                  aria-label={`${item.title} — learn more`}
                  onClick={(event) => {
                    if (swipeHandled.current) {
                      event.preventDefault();
                      swipeHandled.current = false;
                      return;
                    }

                    if (!isActive) {
                      event.preventDefault();
                      goToMobileSlide(index);
                    }
                  }}
                  className="absolute left-1/2 top-[43%] block aspect-[0.78] w-[76vw] max-w-[310px] overflow-hidden rounded-[28px] bg-[#88D21A]"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      translateX(${offset * 174}px)
                      translateZ(${-distance * 95}px)
                      rotateY(${-offset * 32}deg)
                      scale(${scale})
                    `,
                    opacity,
                    zIndex: 100 - distance,
                    pointerEvents: distance <= 1 ? "auto" : "none",
                    transition:
                      "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
                    transformStyle: "preserve-3d",
                    boxShadow: isActive
                      ? "0 25px 70px rgba(0,0,0,0.22), 0 0 35px rgba(136,210,26,0.18)"
                      : "0 12px 30px rgba(0,0,0,0.12)",
                    border: isActive
                      ? "1px solid rgba(136,210,26,0.65)"
                      : "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#88D21A] via-[#80C718] to-[#5F9F12]" />

                  {/* Original product image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="76vw"
                    priority={index === 0}
                    draggable={false}
                    className="scale-[1.12] object-cover"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                  {/* Hardware highlight */}
                  {isHardware && (
                    <div className="absolute left-4 top-4 z-20">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-black/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#88D21A]" />
                        Physical Devices
                      </span>
                    </div>
                  )}

                  {/* Arrow */}
                  <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/20 text-white backdrop-blur-md">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>

                  {/* Product information */}
                  <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-7 pt-16 text-center">
                    
                   

                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[270px] text-xs leading-relaxed text-white/90">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Swipe hint */}
          <div className="pointer-events-none absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 5 3 12l5 7" />
              <path d="M16 5l5 7-5 7" />
            </svg>
            Explore the ecosystem
          </div>
        </div>

        {/* ======================================
             TABLET / DESKTOP: ORIGINAL DESIGN
        ====================================== */}

        <div
          ref={trackRef}
          className="hidden snap-x snap-mandatory gap-3 overflow-x-auto px-[7vw] pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex sm:px-0 sm:gap-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0"
          style={{ touchAction: "pan-x pan-y" }}
          onTouchStart={handleTabletTouchStart}
          onTouchEnd={handleTabletTouchEnd}
          onTouchCancel={() => {
            touchStartX.current = null;
            touchStartY.current = null;
          }}
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
                className="scale-[1.12] object-cover transition-transform duration-500 group-hover:scale-[1.18]"
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
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
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

        {/* ======================================
             MOBILE NAVIGATION
        ====================================== */}

        <div className="mt-1 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            onClick={previousMobileSlide}
            aria-label="Previous product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>

          <div className="flex max-w-[55vw] items-center gap-1.5 overflow-hidden">
            {mobileFeatures.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goToMobileSlide(index)}
                aria-label={`Go to ${item.title}`}
                aria-current={
                  index === mobileIndex ? "true" : undefined
                }
                className="h-2 shrink-0 rounded-full transition-all duration-300"
                style={{
                  width: index === mobileIndex ? 24 : 7,
                  backgroundColor:
                    index === mobileIndex
                      ? BRAND_GREEN
                      : "#D1D5DB",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextMobileSlide}
            aria-label="Next product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ======================================
             TABLET NAVIGATION
        ====================================== */}

        <div className="mt-5 hidden items-center justify-center gap-4 sm:flex lg:hidden">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-[#88D21A]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>

          <div className="flex max-w-[55vw] items-center gap-1.5 overflow-hidden">
            {features.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${item.title}`}
                className="h-2 shrink-0 rounded-full transition-all duration-300"
                style={{
                  width: index === activeIndex ? 24 : 7,
                  backgroundColor:
                    index === activeIndex
                      ? BRAND_GREEN
                      : "#D1D5DB",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-[#88D21A]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
