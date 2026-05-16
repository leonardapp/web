"use client";

import { useState } from "react";

const modules = [
  {
    title: "Products",
    desc: "Product catalog & management system",
    slug: "Products"
  },
  {
    title: "Orders",
    desc: "Order management system",
    slug: "Orders"
  },
  {
    title: "Payments",
    desc: "Checkout & payment system",
    slug: "Payments"
  },
  {
    title: "Inventory",
    desc: "Stock management system",
    slug: "Inventory"
  },
  {
    title: "Marketing & Loyalty",
    desc: "CRM & loyalty system",
    slug: "Marketing & Loyalty"
  }
];

export default function DocsHome() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">
          Hoxxes Documentation
        </h1>
        <p className="text-slate-500 mt-3">
          Enterprise SaaS documentation system
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-5">
        {modules.map((m) => (
          <a
            key={m.slug}
            href={`https://hoxxes.app/udhezime/#module=${encodeURIComponent(m.slug)}`}
            className="border rounded-2xl p-6 bg-white hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{m.title}</h2>
            <p className="text-slate-500 text-sm mt-2">{m.desc}</p>
            <div className="text-xs text-slate-400 mt-4">
              Open legacy documentation →
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}