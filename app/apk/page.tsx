"use client";

import { useState } from "react";

export default function ApkPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">

      {/* LOADER */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-black/10 z-20">
          <div className="text-sm text-slate-600 animate-pulse">
            Loading APK System...
          </div>
        </div>
      )}

      {/* IFRAME */}
      <iframe
        src="https://hoxxes.app/"
        className="absolute inset-0 w-full h-full border-0"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />

    </div>
  );
}