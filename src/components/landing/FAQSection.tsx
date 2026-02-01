import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { PerguntaFAQ } from "@/types/doctor";

interface FAQSectionProps {
  especialidade: string;
  perguntas?: PerguntaFAQ[];
}

// Seção FAQ
// TODO: Conectar props com dados dinâmicos do Med.ID
const FAQSection = ({ especialidade, perguntas }: FAQSectionProps) => {
  // TODO: substituir por perguntas dinâmicas baseadas na especialidade
  const perguntasDefault: PerguntaFAQ[] = perguntas || [
    {
      pergunta: "Como funciona a primeira consulta?",
      resposta: "Na primeira consulta, farei uma avaliação completa do seu histórico de saúde, ouvirei suas queixas e realizarei o exame clínico necessário. É um momento para conhecer você melhor e entender suas necessidades. Reserve aproximadamente 40 a 60 minutos para esse encontro."
    },
    {
      pergunta: "Quanto tempo dura uma consulta?",
      resposta: "As consultas têm duração média de 30 a 50 minutos, dependendo da complexidade do caso. Acredito que uma boa consulta requer tempo para ouvir, examinar e explicar com calma."
    },
    {
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta: "Aceito pagamento via cartão de crédito, débito, PIX e dinheiro. Sobre convênios, entre em contato para verificar se atendo pelo seu plano de saúde."
    },
    {
      pergunta: "É possível fazer teleconsulta?",
      resposta: "Sim, ofereço teleconsulta para pacientes que já realizaram uma primeira avaliação presencial. A teleconsulta é adequada para retornos e acompanhamentos, seguindo as normas do CFM."
    },
    {
      pergunta: "Preciso levar algum documento ou exame na consulta?",
      resposta: "Sim, é importante trazer documento de identidade, cartão do convênio (se aplicável) e todos os exames recentes que você tiver. Isso ajuda a ter uma visão mais completa da sua saúde."
    },
    {
      pergunta: "Como posso remarcar ou cancelar minha consulta?",
      resposta: "Para remarcar ou cancelar, entre em contato por WhatsApp ou telefone com pelo menos 24 horas de antecedência. Isso permite que outras pessoas possam ocupar o horário liberado."
    },
    {
      pergunta: `O que esperar do tratamento em ${especialidade}?`,
      resposta: "O tratamento é sempre individualizado e baseado em uma avaliação cuidadosa. Após a consulta, explicarei as opções disponíveis, seus benefícios e possíveis efeitos. Cada caso é único e o acompanhamento é fundamental para bons resultados."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 gradient-soft">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Coluna de texto */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Dúvidas Frequentes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Perguntas que você pode ter
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Reuni aqui as dúvidas mais comuns dos meus pacientes. 
              Se sua pergunta não estiver aqui, entre em contato que terei prazer em ajudar.
            </p>

            {/* Ilustração ou info extra */}
            <div className="bg-card rounded-xl p-6 border shadow-sm mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Ainda tem dúvidas?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Entre em contato por WhatsApp ou telefone. 
                    Minha equipe está pronta para ajudar você.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion de FAQs */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Accordion type="single" collapsible className="space-y-3">
              {perguntasDefault.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
