import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About HOXXES | Restaurant & Retail Technology',
  description: 'Learn about HOXXES and its connected operating platform for restaurant, retail and multi-location business operations.',
  alternates: { canonical: '/about-us' },
  openGraph: { title: 'About HOXXES | Restaurant & Retail Technology', description: 'Learn about HOXXES and its connected operating platform for restaurant, retail and multi-location business operations.', url: '/about-us', type: "website" },
};

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
