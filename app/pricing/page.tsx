import { headers } from "next/headers";
import type { Metadata } from "next";
import PricingKosovo from "./PricingKosovo";
import InternationalPricing from "./InternationalPricing";

export const metadata: Metadata = {
  title: "HOXXES Pricing | Restaurant & Retail Software",
  description:
    "Explore HOXXES pricing for its restaurant and retail operating platform. Regional pricing is shown where available; contact the sales team for other markets.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "HOXXES Pricing | Restaurant & Retail Software",
    description:
      "Explore HOXXES pricing for its restaurant and retail operating platform. Contact the sales team for pricing in other markets.",
    url: "/pricing",
    type: "website",
  },
};

// Vercel provides the visitor's country as an ISO country code.
export const dynamic = "force-dynamic";

// Markets where the current published regional pricing is available:
// Kosovo (XK), Albania (AL), and North Macedonia (MK).
const PRICING_MARKETS = new Set(["XK", "AL", "MK"]);

export default async function PricingPage() {
  const requestHeaders = await headers();
  const country = requestHeaders.get("x-vercel-ip-country")?.toUpperCase();

  if (country && PRICING_MARKETS.has(country)) {
    return <PricingKosovo />;
  }

  // All other countries, and unknown locations, see the Sales contact page.
  return <InternationalPricing />;
}
