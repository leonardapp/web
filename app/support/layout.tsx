import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'HOXXES Support Center',
  description: 'Find HOXXES support resources, product documentation and ways to contact the customer assistance team.',
  alternates: { canonical: '/support' },
  openGraph: { title: 'HOXXES Support Center', description: 'Find HOXXES support resources, product documentation and ways to contact the customer assistance team.', url: '/support', type: "website" },
};

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
