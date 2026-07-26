import { Hero } from "@/components/Hero";
import { CompanyTrust } from "@/components/CompanyTrust";
import { Statistics } from "@/components/Statistics";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Programs } from "@/components/Programs";
import { Industries } from "@/components/Industries";
import { LearningProcess } from "@/components/LearningProcess";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { LeadCapture } from "@/components/LeadCapture";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyTrust />
      <Statistics />
      <WhyChooseUs />
      <Programs />
      <Industries />
      <LearningProcess />
      <Testimonials />
      <Faq />
      <FinalCta />
      <LeadCapture />
    </>
  );
}
