import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureBadge {
  icon: LucideIcon;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface TrustedCompany {
  name: string;
}

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Program {
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  skills: string[];
}

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

export interface LeadApiResponse {
  success: boolean;
  message?: string;
  errors?: Partial<Record<keyof LeadFormData, string>>;
}
