"use client";

import { motion } from "framer-motion";
import { VALUE_PROPS } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why NovaLearn Enterprise"
          title="Built for L&D leaders who answer to a P&L."
          description="Not a course catalogue. An operating system for building capability at scale, with the reporting to prove it worked."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {VALUE_PROPS.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Card className="h-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
