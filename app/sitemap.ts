import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hoxxes.com";

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/software`,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
  url: `${baseUrl}/learn-more`,
  changeFrequency: "weekly",
  priority: 0.9,
},

{
  url: `${baseUrl}/about-us`,
  changeFrequency: "monthly",
  priority: 0.7,
},

    {
      url: `${baseUrl}/hardware`,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/pricing`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/request-demo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact-sales`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/offers`,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/terms-and-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}