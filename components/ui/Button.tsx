"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:bg-brand-700 focus-visible:outline-brand-600 disabled:opacity-60 disabled:pointer-events-none",
  secondary:
    "bg-white text-ink-900 border border-slate-200 hover:border-brand-300 hover:text-brand-700 focus-visible:outline-brand-600",
  ghost:
    "bg-transparent text-white border border-white/25 hover:border-white hover:bg-white/10 focus-visible:outline-white",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  href,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ x: icon ? 2 : 0 }}
      className="inline-flex items-center gap-2"
    >
      {children}
      {icon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
