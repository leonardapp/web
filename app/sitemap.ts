import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hoxxes.com",
      lastModified: new Date(),
    },
    {
      url: "https://hoxxes.com/software",
      lastModified: new Date(),
    },
    {
      url: "https://hoxxes.com/hardware",
      lastModified: new Date(),
    },
    {
      url: "https://hoxxes.com/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://hoxxes.com/request-demo",
      lastModified: new Date(),
    },
    {
      url: "https://hoxxes.com/contact-sales",
      lastModified: new Date(),
    },
    {
  url: "https://hoxxes.com/offers",
  lastModified: new Date(),
},
{
  url: "https://hoxxes.com/privacy-policy",
  lastModified: new Date(),
},
{
  url: "https://hoxxes.com/terms-and-conditions",
  lastModified: new Date(),
},
  ];
}