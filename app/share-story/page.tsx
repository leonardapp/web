"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Star } from "lucide-react";


export default function ShareStoryPage() {
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState("");

console.log({
  success,
  error,
  loading,
});

  const ratingLabels = {
  1: "Needs Improvement",
  2: "Fair",
  3: "Good",
  4: "Great",
  5: "Excellent",
};
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);
  setSuccess(false);
  setError("");

  const form = new FormData(e.currentTarget);

  const body = {
    rating,
    business: form.get("business"),
    name: form.get("name"),
    story: form.get("story"),
    consent: form.get("consent") === "on",
  };

  try {
    const res = await fetch("/api/share-story", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const data = await res.json();

console.log("Status:", res.status);
console.log("Response:", data);

if (!res.ok) {
  setError(data.error || "Request failed");
  return;
}

console.log("SUCCESS");

setError("");
setSuccess(true);

e.currentTarget.reset();
setRating(5);

  } catch (err) {
  console.error("CATCH:", err);

  setSuccess(false);
  setError("Something went wrong. Please try again.");
} finally {
  setLoading(false);
}
};

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">

        {/* Hero */}

        <section className="pt-36 pb-16">

          <div className="max-w-2xl mx-auto px-6 text-center">

            <div className="text-xs uppercase tracking-[0.35em] text-emerald-600">
              Customer Reviews
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Leave a Review
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-500">
  Your feedback helps us improve HOXXES and gives other businesses
  the confidence to choose our platform.
</p>

          </div>

        </section>

        {/* Form */}

        <section className="pb-24">

          <div className="max-w-xl mx-auto px-6">

            <form
  onSubmit={handleSubmit}
  className="space-y-8"
>

              {/* Rating */}

              <div>

                <label className="block text-sm font-medium text-slate-900 mb-4">
                  Overall Rating
                </label>

                <div className="flex items-center gap-2">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition hover:scale-110"
                    >

                      <Star
                        size={30}
                        className={
  star <= rating
    ? "fill-amber-400 text-amber-400"
    : "text-slate-300"
}
                      />

                    </button>

                  ))}

                  <span className="ml-3 text-sm text-slate-500">
                    {ratingLabels[rating as keyof typeof ratingLabels]}
                  </span>

                </div>

              </div>

                            {/* Business Name */}

              <div>

                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-slate-900 mb-2"
                >
                  Business Name
                </label>

                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  placeholder="e.g. Restaurant Trofta"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
                />

              </div>

              {/* Your Name */}

              <div>

                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-900 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. John Smith"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
                />

              </div>

             
              {/* Experience */}

              <div>

                <label
                  htmlFor="story"
                  className="block text-sm font-medium text-slate-900 mb-2"
                >
                  Your Review
                </label>

                <textarea
                  id="story"
                  name="story"
                  rows={6}
                  required
                  maxLength={500}
                  placeholder="Tell us how HOXXES has helped your business..."
                  className="w-full resize-none rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Share your honest experience in a few sentences.
                </p>

              </div>

              {/* Permission */}

              <label className="flex items-start gap-3">

                <input
  type="checkbox"
  name="consent"
  required
  className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600"
/>

                <span className="text-sm leading-6 text-slate-500">
                  I agree that HOXXES may publish my review on its website.
                </span>

              </label>
                            {/* Submit */}

              <div className="pt-4">

                <button
  type="submit"
  disabled={loading}
  className="w-full rounded-full bg-black py-3.5 text-white font-medium transition duration-300 hover:bg-slate-800 disabled:opacity-60"
>
  {loading ? "Submitting..." : "Submit My Review"}
</button>

                <p className="mt-4 text-center text-sm text-slate-500">
                  Usually takes less than a minute.
                </p>

                {success && (
  <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
    <p className="font-medium text-emerald-700">
      ✅ Thank you for your review!
    </p>

    <p className="mt-2 text-sm text-emerald-600">
      Your review has been sent successfully and will be reviewed before publication.
    </p>
  </div>
)}

{error && (
  <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-center">
    <p className="text-red-600">
      {error}
    </p>
  </div>
)}

              </div>

            </form>

          </div>

        </section>

        {/* Google Review */}

<section className="border-t border-slate-200 py-20">

  <div className="max-w-2xl mx-auto px-6">

    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">

      {/* Stars */}

      <div className="flex justify-center gap-1 mb-5">

        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={22}
            className="fill-amber-400 text-amber-400"
          />
        ))}

      </div>

      {/* Heading */}

      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
        Enjoying your HOXXES experience?
      </h2>

      {/* Description */}

      <p className="mt-4 max-w-lg mx-auto text-slate-500 leading-7">
        Already shared your review with us?
        Help even more businesses discover HOXXES by leaving the same
        review on Google.
      </p>

      {/* Google Rating */}

      <div className="mt-6 flex items-center justify-center gap-2">

        <span className="text-sm text-slate-500">
          Rated
        </span>

        <span className="font-semibold text-slate-900">
          5.0
        </span>

        <div className="flex gap-1">

          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-amber-400 text-amber-400"
            />
          ))}

        </div>

        <span className="text-sm text-slate-500">
          on Google
        </span>

      </div>

      {/* Button */}

      <a
        href="https://g.page/r/Cd1zEK7ogU0pEBM/review"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center mt-8 rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-medium text-slate-900 transition-all duration-300 hover:border-black hover:bg-white hover:shadow-md"
      >
        Leave a Google Review
      </a>

      {/* Footer */}

      <p className="mt-6 text-xs text-slate-400">
        Thank you for helping us improve HOXXES.
      </p>

    </div>

  </div>

</section>

      </main>

      
    </>
  );
}