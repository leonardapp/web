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
  "HOXXES is a Restaurant & Retail Operating System that combines Restaurant POS, Retail POS, Self-Service Kiosks, Kitchen Display Systems (KDS), QR Ordering, Online Ordering, Inventory Management, Analytics and Business Automation into one unified platform.",

knowsAbout: [
  "Restaurant POS",
  "Retail POS",
  "Restaurant Management Software",
  "Retail Management Software",
  "QR Ordering",
  "Online Ordering",
  "Kitchen Display System",
  "Self-Service Kiosk",
  "Inventory Management",
  "Business Analytics",
  "Restaurant Automation",
],

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
  applicationSubCategory: "Restaurant & Retail Operating System",
  applicationSuite: "HOXXES",

  operatingSystem: "Web, Android",

  softwareVersion: "Current",

  url: siteUrl,

  description:
    "HOXXES is an all-in-one Restaurant & Retail Operating System designed to manage Restaurant POS, Retail POS, QR Ordering, Online Ordering, Kitchen Display System (KDS), inventory management, workforce management, analytics and business automation.",

  creator: {
    "@id": `${siteUrl}/#organization`,
  },

  audience: {
    "@type": "BusinessAudience",
    audienceType: "Restaurants and Retail Businesses",
  },

  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${siteUrl}/pricing`,
  },

  featureList: [
    "Restaurant POS",
    "Retail POS",
    "Android POS",
    "Offline POS",
    "QR Ordering",
    "Online Ordering",
    "Kitchen Display System (KDS)",
    "Self-Service Kiosk",
    "Inventory Management",
    "Workforce Management",
    "Analytics Dashboard",
    "HQ Control Center",
    "Business Automation",
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
    "Retail operating system with Retail POS, inventory management, analytics and business automation.",

  serviceType: [
    "Retail POS",
    "Inventory Management",
    "Retail Management Software",
    "Business Automation",
    "Business Analytics",
  ],

  keywords: [
    "Retail POS",
    "Retail Software",
    "Retail Management",
    "Inventory Management",
    "Business Analytics",
  ],

  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
},
    {
  "@type": "Product",
  "@id": `${siteUrl}/#android-pos`,
  "name": "HOXXES Android POS Terminal",

  "brand": {
    "@id": `${siteUrl}/#brand`
  },

  "manufacturer": {
    "@id": `${siteUrl}/#organization`
  },

  "category": "Restaurant POS Hardware",

  "description":
    "Enterprise Android POS terminal designed for restaurants and retail businesses, fully integrated with the HOXXES operating system.",

  "url": `${siteUrl}/hardware`,
  isRelatedTo: {
  "@id": `${siteUrl}/#software`,
},

  "offers": {
    "@type": "Offer",
    "url": `${siteUrl}/hardware`,
    "price": "677",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
},
{
  "@type": "Product",
  "@id": `${siteUrl}/#kiosk-slim`,

  "name": "HOXXES Kiosk Slim 32\" Wall Mounted",

  "brand": {
    "@id": `${siteUrl}/#brand`
  },

  "manufacturer": {
    "@id": `${siteUrl}/#organization`
  },

  "category": "Self-Service Kiosk Hardware",

  "description":
    "32-inch wall-mounted self-service kiosk integrated with Restaurant POS, Kitchen Display System (KDS) and the HOXXES restaurant ordering ecosystem.",

  "url": `${siteUrl}/hardware`,
  isRelatedTo: {
  "@id": `${siteUrl}/#software`,
},

  "offers": {
    "@type": "Offer",
    "url": `${siteUrl}/hardware`,
    "price": "1185",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/PreOrder"
  }
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
   "Technical Support",
   "Restaurant Management Software",
"Restaurant POS Software",
"Restaurant POS System",
"Program për Restorante",
"Software për Restorante",
"POS për Restorante",
"QR Ordering",
"Kitchen Display System",
"Restaurant Automation"
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
              "Complete Restaurant POS solution with order management, inventory management and operational control.",
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
