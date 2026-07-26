"use client";

import { motion } from "framer-motion";
import { Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/LeadForm";
import { fadeUp, slideInLeft, viewportOnce } from "@/lib/motion";

const REASSURANCES = [
  { icon: Clock3, text: "Response within 1 business day" },
  { icon: ShieldCheck, text: "No spam — sales conversations only" },
  { icon: Sparkles, text: "Custom curriculum proposal, not a generic deck" },
];

export function LeadCapture() {
  return (
    <section id="lead-form" className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:grid-cols-2 md:gap-16 md:p-14">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Talk to Us
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              Get a program built around your skill gaps.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              Tell us about your team and what you&apos;re trying to solve. A
              consultant will follow up with a proposed curriculum and
              timeline.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {REASSURANCES.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 shadow-soft">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft sm:p-8"
          >
            <LeadForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
