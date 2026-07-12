"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20">

      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-sm p-12 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <svg
            className="h-10 w-10 text-emerald-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="mt-8 text-4xl font-semibold">
          Request Submitted Successfully
        </h1>

        <p className="mt-5 text-slate-500 leading-relaxed">
          Thank you for your interest in HOXXES Hardware.
          <br />
          Your request has been received successfully.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 p-8">

          <div className="flex justify-between py-3">
            <span className="text-slate-500">
              Status
            </span>

            <span className="font-semibold text-emerald-600">
              Request Received
            </span>
          </div>

          <div className="flex justify-between py-3">
            <span className="text-slate-500">
              Next Step
            </span>

            <span className="font-medium">
              Sales Team Review
            </span>
          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8 text-left">

          <h3 className="text-lg font-semibold text-blue-900">
            What happens next?
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-blue-900">

            <li>• Your request will be reviewed by our Sales Team.</li>

            <li>• We will verify product availability.</li>

            <li>• We will contact you to confirm payment details.</li>

            <li>• We will arrange delivery or collection according to your project requirements.</li>

          </ul>

        </div>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <Link
            href="/hardware"
            className="rounded-full border border-slate-300 px-8 py-4 hover:bg-slate-100 transition"
          >
            Continue Shopping
          </Link>

          <Link
            href="/contact-sales"
            className="rounded-full bg-black px-8 py-4 text-white hover:opacity-90 transition"
          >
            Contact Sales
          </Link>

        </div>

      </div>

    </div>
  );
}