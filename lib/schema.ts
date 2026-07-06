// lib/schema.ts

const siteUrl = "https://hoxxes.com";

export const hoxxesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "HOXXES",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      description:
        "HOXXES is a restaurant and retail operating system combining POS, QR Ordering, Self-Service Kiosks, Kitchen Display Systems, Digital Menus, Hardware and Business Automation.",
      email: "info@hoxxes.com",
      telephone: "+38348106060",
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
          availableLanguage: ["English", "Albanian"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+38348106060",
          contactType: "customer support",
          email: "info@hoxxes.com",
          availableLanguage: ["English", "Albanian"],
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "HOXXES",
      description:
        "Restaurant & Retail Operating System with POS, Self-Service Kiosks, Kitchen Display Systems and Business Automation.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "HOXXES",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android, iOS",
      url: siteUrl,
      description:
        "All-in-one restaurant operating system designed to manage orders, payments, kitchen operations, self-service kiosks and business automation.",
      creator: {
        "@id": `${siteUrl}/#organization`,
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/pricing`,
      },
      featureList: [
  "Restaurant POS",
  "Android POS",
  "QR Ordering",
  "Online Ordering",
  "Kitchen Display System",
  "Self-Service Kiosk Software",
  "Inventory Management",
  "Workforce Management",
  "Analytics Dashboard",
  "HQ Control Center",
  "Offline Mode",
],
    },

    {
      "@type": "Brand",
      "@id": `${siteUrl}/#brand`,
      name: "HOXXES",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
    },

    {
      "@type": "Service",
      "@id": `${siteUrl}/#restaurant-software`,
      name: "Restaurant Management Software",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Complete restaurant technology solution including POS, QR ordering, kitchen display systems, kiosks and automation tools.",
      serviceType: [
        "Restaurant POS Software",
        "QR Ordering Software",
        "Kitchen Display System",
        "Self Ordering Kiosk",
        "Digital Menu Software",
      ],
      areaServed: [
  {
    "@type": "Country",
    name: "Kosovo",
  },
  {
    "@type": "Place",
    name: "Europe",
  },
  {
    "@type": "Place",
    name: "Worldwide",
  },
],
    },

    {
      "@type": "Service",
      "@id": `${siteUrl}/#retail-software`,
      name: "Retail Management Software",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Retail operating system with point of sale, inventory control and business automation.",
      serviceType: [
        "Retail POS",
        "Inventory Management",
        "Business Automation",
      ],
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    {
  "@type": "Product",
  "@id": `${siteUrl}/#android-pos`,
  name: "HOXXES Android POS Terminal",
  brand: {
    "@id": `${siteUrl}/#brand`
  },
  category: "Restaurant POS Hardware",
  description:
    "Android POS hardware designed for restaurants and retail businesses, fully integrated with the HOXXES operating system.",
  manufacturer: {
    "@id": `${siteUrl}/#organization`
  },
  url: `${siteUrl}/hardware`
},
{
 "@type": "Service",
 "@id": `${siteUrl}/#deployment`,
 name: "HOXXES Deployment Services",
 provider: {
   "@id": `${siteUrl}/#organization`
 },
 description:
   "Complete restaurant technology deployment including software setup, Android hardware installation, integrations and operational support.",
 serviceType: [
   "Restaurant Software Deployment",
   "POS Installation",
   "Hardware Setup",
   "Technical Support"
 ]
},
        {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/#offers`,
      name: "HOXXES Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Restaurant POS System",
            description:
              "Complete point of sale solution for restaurants with order management, payments and operational control.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "QR Ordering System",
            description:
              "Digital QR ordering solution allowing customers to browse menus and place orders directly from their devices.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Display System",
            description:
              "Kitchen workflow management system that organizes orders and improves restaurant efficiency.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Self-Service Kiosk",
            description:
              "Self-ordering kiosk solution designed to reduce waiting time and increase customer experience.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Restaurant Automation",
            description:
              "Business automation tools helping restaurants optimize operations and increase productivity.",
          },
        },
      ],
    },

    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#homepage`,
      url: siteUrl,
      name: "HOXXES - Restaurant & Retail Operating System",
      description:
        "HOXXES provides restaurant and retail technology solutions including POS, QR Ordering, Kitchen Display Systems, Self-Service Kiosks and Business Automation.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#software`,
      },
      inLanguage: "en-US",
    },

    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is HOXXES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "HOXXES is an all-in-one restaurant and retail operating system that combines POS, QR Ordering, Kitchen Display Systems, Self-Service Kiosks and business automation.",
          },
        },
        {
          "@type": "Question",
          name: "Does HOXXES support restaurant ordering?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. HOXXES supports QR ordering, waiter ordering, digital menus and automated order management.",
          },
        },
        {
          "@type": "Question",
          name: "What businesses can use HOXXES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "HOXXES is designed for restaurants, cafes, bars, fast food businesses, retail stores and hospitality companies.",
          },
        },
        {
          "@type": "Question",
          name: "Does HOXXES include a Kitchen Display System?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. HOXXES provides Kitchen Display System capabilities to help kitchens manage incoming orders efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "Can HOXXES work with hardware devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. HOXXES supports restaurant hardware solutions including POS terminals, kiosks and kitchen displays.",
          },
        },
      ],
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },

    {
      "@type": "Corporation",
      "@id": `${siteUrl}/#company`,
      name: "HOXXES",
      url: siteUrl,
      brand: {
        "@id": `${siteUrl}/#brand`,
      },
    },

    {
      "@type": "HowTo",
      "@id": `${siteUrl}/#how-it-works`,
      name: "How HOXXES Works",
      description:
        "How restaurants use HOXXES to automate ordering, kitchen operations and customer experience.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Choose your solution",
          text:
            "Select the HOXXES tools that match your restaurant or retail business needs.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Connect your operations",
          text:
            "Connect POS, ordering channels, kitchen displays and hardware devices.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Automate your business",
          text:
            "Manage orders, improve efficiency and grow your business with HOXXES.",
        },
      ],
    },

    {
      "@type": "Thing",
      "@id": `${siteUrl}/#keywords`,
      name: [
        "Restaurant POS",
        "Restaurant Management Software",
        "QR Ordering Software",
        "Kitchen Display System",
        "Self Ordering Kiosk",
        "Digital Menu",
        "Restaurant Automation",
        "Retail POS Software",
        "Hospitality Technology",
      ],
    },
  ],
};

export default hoxxesSchema;
