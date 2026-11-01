
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Oferta përfundon më 8 nëntor 2026, ora 23:59:59 në Kosovë (UTC+1)
const OFFER_DEADLINE = "2026-11-08T23:59:59+01:00";

const SHOW_DURATION = 8000;
const FIRST_SHOW_DELAY = 4000;
const SCROLL_TRIGGER = 450;
const SCROLL_COOLDOWN = 45000;
const REPEAT_INTERVAL = 90000;

function isOfferActive() {
  return Date.now() < new Date(OFFER_DEADLINE).getTime();
}

export default function OfferBadge() {
  const [visible, setVisible] = useState(false);

  const lastShown = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const repeatTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const showOffer = () => {
    if (!isOfferActive()) return;

    const now = Date.now();

    // Prevent showing the badge too frequently
    if (now - lastShown.current < SCROLL_COOLDOWN) {
      return;
    }

    lastShown.current = now;

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    setVisible(true);

    hideTimer.current = setTimeout(() => {
      setVisible(false);
      hideTimer.current = null;
    }, SHOW_DURATION);
  };

  useEffect(() => {
    if (!isOfferActive()) return;

    // First appearance
    const initialTimer = setTimeout(() => {
      showOffer();
    }, FIRST_SHOW_DELAY);

    // Repeat every 90 seconds (subject to cooldown)
    repeatTimer.current = setInterval(() => {
      showOffer();
    }, REPEAT_INTERVAL);

    // Show after meaningful scroll
    const handleScroll = () => {
      if (window.scrollY >= SCROLL_TRIGGER) {
        showOffer();
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearTimeout(initialTimer);

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }

      if (repeatTimer.current) {
        clearInterval(repeatTimer.current);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Do not render after campaign expiry
  if (!isOfferActive()) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            y: 12,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 60,
            y: 8,
            scale: 0.94,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 22,
            mass: 0.7,
          }}
          className="
            fixed
            top-36
            right-2
            sm:top-24
            sm:right-8
            z-50
            max-w-[calc(100vw-1rem)]
          "
        >
          <Link
            href="/offers"
            aria-label="View special offers"
            className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50"
          >
            {/* Subtle pulse */}
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            >
              {/* Offer card */}
              <div
                className="
                  relative
                  w-32
                  sm:w-44
                  rounded-2xl
                  border
                  border-amber-300/40
                  bg-gradient-to-br
                  from-amber-400
                  via-orange-500
                  to-red-500
                  p-3
                  sm:p-4
                  text-white
                  shadow-[0_15px_40px_rgba(249,115,22,.35)]
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:scale-105
                "
              >
                {/* LIVE badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -top-2
                    -right-2
                    rounded-full
                    bg-white
                    px-2
                    py-1
                    text-[8px]
                    sm:text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-red-600
                    shadow
                  "
                >
                  LIVE
                </motion.div>

                {/* Label */}
                <div
                  className="
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.15em]
                    sm:tracking-[0.2em]
                    text-white/90
                  "
                >
                  Special Offers
                </div>

                {/* Title */}
                <div
                  className="
                    mt-1
                    sm:mt-2
                    text-xl
                    sm:text-2xl
                    font-black
                    leading-none
                    tracking-tight
                  "
                >
                  OFFERS
                </div>

                {/* Description */}
                <div
                  className="
                    mt-1
                    sm:mt-2
                    text-[10px]
                    sm:text-xs
                    text-white/90
                  "
                >
                  Limited Time
                </div>

                {/* Deadline */}
                <div
                  className="
                    mt-2
                    sm:mt-3
                    border-t
                    border-white/25
                    pt-2
                    text-[9px]
                    sm:text-[10px]
                    font-semibold
                  "
                >
                  Until Nov 8 →
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
