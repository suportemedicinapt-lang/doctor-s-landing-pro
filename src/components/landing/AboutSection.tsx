import { Award, GraduationCap, Heart } from "lucide-react";
import { doctorData } from "@/types/doctor";

// Seção "Sobre o Médico"
const AboutSection = () => {
  const destaques = [
    {
      icone: Award,
      titulo: "Experiência",
      subtitulo: "comprovada"
    },
    {
      icone: GraduationCap,
      titulo: "Formação",
      subtitulo: "especializada"
    },
    {
      icone: Heart,
      titulo: "Cuidado",
      subtitulo: "humanizado"
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Coluna de texto */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Conheça
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Sobre Dr(a). {doctorData.nome}
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {doctorData.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {doctorData.formacao}
              </p>
            </div>

            {/* Cards de destaque */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {destaques.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-accent/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                >
                  <item.icone className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold text-foreground text-sm">{item.titulo}</p>
                  <p className="text-xs text-muted-foreground">{item.subtitulo}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna visual */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-2xl p-8 border shadow-lg">
              {/* Quote decorativo */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl text-primary-foreground">"</span>
              </div>

              <blockquote className="pt-4">
                <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                  Acredito que a medicina vai além do tratamento. É sobre ouvir, compreender e caminhar junto com cada paciente em sua jornada de saúde.
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center">
                    <span className="text-lg">👨‍⚕️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dr(a). {doctorData.nome}</p>
                    <p className="text-sm text-muted-foreground">{doctorData.especialidade}</p>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Decoração */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl bg-primary/5 border border-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;