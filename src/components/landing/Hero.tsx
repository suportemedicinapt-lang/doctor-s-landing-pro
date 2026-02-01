import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield } from "lucide-react";

interface HeroProps {
  nome: string;
  especialidade: string;
  cidadeBairro: string;
  crm: string;
  uf: string;
  foto?: string;
  whatsapp: string;
}

// Componente Hero - Seção principal da landing page
// TODO: Conectar props com dados dinâmicos do Med.ID
const Hero = ({ nome, especialidade, cidadeBairro, crm, uf, foto, whatsapp }: HeroProps) => {
  // TODO: substituir por link dinâmico do WhatsApp
  const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=Olá, gostaria de agendar uma consulta.`;

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            {/* Badge CRM */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                CRM {crm}/{uf}
              </span>
            </div>

            {/* Headline principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Cuidado em{" "}
              <span className="text-primary-foreground/90">{especialidade}</span>
              <br />
              com foco em{" "}
              <span className="underline decoration-primary-foreground/30 decoration-4 underline-offset-8">
                {cidadeBairro}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-primary-foreground/85 max-w-xl leading-relaxed">
              {/* TODO: substituir por bioCurta dinâmica */}
              Atendimento humanizado e baseado em evidências para cuidar da sua saúde com atenção e respeito.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
                asChild
              >
                <a href="#contato">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar consulta
                </a>
              </Button>
            </div>

            {/* Info adicional */}
            <p className="text-sm text-primary-foreground/60 pt-2">
              Atendimento presencial e teleconsulta disponíveis
            </p>
          </div>

          {/* Área da foto */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Container da foto com efeito */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary-foreground/20 backdrop-blur-sm p-2 shadow-glow">
                <div className="w-full h-full rounded-full bg-secondary overflow-hidden flex items-center justify-center">
                  {foto ? (
                    // TODO: substituir por foto dinâmica do médico
                    <img
                      src={foto}
                      alt={`Dr(a). ${nome}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Placeholder quando não há foto
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-4xl text-muted-foreground">👨‍⚕️</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Foto do(a) médico(a)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Badge flutuante */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-full shadow-lg border">
                <p className="font-semibold text-foreground">
                  Dr(a). {nome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decorativa no bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
