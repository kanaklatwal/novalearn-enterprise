"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left"
      }`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
          light
            ? "border-white/15 bg-white/5 text-brand-200"
            : "border-brand-100 bg-brand-50 text-brand-700"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-3xl font-semibold sm:text-4xl md:text-[2.75rem] md:leading-[1.1] ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
