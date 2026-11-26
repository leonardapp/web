
const siteUrl = "https://hoxxes.com";

/**
 * HOXXES - Global SEO, GEO and AI structured data
 */
export const hoxxesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "HOXXES",
      url: siteUrl,
      description:
        "HOXXES provides a connected restaurant and retail operating platform with POS, ordering, kitchen operations, self-service kiosks and business management tools.",
      email: "info@hoxxes.com",
      telephone: "+38348106060",
      areaServed: [
        { "@type": "Country", name: "Kosovo" },
        { "@type": "Country", name: "Albania" },
        { "@type": "Country", name: "North Macedonia" },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61569182421739",
        "https://www.instagram.com/hoxxes_innovation/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+38348106060",
          contactType: "sales",
          email: "info@hoxxes.com",
          availableLanguage: ["Albanian", "Turkish", "Serbian"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+38348106060",
          contactType: "customer support",
          email: "info@hoxxes.com",
          availableLanguage: ["Albanian", "Turkish", "Serbian"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "HOXXES",
      alternateName: "HOXXES Restaurant & Retail Operating System",
      inLanguage: ["sq", "tr", "sr"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "HOXXES Restaurant & Retail Operating System",
      applicationCategory: "BusinessApplication",
      operatingSystem: ["Web", "Android"],
      url: siteUrl,
      description:
        "A connected platform for restaurant and retail operations, including point of sale, QR ordering, online ordering, kitchen display systems, self-service kiosks and business management.",
      creator: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      featureList: [
        "Restaurant and retail point of sale",
        "QR ordering",
        "Online ordering",
        "Kitchen Display System (KDS)",
        "Self-service kiosks",
        "Inventory management",
        "Business analytics",
        "Multi-location management",
      ],
    },
  ],
};

export default hoxxesSchema;
