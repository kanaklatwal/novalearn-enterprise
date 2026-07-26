"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="What L&D leaders say after the first cohort."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeUp}>
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <Quote
                    className="h-8 w-8 text-brand-200"
                    aria-hidden="true"
                  />
                  <p className="mt-4 text-base leading-relaxed text-ink-900">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
