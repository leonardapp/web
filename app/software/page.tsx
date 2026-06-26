"use client";

import Link from "next/link";
import Header from "@/components/Header";

export default function SoftwarePage() {
 
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-24 sm:pt-28 lg:pt-32 pb-32 sm:pb-20 text-center">
       <div className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-slate-400">
  Restaurant • Retail • Enterprise
</div>

<h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
  Built for restaurants,
  <span className="block text-slate-500 mt-2">
    retail and enterprise.
  </span>
</h1>

<p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed">
  Built for restaurants, retail businesses and multi-location operations.
HOXXES unifies ordering, payments, workforce, inventory, analytics,
centralized product synchronization and menu management into a single operating system.
</p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
                   
          <Link
            href="/request-demo"
            className="px-6 py-3 rounded-full bg-black text-white 
            hover:bg-slate-800 transition text-sm font-medium"
          >
            Request Demo
          </Link>

          <Link
            href="/hardware"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            Explore Hardware
          </Link>

        </div>
        </section> 
        <section className="pb-24 sm:pb-32">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Restaurant POS
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Web POS & Android POS.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
    Operate from any browser or use the Android POS application with
offline capabilities. Manage tables, orders, payments and reporting
from a unified platform synchronized across all devices. Customize
the login experience with your company logo.
  </p>
    </div>

    <div className="relative mt-10">

  {/* FOTO REALE */}
  <div className="overflow-hidden rounded-[32px]">
    <img
      src="https://hoxxes.app/images/pos-operations.png"
      alt="Restaurant POS Operations"
      className="w-full object-cover"
      loading="lazy"
    />
  </div>

</div>
<div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">
  <div>✓ Web POS</div>
<div>✓ Android POS</div>
<div>✓ Tables</div>
<div>✓ Offline Ready</div>
<div>✓ Takeaway</div>
<div>✓ Delivery</div>
<div>✓ Payments</div>
<div>✓ Customers</div>
<div>✓ Reporting</div>
<div>✓ Multi-Location</div>
<div>✓ Custom Logo</div>
<div>✓ Login Screen</div>
</div>

  </div>
 <p className="mt-10 max-w-md mx-auto text-sm text-slate-500 text-center px-4">
  Extend your POS with Android terminals and customer display solutions.
</p>

<div className="mt-8 flex justify-center px-4">
  <Link
    href="/hardware"
    className="
w-full sm:w-auto
max-w-md
px-6 py-3
rounded-full
border border-slate-300
text-slate-700
text-sm
font-medium
text-center
hover:bg-black
hover:text-white
hover:border-black
transition
"
  >
    Explore Compatible Hardware
  </Link>
</div>
</section>

{/* DIGITAL MENU */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        QR Ordering Infrastructure
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Every table becomes a digital ordering point.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
  Customers scan a QR code, browse the menu, place orders, call a waiter and track their bill in real time. Every table automatically becomes a digital ordering point with built-in QR management, analytics and real-time menu synchronization.
</p>
    </div>

    <div className="relative">

      {/* REAL IMAGE */}
      <img
        src="https://hoxxes.app/images/qr-ordering.png"
        alt="HOXXES QR Ordering"
        className="w-full rounded-[32px]"
        loading="lazy"
      />

    </div>

    <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">
      <div>✓ QR Ordering</div>
<div>✓ QR Generation</div>
<div>✓ Temporary QR</div>
<div>✓ Analytics</div>
<div>✓ Contactless</div>
<div>✓ Live Menus</div>
<div>✓ Waiter Call</div>
<div>✓ Bill Tracking</div>
<div>✓ QR Printing</div>
<div>✓ Multi-Language</div>      
    </div>
    <div className="mt-10 text-center">
  <div className="inline-flex flex-wrap justify-center gap-3 text-sm">
    <span className="px-4 py-2 rounded-full bg-slate-100">
      Unlimited Tables
    </span>
    <span className="px-4 py-2 rounded-full bg-slate-100">
      Unlimited QR Codes
    </span>
    <span className="px-4 py-2 rounded-full bg-slate-100">
      Dynamic Floor Management
    </span>
    <span className="px-4 py-2 rounded-full bg-slate-100">
      Real-Time Analytics
    </span>
  </div>
</div>
    <p className="mt-10 max-w-md mx-auto text-sm text-slate-500 text-center px-4">
  Experience a live digital ordering journey from scan to checkout.
</p>
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
  <a
  href="https://qr.hoxxes.com/qr/SSI718JKZ770"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-full
    border border-slate-300
    text-slate-700
    text-sm
    font-medium
    hover:bg-black
    hover:text-white
    hover:border-black
    transition
  "
>
  Explore Live Menu
</a>
</div>

  </div>
</section>

{/* PROMOTIONS & CAMPAIGN AUTOMATION */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Promotions Automation
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Promotions that run themselves.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Schedule promotions once and let HOXXES automatically activate
        and deactivate discounts, campaigns and loyalty benefits with
        complete accuracy.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-lg font-medium mb-3">
          Happy Hour Automation
        </div>

        <p className="text-sm text-slate-600">
          Automatically activate and deactivate Happy Hour promotions
          based on day and time schedules.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-lg font-medium mb-3">
          Scheduled Discounts
        </div>

        <p className="text-sm text-slate-600">
          Apply automatic discounts to products, categories or entire
          menus without manual intervention.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-lg font-medium mb-3">
          Loyalty Campaigns
        </div>

        <p className="text-sm text-slate-600">
          Launch voucher, membership and loyalty campaigns that run
          automatically across all channels.
        </p>
      </div>

    </div>

    <div className="mt-12 text-center">
      <p className="text-sm sm:text-base text-slate-600">
        No manual changes. No staff mistakes. No missed promotions.
      </p>

      <p className="mt-2 text-lg font-medium">
        Set it once. Let HOXXES handle the rest.
      </p>
    </div>

  </div>
</section>


{/* SELF-SERVICE KIOSK */}
<section className="py-24 sm:py-32 bg-transparent">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Self-Service Kiosk
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Let customers order independently.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Reduce queues, increase average order value and improve
operational efficiency with a fully integrated self-service
ordering experience connected directly to HOXXES POS,
Kitchen Display System and Analytics Cloud. Fully customizable
with your own branding and promotional content.
      </p>
    </div>

    <div className="relative">

      <img
        src="https://hoxxes.app/images/kiosk-ordering.png"
        alt="HOXXES Self Service Kiosk"
        className="w-full rounded-[32px]"
        loading="lazy"
      />

      
    </div>

    <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">
       <div>✓ Self Ordering</div>
<div>✓ Payments</div>
<div>✓ Upselling</div>
<div>✓ Kitchen Sync</div>
<div>✓ Reporting</div>
<div>✓ Languages</div>
<div>✓ Custom Logo</div>
<div>✓ Brand Colors</div>
<div>✓ Welcome Screen</div>
<div>✓ Promo Slides</div>
    </div>

  </div>
 <p className="mt-10 max-w-md mx-auto text-sm text-slate-500 text-center px-4">
   Discover the hardware behind the HOXXES self-service ecosystem.
</p>

<div className="mt-8 flex justify-center px-4">
  <Link
    href="/hardware"
    className="
w-full sm:w-auto
max-w-md
px-6 py-3
rounded-full
border border-slate-300
text-slate-700
text-sm
font-medium
text-center
hover:bg-black
hover:text-white
hover:border-black
transition
"
  >
    Explore Compatible Hardware
  </Link>
</div>
</section>
<section className="py-24 sm:py-32 bg-transparent">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Kitchen Display System
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Every order. Every station. In real time.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Orders flow directly from POS, QR and online channels into the
        kitchen, helping teams prepare, prioritize and deliver faster.
      </p>
    </div>

    <div className="relative">
  <img
    src="https://hoxxes.app/images/kitchen-display-system.png"
    alt="HOXXES Kitchen Display System"
    className="w-full rounded-[32px]"
    loading="lazy"
  />

</div>
 <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">
   <div>✓ Live Orders</div>
  <div>✓ Routing</div>
  <div>✓ Prioritization</div>
  <div>✓ Station View</div>
  <div>✓ Order Status</div>
  <div>✓ Kitchen Analytics</div>
  <div>✓ Real-Time Sync</div>
  <div>✓ Multi-Station</div>
</div>

  </div>
</section>

{/* MOBILE APP */}
<section className="py-24 sm:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Mobile App
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Manage operations from anywhere.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
  A unified mobile application for staff, managers and business owners.
  Create orders, manage tables, monitor sales, access reports and control
  operations directly from Android and iOS devices.
</p>
    </div>

    <div className="relative">

      {/* REAL IMAGE */}
      <img
        src="https://hoxxes.app/images/waiter-operations.png"
        alt="HOXXES Waiter Operations"
        className="w-full rounded-[32px]"
        loading="lazy"
      />

      
    </div>
    <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">
      <div>✓ Ordering</div>
  <div>✓ Tables</div>
  <div>✓ Live Sales</div>
  <div>✓ Backoffice</div>
  <div>✓ Manager View</div>
  <div>✓ Owner View</div>
  <div>✓ Android</div>
  <div>✓ iOS</div>
    </div>

  </div>
</section>
  
  {/* ONLINE ORDERING */}
<section className="py-24 sm:py-32 bg-transparent">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Online Ordering
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Your own branded ordering page.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
  Every subscriber receives a unique ordering link and a branded customer
  mini app for delivery, pickup, membership, loyalty rewards, wallet and
  vouchers. Orders arrive instantly inside HOXXES POS and Kitchen Display
  System.
</p>
    </div>

    <div className="relative">
      

      {/* REAL IMAGE */}
      <img
        src="https://hoxxes.app/images/online-ordering.png"
        alt="HOXXES Online Ordering"
        className="w-full rounded-[32px]"
        loading="lazy"
      />
      
    </div>

    <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">
      <div>✓ Membership</div>
  <div>✓ Loyalty</div>
  <div>✓ Wallet</div>
  <div>✓ Ordering Link</div>
  <div>✓ Branded Store</div>
  <div>✓ Pickup</div>
  <div>✓ Kitchen Sync</div>
  <div>✓ Mobile Ready</div>
    </div>
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
  <a
    href="https://order.hoxxes.com/store/4cbb7eb4-5ddc-4add-a203-fc535dc4686a"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-6 py-3
      rounded-full
      bg-black
      text-white
      text-sm
      font-medium
      text-center
      justify-center
      inline-flex
      hover:bg-slate-800
      transition
    "
  >
    View Live Store
  </a>

  <a
  href="https://miniprogram.hoxxes.com/app/17420/4cbb7eb4-5ddc-4add-a203-fc535dc4686a"
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-6 py-3
    rounded-full
    border border-slate-300
    text-slate-700
    text-sm
    font-medium
    text-center
    justify-center
    inline-flex
    hover:bg-black
    hover:text-white
    hover:border-black
    transition
  "
>
  Open Membership App
</a>
</div>

  </div>
</section>
       
{/* HQ CONTROL CENTER */}
<section className="py-24 sm:py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        HQ Control Center
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Control every location from a single HQ.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
          Centralized reporting, inventory management, workforce oversight, 
          product synchronization, menu administration, campaign scheduling 
          and operational control across all locations from a single HQ dashboard.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl overflow-hidden">
      <img
        src="https://hoxxes.app/images/dashboard-overview.png"
        alt="HOXXES HQ Control Center"
        className="w-full rounded-2xl"
        loading="lazy"
      />
    </div>
<div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 text-sm">
  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">
    HQ Reporting
  </span>
  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">
    Menu Control
  </span>
  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">
    Price Sync
  </span>
  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">
    Channel Menus
  </span>
   <span className="px-4 py-2 rounded-full bg-slate-100 text-center">
    Campaigns
  </span>
  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">
    HQ Deploy
  </span>
  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">
    Multi-Location
  </span>
  <span className="px-4 py-2 rounded-full bg-slate-100 text-center">
    KPI Tracking
  </span>
</div>
  </div>
</section>

{/* ANALYTICS DASHBOARD */}
<section className="py-24 sm:py-32 bg-transparent">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Analytics Cloud
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        Complete operational visibility.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Monitor sales, inventory, workforce and multi-location performance
        from a unified dashboard.
      </p>
    </div>

    <div className="relative">

      {/* REAL IMAGE */}
<img
  src="https://hoxxes.app/images/analytics-dashboard.png"
  alt="HOXXES Analytics"
  className="w-full rounded-[32px]"
  loading="lazy"
/>

    </div>
<div className="mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 text-slate-600 text-center">
   <div>✓ Sales</div>
  <div>✓ Inventory</div>
  <div>✓ Workforce</div>
  <div>✓ Multi-Location</div>
  <div>✓ Dashboards</div>
  <div>✓ Financials</div>
  <div>✓ KPI Tracking</div>
  <div>✓ Executive View</div>
</div>
  </div>
</section> 

{/* INCLUDED WITH EVERY DEPLOYMENT */}
<section className="pt-20 pb-24 sm:pt-12 sm:pb-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
        Included With Every Deployment
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
        One platform. Every channel.
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500">
        Every Hoxxes deployment includes ordering,
        commerce, customer engagement and operational
        management capabilities from a unified platform.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-4">
          Ordering Infrastructure
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div>✓ Web POS</div>
          <div>✓ Android POS (Offline Ready)</div>
          <div>✓ QR Ordering</div>
          <div>✓ Android App</div>
          <div>✓ iOS App</div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-4">
          Commerce Infrastructure
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div>✓ Delivery & Pickup</div>
          <div>✓ E-Shop</div>
          <div>✓ Membership</div>
          <div>✓ Loyalty</div>
          <div>✓ Wallet & Vouchers</div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-4">
          Operations Infrastructure
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div>✓ Analytics Dashboard</div>
          <div>✓ Web Backoffice</div>
          <div>✓ Inventory Management</div>
          <div>✓ Workforce Management</div>
          <div>✓ Multi-Location Control</div>
        </div>
      </div>

    </div>

  </div>
</section>
    

      {/* FINAL CTA */}
      <section className="py-24 sm:py-32 text-center px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Ready to modernize your operations?
        </h2>
        

        <p className="mt-4 text-slate-500">
          Enterprise-grade infrastructure for scalable hospitality systems.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          
           <Link
            href="/request-demo"
            className="px-6 py-3 rounded-full bg-black text-white 
            hover:bg-slate-800 transition text-sm font-medium"
          >
            Request Demo
          </Link>

          <Link
            href="/hardware"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            View Hardware
          </Link>

          <Link
            href="/pricing"
            className="px-6 py-3 rounded-full border border-slate-300 
            text-slate-700 hover:bg-black hover:text-white hover:border-black 
            transition text-sm font-medium"
          >
            View Pricing
          </Link>
          

        </div>

      </section>
      

    </div>
  );
}