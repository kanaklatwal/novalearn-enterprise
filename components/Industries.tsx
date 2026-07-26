"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Industries() {
  return (
    <section id="industries" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Domain Expertise"
          title="Curriculum shaped by your industry's actual constraints."
          description="Programs are adapted to the regulatory, technical, and operational realities of the sectors we work in most."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-6 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <industry.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink-900">
                  {industry.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
