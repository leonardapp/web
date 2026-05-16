import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white p-6">
        <h1 className="text-xl font-bold">HOXXES</h1>

        <nav className="mt-8 space-y-3 text-sm">
          <p>Dashboard</p>
          <p>Modules</p>
          <p>POS</p>
          <p>Tickets</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}