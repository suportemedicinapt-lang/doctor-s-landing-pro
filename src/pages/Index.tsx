/**
 * MedMarketing Pro - Template de Landing Page para Médicos
 * 
 * Template padronizado para o Hub Sites
 * Todos os dados são centralizados em src/types/doctor.ts
 */

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import StepsSection from "@/components/landing/StepsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header fixo */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Sobre o Médico */}
      <AboutSection />

      {/* Áreas de Atuação */}
      <ServicesSection />

      {/* Como Funciona o Atendimento */}
      <StepsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Final */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;