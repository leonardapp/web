"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const sections = [
  {
    title: "Getting Started",
    items: [{ name: "Overview", href: "/docs" }]
  },
  {
    title: "Core System",
    items: [
      { name: "Settings", href: "/docs/settings" },
      { name: "Employees", href: "/docs/employees" },
      { name: "Reports", href: "/docs/reports" }
    ]
  },
  {
    title: "Operations",
    items: [
      { name: "Orders", href: "/docs/orders" },
      { name: "Menu", href: "/docs/menu" },
      { name: "Tables & QR", href: "/docs/tables-qr" }
    ]
  },
  {
    title: "Business Layer",
    items: [
      { name: "Payments", href: "/docs/payments" },
      { name: "Products", href: "/docs/products" },
      { name: "Marketing", href: "/docs/marketing" }
    ]
  },
  {
    title: "System",
    items: [
      { name: "Inventory", href: "/docs/inventory" },
      { name: "Integrations", href: "/docs/integrations" }
    ]
  }
];

export default function DocsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return sections;

    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <div className="min-h-screen flex bg-white text-slate-900">

      {/* SIDEBAR */}
      <aside className="w-80 border-r border-slate-200 bg-slate-50/60 backdrop-blur-xl sticky top-0 h-screen overflow-y-auto">

        {/* BRAND */}
        <div className="px-6 py-5 border-b border-slate-200">
          <div className="font-semibold text-lg tracking-tight">
            Hoxxes Docs
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Enterprise knowledge system
          </p>
        </div>

        {/* SEARCH */}
        <div className="p-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-black/10 bg-white"
          />
        </div>

        {/* NAV */}
        <div className="px-4 pb-10 space-y-6">

          {filtered.map((section) => (
            <div key={section.title}>

              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400 px-3 mb-2">
                {section.title}
              </div>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-center justify-between px-3 py-2 rounded-xl text-sm transition
                      ${
                        active
                          ? "bg-black text-white shadow-sm"
                          : "text-slate-600 hover:bg-white hover:text-black"
                      }`}
                    >
                      <span>{item.name}</span>

                      <span
                        className={`text-xs opacity-0 group-hover:opacity-60 transition ${
                          active ? "opacity-80" : ""
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 px-8 py-10 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}