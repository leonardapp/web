import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

export default function Logo({
  href = "/",
  className = "",
  size = "md",
  showText = false,
}: LogoProps) {
  const sizeClasses = {
    sm: "h-7",
    md: "h-8",
    lg: "h-10",
  };

  const logo = (
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

  if (!href) return logo;

  return (
    <Link href={href} className="inline-flex items-center">
      {logo}
    </Link>
  );
}