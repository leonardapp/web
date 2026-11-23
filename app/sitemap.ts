import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const siteUrl = "https://hoxxes.com";
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/software`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${siteUrl}/hardware`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/about-us`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/request-demo`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact-sales`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/offers`, lastModified, changeFrequency: "weekly", priority: 0.65 },
    { url: `${siteUrl}/support`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/download`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteUrl}/legal/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/legal/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/legal/cookie-policy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/hardware/${product.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
