"use client";

export default function ProgressOverlay({
  open,
  progress,
}: {
  open: boolean;
  progress: number;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center">
      <p className="text-white text-sm font-medium mb-4">
        Submitting ticket...
      </p>

      <div className="w-80 h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}