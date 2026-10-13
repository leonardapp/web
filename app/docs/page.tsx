
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const DATA: Record<string, string[]> = {
  Products: [
    "Menaxhimi i Kategorive.pdf",
    "Shtimi ose Editimi i Produktit.pdf",
    "Importimi i Produktit.pdf",
    "Rreth Funksionit Çmim i Hapur.pdf",
    "Modifikues (Modifier).pdf",
    "Add-On.pdf",
    "Operacionet Masive.pdf",
    "Renditja e Produkteve.pdf",
  ],
  Menu: [
    "Menaxhimi i Menu-ve.pdf",
    "QR Menu.pdf",
    "Stili i Menu-së.pdf",
    "HQ Menu.pdf",
    "Cilësimet e Menusë HQ.pdf",
  ],
  "Tables & QR Code": [
    "Seksioni i Tavolinave.pdf",
    "Shtruktura e Tavolinave.pdf",
    "Shtimi dhe modifikimi i tavolinave.pdf",
    "Rreth tavolinës për takeaway.pdf",
    "Rreth Table QR Code.pdf",
    "QR i përkohshëm dhe QR statik.pdf",
    "Shtimi i Table QR.pdf",
  ],
  Orders: [
    "Metoda e Shërbimit.pdf",
    "Informacioni i Porosisë.pdf",
    "Faqja e Porosisë.pdf",
    "Statusi i Tavolinës.pdf",
    "Abnormal Order.pdf",
  ],
  Payments: [
    "Ndërfaqja e Pagesës (Checkout Interface).pdf",
    "Metodat e Pagesës (Payment Method).pdf",
    "Zbritjet (Discount).pdf",
  ],
  Reports: [
    "Koha e Ciklit të Raportit Ditor (Daily Report Cycle Time).pdf",
    "Llojet e Raporteve (Report Types).pdf",
    "Raporti i HQ dhe dyqanit (HQ and Store Report).pdf",
  ],
  "Hardware integration": [
    "Integrimi i Arkës.pdf",
    "Si të përdorni Arkën.pdf",
    "Llojet e Printerave.pdf",
    "Konfigurimi i Printerit Lokal.pdf",
  ],
  Inventory: [
    "Inventari dhe Inventari i HQ.pdf",
    "Si të përdorni menaxhimin e inventarit.pdf",
    "Lista e Furnitorëve.pdf",
    "Cilësimet e njësive matëse (Unit Settings).pdf",
    "Konfigurimi i kategorive të stokut (Stock Category Setting).pdf",
    "Konfigurimi i artikujve të stokut (Stock Item Setting).pdf",
    "Konfigurimi i librave të recetave (Cookbook Setting).pdf",
  ],
  "Stock management": [
    "Raporti i Inventarit (Inventory Report).pdf",
    "Historiku i Stokut (Stock History).pdf",
    "Numërimi i Stokut (Stock Counting).pdf",
    "Transferimi i Stokut (Stock Transfer).pdf",
    "Soku dalës (Outbound Stock).pdf",
    "Si të menaxhoni stoku dalës (Outbound Stock).pdf",
    "Stoku Hyrës (Inbound Stock).pdf",
    "Lista e Inventarit (Inventory List).pdf",
  ],
  "Employee & Shift": [
    "Menaxhimi i Roleve (Role Management).pdf",
    "Menaxhimi i Llogarive (Account Management).pdf",
    "Hyrja-Dalja në POS.pdf",
    "Historia e Turneve (Shift History).pdf",
    "Konfigurimi i Turneve (Shift Setting).pdf",
    "Raporti i Turnit (Shift Report).pdf",
  ],
  Attendance: [
    "Cilësimet e Prezencës (Attendance Setting).pdf",
    "Kartela e Punch-it (Punch Card).pdf",
    "Çfarë është Time Card (Kartela e Orarit).pdf",
    "Raporti i Prezencës (Attendance Report).pdf",
  ],
  Settings: [
    "Zëri i njoftimit.pdf",
    "Cilësimi i gjuhës së sistemit.pdf",
    "Menaxhimi i informacionit të dyqanit.pdf",
    "Menaxhimi i degëve të dyqaneve.pdf",
  ],
  "Marketing & Loyalty": [
    "Aktivitetet e Marketingut (Voucher Marketing).pdf",
    "Kupona (Voucher).pdf",
    "Menaxhimi i Klientëve (Shto, Fshi, Menaxho).pdf",
    "Mini Program.pdf",
    "Pikët e klientëve.pdf",
    "Rimbushja e Membership-it.pdf",
    "Si të Konfiguroni Mini Programin.pdf",
  ],
};

const MODULES = Object.keys(DATA);

export default function DocsPage() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const filteredModules = useMemo(
    () =>
      MODULES.filter((module) =>
        module.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const files = active ? DATA[active] ?? [] : [];

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-slate-900">
      <Header />

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-24 text-center sm:pt-28 lg:pt-32">
        <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Documentation Center
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-slate-500">
          Access operational guides, product documentation, configuration
          manuals and best practices across the entire HOXXES ecosystem.
        </p>

        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
            <span>🇽🇰</span>
            <span>Kosovo Documentation · Albanian</span>
          </div>

          <p className="mx-auto max-w-md text-xs text-slate-400">
            This documentation is currently tailored for HOXXES operations in
            Kosovo and is available in Albanian.
          </p>
        </div>

        <div className="mt-10">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search modules..."
            aria-label="Search modules"
            className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-[#88d21a] focus:ring-2 focus:ring-[#88d21a]/20 md:w-[420px]"
          />
        </div>
      </section>

      {/* MODULE GRID */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          {filteredModules.map((module, index) => (
            <motion.div
              key={module}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220 }}
              onClick={() => setActive(module)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActive(module);
                }
              }}
              role="button"
              tabIndex={0}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-[#88d21a]/60 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              <div className="text-xs font-medium uppercase tracking-widest text-[#52820f]">
                Module {index + 1}
              </div>

              <h3 className="mt-2 text-lg font-medium">{module}</h3>

              <p className="mt-2 text-sm text-slate-500">
                {DATA[module].length} documents available
              </p>

              <div className="mt-6 text-sm font-semibold text-[#52820f] transition-colors group-hover:text-[#76b915]">
                Open →
              </div>
            </motion.div>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <p className="py-12 text-center text-sm text-slate-500">
            No modules found. Try another search.
          </p>
        )}
      </section>

      {/* DOCUMENT MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="docs-modal-title"
            className="w-full max-w-xl rounded-2xl bg-white p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 id="docs-modal-title" className="text-lg font-semibold">
                {active}
              </h2>

              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="rounded-full p-2 text-slate-500 transition-colors hover:bg-[#f5fce9] hover:text-[#52820f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a]"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 max-h-[400px] space-y-3 overflow-auto">
              {files.map((file) => (
                <a
                  key={file}
                  href={`https://hoxxes.app/udhezime/pdf/${encodeURIComponent(active)}/${encodeURIComponent(file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-slate-200 p-3 text-sm transition-colors hover:border-[#88d21a]/50 hover:bg-[#f5fce9]"
                >
                  {file}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
