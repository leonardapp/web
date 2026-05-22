export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      {/* BASE */}
      <div className="absolute inset-0 bg-white" />

      {/* MAIN GLOW */}
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[950px] h-[500px] bg-emerald-500/80 blur-[100px] rounded-full" />

      {/* RIGHT GLOW */}
      <div className="absolute top-[20%] right-[-150px] w-[700px] h-[400px] bg-emerald-400/70 blur-[120px] rounded-full" />

      {/* LEFT DEPTH */}
      <div className="absolute top-[45%] left-[-150px] w-[600px] h-[350px] bg-emerald-300/60 blur-[120px] rounded-full" />

    </div>
  );
}