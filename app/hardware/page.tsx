"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import Header from "@/components/Header";

type HardwareCategory = "All Hardware" | "Kiosks" | "POS Systems" | "Kitchen & Display" | "Interactive Displays";

type HardwareItem = {
  id: number;
  slug: string;
  anchor: string;
  title: string;
  subtitle: string;
  price: number;
  availability: "in-stock" | "sold-out" | "made-to-order";
  leadTime?: string;
  image: string;
  description: string;
  category: Exclude<HardwareCategory, "All Hardware">;
  highlights: string[];
};

const hardware: HardwareItem[] = [
  {
    id: 1,
    slug: "kiosk-slim",
    anchor: "kiosk",
    title: "Kiosk Slim",
    subtitle: '32" Wall-Mounted Self-Service Kiosk',
    price: 1185,
    availability: "in-stock",
    image: "https://hoxxes.app/images/kiosk1.png",
    description:
      "Wall-mounted self-service kiosk featuring a cold-rolled steel enclosure, embedded PC with RK3568 processor, Masung E80I thermal printer and Newland EM25 QR code scanner. Designed with dedicated space for integrating a POS payment terminal.",
    category: "Kiosks",
    highlights: ["32-inch self-service experience", "Integrated thermal printer", "QR code scanner"],
  },
  {
    id: 2,
    slug: "pos-terminal",
    anchor: "pos",
    title: "POS Terminal",
    subtitle: "Enterprise Dual-Screen POS",
    price: 677,
    availability: "sold-out",
    leadTime: "Up to 2 Months",
    image: "https://hoxxes.app/images/POS.png",
    description:
      "Enterprise dual-screen POS terminal equipped with a 15.6-inch main display and an 11.6-inch customer display, powered by the RK3576 processor with 4 GB RAM and 32 GB storage. Designed for fast, reliable point-of-sale operations with integration into the HOXXES ecosystem.",
    category: "POS Systems",
    highlights: ["15.6-inch main display", "11.6-inch customer display", "4 GB RAM · 32 GB storage"],
  },
  {
    id: 3,
    slug: "pos-terminal-single",
    anchor: "pos-single",
    title: "POS Terminal",
    subtitle: "Single-Screen POS",
    price: 507,
    availability: "sold-out",
    leadTime: "Up to 2 Months",
    image: "https://hoxxes.app/images/pos-single1.png",
    description:
      "Compact single-screen Android POS terminal with a 15.6-inch display, powered by the RK3568 processor, with 2 GB RAM and 32 GB storage. Designed for point-of-sale operations and integration with the HOXXES ecosystem.",
    category: "POS Systems",
    highlights: ["15.6-inch display", "RK3568 processor", "2 GB RAM · 32 GB storage"],
  },
  {
    id: 4,
    slug: "kds-display",
    anchor: "kds",
    title: "Kitchen Display System",
    subtitle: '21.5" Android Touch Display',
    price: 550,
    availability: "sold-out",
    leadTime: "Up to 2 Months",
    image: "https://hoxxes.app/images/kds-allnet.png",
    description:
      "21.5-inch Android touchscreen display powered by the RK3576 processor, with 4 GB RAM and 32 GB storage. Designed for kitchen operations with the HOXXES Kitchen Display System.",
    category: "Kitchen & Display",
    highlights: ["21.5-inch touchscreen", "RK3576 processor", "4 GB RAM · 32 GB storage"],
  },
  {
    id: 5,
    slug: "holo",
    anchor: "holo",
    title: 'HoloBox 86"',
    subtitle: "Transparent Interactive Holographic Display",
    price: 10000,
    availability: "in-stock",
    image: "https://hoxxes.app/images/holo.png",
    description:
      "Premium 86-inch transparent holographic display powered by Windows, designed to create immersive visual experiences for retail, hospitality, exhibitions and modern customer environments.",
    category: "Interactive Displays",
    highlights: ["86-inch display", "Windows-powered", "Retail & hospitality experiences"],
  },
];

const categories: HardwareCategory[] = [
  "All Hardware",
  "Kiosks",
  "POS Systems",
  "Kitchen & Display",
  "Interactive Displays",
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

function StockStatus({ item }: { item: HardwareItem }) {
  const available = item.availability === "in-stock";
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-black/60">
      <span
        className={`h-2 w-2 rounded-full ${
          available ? "bg-[#88d21a]" : "bg-amber-500"
        }`}
      />
      {available
        ? "In stock"
        : item.availability === "made-to-order"
          ? `Made to order${item.leadTime ? ` · ${item.leadTime}` : ""}`
          : `Currently unavailable${item.leadTime ? ` · ${item.leadTime}` : ""}`}
    </span>
  );
}

