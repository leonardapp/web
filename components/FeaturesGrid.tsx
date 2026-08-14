"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const features = [
  {
    title: "Restaurant POS",
    description: "Cloud & offline restaurant POS.",
    image: "https://hoxxes.app/images/pos-operations2.png",
    focus: "50% 50%",
    href: "/software#restaurant-pos",
  },
  {
    title: "Operations Hub",
    description: "Orders, tables and service.",
    image: "https://hoxxes.app/images/waiter-operations.png",
    focus: "50% 100%",
    href: "/software#waiter-operations",
  },
  {
    title: "QR Ordering",
    description: "QR menu & mobile ordering.",
    image: "https://hoxxes.app/images/qr-ordering.png",
    focus: "30% 70%",
    href: "/software#qr-ordering",
  },
  {
    title: "Self-Service Kiosk",
    description: "Self-ordering made simple.",
    image: "https://hoxxes.app/images/kiosk-ordering2.png",
    focus: "10% 100%",
    href: "/software#self-service-kiosk",
  },
  {
    title: "Online Ordering",
    description: "Ordering, loyalty & rewards.",
    image: "https://hoxxes.app/images/online-ordering.png",
    focus: "90% 60%",
    href: "/software#online-ordering",
  },
  {
    title: "Kitchen Display System",
    description: "Real-time kitchen workflow.",
    image: "https://hoxxes.app/images/kitchen-display-system.png",
    focus: "10% 100%",
    href: "/software#kitchen-display",
  },
  {
    title: "HQ Control Center",
    description: "Multi-location management.",
    image: "https://hoxxes.app/images/dashboard-overview.png",
    focus: "0% 100%",
    href: "/software#hq-control-center",
  },
  {
    title: "Analytics Cloud",
    description: "Real-time business insights.",
    image: "https://hoxxes.app/images/analytics-dashboard.png",
    focus: "50% 100%",
    href: "/software#analytics-cloud",
  },
];

export default function HomeFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /*
   * ---------------------------------------------------------
   * SLIDE NAVIGATION
   * ---------------------------------------------------------
   */

  const goToSlide = (index: number) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const next =
      (activeIndexRef.current + 1) % features.length;

    goToSlide(next);
  };

  const previousSlide = () => {
    const previous =
      (activeIndexRef.current - 1 + features.length) %
      features.length;

    goToSlide(previous);
  };

  /*
   * ---------------------------------------------------------
   * AUTO ROTATION
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (paused) {
      return;
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused]);

  /*
   * ---------------------------------------------------------
   * KEYBOARD CONTROL
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * CIRCULAR POSITION
   * ---------------------------------------------------------
   *
   * Example:
   *
   * Active = 0
   * Previous = 7
   * Next = 1
   *
   * Active = 7
   * Previous = 6
   * Next = 0
   */

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
    <section className="pt-8 pb-24 sm:pt-14 sm:pb-32 bg-transparent overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative">

          <div className="text-center mb-6">
          </div>

          {/* =====================================================
              3D CAROUSEL
          ====================================================== */}

          <div
            className="
              relative
              h-[470px]
              sm:h-[500px]
              flex
              items-center
              justify-center
              overflow-visible
            "
            style={{
              perspective: "1500px",
            }}
          >

            {features.map((item, index) => {
              const distance =
                getCircularDistance(index);

              const isActive = distance === 0;

              const absDistance = Math.abs(distance);

              /*
               * Only the active card and the two cards
               * beside it are visually important.
               */
              const isVisible = absDistance <= 2;

              /*
               * -------------------------------------------------
               * 3D POSITION
               * -------------------------------------------------
               */

              const translateX =
                distance * 310;

              const rotateY =
                distance * -14;

              const translateZ =
                isActive
                  ? 80
                  : absDistance === 1
                  ? 0
                  : -140;

              /*
               * -------------------------------------------------
               * CARD SCALE
               * -------------------------------------------------
               */

              const scale =
                isActive
                  ? 1
                  : absDistance === 1
                  ? 0.88
                  : 0.72;

              /*
               * -------------------------------------------------
               * CARD OPACITY
               * -------------------------------------------------
               */

              const opacity =
                isActive
                  ? 1
                  : absDistance === 1
                  ? 0.72
                  : 0.35;

              /*
               * -------------------------------------------------
               * Z INDEX
               * -------------------------------------------------
               */

              const zIndex =
                isActive
                  ? 50
                  : absDistance === 1
                  ? 30
                  : 10;

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={(event) => {
                    /*
                     * Clicking a side card brings it
                     * to the center first.
                     */

                    if (!isActive) {
                      event.preventDefault();
                      goToSlide(index);
                    }
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    shrink-0
                    w-[95%]
                    sm:w-[55%]
                    md:w-[30%]
                  "
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
                    visibility: isVisible
                      ? "visible"
                      : "hidden",
                    pointerEvents: isVisible
                      ? "auto"
                      : "none",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    transition:
                      "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
                  }}
                >

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className="
                      relative
                      h-[420px]
                      rounded-2xl
                      overflow-hidden
                      shadow-xl
                    "
                  >

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      style={{
                        objectPosition: item.focus,
                      }}
                    />

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-black/20
                        to-transparent
                        backdrop-blur-[1px]
                      "
                    />

                    {/* CARD CONTENT */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                        text-white
                      "
                    >

                      <h3
                        className="
                          text-xl
                          font-semibold
                          drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-white/85
                          leading-relaxed
                          max-w-[240px]
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

          {/* =====================================================
              CONTROL BAR
          ====================================================== */}

          <div className="flex justify-center mt-2">

            <div
              className="
                flex
                items-center
                gap-4
                bg-black/10
                backdrop-blur-md
                px-4
                py-2
                rounded-full
              "
            >

              {/* INDICATORS */}

              <div className="flex gap-2 items-center">

                {features.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="
                      w-6
                      h-2
                      rounded-full
                      bg-black/20
                      overflow-hidden
                    "
                  >
                    <div
                      className={`
                        h-full
                        transition-all
                        duration-500
                        ${
                          index === activeIndex
                            ? "w-full bg-black/80"
                            : "w-0"
                        }
                      `}
                    />
                  </button>
                ))}

              </div>

              {/* PLAY / PAUSE */}

              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={
                  paused
                    ? "Play carousel"
                    : "Pause carousel"
                }
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white/80
                  hover:bg-white
                  transition
                  shadow-sm
                "
              >
                {paused ? (
                  <span className="text-xs font-bold">
                    ▶
                  </span>
                ) : (
                  <span className="text-xs font-bold">
                    ❚❚
                  </span>
                )}
              </button>

            </div>

          </div>

        </div>

        {/* =====================================================
            LEARN MORE
        ====================================================== */}

        <div className="mt-16 text-center">

          <p className="mb-4 text-sm text-slate-500">
            Explore the complete HOXXES operating system.
          </p>

          <div className="mt-0 flex flex-col sm:flex-row justify-center gap-4">

            <Button
              href="/learn-more"
              variant="primary"
            >
              Learn More
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}