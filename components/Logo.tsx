type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

export default function Logo({
  className = "",
  size = "md",
  showText = false,
}: LogoProps) {
  const sizeClasses = {
    sm: "h-7",
    md: "h-8",
    lg: "h-10",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="https://hoxxes.app/images/Logo"
        alt="Hoxxes"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />

      {showText && (
        <span className="text-lg font-semibold tracking-tight text-slate-900">
          Hoxxes
        </span>
      )}
    </div>
  );
}