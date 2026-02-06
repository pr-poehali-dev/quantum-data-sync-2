import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FinancialPainSection } from "@/components/financial-pain-section"
import { CalculatorSection } from "@/components/calculator-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { ContrastSection } from "@/components/contrast-section"
import { TechnologySection } from "@/components/technology-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero3D />
        <FinancialPainSection />
        <CalculatorSection />
        <FeaturesSection />
        <AboutSection />
        <ContrastSection />
        <section id="technology">
          <TechnologySection />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}