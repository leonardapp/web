import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api",
        "/dashboard",
        "/cart",
        "/checkout",
        "/order-success",
        "/ticket",
        "/apk",
      ],
    },
    sitemap: "https://hoxxes.com/sitemap.xml",
    host: "https://hoxxes.com",
  };
}
