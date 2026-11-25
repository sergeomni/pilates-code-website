import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ReviewsSection } from "@/components/reviews-section"
import { PricingSection } from "@/components/pricing-section"
import { MainOfferSection } from "@/components/main-offer-section"
import { MobileAppSection } from "@/components/mobile-app-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ReviewsSection />
      <PricingSection />
      <MainOfferSection />
      <MobileAppSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}