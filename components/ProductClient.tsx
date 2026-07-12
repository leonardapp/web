"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { addToCart } from "@/lib/cart";
import { Product } from "@/lib/products";

interface Props {
  product: Product;
}

export default function ProductClient({ product }: Props) {
  const [qty, setQty] = useState(1);

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

        <div className="max-w-7xl mx-auto px-6 pt-44 pb-24">

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* IMAGE */}

            <div>

              <div className="rounded-[32px] border border-slate-200 bg-white shadow-sm p-6">

                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto w-full max-w-md transition duration-500 hover:scale-105"
                />

              </div>

            </div>

            {/* CONTENT */}

            <div>

              <div className="text-sm uppercase tracking-[0.3em] text-emerald-600">
                HOXXES Hardware
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight">

                {product.title}

              </h1>

              <p className="mt-3 text-xl text-slate-500">

                {product.subtitle}

              </p>

              <p className="mt-8 max-w-xl text-base md:text-lg leading-8 text-slate-500">

                {product.description}

              </p>

              {/* PRICE */}

              <div className="mt-10 flex items-end gap-3">

                <span className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
  €{product.price.toLocaleString()}
</span>

              </div>

              {/* STOCK */}

              <div className="mt-6 inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">

                ✓ {product.stock} Units Available

              </div>

              {/* QUANTITY */}

              <div className="mt-12">

                <div className="mb-4 font-medium">

                  Quantity

                </div>

                <div className="inline-flex items-center rounded-full border border-slate-200 bg-white shadow-sm">

                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="h-12 w-12 rounded-l-full text-xl hover:bg-slate-100 transition"
                  >
                    −
                  </button>

                  <span className="w-16 text-center text-lg font-semibold">

                    {qty}

                  </span>

                  <button
                    onClick={() =>
                      setQty(Math.min(product.stock, qty + 1))
                    }
                    className="h-12 w-12 rounded-r-full text-xl hover:bg-slate-100 transition"
                  >
                    +
                  </button>

                </div>

              </div>

              {/* TOTAL */}

             <div className="mt-12 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">

  <div className="flex items-center justify-between">

    <div>

      <p className="text-sm font-medium text-slate-500">
        Total
      </p>

      <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
        €{(qty * product.price).toLocaleString()}
      </h2>

    </div>

   

  </div>


              </div>

              {/* BUTTONS */}

              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <button
                  onClick={() => {

                    addToCart({
                      slug: product.slug,
                      title: product.title,
                      price: product.price,
                      quantity: qty,
                      image: product.image,
                    });

                    window.location.href = "/cart";

                  }}
                  className="flex-1 rounded-full bg-black px-8 py-4 text-white font-medium transition hover:scale-[1.02] hover:bg-slate-900"
                >

                  Add to Cart

                </button>

                <Link
                  href="/contact-sales"
                  className="flex-1 rounded-full border border-slate-300 px-8 py-4 text-center font-medium transition hover:bg-slate-100"
                >

                  Request Quote

                </Link>

              </div>

              {/* INFO */}

              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">

                <div className="grid gap-4 text-sm text-slate-600">

                  <div className="flex justify-between">

                    <span>Availability</span>

                    <span className="font-medium text-slate-900">
                      In Stock
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span>VAT</span>

                    <span className="font-medium text-slate-900">
                      {product.vat}%
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span>Support</span>

                    <span className="font-medium text-slate-900">
                      Included
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span>Warranty</span>

                    <span className="font-medium text-slate-900">
                      Manufacturer Warranty
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}