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
            className="mt-10 inline-block rounded-full bg-black px-8 py-4 text-white hover:scale-[1.02] transition"
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

        {items.map(item => (

          <div
  key={item.slug}
  className="relative border rounded-3xl p-8 flex justify-between items-center shadow-sm hover:shadow-md transition"
>

            <div className="flex gap-6 items-center">

              <img
                src={item.image}
                className="w-28 rounded-xl"
              />

              <div>

                <div className="font-semibold text-xl">

                  {item.title}

                </div>

                <div className="flex items-center gap-3 mt-4">

  <button
    onClick={() => {

      const qty = Math.max(1, item.quantity - 1);

      updateQuantity(item.slug, qty);

      setItems(getCart());

    }}
    className="w-8 h-8 rounded-full border hover:bg-slate-100"
  >
    -
  </button>

  <span className="w-8 text-center font-medium">

    {item.quantity}

  </span>

  <button
    onClick={() => {

      updateQuantity(item.slug, item.quantity + 1);

      setItems(getCart());

    }}
    className="w-8 h-8 rounded-full border hover:bg-slate-100"
  >
    +
  </button>

</div>

<button
  onClick={() => {
    removeFromCart(item.slug);
    setItems(getCart());
  }}
  className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-600"
  aria-label="Remove product"
>
  <Trash2 size={20} />
</button>

              </div>

            </div>

            <div className="text-xl font-semibold tracking-tight text-slate-900">
  €{(item.price * item.quantity).toLocaleString()}
</div>

          </div>

        ))}

      </div>

      <div className="mt-12 border-t pt-8 flex justify-between items-center">

        <div className="text-3xl font-bold">

          Total

        </div>

       <div className="text-3xl font-bold tracking-tight text-slate-900">
  €{total.toLocaleString()}
</div>

      </div>

      {items.length > 0 && (
  <Link
    href={`/checkout?product=${items[0].slug}&qty=${items[0].quantity}`}
    className="mt-10 w-full text-center inline-block bg-black text-white px-10 py-5 rounded-full hover:scale-[1.02] transition"
  >
    Secure Checkout
  </Link>
)}

    </div>

  );

}