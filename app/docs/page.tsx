"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/Logo";
import Header from "@/components/Header";
import { spacing, text, layout } from "@/app/design-system";
const DATA: Record<string, string[]> = {
  "Products": [
    "Menaxhimi i Kategorive.pdf",
    "Shtimi ose Editimi i Produktit.pdf",
    "Importimi i Produktit.pdf",
    "Rreth Funksionit Çmim i Hapur.pdf",
    "Modifikues (Modifier).pdf",
    "Add-On.pdf",
    "Operacionet Masive.pdf",
    "Renditja e Produkteve.pdf"
  ],
  "Menu": [
    "Menaxhimi i Menu-ve.pdf",
    "QR Menu.pdf",
    "Stili i Menu-së.pdf",
    "HQ Menu.pdf",
    "Cilësimet e Menusë HQ.pdf"
  ],
  "Tables & QR Code": [
    "Seksioni i Tavolinave.pdf",
    "Shtruktura e Tavolinave.pdf",
    "Shtimi dhe modifikimi i tavolinave.pdf",
    "Rreth tavolinës për takeaway.pdf",
    "Rreth Table QR Code.pdf",
    "QR i përkohshëm dhe QR statik.pdf",
    "Shtimi i Table QR.pdf"
  ],
  "Orders": [
    "Metoda e Shërbimit.pdf",
    "Informacioni i Porosisë.pdf",
    "Faqja e Porosisë.pdf",
    "Statusi i Tavolinës.pdf",
    "Abnormal Order.pdf"
  ],
  "Payments": [
    "Ndërfaqja e Pagesës (Checkout Interface).pdf",
    "Metodat e Pagesës (Payment Method).pdf",
    "Zbritjet (Discount).pdf"
  ],
  "Reports": [
    "Koha e Ciklit të Raportit Ditor (Daily Report Cycle Time).pdf",
    "Llojet e Raporteve (Report Types).pdf",
    "Raporti i HQ dhe dyqanit (HQ and Store Report).pdf"
  ],
  "Hardware integration": [
    "Integrimi i Arkës.pdf",
    "Si të përdorni Arkën.pdf",
    "Llojet e Printerave.pdf",
    "Konfigurimi i Printerit Lokal.pdf"
  ],
  "Inventory": [
    "Inventari dhe Inventari i HQ.pdf",
    "Si të përdorni menaxhimin e inventarit.pdf",
    "Lista e Furnitorëve.pdf",
    "Cilësimet e njësive matëse (Unit Settings).pdf",
    "Konfigurimi i kategorive të stokut (Stock Category Setting).pdf",
    "Konfigurimi i artikujve të stokut (Stock Item Setting).pdf",
    "Konfigurimi i librave të recetave (Cookbook Setting).pdf"
  ],
  "Stock management": [
    "Raporti i Inventarit (Inventory Report).pdf",
    "Historiku i Stokut (Stock History).pdf",
    "Numërimi i Stokut (Stock Counting).pdf",
    "Transferimi i Stokut (Stock Transfer).pdf",
    "Soku dalës (Outbound Stock).pdf",
    "Si të menaxhoni stoku dalës (Outbound Stock).pdf",
    "Stoku Hyrës (Inbound Stock).pdf",
    "Lista e Inventarit (Inventory List).pdf"
  ],
  "Employee & Shift": [
    "Menaxhimi i Roleve (Role Management).pdf",
    "Menaxhimi i Llogarive (Account Management).pdf",
    "Hyrja-Dalja në POS.pdf",
    "Historia e Turneve (Shift History).pdf",
    "Konfigurimi i Turneve (Shift Setting).pdf",
    "Raporti i Turnit (Shift Report).pdf"
  ],
  "Attendance": [
    "Cilësimet e Prezencës (Attendance Setting).pdf",
    "Kartela e Punch-it (Punch Card).pdf",
    "Çfarë është Time Card (Kartela e Orarit).pdf",
    "Raporti i Prezencës (Attendance Report).pdf"
  ],
  "Settings": [
    "Zëri i njoftimit.pdf",
    "Cilësimi i gjuhës së sistemit.pdf",
    "Menaxhimi i informacionit të dyqanit.pdf",
    "Menaxhimi i degëve të dyqaneve.pdf"
  ],
  "Marketing & Loyalty": [
    "Aktivitetet e Marketingut (Voucher Marketing).pdf",
    "Kupona (Voucher).pdf",
    "Menaxhimi i Klientëve (Shto, Fshi, Menaxho).pdf",
    "Mini Program.pdf",
    "Pikët e klientëve.pdf",
    "Rimbushja e Membership-it.pdf",
    "Si të Konfiguroni Mini Programin.pdf"
  ]
};

const MODULES = Object.keys(DATA);

export default function DocsPage() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const filteredModules = useMemo(() => {
    return MODULES.filter((m) =>
      m.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const files = active ? DATA[active] ?? [] : [];

  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 overflow-hidden">

      {/* HEADER (FIXED LOCATION) */}
      <Header />

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center px-6 pt-24 sm:pt-28 lg:pt-32 pb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          Documentation Center
        </h1>

        <p className="mt-4 text-slate-500">
          Everything you need to operate Hoxxes systems.
        </p>

        <div className="mt-10">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search modules..."
            className="w-full md:w-[420px] px-5 py-3 border rounded-full outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20 sm:pb-28">
        <div className="grid md:grid-cols-3 gap-6">

          {filteredModules.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220 }}
              onClick={() => setActive(m)}
              className="cursor-pointer p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
            >
              <div className="text-xs text-slate-400 uppercase tracking-widest">
                Module {i + 1}
              </div>

              <h3 className="text-lg font-medium mt-2">{m}</h3>

              <p className="text-sm text-slate-500 mt-2">
                {DATA[m].length} documents available
              </p>

              <div className="mt-6 text-sm text-black font-medium">
                Open →
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6">
          <div className="bg-white w-full max-w-xl rounded-2xl p-6">

            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{active}</h2>

              <button onClick={() => setActive(null)} className="text-slate-500">
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-3 max-h-[400px] overflow-auto">
              {files.map((file) => (
                <a
                  key={file}
                  href={`https://hoxxes.app/udhezime/pdf/${encodeURIComponent(active!)}/${encodeURIComponent(file)}`}
                  target="_blank"
                  className="block p-3 border rounded-xl hover:bg-slate-50 text-sm"
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