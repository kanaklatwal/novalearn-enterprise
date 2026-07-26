"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function LearningProcess() {
  return (
    <section id="process" className="bg-slate-50 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From skill gap to certified team, on a fixed sequence."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6"
        >
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 md:block"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.step} variants={fadeUp} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 shadow-soft">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="mt-5 block font-mono text-xs font-semibold text-brand-400">
                Step {step.step}
              </span>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
