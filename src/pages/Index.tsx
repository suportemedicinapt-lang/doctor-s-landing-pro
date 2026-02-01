/**
 * MedMarketing Pro - Template de Landing Page para Médicos
 * 
 * Este template está preparado para receber dados dinâmicos do Med.ID
 * Todos os componentes utilizam props para facilitar a integração
 * 
 * PALETAS DE CORES SUGERIDAS (já implementada a Rose Clássico):
 * 
 * 1. Rose Clássico (atual):
 *    --primary: 350 65% 50%
 *    Rosa avermelhado elegante, profissional e acolhedor
 * 
 * 2. Coral Quente:
 *    --primary: 12 76% 61%
 *    Mais alaranjado, transmite energia e calor
 * 
 * 3. Burgundy Sofisticado:
 *    --primary: 340 45% 35%
 *    Tom de vinho profundo, mais sóbrio e tradicional
 * 
 * Para alterar a paleta, modifique as variáveis em src/index.css
 */

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import StepsSection from "@/components/landing/StepsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import { doctorPlaceholder, type DoctorData, type AreaAtuacao } from "@/types/doctor";

// TODO: Substituir por dados dinâmicos do Med.ID
// Exemplo de como os dados serão injetados:
// const doctorData = useDoctorData(medId);
const doctorData: DoctorData = {
  ...doctorPlaceholder,
  // Dados de exemplo para preview - substituir por dados reais
  nome: "Maria Silva",
  crm: "123456",
  uf: "SP",
  especialidade: "Cardiologia",
  anosExperiencia: 12,
  cidadeBairro: "São Paulo, Jardins",
  bioCurta: "Cardiologista com abordagem humanizada e foco em prevenção",
  bioCompleta: [
    "Com mais de 12 anos dedicados à Cardiologia, minha prática é guiada pelo compromisso com um atendimento humanizado e baseado em evidências científicas.",
    "Formação em instituições de referência e atualização constante permitem oferecer aos meus pacientes as abordagens mais atuais e seguras disponíveis.",
    "Acredito que cada paciente é único e merece atenção individualizada, com escuta ativa e orientações claras sobre sua saúde cardiovascular."
  ],
  telefone: "(11) 99999-9999",
  whatsapp: "5511999999999",
  redesSociais: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  }
};

// TODO: Substituir por áreas de atuação dinâmicas baseadas na especialidade
const areasAtuacao: AreaAtuacao[] = [
  {
    titulo: "Check-up Cardiovascular",
    descricao: "Avaliação completa da saúde do coração com exames e orientações personalizadas.",
    icone: "heartPulse"
  },
  {
    titulo: "Hipertensão Arterial",
    descricao: "Diagnóstico e acompanhamento da pressão alta, com foco em controle e qualidade de vida.",
    icone: "activity"
  },
  {
    titulo: "Arritmias Cardíacas",
    descricao: "Investigação e tratamento de alterações no ritmo do coração.",
    icone: "stethoscope"
  },
  {
    titulo: "Prevenção Cardiovascular",
    descricao: "Orientações sobre hábitos saudáveis para prevenir doenças do coração.",
    icone: "fileHeart"
  },
  {
    titulo: "Insuficiência Cardíaca",
    descricao: "Acompanhamento especializado para pacientes com coração enfraquecido.",
    icone: "pill"
  },
  {
    titulo: "Risco Cardiovascular",
    descricao: "Avaliação do risco de eventos cardíacos e estratégias de prevenção.",
    icone: "users"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header fixo */}
      <Header 
        nome={doctorData.nome}
        whatsapp={doctorData.whatsapp}
      />

      {/* Hero Section */}
      <Hero
        nome={doctorData.nome}
        especialidade={doctorData.especialidade}
        cidadeBairro={doctorData.cidadeBairro}
        crm={doctorData.crm}
        uf={doctorData.uf}
        foto={doctorData.foto}
        whatsapp={doctorData.whatsapp}
      />

      {/* Sobre o Médico */}
      <AboutSection
        nome={doctorData.nome}
        especialidade={doctorData.especialidade}
        anosExperiencia={doctorData.anosExperiencia}
        bioCompleta={doctorData.bioCompleta}
      />

      {/* Áreas de Atuação */}
      <ServicesSection
        especialidade={doctorData.especialidade}
        areasAtuacao={areasAtuacao}
      />

      {/* Como Funciona o Atendimento */}
      <StepsSection />

      {/* FAQ */}
      <FAQSection
        especialidade={doctorData.especialidade}
      />

      {/* CTA Final */}
      <FinalCTA
        nome={doctorData.nome}
        especialidade={doctorData.especialidade}
        cidadeBairro={doctorData.cidadeBairro}
        telefone={doctorData.telefone}
        whatsapp={doctorData.whatsapp}
      />

      {/* Footer */}
      <Footer
        nome={doctorData.nome}
        crm={doctorData.crm}
        uf={doctorData.uf}
        especialidade={doctorData.especialidade}
        redesSociais={doctorData.redesSociais}
      />
    </div>
  );
};

export default Index;
