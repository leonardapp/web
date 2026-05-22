import React from "react";

const navItems = [
  { key: "dashboard", href: "dashboard" },
  { key: "modules", href: "modules" },
  { key: "pos", href: "pos" },
  { key: "settings", href: "settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-50">

      <aside className="w-64 bg-black text-white p-6">
        <h1 className="text-xl font-bold">HOXXES</h1>

        <nav className="mt-6 space-y-3 text-sm">
          {navItems.map((item) => (
            <p key={item.key} className="hover:text-gray-300 cursor-pointer">
              {item.key}
            </p>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  );
}