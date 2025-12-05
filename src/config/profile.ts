export const profile = {
  name: "José Ricardo Alves Figueirôa",
  title: "Senior Fullstack Developer",
  
  contact: {
    email: "josericardoaf@gmail.com",
    whatsapp: "https://wa.me/qr/ES5VM3XKQGUXE1",
  },
  
  social: {
    linkedin: "https://www.linkedin.com/in/alves-figueiroa",
    github: "https://github.com/ze-alves-figueiroa",
  },
  
  photo: "/profile.jpg",
  
  about: "Senior fullstack developer with solid experience in backend development and strong fullstack capability — including cloud infrastructure and frontend interfaces. Fast learner with excellent technical skills.",
  
  experience: [
    {
      role: "Senior Fullstack Developer",
      company: "Jusfy",
      location: "Brazil",
      url: "https://jusfy.com.br/",
      period: "2024 — Present",
      highlights: [
        "Platform squad handling thousands of MAU and DAUs",
        "Building and scaling lawtech solutions for legal automation",
      ],
      technologies: ["Node.js", "TypeScript", "React", "PostgreSQL", "AWS"],
    },
    {
      role: "Backend Developer",
      company: "Beyond Co.",
      location: "Brazil",
      url: "https://beyondcompany.com.br/",
      period: "Feb 2022 — 2024",
      highlights: [
        "Technical owner of legal automation platform, scaling from 10 to 200 client contracts",
        "Scaled platform to serve 1,000+ daily active users across multiple organizations",
        "Designed backend services and RPA flows handling 2,000+ daily automated runs",
        "Improved automation success rates from 84% to 92%",
        "Modernized NodeJS codebase: 3x faster startup, fixed hot reload, migrated module system",
      ],
      technologies: ["Node.js", "TypeScript", "Vue.js", "Puppeteer", "BullMQ", "RabbitMQ", "GCP", "Docker"],
    },
    {
      role: "Fullstack Developer",
      company: "Navalport",
      location: "Brazil",
      url: "https://www.navalport.com/",
      period: "Oct 2022 — Jun 2023",
      highlights: [
        "Led development of mooring monitoring system reducing maneuvering risks",
        "Built satellite-based vessel tracking system for real-time logistics",
        "Developed interactive dashboards and operational reports with D3.js",
        "Designed operational communication platform with real-time feed and chat",
      ],
      technologies: ["Node.js", "TypeScript", "Angular", "D3.js", "PostgreSQL", "AWS Amplify"],
    },
    {
      role: "Fullstack Developer",
      company: "Ausy / Orange",
      location: "France",
      url: "https://www.ausy.fr",
      period: "Mar 2021 — Sep 2021",
      highlights: [
        "Designed architecture for Tests as a Service platform enabling SmartTV testing",
        "Implemented microservice in Java Spring Boot for resource allocation",
        "Developed Angular frontend integrating cameras and SmartTVs",
      ],
      technologies: ["Angular", "TypeScript", "Java Spring Boot", "Docker", "IoT"],
    },
    {
      role: "Fullstack Developer",
      company: "Navalport",
      location: "Brazil",
      url: "https://www.navalport.com/",
      period: "Jul 2020 — Jul 2021",
      highlights: [
        "Developed port security systems integrating AIS vessel detection and mooring monitoring",
        "Implemented DSP algorithms for vessel speed and docking approach calculations",
        "Built real-time dashboards for port operators decision-making",
      ],
      technologies: ["Node.js", "Angular", "PostgreSQL", "IoT", "DSP", "D3.js", "AWS"],
    },
  ],
  
  projects: [
    {
      name: "CargoSight",
      client: "Gerdau",
      description: "B2B SaaS using computer vision to monitor industrial areas and detect operational risks in real time — missing PPE, hazardous zones, suspended load movement.",
      highlights: [
        "Won 2nd place in University of Pernambuco's innovation program",
        "Validated PoC at Gerdau's steel plant, later sold to two ports",
        "Integrated IP cameras, CNNs, and IoT layers for automated alerts",
      ],
      technologies: ["Python", "Flask", "Computer Vision", "NestJS", "React", "MongoDB"],
    },
  ],
  
  education: [
    {
      degree: "Master's in Computer Engineering",
      institution: "Polytech Côte D'Azur",
      url: "https://polytech.univ-cotedazur.fr/",
      highlights: [
        "Exchange Program",
        "Research on Simulation and Testing for Autonomous Vehicles with Inria",
      ],
    },
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Federal University of Pernambuco",
      url: "https://portal.cin.ufpe.br/",
      gpa: "8.8/10",
      highlights: [
        "Teaching Assistant in Logic and Computation Theory",
        "Scientific Research in Logic",
      ],
    },
  ],
  
  skills: [
    "JavaScript", "TypeScript", "Node.js", "NestJS", "Express",
    "GCP", "AWS", "Puppeteer", "RabbitMQ", "PostgreSQL",
    "Angular", "Docker", "Java Spring Boot", "NoSQL",
  ],
  
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "French", level: "Fluent" },
  ],
} as const;

export type Profile = typeof profile;
