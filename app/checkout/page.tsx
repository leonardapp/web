"use client";
import Header from "@/components/Header";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { clearCart } from "@/lib/cart";

export default function CheckoutPage() {
  const params = useSearchParams();

  const slug = params.get("product") || "";
  const qty = Number(params.get("qty") || 1);

 const product = products.find((p) => p.slug === slug);

if (!product) return null;

const subtotal = product.price * qty;

const vatAmount = subtotal * (product.vat / 100);

const total = subtotal + vatAmount;

  const [payment, setPayment] = useState("cod");
  const [fullName, setFullName] = useState("");
const [company, setCompany] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [city, setCity] = useState("");
const [address, setAddress] = useState("");
const [businessNumber, setBusinessNumber] = useState("");
const [vatNumber, setVatNumber] = useState("");
const [notes, setNotes] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

  const submitOrder = async () => {
  setLoading(true);
  setError("");

  if (!fullName || !company || !email) {
    setError("Please complete all required fields.");
    setLoading(false);
    return;
  }

  try {
    const response = await fetch("/api/hardware-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        company,
        email,
        phone,
        city,
        address,
        businessNumber,
        vatNumber,
        notes,

        product: product.title,
        quantity: qty,

        subtotal: subtotal.toFixed(2),
        vat: vatAmount.toFixed(2),
        total: total.toFixed(2),

        paymentMethod:
          payment === "bank"
            ? "Bank Transfer"
            : "Pay on Collection",
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Unable to submit request.");
    }

    clearCart();

window.location.href = "/order-success";

  } catch (err: any) {
    setError(err.message || "Something went wrong.");
  } finally {
    setLoading(false);
  }
};

 return (
  <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">

    <Header />

    {/* Background */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div className="absolute left-1/2 top-[-300px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />

      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[150px]" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-slate-300/20 blur-[150px]" />

    </div>
    
<main className="relative z-10">

      <div className="max-w-7xl mx-auto pt-28 pb-24 px-6 grid lg:grid-cols-3 gap-10">

        {/* LEFT */}

        <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-sm">

          <h1 className="text-4xl font-semibold">
  Complete Your Hardware Order
</h1>

<p className="mt-3 text-slate-500">
  Complete the information below to submit your hardware order. A member of the HOXXES Sales Team will contact you to confirm availability and the next steps.
</p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <input
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  placeholder="Full Name"
  className="border rounded-xl p-4"
/>

            <input
  value={company}
  onChange={(e) => setCompany(e.target.value)}
  placeholder="Company"
  className="border rounded-xl p-4"
/>

            <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
  className="border rounded-xl p-4"
/>

            <input
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="Phone"
  className="border rounded-xl p-4"
/>

            <input
  value={city}
  onChange={(e) => setCity(e.target.value)}
  placeholder="City"
  className="border rounded-xl p-4"
/>

            <input
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  placeholder="Address"
  className="border rounded-xl p-4 md:col-span-2"
/>

<input
  value={businessNumber}
  onChange={(e) => setBusinessNumber(e.target.value)}
  placeholder="Business Registration Number (Optional)"
  className="border rounded-xl p-4"
/>

  <input
  value={vatNumber}
  onChange={(e) => setVatNumber(e.target.value)}
  placeholder="VAT Number (Optional)"
  className="border rounded-xl p-4"
/>

<textarea
  rows={4}
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  placeholder="Additional Notes (Optional)"
  className="border rounded-xl p-4 md:col-span-2 resize-none"
/>

          </div>

          <div className="mt-12">

            <h2 className="text-2xl font-semibold">
              Payment Method
            </h2>

            <div className="mt-6 space-y-4">

              <label className="flex items-center gap-3 border rounded-xl p-5 cursor-pointer">

                <input
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />

                <div>

                  <div className="font-medium">

                    Pay on Collection

                  </div>

                  <div className="text-sm text-slate-500">
  Payment will be completed after your order has been confirmed by the HOXXES Sales Team.
</div>

                </div>

              </label>

              <label className="flex items-center gap-3 border rounded-xl p-5 cursor-pointer">

                <input
                  type="radio"
                  checked={payment === "bank"}
                  onChange={() => setPayment("bank")}
                />

                <div>

                  <div className="font-medium">

                    Bank Transfer

                  </div>

                  <div className="text-sm text-slate-500">
  Bank transfer instructions will be provided after your order has been reviewed.
</div>

                </div>

              </label>

            </div>

            {payment === "bank" && (
  <>
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold">
        Bank Transfer Details
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Please complete the payment using the bank account below.
        Your order will be processed after payment confirmation.
      </p>

      <div className="mt-6 divide-y divide-slate-200">

        <div className="flex justify-between py-3">
          <span className="text-slate-500">Company</span>
          <span className="font-medium">HOXXES SH.P.K.</span>
        </div>

        <div className="flex justify-between py-3">
          <span className="text-slate-500">Bank</span>
          <span className="font-medium">ProCredit Bank Kosovo</span>
        </div>

        <div className="flex justify-between py-3">
          <span className="text-slate-500">Account Number</span>
          <span className="font-medium">
            1110 3560 3702 0153
          </span>
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 p-4">
        <p className="text-sm text-amber-800">
          <strong>Payment Reference:</strong> Please include your order number in the payment description. Your order will be processed after the payment has been verified.
        </p>
      </div>
    </div>

    <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">

      <h3 className="text-lg font-semibold text-blue-900">
        Next Steps
      </h3>

      <ol className="mt-4 space-y-3 text-sm text-blue-900 list-decimal list-inside">

        <li>
          Complete the bank transfer using the account details above.
        </li>

        <li>
          Include your Order Number as the payment reference.
        </li>

        <li>
          Send the payment confirmation to
          <span className="font-semibold"> info@hoxxes.com</span>.
        </li>

        <li>
          Your order will be processed after payment verification.
        </li>

      </ol>

    </div>
  </>
)}

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-20">

            <h2 className="text-2xl font-semibold">

              Order Summary

            </h2>

            <div className="mt-8">

              <div className="flex justify-between">

                <span>

                  {product.title}

                </span>

                <span>

                  €{product.price.toLocaleString()}

                </span>

              </div>

              <div className="flex justify-between mt-3">

                <span>

                  Quantity

                </span>

                <span>

                  {qty}

                </span>

              </div>

              <hr className="my-6"/>

              <div className="flex justify-between">

                <span>

                  Subtotal

                </span>

                <span>

                  €{subtotal.toLocaleString()}

                </span>

              </div>
<div className="flex justify-between mt-3">
    <span>VAT ({product.vat}%)</span>

    <span>
        €{vatAmount.toFixed(2)}
    </span>
</div>
            

              <hr className="my-6"/>

              <div className="flex justify-between text-2xl font-bold">

                <span>

                  Total

                </span>

                <span>

                  €{total.toFixed(2)}

                </span>

              </div>

            </div>
            
{error && (
  <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
    {error}
  </div>
)}
           <button
  onClick={submitOrder}
  disabled={loading}
  className="mt-8 w-full rounded-full bg-black py-4 text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Submitting..." : "Submit Hardware Request"}
</button>

<p className="mt-6 text-center text-sm leading-relaxed text-slate-500">
  By submitting this order, you acknowledge that product availability,
  payment details and fulfillment will be confirmed by the HOXXES Sales
  Team before your order is processed.
</p>

<Link
  href="/hardware"
  className="block mt-6 text-center text-slate-500 hover:text-black transition"
>
  Continue Shopping
</Link>

          </div>

        </div>

      </div>
      </main>

    </div>
  );
}