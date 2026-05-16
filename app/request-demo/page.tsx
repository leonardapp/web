"use client";

import { useState } from "react";
import Link from "next/link";

export default function RequestDemoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white text-slate-900">

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

          {/* NAME */}
          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none"
          />

          {/* COMPANY */}
          <input
            name="company"
            required
            placeholder="Company Name"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none"
          />

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none"
          />

          {/* PHONE */}
          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none"
          />

          {/* LOCATIONS */}
          <select
            name="locations"
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none"
          >
            <option>1 Location</option>
            <option>2–5 Locations</option>
            <option>6–20 Locations</option>
            <option>20+ Locations</option>
          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your business..."
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 outline-none"
          />

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* SUCCESS */}
          {success && (
            <p className="text-green-600 text-sm">
              ✅ Request sent successfully. Our team will contact you soon.
            </p>
          )}

          {/* BUTTON */}
          <button
            disabled={loading}
            type="submit"
            className="w-full px-6 py-4 bg-black text-white rounded-full font-medium hover:bg-slate-800 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>

        {/* CONTACT */}
        <p className="mt-8 text-sm text-slate-500 text-center">
          Or contact us directly:{" "}
          <a className="text-black font-medium" href="mailto:info@hoxxes.com">
            info@hoxxes.com
          </a>{" "}
          /{" "}
          <a className="text-black font-medium" href="tel:+38348106060">
            +383 48 10 60 60
          </a>
        </p>

        <div className="mt-10 text-center">
          <Link href="/pricing" className="text-sm text-slate-500 hover:text-black">
            View Pricing
          </Link>
        </div>

      </section>
    </div>
  );
}