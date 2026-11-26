
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const privateRoutes = [
    "/api/",
    "/dashboard/",
    "/cart/",
    "/checkout/",
    "/order-success/",
    "/ticket/",
    "/apk/",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privateRoutes,
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
        ],
        allow: "/",
        disallow: privateRoutes,
      },
    ],
    sitemap: "https://hoxxes.com/sitemap.xml",
    host: "https://hoxxes.com",
  };
}
