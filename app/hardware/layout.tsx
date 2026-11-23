import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Restaurant POS Terminals & Self-Service Kiosks',
  description: 'Explore HOXXES hardware for restaurant and retail operations, including POS terminals, self-service kiosks and kitchen display technology.',
  alternates: { canonical: '/hardware' },
  openGraph: { title: 'Restaurant POS Terminals & Self-Service Kiosks', description: 'Explore HOXXES hardware for restaurant and retail operations, including POS terminals, self-service kiosks and kitchen display technology.', url: '/hardware', type: "website" },
};

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
