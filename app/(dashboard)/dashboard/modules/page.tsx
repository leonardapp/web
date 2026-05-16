"use client";

import { useState } from "react";

export default function ModulesPage() {
  const [modules, setModules] = useState([
    { name: "POS System", key: "pos", enabled: true },
    { name: "QR Ordering", key: "qr", enabled: true },
    { name: "Kitchen Display", key: "kitchen", enabled: false },
    { name: "Analytics", key: "analytics", enabled: true },
    { name: "Delivery", key: "delivery", enabled: false },
  ]);

  const organizationId = "demo-org"; // më vonë vjen nga session

  async function toggleModule(key: string, current: boolean) {
    const res = await fetch("/api/modules/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        organizationId,
        key,
        enabled: !current,
      }),
    });

    if (!res.ok) return;

    setModules((prev) =>
      prev.map((m) =>
        m.key === key ? { ...m, enabled: !m.enabled } : m
      )
    );
  }

  return (
    <div className="p-8">

      <h1 className="text-2xl font-semibold">
        Modules Control Center
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {modules.map((m) => (
          <div
            key={m.key}
            className="bg-white border rounded-2xl p-6 flex justify-between items-center"
          >
            
            <div>
              <h2 className="font-semibold">{m.name}</h2>
              <p className="text-sm text-gray-500">{m.key}</p>
            </div>

            <button
              onClick={() => toggleModule(m.key, m.enabled)}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                m.enabled ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
                  m.enabled ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}