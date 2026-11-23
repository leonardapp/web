import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false, noarchive: true },
};

export default function ApkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-transparent text-slate-900">
      <header className="shrink-0 z-50">
        <Header />
      </header>
      <main className="flex-1 relative overflow-hidden">{children}</main>
    </div>
  );
}
