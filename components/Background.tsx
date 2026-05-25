export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">

      {/* BASE */}
      <div className="absolute inset-0 bg-[#fafafa]" />

      {/* PRIMARY LIGHT */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-200/20 blur-[160px] rounded-full" />

      {/* DEPTH LIGHT */}
      <div className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] bg-slate-200/30 blur-[180px] rounded-full" />

      {/* ACCENT LIGHT */}
      <div className="absolute top-[20%] left-[-250px] w-[700px] h-[700px] bg-cyan-100/20 blur-[170px] rounded-full" />

      {/* NOISE (inline SVG → no external dependency, no flicker) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 right-0 h-[220px] bg-gradient-to-b from-[#fafafa] to-transparent" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#fafafa] to-transparent" />
    </div>
  );
}