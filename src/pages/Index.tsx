import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import StorySection from "@/components/StorySection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <StorySection />
      <BenefitsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCTASection />
      <FooterSection />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
