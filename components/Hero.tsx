"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { HERO_BADGES } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" className="bg-white pb-16 pt-10 md:pb-24 md:pt-14">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-brand-50/70 px-6 py-12 sm:px-10 md:px-14 md:py-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-semibold leading-[1.12] text-ink-900 sm:text-5xl"
              >
                Next-Gen{" "}
                <span className="text-brand-600">Expertise</span> For Your{" "}
                <span className="text-brand-600">Enterprise</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-md text-lg leading-relaxed text-slate-600"
              >
                programs, live mentorship, and real-time analytics —
                designed around your organization&apos;s actual skill gaps.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                {HERO_BADGES.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2
                      className="h-5 w-5 text-emerald-500"
                      aria-hidden="true"
                    />
                    {badge.label}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-9">
                <Button href="#lead-form" size="lg" icon>
                  Enquire Now
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto max-w-md">
      <svg
        viewBox="0 0 420 380"
        className="w-full drop-shadow-xl"
        role="img"
        aria-label="Illustration of two professionals collaborating with a laptop and growth chart"
      >
        <defs>
          <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2f5bff" />
            <stop offset="100%" stopColor="#1c3fed" />
          </linearGradient>
          <linearGradient id="heroCoatA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#16277a" />
            <stop offset="100%" stopColor="#0d1747" />
          </linearGradient>
          <linearGradient id="heroCoatB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c3fed" />
            <stop offset="100%" stopColor="#16299a" />
          </linearGradient>
        </defs>

        <circle cx="210" cy="190" r="170" fill="url(#heroBg)" opacity="0.08" />
        <circle cx="210" cy="190" r="130" fill="url(#heroBg)" opacity="0.08" />

        <rect x="55" y="290" width="310" height="14" rx="7" fill="#dce8ff" />

        <g transform="translate(70,120)">
          <rect x="-6" y="60" width="120" height="150" rx="14" fill="url(#heroCoatA)" />
          <circle cx="54" cy="30" r="34" fill="#f4c9a1" />
          <path
            d="M20 22c0-22 18-38 34-38s34 16 34 38-16 34-34 34-34-14-34-34z"
            fill="#2a2033"
          />
          <rect x="18" y="94" width="72" height="60" rx="8" fill="#eef4ff" opacity="0.9" />
        </g>

        <g transform="translate(215,100)">
          <rect x="0" y="70" width="130" height="170" rx="14" fill="url(#heroCoatB)" />
          <circle cx="62" cy="34" r="36" fill="#e2a879" />
          <path
            d="M22 26c0-24 18-42 40-40 22 2 38 20 36 42-1 8-6 12-10 12-2-14-14-24-26-24-14 0-26 10-30 22-6-2-10-6-10-12z"
            fill="#231a12"
          />
        </g>

        <g transform="translate(120,150)">
          <rect
            x="0"
            y="0"
            width="150"
            height="98"
            rx="10"
            fill="#ffffff"
            stroke="#d7e2ff"
            strokeWidth="2"
          />
          <rect x="14" y="16" width="60" height="8" rx="4" fill="#b8d0ff" />
          <polyline
            points="14,72 40,52 62,64 88,34 122,44"
            fill="none"
            stroke="#2f5bff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="122" cy="44" r="5" fill="#1c3fed" />
        </g>

        <g transform="translate(285,60)">
          <circle cx="0" cy="0" r="26" fill="#ffffff" stroke="#d7e2ff" strokeWidth="2" />
          <path
            d="M-9 1l6 6 12-14"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <g transform="translate(48,60)">
          <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#d7e2ff" strokeWidth="2" />
          <path
            d="M-6 -6l12 12M-6 6l12 -12"
            fill="none"
            stroke="#2f5bff"
            strokeWidth="0"
          />
          <circle cx="0" cy="0" r="6" fill="#2f5bff" />
        </g>
      </svg>
    </div>
  );
}
