import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin } from "lucide-react";

interface FinalCTAProps {
  nome: string;
  especialidade: string;
  cidadeBairro: string;
  telefone: string;
  whatsapp: string;
}

// Seção Final com CTA
// TODO: Conectar props com dados dinâmicos do Med.ID
const FinalCTA = ({ nome, especialidade, cidadeBairro, telefone, whatsapp }: FinalCTAProps) => {
  // TODO: substituir por link dinâmico do WhatsApp
  const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=Olá, gostaria de agendar uma consulta com Dr(a). ${nome}.`;

  return (
    <section id="contato" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Card principal */}
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border shadow-xl text-center animate-scale-in">
            {/* Ícone decorativo */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-hero flex items-center justify-center shadow-lg">
              <span className="text-3xl">🩺</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cuide da sua saúde com{" "}
              <span className="text-primary">atenção e clareza</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              {/* TODO: substituir por mensagem dinâmica */}
              Estou aqui para ajudar você a cuidar da sua {especialidade.toLowerCase()}. 
              Entre em contato e vamos conversar sobre suas necessidades.
            </p>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                className="text-lg px-8 py-6 transition-all duration-300"
                asChild
              >
                <a href={`tel:${telefone.replace(/\D/g, '')}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar agora
                </a>
              </Button>
            </div>

            {/* Info de localização */}
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{cidadeBairro}</span>
            </div>
          </div>

          {/* Info adicional */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Dr(a). {nome} • {especialidade}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
