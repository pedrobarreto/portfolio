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
  about: "Apaixonado por tecnologia, acredito no poder da inovação para trazer ideias à vida.",
  summary: "Sou o Fundador e CEO da Aumor Perfeito, uma startup dedicada a causar um impacto positivo ao facilitar a adoção de animais de estimação e reduzir o número de animais de rua. Através da Aumor Perfeito, conectamos potenciais adotantes com ONGs responsáveis, criando uma comunidade onde cada animal de estimação pode encontrar um lar amoroso. \n Durante 9 anos, trabalhei no varejo de moda como Diretor de Marketing na Pathisa, uma marca pioneira no mercado de alta costura. Priorizando uma abordagem colaborativa em equipe, desenvolvemos campanhas de marketing que aumentaram a sinergia entre nossos clientes, lojas físicas e plataformas de e-commerce, visando uma experiência omnichannel. Adotando uma mentalidade de aprendizado contínuo, em 2020 decidi aprofundar meu conhecimento em tecnologia, tornando-me Desenvolvedor Full Stack na Trybe. \n Essa experiência abriu caminho para eu ingressar no Grupo Alloha, onde contribui ativamente para numerosos microsserviços em Java com Spring Boot. Projetos recentes notáveis incluem meu papel como líder técnico na Alloha Fibra, onde liderei iniciativas de padronização de APIs e desenvolvimento de aplicativos em React Native.",
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
      badges: ["Fundador", "CEO"],
      title: "Fundador",
      start: "2024",
      end: "Presente",
      description: 
      `• Fundou e atualmente lidera a Aumor Perfeito, uma startup dedicada a facilitar a adoção de animais de estimação e reduzir o número de animais de rua.\n • Desenvolveu uma plataforma que conecta potenciais adotantes com ONGs responsáveis, criando uma comunidade onde cada animal de estimação pode encontrar um lar amoroso.\n • Conseguiu integrar mais de 20 ONGs no Brasil e 10 em Portugal nos primeiros 10 dias de lançamento.\n • Parte do programa AWS Startups, aproveitando tecnologias de nuvem para soluções escaláveis.\n • Liderando estratégias de marketing e crescimento para expandir o alcance e impacto da plataforma.\n • Inovando continuamente e implementando novos recursos com base no feedback dos usuários e nas necessidades do mercado.`
    },
    {
      company: "Alloha Fibra",
      link: "https://alloha.com/",
      badges: ["Remoto"],
      title: "Desenvolvedor Java Líder → Desenvolvedor Full Stack",
      start: "2022",
      end: "2024",
      description: 
      `• Como líder técnico, desempenhou um papel fundamental na padronização de APIs no Grupo Alloha, desenvolvendo um proxy de API para comunicação contínua com o provedor de chatbot Five9.\n • Contribuiu significativamente para a integração de um novo aplicativo móvel white-label para todas as 9 marcas do grupo Alloha Fibra.\n • Desempenhou um papel crucial em discussões estratégicas para o E-commerce B2C, liderando o projeto "Indique um Amigo", resultando em um aumento de 15% nas vendas.\n • Iniciou e supervisionou o processo de documentação de APIs para integração contínua e sinergia de parcerias.\n • Contribuiu para o desenvolvimento frontend usando Vue.js, melhorando as experiências do usuário e funcionalidades da interface.\n • Desenvolveu e manteve novas funcionalidades em APIs REST usando Java com Spring para soluções robustas de backend.`
    },
    {
      company: "Pathisa",
      link: "https://www.instagram.com/pathisario/",
      badges: [],
      title: "Diretor de Marketing → Gerente de Marketing Digital",
      start: "2013",
      end: "2023",
      description: "• Liderou a equipe de marketing para colaborar com equipes de vendas em 4 lojas físicas, criando campanhas e iniciativas de vendas impactantes para as coleções da marca.\n • Estratégias de crescimento de vendas integrando lojas físicas, e-commerce e consumidores.\n• Desenvolvimento do primeiro E-commerce da marca na plataforma Woocommerce.\n • Integração do ERP das lojas físicas e sincronização de Inventário / Produtos / Pedidos. \n• Monitoramento e criação de fluxos integrados ao CRM para a equipe comercial.\n• Inbound Marketing, SEO e definição de novas estratégias para aquisição de Leads B2C.",
    },
    {
      company: "Enter10!",
      link: "https://vimeo.com/theglowproject",
      badges: [],
      title: "Gerente de Marketing Digital",
      start: "2011",
      end: "2013",
      description: "• Planejamento, desenvolvimento e implementação de todas as estratégias de comunicação online e offline.\n• Desenvolvimento de novos produtos e projetos.\n• Atração de novos parceiros e patrocinadores.\n • Produção de eventos (planejamento e execução).",
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
    "React Native",
    "Java",
    "MySQL",
    "API REST",
    "Vue.js",
    "Spring Boot",
    "Hibernate",
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
