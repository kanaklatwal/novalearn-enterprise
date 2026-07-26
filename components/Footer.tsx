import type { ReactNode } from "react";
import { ArrowUpRight, GraduationCap, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: ["Curriculum", "Analytics Dashboard", "Mentorship", "Certifications"],
  },
  {
    heading: "Programs",
    links: ["Data Science & AI", "Product Management", "Leadership", "Analytics"],
  },
  {
    heading: "Company",
    links: ["About", "Industries", "Careers", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink-900 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-semibold">
                NovaLearn <span className="text-brand-300">Enterprise</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              An operating system for enterprise learning — curriculum,
              mentorship, and analytics, co-designed with academic and
              industry partners.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href="mailto:hello@novalearn.example" label="Email us">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
              <SocialLink href="https://twitter.com" label="Twitter / X">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {column.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-white/75 transition-colors hover:text-brand-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} NovaLearn Enterprise. Concept
            project inspired by enterprise L&amp;D platforms, for portfolio
            and assignment purposes.
          </span>
          <span>Not affiliated with Accredian.</span>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-brand-400 hover:text-brand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
    >
      {children}
    </a>
  );
}
