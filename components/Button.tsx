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
    primary:
      "bg-[#88d21a] text-[#17210c] hover:bg-[#76b915] shadow-sm",

    secondary:
      "bg-[#f5fce9] text-[#34520f] border border-[#e9f8d0] hover:bg-[#e9f8d0]",

    outline:
      "border border-[#88d21a] text-[#26351a] hover:bg-[#88d21a] hover:text-[#17210c]",
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