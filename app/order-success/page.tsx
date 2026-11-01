
"use client";

import Header from "@/components/Header";
import Link from "next/link";
import {
  Check,
  ClipboardCheck,
  PackageCheck,
  Headset,
  ArrowRight,
} from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <Header />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#88d21a]/10 blur-[160px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-slate-200/40 blur-[150px]" />
      </div>

      <main className="relative z-10 px-4 pb-24 pt-36 sm:px-6 sm:pt-40">
        <div className="mx-auto max-w-3xl">

          {/* Success Header */}
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#88d21a]/30 bg-[#88d21a]/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#88d21a]">
                <Check size={28} strokeWidth={3} className="text-[#17210c]" />
              </div>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#88d21a]/30 bg-[#88d21a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#456d10]">
              <span className="h-2 w-2 rounded-full bg-[#88d21a]" />
              Request Received
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
              Thank you for your order request.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Your HOXXES Hardware request has been submitted successfully.
              Our Sales Team will review your request and contact you
              regarding availability and the next steps.
            </p>
          </div>

          {/* Status Card */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#88d21a]/10 text-[#527e13]">
                  <ClipboardCheck size={24} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    Order request status
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your request is awaiting review.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-b border-slate-100 p-6 sm:border-b-0 sm:border-r sm:p-8">
                <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Current status
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="font-semibold text-slate-900">
                    Request Received
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Next step
                </p>
                <p className="mt-3 font-semibold text-slate-900">
                  Sales Team Review
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold">
              What happens next?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Here is what you can expect after submitting your request.
            </p>

            <div className="mt-8 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#88d21a]/10 text-[#527e13]">
                  <ClipboardCheck size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">
                    01. Request review
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Our Sales Team will review your submitted request.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#88d21a]/10 text-[#527e13]">
                  <PackageCheck size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">
                    02. Availability confirmation
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    We will verify product availability and expected
                    fulfillment times.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#88d21a]/10 text-[#527e13]">
                  <Headset size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">
                    03. Confirmation & coordination
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Our team will contact you to confirm payment details
                    and coordinate delivery or collection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-6 text-amber-900">
              <strong>Please note:</strong> This confirmation acknowledges
              receipt of your request. Product availability, final order
              details, payment and fulfillment will be confirmed by the
              HOXXES Sales Team.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/hardware"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#88d21a] px-8 py-4 font-medium text-[#26351a] transition hover:bg-[#88d21a] hover:text-[#17210c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Continue Shopping
            </Link>

            <Link
              href="/contact-sales"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#88d21a] px-8 py-4 font-semibold text-[#17210c] transition hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Contact Sales
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            Thank you for choosing HOXXES.
          </p>
        </div>
      </main>
    </div>
  );
}
