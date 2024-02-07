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

export const RESUME_DATA = {
  name: "Pedro Barreto",
  initials: "PB",
  location: "Rio de Janeiro, Brazil",
  locationLink: "Link da Localização",
  about: "Passionate about technology, I believe in innovation's power to bring ideas to life.",
  summary: "For 9 years, I worked in fashion retail as Marketing Director at Pathisa, a pioneering brand in the Haute Couture market. Prioritizing a collaborative team approach,  we developed marketing campaigns that enhanced synergy between our customers, physical stores, and e-commerce platforms, aiming for an omnichannel experience. Embracing a lifelong learner mindset, in 2020, I decided to deepen my technology knowledge by becoming a Full Stack Developer at Trybe. \n This experience paved the way for me to join the Alloha Group, where I actively contributed to numerous microservices in Java with Spring Boot. Recent notable projects include my role as a tech lead at Alloha Fibra, where I led initiatives in API standardization and React Native app development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/8386806?v=4",
  personalWebsiteUrl: "URL do Website Pessoal",
  contact: {
    email: "pedrobarreto@live.com",
    tel: "+55 (21) 99459-3816",
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
    ],
  },
  education: [
    {
      school: "Trybe",
      degree: "• 1-year Full Stack Web Development Program \n •  6-month Java Acceleration Program",
      start: "2020",
      end: "2022",
    },
    {
      school: "PUC-Rio",
      degree: "• Bachelor's Degree in Advertising and Marketing \n • Minor in Entrepreneurship",
      start: "2006",
      end: "2011",
    },
 
  ],
  work: [
    {
      company: "Alloha Fibra",
      link: "https://alloha.com/",
      badges: ["Remote"],
      title: "Lead Java Developer → Full Stack Developer",
      start: "2022",
      end: "2024",
      description: 
      `• As the technical lead, played a key role in API standardization at Alloha Group, developing an API proxy for seamless communication with the Five9 chatbot provider.\n • Contributed significantly to integrating a new white-label mobile application for all 9 brands within the Alloha Fibra group.\n • Played a pivotal role in strategic discussions for B2C E-commerce, leading the "Refer a Friend" project resulting in a 15% sales increase.\n • Initiated and oversaw the API documentation process for seamless integration and partnership synergy.\n • Contributed to frontend development using Vue.js, enhancing user experiences and interface functionalities.\n • Developed and maintained new functionalities in Rest APIs using Java with Spring for robust backend solutions.`
    },
    {
      company: "Pathisa",
      link: "https://www.instagram.com/pathisario/",
      badges: [],
      title: "Marketing Director → Digital Marketing Manager",
      start: "2013",
      end: "2023",
      description: "• Led the marketing team to collaborate with sales teams across 4 physical stores, crafting impactful campaigns and sales initiatives for brand collections.\n • Sales growth strategies integrating physical stores, e-commerce, and consumers.\n• Development of the brand's first E-commerce on the Woocommerce platform.\n • Integration of physical stores ERP and synchronization of Inventory / Products / Orders. \n• Monitoring and creating CRM-integrated flows for the commercial team.\n• Inbound Marketing, SEO and definition of new strategies for acquiring B2C Leads.",
    },
    {
      company: "Enter10!",
      link: "https://vimeo.com/theglowproject",
      badges: [],
      title: "Digital Marketing Manager",
      start: "2011",
      end: "2013",
      description: "• Planning, development and implementation of all online and offline communication strategies.\n• Development of new products and projects.\n• Attracting new partners and sponsors.\n • Event production (planning and execution).",
    },
    {
      company: "PUC-Rio",
      link: "https://www.puc-rio.br/index.html",
      badges: ["Intern"],
      title: "International Student Exchange Coordinator",
      start: "2008",
      end: "2009",
      description: "• I was involved in the project to develop the English version of the university website. \n • Assist foreign students in the program during their stay in Rio de Janeiro.",
    },
  ],
  skills: [
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
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ]
} as const;
