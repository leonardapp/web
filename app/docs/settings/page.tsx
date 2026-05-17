"use client";

import { motion } from "framer-motion";

const settingsGroups = [
  {
    title: "System Configuration",
    description: "Core system behavior and environment settings.",
    items: [
      "Store configuration",
      "Tax rules",
      "Currency settings",
      "Time zone",
    ],
  },
  {
    title: "User Preferences",
    description: "Control how users interact with the platform.",
    items: [
      "Language settings",
      "Role permissions",
      "Notification rules",
      "UI preferences",
    ],
  },
  {
    title: "Integrations",
    description: "External systems and API connections.",
    items: [
      "Payment providers",
      "Printers & hardware",
      "POS sync",
      "Third-party APIs",
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* AMBIENT BACKGROUND (same design system) */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-200/30 blur-[160px] rounded-full" />

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center px-6 py-24">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          System Settings
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
          Configure your system
          <span className="block text-slate-500">
            and operational rules
          </span>
        </h1>

        <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
          Manage core configurations, integrations, and user experience
          settings across the Hoxxes ecosystem.
        </p>
      </section>

      {/* SETTINGS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-6">

          {settingsGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
            >
              <h2 className="text-lg font-semibold tracking-tight">
                {group.title}
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                {group.description}
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-600">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-emerald-500">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FOOTER STRIP */}
      <footer className="border-t py-10 text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <p>© {new Date().getFullYear()} Hoxxes</p>
          <div className="flex gap-6">
            <span>Settings</span>
            <span>System</span>
            <span>Security</span>
          </div>
        </div>
      </footer>
    </div>
  );
}