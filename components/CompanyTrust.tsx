"use client";

import { motion } from "framer-motion";
import { TRUSTED_COMPANIES } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function CompanyTrust() {
  const loopedCompanies = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <section id="clients" className="border-y border-slate-100 bg-white py-14">
      <Container>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400"
        >
          Trusted by L&amp;D teams at growth-stage and enterprise companies
        </motion.p>
      </Container>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-16 pr-16">
          {loopedCompanies.map((company, index) => (
            <span
              key={`${company.name}-${index}`}
              className="flex shrink-0 items-center text-lg font-semibold tracking-tight text-slate-300"
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
