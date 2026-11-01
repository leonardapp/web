
"use client";

import Header from "@/components/Header";
import { Trash2, ShoppingBag, ArrowRight, PackageCheck } from "lucide-react";
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
  const [ready, setReady] = useState(false);

  const currency = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const refreshCart = () => {
    setItems(getCart());
  };

  useEffect(() => {
    refreshCart();
    setReady(true);

    const sync = () => refreshCart();

    window.addEventListener("cart-updated", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("cart-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalUnits = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const hasMadeToOrder = items.some(
    (item) => item.availability === "made-to-order"
  );

  const handleQuantity = (slug: string, quantity: number) => {
    updateQuantity(slug, Math.max(1, quantity));
    refreshCart();
  };

  const handleRemove = (slug: string) => {
    removeFromCart(slug);
    refreshCart();
  };

  if (!ready) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="mx-auto max-w-7xl px-6 pt-44 pb-24">
          <div className="animate-pulse space-y-5">
            <div className="h-10 w-64 rounded-lg bg-slate-100" />
            <div className="h-32 rounded-3xl bg-slate-100" />
            <div className="h-32 rounded-3xl bg-slate-100" />
          </div>
        </main>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">
        <Header />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-300px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />
          <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[150px]" />
        </div>

        <main className="relative z-10">
          <div className="mx-auto max-w-4xl px-6 pb-24 pt-44 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#f5fce9]">
              <ShoppingBag size={42} strokeWidth={1.4} className="text-[#52820f]" />
            </div>

            <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-5xl">
              Your Cart is Empty
            </h1>

            <p className="mt-5 text-base text-slate-500 md:text-lg">
              You haven't added any hardware to your cart yet.
            </p>

            <Link
              href="/hardware"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#88d21a] px-8 py-4 font-semibold text-[#17210c] transition hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
            >
              Browse Hardware
              <ArrowRight size={18} />
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <Header />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-slate-300/20 blur-[150px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-40 sm:px-6 lg:pt-44">
        {/* PAGE HEADER */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6cab12]">
              HOXXES Hardware
            </div>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Shopping Cart
            </h1>

            <p className="mt-3 text-slate-500">
              Review your items before checkout.
            </p>
          </div>

          <div className="text-sm font-medium text-slate-500">
            {items.length} {items.length === 1 ? "product" : "products"} ·{" "}
            {totalUnits} {totalUnits === 1 ? "unit" : "units"}
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_370px]">
          {/* CART ITEMS */}
          <div className="space-y-4">
            {items.map((item) => {
              const isMadeToOrder =
                item.availability === "made-to-order";

              return (
                <div
                  key={item.slug}
                  className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-7"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* PRODUCT IMAGE */}
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 sm:h-32 sm:w-32">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    {/* PRODUCT DETAILS */}
                    <div className="min-w-0 flex-1 pr-7">
                      <h2 className="break-words text-base font-semibold leading-snug sm:text-xl">
                        {item.title}
                      </h2>

                      <div className="mt-2">
                        {isMadeToOrder ? (
                          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                            <PackageCheck size={14} className="mr-1.5" />
                            Made to Order
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                            <PackageCheck size={14} className="mr-1.5" />
                            In Stock
                          </span>
                        )}
                      </div>

                      {isMadeToOrder && (
                        <p className="mt-2 text-xs text-slate-500">
                          Estimated delivery:{" "}
                          {item.leadTime || "To be confirmed"}
                        </p>
                      )}

                      <p className="mt-3 text-sm font-medium text-slate-600">
                        €{currency.format(item.price)} / unit
                      </p>

                      {/* QUANTITY */}
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white">
                          <button
                            type="button"
                            onClick={() =>
                              handleQuantity(
                                item.slug,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity <= 1}
                            aria-label={`Decrease quantity of ${item.title}`}
                            className="flex h-10 w-10 items-center justify-center rounded-l-full text-lg transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            −
                          </button>

                          <span className="w-10 text-center text-sm font-semibold tabular-nums">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              handleQuantity(
                                item.slug,
                                item.quantity + 1
                              )
                            }
                            aria-label={`Increase quantity of ${item.title}`}
                            className="flex h-10 w-10 items-center justify-center rounded-r-full text-lg transition hover:bg-[#f5fce9]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemove(item.slug)}
                          className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={15} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* LINE TOTAL */}
                    <div className="absolute right-5 top-5 text-right sm:static sm:shrink-0">
                      <p className="text-sm font-semibold tabular-nums text-slate-900 sm:text-lg">
                        €{currency.format(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CONTINUE SHOPPING */}
            <div className="pt-3">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#52820f]"
              >
                <span>←</span>
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Products</span>
                  <span>{items.length}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Total units</span>
                  <span>{totalUnits}</span>
                </div>

                <div className="border-t border-slate-100" />

                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-slate-700">
                    Subtotal
                  </span>
                  <span className="text-xl font-semibold tabular-nums tracking-tight">
                    €{currency.format(total)}
                  </span>
                </div>

                <p className="text-xs leading-5 text-slate-400">
                  VAT, delivery and any additional charges will be confirmed
                  during checkout.
                </p>
              </div>

              {hasMadeToOrder && (
                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <div className="flex items-start gap-2">
                    <PackageCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />
                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        Includes Made to Order items
                      </p>
                      <p className="mt-1 text-xs leading-5 text-blue-800">
                        One or more products are supplied on demand.
                        Delivery estimates are listed per product.
                      </p>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-2">
                    {items
                      .filter(
                        (item) => item.availability === "made-to-order"
                      )
                      .map((item) => (
                        <li
                          key={item.slug}
                          className="text-xs leading-5 text-blue-800"
                        >
                          <span className="font-medium">{item.title}:</span>{" "}
                          {item.leadTime || "To be confirmed"}
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {/* CHECKOUT */}
              <Link
                href="/checkout?cart=1"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#88d21a] px-6 py-4 text-center font-semibold text-[#17210c] transition hover:bg-[#76b915] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88d21a] focus-visible:ring-offset-2"
              >
                Secure Checkout
                <ArrowRight size={18} />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShoppingBag size={14} />
                Your order will be reviewed before confirmation.
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
