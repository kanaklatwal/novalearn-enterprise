"use client";

import { motion } from "framer-motion";
import { Clock, Signal } from "lucide-react";
import { PROGRAMS } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Programs() {
  return (
    <section id="programs" className="bg-slate-50 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Program Catalogue"
          title="Tracks built for where your team is headed."
          description="Every track is modular and can be sequenced into a multi-quarter capability roadmap for your organization."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROGRAMS.map((program) => (
            <motion.div key={program.title} variants={fadeUp}>
              <Card className="flex h-full flex-col">
                <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {program.category}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                  {program.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {program.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {program.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-slate-100 pt-5 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Signal className="h-3.5 w-3.5" aria-hidden="true" />
                    {program.level}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
