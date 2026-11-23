import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Download HOXXES Apps',
  description: 'Access HOXXES applications for web, Android and iOS devices, with download options for supported platforms.',
  alternates: { canonical: '/download' },
  openGraph: { title: 'Download HOXXES Apps', description: 'Access HOXXES applications for web, Android and iOS devices, with download options for supported platforms.', url: '/download', type: "website" },
};

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
