"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow:
                "0 4px 10px rgba(16, 24, 60, 0.06), 0 24px 48px -16px rgba(23, 63, 255, 0.18)",
            }
          : undefined
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`rounded-2xl border border-slate-200 bg-white p-7 shadow-soft ${className}`}
    >
      {children}
    </motion.div>
  );
}
