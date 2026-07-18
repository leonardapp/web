"use client";

import Link from "next/link";

const OFFER_DEADLINE = "2026-07-17T23:59:59+02:00";

function isOfferActive() {
  return Date.now() < new Date(OFFER_DEADLINE).getTime();
}

export default function OfferBadge() {
  if (!isOfferActive()) return null;

  return (
    <Link
      href="/offers"
      className="
  fixed
  top-20
  right-2
  sm:top-24
  sm:right-8
  z-50
  group
"
    >
      <div
        className="
  relative
  w-28
  sm:w-44
  rounded-2xl
  border
  border-amber-300/40
  bg-gradient-to-br
  from-amber-400
  via-orange-500
  to-red-500
  p-2
  sm:p-4
  text-white
  shadow-[0_15px_40px_rgba(249,115,22,.35)]
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-105
"
      >
        {/* LIVE */}
        <div className="absolute -top-2 -right-2 rounded-full bg-white px-2 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-red-600 shadow">
          LIVE
        </div>

        <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-white/90">
          Anniversary
        </div>

        <div className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-black leading-none">
          50%
        </div>

        <div className="text-sm sm:text-base font-bold">
          OFF
        </div>

        <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-white/90">
          Subscription
        </div>

        <div className="mt-1 sm:mt-3 border-t border-white/25 pt-2 text-[10px] sm:text-[11px] font-medium">
          Until July 17 →
        </div>
      </div>
    </Link>
  );
}