"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { products } from "@/lib/products";
import { getCart, clearCart } from "@/lib/cart";
import type { CartItem } from "@/lib/cart";

interface Props {
  productSlug: string;
  quantity: number;
  cartMode?: boolean;
}

type CheckoutItem = {
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  vat: number;
  availability: "in-stock" | "made-to-order";
  leadTime?: string;
};

const currency = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Keep catalog-specific availability values out of comparisons against CartItem's narrower type.
function isMadeToOrder(product: (typeof products)[number]): boolean {
  const availability = String(product.availability);
  return (
    availability === "made-to-order" ||
    availability === "sold-out" ||
    Number(product.stock ?? 0) <= 0
  );
}

function makeCheckoutItem(
  product: (typeof products)[number],
  itemQuantity: number,
): CheckoutItem {
  return {
    slug: product.slug,
    title: product.title,
    price: Number(product.price),
    quantity: itemQuantity,
    image: product.image,
    vat: Number(product.vat),
    availability: isMadeToOrder(product) ? "made-to-order" : "in-stock",
    leadTime: product.leadTime || undefined,
  };
}

export default function CheckoutContent({
  productSlug,
  quantity,
  cartMode = false,
}: Props) {
  const [items, setItems] = useState<CheckoutItem[]>([]);
  const [ready, setReady] = useState(false);
  const [payment, setPayment] = useState<"cod" | "bank">("cod");

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

  useEffect(() => {
    if (cartMode) {
      const cart: CartItem[] = getCart();
      const validItems: CheckoutItem[] = [];

      for (const cartItem of cart) {
        if (
          !Number.isSafeInteger(cartItem.quantity) ||
          cartItem.quantity < 1
        ) {
          continue;
        }

        const product = products.find((p) => p.slug === cartItem.slug);
        if (!product) continue;

        validItems.push(makeCheckoutItem(product, cartItem.quantity));
      }

      setItems(validItems);
    } else {
      const product = products.find((p) => p.slug === productSlug);
      if (!product) {
        setItems([]);
        setReady(true);
        return;
      }

      const safeQuantity =
        Number.isSafeInteger(quantity) && quantity > 0 ? quantity : 1;
      setItems([makeCheckoutItem(product, safeQuantity)]);
    }

    setReady(true);
  }, [cartMode, productSlug, quantity]);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const vatAmount = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + item.price * item.quantity * (item.vat / 100),
        0,
      ),
    [items],
  );

  const total = subtotal + vatAmount;
  const hasMadeToOrder = items.some(
    (item) => item.availability === "made-to-order",
  );

  async function submitOrder() {
    if (loading) return;
    setError("");

    if (!fullName.trim() || !company.trim() || !email.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (items.length === 0) {
      setError("Your order contains no valid products.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/hardware-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          company: company.trim(),
          email: email.trim(),
          phone: phone.trim(),
          city: city.trim(),
          address: address.trim(),
          businessNumber: businessNumber.trim(),
          vatNumber: vatNumber.trim(),
          notes: notes.trim(),
          // Server calculates final prices and VAT from its own catalog.
          items: items.map((item) => ({
            slug: item.slug,
            quantity: item.quantity,
          })),
          paymentMethod: payment === "bank" ? "Bank Transfer" : "Pay on Collection",
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to submit request.");
      }

      clearCart();
      window.location.href = "/order-success";
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!ready) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="mx-auto max-w-7xl px-6 pt-40 text-center">
          Loading checkout...
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Header />
        <main className="mx-auto max-w-3xl px-6 py-40 text-center">
          <h1 className="text-3xl font-semibold">Your order is empty</h1>
          <p className="mt-4 text-slate-500">
            Please add a product before proceeding to checkout.
          </p>
          <Link
            href="/hardware"
            className="mt-8 inline-flex rounded-full bg-[#88d21a] px-8 py-4 font-medium text-[#17210c] hover:bg-[#76b915]"
          >
            Explore Hardware
          </Link>
        </main>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-[#88d21a]";

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <Header />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[150px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-slate-300/20 blur-[150px]" />
      </div>

      <main className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-28 lg:grid-cols-3">
          <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-10 lg:col-span-2">
            <h1 className="text-3xl font-semibold sm:text-4xl">
              Complete Your Hardware Order
            </h1>
            <p className="mt-3 text-slate-500">
              Complete the information below to submit your hardware order. A
              member of the HOXXES Sales Team will contact you to confirm
              availability and the next steps.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <input required autoComplete="name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name *" className={inputClass} />
              <input required autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company *" className={inputClass} />
              <input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" className={inputClass} />
              <input autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className={inputClass} />
              <input autoComplete="address-level2" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className={inputClass} />
              <input autoComplete="street-address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className={`${inputClass} md:col-span-2`} />
              <input value={businessNumber} onChange={(e) => setBusinessNumber(e.target.value)} placeholder="Business Registration Number (Optional)" className={inputClass} />
              <input value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} placeholder="VAT Number (Optional)" className={inputClass} />
              <textarea rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Additional Notes (Optional)" className={`${inputClass} resize-none md:col-span-2`} />
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold">Payment Method</h2>
              <div className="mt-6 space-y-4">
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border p-5">
                  <input type="radio" name="payment" className="mt-1 accent-[#88d21a]" checked={payment === "cod"} onChange={() => setPayment("cod")} />
                  <div>
                    <div className="font-medium">Pay on Collection</div>
                    <p className="mt-1 text-sm text-slate-500">
                      Payment will be completed after your order has been
                      confirmed by the HOXXES Sales Team.
                    </p>
                  </div>
                </label>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border p-5">
                  <input type="radio" name="payment" className="mt-1 accent-[#88d21a]" checked={payment === "bank"} onChange={() => setPayment("bank")} />
                  <div>
                    <div className="font-medium">Bank Transfer</div>
                    <p className="mt-1 text-sm text-slate-500">
                      Bank transfer instructions will be provided after your
                      order has been reviewed.
                    </p>
                  </div>
                </label>
              </div>

              {payment === "bank" && (
                <div className="mt-6 rounded-2xl border bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold">Bank Transfer Details</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Please verify the payment details with HOXXES before making a transfer.
                  </p>
                  <div className="mt-5 divide-y">
                    <div className="flex justify-between gap-4 py-3"><span className="text-slate-500">Company</span><span className="text-right font-medium">HOXXES L.L.C.</span></div>
                    <div className="flex justify-between gap-4 py-3"><span className="text-slate-500">Bank</span><span className="text-right font-medium">ProCredit Bank Kosovo</span></div>
                    <div className="flex justify-between gap-4 py-3"><span className="text-slate-500">Account Number</span><span className="text-right font-medium">1110 3560 3702 0153</span></div>
                  </div>
                  <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                    Please wait for your order confirmation and payment reference before transferring.
                  </p>
                  <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-900">
                    <h3 className="font-semibold">Next Steps</h3>
                    <ol className="mt-3 list-inside list-decimal space-y-2">
                      <li>Wait for your order confirmation.</li>
                      <li>Follow the payment instructions provided.</li>
                      <li>Send payment confirmation to info@hoxxes.com.</li>
                      <li>Your order will be processed after payment verification.</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </section>

          <aside>
            <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold">Order Summary</h2>
              <div className="mt-6 space-y-5">
                {items.map((item) => (
                  <div key={item.slug} className="border-b pb-5">
                    <div className="flex justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-medium">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-500">Qty: {item.quantity}</p>
                        {item.availability === "made-to-order" && (
                          <div className="mt-2">
                            <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">Made to Order</span>
                            {item.leadTime && <p className="mt-1 text-xs text-slate-500">Estimated lead time: {item.leadTime}</p>}
                          </div>
                        )}
                        {item.availability === "in-stock" && (
                          <div className="mt-2"><span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-800">In Stock</span></div>
                        )}
                      </div>
                      <span className="shrink-0 font-medium">€{currency.format(item.price * item.quantity)}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">€{currency.format(item.price)} / unit</p>
                    <p className="mt-1 text-xs text-slate-400">VAT: {item.vat}%</p>
                  </div>
                ))}
              </div>

              {hasMadeToOrder && (
                <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  Your order contains made-to-order products. Availability and delivery estimates will be confirmed by the HOXXES Sales Team.
                </div>
              )}

              <div className="mt-6 space-y-3">
                <div className="flex justify-between gap-4"><span className="text-slate-500">Subtotal</span><span>€{currency.format(subtotal)}</span></div>
                <div className="flex justify-between gap-4"><span className="text-slate-500">VAT (calculated per product)</span><span>€{currency.format(vatAmount)}</span></div>
                <p className="text-xs text-slate-400">Shipping, if applicable, will be confirmed separately.</p>
                <hr />
                <div className="flex justify-between gap-4 text-xl font-bold"><span>Total</span><span>€{currency.format(total)}</span></div>
              </div>

              {error && <div role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>}

              <button type="button" onClick={submitOrder} disabled={loading || items.length === 0} className="mt-8 w-full rounded-full bg-[#88d21a] py-4 font-medium text-[#17210c] transition hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">
                {loading ? "Submitting..." : "Submit Hardware Request"}
              </button>
              <p className="mt-5 text-center text-sm leading-relaxed text-slate-500">
                By submitting this order, you acknowledge that availability, payment details and fulfillment will be confirmed by the HOXXES Sales Team.
              </p>
              <Link href="/hardware" className="mt-6 block text-center text-slate-600 transition hover:text-[#52820f] hover:underline">Continue Shopping</Link>
              <Link href="/cart" className="mt-3 block text-center text-sm text-slate-500 hover:underline">Return to Cart</Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
