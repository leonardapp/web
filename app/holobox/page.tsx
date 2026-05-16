"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Step = 1 | 2 | 3 | 4;

export default function HoloBoxPage() {
  const [step, setStep] = useState<Step>(1);

  // Campaign basics
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Media
  const [file, setFile] = useState<File | null>(null);

  // Targeting
  const [targets, setTargets] = useState<string[]>([]);

  // Schedule
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  function toggleTarget(value: string) {
    setTargets((prev) =>
      prev.includes(value)
        ? prev.filter((t) => t !== value)
        : [...prev, value]
    );
  }

  async function submitCampaign() {
    setLoading(true);
    setStatus(null);

    try {
      const formData = new FormData();

      formData.append("brand", brand);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("targets", JSON.stringify(targets));
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);

      if (file) formData.append("file", file);

      const res = await fetch("/api/holobox/campaign", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        setStatus("Failed to create campaign");
        setLoading(false);
        return;
      }

      setStatus("Campaign submitted successfully");

      // reset
      setStep(1);
      setBrand("");
      setTitle("");
      setDescription("");
      setFile(null);
      setTargets([]);
      setStartDate("");
      setEndDate("");
    } catch (e) {
      setStatus("Error submitting campaign");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="text-xs tracking-[0.3em] uppercase text-slate-400">
          HoloBox Campaign Studio
        </div>
        <h1 className="text-4xl font-semibold mt-4">
          Create & Distribute Digital Campaigns
        </h1>
        <p className="text-slate-500 mt-3">
          Manage advertising content across POS, KDS, Kiosk and digital screens
        </p>
      </section>

      {/* STEP INDICATOR */}
      <div className="max-w-3xl mx-auto px-6 flex justify-between text-sm text-slate-400">
        {[
          "Brand",
          "Content",
          "Targeting",
          "Schedule",
        ].map((s, i) => (
          <div
            key={i}
            className={step === i + 1 ? "text-black font-medium" : ""}
          >
            {i + 1}. {s}
          </div>
        ))}
      </div>

      {/* FORM */}
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-6 py-10 space-y-6"
      >

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <input
              placeholder="Brand Name"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />

            <input
              placeholder="Campaign Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />

            <textarea
              placeholder="Campaign Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 h-28"
            />
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <label className="font-medium">Upload Media</label>
            <input
              type="file"
              accept="video/*,image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full"
            />
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-3">
            <div className="font-medium">Target Placement</div>

            {[
              "POS Screens",
              "KDS Screens",
              "Kiosk",
              "Mobile App",
              "Digital Signage",
            ].map((t) => (
              <label key={t} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={targets.includes(t)}
                  onChange={() => toggleTarget(t)}
                />
                {t}
              </label>
            ))}
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex justify-between pt-6">
          <button
            onClick={() => setStep((s) => Math.max(1, (s - 1) as Step))}
            className="px-4 py-2 border rounded-lg"
          >
            Back
          </button>

          {step < 4 ? (
            <button
              onClick={() => setStep((s) => (s + 1) as Step)}
              className="px-4 py-2 bg-black text-white rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitCampaign}
              disabled={loading}
              className="px-4 py-2 bg-black text-white rounded-lg"
            >
              {loading ? "Publishing..." : "Publish Campaign"}
            </button>
          )}
        </div>

        {status && (
          <p className="text-center text-sm text-slate-500 pt-4">
            {status}
          </p>
        )}
      </motion.div>
    </div>
  );
}
