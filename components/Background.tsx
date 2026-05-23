export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* BASE */}
      <div className="absolute inset-0 bg-[#f6f7fb]" />

      {/* MAIN HERO GLOW (animated soft drift) */}
      <div className="absolute bottom-[-280px] left-1/2 -translate-x-1/2 w-[1500px] h-[900px] bg-emerald-400/25 blur-[180px] rounded-full animate-pulse" />

      {/* SECOND GLOW */}
      <div className="absolute top-[10%] right-[-320px] w-[1000px] h-[700px] bg-cyan-300/20 blur-[200px] rounded-full animate-[pulse_8s_ease-in-out_infinite]" />

      {/* THIRD DEPTH GLOW */}
      <div className="absolute top-[45%] left-[-320px] w-[900px] h-[600px] bg-emerald-300/20 blur-[200px] rounded-full animate-[pulse_10s_ease-in-out_infinite]" />

     {/* NOISE (premium texture) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 right-0 h-[320px] bg-gradient-to-b from-[#f6f7fb] to-transparent" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#f6f7fb] to-transparent" />

    </div>
  );
}