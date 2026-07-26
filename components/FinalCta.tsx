"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(255,255,255,0.18),transparent)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to build a capability roadmap for your team?
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            Talk to a consultant about your team&apos;s skill gaps and get a
            proposed curriculum within one business day — no generic sales
            deck, just a plan.
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href="#lead-form" variant="secondary" size="lg" icon>
              Request a demo
            </Button>
            <Button href="#programs" variant="ghost" size="lg">
              Browse programs
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
