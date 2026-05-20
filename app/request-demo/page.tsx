"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
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

/* FOOTER */
function Footer() {
  return (
    <footer className="border-t py-10 text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex justify-between">
        <p>© {new Date().getFullYear()} Hoxxes</p>

        <div className="flex items-center gap-8 text-sm text-slate-500">
          <Link href="/software" className="hover:text-black transition">
            Software
          </Link>

          <Link href="/hardware" className="hover:text-black transition">
            Hardware
          </Link>

          <Link href="/support" className="hover:text-black transition">
            Support
          </Link>
        </div>
      </div>
    </footer>
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
      email: form.get("email"),
      phone: form.get("phone"),
      locations: form.get("locations"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 py-28 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Request Demo
        </div>

        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
          See HOXXES in action.
        </h1>

        <p className="mt-6 text-lg text-slate-500 leading-relaxed">
          Tell us about your business and we’ll schedule a personalized demo of the platform.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <form onSubmit={handleSubmit} className="space-y-6">

          <input name="name" required placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none" />

          <input name="company" required placeholder="Company Name"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none" />

          <input name="email" type="email" required placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none" />

          <input name="phone" placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none" />

          <select name="locations"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none">
            <option>1 Location</option>
            <option>2–5 Locations</option>
            <option>6–20 Locations</option>
            <option>20+ Locations</option>
          </select>

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your business..."
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {success && (
            <p className="text-green-600 text-sm">
              ✅ Request sent successfully. Our team will contact you soon.
            </p>
          )}

          {/* BUTTON FIXED */}
          <button
            disabled={loading}
            type="submit"
            className="w-full px-6 py-4 bg-black text-white rounded-full font-medium hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>

        {/* CONTACT LINKS (BUTTON STYLE UNIFIED) */}
        <div className="mt-8 text-sm text-slate-500 text-center flex flex-col items-center gap-3">
          <p>Or contact us directly:</p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a
              className="px-5 py-2 border border-slate-300 rounded-full text-black hover:bg-black hover:text-white transition"
              href="mailto:info@hoxxes.com"
            >
              Email Support
            </a>

            <a
              className="px-5 py-2 border border-slate-300 rounded-full text-black hover:bg-black hover:text-white transition"
              href="tel:+38348106060"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}