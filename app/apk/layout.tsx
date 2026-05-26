import Header from "@/components/Header";

export default function ApkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-transparent text-slate-900">

      {/* HEADER */}
      <header className="shrink-0 z-50">
        <Header />
      </header>

      {/* CONTENT AREA (ONLY SCROLL ZONE) */}
      <main className="flex-1 relative overflow-hidden">
        {children}
      </main>

      {/* FOOTER (optional) */}
      {/* <footer className="shrink-0">
        Footer here
      </footer> */}

    </div>
  );
}