export default function HardwarePage() {
  const [activeCategory, setActiveCategory] = useState<HardwareCategory>("All Hardware");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<HardwareItem | null>(null);
  const [dimensionsProduct, setDimensionsProduct] = useState<HardwareItem | null>(null);

  const filteredHardware = useMemo(() => {
    const term = search.trim().toLowerCase();
    return hardware.filter((item) => {
      const matchesCategory =
        activeCategory === "All Hardware" || item.category === activeCategory;
      const matchesSearch =
        !term ||
        `${item.title} ${item.subtitle} ${item.description} ${item.category}`
          .toLowerCase()
          .includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171914]">
      <Header />

      {/* HERO */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#11140e] text-white sm:min-h-[740px]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://hoxxes.app/images/hero.png"
            alt="HOXXES restaurant and retail hardware"
            className="h-full w-full scale-[1.04] object-cover"
            style={{ objectPosition: "75% 20%" }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11140e] via-transparent to-black/20" />
        </div>

        <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24 sm:min-h-[740px] sm:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-semibold tracking-[0.22em] text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#88d21a]" />
              HOXXES HARDWARE COLLECTION
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              The hardware
              <span className="block text-[#88d21a]">behind better service.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Discover POS terminals, self-service kiosks and display technology
              designed to support your restaurant and retail operations.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#88d21a] px-7 font-semibold text-[#17210c] transition hover:bg-[#9be62c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Shop Hardware <span aria-hidden="true">↓</span>
              </a>
              
            </div>

            <div className="mt-8 flex w-full items-center justify-between gap-1 whitespace-nowrap text-[9px] font-semibold tracking-[0.08em] text-white/65 min-[375px]:text-[10px] min-[375px]:tracking-[0.1em] sm:mt-12 sm:justify-start sm:gap-x-7 sm:text-xs sm:tracking-[0.2em]">
  <span>POS SYSTEMS</span>
  <span className="text-[#88d21a]">/</span>
  <span>SELF-SERVICE</span>
  <span className="text-[#88d21a]">/</span>
  <span>KITCHEN & DISPLAY</span>
</div>
          </motion.div>
        </div>
      </section>

      {/* TRUST / VALUE STRIP */}
      <section className="border-b border-black/[0.07] bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-7 sm:grid-cols-3 sm:px-10 lg:px-12">
          {[
            ["Purpose-built hardware", "Equipment for customer-facing and back-of-house workflows."],
            ["Integrated ecosystem", "Explore devices designed to work with HOXXES solutions."],
            ["Sales assistance", "Talk to our team about configuration and availability."],
          ].map(([title, text]) => (
            <div key={title} className="flex gap-3">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#88d21a]/15 text-sm font-bold text-[#527f0e]">
                ✓
              </span>
              <div>
                <h2 className="text-sm font-semibold">{title}</h2>
                <p className="mt-1 text-xs leading-6 text-black/50">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO + PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.2em] text-[#5e9210]">
                HARDWARE STORE
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Find your setup.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                Explore our hardware collection, compare available options and
                choose the devices that fit your business.
              </p>
            </div>

            <div className="w-full lg:max-w-xs">
              <label htmlFor="hardware-search" className="mb-2 block text-xs font-semibold text-black/60">
                Search products
              </label>
              <div className="relative">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40"
                >
                  <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
                  <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <input
                  id="hardware-search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search hardware..."
                  className="h-12 w-full rounded-xl border border-black/10 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-black/35 focus:border-[#88d21a] focus:ring-2 focus:ring-[#88d21a]/20"
                />
              </div>
            </div>
          </div>

          {/* FILTERS */}
          <div className="mt-9 flex gap-2 overflow-x-auto pb-2" aria-label="Filter hardware by category">
            {categories.map((category) => {
              const selected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={selected}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition sm:px-5 ${
                    selected
                      ? "border-[#88d21a] bg-[#88d21a] text-[#17210c]"
                      : "border-black/10 bg-white text-black/60 hover:border-black/30 hover:text-black"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-7 flex items-center justify-between border-b border-black/[0.08] pb-4">
            <p className="text-xs text-black/50">
              <span className="font-semibold text-black">{filteredHardware.length}</span>{" "}
              {filteredHardware.length === 1 ? "product" : "products"}
            </p>
            <p className="hidden text-xs text-black/40 sm:block">
              Prices shown in EUR, excluding VAT
            </p>
          </div>

          {/* PRODUCT GRID */}
          {filteredHardware.length > 0 ? (
            <motion.div layout className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredHardware.map((item) => (
                  <motion.article
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.22 }}
                    className="group flex flex-col overflow-hidden rounded-[24px] border border-black/[0.08] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)]"
                  >
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-transparent p-6 sm:p-8">
                      <span className="absolute left-4 top-4 rounded-full border border-black/[0.06] bg-white/90 px-3 py-1.5 text-[9px] font-bold tracking-[0.14em] text-black/55">
                        {item.category.toUpperCase()}
                      </span>
                      {item.availability === "in-stock" && (
                        <span className="absolute right-4 top-4 rounded-full bg-[#e9f7d8] px-3 py-1.5 text-[9px] font-bold tracking-wide text-[#426d0c]">
                          AVAILABLE
                        </span>
                      )}
                      <img
                        src={item.image}
                        alt={`HOXXES ${item.title} – ${item.subtitle}`}
                        loading="lazy"
                        className={`h-full object-contain transition duration-500 group-hover:scale-[1.045] ${
                          item.id === 4 ? "w-[72%]" : "w-full"
                        }`}
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <StockStatus item={item} />
                      <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-1 min-h-10 text-sm leading-6 text-black/50">{item.subtitle}</p>

                      <div className="mt-5 flex items-end justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-semibold tracking-[0.12em] text-black/40">PRICE</p>
                          <p className="mt-1 text-2xl font-semibold tracking-tight">
                            {formatPrice(item.price)}
                            <span className="ml-1 text-xs font-normal text-black/45">+ VAT</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelectedProduct(item)}
                          className="mb-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-lg transition hover:border-[#88d21a] hover:bg-[#88d21a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a]"
                          aria-label={`View details for ${item.title} ${item.subtitle}`}
                        >
                          ↗
                        </button>
                      </div>

                      <div className="mt-5 border-t border-black/[0.07] pt-4">
                        <div className="flex flex-col gap-2 sm:flex-row">
                          {item.slug !== "holo" ? (
                            <Link
                              href={`/hardware/${item.slug}`}
                              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#88d21a] px-4 text-sm font-semibold text-[#17210c] transition hover:bg-[#9be62c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
                            >
                              {item.availability === "in-stock" ? "View & Buy" : "Order Details"}
                              
                            </Link>
                          ) : (
                            <Link
                              href="/contact-sales"
                              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#88d21a] px-4 text-sm font-semibold text-[#17210c] transition hover:bg-[#9be62c]"
                            >
                              Enquire Now 
                            </Link>
                          )}
                          <Link
                            href="/contact-sales"
                            className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 px-4 text-sm font-semibold text-black/70 transition hover:border-black/30 hover:text-black"
                          >
                            Request Quote
                          </Link>
                        </div>
                        <button
                          type="button"
                          onClick={() => setDimensionsProduct(item)}
                          className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-black/50 transition hover:text-[#527f0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a]"
                        >
                          View dimensions <span aria-hidden="true">↗</span>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="mt-8 rounded-3xl border border-dashed border-black/15 px-6 py-16 text-center">
              <p className="text-lg font-semibold">No matching products</p>
              <p className="mt-2 text-sm text-black/50">Try another keyword or category.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Hardware");
                }}
                className="mt-5 rounded-full bg-[#88d21a] px-5 py-2.5 text-sm font-semibold text-black"
              >
                Clear filters
              </button>
            </div>
          )}

          <p className="mt-6 text-xs leading-6 text-black/45">
            Product availability and estimated lead times may change. Please confirm
            the final configuration, delivery and VAT details with HOXXES before ordering.
          </p>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="bg-[#f5f7f1] px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#5e9210]">NEED A HAND?</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Not sure which hardware is right for you?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
              Tell us about your location, order volume and workflow. Our team can
              help you evaluate the appropriate hardware setup.
            </p>
            <Link
              href="/contact-sales"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#88d21a] px-6 font-semibold text-[#17210c] transition hover:bg-[#9be62c]"
            >
              Talk to Sales 
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["01", "Your business type", "Restaurant, fast food, food court or retail."],
              ["02", "Your customer flow", "Counter service, self-service or table ordering."],
              ["03", "Your team workflow", "Front-of-house, kitchen and pickup requirements."],
              ["04", "Your configuration", "Hardware options and integration needs."],
            ].map(([num, title, body]) => (
              <div key={num} className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-6">
                <p className="text-xs font-bold tracking-widest text-[#639a10]">{num}</p>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/50">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALES CTA */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#11140e] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88d21a]/15 blur-[100px]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#88d21a]">LET'S TALK HARDWARE</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
              Ready to build your setup?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Get product guidance, availability details and a quote tailored to your needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact-sales"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#88d21a] px-7 font-semibold text-[#17210c] transition hover:bg-[#9be62c]"
              >
                Request a Quote 
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/[0.08] px-6 py-8 sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-lg font-bold tracking-[-0.04em]" aria-label="HOXXES homepage">
            HOXXES<span className="ml-1 inline-block h-2 w-2 rounded-full bg-[#88d21a]" />
          </Link>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-black/55">
            <Link href="/software" className="hover:text-black">Software</Link>
            <Link href="/hardware" className="hover:text-black">Hardware</Link>
            <Link href="/offers" className="hover:text-black">Offers</Link>
            <Link href="/contact-sales" className="hover:text-black">Contact Sales</Link>
          </nav>
          <p className="text-xs text-black/40">© {new Date().getFullYear()} HOXXES</p>
        </div>
      </footer>

      {/* PRODUCT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProduct(null);
            }}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-dialog-title"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              className="relative my-auto grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2"
            >
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg transition hover:bg-[#f2f2f2]"
              >
                ×
              </button>

              <div className="flex min-h-[280px] items-center justify-center bg-transparent p-8 sm:min-h-[420px]">
                <img
                  src={selectedProduct.image}
                  alt={`HOXXES ${selectedProduct.title}`}
                  className={`max-h-[430px] object-contain ${
                    selectedProduct.id === 4 ? "w-[76%] mx-auto" : "w-full"
                  }`}
                />
              </div>

              <div className="p-6 sm:p-9">
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#5e9210]">
                  {selectedProduct.category.toUpperCase()}
                </p>
                <h2 id="product-dialog-title" className="mt-3 pr-7 text-3xl font-semibold tracking-tight">
                  {selectedProduct.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-black/50">{selectedProduct.subtitle}</p>

                <p className="mt-6 text-3xl font-semibold tracking-tight">
                  {formatPrice(selectedProduct.price)}
                  <span className="ml-2 text-xs font-normal text-black/45">+ VAT</span>
                </p>

                <div className="mt-4">
                  <StockStatus item={selectedProduct} />
                </div>

                <p className="mt-5 text-sm leading-7 text-black/65">
                  {selectedProduct.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {selectedProduct.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-black/65">
                      <span className="font-bold text-[#5e9210]">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-3">
                  {selectedProduct.slug !== "holo" ? (
                    <Link
                      href={`/hardware/${selectedProduct.slug}`}
                      className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#88d21a] px-5 text-sm font-semibold text-[#17210c] transition hover:bg-[#9be62c]"
                    >
                      Continue to product
                    </Link>
                  ) : (
                    <Link
                      href="/contact-sales"
                      className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#88d21a] px-5 text-sm font-semibold text-[#17210c] transition hover:bg-[#9be62c]"
                    >
                      Enquire about HoloBox
                    </Link>
                  )}
                  <Link
                    href="/contact-sales"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 px-5 text-sm font-semibold transition hover:border-black/30"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DIMENSIONS MODAL */}
      <AnimatePresence>
        {dimensionsProduct && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setDimensionsProduct(null);
            }}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${dimensionsProduct.title} dimensions`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-6xl"
            >
              <button
                type="button"
                onClick={() => setDimensionsProduct(null)}
                aria-label="Close dimensions"
                className="absolute -top-12 right-0 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Close ✕
              </button>
              <img
                src={`https://hoxxes.app/images/${dimensionsProduct.slug}-dimensions.png`}
                alt={`${dimensionsProduct.title} product dimensions`}
                className="mx-auto max-h-[85vh] w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
