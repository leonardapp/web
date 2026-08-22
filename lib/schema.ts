// lib/schema.ts

const siteUrl = "https://hoxxes.com";

export const hoxxesSchema = {
  "@context": "https://schema.org",
  "@graph": [

    // =========================================================
    // ORGANIZATION
    // =========================================================
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
        "HOXXES is a Restaurant & Retail Operating System that combines POS, QR Ordering, Online Ordering, Kitchen Display Systems, Self-Service Kiosks, Inventory Management, Analytics and business automation into one unified platform.",

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
        "Workforce Management",
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

    // =========================================================
    // BRAND
    // =========================================================
    {
      "@type": "Brand",
      "@id": `${siteUrl}/#brand`,
      name: "HOXXES",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
    },

    // =========================================================
    // WEBSITE
    // =========================================================
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "HOXXES",
      alternateName: "Hoxxes",
      description:
        "Restaurant & Retail Operating System with POS, QR Ordering, Self-Service Kiosks, Kitchen Display Systems, inventory management and analytics.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },

    // =========================================================
    // SOFTWARE APPLICATION
    // =========================================================
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "HOXXES",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Restaurant & Retail Operating System",
      applicationSuite: "HOXXES",

      operatingSystem: "Web, Android",

      url: siteUrl,

      description:
        "HOXXES is a Restaurant & Retail Operating System designed to manage POS, QR Ordering, Online Ordering, Kitchen Display Systems, Self-Service Kiosks, inventory, workforce, analytics and multi-location operations from one unified platform.",

      creator: {
        "@id": `${siteUrl}/#organization`,
      },

      publisher: {
        "@id": `${siteUrl}/#organization`,
      },

      brand: {
        "@id": `${siteUrl}/#brand`,
      },

      audience: {
        "@type": "BusinessAudience",
        audienceType: "Restaurants and Retail Businesses",
      },

      featureList: [
        "Restaurant POS",
        "Retail POS",
        "Android POS",
        "Offline POS",
        "QR Ordering",
        "Online Ordering",
        "Kitchen Display System",
        "Self-Service Kiosk",
        "Customer Display System",
        "Caller ID",
        "Inventory Management",
        "Workforce Management",
        "Analytics Dashboard",
        "HQ Control Center",
        "Multi-Location Management",
        "Business Automation",
      ],
    },

    // =========================================================
    // RESTAURANT SOFTWARE SERVICE
    // =========================================================
    {
      "@type": "Service",
      "@id": `${siteUrl}/#restaurant-software`,
      name: "Restaurant Management Software",

      provider: {
        "@id": `${siteUrl}/#organization`,
      },

      serviceType: [
        "Restaurant POS Software",
        "Restaurant POS System",
        "QR Ordering Software",
        "Online Ordering",
        "Kitchen Display System",
        "Self-Service Kiosk",
        "Digital Menu Software",
        "Restaurant Automation",
      ],

      description:
        "Restaurant technology platform combining POS, QR Ordering, Online Ordering, Kitchen Display Systems, Self-Service Kiosks, inventory management, analytics and operational tools.",

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

    // =========================================================
    // RETAIL SOFTWARE SERVICE
    // =========================================================
    {
      "@type": "Service",
      "@id": `${siteUrl}/#retail-software`,
      name: "Retail Management Software",

      provider: {
        "@id": `${siteUrl}/#organization`,
      },

      serviceType: [
        "Retail POS",
        "Retail Management Software",
        "Inventory Management",
        "Business Analytics",
        "Business Automation",
      ],

      description:
        "Retail operating system with POS, inventory management, analytics, ordering and centralized business operations.",

      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },

    // =========================================================
    // DEPLOYMENT SERVICES
    // =========================================================
    {
      "@type": "Service",
      "@id": `${siteUrl}/#deployment`,
      name: "HOXXES Deployment Services",

      provider: {
        "@id": `${siteUrl}/#organization`,
      },

      serviceType: [
        "Restaurant Software Deployment",
        "POS Installation",
        "Hardware Setup",
        "Technical Support",
      ],

      description:
        "HOXXES deployment services including software setup, hardware installation, integrations and operational support.",
    },

    // =========================================================
    // ANDROID POS
    // =========================================================
    {
      "@type": "Product",
      "@id": `${siteUrl}/#android-pos`,
      name: "HOXXES Android POS Terminal",

      brand: {
        "@id": `${siteUrl}/#brand`,
      },

      manufacturer: {
        "@id": `${siteUrl}/#organization`,
      },

      category: "Restaurant POS Hardware",

      description:
        "Enterprise Android POS terminal designed for restaurants and retail businesses and integrated with the HOXXES operating system.",

      url: `${siteUrl}/hardware`,

      isRelatedTo: {
        "@id": `${siteUrl}/#software`,
      },

      offers: {
        "@type": "Offer",
        url: `${siteUrl}/hardware`,
        price: "677",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    },

    // =========================================================
    // KIOSK
    // =========================================================
    {
      "@type": "Product",
      "@id": `${siteUrl}/#kiosk-slim`,
      name: 'HOXXES Kiosk Slim 32" Wall Mounted',

      brand: {
        "@id": `${siteUrl}/#brand`,
      },

      manufacturer: {
        "@id": `${siteUrl}/#organization`,
      },

      category: "Self-Service Kiosk Hardware",

      description:
        "32-inch wall-mounted self-service kiosk integrated with HOXXES POS, Kitchen Display System and restaurant ordering operations.",

      url: `${siteUrl}/hardware`,

      isRelatedTo: {
        "@id": `${siteUrl}/#software`,
      },

      offers: {
        "@type": "Offer",
        url: `${siteUrl}/hardware`,
        price: "1185",
        priceCurrency: "EUR",
        availability: "https://schema.org/PreOrder",
      },
    },

    // =========================================================
    // WEB PAGE / HOMEPAGE
    // =========================================================
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#homepage`,
      url: siteUrl,

      name: "HOXXES - Restaurant & Retail Operating System",

      description:
        "HOXXES is a Restaurant & Retail Operating System connecting POS, QR Ordering, Online Ordering, Kitchen Display Systems, Self-Service Kiosks, inventory, analytics and multi-location operations.",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${siteUrl}/#software`,
      },

      publisher: {
        "@id": `${siteUrl}/#organization`,
      },

      inLanguage: "en-US",
    },

    // =========================================================
    // FAQ
    // =========================================================
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
              "HOXXES is a Restaurant & Retail Operating System that combines POS, Self-Service Kiosks, Kitchen Display System (KDS), QR Ordering, Online Ordering, Analytics and AI into one unified platform.",
          },
        },

        {
          "@type": "Question",
          name: "Does HOXXES work offline?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The Android POS application continues working offline and automatically synchronizes data once the connection is restored.",
          },
        },

        {
          "@type": "Question",
          name: "Does HOXXES support multiple locations?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Restaurants and retail locations can be managed from one centralized HQ Control Center with real-time synchronization.",
          },
        },

        {
          "@type": "Question",
          name: "Does HOXXES support Kitchen Display System (KDS)?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. KDS is part of the HOXXES platform and can be activated based on operational requirements. Orders from POS, QR Ordering and Online Ordering can be routed directly to kitchen stations.",
          },
        },

        {
          "@type": "Question",
          name: "Does HOXXES support QR Ordering?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Customers can scan QR codes, browse digital menus, place orders and call waiters directly from their phones.",
          },
        },

        {
          "@type": "Question",
          name: "Does HOXXES support Self-Service Kiosks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Self-Service Kiosks are part of the HOXXES platform and can be activated when needed. They integrate with POS, kitchen operations and centralized management.",
          },
        },

        {
          "@type": "Question",
          name: "Does HOXXES support loyalty and membership?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. HOXXES supports loyalty programs, membership, digital wallets, vouchers and branded customer applications.",
          },
        },

        {
          "@type": "Question",
          name: "Can I use my own hardware?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. HOXXES supports compatible Android devices together with enterprise hardware including POS terminals, kiosks and kitchen displays.",
          },
        },

        {
          "@type": "Question",
          name: "Is HOXXES suitable for retail businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Besides restaurants, HOXXES supports retail businesses with POS, inventory management, online ordering and centralized operations.",
          },
        },

        {
          "@type": "Question",
          name: "Does HOXXES support fiscal printers?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. HOXXES integrates with supported fiscal printers and local fiscalization requirements where available.",
          },
        },

        {
          "@type": "Question",
          name: "Is card payment integration available?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Card payment terminal integration is currently in development and will be available in a future release.",
          },
        },

        {
          "@type": "Question",
          name: "Can I migrate from another POS system?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. The HOXXES team assists with menu import, configuration, staff onboarding and data migration whenever possible.",
          },
        },

        {
          "@type": "Question",
          name: "Does HOXXES support cloud management?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Every location is connected to a centralized cloud platform for real-time monitoring, reporting and management.",
          },
        },

        {
          "@type": "Question",
          name: "Can HOXXES be customized for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. HOXXES can be configured to match your workflows, branding, menus and operational requirements.",
          },
        },

        {
          "@type": "Question",
          name: "Which businesses use HOXXES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "HOXXES is designed for restaurants, cafés, bars, bakeries, fast-food chains, hotels and retail businesses.",
          },
        },
      ],
    },

    // =========================================================
    // BREADCRUMB
    // =========================================================
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
  ],
};

export default hoxxesSchema;