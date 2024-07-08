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

export const RESUME_DATA = {
  name: "Pedro Barreto",
  initials: "PB",
  location: "Rio de Janeiro, Brazil",
  locationLink: "Link da Localização",
  about: "Full Stack Developer with a strategic mindset and a strong background in digital marketing.",
  summary: "Founder of the Aumor Perfeito app in React Native, connecting adopters with responsible NGOs to reduce stray animals. Co-founder of the 'Papo e Ideias' YouTube channel, focused on technology and business discussions. With over 10 years in digital marketing, implemented omnichannel strategies integrating physical stores, e-commerce, and consumer engagement. Experienced with backend Java using SpringBoot for over 4 years, including leadership in creating a React Native white label app at Brazil's 4th largest telecom company.",
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
      company: "Aumor Perfeito",
      link: "https://www.aumorperfeito.com.br/",
      badges: ["Founder"],
      title: "Founder",
      start: "2024",
      end: "Present",
      description: 
        `• Developed a React Native app connecting pet adopters with responsible NGOs\n • Successfully onboarded over 30 NGOs across Brazil and Portugal shortly after launch\n • Approved participant in the AWS Startups program`
    },
    {
      company: "Papo e Ideias Podcast",
      link: "https://www.youtube.com/@papoeideias",
      badges: ["Cofounder"],
      title: "Youtube Channel Host",
      start: "2024",
      end: "Present",
      description:
        "Hosts weekly tech news discussions on the YouTube channel 'Papo e Ideias':\n\n" +
        "• Reached 1000 subscribers in just 15 days\n" +
        "• Developed engagement and growth strategies, resulting in a 300% increase in views\n" +
        "• Collaborated with key partners to expand the brand and reach a diverse audience\n"
    },
    {
      company: "Alloha Fibra",
      link: "https://alloha.com/",
      badges: ["Remote"],
      title: "Tech Lead → Java Developer",
      start: "2022",
      end: "2024",
      description: 
      `• Developed a Java API Proxy for data standardization and integration with the Five9 chatbot provider\n
      • Led the development of a new white-label mobile app, consolidating 4 brands and optimizing maintenance costs\n
      • Created a "Refer a Friend" coupon generation service for the B2C E-commerce, resulting in a 15% sales increase\n
      • Contributed to the development and implementation of new functionalities in REST APIs using Java with Spring for robust backend solutions
      `
    },
    {
      company: "Pathisa",
      link: "https://www.instagram.com/pathisario/",
      badges: [],
      title: "Marketing Director → Digital Marketing Manager",
      start: "2013",
      end: "2023",
      description: "• Sales growth strategies integrating physical stores, e-commerce, and consumers.\n• Development of the brand's first E-commerce on the Woocommerce platform.\n • Integration of physical stores ERP and synchronization of Inventory / Products / Orders \n• Monitoring and creating CRM-integrated flows for the commercial team\n• Inbound Marketing, SEO and definition of new strategies for acquiring B2C Leads",
    },
    {
      company: "Enter10!",
      link: "https://vimeo.com/theglowproject",
      badges: [],
      title: "Digital Marketing Manager",
      start: "2011",
      end: "2013",
      description: "• Planning, development and implementation of all online and offline communication strategies\n• Attracting new partners and sponsors\n • Event production (planning and execution)",
    },
    {
      company: "PUC-Rio",
      link: "https://www.puc-rio.br/index.html",
      badges: ["Intern"],
      title: "International Student Exchange Coordinator",
      start: "2008",
      end: "2009",
      description: "• I was involved in the project to develop the English version of the university website \n • Assist foreign students in the program during their stay in Rio de Janeiro",
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
