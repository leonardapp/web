import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductClient from "@/components/ProductClient";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Hardware Product Not Found", robots: { index: false, follow: false } };
  }

  const title = `${product.title} | HOXXES Hardware`;
  const description = `${product.subtitle}. ${product.description}`;
  const canonical = `/hardware/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}