import {
  BarChart3,
  BrainCircuit,
  Building2,
  Cpu,
  Factory,
  Gauge,
  GraduationCap,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  Layers,
  Medal,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import type {
  FaqItem,
  FeatureBadge,
  Industry,
  NavLink,
  ProcessStep,
  Program,
  StatItem,
  Testimonial,
  TrustedCompany,
  ValueProp,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Enterprise Edge", href: "#why-us" },
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
];

export const HERO_BADGES: FeatureBadge[] = [
  { icon: ShieldCheck, label: "Tailored Curriculum" },
  { icon: Users, label: "Industry Insights" },
  { icon: Gauge, label: "Expert Mentorship" },
];

export const TRUSTED_COMPANIES: TrustedCompany[] = [
  { name: "Nimbus Financial" },
  { name: "Orbital Health" },
  { name: "Vertex Manufacturing" },
  { name: "Northgate Retail" },
  { name: "Cascade Logistics" },
  { name: "Meridian Bank" },
  { name: "Solace Energy" },
  { name: "Ironclad Insurance" },
];

export const ENTERPRISE_STATS: StatItem[] = [
  { value: "50,000+", label: "Professionals upskilled", icon: GraduationCap },
  { value: "500+", label: "Practitioner mentors", icon: Users },
  { value: "94%", label: "Program completion rate", icon: Medal },
  { value: "120+", label: "Enterprise partners", icon: Building2 },
  { value: "35+", label: "Countries reached", icon: Network },
  { value: "4.8/5", label: "Average learner rating", icon: Sparkles },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    icon: BrainCircuit,
    title: "Curriculum built with academic rigor",
    description:
      "Every program is co-designed with practitioners and academic partners, structured for direct application to real business problems, not generic theory.",
  },
  {
    icon: Users,
    title: "Live mentorship, not video libraries",
    description:
      "Learners work 1:1 and in small groups with senior practitioners across data, product, engineering, and leadership.",
  },
  {
    icon: LayoutDashboard,
    title: "A command center for L&D",
    description:
      "Track cohort progress, engagement, and business impact in one real-time dashboard built for HR and L&D leaders, not just learners.",
  },
  {
    icon: Layers,
    title: "Tailored to your tech stack",
    description:
      "Curriculum maps to your organization's actual tools, workflows, and skill gaps instead of a one-size-fits-all catalogue.",
  },
  {
    icon: ShieldCheck,
    title: "Verifiable, portable credentials",
    description:
      "Learners graduate with credentials that hold weight — shareable, verifiable, and recognized across the industry.",
  },
  {
    icon: Workflow,
    title: "Measurable business outcomes",
    description:
      "Every cohort ties back to a defined business outcome, reviewed monthly, so leadership sees the return, not just attendance.",
  },
];

