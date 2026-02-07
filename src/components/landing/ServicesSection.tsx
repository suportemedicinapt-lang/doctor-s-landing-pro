import { Stethoscope, Activity, Pill, FileHeart, Users, HeartPulse, FileSearch, ClipboardList } from "lucide-react";
import { doctorData, servicosData } from "@/types/doctor";

// Ícones disponíveis para as áreas de atuação
const iconMap: Record<string, React.ElementType> = {
  Stethoscope: Stethoscope,
  Activity: Activity,
  Pill: Pill,
  FileHeart: FileHeart,
  Users: Users,
  HeartPulse: HeartPulse,
  FileSearch: FileSearch,
  ClipboardList: ClipboardList,
};

// Seção "Áreas de Atuação"
const ServicesSection = () => {
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
            Ofereço atendimento em diversas áreas da {doctorData.especialidade}, 
            sempre com foco na sua saúde e bem-estar.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicosData.map((servico, index) => {
            const IconComponent = iconMap[servico.icone] || Stethoscope;
            
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
                  {servico.titulo}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {servico.descricao}
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