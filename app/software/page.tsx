"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import IndustriesSection from "@/components/IndustriesSection";
import { useEffect } from "react";

type Feature = {
  title: string;
  description: string;
};

type SoftwareModule = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: Feature[];
  link?: { label: string; href: string; style?: "primary" | "secondary" | "outline" };
};

const featureTargets: Record<string, string> = {
  pos: "pos",
  "operations-hub": "operations-hub",
  kds: "kds",
  "online-ordering": "online-ordering",
  "qr-ordering": "qr-ordering",
  kiosk: "kiosk",
  "delivery-integrations": "delivery-integrations",
  marketing: "promotions",
  "payment-integration": "payment-integration",
  "analytics-dashboard": "analytics-dashboard",
  "hq-control-center": "hq-control-center",
};

const modules: SoftwareModule[] = [
  {
    id: "pos",
    eyebrow: "Point of Sale",
    title: "Restaurant POS",
    description:
      "Manage orders, tables, payments and reporting from one connected POS platform. Use the web POS or Android POS application according to your operation.",
    image: "https://hoxxes.app/images/pos-operations2.png",
    imageAlt: "HOXXES Restaurant POS interface",
    features: [
      { title: "Manage every order", description: "Handle dine-in, takeaway and delivery orders in one workflow." },
      { title: "Stay operational", description: "Use Android POS with offline capabilities where supported by your setup." },
      { title: "Understand performance", description: "Access sales reports, customer information and business insights." },
    ],
    link: { label: "Explore Compatible Hardware", href: "/hardware", style: "secondary" },
  },
  {
    id: "operations-hub",
    eyebrow: "Operations Hub",
    title: "Manage operations from anywhere.",
    description:
      "Give staff, managers and business owners a unified view of day-to-day restaurant operations from supported devices.",
    image: "https://hoxxes.app/images/waiter-operations.png",
    imageAlt: "HOXXES operations management",
    features: [
      { title: "Coordinate service", description: "Access ordering and table workflows from your operations tools." },
      { title: "Keep an eye on sales", description: "Review live sales and operational information." },
      { title: "Support every role", description: "Provide manager and owner views alongside staff workflows." },
    ],
  },
  {
    id: "workforce-management",
    eyebrow: "Workforce Management",
    title: "Attendance with location verification.",
    description:
      "Manage employee attendance with desktop and mobile punch in/out and configurable working zones.",
    image: "https://hoxxes.app/images/punch.png",
    imageAlt: "HOXXES workforce attendance interface",
    features: [
      { title: "Record attendance", description: "Let employees punch in and punch out." },
      { title: "Verify work zones", description: "Configure allowed locations and location radius." },
      { title: "Review attendance", description: "Check attendance history, employee records and status exceptions." },
    ],
  },
  {
    id: "qr-ordering",
    eyebrow: "QR Ordering",
    title: "Every table becomes a digital ordering point.",
    description:
      "Customers scan a QR code to browse the menu, place orders, call a waiter and track their bill.",
    image: "https://hoxxes.app/images/qr-ordering.png",
    imageAlt: "HOXXES QR ordering experience",
    features: [
      { title: "Order from the table", description: "Let guests browse menus and submit orders through QR." },
      { title: "Keep menus current", description: "Synchronize menu content and manage QR codes." },
      { title: "Improve table service", description: "Support waiter calls and bill tracking where enabled." },
    ],
    link: { label: "Explore Live Menu", href: "https://qr.hoxxes.com/qr/SSI718JKZ770", style: "secondary" },
  },
  {
    id: "kiosk",
    eyebrow: "Self-Service Kiosk",
    title: "Let customers order independently.",
    description:
      "Offer a branded self-service ordering experience connected with HOXXES POS, Kitchen Display System and analytics.",
    image: "https://hoxxes.app/images/kiosk-ordering2.png",
    imageAlt: "HOXXES self-service kiosk",
    features: [
      { title: "Simplify ordering", description: "Guide customers through a self-ordering journey." },
      { title: "Promote relevant items", description: "Use upselling and promotional content in the kiosk experience." },
      { title: "Connect the workflow", description: "Send orders into the connected POS and kitchen workflow." },
    ],
    link: { label: "Explore Compatible Hardware", href: "/hardware", style: "secondary" },
  },
  {
    id: "payment-integration",
    eyebrow: "Payment Integration",
    title: "Connect supported payment terminals.",
    description:
      "Explore payment-terminal integration options for the HOXXES self-service experience.",
    image: "https://hoxxes.app/images/payment-intg.png",
    imageAlt: "HOXXES payment terminal integration",
    features: [
      { title: "Explore payment options", description: "Review integration possibilities for your kiosk setup." },
      { title: "Confirm compatibility", description: "Check terminal compatibility and availability with our team." },
      { title: "Plan your deployment", description: "Choose the configuration that fits your business." },
    ],
    link: { label: "Confirm Compatibility", href: "/contact-sales", style: "primary" },
  },
  {
    id: "online-ordering",
    eyebrow: "Online Ordering",
    title: "Your own branded ordering page.",
    description:
      "Give customers a branded online ordering experience for delivery, pickup and customer engagement.",
    image: "https://hoxxes.app/images/online-ordering.png",
    imageAlt: "HOXXES online ordering storefront",
    features: [
      { title: "Make ordering easy", description: "Share a dedicated ordering link and mobile-ready storefront." },
      { title: "Build customer loyalty", description: "Support membership, loyalty, wallet and voucher features where configured." },
      { title: "Connect to operations", description: "Bring online orders into the HOXXES POS and kitchen workflow." },
    ],
    link: { label: "View Live Store", href: "https://order.hoxxes.com/store/4cbb7eb4-5ddc-4add-a203-fc535dc4686a", style: "primary" },
  },
  {
    id: "delivery-integrations",
    eyebrow: "Delivery Integrations",
    title: "Manage incoming delivery orders in one place.",
    description:
      "Bring supported delivery-platform orders into a more unified workflow for your team.",
    image: "https://hoxxes.app/images/delivery-Integration.png",
    imageAlt: "HOXXES delivery integrations",
    features: [
      { title: "Unify incoming orders", description: "Reduce the need to monitor separate order channels." },
      { title: "Support the team", description: "Keep incoming order workflows more organized." },
      { title: "Confirm supported services", description: "Ask our team which platforms are available for your setup." },
    ],
    link: { label: "Ask About Integrations", href: "/contact-sales", style: "secondary" },
  },
  {
    id: "kds",
    eyebrow: "Kitchen Display System",
    title: "Every order. Every station. In real time.",
    description:
      "Orders flow from POS, QR and online channels into the kitchen, helping teams prepare, prioritize and deliver orders.",
    image: "https://hoxxes.app/images/kitchen-display-system.png",
    imageAlt: "HOXXES Kitchen Display System",
    features: [
      { title: "Organize kitchen orders", description: "View incoming orders and their current status." },
      { title: "Route work to stations", description: "Distribute orders to designated kitchen stations where configured." },
      { title: "Track kitchen performance", description: "Review preparation times and service insights where available." },
    ],
  },
  {
    id: "promotions",
    eyebrow: "Promotions Automation",
    title: "Promotions that run themselves.",
    description:
      "Schedule promotional rules and campaigns to reduce repetitive manual changes across supported channels.",
    image: "https://hoxxes.app/images/analytics-dashboard.png",
    imageAlt: "HOXXES business dashboard",
    features: [
      { title: "Schedule promotions", description: "Configure campaigns by date and time." },
      { title: "Manage discounts", description: "Apply configured offers to products, categories or menus." },
      { title: "Support loyalty campaigns", description: "Coordinate voucher, membership and loyalty initiatives where enabled." },
    ],
  },
  {
    id: "hq-control-center",
    eyebrow: "HQ Control Center",
    title: "Control every location from a single HQ.",
    description:
      "Coordinate reporting, menus, pricing, campaigns and operational oversight across locations.",
    image: "https://hoxxes.app/images/dashboard-overview.png",
    imageAlt: "HOXXES HQ Control Center",
    features: [
      { title: "Centralize management", description: "Manage menu administration and product synchronization." },
      { title: "Coordinate locations", description: "Support centralized oversight for multi-location operations." },
      { title: "Review business activity", description: "Access HQ reporting and KPI views." },
    ],
  },
  {
    id: "analytics-dashboard",
    eyebrow: "Analytics Cloud",
    title: "Complete operational visibility.",
    description:
      "Monitor sales, inventory, workforce and multi-location performance from a unified dashboard.",
    image: "https://hoxxes.app/images/analytics-dashboard.png",
    imageAlt: "HOXXES analytics dashboard",
    features: [
      { title: "Understand sales", description: "Review sales performance and business trends." },
      { title: "Monitor operations", description: "Bring inventory and workforce information into view." },
      { title: "Follow key indicators", description: "Use dashboards and KPI tracking to support decisions." },
    ],
  },
];