export const PROGRAMS: Program[] = [
  {
    title: "Applied Data Science & AI",
    category: "Data & AI",
    duration: "16 weeks",
    level: "Intermediate–Advanced",
    description:
      "Applied machine learning, generative AI systems, and production-grade data pipelines for technical teams.",
    skills: ["Machine Learning", "GenAI Systems", "MLOps", "Data Engineering"],
  },
  {
    title: "Product Management Intensive",
    category: "Product",
    duration: "12 weeks",
    level: "All levels",
    description:
      "Discovery, roadmapping, and outcome-driven metrics for first-time and senior product managers alike.",
    skills: ["Discovery", "Roadmapping", "Metrics", "Stakeholder Alignment"],
  },
  {
    title: "Strategic Leadership for Tech Managers",
    category: "Leadership",
    duration: "10 weeks",
    level: "Senior",
    description:
      "Decision-making frameworks, org design, and cross-functional influence for engineering and technology leaders.",
    skills: ["Org Design", "Decision-Making", "Influence", "Change Management"],
  },
  {
    title: "Business Analytics & Data Storytelling",
    category: "Analytics",
    duration: "10 weeks",
    level: "Beginner–Intermediate",
    description:
      "From SQL fundamentals to executive-ready storytelling, built for cross-functional operators and analysts.",
    skills: ["SQL", "Visualization", "Forecasting", "Executive Reporting"],
  },
  {
    title: "Cloud & DevOps Engineering",
    category: "Engineering",
    duration: "14 weeks",
    level: "Intermediate",
    description:
      "Cloud-native architecture, CI/CD pipelines, and reliability engineering for platform and infrastructure teams.",
    skills: ["Cloud Architecture", "CI/CD", "Observability", "IaC"],
  },
  {
    title: "Cybersecurity for Enterprise Teams",
    category: "Security",
    duration: "12 weeks",
    level: "Intermediate–Advanced",
    description:
      "Threat modeling, secure architecture, and incident response tailored to enterprise risk profiles.",
    skills: ["Threat Modeling", "Secure Architecture", "Incident Response", "Compliance"],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    icon: Landmark,
    name: "Banking & Financial Services",
    description: "Risk analytics, regulatory reporting, and digital-first customer experience.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Life Sciences",
    description: "Clinical data platforms, care analytics, and compliant AI adoption.",
  },
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    description: "Predictive maintenance, supply chain analytics, and IIoT-driven operations.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description: "Demand forecasting, personalization engines, and omnichannel analytics.",
  },
  {
    icon: Cpu,
    name: "Technology & SaaS",
    description: "Platform scaling, ML infrastructure, and product-led growth analytics.",
  },
  {
    icon: BarChart3,
    name: "Insurance & Risk",
    description: "Underwriting models, claims automation, and fraud detection systems.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnose the skill gap",
    description:
      "Our consultants map current capability against your business goals and technical requirements.",
    icon: Target,
  },
  {
    step: "02",
    title: "Co-design the curriculum",
    description:
      "We build a custom learning journey with academic and industry partners, matched to your stack.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Deploy the cohort",
    description:
      "Teams get platform access, orientation, and mentor assignment — live within days, not months.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Measure the impact",
    description:
      "Monthly business reviews and real-time dashboards keep completion and ROI measurable throughout.",
    icon: Gauge,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Within six months of rolling this out, our data engineering team's delivery velocity improved by 40%. The board saw the return immediately.",
    name: "Ananya Rao",
    role: "VP of Engineering",
    company: "Cascade Logistics",
    initials: "AR",
  },
  {
    quote:
      "The blend of academic-grade curriculum and live mentorship is unlike anything else we evaluated. Our engineers now lead ML initiatives independently.",
    name: "Marcus Webb",
    role: "Head of Data Science",
    company: "Orbital Health",
    initials: "MW",
  },
  {
    quote:
      "We onboarded 300 managers across three regions at once. The dashboard made tracking effortless — completion hit 96%, unprecedented for us.",
    name: "Priya Nathan",
    role: "Chief HR Officer",
    company: "Vertex Manufacturing",
    initials: "PN",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How is the curriculum customized for our organization?",
    answer:
      "Our consultants run a skills-gap assessment against your current tech stack, business goals, and team seniority. The curriculum is then adapted from our core program library and co-designed with academic partners, so cohorts train on scenarios that mirror your actual workflows.",
  },
  {
    question: "How quickly can we launch a cohort?",
    answer:
      "Most enterprise cohorts go live within two to three weeks of sign-off — covering platform provisioning, mentor assignment, and orientation. Larger, multi-region rollouts typically take four to six weeks to sequence properly.",
  },
  {
    question: "How do you measure ROI and business impact?",
    answer:
      "Every cohort is tied to defined business outcomes agreed with L&D leadership upfront. Our dashboard tracks completion, engagement, assessment scores, and skill application, with monthly business reviews summarizing impact against those goals.",
  },
  {
    question: "What size teams do you support?",
    answer:
      "We've run cohorts from 15-person pilot teams to multi-thousand-person global rollouts across more than 35 countries. Pricing and delivery model scale with cohort size and complexity.",
  },
  {
    question: "Are the certifications recognized externally?",
    answer:
      "Yes. Credentials are issued jointly with our academic and industry partners, are independently verifiable, and are designed to be shared on professional profiles or included in performance reviews.",
  },
  {
    question: "Can programs run fully remote or hybrid?",
    answer:
      "Both. Live mentorship sessions run virtually by default with global time-zone coverage, and we support in-person intensives for leadership or capstone modules on request.",
  },
];
