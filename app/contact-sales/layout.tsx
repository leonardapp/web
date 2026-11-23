import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Sales | HOXXES',
  description: 'Talk to the HOXXES sales team about restaurant software, hardware packages, multi-location deployments and business requirements.',
  alternates: { canonical: '/contact-sales' },
  openGraph: { title: 'Contact Sales | HOXXES', description: 'Talk to the HOXXES sales team about restaurant software, hardware packages, multi-location deployments and business requirements.', url: '/contact-sales', type: "website" },
};

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
