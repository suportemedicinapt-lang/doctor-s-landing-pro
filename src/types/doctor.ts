// Tipos para dados dinâmicos do médico (Med.ID)
// TODO: Conectar com API do MedMarketing Pro

export interface DoctorData {
  nome: string;
  crm: string;
  uf: string;
  especialidade: string;
  anosExperiencia: number;
  cidadeBairro: string;
  bioCurta: string;
  bioCompleta: string[];
  telefone: string;
  whatsapp: string;
  foto?: string;
  redesSociais?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface AreaAtuacao {
  titulo: string;
  descricao: string;
  icone?: string;
}

export interface PassoAtendimento {
  numero: number;
  titulo: string;
  descricao: string;
}

export interface PerguntaFAQ {
  pergunta: string;
  resposta: string;
}

// Dados de exemplo/placeholder para preview
export const doctorPlaceholder: DoctorData = {
  nome: "{{NOME_MEDICO}}",
  crm: "{{CRM}}",
  uf: "{{UF}}",
  especialidade: "{{ESPECIALIDADE}}",
  anosExperiencia: 10, // TODO: substituir por dados dinâmicos
  cidadeBairro: "{{CIDADE_BAIRRO}}",
  bioCurta: "{{BIO_CURTA}}",
  bioCompleta: [
    "Com mais de {{ANOS_EXPERIENCIA}} anos dedicados à {{ESPECIALIDADE}}, minha prática é guiada pelo compromisso com um atendimento humanizado e baseado em evidências científicas.",
    "Formação em instituições de referência e atualização constante permitem oferecer aos meus pacientes as abordagens mais atuais e seguras disponíveis.",
    "Acredito que cada paciente é único e merece atenção individualizada, com escuta ativa e orientações claras sobre sua saúde."
  ],
  telefone: "{{TELEFONE}}",
  whatsapp: "{{WHATSAPP}}",
  foto: undefined, // TODO: substituir por URL da foto do médico
  redesSociais: {
    instagram: "{{INSTAGRAM}}",
    facebook: "{{FACEBOOK}}",
    linkedin: "{{LINKEDIN}}"
  }
};
