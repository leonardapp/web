import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Restaurant Management Software & POS Platform',
  description: 'Explore HOXXES restaurant and retail software: POS, QR ordering, online ordering, kitchen display systems, self-service kiosks and centralized business management.',
  alternates: { canonical: '/software' },
  openGraph: { title: 'Restaurant Management Software & POS Platform', description: 'Explore HOXXES restaurant and retail software: POS, QR ordering, online ordering, kitchen display systems, self-service kiosks and centralized business management.', url: '/software', type: "website" },
};

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
