import { Calendar, ClipboardList, HeartHandshake } from "lucide-react";

// Seção "Como funciona o atendimento"
const StepsSection = () => {
  const passos = [
    {
      numero: 1,
      titulo: "Agendamento",
      descricao: "Entre em contato por WhatsApp ou telefone para agendar sua consulta no horário mais conveniente para você."
    },
    {
      numero: 2,
      titulo: "Consulta e Avaliação",
      descricao: "Durante a consulta, farei uma avaliação completa, ouvindo suas queixas e entendendo seu histórico de saúde."
    },
    {
      numero: 3,
      titulo: "Acompanhamento",
      descricao: "Após a consulta, você receberá orientações claras e, se necessário, um plano de acompanhamento personalizado."
    }
  ];

  const icones = [Calendar, ClipboardList, HeartHandshake];

  return (
    <section id="atendimento" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header da seção */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Passo a Passo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Como funciona o atendimento
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo simples e acolhedor, pensado para facilitar seu acesso ao cuidado médico.
          </p>
        </div>

        {/* Timeline de passos */}
        <div className="relative max-w-4xl mx-auto">
          {/* Linha conectora (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8">
            {passos.map((passo, index) => {
              const IconComponent = icones[index] || Calendar;
              
              return (
                <div
                  key={index}
                  className="relative text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Número e ícone */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    {/* Círculo com ícone */}
                    <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center shadow-lg shadow-primary/20 relative z-10">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    {/* Badge do número */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-primary">{passo.numero}</span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {passo.titulo}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {passo.descricao}
                    </p>
                  </div>

                  {/* Seta para próximo (mobile) */}
                  {index < passos.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-lg">↓</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Info adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-accent/50 border border-border/50 rounded-full px-6 py-3">
            <span className="text-2xl">💬</span>
            <p className="text-muted-foreground">
              Dúvidas? Entre em contato antes de agendar. Estou à disposição para ajudar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;