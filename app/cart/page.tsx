"use client";

import Header from "@/components/Header";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CartItem,
  getCart,
  updateQuantity,
  removeFromCart,
} from "@/lib/cart";

export default function CartPage() {

  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {

    setItems(getCart());

  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const currency = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

  const hasMadeToOrder = items.some(
  (item) => item.availability === "made-to-order"
);

  if (items.length === 0) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">

      <Header />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-300px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />

        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-slate-300/20 blur-[150px]" />

      </div>

      <main className="relative z-10">

        <div className="max-w-4xl mx-auto pt-44 pb-24 px-6 text-center">

          <h1 className="text-5xl font-semibold">
            Your Cart is Empty
          </h1>

          <p className="mt-6 text-lg text-slate-500">
            You haven't added any hardware to your cart yet.
          </p>

          <Link
  href="/hardware"
  className="mt-10 inline-block rounded-full bg-[#88d21a] px-8 py-4 font-medium text-[#17210c] transition hover:scale-[1.02] hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
>
  Browse Hardware
</Link>

        </div>

      </main>

    </div>
  );
}

  return (

    <div className="relative z-10 max-w-7xl mx-auto pt-44 pb-24 px-4 sm:px-6">
      <Header />

      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">

        Shopping Cart

      </h1>

      <div className="mt-12 space-y-6">

        {items.map((item) => (
  <div
    key={item.slug}
    className="relative flex flex-col gap-5 rounded-3xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-8"
  >
    <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-6">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 shrink-0 rounded-xl sm:w-28"
      />

      <div className="min-w-0 flex-1">
        <div className="break-words pr-10 text-lg font-semibold sm:text-xl">
          {item.title}
        </div>

        {item.availability === "made-to-order" && (
          <div className="mt-2 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            Made to Order • {item.leadTime?.replace(/^Approx\.\s*/i, "") || "To be confirmed"}
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => {
              const qty = Math.max(1, item.quantity - 1);
              updateQuantity(item.slug, qty);
              setItems(getCart());
            }}
            aria-label="Decrease quantity"
            className="h-10 w-10 rounded-full border border-[#88d21a] text-[#26351a] transition hover:bg-[#f5fce9]"
          >
            −
          </button>

          <span className="w-8 text-center font-medium">
            {item.quantity}
          </span>

          <button
            onClick={() => {
              updateQuantity(item.slug, item.quantity + 1);
              setItems(getCart());
            }}
            aria-label="Increase quantity"
            className="h-10 w-10 rounded-full border border-[#88d21a] text-[#26351a] transition hover:bg-[#f5fce9]"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <div className="self-end text-lg font-semibold tracking-tight text-slate-900 sm:self-auto sm:text-xl">
      €{currency.format(item.price * item.quantity)}
    </div>

    <button
      onClick={() => {
        removeFromCart(item.slug);
        setItems(getCart());
      }}
      aria-label={`Remove ${item.title}`}
      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-600 sm:right-5 sm:top-5"
    >
      <Trash2 size={20} />
    </button>
  </div>
))}

      </div>

      <div className="mt-12 border-t pt-8 flex justify-between items-center">

  <div className="text-3xl font-bold">
    Total
  </div>

  <div className="text-3xl font-bold tracking-tight text-slate-900">
  €{currency.format(total)}
</div>

</div>

{hasMadeToOrder && (
  <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-800">
    <strong>Made to Order.</strong>

    <p className="mt-2">
      One or more items in your cart are supplied on demand and are not kept
      in local stock.
    </p>

    <div className="mt-3">
      <strong>Estimated delivery times:</strong>

      <ul className="mt-2 space-y-1">
        {items
          .filter((item) => item.availability === "made-to-order")
          .map((item) => (
            <li key={item.slug}>
              {item.title}:{" "}
              <strong>
  {item.leadTime?.replace(/^Approx\.\s*/i, "") || "To be confirmed"}
</strong>
            </li>
          ))}
      </ul>
    </div>
  </div>
)}

{items.length > 0 && (
  <div className="mt-10 flex flex-col sm:flex-row gap-4">
    <Link
  href="/hardware"
  className="flex-1 rounded-full border border-[#88d21a] px-10 py-5 text-center font-medium text-[#26351a] transition hover:bg-[#88d21a] hover:text-[#17210c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
>
  Continue Shopping
</Link>

    <Link
  href={`/checkout?product=${items[0].slug}&qty=${items[0].quantity}`}
  className="flex-1 rounded-full bg-[#88d21a] px-10 py-5 text-center font-medium text-[#17210c] transition hover:scale-[1.02] hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
>
  Secure Checkout
</Link>
  </div>
)}

    </div>

  );

}