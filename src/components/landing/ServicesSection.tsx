import { Stethoscope, Activity, Pill, FileHeart, Users, HeartPulse } from "lucide-react";
import type { AreaAtuacao } from "@/types/doctor";

interface ServicesSectionProps {
  especialidade: string;
  areasAtuacao: AreaAtuacao[];
}

// Ícones disponíveis para as áreas de atuação
const iconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  activity: Activity,
  pill: Pill,
  fileHeart: FileHeart,
  users: Users,
  heartPulse: HeartPulse,
};

// Seção "Áreas de Atuação"
// TODO: Conectar props com dados dinâmicos do Med.ID
const ServicesSection = ({ especialidade, areasAtuacao }: ServicesSectionProps) => {
  // TODO: substituir por áreas de atuação dinâmicas
  const areasDefault: AreaAtuacao[] = areasAtuacao.length > 0 ? areasAtuacao : [
    {
      titulo: "Consultas e Avaliações",
      descricao: "Avaliação completa do seu estado de saúde com atenção aos seus sintomas e histórico médico.",
      icone: "stethoscope"
    },
    {
      titulo: "Acompanhamento Contínuo",
      descricao: "Monitoramento regular para manter sua saúde em dia e prevenir complicações.",
      icone: "activity"
    },
    {
      titulo: "Orientação sobre Tratamentos",
      descricao: "Explicações claras sobre opções de tratamento, seus benefícios e cuidados necessários.",
      icone: "pill"
    },
    {
      titulo: "Exames e Diagnósticos",
      descricao: "Solicitação e interpretação de exames para um diagnóstico preciso e seguro.",
      icone: "fileHeart"
    },
    {
      titulo: "Atendimento Familiar",
      descricao: "Cuidado integral considerando o contexto familiar e social de cada paciente.",
      icone: "users"
    },
    {
      titulo: "Promoção de Saúde",
      descricao: "Orientações sobre hábitos saudáveis e prevenção de doenças.",
      icone: "heartPulse"
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 gradient-soft">
      <div className="container">
        {/* Header da seção */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Como posso ajudar você
          </h2>
          <p className="text-muted-foreground text-lg">
            {/* TODO: substituir por descrição dinâmica */}
            Ofereço atendimento em diversas áreas da {especialidade}, 
            sempre com foco na sua saúde e bem-estar.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasDefault.map((area, index) => {
            const IconComponent = iconMap[area.icone || "stethoscope"] || Stethoscope;
            
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Ícone */}
                <div className="w-14 h-14 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Conteúdo */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {area.titulo}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.descricao}
                </p>
              </div>
            );
          })}
        </div>

        {/* Nota CFM */}
        <p className="text-center text-xs text-muted-foreground mt-12 max-w-xl mx-auto">
          * As áreas listadas são informativas. O tratamento adequado será 
          definido após avaliação médica individual.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
