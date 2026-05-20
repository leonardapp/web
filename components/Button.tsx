"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium transition-all duration-200";

  const styles = {
    primary: "bg-black text-white hover:bg-slate-800 shadow-sm",
    secondary: "bg-slate-100 text-black hover:bg-slate-200",
    outline:
      "border border-slate-300 text-black hover:bg-black hover:text-white",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${base} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}