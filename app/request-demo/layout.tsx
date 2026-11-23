import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Request a HOXXES Demo',
  description: 'Request a personalized HOXXES demo and explore how connected POS, ordering, kitchen operations and business management can support your business.',
  alternates: { canonical: '/request-demo' },
  openGraph: { title: 'Request a HOXXES Demo', description: 'Request a personalized HOXXES demo and explore how connected POS, ordering, kitchen operations and business management can support your business.', url: '/request-demo', type: "website" },
};

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
