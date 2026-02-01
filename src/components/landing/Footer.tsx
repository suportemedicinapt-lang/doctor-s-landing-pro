import { Instagram, Facebook, Linkedin, Heart } from "lucide-react";

interface FooterProps {
  nome: string;
  crm: string;
  uf: string;
  especialidade: string;
  redesSociais?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

// Footer da página
// TODO: Conectar props com dados dinâmicos do Med.ID
const Footer = ({ nome, crm, uf, especialidade, redesSociais }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: redesSociais?.instagram, label: "Instagram" },
    { icon: Facebook, href: redesSociais?.facebook, label: "Facebook" },
    { icon: Linkedin, href: redesSociais?.linkedin, label: "LinkedIn" },
  ].filter(link => link.href);

  return (
    <footer className="py-12 bg-foreground text-primary-foreground/80">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Info do médico */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-primary-foreground mb-1">
              Dr(a). {nome}
            </p>
            <p className="text-sm">
              {especialidade} • CRM {crm}/{uf}
            </p>
          </div>

          {/* Redes sociais */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          )}

          {/* Copyright */}
          <div className="text-center md:text-right text-sm">
            <p className="flex items-center justify-center md:justify-end gap-1">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> por{" "}
              <span className="font-medium text-primary-foreground">MedMarketing Pro</span>
            </p>
            <p className="mt-1 text-primary-foreground/60">
              © {currentYear} Todos os direitos reservados
            </p>
          </div>
        </div>

        {/* Disclaimer CFM */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50 max-w-2xl mx-auto">
            Este site tem caráter informativo e não substitui a consulta médica. 
            As informações aqui apresentadas seguem as diretrizes do Conselho Federal de Medicina (CFM).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
