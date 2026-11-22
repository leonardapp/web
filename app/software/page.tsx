"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import IndustriesSection from "@/components/IndustriesSection";
import { useEffect, useMemo, useState } from "react";

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
  "mobile-applications": "mobile-applications",
  kds: "kds",
  "online-ordering": "online-ordering",
  "qr-ordering": "qr-ordering",
  kiosk: "kiosk",
  "delivery-integrations": "delivery-integrations",
  marketing: "promotions",
  "analytics-dashboard": "analytics-dashboard",
  "hq-control-center": "hq-control-center",
  ods: "ods",
  "kitchen-printer": "kitchen-printer",
  fiscalization: "fiscalization",
  "kiosk-payment-integration": "kiosk-payment-integration",
};

const modules: SoftwareModule[] = [

{
    id: "pos",
    eyebrow: "Point of Sale",
    title: "Restaurant POS",
    description:
      "Run dine-in, takeaway and delivery sales through one connected point-of-sale platform. Choose Web POS or an Android POS terminal, available in single-screen and dual-screen configurations, with offline operation on supported Android setups.",
    image: "https://hoxxes.app/images/pos-operations3.png",
    imageAlt: "HOXXES Restaurant POS interface",
    features: [
      { title: "Manage every order", description: "Handle dine-in, takeaway and delivery orders through one POS workflow." },
      { title: "Flexible POS access", description: "Choose Web POS or Android POS, with offline capabilities on supported Android setups." },
      { title: "Control sales and payments", description: "Manage transactions, payment methods and sales activity from your POS." },
    ],
    link: { label: "Shop POS Terminals", href: "/hardware", style: "primary" },
  },

{
  id: "mobile-applications",
  eyebrow: "Mobile Apps for Staff",
  title: "Smarter Staff Operations.",
  description:
    "Empower your staff to take customer orders directly from their mobile devices. Orders are sent to HOXXES in real time, helping your team serve faster and keep kitchen operations connected.",
  image: "https://hoxxes.app/images/waiter-operations2.png",
  imageAlt: "Restaurant staff taking customer orders using Android and iOS mobile devices",
  features: [
    {
      title: "Android & iOS applications",
      description: "Equip your waiters with mobile applications available on Android and iOS devices."
    },
    {
      title: "Real-time order taking",
      description: "Let staff select products, customize orders and submit them directly from the table."
    },
    {
      title: "Connected kitchen workflow",
      description: "Orders are instantly transferred to the kitchen workflow, reducing manual communication and delays."
    },
  ],
},

{
    id: "kiosk",
    eyebrow: "Self-Service Kiosk",
    title: "Let customers order independently.",
    description:
      "Offer a branded self-service ordering experience on a dedicated Android kiosk, connected with HOXXES POS, Kitchen Display System and analytics.",
    image: "https://hoxxes.app/images/kiosk-ordering1.png",
    imageAlt: "HOXXES self-service kiosk",
    features: [
      { title: "Simplify ordering", description: "Guide customers through a self-ordering journey." },
      { title: "Promote relevant items", description: "Use upselling and promotional content in the kiosk experience." },
      { title: "Connect the workflow", description: "Send orders into the connected POS and kitchen workflow." },
    ],
    link: { label: "Shop Self-Service Kiosks", href: "/hardware", style: "primary" },
  },

{
    id: "qr-ordering",
    eyebrow: "QR Ordering",
    title: "Every table becomes a digital ordering point.",
    description:
      "Customers scan a QR code to browse the menu, place orders, call a waiter and track their bill.",
    image: "https://hoxxes.com/images/qr-ordering2.png",
    imageAlt: "HOXXES QR ordering experience",
    features: [
      { title: "Order from the table", description: "Let guests browse menus and submit orders through QR." },
      { title: "Keep menus current", description: "Synchronize menu content and manage QR codes." },
      { title: "Improve table service", description: "Support waiter calls and bill tracking where enabled." },
    ],
    link: { label: "Live Menu", href: "https://qr.hoxxes.app/qr/SSI904ZSF640", style: "primary" },
  },

{
  id: "online-ordering",
  eyebrow: "Online Ordering",
  title: "Your own branded eShop & Mini App.",
  description:
    "Get a dedicated eShop for delivery and pickup orders, plus a Mini App for membership, vouchers, digital wallet and points, with map-based delivery zones.",
  image: "https://hoxxes.app/images/online-ordering-new.png",
  imageAlt: "HOXXES branded eShop and customer Mini App",
  features: [
    {
      title: "Dedicated eShop",
      description:
        "Share your link anywhere and receive direct delivery and pickup orders in HOXXES.",
    },
    {
      title: "Customer Mini App",
      description:
        "Membership, vouchers, digital wallet and points history in one place.",
    },
    {
      title: "Delivery & Pickup",
      description:
        "Offer pickup and delivery within your predefined map area.",
    },
  ],
  link: {
    label: "eShop",
    href: "https://order.hoxxes.app/store/a119d2d9-1b87-4b8f-8a60-efb4b56e5522",
    style: "primary",
  },
},

{
    id: "delivery-integrations",
    eyebrow: "Third-Party Order Management",
    title: "Manage third-party orders with separate reporting.",
    description:
      "Process third-party orders directly through HOXXES by selecting the delivery channel, specifying the recipient and adding the ordered products. These orders bypass the standard POS checkout process and are recorded in a separate third-party sales report.",
    image: "https://hoxxes.app/images/delivery-Integration2.png",
    imageAlt: "HOXXES third-party order management",
    features: [
      { title: "Dedicated order workflow", description: "Select the delivery channel, specify the recipient and add the products included in the order." },
      { title: "POS checkout bypass", description: "Process third-party orders without going through the standard cash register closing process." },
      { title: "Separate sales reporting", description: "Keep third-party orders in a dedicated report, separate from regular POS sales and daily shift reports." },
    ],
  },

{
  id: "kds",
  eyebrow: "Kitchen Display System",
  title: "Smarter kitchen operations.",
  description:
    "Keep kitchen teams aligned with the HOXXES Android Kitchen Display System, running on dedicated screens that organize incoming orders and connect preparation workflows with order status displays.",
  image: "https://hoxxes.app/images/kitchen-display-system2.png",
  imageAlt: "HOXXES Kitchen Display System",
  features: [
    {
      title: "Order Layouts",
      description: "Classic, Tiled and Split layouts for organizing kitchen orders.",
    },
    {
      title: "Ticket Customization",
      description: "Customize ticket content, typography, colors and live preview.",
    },
    {
      title: "Modifier Highlights",
      description: "Create custom styles to highlight modifiers and toppings.",
    },
    {
      title: "System & Connectivity",
      description: "Language settings, real-time updates and connection recovery.",
    },
  ],
  link: { label: "Shop KDS Displays", href: "/hardware", style: "primary" },
},

{
    id: "kitchen-printer",
    eyebrow: "Kitchen Printer Integration",
    title: "Connect kitchen printing to your order flow.",
    description:
      "Route order details to compatible kitchen printers as part of the configured HOXXES POS and kitchen workflow.",
    image: "https://hoxxes.app/images/kitchen-printer.png",
    imageAlt: "HOXXES kitchen printer integration",
    features: [
      { title: "Print order tickets", description: "Send order details to configured kitchen printers." },
      { title: "Organize preparation", description: "Support printer routing based on the configured operation." },
      { title: "Work with POS", description: "Connect kitchen printing with supported HOXXES order workflows." },
    ],
  },

{
    id: "ods",
    eyebrow: "Order Display System",
    title: "Keep customers informed at pickup.",
    description:
      "Run the HOXXES Android Order Display System on a dedicated customer-facing screen to show order progress and ready-to-collect orders, connected to the kitchen workflow.",
    image: "https://hoxxes.app/images/order-display.png",
    imageAlt: "HOXXES Order Display System",
    features: [
      { title: "Show order progress", description: "Present order statuses on a dedicated customer display." },
      { title: "Connect with KDS", description: "Receive preparation status updates from the connected Kitchen Display System." },
      { title: "Improve pickup flow", description: "Help customers identify when their orders are ready." },
    ],
    link: { label: "Shop ODS Displays", href: "/hardware", style: "primary" },
  },

{
    id: "kiosk-payment-integration",
    eyebrow: "HOXXES Kiosk Payment Integration",
    title: "Accept card payments directly at your kiosk.",
    description:
      "Connect compatible bank payment terminals to HOXXES self-service kiosks through HOXXES Payment Bridge, allowing customers to pay by card during the kiosk ordering process.",
    image: "https://hoxxes.app/images/payment-intg2.png",
    imageAlt: "HOXXES kiosk connected to a bank payment terminal",
    features: [
      { title: "Bank terminal connection", description: "Link compatible bank payment terminals with HOXXES self-service kiosks through HOXXES Payment Bridge." },
      { title: "Card payment at checkout", description: "Allow customers to complete kiosk orders by paying with a bank card at the connected terminal." },
      { title: "Integrated payment flow", description: "Connect the kiosk checkout with the supported terminal and bank integration configuration." },
    ],
  },

{
  id: "fiscalization",
  eyebrow: "Fiscalization & Digital Receipts",
  title: "Flexible fiscalization for modern businesses.",
  description:
    "HOXXES supports two fiscalization approaches: traditional certified fiscal cash registers and a dedicated SEF application that operates in full coordination with the HOXXES platform.",
  image: "https://hoxxes.app/images/fiscal-printer.png",
  imageAlt: "HOXXES fiscalization and digital receipt solutions",
  features: [
    {
      title: "Traditional fiscal cash registers",
      description:
        "Connect certified fiscal cash registers through authorized operators, with dedicated hardware and an annual subscription."
    },
    {
      title: "Dedicated SEF application",
      description:
        "A separately developed application works in coordination with HOXXES, supporting the required onboarding process and communication with the fiscal system."
    },
    {
      title: "Real-time fiscal operations",
      description:
        "Declare invoices in real time and process invoice returns and cancellations through the coordinated workflow."
    },
  ],
},

{
    id: "operations-hub",
    eyebrow: "Operations Hub",
    title: "Stay connected to your business operations.",
    description:
      "Access key operational information through the HOXXES Operations Hub mobile app and stay connected with your business while away from the counter.",
    image: "https://hoxxes.app/images/report-over.png",
    imageAlt: "HOXXES Operations Hub mobile app",
    features: [
      { title: "Operational overview", description: "Keep important business activity accessible from your mobile device." },
      { title: "On-the-go access", description: "Stay connected to your HOXXES operations when you are away from the POS." },
      { title: "One connected platform", description: "Access the operational information made available to your account through HOXXES." },
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
    id: "promotions",
    eyebrow: "Promotions Automation",
    title: "Promotions that run themselves.",
    description:
      "Schedule promotional rules and campaigns to reduce repetitive manual changes across supported channels.",
    image: "https://hoxxes.app/images/promotion.png",
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


function getExternalLinkClasses(
  variant: "primary" | "secondary" | "outline" = "secondary",
) {
  const base =
    "inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2";

  const styles = {
    primary: "bg-[#88d21a] text-[#17210c] hover:bg-[#76b915] shadow-sm",
    secondary:
      "border border-[#e9f8d0] bg-[#f5fce9] text-[#34520f] hover:bg-[#e9f8d0]",
    outline:
      "border border-[#88d21a] text-[#26351a] hover:bg-[#88d21a] hover:text-[#17210c]",
  };

  return `${base} ${styles[variant]}`;
}

function ModuleCard({ module }: { module: SoftwareModule }) {
  return (
    <article
      id={module.id}
      className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#88d21a]/60 hover:shadow-[0_22px_55px_rgba(15,23,42,.10)]"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#f1f4ed]">
        <img
          src={module.image}
          alt={module.imageAlt}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
          loading="lazy"
          decoding="async"
          width={1200}
          height={750}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10180b]/20 via-transparent to-white/5" />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#456b13] shadow-sm backdrop-blur sm:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#88d21a]" />
          {module.eyebrow}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <h2 className="text-xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-[1.4rem]">
          {module.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {module.description}
        </p>

        <div className="mt-6 space-y-4 border-t border-slate-100 pt-5">
          {module.features.map((feature, index) => (
            <div key={feature.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1f9e6] text-[11px] font-semibold text-[#568611]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-5 text-slate-900">{feature.title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-slate-500 sm:text-sm sm:leading-6">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {module.link && (
          <div className="mt-auto flex flex-col items-stretch gap-2.5 border-t border-slate-100 pt-6 sm:flex-row sm:flex-wrap lg:items-center lg:justify-center">
            {module.link.href.startsWith("http") ? (
              <a href={module.link.href} target="_blank" rel="noopener noreferrer" className={getExternalLinkClasses(module.link.style ?? "secondary")}>
                {module.link.label}
              </a>
            ) : (
              <Button href={module.link.href} variant={module.link.style ?? "secondary"} className="min-h-11 px-5">
                {module.link.label}
              </Button>
            )}
            {module.id === "online-ordering" && (
              <a href="https://miniprogram.hoxxes.app/app/18839/a119d2d9-1b87-4b8f-8a60-efb4b56e5522" target="_blank" rel="noopener noreferrer" className={getExternalLinkClasses("outline")}>
                Membership App
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function QRStoryCard() {
  const steps = [
    { number: "01", title: "Scan & Discover", description: "One simple scan opens your digital menu instantly. No app installation. No waiting." },
    { number: "02", title: "Order & Enjoy", description: "Guests can browse the menu, order at the table, call a waiter and view their bill." },
    { number: "03", title: "Stay in Control", description: "Create and manage table QR codes directly from your HOXXES Back Office." },
  ];

  return (
    <article id="qr-ordering" className="scroll-mt-24 col-span-full w-full max-w-none min-w-0 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-4 shadow-[0_10px_36px_rgba(15,23,42,.05)] sm:rounded-[2rem] sm:p-7 lg:p-9">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5d9510] sm:text-xs">QR Ordering</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">One scan. Endless possibilities.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">A smarter dining experience for your guests and complete control for your business — all connected through one QR system.</p>
      </div>

      <div className="grid w-full min-w-0 items-stretch gap-4 md:grid-cols-3 md:gap-5">
        <section className="flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-[#fbfcf9] p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf6d9] text-xs font-bold text-[#527f12]">01</span><div><p className="text-xs font-semibold uppercase tracking-wider text-[#5d9510]">Scan</p><h3 className="text-base font-semibold text-slate-900">Scan & Discover</h3></div></div>
          <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-2xl bg-[#eef4e7] sm:min-h-[360px]">
            <img
              src="https://hoxxes.app/images/qr-ordering2.png"
              alt="HOXXES QR ordering experience"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
            />
          </div>
          <p className="mt-4 text-center text-xs font-medium text-[#527f12]">No app required</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">One simple scan opens your digital menu instantly. No app installation. No waiting.</p>
        </section>

        <section className="flex min-w-0 flex-col rounded-[1.5rem] border border-slate-200/80 bg-[#fbfcf9] p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf6d9] text-xs font-bold text-[#527f12]">02</span><div><p className="text-xs font-semibold uppercase tracking-wider text-[#5d9510]">Interact</p><h3 className="text-base font-semibold text-slate-900">Order & Enjoy</h3></div></div>
          <p className="mb-5 text-sm leading-6 text-slate-600">Everything guests need, right on their phone.</p>
          <div className="space-y-3">
            {[
              ["Browse the Menu", "Explore products, options and prices."],
              ["Order at the Table", "Send orders directly to your team."],
              ["Call Your Waiter", "Request assistance when needed."],
              ["View Your Bill", "Keep track of the table bill."],
            ].map(([title, description]) => (
              <div key={title} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f0f8e5] text-[#5d9510]">✓</span>
                <div><h4 className="text-sm font-semibold text-slate-900">{title}</h4><p className="mt-1 text-xs leading-5 text-slate-500">{description}</p></div>
              </div>
            ))}
          </div>

          {/* REPEAT ORDERS & COUNTER ALERT */}
          <div className="mt-4 rounded-xl border border-[#88d21a]/25 bg-white p-3 shadow-sm">
            <div className="flex items-start gap-2.5">
              <span className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0f8e5] text-[#5d9510]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                  <path d="M10 21h4" />
                </svg>
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">1</span>
              </span>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-slate-900">Order Again, Anytime</h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  New orders ring at the counter and are added to the same table.
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-2 rounded-lg bg-[#f7faf3] px-2.5 py-2">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#88d21a]" />
                <span className="truncate text-[10px] font-medium text-slate-600">New order received</span>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 text-[10px] text-slate-500">
                Table 04
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">1</span>
              </span>
            </div>
          </div>
        </section>

        <section className="flex min-w-0 flex-col rounded-[1.5rem] border border-slate-200/80 bg-[#fbfcf9] p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf6d9] text-xs font-bold text-[#527f12]">03</span><div><p className="text-xs font-semibold uppercase tracking-wider text-[#5d9510]">Manage</p><h3 className="text-base font-semibold text-slate-900">Stay in Control</h3></div></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3"><div><p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Back Office</p><p className="mt-1 text-sm font-semibold text-slate-900">QR Management</p></div><span className="rounded-full bg-[#eff8e4] px-2.5 py-1 text-[10px] font-semibold text-[#568611]">Active</span></div>
            <div className="space-y-3 py-4">
              <div className="rounded-xl bg-[#f7faF3] p-3"><p className="text-xs font-semibold text-slate-800">Static QR Code</p><p className="mt-1 text-[11px] leading-4 text-slate-500">Permanent code for each table</p></div>
              <div className="rounded-xl bg-[#f7faF3] p-3"><p className="text-xs font-semibold text-slate-800">Temporary QR Code</p><p className="mt-1 text-[11px] leading-4 text-slate-500">Create a code whenever you need it</p></div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-[10px] font-medium text-slate-600"><span>✓ Instant activation</span><span>✓ 4 download styles</span><span>✓ One-click copy</span><span>✓ Delete anytime</span></div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">No technical assistance. No waiting. Full control from your Back Office.</p>
          <a href="https://qr.hoxxes.app/qr/SSI904ZSF640" target="_blank" rel="noopener noreferrer" className={`${getExternalLinkClasses("primary")} mt-auto lg:self-center`}>
            Explore Live Menu
          </a>
        </section>
      </div>
    </article>
  );
}

export default function SoftwarePage() {
  const [moduleSearch, setModuleSearch] = useState("");
  const filteredModules = useMemo(() => {
    const query = moduleSearch.trim().toLowerCase();
    if (!query) return modules;
    return modules.filter((module) =>
      [module.title, module.eyebrow, module.description,
        ...module.features.flatMap((feature) => [feature.title, feature.description])]
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [moduleSearch]);

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
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
        Restaurant · Retail · Enterprise
      </div>
            
<h1 className="mt-5 text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.045em] sm:mt-6 sm:text-5xl sm:leading-[1.03] md:text-6xl xl:text-[4.5rem]">
  <span className="block">Your whole business.</span>
  <span className="mt-1 block text-slate-400 sm:mt-2">
    One connected system.
  </span>
</h1>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:mx-0">
              Connect ordering, sales, kitchen operations and business insights in one platform — giving your team the tools to work smarter and helping you stay in control.
            </p>
          </div>

          

{/* HOXXES Ecosystem Hero Visual */}
<div className="hoxxes-reveal relative mx-auto flex min-h-[340px] w-full max-w-2xl items-center justify-center [animation-delay:120ms] sm:min-h-[460px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:min-h-[500px]">

  {/* Soft green ambient glow */}
  <div className="pointer-events-none absolute inset-x-0 top-8 bottom-4 rounded-full bg-[#88d21a]/15 blur-3xl" />

  {/* Subtle decorative frame */}
  <div className="pointer-events-none absolute left-[10%] top-[14%] h-[65%] w-[82%] rotate-[-4deg] rounded-[3rem] border border-[#88d21a]/15" />

  {/* Hero image */}
  <div className="relative z-[1] w-full overflow-hidden rounded-[1.5rem] lg:left-[-3%] lg:top-[-12px] lg:w-[110%]">
  <img
    src="https://hoxxes.app/images/hoxxes-hero-ecosystem.png"
    alt="HOXXES Restaurant Technology Ecosystem"
    className="block h-auto w-full rounded-[1.5rem] object-contain mix-blend-multiply"
    width={1728}
    height={972}
    loading="eager"
    decoding="async"
    fetchPriority="high"
  />
</div>


</div>


          {/* Mobile places these actions below the visual; desktop keeps them below the intro. */}
          <div className="hoxxes-reveal relative z-10 mx-auto w-full max-w-xl text-center [animation-delay:220ms] lg:col-start-1 lg:row-start-2 lg:mx-0 lg:text-left">
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              
              
<a
  href="https://hoxxes.com/download"
  rel="noopener noreferrer"
  className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#88d21a] px-6 py-3.5 text-sm font-medium text-[#26351a] transition-all duration-200 hover:bg-[#88d21a] hover:text-[#17210c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2 sm:w-auto"
>
  Download Apps
</a>

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
  <p className="text-xs uppercase tracking-[0.35em] text-emerald-600">
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

          {/* SEARCH — FIND A MODULE WITHOUT A LONG SHORTCUT LIST */}
          <div className="mx-auto mb-10 max-w-2xl sm:mb-14">
            <label htmlFor="ecosystem-search" className="mb-3 block text-center text-sm font-medium text-slate-700">
              Find the tools your team needs
            </label>
            <div className="group relative">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#5d9510]"
              >
                <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
                <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <input
                id="ecosystem-search"
                type="search"
                value={moduleSearch}
                onChange={(event) => setModuleSearch(event.target.value)}
                placeholder="Search POS, QR Ordering, Analytics…"
                aria-describedby="ecosystem-search-hint"
                className="min-h-14 w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-12 text-sm text-slate-800 shadow-[0_8px_28px_rgba(15,23,42,.045)] outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#88d21a] focus:ring-4 focus:ring-[#88d21a]/15"
              />
              {moduleSearch && (
                <button
                  type="button"
                  onClick={() => setModuleSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a]"
                >
                  <span aria-hidden="true" className="text-xl leading-none">×</span>
                </button>
              )}
            </div>
            <p id="ecosystem-search-hint" className="mt-3 text-center text-xs text-slate-500" aria-live="polite">
              {moduleSearch.trim()
                ? `${filteredModules.length} ${filteredModules.length === 1 ? "module" : "modules"} found`
                : `${modules.length} connected solutions · Search by product or capability`}
            </p>
          </div>

          {/* SOFTWARE MODULE CARDS */}
          {filteredModules.length > 0 ? (
            <div className="grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-7">
              {filteredModules.map((module) => (
                module.id === "qr-ordering" ? (
                  <QRStoryCard key={module.id} />
                ) : (
                  <ModuleCard key={module.id} module={module} />
                )
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 px-5 py-14 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2f9e8] text-[#5d9510]">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
                  <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">No matching modules</h3>
              <p className="mt-2 text-sm text-slate-500">Try another product name or capability.</p>
              <button
                type="button"
                onClick={() => setModuleSearch("")}
                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full bg-[#88d21a] px-5 py-2 text-sm font-medium text-[#17210c] transition hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
              >
                Clear search
              </button>
            </div>
          )}
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
              <Button href="/hardware" variant="primary" className="px-6 py-3.5">
                Shop Hardware 
              </Button>
              
              <Button href="/pricing" variant="outline" className="px-6 py-3.5">
                Pricing 
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
