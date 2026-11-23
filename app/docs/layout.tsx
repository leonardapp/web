import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOXXES Product Documentation",
  robots: { index: false, follow: true },
};

export default function DocumentationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
