"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

/* MAGNETIC */
function Magnetic({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320 }}
    >
      {children}
    </motion.div>
  );
}

export default function RequestDemoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = new FormData(e.currentTarget);

    const data = {
  name: form.get("name"),
  company: form.get("company"),
  businessType: form.get("businessType"),
  email: form.get("email"),
  phone: form.get("phone"),
  country: form.get("country"),
  locations: form.get("locations"),
  interest: form.get("interest"),
  message: form.get("message"),
};

    try {
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.error || "Request failed");
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();

    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen text-slate-900 overflow-hidden">
      <Header />

      {/* HERO */}
<section className="max-w-3xl mx-auto px-6 py-24 text-center">

  <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
    Request Demo
  </div>

  <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
    See HOXXES in action.
  </h1>
<p className="mt-3 text-sm text-emerald-600 font-medium">
  Discover how HOXXES fits your business.
</p>
  <p className="mt-5 text-base text-slate-500 leading-relaxed">
  Tell us about your business and discover how HOXXES can streamline
  operations, ordering, payments and multi-location management.
</p>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

  <div className="p-5 rounded-2xl border border-slate-200 bg-white">
    <div className="font-semibold">30 min</div>
    <div className="text-sm text-slate-500 mt-1">
      Personalized demo
    </div>
  </div>

  <div className="p-5 rounded-2xl border border-slate-200 bg-white">
    <div className="font-semibold">Live Walkthrough</div>
    <div className="text-sm text-slate-500 mt-1">
      Tailored to your business
    </div>
  </div>

  <div className="p-5 rounded-2xl border border-slate-200 bg-white">
    <div className="font-semibold">Deployment Plan</div>
    <div className="text-sm text-slate-500 mt-1">
      Software & hardware roadmap
    </div>
  </div>

</div>

</section>

      {/* FORM */}
<section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="grid lg:grid-cols-2 gap-12 items-start">

    {/* LEFT COLUMN */}
<div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 md:p-10">

  <form className="space-y-4" onSubmit={handleSubmit}>

        <input
          name="name"
          required
          placeholder="Full Name"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none"
        />

        <input
          name="company"
          required
          placeholder="Company Name"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none"
        />

        <select
          name="businessType"
          required
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none"
        >
          <option value="">Business Type</option>
          <option>Restaurant</option>
          <option>Fast Food / QSR</option>
          <option>Cafe / Coffee Shop</option>
          <option>Retail Store</option>
          <option>Hotel</option>
          <option>Enterprise</option>
          <option>Other</option>
        </select>

        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none"
        />

        <input
          name="country"
          placeholder="Country"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none"
        />

        <select
          name="locations"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none"
        >
          <option>1 Location</option>
          <option>2–5 Locations</option>
          <option>6–20 Locations</option>
          <option>20+ Locations</option>
        </select>

        <select
          name="interest"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none"
        >
          <option value="">Interested In</option>
          <option>Software Platform</option>
          <option>Hardware</option>
          <option>Software + Hardware</option>
          <option>Enterprise Infrastructure</option>
        </select>

        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your business..."
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none"
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {success && (
          <p className="text-green-600 text-sm">
            ✅ Request sent successfully. Our team will contact you soon.
          </p>
        )}

        <button
          disabled={loading}
          type="submit"
          className="w-full px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>

      </form>

      {/* CONTACT */}
      <div className="mt-8 text-sm text-slate-500 text-center flex flex-col items-center gap-3">

        <p>Prefer speaking with our team?</p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">

          <a
            className="px-5 py-2 border border-slate-200 rounded-full text-black hover:bg-black hover:text-white transition"
            href="mailto:info@hoxxes.com"
          >
            Contact Sales
          </a>

          <a
            className="px-5 py-2 border border-slate-200 rounded-full text-black hover:bg-black hover:text-white transition"
            href="tel:+38348106060"
          >
            Call Sales
          </a>

        </div>

      </div>

    </div>

    {/* RIGHT COLUMN */}
    <div className="rounded-3xl border border-slate-200 bg-white p-8 sticky top-24">

      <div className="text-xs uppercase tracking-[0.3em] text-emerald-600 text-center">
        Why HOXXES
      </div>

      <h3 className="mt-4 text-2xl font-semibold">
        What to expect from your demo.
      </h3>

      <p className="mt-4 text-slate-500">
        Manage operations, ordering, payments, workforce and analytics from a
        unified platform built for restaurants, retail and enterprise.
      </p>

      <div className="mt-8 space-y-6">

  <div className="pb-5 border-b border-slate-100">
    <div className="font-semibold">
      Personalized Consultation
    </div>

    <p className="mt-1 text-sm text-slate-500">
      Discuss your operational requirements, locations,
      ordering channels and deployment goals.
    </p>
  </div>

  <div className="pb-5 border-b border-slate-100">
    <div className="font-semibold">
      Live Platform Walkthrough
    </div>

    <p className="mt-1 text-sm text-slate-500">
      Explore ordering, inventory, workforce management,
      analytics and multi-location operations in real time.
    </p>
  </div>

  <div className="pb-5 border-b border-slate-100">
    <div className="font-semibold">
      Infrastructure Planning
    </div>

    <p className="mt-1 text-sm text-slate-500">
      Receive recommendations for software modules,
      hardware deployment and operational workflows.
    </p>
  </div>

  <div>
    <div className="font-semibold">
      Deployment Roadmap
    </div>

    <p className="mt-1 text-sm text-slate-500">
      Understand implementation timelines,
      onboarding and long-term scalability options.
    </p>
  </div>

</div>

    </div>

  </div>

</section>
    </div>
  );
}