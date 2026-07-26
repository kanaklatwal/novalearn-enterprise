"use client";

import { motion } from "framer-motion";
import { ENTERPRISE_STATS } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Statistics() {
  return (
    <section id="stats" className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(47,91,255,0.08),transparent)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="By the Numbers"
          title="Impact you can put in a board deck."
          description="Every program ties back to measurable outcomes — completion, engagement, and business velocity, not just seat time."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3"
        >
          {ENTERPRISE_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft transition-colors hover:border-brand-300"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <stat.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-display text-3xl font-semibold text-ink-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
