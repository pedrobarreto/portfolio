import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  PedroLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { InstagramIcon, YoutubeIcon } from "lucide-react";

export const RESUME_DATA_PT = {
  name: "Pedro Barreto",
  initials: "PB",
  location: "Rio de Janeiro, Brasil",
  locationLink: "Link da Localização",
  about: "Desenvolvedor Full Stack com visão estratégica e expertise em marketing digital.",
  summary: "Sou o fundador do app Aumor Perfeito, desenvolvido em React Native para conectar pessoas interessadas em adotar animais a ONGs responsáveis. Também sou cofundador do canal no YouTube 'Papo e Ideias', onde discutimos tecnologia e negócios. Com mais de 10 anos de experiência em marketing digital, desenvolvi e integrei estratégias omnichannel que unem lojas físicas, plataformas de e-commerce e consumidores. Como desenvolvedor, acumulo mais de 4 anos de experiência em aplicações backend, utilizando tecnologias como Java com SpringBoot e Node.js, além de experiência significativa no frontend com React.",
  avatarUrl: "https://avatars.githubusercontent.com/u/8386806?v=4",
  personalWebsiteUrl: "URL do Website Pessoal",
  contact: {
    email: "pedrobarreto@live.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/pedrobarreto",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/barreto-pedro/?locale=en_US",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://instagram.com/pedrob",
        icon: InstagramIcon,
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@papoeideias",  
        icon: YoutubeIcon,
      },
    ],
  },
  education: [
    {
      school: "Trybe",
      degree: "• Programa de Desenvolvimento Web Full Stack de 1 ano \n • Programa de Aceleração em Java de 6 meses",
      start: "2020",
      end: "2022",
    },
    {
      school: "PUC-Rio",
      degree: "• Bacharelado em Publicidade e Propaganda \n • Minor em Empreendedorismo",
      start: "2006",
      end: "2011",
    },
 
  ],
  work: [
    {
      company: "Aumor Perfeito",
      link: "https://www.aumorperfeito.com.br/",
      badges: ["Fundador"],
      title: "Fundador",
      start: "2024",
      end: "O momento",
      description: 
        `• Criei um aplicativo em React Native dedicado a facilitar a adoção de animais de rua, conectando pessoas interessadas em adotar com ONGs responsáveis.\n • Já estamos monitorando mais de 20 ONGs no Brasil e 10 em Portugal.\n • Aprovado no programa AWS Startups`
    },
    {
      company: "Papo e Ideias Podcast",
      link: "https://www.youtube.com/@papoeideias",
      badges: ["Cofundador"],
      title: "Youtube Host",
      start: "2024",
      end: "o momento",
      description:
        "Discussões semanais sobre tecnologia no canal do YouTube 'Papo e Ideias':\n\n" +
        "• 1000 inscritos em apenas 15 dias.\n" +
        "• Desenvolvimento de estratégias de engajamento e crescimento, resultando em um aumento de 300% nas visualizações.\n"
    },
    {
      company: "Alloha Fibra",
      link: "https://alloha.com/",
      badges: ["Remoto"],
      title: "Tech Lead → Desenvolvedor Java",
      start: "2022",
      end: "2024",
      description: 
      `• Atuação no desenvolvimento de uma API Proxy em Java para padronização dos dados e integração com o provedor de chatbot Five9.\n
      • Tech Lead do aplicativo white-label em React Native, unificando 4 marcas e otimizando custos de manutenção.\n
      • Criei um serviço para geração de cupons de "Indique um Amigo" no E-commerce B2C, resultando em um aumento de vendas de 15%.\n
      • Participei do desenvolvimento e implementação de novas funcionalidades em APIs REST usando Java com Spring para soluções robustas de backend.`
    },
    {
      company: "Pathisa",
      link: "https://www.instagram.com/pathisario/",
      badges: [],
      title: "Diretor de Marketing → Gerente de Marketing Digital",
      start: "2013",
      end: "2023",
      description: "• Estratégias de crescimento de vendas integrando lojas físicas, e-commerce e consumidores.\n• Desenvolvimento do primeiro E-commerce da marca na plataforma Woocommerce.\n • Integração do ERP das lojas físicas e sincronização de Inventário / Produtos / Pedidos. \n• Monitoramento e criação de fluxos integrados ao CRM para a equipe comercial.\n• Inbound Marketing, SEO e definição de novas estratégias para aquisição de Leads B2C.",
    },
    {
      company: "Enter10!",
      link: "https://vimeo.com/theglowproject",
      badges: [],
      title: "Gerente de Marketing Digital",
      start: "2011",
      end: "2013",
      description: "• Planejamento, desenvolvimento e implementação de todas as estratégias de comunicação online e offline.\n• Atração de novos parceiros e patrocinadores.\n • Produção de eventos (planejamento e execução).",
    },
    {
      company: "PUC-Rio",
      link: "https://www.puc-rio.br/index.html",
      badges: ["Estagiário"],
      title: "Coordenação de Intercâmbio de Estudantes Internacionais",
      start: "2008",
      end: "2009",
      description: "• Participei do projeto de desenvolvimento da versão em inglês do site da universidade. \n • Auxiliei os estudantes estrangeiros no programa durante sua estadia no Rio de Janeiro.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Java",
    "React/Next.js/React Native",
    "Node.js",
    "Spring Boot",
    "AWS",
    "Docker"
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Projeto Paralelo",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "Uma plataforma para construir e expandir seu negócio online",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ]
} as const;
