export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      {/* BASE - ultra clean neutral */}
      <div className="absolute inset-0 bg-[#fafafa]" />

      {/* PRIMARY SOFT LIGHT (very subtle) */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-200/20 blur-[160px] rounded-full" />

      {/* SECONDARY DEPTH LIGHT */}
      <div className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] bg-slate-200/30 blur-[180px] rounded-full" />

      {/* VERY LIGHT ACCENT (only one extra layer) */}
      <div className="absolute top-[20%] left-[-250px] w-[700px] h-[700px] bg-cyan-100/20 blur-[170px] rounded-full" />

      {/* NOISE (ultra subtle) */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 right-0 h-[220px] bg-gradient-to-b from-[#fafafa] to-transparent" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#fafafa] to-transparent" />

    </div>
  );
}