"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const pages = [
  { name: "Overview", href: "/docs" },
  { name: "Settings", href: "/docs/settings" },
  { name: "Employees", href: "/docs/employees" },
  { name: "Orders", href: "/docs/orders" },
  { name: "Menu", href: "/docs/menu" },
];

export default function DocsSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const filtered = pages.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-40 z-50">
      <div className="bg-white w-[500px] rounded-xl shadow-xl p-4">

        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search docs..."
          className="w-full border px-3 py-2 rounded-md"
        />

        <div className="mt-3 space-y-2">
          {filtered.map((item) => (
            <div
              key={item.href}
              onClick={() => {
                router.push(item.href);
                setOpen(false);
              }}
              className="p-2 rounded-md hover:bg-slate-100 cursor-pointer text-sm"
            >
              {item.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}