function ModuleCard({ module }: { module: SoftwareModule }) {
  return (
    <article
      id={module.id}
      className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(15,23,42,.045)] transition duration-300 hover:-translate-y-1 hover:border-[#88d21a]/60 hover:shadow-[0_20px_48px_rgba(15,23,42,.10)]"
    >
      {/* All module images use the same 16:9 frame. */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-100">
        <img
          src={module.image}
          alt={module.imageAlt}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.025]"
          loading="lazy"
          width={1200}
          height={675}
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.03]" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f5fce9] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4d790e] sm:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#88d21a]" aria-hidden="true" />
          {module.eyebrow}
        </p>

        <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-[1.35rem]">
          {module.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {module.description}
        </p>

        <ul className="mt-6 space-y-4 border-t border-slate-100 pt-6">
          {module.features.map((feature) => (
            <li key={feature.title} className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                className="mt-0.5 h-[19px] w-[19px] shrink-0 text-[#5d9510]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="m8 12.2 2.5 2.5 5.5-5.7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="text-sm font-semibold leading-5 text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {module.link && (
          <div className="mt-auto flex flex-col items-stretch justify-center gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Button
              href={module.link.href}
              target={module.link.href.startsWith("http") ? "_blank" : undefined}
              rel={module.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variant={module.link.style ?? "secondary"}
              className="min-h-11 px-5"
            >
              {module.link.label} <span aria-hidden="true">↗</span>
            </Button>
            {module.id === "online-ordering" && (
              <Button
                href="https://miniprogram.hoxxes.com/app/17420/4cbb7eb4-5ddc-4add-a203-fc535dc4686a"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="min-h-11 px-5"
              >
                Open Membership App <span aria-hidden="true">↗</span>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function SoftwarePage() {
  useEffect(() => {
    const feature = new URLSearchParams(window.location.search).get("feature");
    if (!feature) return;

    const targetId = featureTargets[feature];
    if (!targetId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fafbf8] text-slate-900">
      <Header />

      {/* VISUAL-FIRST HERO */}
      <style>{`
        @keyframes hoxxes-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes hoxxes-glow { 0%, 100% { box-shadow: 0 12px 35px rgba(136,210,26,.12); } 50% { box-shadow: 0 18px 48px rgba(136,210,26,.25); } }
        @keyframes hoxxes-reveal { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .hoxxes-float { animation: hoxxes-float 5s ease-in-out infinite; }
        .hoxxes-float-delay { animation: hoxxes-float 5.8s ease-in-out 1s infinite; }
        .hoxxes-reveal { animation: hoxxes-reveal .75s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .hoxxes-float, .hoxxes-float-delay, .hoxxes-reveal { animation: none !important; } }
      `}</style>

      <section className="relative isolate overflow-hidden px-5 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#88d21a]/10 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-10 lg:gap-y-0">
          {/* Intro stays first on every screen. */}
          <div className="hoxxes-reveal relative z-10 mx-auto max-w-2xl text-center lg:col-start-1 lg:row-start-1 lg:mx-0 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#88d21a]/40 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#88d21a] shadow-[0_0_0_4px_rgba(136,210,26,.15)]" /> Restaurant · Retail · Enterprise
            </div>
            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl md:text-6xl xl:text-[4.5rem]">
              Your whole business.
              <span className="mt-2 block text-slate-400">One connected system.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:mx-0">
              Connect ordering, sales, kitchen operations and business insights in one platform — giving your team the tools to work smarter and helping you stay in control.
            </p>
          </div>

          {/* On mobile, the image appears before the hero buttons. On desktop it sits to the right. */}
          <div className="hoxxes-reveal relative mx-auto min-h-[340px] w-full max-w-2xl [animation-delay:120ms] sm:min-h-[460px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:min-h-[500px]">
            <div className="pointer-events-none absolute inset-x-8 top-12 bottom-6 rounded-full bg-[#88d21a]/15 blur-3xl" />
            <div className="pointer-events-none absolute left-[12%] top-[17%] h-[58%] w-[76%] rounded-[3rem] border border-[#88d21a]/15 rotate-[-5deg]" />
            <div className="pointer-events-none absolute left-[18%] top-[12%] h-[58%] w-[76%] rounded-[3rem] border border-slate-200/70 rotate-[4deg]" />

            <div className="absolute inset-x-5 top-14 z-[1] rounded-[1.6rem] bg-white/80 p-2 shadow-[0_28px_70px_rgba(15,23,42,.16)] ring-1 ring-white/90 backdrop-blur-sm sm:inset-x-10 sm:top-12 sm:rounded-[2rem] sm:p-3">
              <img src="https://hoxxes.app/images/pos-menu.png" alt="HOXXES POS dashboard" className="aspect-[1.42/1] w-full rounded-[1.2rem] object-cover object-top sm:rounded-[1.5rem]" fetchPriority="high" />
            </div>

            <div className="hoxxes-float absolute left-0 top-0 z-20 w-[35%] sm:left-1 sm:w-[32%]">
              <img src="https://hoxxes.app/images/QR-hero.png" alt="HOXXES QR Ordering" className="aspect-[1.05/1] w-full object-contain drop-shadow-[0_16px_20px_rgba(15,23,42,.18)] transition-transform duration-500 hover:scale-105" />
              <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[10px] font-semibold text-slate-700 shadow-md backdrop-blur-md sm:text-xs">QR Ordering <span className="text-[#5d9510]">↗</span></div>
            </div>

            <div className="hoxxes-float-delay absolute bottom-0 right-0 z-20 w-[40%] sm:right-1 sm:w-[36%]">
              <img src="https://hoxxes.app/images/KDS-hero.png" alt="HOXXES Kitchen Display System" className="aspect-[1.2/1] w-full object-contain drop-shadow-[0_18px_24px_rgba(15,23,42,.2)] transition-transform duration-500 hover:scale-105" />
              <div className="flex items-center justify-between gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-md"><span className="text-[10px] font-semibold text-slate-700 sm:text-xs">Kitchen Display</span><span className="h-2 w-2 shrink-0 rounded-full bg-[#88d21a] shadow-[0_0_0_4px_rgba(136,210,26,.16)]" /></div>
            </div>
          </div>

          {/* Mobile places these actions below the visual; desktop keeps them below the intro. */}
          <div className="hoxxes-reveal relative z-10 mx-auto w-full max-w-xl text-center [animation-delay:220ms] lg:col-start-1 lg:row-start-2 lg:mx-0 lg:text-left">
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <Button
                href="/request-demo"
                variant="primary"
                className="px-6 py-3.5 shadow-[0_8px_24px_rgba(136,210,26,.25)]"
              >
                See HOXXES in action <span aria-hidden="true">↗</span>
              </Button>
              <Button href="https://hoxxes.com/download" target="_blank" rel="noopener noreferrer" variant="outline" className="px-6 py-3.5">
                <svg aria-hidden="true" className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                  <path d="M5 17v3h14v-3" />
                </svg>
                Download Center
              </Button>
            </div>

          </div>

        </div>
         
     {/* END OF HERO SECTION */}
</section>

{/* HOXXES SOFTWARE ECOSYSTEM — ONE UNIFIED SECTION */}
      <section
        id="software-modules"
        className="relative isolate scroll-mt-20 overflow-hidden bg-gradient-to-b from-white/70 via-[#fafbf8] to-white/80 px-5 pb-20 sm:px-6 sm:pb-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[min(90vw,60rem)] -translate-x-1/2 rounded-full bg-[#88d21a]/[0.07] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* CENTERED SECTION HEADING */}
          <div className="mx-auto mb-8 max-w-3xl pt-16 text-center sm:mb-10 sm:pt-20 lg:pt-24">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#88d21a]/30 bg-white/90 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4d790e] shadow-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#88d21a]" aria-hidden="true" />
              The HOXXES ecosystem
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              Everything your operation needs.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Explore connected tools designed to support ordering, service,
              kitchen workflows and business management.
            </p>
          </div>

          {/* QUICK LINKS — GROUPED AS A LIGHT NAVIGATION PANEL */}
          <nav
            aria-label="Software feature navigation"
            className="mx-auto mb-10 flex max-w-5xl flex-wrap justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-[0_8px_28px_rgba(15,23,42,.035)] sm:mb-14 sm:gap-2.5 sm:p-4"
          >
            {[
              ["Restaurant POS", "#pos"],
              ["Operations Hub", "#operations-hub"],
              ["Workforce", "#workforce-management"],
              ["QR Ordering", "#qr-ordering"],
              ["Self-Service Kiosk", "#kiosk"],
              ["Payments", "#payment-integration"],
              ["Online Ordering", "#online-ordering"],
              ["Delivery Integrations", "#delivery-integrations"],
              ["Kitchen Display", "#kds"],
              ["Promotions", "#promotions"],
              ["HQ Control Center", "#hq-control-center"],
              ["Analytics", "#analytics-dashboard"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-center text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-[#88d21a]/70 hover:bg-[#f7fceb] hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2 sm:px-4"
              >
                {label}
                <span aria-hidden="true" className="text-slate-400">↗</span>
              </a>
            ))}
          </nav>

          {/* SOFTWARE MODULE CARDS */}
          <div className="grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-7">
            {modules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />


      {/* FINAL CTA */}
      <section className="px-5 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#88d21a]/20 bg-gradient-to-br from-white via-[#f7fceb] to-white px-6 py-12 text-center shadow-[0_16px_48px_rgba(15,23,42,.055)] sm:px-10 sm:py-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#88d21a]/10 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5d9510] sm:text-xs">
              Let’s build your setup
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Ready to modernize your operations?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Let’s find the right HOXXES setup for your business.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button href="/request-demo" variant="primary" className="px-6 py-3.5">
                Request Demo <span aria-hidden="true">↗</span>
              </Button>
              <Button href="/hardware" variant="secondary" className="px-6 py-3.5">
                Explore Hardware <span aria-hidden="true">↗</span>
              </Button>
              <Button href="/pricing" variant="outline" className="px-6 py-3.5">
                Pricing <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
